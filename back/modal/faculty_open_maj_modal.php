<?php
    // conncet database
    require '../../server/server.php';

    $id = $_POST['id'];

    $sql = " SELECT * FROM major WHERE fac_id = '$id' ";
    $result = mysqli_query($con,$sql);
?>

<div class="modal fade" id="openMaj">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Open <?php echo $id; ?></h3>
            </div>
            <div class="container">
                <div class="modal-body">
                    <button onclick="openAddCol();" class="btn btn-success shadow-lg btn-block"><i style="color:white;" class="fas fa-plus"></i></button><hr>
                    <div class="table-responsive-lg">
                        <table class="table table-bordered shadow-sm table-sm table-hover display text-center nowrap responsive">
                            <thead>
                                <tr>
                                    <th>ลำดับ</th>
                                    <th>รหัสสาขา</th>
                                    <th>ชื่อสาขา</th>
                                    <th>ลบ</th>
                                </tr>
                            </thead>
                            <?php 
                                $i = 0;
                                while($row_maj = mysqli_fetch_array($result)){
                            ?>
                            <tbody>
                                <tr>
                                    <td><?php echo ++$i; ?></td>
                                    <td><?php echo $row_maj['mar_id']; ?></td>
                                    <td><?php echo $row_maj['name']; ?></td>
                                    <td><button onclick="delColMaj(<?php echo $row_maj['mar_id']; ?>,<?php echo $id; ?>);" class="btn btn-danger"><i style="color:white;" class="far fa-trash-alt"></i></button></td>
                                </tr>
                            </tbody>
                            <?php } ?>
                            <tr id="add_col" class="d-none">
                                <td><?php echo ++$i; ?></td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">รหัสสาขา</label>
                                        </div>
                                        <input onchange="inputChange();" id="input_id_maj" type="text" class="form-control">
                                        <div id="valid_id_maj" class="valid-feedback"></div>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">ชื่อสาขา</label>
                                        </div>
                                        <input onchange="inputChange();" id="input_name_maj" type="text" class="form-control">
                                    </div>
                                </td>
                                <td><button onclick="addNewMaj(<?php echo $id; ?>);" id="btn_add_maj" class="btn btn-warning"><i style="color:white;" class="fas fa-plus"></i></button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>

<script>
    function inputChange(){
        // alert($("#input_id_maj").val()+" : "+$("#input_name_maj").val());
        if($("#input_id_maj").val() !== "" && $("#input_name_maj").val() !== ""){
            // alert('a');
            $("#btn_add_maj").removeClass("btn btn-warning");
            $("#btn_add_maj").addClass("btn btn-success");
        }else if($("#input_id_maj").val() === "" || $("#input_name_maj").val() === ""){
            // alert('b');
            $("#btn_add_maj").removeClass("btn btn-success");
            $("#btn_add_maj").addClass("btn btn-warning");
        }
    }

    function addNewMaj(facID){
        if($("#input_id_maj").val() !== "" && $("#input_name_maj").val() !== ""){

            let id = $("#input_id_maj").val();
            let name = $("#input_name_maj").val();

            // alert(id+" : "+name);

            $.post("../send_sql/maj_add_sql.php",
                {name:name,id:id,facID:facID},
                function (data) {
                    // return result of sql
                    if(data == 'true'){
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton:false,
                            timer:3000,
                            type: 'success',
                            titleText: 'เพิ่มข้อมูลสำเร็จ',
                        });
                    }else{
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton:false,
                            timer:3000,
                            type: 'warning',
                            titleText: 'เกิดข้อผิดพลาด',
                        });
                    }
                }
            ).then((result) => {
                $("#openMaj").modal("hide");

                $('#openMaj').on('hidden.bs.modal', function () {
                    facOpenMaj(facID);
                    $("#add_col").addClass("d-none");
                });
            });
        }else{
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton:false,
                timer:3000,
                type: 'warning',
                titleText: 'ใส่ข้อมูลให้ครบถ้วน',
            });
        }
    }
    
    let click = 0;
    function openAddCol(){
        if(++click%2==1){
            $("#add_col").removeClass("d-none");
        }else{
            $("#add_col").addClass("d-none");
        }
    }
    $('#openMaj').on('hidden.bs.modal', function () {
        $("#add_col").addClass("d-none");
    });

    function delColMaj(majID,facID){
        Swal.fire({
            title: 'ยืนยันการลบ?',
            text: "ลบรหัสสาขา: "+majID,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ลบ',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: "POST",
                    url: "../send_sql/maj_del_sql.php",
                    data: {id:majID},
                    success: function (data) {
                        // return result of sql
                        if(data == 'true'){
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton:false,
                                timer:3000,
                                type: 'success',
                                titleText: 'ลบสำเร็จ',
                            });
                        }else{
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton:false,
                                timer:3000,
                                type: 'warning',
                                titleText: 'เกิดข้อผลิดพลาด',
                            });
                        }
                    }
                }).then((result) => {
                    $("#openMaj").modal("hide");

                    $('#openMaj').on('hidden.bs.modal', function () {
                        facOpenMaj(facID);
                        $("#add_col").addClass("d-none");
                    });
                });
            }
        });
    }

</script>