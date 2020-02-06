import {CHANGE_INPUT, DECODE_ERR, DECODE_RES, ENCODE_ERR, ENCODE_RES} from "./actions";

const initialState = {
    encode: '',
    decode: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    if(action.type === CHANGE_INPUT){
        return {...state, [action.name]: action.value}
    }
    if(action.type === ENCODE_RES){
        console.log(action.encoded)
        return {...state, decode: action.data.encoded}
    }
    if(action.type === ENCODE_ERR){
        alert('Просим прощения произошла ошибка')
    }
    if(action.type === DECODE_RES){
        return {...state, encode: action.data.decoded}
    }
    if(action.type === DECODE_ERR){
        alert('Просим прощения произошла ошибка')
    }
    return state;
};

export default reducer;