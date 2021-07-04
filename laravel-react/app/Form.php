<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'forms';

    /**
     * The database primary key value.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['th_name', 'eng_name', 'inputs', 'all_state'];

    public function documents()
    {
        return $this->hasMany('App\Document');
    }

    public function groups()
    {
        return $this->belongsToMany(Group::class,"direction_forms")->withPivot("state")->withTimestamps();
    }

}
