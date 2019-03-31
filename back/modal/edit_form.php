<?php 
require '../../server/server.php';

$sql_group = "SELECT * FROM `groups`";
$re_group = mysqli_query($con,$sql_group);

// subject

$all_group = '<label for="all_group">กลุ่มผู้มีสิทธิ์ลงนาม</label>
        <select name="all_group" id = "group" class="form-control select2" required>
        <option hidden="" selected="" value="">เลือกกลุ่มผู้มีสิทธิ์ลงนาม</option>';
while ($row_group = mysqli_fetch_array($re_group)) {
    $all_group .= '<option value="' . $row_group['group_id'] . '"> ' .$row_group['name']. '</option>';
}
$all_group .= '</select>';

$form_id = $_POST['id'];
$row_form = mysqli_fetch_array(mysqli_query($con,"SELECT * FROM `form` WHERE form_id = '$form_id' "));
?>
<div class="modal fade" id="edit_form_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
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
                            <p>ชื่อฟอร์มเอกสาร </p>
                        </div>
                        <div class="col-lg-6">
                            <label>: <?php echo $row_form['name'] ?></label>
                        </div>
                    </div>
                </div>
                <hr>
                <!-- info -->

                <!-- work step -->
                <div class="card-body">
                    <div class="row text-right">
                        <div class="col">
                            <button type="button" class="btn btn-outline-danger btn-lg btn-hover"
                                style="font-size: 14px;"
                                onclick="del_form_way('<?php echo $form_id; ?>')">ลบทั้งหมด</button>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col">
                            <p>เส้นทางเอกสาร</p>
                        </div>
                    </div>

                    <?php
                    $i = 1;
                        $re_form_way = mysqli_query($con,"SELECT * FROM `form_way`,groups WHERE groups.group_id = form_way.group_id AND form_way.form_id = '$form_id' AND form_way.step = '$i' ");
                        while($row_form_way = mysqli_fetch_array($re_form_way)){ ?>
                    <div class="row text-center">
                        <div class="col">
                            <?php 
                                echo '<button type="button" class="btn btn-outline-info btn-sm btn-singha" style = "font-size: 14px;" 
                                onclick = "edit_group(\''.$row_form_way['group_id'].'\',\''.$row_form_way['type'].'\')" >'.$row_form_way['name'].'</button>';
                            ?>
                        </div>
                    </div>
                    <!-- line -->
                    <div class="row text-center">
                        <div class="col">
                            <br>
                            <p><i class="fas fa-arrow-circle-down"></i></p>
                        </div>
                    </div>
                    <?php 
                        $i++;
                        $re_form_way = mysqli_query($con,"SELECT * FROM `form_way`,groups WHERE groups.group_id = form_way.group_id AND form_way.form_id = '$form_id'  AND form_way.step = '$i' ");

                
                } ?>
                    <!-- line -->

                    <!-- add row -->
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4 text-center">
                            <button class="btn btn-light btn-sm" data-toggle="modal" data-target="#add_form_group"><i
                                    class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <!-- add row -->
                </div>
                <!-- work step -->

            </div>
        </div>
    </div>
</div>
<div id="edit_group_div"></div>

<div style="margin-top:100px" class="modal fade" id="add_form_group" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เลือกกลุ่มผู้ใช้งาน</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row text-right">
                    <div class="col-6">
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal"
                            data-target="#new_group"><i class="fas fa-plus-circle"></i>
                            เพิ่ม</button>
                    </div>
                </div>
                <?php 
            echo $all_group ;
        ?>
                </form>


                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" id="save">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" style="margin-top:120px" id="new_group" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3>เพิ่มกลุ่ม</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
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
    group_id = null;
    now_id = '<?php echo $form_id ; ?>';
    step_now = '<?php  echo $row_form['step_all'] ; ?> ';
    $('#group').change(function (e) {
        e.preventDefault();
        group_id = $('#group').val();

    });
    $('#save').click(function (e) {
        e.preventDefault();
        if (group_id == null) {
            Swal({
                type: 'warning',
                title: 'กรุณาเลือกกลุ่มผู้มีสิทธิ์ลงนาม',
            });
        } else {
            status_now = 'add';
            $.post("../send_sql/sql_form_add_group.php", {
                    form: now_id,
                    step: step_now,
                    group_id: group_id,
                    status: status_now
                },
                function (data) {


                    $('#add_form_group').modal('hide');
                    $('#add_form_group').on('hidden.bs.modal', function (e) {
                        $('#edit_form_modal').modal('hide');
                        $('#edit_form_modal').on('hidden.bs.modal', function (e) {
                            $("#edit_form_div").load("../modal/edit_form.php", {
                                    id: now_id
                                },
                                function (data2) {
                                    $("#edit_form_div").html(data2);
                                    $("#edit_form_modal").modal('show');

                                });
                        });
                    });

                    $('#show_alert').html(data);
                    // alert(data);
                }
            );


        }
    });

    function del_form_way() {

        Swal.fire({
            title: 'ท่านต้องการลบทั้งหมด ?',
            text: 'ข้อมูลทั้งหมดจะถูกลบและคุณต้องเพิ่มข้อมูลใหม่มาแทน.',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28A745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่!',
            cancelButtonText: 'ไม่'
        }).then((result) => {
            if (result.value) {
                status_now = 'del';
                $.post("../send_sql/sql_form_add_group.php", {
                        form: now_id,
                        step: step_now,
                        group_id: group_id,
                        status: status_now
                    },
                    function (data) {

                        $('#edit_form_modal').modal('hide');
                        $('#edit_form_modal').on('hidden.bs.modal', function (e) {
                            $("#edit_form_div").load("../modal/edit_form.php", {
                                    id: now_id
                                },
                                function (data2) {
                                    $("#edit_form_div").html(data2);
                                    $("#edit_form_modal").modal('show');

                                });
                        });
                        $('#show_alert').html(data);
                    }
                );

            }
        })
    }

    function edit_group(group, type_group) {

        $.post("../modal/edit_groups.php", {
                id: group,
                type: type_group
            },
            function (data, status) {
                // alert(status);
                $("#edit_group_div").html(data);
                $("#edit_group_modal").modal('show');

            }
        );

    };

    $("#form_add").submit(function (e) {

        e.preventDefault();
        a = $('#group_name').val();
        b = $('#group_type').val();
        $.post("../send_sql/add_group.php", {
                name: a,
                type: b
            },
            function (data) {
                $("#div_add_group").html(data);
                c = $("#alert").val();
                $.post("../send_sql/alert.php", {
                        // alert: c
                    },
                    function (alert_data) {
                        $("#new_group").modal("hide");
                        $('#new_group').on('hidden.bs.modal', function (e) {
                            $("#add_form_group").modal("hide");
                            $('#add_form_group').on('hidden.bs.modal', function (e) {
                                $('#edit_form_modal').modal('hide');
                                $('#edit_form_modal').on('hidden.bs.modal', function (
                                e) {
                                    $("#in_body").load("sender.php",
                                        function () {
                                            $("#edit_form_div").load(
                                                "../modal/edit_form.php", {
                                                    id: now_id
                                                },
                                                function (data2) {
                                                    $("#edit_form_div")
                                                        .html(data2);
                                                    $("#edit_form_modal")
                                                        .modal('show');
                                                    // $("#add_form_group").modal("show");
                                                });
                                        });


                                });
                            });
                        });

                    }

                );
                $('#show_alert').html(data);
            }

        );

    });
</script>