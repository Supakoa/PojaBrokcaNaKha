<?php
    // connect database server
require '../../server/server.php';
?>

<div class="container-fluid mx-auto">
    <div id="head">
        <h3>ตั้งค่า : รายชื่อวิชา</h3>
        <hr>
    </div><!-- head -->

    <div  class="table-responsive">
        <table class="table table-bordered table-hover display nowrap responsive table_table">

            <thead>
                <tr>
                    <th>ลำดับ</th>
                    <th>รหัสวิชา</th>
                    <th>ชื่อวิชา</th>
                    <th>ลบ</th>
                </tr>
            </thead><!-- table head -->

            <tbody>
                <?php
                $sql_sub_all = "SELECT * FROM `subject` WHERE 1";
                $result = mysqli_query($con, $sql_sub_all);
                $i = 0;
                while ($row_sub_all = mysqli_fetch_array($result)) { ?>
                <tr>
                    <td>
                        <?php echo (++$i) . ').';
                        $id = $row_sub_all[0];
                        $name = $row_sub_all[1]; ?>
                    </td>
                    <td>
                        <?php echo $row_sub_all['sub_id']; ?>
                    </td>
                    <td>
                        <?php echo $row_sub_all['sub_name']; ?>
                    </td>
                    <td class="text-center">
                        <button id="<?php echo $row_sub_all['sub_id']; ?>" class="btn btn-sm btn-outline-dark" onclick="delete_sub(this);"><i class="far fa-trash-alt"></i></button>
                    </td>

                </tr>

                <?php 
            } ?>
            </tbody>
        </table><br>
        <button class="btn btn-block btn-success shadow" onclick="insert_sub();"><i class="fas fa-plus" style="color:white;"></i></button>
    </div><!-- body -->

</div>

<script>
$(document).ready(function () {
    $('.table_table').DataTable();
});
    function delete_sub(elem) {

        // get element id name to read and send to ajax
        let id = $(elem).attr('id');

        Swal.fire({
            title: 'ยืนยันที่จะลบ?',
            text: "Are you sure to delete?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ลบ',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.confirm) {
                //calling ajax 
                $.ajax({
                    type: "POST",
                    url: "../send_sql/subject_del_sql.php",
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
                    $("#in_body").load("../page/subject.php");
                })
            }
        })

    }

    // function add new subject
    function insert_sub() {
        let id, name;
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            progressSteps: ['1', '2']
        }).queue([{
                title: 'รหัสวิชา',
                text: 'Subject ID.'
            },
            {
                title: 'ชื่อวิชา',
                text: 'Subject Name.'
            }
        ]).then((result) => {
            if (result.value[0] == "" || result.value[1] == "") {
                Swal.fire({
                    type: 'error',
                    title: 'ผิดพลาด',
                    text: 'กรุณากรอกข้อมูลให้ครบตามที่กำหนด'
                });
            } else {
                id = result.value[0];
                name = result.value[1];
                Swal.fire({
                    title: 'ตรวจสอบก่อนส่ง',
                    html: 'Your subject answers: <br><br><p>' +
                        '(รหัสวิชา/ID): ' + result.value[0] + '<br>' +
                        '(ชื่อวิชา/name): ' + result.value[1] + '<br>' +
                        '</p>',
                    confirmButtonText: 'ยืนยัน'
                }).then(() => {
                    // alert(id+" : "+name); // check data

                    $.ajax({
                        type: "POST",
                        url: "../send_sql/subject_add_sql.php",
                        data: {
                            id: id,
                            name: name
                        },
                        success: function(data) {
                            if (data == 'true') {
                                Swal.fire({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    type: 'success',
                                    titleText: 'เพิ่มข้อมูลสำเร็จ',
                                });
                            } else {
                                Swal.fire({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000,
                                    type: 'warning',
                                    titleText: 'เพิ่มข้อมูลไม่สำเร็จ',
                                });
                            }
                        }
                    }).then((result) => {
                        // refresh page in index.php by jquery
                        $("#in_body").load("../page/subject.php");
                    })
                })
            }
        });
    }
</script> 