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