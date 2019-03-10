<?php 
require '../../../server/server.php';
$id = $_SESSION['id'];
function getToken($length)
{
    $token = "";
    $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $codeAlphabet .= "0123456789";
    $max = strlen($codeAlphabet); // edited
    for ($i = 0; $i < $length; $i++) {
        $token .= $codeAlphabet[random_int(0, $max - 1)];
    }
    return $token;
}
function up_image()
{
    $ext = pathinfo(basename($_FILES["uplode_file"]["name"]), PATHINFO_EXTENSION);
    $new_taget_name = 'uplode_file' . uniqid() . "." . $ext;
    $target_path = "../../../uplode_file/";
    $upload_path = $target_path . $new_taget_name;
    $uploadOk = 1;

    $imageFileType = strtolower(pathinfo($new_taget_name, PATHINFO_EXTENSION));

    if ($_FILES["uplode_file"]["size"] > 60000000) {
        echo "Sorry, your file is too large.";
        $_SESSION['alert'] = 15;
        header("Location: ../main.php");
        exit();
        $uploadOk = 0;
    }

    // Allow certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png") {
        echo "Sorry, only JPG , PNG files are allowed.";
        $_SESSION['alert'] = 17;
        header("Location: ../main.php");
        exit();
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        $_SESSION['alert'] = 4;
        header("Location: ../main.php");
        exit();
    } else {
        if (move_uploaded_file($_FILES["uplode_file"]["tmp_name"], $upload_path)) {
            echo 'Move success.';
            $_SESSION['alert'] = 3;
            return $new_taget_name;
        } else {
            echo 'Move fail';
            $_SESSION['alert'] = 4;
            exit;
        }
    }
}
$form = 0;
$paper_id = getToken(10);
if (isset($_POST['form_1'])) {
    $form = 1;
    $detail = $_POST['sub'] . "๛" . $_POST['group'];
    
} elseif (isset($_POST['form_2'])) {

    $form = 2;
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . up_image();
    
} elseif (isset($_POST['form_3'])) {
    $form = 3;
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['year'] . "๛" . $_POST['note'] . "๛" . up_image();
    
} elseif (isset($_POST['form_4'])) {
    $form = 4;
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . up_image();
   
} elseif (isset($_POST['form_5'])) {
    $form = 5;
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . $_POST['sdate'] . "๛" . $_POST['edate'] . "๛" . up_image();
    
} elseif (isset($_POST['form_6'])) {
    $form = 6;
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'];
   
} elseif (isset($_POST['form_7'])) {
    $form = 7;
    $detail = $_POST['comment'] . "๛" . $_POST['group'];
   
}

if($form!=0){
    $sql_paper = "INSERT INTO `paper`( `paper_id`,`owner_id`, `form_id`, `paper_detail`, `step_now`, `status`) VALUES ('$paper_id', '$id','$form','$detail','1','3') ";
    if ($re_paper = mysqli_query($con, $sql_paper)) {
        $_SESSION['alert'] = 3;
        $sql_form = "SELECT * FROM `form_way` WHERE `form_id` = '$form' AND `step` ='1' ";
        $re_form = mysqli_query($con, $sql_form);
        $row_form = mysqli_fetch_array($re_form);
        if ($row_form['user_id'] != null) {
            $user_id = $row_form['user_id'];
            $sum_q = '(\'' . $paper_id . '\',\'' . $user_id . '\' )';
            while ($row_form = mysqli_fetch_array($re_form)) {
                $user_id = $row_form['user_id'];
                $sum_q .= ',(\'' . $paper_id . '\',\'' . $user_id . '\' )';
            }
            $sql_user = "INSERT INTO `paper_user`( `paper_id`, `user_id`) VALUES " . $sum_q . " ";
            if ($re_user = mysqli_query($con, $sql_user)) {
                $_SESSION['alert'] = 3;
            } else {
                $_SESSION['alert'] = 4;
            }
        }
    } else {
        $_SESSION['alert'] = 4;
    }
}
header("Location: ../main.php");
exit;
 