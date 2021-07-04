<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'groups';

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
    protected $fillable = ['th_name', 'eng_name', 'type'];

    public function forms(){
        return $this->belongsToMany(Form::class,"direction_forms")
            ->withPivot("state")->withTimestamps();
    }
    public function users(){
        return $this->belongsToMany(User::class,"user_group")
            ->withPivot("subject_id")->withTimestamps();
    }
}
