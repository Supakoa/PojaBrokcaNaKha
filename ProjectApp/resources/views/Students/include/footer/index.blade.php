<div class="mt-3">
    <div class="card">
        <div class="card-herader bg-greenblue p-2">
            <h4 class="text-light text-center">ติดต่อเจ้าหน้าที่</h4>
        </div>
        <div class="card-body bg-info">
            <div class="p-3 bg-light rounded">
                <div class="row m-2">
                    <div class="col-md-4">
                        <button class="btn btn-info text-light" type="button" data-toggle="modal"
                            data-target="#modalCreate">
                            ส่งข้อความ <i class="fas fa-comment-dots"></i>
                        </button>
                    </div>
                </div>
                @include('Students.include.footer.table.tableStatused')
            </div>
        </div>
    </div>
</div>
{{-- Modal --}}
@include('Students.include.footer.modal.create')
@include('Students.include.footer.modal.read')




