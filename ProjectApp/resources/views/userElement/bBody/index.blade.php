@extends('userElement.index')

@section('middle')
<ul class="nav nav-pills d-flex" id="pills-tab" role="tablist">
    <li class="nav-item w-50">
        <a class="nav-link btn rounded-0 active btn-block btn-info" id="pills-home-tab" data-toggle="pill"
            href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ประวัติคำร้อง</a>
    </li>
    <li class="nav-item w-50">
        <a class="nav-link btn rounded-0 btn-info btn-block" id="pills-profile-tab" data-toggle="pill"
            href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">แบบคำร้อง</a>
    </li>
</ul>

<div class="tab-content p-3 bg-info" id="pills-tabContent">
    <div class="card p-3 rounded tab-pane fade show active" id="pills-home" role="tabpanel"
        aria-labelledby="pills-home-tab">
        <div class="row justify-content-end ">
            <div class="col-md-12">
                <div class="input-group mb-3 w-25 float-right">
                    <input type="text" class="form-control border-right-0  boder-greenBlue txt-greenblue"
                        placeholder="SEARCH" aria-label="SEARCH" aria-describedby="button-addon2">
                    <div class="input-group-append ">
                        <button class="btn btn-outline-info border-left-0" type="button" id="button-addon2"><i
                                class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="input-group mb-3 float-right" style="width:10%">
                    <select class="custom-select boder-greenBlue txt-greenblue" id="inputGroupSelect02">
                        <option value="1">10</option>
                        <option value="2">25</option>
                        <option value="3">50</option>
                        <option value="4">75</option>
                        <option value="5">100</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover txt-greenblue">
                <thead>
                    <tr class="text-center">
                        <th scope="col">#</th>
                        <th>สถานะ</th>
                        <th>แบบคำร้อง</th>
                        <th>สถานะการดำเนินการ</th>
                        <th>หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <th scope="row">1</th>
                        <td>
                            <span class="badge badge-info p-1">กำลังดำเนินการ</span>
                        </td>
                        <td>ลากิจ / ลาป่วย</td>
                        <td>
                            <button class="btn btn-info btn-sm" type="button" data-toggle="modal"
                                data-target="#showSteps">
                                แสดง
                            </button>
                        </td>
                        <td>-</td>
                    </tr>
                    <tr class="text-center">
                        <th scope="row">2</th>
                        <td>
                            <span class="badge badge-danger p-1">ไม่ผ่าน</span>
                        </td>
                        <td>ขอสอบย้อนหลัง</td>
                        <td>
                            <button class="btn btn-info btn-sm">
                                แสดง
                            </button>
                        </td>
                        <td>เอกสารไม่ครบ</td>
                    </tr>
                </tbody>
            </table>
            <hr class="boder-greenBlue">
            <div class="row">
                <div class="col-md-4">
                    <span class="txt-greenblue">SHOWING 1 TO 1 OF 1 ENTRIES</span>
                </div>
                <div class="col-md-8 ">
                    <ul class="pagination float-right ">
                        <li class="page-item disabled">
                            <a class="page-link bg-info text-light" href="#" tabindex="-1"
                                aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link txt-greenblue" href="#">1</a></li>
                        <li class="page-item" aria-current="page">
                            <a class="page-link txt-greenblue" href="#">2 <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="page-item"><a class="page-link txt-greenblue" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link bg-info text-light" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="card rounded tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div class="accordion p-1" id="accordionExample">
            @include('userElement.bBody.forms.formsOne')
            @include('userElement.bBody.forms.formsTwo')
            @include('userElement.bBody.forms.formsThree')
            @include('userElement.bBody.forms.formsFour')
            @include('userElement.bBody.forms.formsFive')
            @include('userElement.bBody.forms.formsSix')
            @include('userElement.bBody.forms.formsSeven')
        </div>
    </div>
</div>



@include('userElement.cFooter.index')
@endsection

@section('modal')
{{-- modal status papers --}}
<div class="modal fade bd-example-modal-lg" id="showSteps" tabindex="-1" role="dialog"
    aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content ">
            <div class="modal-header bg-info text-light">
                <h4 class="modal-title" id="myLargeModalLabel">nameForms -> idForms</h4>
                <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body container">
                <div class="d-flex container p-3 text-center justify-content-center" id="statusBar">
                    <div class="circle rounded-circle border-success">
                        <i class="fas fa-paper-plane m-auto text-success"></i>
                    </div>
                    <div class="line border-success"></div>

                    <div class="circle rounded-circle border-success">
                        <i class="fas fa-clock m-auto text-success"></i>
                    </div>
                    <div class="line border-success"></div>

                    <div class="circle rounded-circle border-warning">
                        <i class="fas fa-edit m-auto text-warning"></i>
                    </div>
                    <div class="line"></div>

                    <div class="circle rounded-circle">
                        <i class="fas fa-check-circle m-auto"></i>
                    </div>
                </div>
                <hr id="hrLine" class="border-info">
                <div class="row p-2">
                    <div id="timeSec"
                        class="col-md-4 border border-top-0 border-left-0 border-bottom-0 p-3 border-info text-center">
                        <dd class="text-dark text-time">2019/11/04 (11 : 02 : 32s)</dd>
                    </div>
                    <div class="col-md-8 border border-top-0 border-right-0 border-bottom-0 p-3 d-flex border-info pl-5"
                        id="stateMent">
                        <div class="row w-100 ">
                            <div class="col-md-6">
                                <dd>
                                    <li class="p-0 text-warning text-secon"> <span class="text-dark">แก้ไข</span></li>
                                </dd>
                            </div>
                            <div class="col-md-6 text-center">
                                    <button class="btn btn-outline-info float-left btn-sm">ส่งฟอร์มใหม่</button>
                                <span class="badge badge-light">OR</span>
                                <button class="btn btn-outline-danger float-right btn-sm">ยกเลิก</button>

                            </div>
                        </div>
                        <div class="linelist"></div>
                    </div>

                    <div id="timeSec"
                        class="col-md-4 border border-top-0 border-left-0 border-bottom-0 p-3 border-info text-center">
                        <dd class="text-secon text-time">2019/11/04 (15 : 26 : 33s)</dd>
                    </div>
                    <div class="col-md-8 border border-top-0 border-right-0 border-bottom-0 p-3 border-info pl-5"
                        id="stateMent">
                        <dd>
                            <li class="p-0 text-secon"><span class="text-secon">กำลังดำเนินการ</span></li>
                        </dd>
                        <div class="linelist"></div>
                    </div>

                    <div id="timeSec"
                        class="col-md-4 border border-top-0 border-left-0 border-bottom-0 p-3 border-info text-center">
                        <dd class="text-secon text-time">2019/11/04 (20 : 03 : 33s)</dd>
                    </div>
                    <div class="col-md-8 border border-top-0 border-right-0 border-bottom-0 p-3 border-info pl-5"
                        id="stateMent">
                        <dd>
                            <li class="p-0 text-secon"><span class="text-secon">ส่งแล้ว</span></li>
                        </dd>
                    </div>
                </div>

            </div>
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
