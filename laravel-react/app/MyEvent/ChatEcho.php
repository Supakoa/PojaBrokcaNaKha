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

    public $count;

    public $admin_id;

    /**
     * ChatEcho constructor.
     * @param $message
     * @param $user_id
     * @param $count
     * @param $admin_id
     */
    public function __construct($message, $user_id, $count, $admin_id)
    {
        $this->message = $message;
        $this->user_id = $user_id;
        $this->count = $count;
        $this->admin_id = $admin_id;
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
