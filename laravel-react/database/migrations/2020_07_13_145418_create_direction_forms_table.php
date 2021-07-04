<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDirectionFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direction_forms', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('form_id')->unsigned();
            $table->integer('group_id')->unsigned();
            $table->tinyInteger('state')->nullable();

            $table->foreign('form_id')->references('id')->on('forms')->cascadeOnDelete();
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
        Schema::drop('direction_forms');
    }
}
