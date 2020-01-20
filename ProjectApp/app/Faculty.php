<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
   public function major(){
       return $this->hasMany('App\Major');
   }
}
