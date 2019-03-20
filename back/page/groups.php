<?php 
require '../../server/server.php';

?>
<div class="container-fluid text-center" style="margin:20px;">
    <h3>ตั้งค่า : ตั้งค่ากลุ่มผู้มีสิทธิ์ลงนาม</h3>
    <hr>

    <!-- button add -->
    <div class="container-fluid">
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#new_group"><i class="fas fa-plus-circle"></i>
            เพิ่ม</button>
    </div>

    <div class="table-responsive">

        <table class="table table-striped table-hover table-bordered responsive display nowrap table_table" id="table">
            <thead>
                <th>ลำดับ</th>
                <th>ชื่อกลุ่ม</th>
                <th>ประเภท</th>
                <th></th>
            </thead>
            <tbody>
                <?php 
                $sql = "SELECT * FROM `groups` WHERE 1";
                $re_group = mysqli_query($con, $sql);
                $sum = "";
                $i = 1;
                while ($row_group =  mysqli_fetch_array($re_group)) {
                    $btn = ' <button type="button" class="btn btn-outline-warning btn-sm" onclick="modal_edit(' . $row_group['group_id'] . ',' . $row_group['type'] . ')">แก้ไข</button>';
                    $sum .= '<tr>
                                 <td>' . $i++ . '</td>' .
                        '<td>' . $row_group['name'] . '</td>' .
                        '<td>' . $row_group['type'] . '</td>' .
                        '<td>' . $btn . '</td>
                            </tr>';
                }
                echo $sum;
                ?>

                </tr>
            </tbody>
        </table>


        <input type="hidden" id="now_alert" value="">

    </div>
</div>


<div class="modal fade" id="new_group" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3>เพิ่มกลุ่ม</h3>
            </div>
            <div class="modal-body">
                <form action="" id="form_add" >
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
<div id="div_add_group"></div>

<div id="alert_error"></div>

<div id="show_alert"></div>

<div id="edit_group_div"></div>
<script>
    $("#new_group").modal("hide");
    $(document).ready(function() {
        $('.table_table').DataTable();


    });

    function modal_edit(group, type_group) {

        $.post("../modal/edit_groups.php", {
                id: group,
                type: type_group
            },
            function(data, status) {
                // alert(status);
                $("#edit_group_div").html(data);
                $("#edit_group_modal").modal('show');

            }
        );

    };


    $("#form_add").submit(function(e) {

        e.preventDefault();
        a = $('#group_name').val();
        b = $('#group_type').val();
        $.post("../send_sql/add_group.php", {
                name: a,
                type: b
            },
            function(data) {



                $("#div_add_group").html(data);


                c = $("#alert").val();

                $.post("../send_sql/alert.php", {
                        alert: c
                    },
                    function(alert_data) {
                        $("#show_alert").html(alert_data);
                    }

                );
            }

        );
        $("#new_group").modal("hide");

        $('#new_group').on('hidden.bs.modal', function(e) {
            $("#in_body").load("groups.php");

        });




    });
</script> 