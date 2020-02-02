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
