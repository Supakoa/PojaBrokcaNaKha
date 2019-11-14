<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserApprovesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user__approves', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->foreign('user_id')->references('id')->on('users');
            $table->unsignedInteger('status_id')->foreign('status_id')->references('id')->on('statuses');
            $table->unsignedInteger('paper_id')->foreign('paper_id')->references('id')->on('papers');
            $table->text('comment');
            $table->text('return_file');
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
        Schema::dropIfExists('user__approves');
    }
}
