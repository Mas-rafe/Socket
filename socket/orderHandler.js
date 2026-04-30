import { getCollection } from "../config/database.js";
import { calculateTotals, createOrderDocument, generateOrderId } from "./utils/helper.js";

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

            const totals = calculateTotals(data.items);
            const orderId = generateOrderId();
            const order = createOrderDocument(data,orderId,totals);

            const ordersCollection = getCollection('orders');
            await ordersCollection.insertone(order);

            socket.join(`order-${orderId}`);
            socket.join('customers');

            io.to('admins').emit('newOrder',{order})
            callback({success: true,order})
            console.log(`order created:${orderId}`);
            
        
        }catch(error){
            console.log(error);
            callback({success:false , message:'Failed to place order'})
            
        }
    })
} 