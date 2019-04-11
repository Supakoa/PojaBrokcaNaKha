<?php
require '../../server/server.php';
$sql = "SELECT * FROM news WHERE 1";
$re_news = mysqli_query($con, $sql);
$order = 0;
?>
<div class="container-fluid ">
        <h3>ตั้งค่า : ข่าว</h3>
        <hr>

        <!-- button add -->
        <div class="container-fluid text-center">
            <button onclick="openAddModal();" type="button" class="btn btn-success btn-sm"><i style="color:white;" class="fas fa-plus-circle"></i>
                </button>
        </div><br>

        <div class="container-fluid table-responsive text-center ">
            <table class="table table-borderless responsive nowrap table-hover table_table">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ที่อยู่เว็บไซต์</th>
                        <th>หน้าปก</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    while ($row_news = mysqli_fetch_array($re_news)) {
                        ?>
                    <tr>
                        <td><?php echo ++$order . ")"; ?></td>
                        <td> <a href="#" target="_blank"><?php echo $row_news['news_url']; ?></a></td>
                        <td> <img class="w3-red" src="..\image\news\<?php echo $row_news['news_img']; ?>" width="200" height="100"></td>
                        <td >
                            <button class="btn btn-lg btn-white" onclick="openDelModal(<?php echo $row_news['news_id'] ?>,'<?php echo $order; ?>');"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                    <?php 
                } ?>

                </tbody>
            </table>

        </div>


        <!-- start modal delete -->
        <!-- effect : fade_in -->
        <div class="modal fade" id="del_modal" tabindex="-1" role="dialog" aria-hidden="true">
            <!-- set_size : small -->
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- header -->
                    <div class="modal-header">
                        <h1 style="color:black;">Confirm Delete : </h1>
                    </div>
                    <!-- body -->
                    <div class="modal-body">
                        <button type="button" class="btn btn-lg btn-outline-danger">Yes</button>
                        <button type="button" class="btn btn-lg btn-outline-warning">No</button>
                    </div>
                    <!-- footer -->
                    <div class="modal-footer">
                    </div>

                </div>
            </div>
        </div>
        <!-- end modal delete -->

        <!-- modal delete ajax -->
        <div class="" id="news_mo"></div>

</div>

<script>
    $(document).ready(function () {
        $('.table_table').DataTable();
    });
    function openDelModal(id_del, order) {
        $.post("../modal/news_del.php", {
                del_id: id_del,
                order: order
            },
            function(data, textStatus, jqXHR) {
                $("#news_mo").html(data);
                $("#new_del").modal("show");
            }
        )
    }

    function openAddModal() {
        $.post("../modal/news_add.php",
            function(data, textStatus, jqXHR) {
                $("#news_mo").html(data);
                $("#add_modal").modal("show");
            }
        )
    }
</script> 