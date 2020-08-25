<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('user_id')->unsigned();
            $table->integer('user_cancel_id')->unsigned()->nullable();
            $table->integer('form_id')->unsigned();
            $table->json('data')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->tinyInteger('max_state')->default(1);
            $table->enum('status',["pending","success","reject","cancel","edit"]);
            $table->timestamp('canceled_at')->nullable();
            $table->text('note')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('user_cancel_id')->references('id')->on('users');
            $table->foreign('form_id')->references('id')->on('forms');
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('documents');
    }
}
