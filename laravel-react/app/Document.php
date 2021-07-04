<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'documents';

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
    protected $fillable = ['user_id', 'user_cancel_id', 'form_id', 'data', 'state', 'status', 'canceled_at', 'note','max_state'];

    public function user()
    {
        return $this->belongsTo('App\User',"user_id");
    }
    public function userCancel()
    {
        return $this->belongsTo('App\User',"user_cancel_id");
    }
    public function approver(){
        return $this->belongsToMany(User::class,"user_approve")->withPivot(["comment","return_file","state","status"])->withTimestamps();
    }
    public function form(){
        return $this->belongsTo(Form::class);

    }
}
