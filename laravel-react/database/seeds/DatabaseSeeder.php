<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            role::class,
            admin::class,
            faculty::class,
            major::class,
            status::class,
            subject::class
        ]);
        factory(App\User::class, 10)->create();
    }
}
