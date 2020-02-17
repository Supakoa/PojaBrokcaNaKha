<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role', 'email', 'password', 'major_id','student_id','firstname','lastname',
        'telephone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function license()
    {
        return $this->hasOne('app/License');
    }

    public function papers()
    {
        return $this->hasMany('app/Paper');
    }

    public function major()
    {
        return $this->belongsTo('app/Major');
    }

    public function role()
    {
        return $this->hasOne('app/Role');
    }

}
