<?php   
    require '../../server/server.php';

    $sql_form = "SELECT * FROM `form` ";
    $re_form = mysqli_query($con,$sql_form);


?>
<div class="container-fluid text-center" >
    <div class="container-fluid ">
        <h3>ตั้งค่า : ขั้นตอนเอกสาร</h3>
        <hr>

        <!-- button delete select -->
        <!-- <button type="button" class="w3-btn w3-border w3-border-red w3-round-large" data-toggle="modal" data-target="#delete_select"><i
                class="fas fa-trash" style="color:red"></i>
            Delete Checked</button> -->

        <!-- modal delete select -->
        <!-- <div class="modal fade" id="delete_select" tabindex="-1" role="dialog" aria-hidden="true">
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
        </div> -->

        <!-- start table -->
        <div class="table-responsive-lg" >
            <table class="table table-bordered responsive display nowrap table-striped table_table">
                <thead>
                    <tr>
                        <!-- <th><input class="w3-check" type="checkbox"><i class="fas fa-tasks"></i></i></th> -->
                        <th>Order</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   
                       <?php 
                       $i = 1 ;
                        while($row_form = mysqli_fetch_array($re_form)){
                        $btn = ' <button type="button" class="btn btn-outline-warning btn-sm" onclick="modal_edit(' . $row_form['form_id'].')">แก้ไข</button>';

                            echo '<tr><td>'.$i++.'</td><td>'.$row_form['name'].'</td><td>'.$btn.'</td></tr>';
                        }
                       ?>
                   
                  
                </tbody>
            </table>
        </div>
        <!-- end table -->

    </div>

    <div class="modal fade" id="edit_modal" tabindex="-1" role="dialog" aria-hidden="true">
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

</div>
<script>
$(document).ready(function () {
            $('.table_table').DataTable();   
            
});
</script>