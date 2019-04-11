

<!-- navbar -->
<nav class="navbar navbar-expand-lg navbar-light container Gfonts" style="background-color:#3782EB;">
    <a class="navbar-brand" href="#">
        <img src="../picture/form/ce.png" width="30" height="30" class="d-inline-block align-top" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
            <li class="nav-item active">
                <a class="nav-link" href="main.php" style="color:#FFFFFF;" ><i class="fas fa-home"></i> <span class="th-lang">หน้าแรก</span><span class="eng-lang">Home</span> <span class="sr-only">(current)</span></a>

            </li>
            <li class="nav-item ">
                <a class="nav-link" href="info.php" style="color:#FFFFFF;"><i class="fas fa-info-circle"></i> <span class="th-lang">ข้อมูลส่วนตัว</span><span class="eng-lang " >Profile</span> </a>
            </li>
            
            <!-- <button id = "lang">Change</button> -->
        </ul>
        <form class="form-inline my-2 my-lg-0">

            <a class="nav-link disabled" href="#" style="color:#FFFFFF;"><i class="fas fa-user"></i><?php echo ' '.$row_user['title'].$row_user['name'] ;?></a>
            <a class="nav-link" href="../../server/logout.php" style="color:#FFFFFF;"> <span class="th-lang">ออกจากระบบ</span><span class="eng-lang ml-4">Sign out</span> <i class="fas fa-sign-out-alt"></i></a>
            <img src="../picture/icon/eng_flag.png" alt="" class=""  id = "flag" width="51" height="38">

        </form>
    </div>
</nav><!-- navbar -->