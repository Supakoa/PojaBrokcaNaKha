<div class="w3-container-fluid w3-center" style="margin:20px;">
    <div class="w3-container-fluid" style="margin:20px;padding:20px;">
        <h1>ตั้งค่า : ตั้งค่ากลุ่มผู้มีสิทธิ์ลงนาม</h1>
        <hr>

        <!-- button add -->
        <div class="w3-container-fluid w3-center" style="margin:20px;">
            <button type="button" class="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#new_group"><i
                    class="fas fa-plus-circle"></i>
                เพิ่ม</button>
        </div>

        <div class="w3-container-fluid" style="padding:20px;">

            <table class="table table-striped table-hover table-bordered table-sm table_table" id="table">
                <thead>
                    <th>ลำดับ</th>
                    <th>ชื่อกลุ่ม</th>
                    <th>ประเภท</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div id="div_add_group"></div>

            <div id="show_alert">
                TEST
            </div>
            <input type="hidden" id="now_alert" value="">

        </div>
    </div>
</div>

<div class="modal fade" id="new_group" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1>เพิ่มกลุ่ม</h1>
            </div>
            <div class="modal-body">
                <form action="" id="form_add">
                    <div class="row">

                        <div class="col">
                            <label for="group_name">ชื่อกลุ่ม</label>
                            <input type="text" name="group_name" id="group_name" required>
                        </div>
                        <div class="col">
                            <label for="">เลือกประเภท</label>
                            <select class="formcontrol" name="group_type" id="group_type" required>
                                <option hidden="" selected="" value="">เลือกประเภท</option>
                                <option value="1">ทั่วไป</option>
                                <option value="2">ตามวิชา</option>

                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <button type="submit" id='add_group'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.table_table').DataTable();
    });
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
                $("#new_group").modal("hide");
                c = $("#alert").val();

                $.post("../send_sql/alert.php", {
                        alert: c
                    },
                    function (alert_data) {
                        $("#show_alert").html(alert_data);
                    }

                );
            }
        );


        $("#new_group").modal("hide");




    });
</script>