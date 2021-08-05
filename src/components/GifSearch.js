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
            <form id="gif-search">
                <input id="searchInput" onChange={event => this.inputChange(event)}></input>
            </form>
        )
    }
}