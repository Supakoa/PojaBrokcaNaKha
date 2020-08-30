<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserGroup extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_group', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('user_id')->unsigned();
            $table->integer('group_id')->unsigned();
            $table->integer('subject_id')->unsigned()->nullable();

            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('group_id')->references('id')->on('groups')->cascadeOnDelete();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
