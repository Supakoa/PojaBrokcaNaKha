<div class="modal fade bd-example-modal-lg" id="new_fac">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">เพิ่มคณะ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <label for="fac_id">กรอกรหัสคณะ</label>
                    <input id="fac_id" class="form-control" type="text">
                </div><br>
                <div class="container">
                    <label for="fac_name">กรอกชื่อคณะ</label>
                    <input id="fac_name" class="form-control" type="text">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                <button type="button" onclick="fac_add();" class="btn btn-primary">ยืนยัน</button>
            </div>
        </div>
    </div>
</div>

<script>
    function fac_add(){

        // jq get vlaue
        let id = $('#fac_id').val();
        let name = $('#fac_name').val();

        $.post("../send_sql/fac_add_sql.php",{id:id,name:name},
            function (data, textStatus, jqXHR) {
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
                        titleText: 'เกิดข้อผลิดพลาด',
                    });
                }
            }
        ).then((result) => {
            $('#new_fac').modal('hide');
            $('#new_fac').on('hidden.bs.modal', function () {
                $("#in_body").load("../page/faculty.php");
            });
        });

    }
</script>