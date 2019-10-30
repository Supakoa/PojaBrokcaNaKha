@extends('adminElement.Index')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
@endpush

@section('main-content')
<div class="container p-2" id="mainIndex">
    @include('adminElement.steps.content.stepsContent')
</div>
@endsection

@push('js')

@endpush

