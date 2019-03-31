<?php 
require '../../server/server.php';

$sql_form = "SELECT * FROM `form` ";
$re_form = mysqli_query($con, $sql_form);


?>
<div class="container-fluid ">
    <h3>ตั้งค่า : ขั้นตอนเอกสาร</h3>
    <hr>

    <!-- start table -->
    <div class="table-responsive">
        <table class="table table-bordered responsive display nowrap table-striped table_table">
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                <?php 
                $i = 1;
                while ($row_form = mysqli_fetch_array($re_form)) {
                    $btn = ' <button type="button" class="btn btn-outline-warning btn-sm" onclick="modal_edit(\'' . $row_form['form_id'] . '\')">แก้ไข</button>';

                    echo '<tr><td>' . $i++ . '</td><td>' . $row_form['name'] . '</td><td>' . $btn . '</td></tr>';
                }
                ?>

            </tbody>
        </table>
    </div>
    <!-- end table -->
</div>
<div id="edit_form_div"></div>
<div id="show_alert"></div>
<div class="modal fade" id="new_group" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3>เพิ่มกลุ่ม</h3>
            </div>
            <div class="modal-body">
                <form action="" id="form_add">
                    <div class="row">
                        <div class="col">
                            <label for="group_name">ชื่อกลุ่ม</label>
                            <input class="form-control" type="text" name="group_name" id="group_name" required>
                        </div>
                        <div class="col">
                            <label for="group_type">เลือกประเภท</label>
                            <select class="form-control" name="group_type" id="group_type" required>
                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                <option value="1">ทั่วไป</option>
                                <option value="2">ตามวิชา</option>
                            </select>
                        </div>
                    </div><br>
                    <div class="text-center">
                        <button type="submit" class="btn btn-sm btn-success" id='add_group'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $('.table_table').DataTable();

    });

    function modal_edit(form_id) {

        $.post("../modal/edit_form.php", {
                id: form_id
            },
            function(data) {
                // alert("123");
                // alert(status);
                $("#edit_form_div").html(data);
                $("#edit_form_modal").modal('show');

            }
        );

    };
</script> 