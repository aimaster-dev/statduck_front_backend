import { Session, Chatbox } from "@talkjs/react";

export default function Chat() {
    return (
        <Session appId="tPDgGLGY" userId="sample_user_alice">
            <Chatbox
                conversationId="sample_group_chat"
                style={{ width: '100%', height: '100vh' }}
            ></Chatbox>
        </Session>
    );
}