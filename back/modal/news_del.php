<?php
    $order = $_POST['order'];
    $id = $_POST['del_id'];
?>

<div class="modal fade" id="new_del">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1>ต้องการลบข่าวที่ : <?php echo $order; ?></h1>
            </div>
            <div class="modal-body">
                <form action="" method="get">
                    <button type="button" onclick="news_sql_del('<?php echo $id; ?>');" class="btn btn-lg btn-block btn-success">ลบ</button>
                </form>
            </div>
            <div class="modal-footer"></div>
        </div>
    </div>
</div>

<script>
    function news_sql_del(id){
        $.post(
            "../send_sql/news_sql_del.php",
            {id_del : id},
            function(data,status){
                // alert("Data: " + data + "\nStatus: " + status);
                // $("#in_body").load("../page/main.php");
                $("#in_body").load("../page/news.php");
                $("#new_del").modal("hide");
            }
        );
        $("#new_del").modal("hide");
    }
</script>