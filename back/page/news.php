<div class="w3-container-fluid w3-center" style="margin:20px;">
    <div class="w3-container-fluid" style="margin:20px;padding:20px;background-color:#8cdcb1;">
        <h1>Setting : NEWS</h1>
        <hr>

        <!-- button add -->
        <div class="w3-container-fluid w3-center" style="margin:20px;">
            <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#add_modal"><i class="fas fa-plus-circle"></i>
                Add</button>
        </div>

        <!-- modal add -->
        <div class="modal fade" id="add_modal" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        Created New :
                    </div>
                    <div class="modal-body">
                        <!-- input file -->
                        <label>Image File :</label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        <label style="margin-top:20px;">Link :</label>
                        <input class="form-control form-control-lg" type="text">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success">New</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w3-container-fluid" style="padding:20px;">
            <!-- start add -->
            <div class="row" style="padding:20px;border:solid;">
                <div class="col-1 ">
                    <p>1).</p><br>
                </div>
                <div class="col">
                    <a href="https://nuuneoi.com/blog" target="_blank"> https://nuuneoi.com/blog </a>
                </div>
                <div class="col">
                    <img class="w3-red" src="..\image\news\1.jpg" width="200" height="100">
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del_modal">Delete</button>
                </div>
            </div>
            <!-- end add -->

            <!-- Test 2 -->
            <div class="row" style="padding:20px;border:solid;">
                <div class="col-1">
                    <p>2).</p>
                </div>
                <div class="col">
                    <a href="#" target="_blank"> WWW.google.com </a>
                </div>
                <div class="col">
                    <img class="w3-red" src="..\image\news\2.jpg" width="200" height="100">
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del_modal">Delete</button>
                </div>
            </div>
            <!-- end test 2 -->

            <!-- Test 2 -->
            <div class="row" style="padding:20px;border:solid;">
                <div class="col-1">
                    <p>2).</p>
                </div>
                <div class="col">
                    <a href="#" target="_blank"> WWW.google.com </a>
                </div>
                <div class="col">
                    <img class="w3-red" src="..\image\news\3.jpg" width="200" height="100">
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del_modal">Delete</button>
                </div>
            </div>
            <!-- end test 2 -->

        </div>
        <div class="w3-container-fluid w3-center" style="margin:20px;">
            <button type="button" class="btn btn-primary btn-lg"><i class="fas fa-sync-alt"></i> Update</button>
            <!-- <button class="btn btn-primary btn-lg" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button> -->
        </div>


        <!-- start modal delete -->
        <!-- effect : fade_in -->
        <div class="modal fade" id="del_modal" tabindex="-1" role="dialog" aria-hidden="true">
            <!-- set_size : small -->
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- header -->
                    <div class="modal-header">
                        <h1 style="color:black;">Confirm Delete : </h1>
                    </div>
                    <!-- body -->
                    <div class="modal-body">
                        <button type="button" class="btn btn-lg btn-outline-danger">Yes</button>
                        <button type="button" class="btn btn-lg btn-outline-warning">No</button>
                    </div>
                    <!-- footer -->
                    <div class="modal-footer">
                    </div>

                </div>
            </div>
        </div>
        <!-- end modal delete -->

    </div>
</div>