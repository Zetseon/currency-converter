import React, {useState} from "react";
import classes from './SelectCurr.module.css'
function SelectCurr({selectCurrHandler, defaultCurrency}) {
    
    const [selectCurr, setSelectCurr] = useState(defaultCurrency)

    function clickHandler() {
        console.log(selectCurr)
        selectCurrHandler(selectCurr);
    }

    return <div>
        <select name="selectList" id="selectList" className={classes.selectList} onClick={clickHandler} value={selectCurr} onChange={(e) => setSelectCurr(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="AED">AED</option>
            <option value="KRW">KRW</option>
            <option value="JPY">JPY</option>
            <option value="TZS">TZS</option>
            <option value="MXP">MXP</option>
            <option value="BTC">BTC</option>
        </select>
    </div>;
}

export default SelectCurr;
