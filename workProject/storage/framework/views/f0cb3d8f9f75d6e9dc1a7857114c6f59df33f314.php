<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link rel="stylesheet" href="<?php echo e(asset('node_modules/bootstrap/dist/css/bootstrap.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('node_modules/loginForm/css/loginForm.css')); ?>">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">


</head>

<body>

    <!-- Form-->
    <div class="form">
        <div class="form-toggle"></div>
        <div class="form-panel one">
            <div class="form-header">
                <h1>Account Login</h1>
            </div>
            <div class="form-content">
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required="required" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required="required" />
                    </div>
                    <div class="form-group">
                        <label class="form-remember">
                            <input type="checkbox" />Remember Me
                        </label><a class="form-recovery" href="#">Forgot Password?</a>
                    </div>
                    <div class="form-group">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="form-panel two">
            <div class="form-header">
                <h1>Register Account</h1>
            </div>
            <div class="form-content">
                <form>
                    <div class="row p-0">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="username">ชื่อ</label>
                                <input type="text" id="username" name="username" required="required" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="username">นามสกุล</label>
                                <input type="text" id="username" name="username" required="required" />
                            </div>
                        </div>
                    </div>
                    <div class="row p-0">
                            <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="password">รหัสผ่าน</label>
                                        <input type="password" id="password" name="password" required="required" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cpassword">ยืนยันรหัสผ่าน</label>
                                        <input type="password" id="cpassword" name="cpassword" required="required" />
                                    </div>
                                </div>
                    </div>
                    <div class="row p-0">
                            <div class="col-md-8">
                                    <div class="form-group">
                                        <label for="email">อีเมล</label>
                                        <input type="email" id="email" name="email" required="required" />
                                    </div>
                                </div>
                    </div>

                    <div class="form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    

</body>
<script src="<?php echo e(asset('node_modules/jquery/dist/jquery.min.js')); ?>"></script>
<script src="<?php echo e(asset('node_modules/loginForm/js/loginForm.js')); ?>"></script>

</html>
<?php /**PATH D:\xampp\htdocs\PojaBrokcaNaKha\workProject\resources\views/welcome.blade.php ENDPATH**/ ?>