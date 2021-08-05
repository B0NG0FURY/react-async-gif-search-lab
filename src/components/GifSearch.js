import React, { Component } from "react";

class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ""
        };
    }

    inputChange = event => {
        this.setState({
            searchInput: event.target.value
        })
    }



    render() {
        return (
            <form id="gif-search" onSubmit={event => {
                event.preventDefault();
                this.props.fetchGifs(this.state.searchInput)
                }}>
                <input id="searchInput" onChange={event => this.inputChange(event)}></input>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}

export default GifSearch