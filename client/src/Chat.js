import React, { memo, useEffect, useMemo, useState } from "react"

function Chat({socket, username, room }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const memoizedMessageList = useMemo(() => messageList, [messageList]);

    const sendMessage = async () => {
        if(currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
        }
    };

    useEffect(() =>{
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        })

    }, [socket]);



    return ( 
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
            {memoizedMessageList.map((messageContent, index) => (
          <h1 key={index}>{messageContent.message}</h1>
        ))}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="Hey..." onChange={(event) => {setCurrentMessage(event.target.value);
                }}>       
                </input>
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
}

export default Chat