@extends('layouts.adminTemplate')

@section('main-content')
<div class="container-fluid m-0 p-0 w-100">
    @include('adminElement.users.usersContent.usersContent')
</div>
@endsection

@push('js')

@endpush
