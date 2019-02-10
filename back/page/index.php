<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BackDoor : Main</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- w3.css -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <!-- mycss -->
    <link rel="stylesheet" href="style.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">

</head>

<body class="w3-dark-gray">

    <!-- start sidebar -->
    <div class="w3-sidebar w3-bar-block w3-red" style="width:15%;border:solid;border-color:red;">
        <a href="#" class="w3-bar-item">
            <h1 class="w3-center"><i class="fas fa-home"></i> Home</h1>
        </a>
        <div class="w3-container" style="margin-left:1%;">
            <a href="#" class="w3-bar-item w3-button"><i class="far fa-folder-open"></i> Document</a>
            <a href="#" class="w3-bar-item w3-button"><i class="fas fa-user-edit"></i> Member</a>
            <a href="#" class="w3-bar-item w3-button"><i class="fas fa-bullhorn"></i> Advertise</a>
            <a href="#" class="w3-bar-item w3-button"><i class="fas fa-sort-amount-down"></i> Sender</a>
            <a href="#" class="w3-bar-item w3-button"><i class="fas fa-inbox"></i> Inbox<span class="w3-badge w3-right w3-white">7</span></a>
        </div>
    </div>
    <!-- end sidebar -->

    <div style="margin-left:15%;">

        <!-- start NavBar -->
        <div class="w3-bar w3-green" style="border:solid;border-color:green;">
            <a class="w3-bar-item w3-blue w3-text w3-center" style="border:solid;border-color:blue;width:79%;">Page :
                Home</a>
            <!-- set to right -->
            <div class="w3-right">
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="far fa-user-circle"></i> Profile</a>
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
        <!-- End NavBar -->

        <!-- start body -->
        <div class="w3-container-fluid w3-card-4 w3-purple" style="border:solid;border-color:purple;height:522px;" id="body">
            <div class="w3-container w3-center">
                <h1 style="margin:30px">MENU</h1>
                <div class="w3-row w3-yellow w3-margin" style="border:solid;border-color:yellow;">
                    <a href="">
                        <div class="w3-col w3-gray" style="height:200px;width:200px;margin:15px;">1</div>
                    </a>
                    <a href="">
                        <div class="w3-col w3-gray" style="height:200px;width:200px;margin:15px;">2</div>
                    </a>
                    <a href="">
                        <div class="w3-col w3-gray" style="height:200px;width:200px;margin:15px;">3</div>
                    </a>
                    <a href="">
                        <div class="w3-col w3-gray" style="height:200px;width:200px;margin:15px;">4</div>
                    </a>
                    <a href="">
                        <div class="w3-col w3-gray" style="height:200px;width:200px;margin:15px;">5</div>
                    </a>
                </div>
            </div>
        </div>
        <!-- end body -->

        <!-- set to bottom -->
        <div class="w3-container-fluid " style="text-align:center;">
            <!-- prefooter -->
            <div class="w3-orange" style="border:solid;border-color:orange;" id="prefooter">
                <h1>Footer</h1>
            </div>
            <!-- footer -->
            <div class="w3-black" style="border:solid;border-color:black;" id="footer">
                <p style="margin-top:1%">©Powered by CEFStyle</p>
            </div>
        </div>

    </div>
</body>

<!-- bootstrap 4.2.1 -->
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/popper.js/dist/popper.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>

</html>