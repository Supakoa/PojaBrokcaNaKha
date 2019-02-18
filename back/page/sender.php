<div class="w3-container-fluid w3-center" style="margin-top:20px;margin-left:50px;margin-right:50px;">
    <div class="w3-container-fluid " style="margin:20px;padding:20px;">
        <h1>ตั้งค่า : ขั้นตอนเอกสาร</h1>
        <hr>

        <!-- button delete select -->
        <button type="button" class="w3-btn w3-border w3-border-red w3-round-large" data-toggle="modal" data-target="#delete_select"><i
                class="fas fa-trash" style="color:red"></i>
            Delete Checked</button>

        <!-- modal delete select -->
        <div class="modal fade" id="delete_select" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1>Delete Select :</h1>
                    </div>
                    <div class="modal-body">
                        <a class="btn btn-lg btn-success">Yes</a>
                        <a class="btn btn-lg btn-warning">No</a>
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        </div>

        <!-- start table -->
        <div class="w3-container-fluid" style="margin-top:20px;margin-right:100px;margin-left:100px;">
            <table class="table table-bordered table-sm w3-striped w3-border-red">
                <thead>
                    <tr>
                        <th><input class="w3-check" type="checkbox"><i class="fas fa-tasks"></i></i></th>
                        <th>Order</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input class="w3-check" type="checkbox"></td>
                        <td>1).</td>
                        <td>เอกสารขอขึ้นสอบ</td>
                        <td>DE-2019</td>
                        <td>
                            <button type="button" class="w3-btn  w3-round-large" data-toggle="modal" data-target="#edit_modal"><i
                                    class="far fa-edit " style="color:#FBBC05"></i> Edit</button>

                        </td>
                    </tr>
                    <!-- start tmp 2 -->
                    <tr>
                        <td><input class="w3-check" type="checkbox"></td>
                        <td>2).</td>
                        <td>แบบคำร้องขอลาป่วย</td>
                        <td>RS-2019</td>
                        <td><button type="button" class="w3-btn w3-round-large" data-toggle="modal" data-target="#edit_modal"><i
                                    class="far fa-edit" style="color:#FBBC05"></i> Edit</button></td>
                    </tr>
                    <!-- end tmp 2 -->
                </tbody>
            </table>
        </div>
        <!-- end table -->

    </div>

    <div class="modal fade" id="edit_modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h1>Modal Setting : Sender</h1>
                </div>
                <div class="modal-body">

                    <!-- info -->
                    <div class="card-body text-left">
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-5 ">
                                <p>รหัสเอกสาร </p>
                            </div>
                            <div class="col-lg-6">
                                <label>: 5912512</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-lg-5 ">
                                <p>ชื่อ </p>
                            </div>
                            <div class="col-lg-6">
                                <label>: นายสมพง ดงดิบ</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <!-- info -->
                    <!-- work step -->
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
                            <label for="">อ.บิน</label>
                        </div>
                        <div class="col">
                            <label for="">อ.บิน</label>
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
                            <label for="">อ.บิน</label>
                        </div>
                        <div class="col">
                            <label for="">อ.บิน</label>
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
                            <label for="">อ.บิน</label>
                        </div>
                        <div class="col">
                            <label for="">อ.บิน</label>
                        </div>
                        <div class="col">
                            <button class="btn btn-light btn-sm"><i class="fas fa-user-plus"></i></button>
                        </div>
                    </div>
                    <hr>
                    <!-- work step -->
                    <!-- add row -->
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4">
                            <button class="btn btn-light btn-sm"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <!-- add row -->

                </div>
            </div>
        </div>
    </div>

</div>