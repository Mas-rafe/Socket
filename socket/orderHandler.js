export const orderHandler = (io,socket) => { 
    console.log("an user connected",socket.io);
    
    // emit -> trigger -> on -> listen

    // place order 
    socketocket.on("placeOrder",async(DataTransfer,callback)=>{
        try{
            console.log(`placed order from ${socket}`);
            const validation = validateOrder(data);
        }
        catch(error){
            console.log(error);
            
        }
    })
} 