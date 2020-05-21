/**
 * Created by 142111. O.O
 */

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

/**
 * @param n
 * @returns {*}
 * Result = 1,000.0
 */
function formatNumberOneDec(n) {
    if (isNaN(n) || n === '' || n === null) {
        return 0;
    }
    return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

/**
 * @param n
 * @returns {*}
 * Result = 1,000
 */
function formatNumber(n) {
    if (isNaN(n) || n === '' || n === null) {
        return 0;
    }
    return n.toString().replace(/,/g, '');
}

/**
 * @param n
 * @returns {number}
 * Result from 1,000 to 1000
 */
function decodeFormatNumber(n) {
    if (n === '' || n === null || n === undefined) {
        return 0;
    }
    return parseInt(n.toString().replace(/[^0-9-.]/g, ''));
}

/**
 * @param name, url
 * @param url
 * @returns {*}
 * Result url/?name=142111 → 142111
 */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * @param text
 * @returns {string}
 * Result kun → Kun
 */
function ucFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Format number follow standard K.M.G
 * @param num
 * @returns {*}
 * Result 1000 → 1k
 */
function formatKMG(num) {
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
}

/**
 * Revert format number follow standard K.M.G
 * @param num
 * @returns {*}
 * Result 1k → 1000
 */
function revertFormatKMG(num) {
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
}

/**
 * Passes the first letter of each word in the sentence into uppercase
 * @param str
 * @returns {string}
 * Result mY name kUN → My Name Kun
 */
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');

}

/**
 * Check the data type of an object
 * @param type
 * @param obj
 * @returns {boolean}
 * Example: objIs('String', 'test'); → true, objIs('String', new String('test')); → true
 */
function objIs(type, obj) {
    let clazz = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clazz === type;
}

/**
 * @param p_arrayObj
 * @returns {Object}
 */
function getEmptyObj(p_arrayObj) {
    return Object.create({});
}

/**
 * @param p_obj0
 * @param p_obj1
 * @returns {{}}
 */
function mergeTwoObj(p_obj0, p_obj1) {
    return {...p_obj0, ...p_obj1};
}
