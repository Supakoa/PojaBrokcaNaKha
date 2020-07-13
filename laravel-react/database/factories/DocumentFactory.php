<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Document;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/
$factory->define(Document::class, function (Faker $faker) {
//['user_id', 'user_cancel_id', 'form_id', 'data', 'state', 'status', 'canceled_at', 'note']
    return [
        "form_id" => App\Form::all()->random()->id,
    ];
});
