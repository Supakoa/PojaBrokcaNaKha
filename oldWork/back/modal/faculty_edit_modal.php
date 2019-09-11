<?php
    // connect database 
    require '../../server/server.php';

    $id = $_POST['id'];

    $sql = " SELECT * FROM fac WHERE fac_id = '$id' ";
    $result = mysqli_query($con , $sql);
    $row = mysqli_fetch_array($result);

?>

<div id="edit_fac" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>แก้ไขข้อมูล</h3>
            </div>
            <div class="modal-body">
                <input type="hidden" id="hide_fac_id" value="<?php echo $row['fac_id']; ?>">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text">รหัสคณะ</label>
                    </div>
                    <input class="form-control" type="text" id="fac_id" value="<?php echo $row['fac_id']; ?>">
                </div><hr>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text">ชื่อคณะ</label>
                    </div>
                    <input class="form-control" type="text" id="name" value="<?php echo $row['name']; ?>">
                </div>
            </div>
            <div class="modal-footer">
                <button onclick="facEdit2();" class="btn btn-success">แก้ไขสำเร็จ</button>
                <button data-dismiss="modal" class="btn btn-secondary">ยกเลิก</button>
            </div>
        </div>
    </div>
</div>

<script>

    function facEdit2(){
        let id =  $('#fac_id').val();
        let name = $('#name').val();
        let hide  = $('#hide_fac_id').val();

        // alert(id+" : "+name+" : "+hide);
        
        $.ajax({
            type: "POST",
            url: "../send_sql/fac_edit_sql.php",
            data: {id:id,name:name,hide:hide},
            success: function (data) {
                // return result of sql
                if(data == 'true'){
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton:false,
                        timer:3000,
                        type: 'success',
                        titleText: 'แก้ไขข้อมูลสำเร็จ',
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
        }).then((result) => {
            $('#edit_fac').modal('hide');
            $('#edit_fac').on('hidden.bs.modal', function () {
                $("#in_body").load("../page/faculty.php");
            });
        });
    }

</script>