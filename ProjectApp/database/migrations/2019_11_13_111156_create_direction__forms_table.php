<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDirectionFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direction__forms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('form_id')->foreign('form_id')->references('id')->on('froms');
            $table->unsignedInteger('group_id')->foreign('group_id')->references('id')->on('groups');
            $table->integer('step');
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
        Schema::dropIfExists('direction__forms');
    }
}
