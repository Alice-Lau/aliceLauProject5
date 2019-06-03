import React, { Component } from 'react';

class InputTxt extends Component {
    render() {
        return(
            <div className="textInputField">
                <label htmlFor="chefName">Present Your Name, Chef!</label>
                <input
                    id="chefName"
                    type="text"
                    placeholder="enter your name here." />

                <label htmlFor="bentoTitle">Name Your Bento!</label>
                <input
                    id="bentoTitle"
                    type="text"
                    placeholder="enter the title for your bento" />
            </div>
        )
    }
}

export default InputTxt;


