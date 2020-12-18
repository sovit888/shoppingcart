export const increaseCart=(id)=>{
    return {
        type:"INCREASE_ASYNC",
        payload:id
    }
}

export const putCart=(id)=>{
    return {
        type:"PUT_CART_ASYNC",
        payload:id
    }
}

export const decreaseCart=(id)=>{
    return {
        type:"DECREASE_ASYNC",
        payload:id
    }
}