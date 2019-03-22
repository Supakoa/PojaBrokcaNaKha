<?php 
require '../../server/server.php';

print_r($_POST);
?>
<div class="modal fade" id="edit_form_modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>ตั้งค่าเส้นทางเอกสาร</h3>
                </div>
                <div class="modal-body">

                    <!-- info -->
                    <div class="card-body text-left">
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-5 ">
                                <p>รหัสฟอร์มเอกสาร </p>
                            </div>
                            <div class="col-lg-6">
                                <label>: DE-2019</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-5 ">
                                <p>ชื่อฟอร์มเอกสาร </p>
                            </div>
                            <div class="col-lg-6">
                                <label>: เอกสารขอขึ้นสอบ</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <!-- info -->

                    <!-- work step -->
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col">
                                <p>เส้นทางเอกสาร</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="">อ.บิน</label>
                            </div>
                            <div class="col">
                                <label for="">อ.บาน</label>
                            </div>
                            <div class="col">
                                <label for="">อ.โบย</label>
                            </div>
                            <div class="col">
                                <button class="btn btn-light btn-sm"><i class="fas fa-user-plus"></i></button>
                            </div>
                        </div>
                        <!-- line -->
                        <div class="row text-center">
                            <div class="col">
                                <p><i class="fas fa-arrow-circle-down"></i></p>
                            </div>
                        </div>
                        <!-- line -->

                        <div class="row">
                            <div class="col">
                                <label for="">อ.ติบ</label>
                            </div>
                            <div class="col">
                                <label for="">อ.โตย</label>
                            </div>
                            <div class="col">
                                <button class="btn btn-light btn-sm"><i class="fas fa-user-plus"></i></button>
                            </div>
                        </div>
                        <!-- line -->
                        <div class="row text-center">
                            <div class="col">
                                <p><i class="fas fa-arrow-circle-down"></i></p>
                            </div>
                        </div>
                        <!-- line -->
                        <div class="row">
                            <div class="col">
                                <label for="">อ.หึย</label>
                            </div>
                            <div class="col">
                                <label for="">อ.โห้ยย</label>
                            </div>
                            <div class="col">
                                <button class="btn btn-light btn-sm"><i class="fas fa-user-plus"></i></button>
                            </div>
                        </div>
                        <hr>
                        <!-- add row -->
                        <div class="row">
                            <div class="col-lg-4"></div>
                            <div class="col-lg-4">
                                <button class="btn btn-light btn-sm"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <!-- add row -->
                    </div>
                    <!-- work step -->
                    
                </div>
            </div>
        </div>
    </div>