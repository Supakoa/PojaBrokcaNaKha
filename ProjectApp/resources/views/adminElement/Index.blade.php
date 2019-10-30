@extends('layouts.adminTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
@endpush

@section('main')
<div class="container-fluid p-2 h-100" id="mainIdex">
    @yield('main-content')
</div>
@endsection

@push('js')

@endpush

