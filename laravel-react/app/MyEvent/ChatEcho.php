<?php

namespace App\MyEvent;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ChatEcho implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    public $user_id;
    /**
     * @var int
     */
    private $count;

    public function __construct($message, $id, int $count)
    {
        $this->message = $message;
        $this->user_id = $id;
        $this->count = $count;
    }

    public function broadcastOn()
    {
        return ['channel-chat'];
    }

    public function broadcastAs()
    {
        return 'event-chat-user-'.$this->user_id;
    }
}
