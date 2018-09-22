<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee', function (Blueprint $table) {
            $table->increments('	EmployeeID');
            $table->integer('ChiefID');
            $table->integer('PositionID');
            $table->integer('EmployeeImgID');
            $table->string('FirstName');
            $table->string('LastName');
            $table->string('SurName');
            $table->dateTimeTz('EmploymentDate');
            $table->double('	Salary');

            $table->foreign('ChiefID')->references('EmployeeID')->on('employee');
            $table->foreign('PositionID')->references('PositionID')->on('positions');
            $table->foreign('EmployeeImgID')->references('EmployeeImgID')->on('employee_imgs');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee');
    }
}
