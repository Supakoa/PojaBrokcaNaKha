@extends('layouts.adminTemplate')

@push('css')
<link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
@endpush

 @section('main')
    <div class="container p-2" id="mainIndex">
        <div class="row">
             {{-- @include('admin.sidebar') --}}
            <div class="col-md-9 m-auto">
                <div class="card">
                <div class="card-header">Edit paper #{{ $paper->id }}  {{date('Y-m-d')<date('2019-10-14')}} </div>
                    <div class="card-body">
                        <a href="{{ url('/admin/papers') }}" title="Back"><button class="btn btn-warning btn-sm"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button></a>
                        <br />
                        <br />

                        @if ($errors->any())
                            <ul class="alert alert-danger">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        @endif

                        <form method="POST" action="{{ url('/admin/papers/' . $paper->id) }}" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data">
                            {{ method_field('PATCH') }}
                            {{ csrf_field() }}

                            @include ('directory.papers.form', ['formMode' => 'edit'])

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
