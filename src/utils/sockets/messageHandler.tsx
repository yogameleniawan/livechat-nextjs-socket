export default (io, socket) => {
    const createdMessage = (msg) => {
      console.log(`Author: ${msg.author} Message: ${msg.message}`)
      socket.broadcast.emit("newIncomingMessage", msg);
    };
  
    socket.on("createdMessage", createdMessage);
};