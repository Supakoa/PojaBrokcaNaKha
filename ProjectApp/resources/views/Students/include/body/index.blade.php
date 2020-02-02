
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
            @include('Students.include.body.forms.formsOne')
            @include('Students.include.body.forms.formsTwo')
            @include('Students.include.body.forms.formsThree')
            @include('Students.include.body.forms.formsFour')
            @include('Students.include.body.forms.formsFive')
            @include('Students.include.body.forms.formsSix')
            @include('Students.include.body.forms.formsSeven')
        </div>
    </div>
    @include('Students.include.body.modal.modalIndex')
</div>


