<div class="form-group {{ $errors->has('form_id') ? 'has-error' : ''}}">
    <label for="form_id" class="control-label">{{ 'Form Id' }}</label>
    <input class="form-control" name="form_id" type="number" id="form_id" value="{{ isset($paper->form_id) ? $paper->form_id : ''}}" >
    {!! $errors->first('form_id', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('detail') ? 'has-error' : ''}}">
    <label for="detail" class="control-label">{{ 'Detail' }}</label>
    <textarea class="form-control" rows="5" name="detail" type="textarea" id="detail" >{{ isset($paper->detail) ? $paper->detail : ''}}</textarea>
    {!! $errors->first('detail', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('step_now') ? 'has-error' : ''}}">
    <label for="step_now" class="control-label">{{ 'Step Now' }}</label>
    <input class="form-control" name="step_now" type="number" id="step_now" value="{{ isset($paper->step_now) ? $paper->step_now : ''}}" >
    {!! $errors->first('step_now', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('status') ? 'has-error' : ''}}">
    <label for="status" class="control-label">{{ 'Status' }}</label>
    <input class="form-control" name="status" type="number" id="status" value="{{ isset($paper->status) ? $paper->status : ''}}" >
    {!! $errors->first('status', '<p class="help-block">:message</p>') !!}
</div>
<div class="form-group {{ $errors->has('note') ? 'has-error' : ''}}">
    <label for="note" class="control-label">{{ 'Note' }}</label>
    <textarea class="form-control" rows="5" name="note" type="textarea" id="note" >{{ isset($paper->note) ? $paper->note : ''}}</textarea>
    {!! $errors->first('note', '<p class="help-block">:message</p>') !!}
</div>


<div class="form-group">
    <input class="btn btn-primary" type="submit" value="{{ $formMode === 'edit' ? 'Update' : 'Create' }}">
</div>
