<?php

namespace App\MyEvent;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ChatEchoToUser implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $message_id;

    private $user_id;

    public $admin_id;

    public $count_messages;

    public $count_messages_unread;

    /**
     * ChatEchoToUser constructor.
     * @param $message
     * @param $message_id
     * @param $user_id
     * @param $admin_id
     * @param $count_messages
     * @param $count_messages_unread
     */
    public function __construct($message, $message_id, $user_id, $admin_id, $count_messages, $count_messages_unread)
    {
        $this->message = $message;
        $this->message_id = $message_id;
        $this->user_id = $user_id;
        $this->admin_id = $admin_id;
        $this->count_messages = $count_messages;
        $this->count_messages_unread = $count_messages_unread;
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
