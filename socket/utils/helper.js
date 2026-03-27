export function validateOrder(data) {

    if (!data.customerName?.trim()) {
        return {
            valid: false, message: 'Customer name is required'
        }
    }
    if (!data.customerPhone?.trim()) {
        return {
            valid: false, message: 'Customer phone number is required'
        }
    }
    if (!data.customerAddress?.trim()) {
        return {
            valid: false, message: 'Customer address is required'
        }
    }

}