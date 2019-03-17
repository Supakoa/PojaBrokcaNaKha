<!-- modal add -->
<div class="modal fade" id="add_modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                เพิ่มข่าวใหม่ :
            </div> <!-- modal-header -->
            <div class="modal-body">
                <label>ไฟล์ภาพ :</label>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" accept="image/*" id="uploadImage">
                    <label class="custom-file-label" for="uploadImage">เลือกไฟล์</label>
                </div>
                <label style="margin-top:20px;">ที่อยู่เว็บไซต์ :</label>
                <input class="form-control form-control-lg" id="url" type="text">
            </div><!-- class="modal-body" -->
            <div class="modal-footer">
                <button id="sub_add_news" onclick="addNews();" type="button" class="btn btn-success">เพิ่ม</button>
            </div><!-- class="modla-footer" -->
            <!-- input file -->
        </div>
    </div>
</div>

<script>

    // function ChkSubmit(result) {
    //     if (document.getElementById("url").value == "") {
    //         alert('Please select file...');
    //         return false;
    //     }
    //     return true;
    // }

    function addNews() {
        // window.alert( $('#uploadImage').val() );
        var formData = new FormData();
        formData.append('file', $('#uploadImage')[0].files[0]);

        $.ajax({
            url: '../send_sql/news_sql_add.php',
            type: 'POST',
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function (data) {
                alert(data);
            }
        });
    }
</script>