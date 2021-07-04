<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class Faculty extends Model
{
    public function majors()
    {
        return $this->hasMany(Major::class);
    }
}
