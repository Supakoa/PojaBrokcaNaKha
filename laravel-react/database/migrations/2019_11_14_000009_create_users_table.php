<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('major_id')->nullable();
            $table->unsignedInteger('role_id');
//            $table->text('email');
             $table->text('email')->unique();
            $table->text('password');
            $table->unsignedBigInteger('student_id')->nullable()->unique();
            $table->text('title')->nullable();
            $table->text('first_name');
            $table->text('last_name');
            $table->timestamp('email_verified_at')->nullable();
            $table->text('telephone');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('major_id')->references('id')->on('majors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
