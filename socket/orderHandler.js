export const orderHandler = (io,socket) => { 
    console.log("an user connected",socket.id);
    
    // emit -> trigger -> on -> listen

    // place order 
    socket.on("placeOrder",async(data,callback)=>{
        try{
            console.log(`placed order from ${socket.id}`);
            const validation = validateOrder(data);
            if(!validation.valid){
               return  callback({success: false , message: validation.message})
            }
        }
        catch(error){
            console.log(error);
            
        }
    })
} 