{{-- Modal create message --}}
<div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-labelledby="modalCreateTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content container">
            <div class="modal-header" style="border-bottom-color:#639CB4">
                <h5 class="modal-title txt-greenblue" id="modalCreateTitle">ติดต่อเจ้าหน้าที่</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div class="form-group">
                        <label for="title" class="text-info">เรื่อง</label>
                        <input type="text" class="form-control rounded border-0 bg-greenblue" id="title">
                    </div>
                    <div class="form-group">
                        <label for="typeText" class="text-info">ข้อความ</label>
                        <textarea class="form-control rounded border-0 bg-greenblue" id="typeText" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-info btn-sm text-light">
                    ส่งข้อความ <i class="fas fa-comment-dots"></i>
                </button>
            </div>
        </div>
    </div>
</div>
