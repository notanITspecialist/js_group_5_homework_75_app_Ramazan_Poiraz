import React from 'react';
import {changeInput, decoded, encoded} from "./actions";
import {connect} from "react-redux";

const App = props => {
  return (
    <div>
      <input value={props.encode} name="encode" placeholder="Encoded" onChange={props.changeInp}/>
      <button onClick={() => props.encodeMessage({
          message: props.encode,
          password: props.password
      })}>encode</button>
      <input value={props.password} name="password" placeholder="Password" onChange={props.changeInp}/>
      <button onClick={() => props.decodeMessage({
          message: props.decode,
          password: props.password
      })}>decode</button>
      <input value={props.decode} name="decode" placeholder="Decoded" onChange={props.changeInp}/>
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
