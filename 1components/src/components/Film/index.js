import React, { Component } from 'react';
import { filmArr } from "./filmsArr"
import { daysArr } from "./filmsArr"

class Kino extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    click = () => {
        const { time1, time2, time3, time4 } = this.props
        let arrT = [time1, time2, time3, time4]
        let startDay = parseInt(this.refs.start.value)
        let stopDay = parseInt(this.refs.stop.value)
        try {
            if (stopDay - startDay < 0) throw new Error
        } catch (error) {
            if (error instanceof Error) alert("check the second day right")
        }
        for (let i = startDay; i <= stopDay; i++) {
            this.refs.result.innerText = < table key="i" >
                <tr>
                    {daysArr[i]}
                </tr>
                {
                    filmArr.map((elem, j) =>
                        <tr key={j}><td>{arrT[j]}</td><td>{filmArr[j].name}</td><td>{filmArr[j].price}</td></tr>)
                }
            </table >

        }

    }
    render() {
        return (
            <>
                <select ref="start">
                    <option value="0">Monday 20 May</option>
                    <option value="1">Thuesday 21 May</option>
                    <option value="2">Wensday 22 May</option>
                    <option value="3">Thursday 23 May</option>
                    <option value="4">Friday 24 May</option>
                    <option value="5">Saturday 25 May</option>
                    <option value="6">Sunday 26 May</option>
                </select>

                <button onClick={this.click}>View films</button>

                <select ref="stop">
                    <option value="0">Monday 20 May</option>
                    <option value="1">Thuesday 21 May</option>
                    <option value="2">Wensday 22 May</option>
                    <option value="3">Thursday 23 May</option>
                    <option value="4">Friday 24 May</option>
                    <option value="5">Saturday 25 May</option>
                    <option value="6">Sunday 26 May</option>
                </select>
                <p ref="result">
                    {this.click}
                </p>

            </>

        );
    }
}

export default Kino;