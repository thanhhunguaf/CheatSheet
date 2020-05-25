/**
 * Created by 142111. O.O
 */
'use strict';
const crypto = require('crypto');
const _ = require('lodash');
/*
    Console log with color
    Using:  - console.log(colorize('Test 1', JSON.stringify({data: 1})).red);
            - console.log(colorize('Test 2', 'Test 3' ).bgCyan);
            - console.log(colorize(colorize('Test 4').green, colorize('Test 5').magenta).bgWhite);
 */
const colorize = (...args) => ({
    black: `\x1b[30m${args.join(' ')}`,
    red: `\x1b[31m${args.join(' ')}`,
    green: `\x1b[32m${args.join(' ')}`,
    yellow: `\x1b[33m${args.join(' ')}`,
    blue: `\x1b[34m${args.join(' ')}`,
    magenta: `\x1b[35m${args.join(' ')}`,
    cyan: `\x1b[36m${args.join(' ')}`,
    white: `\x1b[37m${args.join(' ')}`,
    bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
    bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
    bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
    bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
    bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
    bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
    bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});

const jQueryRegExp = {
    // RegExp for Numbers
    intRegex: /[0-9 -()+]+$/, // select integers only
    ipRegex: 'bd{1,3}.d{1,3}.d{1,3}.d{1,3}b', // match any ip address
    num0to255Regex: '^([01][0-9][0-9]|2[0-4][0-9]|25[0-5])$', // match number in range 0-255
    num0to999Regex: '^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$', // match number in range 0-999
    floatRegex: '[-+]?([0-9]*.[0-9]+|[0-9]+)', // match ints and floats/decimals
    number1to50Regex: /(^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$)/gm, // Match Any number from 1 to 50 inclusive

    // RegExp for Validation
    emailRegex: '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', // match email address
    creditCardRegex: '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$', // match credit card numbers
    usernameRegex: '/^[a-z0-9_-]{3,16}$/', // match username
    passwordRegex: '/^[a-z0-9_-]{6,18}$/', // match password
    passwordStrengthRegex: /((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/gm, // Match 8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords).
    phoneNumber: /[0-9-()+]{3,20}/, // match elements that could contain a phone number

    // RegExp for Dates
    dateRegex: '/(d{1,2}/d{1,2}/d{4})/gm', // MatchDate (e.g. 21/3/2020)
    dateMMDDYYYRegex: '^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)dd$', // match date in format MM/DD/YYYY
    dateDDMMYYYRegex: '^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)dd$', // match date in format DD/MM/YYYY

    // RegExp for URL's
    urlRegex: '/^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$/', // match a url
    urlSlugRegex: '/^[a-z0-9-]+$/', // match a url slug (letters/numbers/hypens)
    urlRegexExt: '/(https?://)?([da-z.-]+).([a-z.]{2,6})([/w.-=?]*)*/?/', // match a url string (Fixes spaces and querystrings)

    // RegExp for Vowels
    vowelRegex: /^[aeiou]/, // select vowels only

    // RegExp for Whitespace
    whiteSpaceRegex: '^[ t]+', // select whitespace
    whiteSpaceTabsRegex: '^[ t]+|[ t]+$', // select whitespace and tabs
    whiteSpaceLineBreakRegex: '[ trn]', // whitespace and linebreaks
    newLineToBr: function (str) {
        return str.replace(/(rn|[rn])/g, '');
    }, // replace newline characters with tags

    // RegExp for Domain Names
    domainHTTPRegex: /(.*?)[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm, // match domain name (with HTTP)
    domainWWWRegex: /[^w{3}.]([a-zA-Z0-9]([a-zA-Z0-9-]{0,65}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}/igm, // match domain name (www. only)
    domainAlternativeRegex: /(.*?).(com|net|org|info|coop|int|com.au|co.uk|org.uk|ac.uk|)/igm, // match domain name (alternative)
    subDomainRegex: '/(http://|https://)?(www.|dev.)?(int.|stage.)?(travel.)?(.*)+?/igm', // match sub domains: www, dev, int, stage, int.travel, stage.travel

    // RegExp for Images
    imageRegex: /([^s]+(?=.(jpg|gif|png)).2)/gm, // Match jpg, gif or png image
    imgTagsRegex: '//ig', // match all images

    // Other Useful jQuery RegExp
    rgbRegex: /^rgb((d+),s*(d+),s*(d+))$/, // match RGB (color) string
    hexRegex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/, // match hex (color) string
    hexRegexExt: /(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/gm, // match Valid hexadecimal colour code
    htmlTagRegex: '/^(.*)|s+/>)$/', // match a HTML tag (v1)
    htmlTagRegexExt: '/(]+)>)/gm', // match HTML Tags (v2)
    productUrlRegex: '(/product/)?+[0-9]+', // match /product/123456789
    lnhRegex: /([A-Za-z0-9-]+)/gm, // match Letters, numbers and hyphens
    cssTagsRegex: '/<link .+?href="(.+?.css(?:?v=d)*).+?/>/ig', // match all .css includes
    jsTagsRegex: '//ig' // match all .js includes
};

/**
 * @param n
 * @returns {*}
 * Result = 1,000.0
 */
const formatNumberOneDec = n => {
    if (isNaN(n) || n === '' || n === null) {
        return 0;
    }
    return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

/**
 * @param n
 * @returns {*}
 * Result = 1,000
 */
const formatNumber = n => {
    if (isNaN(n) || n === '' || n === null) {
        return 0;
    }
    return n.toString().replace(/,/g, '');
};

/**
 * @param n
 * @returns {number}
 * Result from 1,000 to 1000
 */
const decodeFormatNumber = n => {
    if (n === '' || n === null || n === undefined) {
        return 0;
    }
    return parseInt(n.toString().replace(/[^0-9-.]/g, ''));
};

/**
 * @param name, url
 * @param url
 * @returns {*}
 * Result url/?name=142111 → 142111
 */
const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/**
 * @param text
 * @returns {string}
 * Result kun → Kun
 */
const ucFirst = text => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Format number follow standard K.M.G
 * @param num
 * @returns {*}
 * Result 1000 → 1k
 */
const formatKMG = num => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
};

/**
 * Revert format number follow standard K.M.G
 * @param num
 * @returns {*}
 * Result 1k → 1000
 */
const revertFormatKMG = num => {
    if (num.includes('G')) {
        let new_num = num.replace('B', '');
        return parseInt(new_num) * 1000000000;
    }
    if (num.includes('M')) {
        let new_num = num.replace('M', '');
        return parseInt(new_num) * 1000000;
    }
    if (num.includes('K')) {
        let new_num = num.replace('B', '');
        return parseInt(new_num) * 1000;
    }
    return num;
};

/**
 * Passes the first letter of each word in the sentence into uppercase
 * @param str
 * @returns {string}
 * Result mY name kUN → My Name Kun
 */
const toTitleCase = str => str.toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase());
}).join(' ');

/**
 * Check the data type of an object
 * @param type
 * @param obj
 * @returns {boolean}
 * Example: objIs('String', 'test'); → true, objIs('String', new String('test')); → true
 */
const objIs = (type, obj) => {
    let clazz = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clazz === type;
};

/**
 * @param p_arrayObj
 * @returns {Object}
 */
const getEmptyObj = p_arrayObj => Object.create({});

/**
 * @param p_obj0
 * @param p_obj1
 * @returns {{}}
 */
const mergeTwoObj = (p_obj0, p_obj1) => ({...p_obj0, ...p_obj1});

/**
 * @returns {Promise<string>}
 */
const generateAppSecretKey = () => new Promise(resolve => {
    crypto.randomBytes(16, function (err, buffer) {
        resolve(buffer.toString('hex'));
    });
});

/**
 * @param length
 * @returns {string}
 */
const randomString = (length = 3) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

/**
 * @returns {string}
 */
const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

/**
 * @param errorName
 * @param errorData
 */
const logError = (errorName, errorData) => {
    _.isObject(errorData) ? errorData = JSON.stringify(errorData) : errorData;
    console.log(colorize(errorName + "\n Ex:", errorData).red);
};

/**
 * @param warningName
 * @param warningData
 */
const logWarning = (warningName, warningData) => {
    _.isObject(warningData) ? warningData = JSON.stringify(warningData) : warningData;
    console.log(colorize(warningName + "\n Ex:", warningData).yellow);
};

/**
 * @param infoName
 * @param infoData
 */
const logInfo = (infoName, infoData) => {
    _.isObject(infoData) ? infoData = JSON.stringify(infoData) : infoData;
    console.log(colorize(infoName + "\n Ex:", infoData).green);
};