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
        $this->call(admin::class);
        $this->call(faculty::class);
        $this->call(major::class);
        $this->call(role::class);
        $this->call(status::class);
        $this->call(subject::class);
    }
}
