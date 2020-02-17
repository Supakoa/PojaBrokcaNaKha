@extends('layouts.userTemplate')

@section('main')
<div class="container" id="mainIndex">
    <div class="card p-1">
        <div class="container p-3">
            @include('Students.include.head.index')
        </div>
        <div class="container p-3">
            <h1>Hello</h1>
            @include('Students.include.body.index')
            @include('Students.include.footer.index')
            @include('Students.proFile')
        </div>
    </div>
</div>
@endsection


@push('js')
<script>
    $(document).ready(function () {
        if (screen.width < 770) {
            $('#statusBar').addClass('mobile');
            $('#hrLine').addClass('mobile');
            $('.text-time').css('fontSize', '9px');
            $('.text-time').addClass('mb-0');
            $('.text-time').addClass('mt-2');
        }
    });

</script>
@endpush




