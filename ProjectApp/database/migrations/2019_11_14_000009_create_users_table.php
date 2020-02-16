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
            $table->unsignedInteger('role');
            $table->string('email')->unique();
            $table->text('password');
            $table->text('student_id')->nullable()->unique();
            $table->text('title')->nullable();
            $table->text('firstname');
            $table->text('lastname');
            $table->timestamp('email_verified_at')->nullable();
            $table->text('telephone');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('role')->references('id')->on('roles');
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
