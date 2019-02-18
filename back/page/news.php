<div class="w3-container-fluid w3-center" style="margin:20px;">
    <div class="w3-container-fluid" style="margin:20px;padding:20px;background-color:#8cdcb1;">
        <h1>Setting : NEWS</h1>
        <hr>

        <div class="w3-container-fluid w3-center w3-yellow" style="margin:20px;">
            <button type="button" class="btn btn-success btn-lg"><i class="fas fa-plus-circle"></i> Add</button>
        </div>
        <div class="w3-container-fluid w3-orange" style="padding:20px;">

            <!-- start add -->
            <div class="row" style="padding:20px;">
                <div class="col-1 " style = "background-color:#c5edd8">
                    <p>1).</p><br>
                </div>
                <div class="col w3-amber">
                    <input class="form-control form-control-lg" type="text">
                </div>
                <div class="col w3-dark-gray">
                    <img class="w3-red" src="" width="200" height="100">
                </div>
                <div class="col-2 w3-amber">
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del_modal">Delete</button>
                </div>
            </div>
            <!-- end add -->

            <!-- Test 2 -->
            <div class="row" style="padding:20px;">
                <div class="col-1 w3-pink">
                    <p>2).</p>
                </div>
                <div class="col w3-amber">
                    <input class="form-control form-control-lg" type="text">
                </div>
                <div class="col w3-dark-gray">
                    <img class="w3-red" src="" width="200" height="100">
                </div>
                <div class="col-2 w3-amber">
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#del_modal">Delete</button>
                </div>
            </div>
            <!-- end test 2 -->

        </div>
        <div class="w3-container-fluid w3-center w3-yellow" style="margin:20px;">
            <button type="button" class="btn btn-success btn-lg"><i class="fas fa-sync-alt"></i> Update</button>
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