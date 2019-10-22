## Laravel Cheat Sheet

##### Artisan
- Displays help for a given command `php artisan --help OR -h`
- Do not output any message `php artisan --quiet OR -q`
- Display this application version `php artisan --version OR -V`
- Do not ask any interactive question `php artisan --no-interaction OR -n`
- Force ANSI output `php artisan --ansi`
- Disable ANSI output `php artisan --no-ansi`
- The environment the command should run under `php artisan --env`
- -v|vv|vvv Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug `php artisan --verbose`
- Remove the compiled class file `php artisan clear-compiled`
- Display the current framework environment `php artisan env`
- Displays help for a command `php artisan help`
- Lists commands `php artisan list`
- Interact with your application `php artisan tinker`
- Put the application into maintenance mode `php artisan down`
- Bring the application out of maintenance mode `php artisan up`
- Optimize the framework for better performance `php artisan optimize [--force] [--psr] `
    - force: Force the compiled class file to be written
    - psr: Do not optimize Composer dump-autoload 
- Serve the application on the PHP development server `php artisan serve`
- Change the default port `php artisan serve --port 8080`
- Get it to work outside localhost `php artisan serve --host 0.0.0.0`
- Set the application namespace `php artisan app:name namespace`
- Flush expired password reset tokens `php artisan auth:clear-resets`
- Flush the application cache `php artisan cache:clear`
- Create a migration for the cache database table `php artisan cache:table`
- Create a cache file for faster configuration loading `php artisan config:cache`
- Remove the configuration cache file `php artisan config:clear`
- In program `$exitCode = Artisan::call('config:cache'); `
- Seed the database with records `php artisan db:seed [--class[="..."]] [--database[="..."]] [--force]`
    - class: The class name of the root seeder (default: "DatabaseSeeder")* 
    - database: The database connection to seed
    - force:  Force the operation to run when in production
- Generate the missing events and handlers based on registration `php artisan event:generate`
- Create a new command handler class `php artisan handler:command [--command="..."] name`
    - command: The command class the handler handles 
- Create a new event handler class `php artisan handler:event [--event="..."] [--queued] name`
    - event: The event class the handler handles
    - queued: Indicates the event handler should be queued
- Set the application key `php artisan key:generate`
- By default, this creates a self-handling command that isn't pushed to the queue `php artisan make:command [--handler] [--queued] name`
    - handler flag to generate a handler
    - queued flag to make it queued
- Create a new Artisan command `make:console [--command[="..."]] name`
    -command: The terminal command that should be assigned. (default: "command:name") 
- Create a new resourceful controller `php artisan make:controller [--plain] name`
    - plain: Generate an empty controller class
    - exp: `php artisan make:controller App\\Admin\\Http\\Controllers\\DashboardController`
- Create a new event class `php artisan make:event name`
- Create a new middleware class `php artisan make:middleware name`
- Create a new migration file `php artisan make:migration [--create[="..."]] [--table[="..."]] name`
    - create: The table to be created.
    - table: The table to migrate 
- Create a new Eloquent model class `php artisan make:model name`
- Create a new service provider class `php artisan make:provider name`
- Create a new form request class `php artisan make:request name`
- Database migrations `php artisan migrate [--database[="..."]] [--force] [--path[="..."]] [--pretend] [--seed]`
    - database: The database connection to use.
    - force: Force the operation to run when in production.
    - path: The path of migrations files to be executed.
    - pretend: Dump the SQL queries that would be run.
    - seed: Indicates if the seed task should be re-run
- Create the migration repository `php artisan migrate:install [--database[="..."]]`
- Create a new migration file `php artisan migrate:refresh [--database[="..."]] [--force] [--seed] [--seeder[="..."]]`
    - seeder: The class name of the root seeder.
- Rollback all database migrations `php artisan migrate:reset [--database[="..."]] [--force] [--pretend]`
    -pretend: Dump the SQL queries that would be run
- Rollback the last database migration `php artisan migrate:rollback [--database[="..."]] [--force] [--pretend]`
- Show a list of migrations up/down `php artisan migrate:status`
- Create a migration for the queue jobs database table `php artisan queue:table`
- Listen to a given queue `php artisan queue:listen [--queue[="..."]] [--delay[="..."]] [--memory[="..."]] [--timeout[="..."]] [--sleep[="..."]] [--tries[="..."]] [connection]`
    - queue: The queue to listen on
    - delay: Amount of time to delay failed jobs (default: 0)
    - memory: The memory limit in megabytes (default: 128)
    - timeout: Seconds a job may run before timing out (default: 60)
    - sleep: Seconds to wait before checking queue for jobs (default: 3)
    - tries: Number of times to attempt a job before logging it failed (default: 0)
- List all of the failed queue jobs `php artisan queue:failed`
- Create a migration for the failed queue jobs database table `php artisan queue:failed-table`
- Flush all of the failed queue jobs `php artisan queue:flush`
- Delete a failed queue job `php artisan queue:forget`
- Restart queue worker daemons after their current job `php artisan queue:restart`
- Retry a failed queue job(id: The ID of the failed job) `php artisan queue:retry id`
- Subscribe a URL to an Iron.io push queue `php artisan queue:subscribe [--type[="..."]] queue url`
    - queue: The name of Iron.io queue.
    - url: The URL to be subscribed.
    - type: The push type for the queue.
- Process the next job on a queue `php artisan queue:work [--queue[="..."]] [--daemon] [--delay[="..."]] [--force] [--memory[="..."]] [--sleep[="..."]] [--tries[="..."]] [connection]`
    - queue: The queue to listen on
    - daemon: Run the worker in daemon mode
    - delay: Amount of time to delay failed jobs (default: 0)
    - force: Force the worker to run even in maintenance mode
    - memory: The memory limit in megabytes (default: 128)
    - sleep: Number of seconds to sleep when no job is available (default: 3)
    - tries: Number of times to attempt a job before logging it failed (default: 0)
- Create a route cache file for faster route registration `php artisan route:cache`
- Remove the route cache file `php artisan route:clear`
- List all registered routes `php artisan route:list`
- Run the scheduled commands `php artisan schedule:run`
- Create a migration for the session database table `php artisan session:table`
- Publish any publishable assets from vendor packages `php artisan vendor:publish [--force] [--provider[="..."]] [--tag[="..."]]`
    - force: Overwrite any existing files.
    - provider: The service provider that has assets you want to publish.
    - tag: The tag that has assets you want to publish.

##### Auth
Authentication 
- Determine if the current user is authenticated `Auth::check();`
- Get the currently authenticated user `Auth::user();`
- Get the ID of the currently authenticated user `Auth::id();`
- Attempt to authenticate a user using the given credentials `Auth::attempt(array('email' => $email, 'password' => $password));`
- **Remember me** by passing true to Auth::attempt() `Auth::attempt($credentials, true);`
- Log in for a single request `Auth::once($credentials);`
- Log a user into the application `Auth::login(User::find(1));`
- Log the given user ID into the application `Auth::loginUsingId(1);`
- Log the user out of the application `Auth::logout();`
- Validate a user's credentials `Auth::validate($credentials);`
- Attempt to authenticate using HTTP Basic Auth `Auth::basic('username');`
- Perform a stateless HTTP Basic login attempt `Auth::onceBasic();`
- Send a password reminder to a user `Password::remind($credentials, function($message, $user){});`
              
Authorization 
- Define abilities 
    - `Gate::define('update-post', 'Class@method');`
    - `Gate::define('update-post', function ($user, $post) {...});`
- Passing multiple argument `Gate::define('delete-comment', function ($user, $post, $comment) {});`
- Check abilities
    - `Gate::denies('update-post', $post);`
    - `Gate::allows('update-post', $post);`
    - `Gate::check('update-post', $post);`
- Specified a user for checking
    - `Gate::forUser($user)->allows('update-post', $post);`
- Through User model, using Authorizable trait
    - `User::find(1)->can('update-post', $post);`
    - `User::find(1)->cannot('update-post', $post);`
- Intercepting Authorization Checks
    - `Gate::before(function ($user, $ability) {});`
    - `Gate::after(function ($user, $ability) {});`
- Chekcing in Blade template
    >   @can('update-post', $post) <br>
        endcan
    - with else
    >   @can('update-post', $post) <br>
        @else <br>
        @endcan <br>

- Generate a Policy `php artisan make:policy PostPolicy`
- **policy** helper function
policy($post)->update($user, $post)
- Controller Authorization `$this->authorize('update', $post);`
- For $user `$this->authorizeForUser($user, 'update', $post);`

##### Blade
- Show a section in a template
    >   @yield('name') <br>
        @extends('layout.name')
- Begin a section
    >   @section('name')
- End a section
    >   @stop
- End a section and yield
    >   
        @section('sidebar') <br>
        @show <br>
        @parent <br>

        @include('view.name')
        @include('view.name', array('key' => 'value'));
        @lang('messages.name')
        @choice('messages.name', 1);

        @if
        @else
        @elseif
        @endif

        @unless
        @endunless

        @for
        @endfor

        @foreach
        @endforeach

        @while
        @endwhile

- Echo content `{{ $var }}`
- Echo escaped content `{{{ $var }}}`
- Echo unescaped content; 5.0 feature `{!! $var !!}` `{{-- Blade Comment --}}`
- Echoing Data After Checking For Existence `{{{ $name or 'Default' }}}`
- Displaying Raw Text With Curly Braces `@{{ This will not be processed by Blade }}`

##### Cache   
    Cache::put('key', 'value', $minutes);
    Cache::add('key', 'value', $minutes);
    Cache::forever('key', 'value');
    Cache::remember('key', $minutes, function(){ return 'value' });
    Cache::rememberForever('key', function(){ return 'value' });
    Cache::forget('key');
    Cache::has('key');
    Cache::get('key');
    Cache::get('key', 'default');
    Cache::get('key', function(){ return 'default'; });
    Cache::tags('my-tag')->put('key','value', $minutes);
    Cache::tags('my-tag')->has('key');
    Cache::tags('my-tag')->get('key');
    Cache::tags('my-tag')->forget('key');
    Cache::tags('my-tag')->flush();
    Cache::increment('key');
    Cache::increment('key', $amount);
    Cache::decrement('key');
    Cache::decrement('key', $amount);
    Cache::section('group')->put('key', $value);
    Cache::section('group')->get('key');
    Cache::section('group')->flush();
    
##### Composer
    composer create-project laravel/laravel folder_name
    composer install
    composer update
    composer dump-autoload [--optimize]
    composer self-update
    composer require [options] [--] [vender/packages]...

##### Config
    > Config::get('app.timezone');
- Get with Default value `Config::get('app.timezone', 'UTC');` 
- Set configuration `Config::set('database.default', 'sqlite');`

##### Container   
    App::bind('foo', function($app){ return new Foo; });
    App::make('foo');
- If this class exists, it's returned `App::make('FooBar');`
- Register a shared binding in the container `App::singleton('foo', function(){ return new Foo; });`
- Register an existing instance as shared in the container `App::instance('foo', new Foo);`
- Register a binding with the container `App::bind('FooRepositoryInterface', 'BarRepository');`
- Register a service provider with the application `App::register('FooServiceProvider');`
- Listen for object resolution `App::resolving(function($object){});`

##### Cookie   
    Cookie::get('key');
    Cookie::get('key', 'default');
- Create a cookie that lasts for ever `Cookie::forever('key', 'value');`
- Create a cookie that lasts N minutes `Cookie::make('key', 'value', 'minutes');`
- Set a cookie before a response has been created `Cookie::queue('key', 'value', 'minutes');`
- Forget cookie `Cookie::forget('key');`
- Send a cookie with a response `$response = Response::make('Hello World');`
- Add a cookie to the response `$response->withCookie(Cookie::make('name', 'value', $minutes));`

##### DB   
- Basic Database Usage
DB::connection('connection_name');
    - Running A Select Query
    
            $results = DB::select('select * from users where id = ?', [1]);
            $results = DB::select('select * from users where id = :id', ['id' => 1]);
            
    - Running A General Statement
    
            DB::statement('drop table users');
            
    - Listening For Query Events
    
            DB::listen(function($sql, $bindings, $time){ code_here; });
            
    - Database Transactions
    
            DB::transaction(function()
            {
                DB::table('users')->update(['votes' => 1]);
                DB::table('posts')->delete();
            });
            DB::beginTransaction();
            DB::rollback();
            DB::commit();
              
- Query Builder 
    - Retrieving All Rows From A Table
    
            DB::table('name')->get();
            
    - Chunking Results From A Table
    
            DB::table('users')->chunk(100, function($users)
            {
                foreach ($users as $user)
                {
                    // TODO
                }
            });
            
    - Retrieving A Single Row From A Table
    
            $user = DB::table('users')->where('name', 'John')->first();
            DB::table('name')->first();
            
    - Retrieving A Single Column From A Row
    
            $name = DB::table('users')->where('name', 'John')->pluck('name');
            DB::table('name')->pluck('column');
            
    - Retrieving A List Of Column Values
    
            $roles = DB::table('roles')->lists('title');
            $roles = DB::table('roles')->lists('title', 'name');
            
    - Specifying A Select Clause
    
            $users = DB::table('users')->select('name', 'email')->get();
            $users = DB::table('users')->distinct()->get();
            $users = DB::table('users')->select('name as user_name')->get();
            
    - Adding A Select Clause To An Existing Query
    
            $query = DB::table('users')->select('name');
            $users = $query->addSelect('age')->get();
            
    - Using Where Operators
    
            $users = DB::table('users')->where('votes', '>', 100)->get();
            $users = DB::table('users')
                          ->where('votes', '>', 100)
                          ->orWhere('name', 'John')
                          ->get();
            $users = DB::table('users')
                          ->whereBetween('votes', [1, 100])->get();
            $users = DB::table('users')
                          ->whereNotBetween('votes', [1, 100])->get();
            $users = DB::table('users')
                          ->whereIn('id', [1, 2, 3])->get();
            $users = DB::table('users')
                          ->whereNotIn('id', [1, 2, 3])->get();
            $users = DB::table('users')
                          ->whereNull('updated_at')->get();
            DB::table('name')->whereNotNull('column')->get();
            
    - Dynamic Where Clauses
    
            $admin = DB::table('users')->whereId(1)->first();
            $john = DB::table('users')
                          ->whereIdAndEmail(2, 'john@doe.com')
                          ->first();
            $jane = DB::table('users')
                          ->whereNameOrAge('Jane', 22)
                          ->first();
            // Order By, Group By, And Having
            $users = DB::table('users')
                          ->orderBy('name', 'desc')
                          ->groupBy('count')
                          ->having('count', '>', 100)
                          ->get();
            DB::table('name')->orderBy('column')->get();
            DB::table('name')->orderBy('column','desc')->get();
            DB::table('name')->having('count', '>', 100)->get();
            
    - Offset & Limit
    
            $users = DB::table('users')->skip(10)->take(5)->get();
          
- Joins 
    - Basic Join Statement
    
            DB::table('users')
                      ->join('contacts', 'users.id', '=', 'contacts.user_id')
                      ->join('orders', 'users.id', '=', 'orders.user_id')
                      ->select('users.id', 'contacts.phone', 'orders.price')
                      ->get();
                      
    - Left Join Statement
    
            DB::table('users')
                    ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
                    ->get();
                  
    - select * from users where name = 'John' or (votes > 100 and title <> 'Admin')
    
            DB::table('users')
                      ->where('name', '=', 'John')
                      ->orWhere(function($query)
                      {
                            $query->where('votes', '>', 100)
                                ->where('title', '<>', 'Admin');
                      })
                      ->get();
          
- Aggregates 

            $users = DB::table('users')->count();
            $price = DB::table('orders')->max('price');
            $price = DB::table('orders')->min('price');
            $price = DB::table('orders')->avg('price');
            $total = DB::table('users')->sum('votes');
            
            DB::table('name')->remember(5)->get();
            DB::table('name')->remember(5, 'cache-key-name')->get();
            DB::table('name')->cacheTags('my-key')->remember(5)->get();
            DB::table('name')->cacheTags(array('my-first-key','my-second-key'))->remember(5)->get();
          
- Raw Expressions 

            $users = DB::table('users')
                               ->select(DB::raw('count(*) as user_count, status'))
                               ->where('status', '<>', 1)
                               ->groupBy('status')
                               ->get();
- Return rows

            DB::select('select * from users where id = ?', array('value'));
            
- Return nr affected rows
            
            DB::insert('insert into foo set bar=2');
            DB::update('update foo set bar=2');
            DB::delete('delete from bar');
            
- Returns void

            DB::statement('update foo set bar=2');
            
- Raw expression inside a statement

            DB::table('name')->select(DB::raw('count(*) as count, column2'))->get();
          
- Inserts / Updates / Deletes / Unions / Pessimistic Locking
    - Inserts
    
            DB::table('users')->insert(
              ['email' => 'john@example.com', 'votes' => 0]
            );
            $id = DB::table('users')->insertGetId(
              ['email' => 'john@example.com', 'votes' => 0]
            );
            DB::table('users')->insert([
              ['email' => 'taylor@example.com', 'votes' => 0],
              ['email' => 'dayle@example.com', 'votes' => 0]
            ]);
            
    - Updates
    
            DB::table('users')
                      ->where('id', 1)
                      ->update(['votes' => 1]);
            DB::table('users')->increment('votes');
            DB::table('users')->increment('votes', 5);
            DB::table('users')->decrement('votes');
            DB::table('users')->decrement('votes', 5);
            DB::table('users')->increment('votes', 1, ['name' => 'John']);
    - Deletes
    
            DB::table('users')->where('votes', '<', 100)->delete();
            DB::table('users')->delete();
            DB::table('users')->truncate();
            
    - Unions *The unionAll() method is also available, and has the same method signature as union*
    
            $first = DB::table('users')->whereNull('first_name');
            $users = DB::table('users')->whereNull('last_name')->union($first)->get();
            
- Pessimistic Locking

            DB::table('users')->where('votes', '>', 100)->sharedLock()->get();
            DB::table('users')->where('votes', '>', 100)->lockForUpdate()->get();
 
##### Environment
    $environment = app()->environment();
    $environment = App::environment();
    $environment = $app->environment();
- The environment is local

        if ($app->environment('local')){}
        
- The environment is either local OR staging...

        if ($app->environment('local', 'staging')){}
        
##### Event
 
    Event::fire('foo.bar', array($bar));
- Register an event listener with the dispatcher.
- void listen(string|array $events, mixed $listener, int $priority)

        Event::listen('App\Events\UserSignup', function($bar){});
        Event::listen('foo.*', function($bar){});
        Event::listen('foo.bar', 'FooHandler', 10);
        Event::listen('foo.bar', 'BarHandler', 5);
        
- Stopping The Propagation Of An Event
- You may do so using by returning false from your handler.

        Event::listen('foor.bar', function($event){ return false; });
        Event::subscribe('UserEventHandler');

## Laravel CMS tool install

[Docs](https://laravel-admin.org/docs/)

###### Init laravel project:
``laravel new "name project"``

###### Require laravel admin:
``composer require encore/laravel-admin``

###### Then run these commands to publish assets and config：
``php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"``

###### At last run following command to finish install: 
``php artisan admin:install``

###### Notes:
``Notes: Open http://localhost/admin/ in browser, use username "admin" and password "admin" to login``