@extends('adminElement.Index')

@section('main-content')
<div class="container-fluid m-0 p-0 w-100">
    @include('adminElement.member.memberContent.memberContent')
</div>
@endsection

@push('js')

@endpush
