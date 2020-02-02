<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\major as major ;
class Faculty extends Model
{
    public function majors()
    {
        return $this->hasMany('App\major','faculty_id');
    }
}
