<div class="container bg-light pt-2 pb-2">
    <div class="card-header bg-greenblue text-light text-center rounded">
        <h4>inbox</h4>
    </div>
    <div class="card bg-header p-4">
        <div class="card-body container bg-light">
            @include('staffElement.inBoxoutBox.inc.tableInbox')
        </div>
    </div>

    <div class="card-header text-light bg-greenblue text-center rounded">
        <h4>outbox</h4>
    </div>
    <div class="card bg-header p-4">
        <div class="card-body container bg-light">
            @include('staffElement.inBoxoutBox.inc.tableOutbox')
        </div>
    </div>
</div>

