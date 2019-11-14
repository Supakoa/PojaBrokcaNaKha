<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePapersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('papers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('form_id')->foreign('form_id')->references('id')->on('forms');
            $table->unsignedInteger('status')->foreign('status')->references('id')->on('statuses');
            $table->text('detail');
            $table->integer('step_now');
            $table->text('note');
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
        Schema::drop('papers');
    }
}
