const ChatRoom = ({ username, messages, message, setMessage, handleKeypress, sendMessage }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-between dark:bg-slate-50 bg-slate-900 m-11 h-screen rounded-3xl p-10">
                <div className="chat-box bg-slate-50 dark:bg-slate-800 h-5/6 p-10 overflow-y-scroll">
                    {messages.map((msg, i) => {
                        return (
                            <div
                            className={msg.type === 'incoming' ? "mr-10 py-1 px-2 my-2 rounded-r-lg rounded-tl-lg bg-slate-200 text-black" : "ml-10 py-1 px-2 my-2 rounded-l-lg rounded-tr-lg bg-white text-black"}
                            key={i}
                            >
                            {msg.message}
                            </div>
                        );
                    })}
                </div>
                <div className="message-box bg-slate-50 rounded-lg">
                    <div className="w-full flex">
                        <input
                        type="text"
                        placeholder="New message..."
                        value={message}
                        className="outline-none py-2 px-2 rounded-bl-md flex-1"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={handleKeypress}
                        />
                        <div className="flex justify-center items-center dark:bg-slate-800 rounded-r-md group hover:bg-slate-500 hover:rounded-r-md transition-all">
                        <button
                            className="group-hover:text-white px-3 h-full"
                            onClick={() => {
                            sendMessage();
                            }}
                        >
                            Send
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom;