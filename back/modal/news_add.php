
<!-- modal add -->
<div class="modal fade" id="add_modal" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                เพิ่มข่าวใหม่ :
            </div>
            <div class="modal-body">
                <!-- input file -->
                <label>ไฟล์ภาพ :</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">เลือกไฟล์</label>
                </div>
                <label style="margin-top:20px;">ที่อยู่เว็บไซต์ :</label>
                <input class="form-control form-control-lg" id="url" type="text">
            </div>
            <div class="modal-footer">
                <button onclick="news_add_sql();" type="button" class="btn btn-success">เพิ่ม</button>
            </div>
        </div>
    </div>
</div>

<script>
    function news_add_sql(newUrl,newImage){
        $.post("../modal/news_add.php",
            {file:$("#customFile").val(),url:$("#url").val()},
            function (data, textStatus, jqXHR) {
                $("#news_mo").html(data);
                $("#add_modal").modal("show");
            }
        )
    }
</script>