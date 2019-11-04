@extends('adminElement.Index')


@section('main-content')
<div class="container p-2" >
              @include('adminElement.document.documentContent.documentContent')
</div>
@endsection

@push('js')

@endpush
