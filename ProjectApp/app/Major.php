<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Faculty;
class Major extends Model
{

    public function users()
    {
        return $this->hasMany('app\User');
    }

    public function faculty()
    {
        return $this->belongsTo('App\Faculty');
    }

}
