<?php
    // connect database
    require '../../server/server.php';

    // post url
    $url = $_POST['text'];

    // echo md5(date('Y-m-d H:i:s:u'))."."."jpg";

    $target_dir = "../image/news/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_FILES)) {
        $check = getimagesize($_FILES["file"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["file"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        $new_name = md5(date('Y-m-d H:i:s:u')).".".$imageFileType;
        $new_path_name = $target_dir.$new_name;
        
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $new_path_name)) {
            echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    // get image name
    $image_name = basename($_FILES["file"]["name"]);
    $sql = "INSERT INTO `news`(`news_url`, `news_img`) VALUES ('$url','$new_name')";
    $result = mysqli_query($con,$sql);

?>