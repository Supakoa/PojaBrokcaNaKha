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
                    <div class="card-header text-center h4 text-light bg-header">ค้นหาเอกสาร</div>
                    <div class="card-body">
                        <a href="{{ url('/admin/papers/create') }}" class="btn btn-success btn-sm" title="Add New paper">
                            <i class="fa fa-plus" aria-hidden="true"></i> เพิ่มเอกสาร
                        </a>

                        <form method="GET" action="{{ url('/admin/papers') }}" accept-charset="UTF-8" class="form-inline my-2 my-lg-0 float-right" role="search">
                            <div class="input-group">
                                <input type="text"  class="form-control boder-greenBlue" name="search" placeholder="Search..." value="{{ request('search') }}">
                                <span class="input-group-append border-greenBlue">
                                    <button class="btn border-greenBlue" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>

                        <br/>
                        <br/>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th><th>Form Id</th><th>Detail</th><th>Step Now</th><th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                @foreach($papers as $item)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $item->form_id }}</td><td>{{ $item->detail }}</td><td>{{ $item->step_now }}</td>
                                        <td>
                                            <a href="{{ url('/admin/papers/' . $item->id) }}" title="View paper"><button class="btn btn-info btn-sm"><i class="fa fa-eye" aria-hidden="true"></i> View</button></a>
                                            <a href="{{ url('/admin/papers/' . $item->id . '/edit') }}" title="Edit paper"><button class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button></a>

                                            <form method="POST" action="{{ url('/admin/papers' . '/' . $item->id) }}" accept-charset="UTF-8" style="display:inline">
                                                {{ method_field('DELETE') }}
                                                {{ csrf_field() }}
                                                <button type="submit" class="btn btn-danger btn-sm" title="Delete paper" onclick="return confirm(&quot;Confirm delete?&quot;)"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            <div class="pagination-wrapper"> {!! $papers->appends(['search' => Request::get('search')])->render() !!} </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
