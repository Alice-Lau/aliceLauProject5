import React, { Component } from 'react';
import firebase from './firebase';

class UserInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chefName: "",

            bentoTitle: "",

            ingredient1Img: "ingredient1Choice1Img",
            ingredient1Name: "ingredient1Choice1",

            ingredient2Name: "ingredient2Choice1",
            ingredient2Img: "ingredient2Choice1Img",

            ingredient3Img: "ingredient3Choice1Img",
            ingredient3Name: "ingredient3Choice1",

            ingredient4Img: "ingredient4Choice1Img",
            ingredient4Name: "ingredient4Choice1"
        }
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

        dbRef.push(this.state);
    }

    render() {
        return(
            <div className="UserInputForm">
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


                    <div className="ingreident1">
                        <label htmlFor="ingredient1Choice1">
                            <input
                                id="ingredient1Choice1"
                                type="radio"
                                name="ingredient1"
                                value="ingredient1Choice1Img"
                                data-label="ingredient1Choice1"
                                checked={this.state.ingredient1Img === "ingredient1Choice1Img" &&
                                        this.state.ingredient1Name === "ingredient1Choice1"
                                        }
                                onChange={this.handleIngredient1Change}/>
                                ingredient 1 choice 1
                        </label>
                        <label htmlFor="ingredient1Choice2">
                            <input
                                id="ingredient1Choice2"
                                type="radio"
                                name="ingredient1"
                                value="ingredient1Choice2Img"
                                data-label="ingredient1Choice2"
                                checked={this.state.ingredient1Img === "ingredient1Choice2Img" &&
                                        this.state.ingredient1Name === "ingredient1Choice2"
                                        }
                                onChange={this.handleIngredient1Change} />
                                ingredient 1 choice 2
                        </label>
                    </div>

                    <div className="ingreident2">
                        <label htmlFor="ingredient2Choice1">
                            <input
                                id="ingredient2Choice1"
                                type="radio"
                                name="ingredient2"
                                value="ingredient2Choice1Img"
                                data-label="ingredient2Choice1"
                                checked={this.state.ingredient2Img === "ingredient2Choice1Img" &&
                                    this.state.ingredient2Name === "ingredient2Choice1"
                                }
                                onChange={this.handleIngredient2Change} />
                            ingredient 2 choice 1
                        </label>
                        <label htmlFor="ingredient2Choice2">
                            <input
                                id="ingredient2Choice2"
                                type="radio"
                                name="ingredient2"
                                value="ingredient2Choice2Img"
                                data-label="ingredient2Choice2"
                                checked={this.state.ingredient2Img === "ingredient2Choice2Img" &&
                                    this.state.ingredient2Name === "ingredient2Choice2"
                                }
                                onChange={this.handleIngredient2Change} />
                            ingredient 2 choice 2
                        </label>
                    </div>

                    <div className="ingreident3">
                        <label htmlFor="ingredient3Choice1">
                            <input
                                id="ingredient3Choice1"
                                type="radio"
                                name="ingredient3"
                                value="ingredient3Choice1Img"
                                data-label="ingredient3Choice1"
                                checked={this.state.ingredient3Img === "ingredient3Choice1Img" &&
                                    this.state.ingredient3Name === "ingredient3Choice1"
                                }
                                onChange={this.handleIngredient3Change} />
                            ingredient 3 choice 1
                        </label>
                        <label htmlFor="ingredient3Choice2">
                            <input
                                id="ingredient3Choice2"
                                type="radio"
                                name="ingredient3"
                                value="ingredient3Choice2Img"
                                data-label="ingredient3Choice2"
                                checked={this.state.ingredient3Img === "ingredient3Choice2Img" &&
                                    this.state.ingredient3Name === "ingredient3Choice2"
                                }
                                onChange={this.handleIngredient3Change} />
                            ingredient 3 choice 2
                        </label>
                    </div>

                    <div className="ingreident4">
                        <label htmlFor="ingredient4Choice1">
                            <input
                                id="ingredient4Choice1"
                                type="radio"
                                name="ingredient4"
                                value="ingredient4Choice1Img"
                                data-label="ingredient4Choice1"
                                checked={this.state.ingredient4Img === "ingredient4Choice1Img" &&
                                    this.state.ingredient4Name === "ingredient4Choice1"
                                }
                                onChange={this.handleIngredient4Change} />
                            ingredient 4 choice 1
                        </label>
                        <label htmlFor="ingredient4Choice2">
                            <input
                                id="ingredient4Choice2"
                                type="radio"
                                name="ingredient4"
                                value="ingredient4Choice2Img"
                                data-label="ingredient4Choice2"
                                checked={this.state.ingredient4Img === "ingredient4Choice2Img" &&
                                    this.state.ingredient4Name === "ingredient4Choice2"
                                }
                                onChange={this.handleIngredient4Change} />
                            ingredient 4 choice 2
                        </label>
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