<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class status extends Model
{
    public function papers()
    {
        return $this->hasMany('app/Paper');
    }
}
