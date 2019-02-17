<div class="w3-container-fluid w3-center w3-black" style="margin-top:20px;margin-left:50px;margin-right:50px;">
    <div class="w3-container-fluid w3-gray" style="margin:20px;padding:20px;">
        <h1>Setting : Sender</h1>
        <hr>

        <!-- button delete select -->
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete_select"><i class="fas fa-trash"></i>
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
            <table class="table table-bordered table-sm">
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
                        <th><input class="w3-check" type="checkbox"></th>
                        <th>1).</th>
                        <td>เอกสารขอขึ้นสอบ</td>
                        <td>DE-2019</td>
                        <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#edit_modal"><i class="far fa-edit"></i> Edit</button></td>
                    </tr>
                    <!-- start tmp 2 -->
                    <tr>
                        <th><input class="w3-check" type="checkbox"></th>
                        <th>2).</th>
                        <td>แบบคำร้องขอลาป่วย</td>
                        <td>RS-2019</td>
                        <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#edit_modal"><i class="far fa-edit"></i> Edit</button></td>
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
                    <div class="container">
                        
                    </div>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>

</div>