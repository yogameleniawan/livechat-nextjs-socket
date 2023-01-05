import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

const ChatRoom = ({ username, messages, message, setMessage, handleKeypress, sendMessage, chatbox }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col bg-white m-11 h-screen rounded-3xl p-10">
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
                                {/* <div className={`text-sm text-black relative ${msg.type === 'incoming' ? 'text-left' : 'text-right'}`}>
                                    <span>10.00</span>
                                </div> */}
                            </div>
                        );
                    })}
                    {/* <div id="chat-box" ref={chatbox} /> */}
                </div>
                <div className="message-box rounded-lg">
                    <div className="w-full flex">
                        <input
                        type="text"
                        placeholder="New message..."
                        value={message}
                        className="outline-none p-4 rounded-full flex-1 bg-gray-100 mr-5 dark:text-black"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={handleKeypress}
                        />
                        <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-800 rounded-full group hover:bg-slate-500 hover:rounded-tr-md transition-all">
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