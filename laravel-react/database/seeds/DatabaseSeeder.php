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
            faculty::class,
            major::class,
            role::class,
            status::class,
            subject::class,
            admin::class
        ]);
    }
}
