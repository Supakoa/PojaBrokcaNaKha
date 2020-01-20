<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Paper extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'Papers';

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
    protected $fillable = ['form_id','detail', 'step_now','note','status'];

    // relation
    public function status()
    {
        return $this->belongsTo('app/Status');
    }

    public function user()
    {
        return $this->belongsTo('app/User');
    }

    public function form()
    {
        return $this->belongsTo('app/Form');
    }
}
