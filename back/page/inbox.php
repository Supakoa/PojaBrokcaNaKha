<div class="container-fluid ">
    <h3>ข้อความถึงผู้ดูแลระบบ</h3>
    <hr>

    <div class="container-fluid">
        <div class="row">
            <div class="col table-responsive-lg text-center">
                <h3>Inbox</h3>
                <hr>
                <!-- start table inbox -->
                <div>
                    <table class="table table-striped table-hover table-bordered responsive display table_table" id="table">
                        <thead>
                            <tr>
                                <th style="">Date</th>
                                <th style="">Time</th>
                                <th style="">id</th>
                                <th style="">text</th>
                                <th style=""></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- start data tmp 1 -->
                            <tr>
                                <td style="">15/2/2019</td>
                                <td style="">10.58 PM.</td>
                                <td style="">59122519095</td>
                                <td style="">ช่วยเช็คเอกสารขอสอบให้หน่อยนะคะ</td>
                                <td style=""><button type="button" class="btn btn-sm btn-success ">ตอบ</button></td>
                            </tr>
                            <!-- end data tmp 1 -->

                            <!-- start data tmp 1 -->
                            <tr>
                                <td style="">16/2/2019</td>
                                <td style="">10.58 PM.</td>
                                <td style="">61403519095</td>
                                <td style="">ผมเขียนเอกสารผิดไปสามารถสงใหม่ได้ไหมครับ</td>
                                <td style=""><button type="button" class="btn btn-sm btn-success ">ตอบ</button></td>
                            </tr>
                            <!-- end data tmp 1 -->

                            <!-- start data tmp 1 -->
                            <tr>
                                <td style="">17/2/2019</td>
                                <td style="">10.58 PM.</td>
                                <td style="">60125519095</td>
                                <td style="">ถามเรื่องแบบฟอร์มหน่อยครับ</td>
                                <td style=""><button type="button" class="btn btn-sm btn-success ">ตอบ</button></td>
                            </tr>
                            <!-- end data tmp 1 -->

                            <!-- start data tmp 1 -->
                            <tr>
                                <td style="">18/2/2019</td>
                                <td style="">10.58 PM.</td>
                                <td style="">59203519095</td>
                                <td style="">สอบถามเรื่องการส่งใบคำร้องครับ</td>
                                <td style=""><button type="button" class="btn btn-sm btn-success ">ตอบ</button></td>
                            </tr>
                            <!-- end data tmp 1 -->
                        </tbody>
                    </table>
                </div>
                <!-- end table inbox -->
            </div>
            <div class="col table-responsive-lg text-center">
                <h3>Outbox</h3>
                <hr>
                <table class="table table-striped table-hover table-bordered display nowrap responsive table_table" id="table2">
                    <thead>
                        <tr>
                            <th style="">Date</th>
                            <th style="">Time</th>
                            <th style="">id</th>
                            <th style="">text</th>
                            <th style=""></th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- start data tmp 1 -->
                        <tr>
                            <td style="">13/2/2019</td>
                            <td style="">10.58 PM.</td>
                            <td style="">61122519095</td>
                            <td style="">เอกสารถูกดำเนินการเรียบร้อยแล้วครับ</td>
                            <td style=""><button type="button" class="btn btn-sm btn-info">รายละเอียด</button></td>
                        </tr>
                        <!-- end data tmp 1 -->

                        <!-- start data tmp 1 -->
                        <tr>
                            <td style="">14/2/2019</td>
                            <td style="">10.58 PM.</td>
                            <td style="">60122519095</td>
                            <td style="">เอกสารสามารถส่งใหม่ได้ครับ</td>
                            <td style=""><button type="button" class="btn btn-sm btn-info">รายละเอียด</button></td>
                        </tr>
                        <!-- end data tmp 1 -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $('.table_table').DataTable();
    });
</script> 