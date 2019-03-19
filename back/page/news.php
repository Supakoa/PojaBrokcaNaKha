<?php
    require '../../server/server.php';
    $sql = "SELECT * FROM news WHERE 1";
    $re_news = mysqli_query($con,$sql);
    $order = 0;
?>
<div class="container-fluid text-center">
    <div class="container" >
        <h1>ตั้งค่า : ข่าว</h1>
        <hr>

        <!-- button add -->
        <div class="container-fluid text-center">
            <button onclick="openAddModal();" type="button" class="btn btn-outline-success btn-lg"><i class="fas fa-plus-circle"></i>
                เพิ่ม</button>
        </div><br>

        <div class="container-fluid" >
            <!-- start add -->
            <div class="row" style="border:solid;background-color: #C5EDD8;">
                <div class="col-1 ">
                    <p>ลำดับ</p>
                </div>
                <div class="col">
                    <p>ที่อยู่เว็บไซต์</p> 
                </div>
                <div class="col">
                     <p>หน้าปก</p> 
                </div>
                <div class="col-2">
                    ลบ
                </div>
            </div>
            <!-- end add -->

            <!-- start NEWS template -->
            <?php
                while($row_news = mysqli_fetch_array($re_news)){
            ?>
            <div class="row" style="padding:20px;border:solid;">
                <div class="col-1">
                    <p><?php echo ++$order; ?>).</p>
                </div>
                <div class="col">
                    <a href="#" target="_blank"><?php echo $row_news['news_url']; ?></a>
                </div>
                <div class="col">
                    <img class="w3-red" src="..\image\news\<?php echo $row_news['news_img'];?>" width="200" height="100">
                </div>
                <div class="col-2">
                    <button class = "btn btn-lg btn-info" onclick="openDelModal(<?php echo $row_news['news_id'] ?>,'<?php echo $order; ?>');"><i class="fas fa-trash" style = "color:red"></i></button>
                </div>
            </div>
                <?php } ?>
            <!-- end NEWS template -->

        </div>
        <!-- <div class="w3-container-fluid w3-center" style="margin:20px;">
            <button type="button" class="btn btn-primary btn-lg"><i class="fas fa-sync-alt"></i> Update</button>
            <button class="btn btn-primary btn-lg" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button> 
        </div> -->


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
</div>

<script>
    function openDelModal(id_del,order){
        $.post("../modal/news_del.php", 
            { del_id:id_del , order:order },
            function (data, textStatus, jqXHR) {
                $("#news_mo").html(data);
                $("#new_del").modal("show");
            }
        )
    }
    function openAddModal() {
        $.post("../modal/news_add.php",
            function (data, textStatus, jqXHR) {
                $("#news_mo").html(data);
                $("#add_modal").modal("show");
            }
        )
    }
</script>