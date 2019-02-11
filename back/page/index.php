<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title id="tab_title"></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>

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
        <a class="w3-bar-item w3-button" onclick="call_content('main.php','Page : Home','BackDoor : Main');">
            <h1 class="w3-center"><i class="fas fa-home"></i> Home</h1>
        </a>
        <div class="w3-container" style="margin-left:1%;">
            <a class="w3-bar-item w3-button" onclick="call_content('document.php','Page : Document','BackDoor : Document');"><i class="far fa-folder-open"></i>
                Document</a>
            <a class="w3-bar-item w3-button" onclick="call_content('member.php','Page : Member','BackDoor : Member');"><i class="fas fa-user-edit"></i>
                Member</a>
            <a class="w3-bar-item w3-button" onclick="call_content('news.php','Page : Advertise','BackDoor : Advertise');"><i class="fas fa-bullhorn"></i>
                Advertise</a>
            <a class="w3-bar-item w3-button" onclick="call_content('sender.php','Page : Sender','BackDoor : Sender');"><i class="fas fa-sort-amount-down"></i>
                Sender</a>
            <a class="w3-bar-item w3-button" onclick="call_content('Inbox.php','Page : Inbox','BackDoor : Inbox');"><i class="fas fa-inbox"></i>
                Inbox<span class="w3-badge w3-right w3-white">7</span></a>
        </div>
    </div>
    <!-- end sidebar -->

    <div style="margin-left:15%;">

        <!-- start NavBar -->
        <div class="w3-bar w3-green" style="border:solid;border-color:green;">
            <a class="w3-bar-item w3-blue w3-text w3-center" style="border:solid;border-color:blue;width:79%;" id="nav_title"></a>
            <!-- set to right -->
            <div class="w3-right">
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="far fa-user-circle"></i> Profile</a>
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
        <!-- End NavBar -->

        <!-- start body -->
        <div class="w3-container-fluid w3-card-4 w3-purple" style="border:solid;border-color:purple;height:522px;" id="body">

            <!-- html here -->
            <div id="in_body"></div>

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

<script>
    if (document.getElementById('in_body').innerHTML === '') {
        call_content('main.php', 'Page : Home','BackDoor : Main');
    }

    function call_content(content,nav_title,title) {
        document.getElementById('nav_title').innerHTML = nav_title;
        document.getElementById('tab_title').innerHTML = title;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("in_body").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", content, true);
        xhttp.send();
    }
</script>

<!-- bootstrap 4.2.1 -->
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/popper.js/dist/popper.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>

</html>