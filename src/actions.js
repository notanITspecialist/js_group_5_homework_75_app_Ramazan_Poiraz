import axios from "axios";

export const CHANGE_INPUT = 'CHANGE_INPUT';

export  const ENCODE_REQ = 'ENCODE_REQ';
export  const ENCODE_RES = 'ENCODE_RES';
export  const ENCODE_ERR = 'ENCODE_ERR';

export  const DECODE_REQ = 'DECODE_REQ';
export  const DECODE_RES = 'DECODE_RES';
export  const DECODE_ERR = 'DECODE_ERR';

export const changeInput = (name, value) => ({type: CHANGE_INPUT, name, value});

export const encodeReq = () => ({type: ENCODE_REQ});
export const encodeRes = data => ({type: ENCODE_RES, data});
export const encodeErr = () => ({type: ENCODE_ERR});

export const decodeReq = () => ({type: DECODE_REQ});
export const decodeRes = data => ({type: DECODE_RES, data});
export const decodeErr = () => ({type: DECODE_ERR});

export const encoded = data => async dispatch => {
    dispatch(encodeReq());
    try{
        const encode = await axios.post('localhost:8002/encode', data);
        dispatch(encodeRes(encode));
    } catch (err){
        dispatch(encodeErr());
    }
};

export const decoded = data => async dispatch => {
    dispatch(decodeReq());
    try{
        const encode = await axios.post('localhost:8002/decode', data);
        dispatch(decodeRes(encode));
    } catch (err){
        dispatch(decodeErr());
    }
};