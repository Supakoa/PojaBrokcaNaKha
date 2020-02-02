<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    public function papers()
    {
        return $this->hasMany('app\Paper');
    }
}
