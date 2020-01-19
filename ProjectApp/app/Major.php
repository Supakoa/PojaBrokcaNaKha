<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Major extends Model
{

    public function users()
    {
        return $this->hasMany('app/User');
    }

    public function faculty()
    {
        return $this->belongsTo('app/Faculty');
    }

}
