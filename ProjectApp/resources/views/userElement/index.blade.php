@extends('layouts.userTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
@endpush

@section('main')
<div class="container" id="mainIndex">
    <div class="card p-1">
        <div class="container p-3">
            @include('userElement.aHead.index')
        </div>
        <div class="container p-3">
            @yield('middle')
        </div>
        <div class="container p-3">
            @include('userElement.cFooter.index')
        </div>
    </div>
</div>
@yield('modal')

@endsection


@push('js')

@endpush
