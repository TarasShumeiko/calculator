import React from 'react';
import '../app/style.css';

function Buttons(props) {
  return (
    <table className="keyboard" onClick={props.insertOnDisplay}>
      <tr>
        <td><input type="button" value="C" className="button" onClick={props.cleanDisplay} /></td>
        <td><input type="button" value="<" className="button" onClick={props.backNum} /></td>
        <td><input type="button" value="/" className="button" /></td>
        <td><input type="button" value="*" className="button" /></td>
      </tr>
      <tr>
        <td><input type="button" value="7" className="button" /></td>
        <td><input type="button" value="8" className="button" /></td>
        <td><input type="button" value="9" className="button" /></td>
        <td><input type="button" value="-" className="button" /></td>
      </tr>
      <tr>
        <td><input type="button" value="4" className="button" /></td>
        <td><input type="button" value="5" className="button" /></td>
        <td><input type="button" value="6" className="button" /></td>
        <td><input type="button" value="+" className="button" /></td>
      </tr>
      <tr>
        <td><input type="button" value="1" className="button" /></td>
        <td><input type="button" value="2" className="button" /></td>
        <td><input type="button" value="3" className="button" /></td>
        <td rowSpan="5"><input type="button" value="=" className="button-equal" onClick={props.equalNum} /></td>
      </tr>
      <tr>
        <td colSpan="2"><input type="button" value="0" className="button-zero" /></td>
        <td><input type="button" value="." className="button" /></td>
      </tr>
    </table>
  );
}

export default Buttons;
