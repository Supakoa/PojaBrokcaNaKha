<div class="card">
    <div class="card-header bg-header">
        <h4 class="text-center text-light">ตั้งค่า ขั้นตอนเอกสาร</h4>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table txt-greenblue" style="border:2px solid #639cb4">
                <thead style="border-bottom-color:#639cb4">
                    <tr class="text-center">
                        <th class="border-left">ลำดับ</th>
                        <th>รูปแบบเอกสาร</th>
                        <th>ID</th>
                        <th class="border-right "></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>เอกสารขอขึ้นสอบ</td>
                        <td>DE-2019</td>
                        <td>
                            <button class="btn border-secondary" data-toggle="modal"
                                data-target="#exampleModalScrollable">
                                <i class="fas fa-pencil-alt text-secondary"></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="text-center b">
                        <td>2</td>
                        <td>แบบคำร้องขอลาป่วย</td>
                        <td>RS-2019</td>
                        <td>
                            <button class="btn border-secondary">
                                <i class="fas fa-pencil-alt text-secondary"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>



<!-- Modal -->
<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content container">
            <div class="modal-header" style="border-bottom-color:#639cb4">
                <h5 class="modal-title txt-greenblue" id="exampleModalScrollableTitle">ตั้งค่าเส้นทางเอกสาร</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <dl class="row">
                        <dt class="col-xl-6 txt-greenblue text-left">
                            รหัสฟอร์มเอกสาร
                        </dt>
                        <dd class="col-xl-6 txt-greenblue text-left">
                            : DE - 2019
                        </dd>
                        <dt class="col-xl-6 txt-greenblue text-left">
                            ชื่อฟอร์มเอกสาร
                        </dt>
                        <dd class="col-xl-6 txt-greenblue text-left">
                            : เอกสารขอขึ้นสอบ
                        </dd>
                    </dl>
                    <hr class="boder-greenBlue">
                    <h5 class="text-left txt-greenblue">เส้นทางเอกสาร</h5>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="alert alert-light boder-greenBlue mb-0" role="alert">
                                <span class="badge badge-info" id="spanName">numOne</span>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <button class="btn border-info m-0" type="button" data-toggle="modal"
                                data-target="#addteach">
                                <i class="fa fa-user-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>

                    {{-- arrow --}}
                    <div class="row m-2">
                        <div class="col-md-12 text-center">
                            <button class="btn rounded-circle border-warning disabled">
                                <i class="fa fa-arrow-down " aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    {{-- arrow --}}

                    <div class="row">
                        <div class="col-md-10">
                            <div class="alert alert-light boder-greenBlue mb-0" role="alert">
                                <span id="spanName" class="badge badge-info">numOne</span>
                                <span id="spanName" class="badge badge-info">numTwo</span>
                            </div>
                        </div>
                        <div class="col-md-2 align-middle">
                            <button class="btn border-info m-0">
                                <i class="fa fa-user-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="border-top-color:#639cb4">
                <button type="button" class="btn bg-greenblue m-auto text-light"><i
                        class="fas fa-plus-circle    "></i></button>
            </div>
        </div>
    </div>
</div>


{{-- modal Add --}}
<div class="modal fade" tabindex="-1" id="addteach" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content container">
            <div class="modal-header">
                <h5 class="modal-title txt-greenblue">รายชื่อ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="input-group-append">
                        <button class="btn btn-outline-info" type="button">Button</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
