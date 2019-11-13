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
            $table->bigIncrements('id');
            $table->foreign('major_id')->references('id')->on('majors');
            $table->text('username');
            $table->text('password');
            $table->text('title');
            $table->text('name');
            $table->text('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->text('telephone');
            $table->integer('role');
            $table->rememberToken();
            $table->timestamps();
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
