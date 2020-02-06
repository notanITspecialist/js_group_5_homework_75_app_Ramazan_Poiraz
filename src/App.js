import React from 'react';
import {changeInput, decoded, encoded} from "./actions";
import {connect} from "react-redux";
import './app.css'

const App = props => {
  return (
    <div>
      <textarea
          className="vigenere-inp enc-dec"
          value={props.encode}
          name="encode"
          placeholder="Encoded"
          onChange={props.changeInp}
          disabled={props.decode.length > 0}
      />
      <input
          className="vigenere-inp"
          value={props.password}
          name="password"
          placeholder="Password"
          onChange={props.changeInp}
      />
        <button disabled={props.decode.length > 0} className="vigenere-inp vigenere-btn" onClick={() => props.encodeMessage({
            message: props.encode,
            password: props.password
        })}>⇓</button>
      <button disabled={props.encode.length > 0} className="vigenere-inp vigenere-btn" onClick={() => props.decodeMessage({
          message: props.decode,
          password: props.password
      })}>⇑</button>
      <textarea
          className="vigenere-inp enc-dec"
          value={props.decode}
          name="decode"
          placeholder="Decoded"
          onChange={props.changeInp}
          disabled={props.encode.length > 0}
      />
    </div>
  );
}

const mapStateToProps = state => ({
    encode: state.encode,
    decode: state.decode,
    password: state.password
});

const mapDispatchToProps = dispatch => ({
    changeInp: e => dispatch(changeInput(e.target.name, e.target.value)),
    encodeMessage: data => dispatch(encoded(data)),
    decodeMessage: data => dispatch(decoded(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
