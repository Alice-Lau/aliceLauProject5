import React, { Component } from 'react';
import firebase from './firebase';

class UserInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chefName: "",

            bentoTitle: "",

            ingredient1Img: "./assets/noodles.svg",
            ingredient1Name: "stir-fried noodles",

            ingredient2Img: "./assets/honeyGarlicTofu.svg",
            ingredient2Name: "honey garlic tofu",

            ingredient3Img: "./assets/coleslaw.svg",
            ingredient3Name: "coleslaw salad",

            ingredient4Img: "./assets/vegieDumplings.svg",
            ingredient4Name: "vegie dumplings"
        }
        this.initialState = this.state;
    }

    handleChefNameChange = changeEvent => {
        this.setState({
            chefName: changeEvent.target.value
        })
    }

    handleBentoTitleChange = changeEvent => {
        this.setState({
            bentoTitle: changeEvent.target.value
        })
    }

    handleIngredient1Change = changeEvent => {
        this.setState({
            ingredient1Img: changeEvent.target.value,
            ingredient1Name: changeEvent.target.dataset.label,
        })
    }

    handleIngredient2Change = changeEvent => {
        this.setState({
            ingredient2Img: changeEvent.target.value,
            ingredient2Name: changeEvent.target.dataset.label,
        })
    }

    handleIngredient3Change = changeEvent => {
        this.setState({
            ingredient3Img: changeEvent.target.value,
            ingredient3Name: changeEvent.target.dataset.label,
        })
    }

    handleIngredient4Change = changeEvent => {
        this.setState({
            ingredient4Img: changeEvent.target.value,
            ingredient4Name: changeEvent.target.dataset.label,
        })
    }

    handleSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        const dbRef = firebase.database().ref();

        this.state.chefName && this.state.bentoTitle
            ? dbRef.push(this.state)
            : alert('please complete your inputs');

        this.setState({
            chefName: "",

            bentoTitle: "",

            ingredient1Img: "./assets/noodles.svg",
            ingredient1Name: "stir-fried noodles",

            ingredient2Img: "./assets/honeyGarlicTofu.svg",
            ingredient2Name: "honey garlic tofu",

            ingredient3Img: "./assets/coleslaw.svg",
            ingredient3Name: "coleslaw salad",

            ingredient4Img: "./assets/vegieDumplings.svg",
            ingredient4Name: "vegie dumplings"
        })
    }

    render() {
        return(
            <div className="userInputForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="chefName">
                        <label htmlFor="chefName">
                            <h2>Present Your Name, Chef!</h2>
                        </label>
                        <input
                            id="chefName"
                            type="text"
                            placeholder="enter your name here."
                            onChange={this.handleChefNameChange}/>
                    </div>

                    <div className="bentoTitle">
                        <label htmlFor="bentoTitle">
                            <h2>Name Your Bento!</h2>
                        </label>
                        <input
                            id="bentoTitle"
                            type="text"
                            placeholder="enter the title for your bento"
                            onChange={this.handleBentoTitleChange}/>
                    </div>


                    <div className="ingredient ingredient1">
                        <h2>ingredient 1:</h2>
                        <div>
                            <label htmlFor="ingredient1Choice1">
                                <input
                                    id="ingredient1Choice1"
                                    type="radio"
                                    name="ingredient1"
                                    value="./assets/noodles.svg"
                                    data-label="stir-fried noodles"
                                    checked={this.state.ingredient1Img === "./assets/noodles.svg" &&
                                        this.state.ingredient1Name === "stir-fried noodles"
                                    }
                                    onChange={this.handleIngredient1Change} />
                                stir-fried noodles
                            </label>
                        </div>
                        
                        <div>
                            <label htmlFor="ingredient1Choice2">
                                <input
                                    id="ingredient1Choice2"
                                    type="radio"
                                    name="ingredient1"
                                    value="./assets/sushiMaki.svg"
                                    data-label="sushi maki rolls"
                                    checked={this.state.ingredient1Img === "./assets/sushiMaki.svg" &&
                                        this.state.ingredient1Name === "sushi maki rolls"
                                    }
                                    onChange={this.handleIngredient1Change} />
                                sushi maki rolls
                            </label>
                        </div>
                    </div>

                    <div className="ingredient ingredient2">
                        <h2>ingredient 2:</h2>
                        <div>
                            <label htmlFor="ingredient2Choice1">
                                <input
                                    id="ingredient2Choice1"
                                    type="radio"
                                    name="ingredient2"
                                    value="./assets/honeyGarlicTofu.svg"
                                    data-label="honey garlic tofu"
                                    checked={this.state.ingredient2Img === "./assets/honeyGarlicTofu.svg" &&
                                        this.state.ingredient2Name === "honey garlic tofu"
                                    }
                                    onChange={this.handleIngredient2Change} />
                                honey garlic tofu
                            </label>
                        </div>

                        <div>
                            <label htmlFor="ingredient2Choice2">
                                <input
                                    id="ingredient2Choice2"
                                    type="radio"
                                    name="ingredient2"
                                    value="./assets/friedShrimps.svg"
                                    data-label="fried shrimps"
                                    checked={this.state.ingredient2Img === "./assets/friedShrimps.svg" &&
                                        this.state.ingredient2Name === "fried shrimps"
                                    }
                                    onChange={this.handleIngredient2Change} />
                                fried shrimps
                            </label>
                        </div>
                    </div>

                    <div className="ingredient ingredient3">
                        <h2>ingredient 3:</h2>
                        <div>
                            <label htmlFor="ingredient3Choice1">
                                <input
                                    id="ingredient3Choice1"
                                    type="radio"
                                    name="ingredient3"
                                    value="./assets/coleslaw.svg"
                                    data-label="coleslaw salad"
                                    checked={this.state.ingredient3Img === "./assets/coleslaw.svg" &&
                                        this.state.ingredient3Name === "coleslaw salad"
                                    }
                                    onChange={this.handleIngredient3Change} />
                                coleslaw salad
                            </label>
                        </div>

                        <div>
                            <label htmlFor="ingredient3Choice2">
                                <input
                                    id="ingredient3Choice2"
                                    type="radio"
                                    name="ingredient3"
                                    value="./assets/seaweedSalad.svg"
                                    data-label="seaweed salad"
                                    checked={this.state.ingredient3Img === "./assets/seaweedSalad.svg" &&
                                        this.state.ingredient3Name === "seaweed salad"
                                    }
                                    onChange={this.handleIngredient3Change} />
                                seaweed salad
                            </label>
                        </div>
                    </div>

                    <div className="ingredient ingredient4">
                        <h2>ingredient 4:</h2>
                        <div>
                            <label htmlFor="ingredient4Choice1">
                                <input
                                    id="ingredient4Choice1"
                                    type="radio"
                                    name="ingredient4"
                                    value="./assets/vegieDumplings.svg"
                                    data-label="vegie dumplings"
                                    checked={this.state.ingredient4Img === "./assets/vegieDumplings.svg" &&
                                        this.state.ingredient4Name === "vegie dumplings"
                                    }
                                    onChange={this.handleIngredient4Change} />
                                vegie dumplings
                            </label>
                        </div>
                        
                        <div>
                            <label htmlFor="ingredient4Choice2">
                                <input
                                    id="ingredient4Choice2"
                                    type="radio"
                                    name="ingredient4"
                                    value="./assets/fruitSalad.svg"
                                    data-label="fruit salad"
                                    checked={this.state.ingredient4Img === "./assets/fruitSalad.svg" &&
                                        this.state.ingredient4Name === "fruit salad"
                                    }
                                    onChange={this.handleIngredient4Change} />
                                fruit salad
                            </label>
                        </div>
                    </div>


                    <div className="submit">
                        <label htmlFor="submit"></label>
                        <button id="submit" type="submit">
                            Post Your Bento
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserInput;