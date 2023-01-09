import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { useEffect } from 'react';
import { useState } from 'react';
import Participants from './Chats/Participants';

const ChatRoom = ({ username, messages, message, setMessage, handleKeypress, sendMessage, chatbox, socket }) => {
    const [isWrite, setIsWrite] = useState(false);
    const [partner, setPartner] = useState("");

    useEffect(() => {
        socket.on("writeMessageCallback", (data) => {
            if(data.username !== username) {
                data.status ? setIsWrite(true) : setIsWrite(false);
                setPartner(data.username);
            }
        });
    
      return () => {}
    }, [])

    useEffect(() => {
        const delayWrite =  setTimeout(() => {
            setIsWrite(false);
        }, 3000); // set time out if user doesn't type message in 3 seconds
    
        return () => clearTimeout(delayWrite)
      }, [isWrite])
    
    const onChangeMessage = (value) => {
        setMessage(value);
        socket.emit("writeMessage", {status: true, username: username})
    }
    
    return (
        <div className="flex flex-col sm:flex-row md:flex-row m-4">
            <div className="flex flex-nowrap overflow-x-scroll sm:flex-col bg-white sm:ml-11 sm:mr-7 sm:my-11 w-full md:w-3/5 lg:w-3/5 sm:h-screen rounded-3xl sm:p-10 p-6">
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
                <Participants />
            </div>
            <div className="flex flex-col bg-white mr-11 my-11 h-screen w-full sm:w-screen rounded-3xl p-10">
                <div  ref={chatbox} className="chat-box h-full overflow-y-scroll no-scrollbar">
                    {messages.map((msg, i) => {
                        return (
                            <div className="flex flex-col" key={i}>
                                <div
                                    className={msg.type === 'incoming' ? "shadow-md mr-28 p-3 my-3 rounded-r-2xl rounded-tl-2xl bg-gray-50 text-black" : "shadow-md ml-28 p-3 my-3 rounded-l-2xl rounded-br-2xl dark:bg-slate-800 bg-slate-100 dark:text-white text-black "}
                                    key={i}
                                >
                                    {msg.message}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="relative">
                    <div className={`text-xs bg-gray-100 p-2 rounded-r-2xl rounded-tl-2xl absolute left-3 translate-y-0 text-black ${isWrite ? '-translate-y-10 z-0' : 'translate-y-0 z-0'} transition-all`}>{`${partner} is writing ...`}</div>
                </div>
                <div className="message-box rounded-lg z-10">
                    <div className="w-full flex">
                        <input
                        type="text"
                        placeholder="New message..."
                        value={message}
                        className="outline-none p-4 flex-1 bg-gray-100 mr-5 text-black  rounded-full transition-all"
                        onChange={(e) => onChangeMessage(e.target.value)}
                        onKeyUp={handleKeypress}
                        onBlur={() => socket.emit("writeMessage", {status: false, username: username})}
                        />
                        <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-800 rounded-full group hover:bg-slate-800 hover:rounded-tr-md transition-all">
                            <button
                                className="group-hover:text-white px-5 h-full rounded-full text-slate-800 dark:text-white"
                                onClick={() => {
                                sendMessage();
                                }}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;