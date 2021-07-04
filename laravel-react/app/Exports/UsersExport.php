<?php

namespace App\Exports;

use App\Major;
use App\Role;
use App\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use PhpOffice\PhpSpreadsheet\Cell\DataType;

class UsersExport implements FromCollection,ShouldAutoSize, WithMapping, WithHeadings,WithColumnFormatting
{


    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return User::all();
    }

    public function headings(): array
    {
        return [
            'ID',
            'ROLE',
            'Student Id',
            'Faculty',
            'Major',
            'Title',
            'First name',
            'Last name',
            'Email',
            'Phone',
        ];
    }

    /**
     * @inheritDoc
     */
    public function map($user): array
    {
//        'student_id','title','first_name','last_name', 'email', 'password','role_id','telephone','major_id'
        $role = "";
        $major = "";
        if ($user->role_id)
            $role = Role::findOrFail($user->role_id);
        if ($user->major_id)
            $major = Major::findOrFail($user->major_id);
        return [
            $user->id,
            $role->name,
            $user->student_id,
            $major != "" ? $major->faculty->name : "",
            $major != "" ? $major->name : "",
            $user->title,
            $user->first_name,
            $user->last_name,
            $user->email,
            $user->telephone
        ];
    }

    /**
     * @inheritDoc
     */
    public function columnFormats(): array
    {
        return [
            'C' => DataType::TYPE_STRING,
        ];
    }
}
