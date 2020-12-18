import {takeEvery,put,all} from "redux-saga/effects";

function *increaseCart({payload}){
    yield put({type:"INCREASE",payload:payload})
}

function *decreaseCart({payload}){
    yield put({type:"DECREASE",payload:payload})
}

function *putCart({payload}){
    yield put({type:"PUT_CART",payload:payload})
}

function *increaseCartAsync(){
    yield takeEvery("INCREASE_ASYNC",increaseCart);
}

function *decreaseCartAsync(){
    yield takeEvery("DECREASE_ASYNC",decreaseCart);
}

function *putCartAsync(){
    yield takeEvery("PUT_CART_ASYNC",putCart);
}

function *rootSaga(){
    yield all([increaseCartAsync(),decreaseCartAsync(),putCartAsync()])
}

export default rootSaga;