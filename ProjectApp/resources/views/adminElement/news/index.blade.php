@extends('adminElement.Index')

@section('main-content')
<div class="container p-2">
    @include('adminElement.news.content-news.content')
</div>
@endsection

@push('js')

@endpush
