@extends('adminElement.Index')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
@endpush

@section('main-content')
<div class="container-fluid m-0 p-0 w-100" id="mainIndex" style="min-width:100%">
    
    @include('adminElement.member.memberContent.memberContent')

</div>
@endsection

@push('js')

@endpush
