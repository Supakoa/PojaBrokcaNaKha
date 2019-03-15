<?php 
require '../../../server/server.php';
$id = $_SESSION['id'];
$id_paper = $_POST['id'];
$type_paper = $_POST['type'];











$info = '';




?>




<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php if (type == '1') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '2') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '3') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '4') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '5') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '6') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} elseif (type == '7') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : ลาป่วย <i class="fas fa-angle-right"></i> doc58874</h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <div class="row container">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4 text-right">
                        <span>วันที่ 16 เดือน กุมภาพันธ์ พ.ศ.2562</span>
                    </div>
                </div>
                <!-- date -->

                <!-- subject -->
                <div class="row container">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>เรื่อง ลากิจ/ลาป่วย</p>
                    </div>
                    <div class="col-lg-7"></div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-4">
                        <p>วิชา GEH0101 : สุนทรียภาพกับชีวิต </p>
                    </div>
                </div>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-9">
                        <div class="card-body">
                            <p><span style="padding-left:6em"></span>
                                ด้วยข้าพเจ้า นาย มานี มีปู รหัสนักศึกษา 60122519112 คณะ เทคโนโลยีอุตสาหกรรม <br>
                                สาขาวิชา วิศวกรรมคอมพิวเตอร์ กลุ่มเรียน 004 ชั้นปีที่ 2 มีความประสงค์ขออนุญาตลาป่วย เนื่องจากเป็น ป่วยไข้หวัดใหญ่
                                ตั้งแต่วันที่ 19 เดือน กุมภาพันธ์ พ.ศ.2562 ถึงวันที่ 22 เดือน กุมภาพันธ์ พ.ศ.2562 ในรายวิชา GEH0101 : สุนทรียภาพกับชีวิต

                            </p>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                        <div class=" text-center">
                            <p>ลายเซ็น</p>
                            <br>
                            <hr>
                            <?php
                            echo "( ";
                            for ($i = 0; $i < 70; $i++) {
                                echo ".";
                            }
                            echo " )";
                            ?>
                        </div>
                    </div>
                </div><br>
                <!-- footer -->
            </div>
        </div>
        <div class="text-center">
            <button class="btn btn-outline-success">ดาวโหลดเอกสารที่แนบมา</button>
        </div>
        <br>
        <div class="card-footer text-muted">
            <!-- option staff -->
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control" id="comment" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="select">Status</label>
                        <select class="form-control" id="select">
                            <option disabled selected> เลือกสถานะ </option>
                            <option>ผ่าน</option>
                            <option>ไม่ผ่าน</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <label for="signatue">แนบเอกสาร</label>
                    <div id="signature">
                        <input type="file" name="" id="">
                    </div>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-10"></div>
                <div class="col-lg-2 ">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div><br>

<?php 
} else {
    $_SESSION['alert'] = 4;
} ?> 