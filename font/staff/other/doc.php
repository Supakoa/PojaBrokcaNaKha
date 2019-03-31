<?php 
require '../../../server/server.php';
if(isset($_SESSION['online'])&&isset($_SESSION['id'])){
    if($_SESSION['online']!=2){
        $_SESSION['check_login'] = 1;
        header("Location: ../../../index.php");
        $_SESSION['alert'] = 2;
        exit();
    }
}else{
    $_SESSION['check_login'] = 1;
        header("Location: ../../../index.php");
        $_SESSION['alert'] = 2;
        exit();
}
function DateThai($strDate)
{
    $strYear = date("Y", strtotime($strDate)) + 543;
    $strMonth = date("n", strtotime($strDate));
    $strDay = date("j", strtotime($strDate));
    $strMonthCut = array("", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.");
    $strMonthThai = $strMonthCut[$strMonth];
    return " วันที่ $strDay เดือน $strMonthThai พ.ศ. $strYear";
}

$id = $_SESSION['id'];
$id_paper = $_POST['id'];
$type = $_POST['cate'];
$sql_form = " SELECT paper.paper_detail,paper.timestamp,user.title,user.user_id,user.name as user_name,major.name as major_name ,fac.name as fac_name,user.tel,form.name as form_name
FROM paper,paper_user,user,form,major,fac 
WHERE paper.paper_id = '$id_paper' AND paper_user.paper_id = paper.paper_id AND paper_user.user_id = '$id' 
AND paper.owner_id = user.user_id AND major.fac_id = fac.fac_id AND form.form_id = paper.form_id AND major.mar_id = user.major_id";
$row_form = mysqli_fetch_array(mysqli_query($con, $sql_form));
$keywords = preg_split("/๛/", $row_form['paper_detail']);
$row_sub = mysqli_fetch_array(mysqli_query($con, "SELECT * FROM `subject` WHERE sub_id = '$keywords[0]' "));

?>



<?php if ($type == '1') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '2') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
            <h5>ประเภท :  <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                            <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-11 offset-md-1 col-sm-10">
                                <?php echo $keywords[3]; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '3') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
        <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-2 col-sm-10">
                                <?php echo $keywords[3]; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '4') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
        <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-2 col-sm-10">
                                <?php echo $keywords[3]; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '5') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
        <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-2 col-sm-10">
                                <?php echo $keywords[3]; ?>
                                </dd>
                            </dl>

                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '6') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
        <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">
                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-10 offset-sm-2">
                                <?php echo $keywords[3]; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} elseif ($type == '7') { ?>

<div class="card-body" style="background-color:#F7FAFE">
    <!-- card 3 -->
    <div class="card" id="showdata">
        <div class="card-header text-light" style="background-color:#78ABF2">
        <h5>ประเภท : <?php echo $row_form['form_name'] ?></h5>
        </div>
        <div class="card-body">
            <div class="paper card-body">

                <!-- head -->
                <div class="row">
                    <div class="col-lg-4 offset-lg-4">
                        <img src="../picture/ssru.png" alt="" class="rounded mx-auto d-block" style="heigth:100px;width:100px">
                    </div>
                </div>
                <!-- head -->

                <!-- date -->
                <dl class="row container">
                    <dd class="col-sm-12 text-right">
                    <?php echo DateThai($row_form['timestamp']) ?>
                    </dd>
                </dl>
                <!-- date -->

                <!-- subject -->
                <dl class="row container">
                <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "เรื่อง " . $row_form['form_name'] ?></p>
                    </dd>
                    <dd class="col-sm-11 offset-sm-1 text-left">
                        <p class="h5"><?php echo "วิชา  " . $row_sub['sub_id'] . " : " . $row_sub['sub_name'] ?></p>
                    </dd>
                </dl>
                <!-- subject -->

                <!-- body -->
                <div class="row">
                    <div class="col-lg">
                        <div class="card-body">
                        <dl class="row">
                            <dd class="col-md-6 offset-md-2 text-left"><?php echo "ด้วยข้าพเจ้า".$row_form['title'] . " " . $row_form['user_name'] ; ?></dd>
                                <dd class="col-sm-11 offset-md-1 text-left"><?php echo  " รหัสนักศึกษา " . $row_form['user_id'] . " คณะ" . $row_form['fac_name'] . "สาขาวิชา " . $row_form['fac_name'] . " กลุ่มเรียน " . $keywords[1] ."<br> หมายเลขโทรศัพท์ " . $row_form['tel']."วิชา " . $row_sub['sub_id'] . " : " . $row_sub['sub_name']  ; ?> </dd>
                            </dl>
                            <dl class="row container">
                                <dd class="col-sm-2 col-sm-10">
                                <?php echo $keywords[1]; ?>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <!-- body -->

                <!-- footer -->
                <div class="row container" style="margin-top:250px">
                    <div class="col-lg-4 offset-lg-8">
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
                <div class="col-lg-2 offset-lg-10">
                    <button type="submit" class="btn btn-sm btn-info form-control">ส่งผลการตรวจสอบ</button>
                </div>
            </div>
            <!-- option staff -->
        </div>
    </div>
    <!-- card 3 -->
</div>

<?php 
} else {
    $_SESSION['alert'] = 4;
} ?> 