import React from "react";
import axios from 'axios';
import { useState } from "react";
import SelectCurr from "./SelectCurr";
import classes from './Layout.module.css'
function Layout() {
    const [amount, setAmount] = useState();
    const [toCurr, setToCurr] = useState('EUR')
    const [fromCurr, setFromCurr] = useState('USD')
    const [newAmount, setNewAmount] = useState()

    const changeToCurr = (currency) => {
        setToCurr(currency)

        setNewAmount('')
    }
    const changeFromCurr = (currency) => {
        setFromCurr(currency)
        setNewAmount('')
    }

    function handleSubmit(e) {
        console.log(amount)
        console.log(toCurr)
        console.log(fromCurr)
        const baseURL = `https://api.api-ninjas.com/v1/convertcurrency?want=${toCurr}&have=${fromCurr}&amount=${amount}`
        e.preventDefault();
        axios.get(baseURL, { headers: { 'X-Api-Key': 'wgFAOo7gmAegPddr9SCu7A==PcxuyTsiYtd3pfXo' } })
            .then(response => {
                console.log(response.data);
                setNewAmount(response.data.new_amount)
            })
            .catch((error) => {
                console.log('error ' + error);
            });
        console.log('submitted')
    }
    return (
        <div className={classes.main}>
            <form onSubmit={handleSubmit}>

                <div className={classes.currType}>
                    <div>
                        <div>
                            <label for='from'>From </label>
                            <SelectCurr id='from' selectCurrHandler={changeFromCurr} defaultCurrency='USD' />

                        </div>
                        <input type="number" id='amount' required onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <div>
                        <div>
                            <label for='from'>To </label>
                            <SelectCurr id='to' selectCurrHandler={changeToCurr} defaultCurrency='EUR' />
                        </div>
                        <input type='text' id='newAmount' readOnly className={classes.newAmount} value={newAmount} />
                    </div>
                </div>

                <div>
                    <button type='submit' value='Submit'> Convert</button>
                </div>
            </form>
        </div>
    )
}

export default Layout;
