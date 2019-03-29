<?php  ?>


<div class="container-fluid mx-auto">
    <div class="container text-center">
        <!-- Large modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fas fa-plus"></i></button>
    </div><br>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">เพิ่มคณะ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <label for="abc">กรอกชื่อคณะ</label>
                        <input id="abc" class="form-control" type="text">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="table-responsive-lg">
            <table class="table table-bordered table-sm table-hover display text-center nowrap responsive" id="fac">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>ชื่อคณะ</th>
                        <th>สาขา</th>
                        <th>แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div> 