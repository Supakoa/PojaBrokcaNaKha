<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Faculty;
class Major extends Model
{

    public function users()
    {
        return $this->hasMany(User::class,"major_id");
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

}
