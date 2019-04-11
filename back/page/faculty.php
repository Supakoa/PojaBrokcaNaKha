<?php 
// connect database server
require '../../server/server.php';
?>

<div class="container-fluid mx-auto">

    <div id="head">
        <h3>ตั้งค่า : รายชื่อคณะ/สาขา</h3>
        <hr>
    </div>

    <div class="container text-center">
        <button type="button" onclick="facAddModal();" class="btn shadow-md btn-sm btn-info"><i class="fas fa-plus" style="color:white;">
                เพิ่มคณะ</i></button>
    </div><br>

    <!-- modal tempolary -->
    <div id="tmp_fac_modal"></div>

        <div class="table-responsive">
            <table class="table table-bordered shadow-lg table-hover display responsive table_table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">คณะ</th>
                        <th>ดู</th>
                        <th>แก้ไข</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                
                <tbody>
                <?php 
                $i = 0;
                $sql = "SELECT * FROM fac WHERE 1";
                $result = mysqli_query($con, $sql);
                while ($row = mysqli_fetch_array($result)) {
                    ?>
                    <tr>
                        <td><?php echo ++$i; ?></td>
                        <td><?php echo $row['name']; ?></td>
                        <td><button onclick="facOpenMaj(<?php echo $row['fac_id']; ?>);" class="btn btn-success btn-sm"><i class="fas fa-search-plus" style="color:white;"></i></button></td>
                        <td><button onclick="facEditModal(<?php echo $row['fac_id']; ?>);" class="btn btn-warning btn-sm"><i class="far fa-edit" style="color:white;"></i></button>
                        </td>
                        <td><button onclick="facDelModal(<?php echo $row['fac_id']; ?>);" class="btn btn-danger btn-sm"><i class="far fa-trash-alt" style="color:white;"></i></i></button></td>
                    </tr>
                    
                <?php 
            } ?>
            
            </tbody>
            </table>
        </div>

</div>

<script>
    $(Document).ready(function() {
        $('.table_table').DataTable();
    });

    function facAddModal() {
        $.post("../modal/faculty_add_modal.php",
            function(data, textStatus, jqXHR) {
                $('#tmp_fac_modal').html(data);
                $('#new_fac').modal('show');
            }
        )
    }

    function facDelModal(id) {
        Swal.fire({
            title: 'ยืนยันการลบ?',
            text: "ลบรหัสคณะ: " + id,
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
                    url: "../send_sql/fac_del_sql.php",
                    data: {
                        id: id
                    },
                    success: function(data) {
                        // return result of sql
                        if (data == 'true') {
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                type: 'success',
                                titleText: 'ลบสำเร็จ',
                            });
                        } else {
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                type: 'warning',
                                titleText: 'เกิดข้อผลิดพลาด',
                            });
                        }
                    }
                }).then((result) => {
                    // refresh page in index.php by jquery
                    $("#in_body").load("../page/faculty.php");
                });
            }
        });
    }

    function facEditModal(id) {
        $.post("../modal/faculty_edit_modal.php", {
                id: id
            },
            function(data) {
                $('#tmp_fac_modal').html(data);
                $('#edit_fac').modal('show');
            }
        );
    }

    function facOpenMaj(id) {
        $.post("../modal/faculty_open_maj_modal.php", {
                id: id
            },
            function(data) {
                $('#tmp_fac_modal').html(data);
                $('#openMaj').modal('show');
            }
        );
    }
</script> 