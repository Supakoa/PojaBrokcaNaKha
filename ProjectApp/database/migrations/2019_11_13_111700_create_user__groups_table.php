<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user__groups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('group_id')->foreign('group_id')->references('id')->on('groups');
            $table->unsignedInteger('subject_id')->foreign('subjejct_id')->references('id')->on('subjects');
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
        Schema::dropIfExists('user__groups');
    }
}
