import React, { Component } from 'react';
import firebase from './firebase.js';

class BentoDisplay extends Component {
    constructor() {
        super();
        this.state = {
            bentos: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {

            const newBentos = [];

            const data = response.val();

            for (let key in data) {
                newBentos.push(data[key]);
            }

            this.setState({
                bentos: newBentos
            });
        });
    }
    
    render() {
        return(
            <div className="bentoDisplay">
                {this.state.bentos.map( (bento, index) => {
                    return(
                        <div key={index} className="singleBento">
                            <h2>{bento.bentoTitle}</h2>
                            <h3>by Chef {bento.chefName}</h3>
                            <div className="bentoBox">
                                <div className="partTopLeft">
                                    <img src={bento.ingredient1Img} alt={bento.ingredient1Name}/>
                                </div>
                                <div className="partTopRight">
                                    <img src={bento.ingredient2Img} alt={bento.ingredient2Name}/>
                                </div>
                                <div className="partBotLeft">
                                    <img src={bento.ingredient3Img} alt={bento.ingredient3Name}/>
                                </div>
                                <div className="partBotRight">
                                    <img src={bento.ingredient4Img} alt={bento.ingredient4Name}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BentoDisplay;