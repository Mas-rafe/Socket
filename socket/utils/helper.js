export function validateOrder(data) {

    if(!data.customerName?.trim()){
return {
    valid: false, message:'Customer name is required';
}
    }
    
}