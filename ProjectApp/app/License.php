<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    public function user()
    {
        return $this->hasOne('app/User');
    }
}
