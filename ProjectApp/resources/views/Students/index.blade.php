@extends('layouts.userTemplate')

@section('main')
<div class="container" id="mainIndex">
    <div class="card p-1">
        <div class="container p-3">
            @include('Students.include.head.index')
        </div>
        <div class="container p-3">
            @include('Students.include.body.index')
            @include('Students.include.footer.index')
        </div>
    </div>
</div>
@endsection


{{-- @push('js')
<script>
    $(document).ready(function () {

    });

</script>
@endpush --}}




