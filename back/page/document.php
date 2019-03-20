<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <label for="search_document">ค้นหา</label>
            <input class="form-control" type="search" id="search_document" style="" placeholder="รหัสเอกสาร">
            <button type="button" class="btn btn-info btn-sm" style="margin-top:10px;margin-bottom:10px;"><i class="fas fa-search "></i>
            </button>
        </div>

    </div>
</div>

<div class="container-fluid text-center">
    <h3 style="padding-top:10px;">เอกสาร : ตาราง</h3>
    <hr>

    <!-- group of table -->
    <div class="table-responsive-lg">
        <table class="table table-bordered nowrap responsive display table_table" id="table3">

            <!-- table header -->
            <thead>
                <tr>
                    <th>รหัสเอกสาร</th>
                    <th>เรื่อง</th>
                    <th>เวลาสร้าง</th>
                    <th>เวลาแก้ไขล่าสุด</th>
                    <th>สถานะ</th>
                </tr>
            </thead>

            <!-- table body -->
            <tbody>
                <tr>
                    <td>WSRC1MEWK</td>
                    <td>ขอรหัสผ่าน</td>
                    <td>1/11/2019</td>
                    <td>2/11/2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>WSRC1MEXN</td>
                    <td>สอบย้อนหลัง</td>
                    <td>5/7/2019</td>
                    <td>2/9/2019</td>
                    <td></td>
                </tr>
                <tr>
                    <td>WSRC1MEYE</td>
                    <td>ลาป่วย</td>
                    <td>1/5/2019</td>
                    <td>10/5/2019</td>
                    <td></td>
                </tr>
            </tbody>

        </table><br>
    </div>
</div>
<script>
    $(document).ready(function() {
        $('.table_table').DataTable();
    });
</script> 