import React, { Component } from "react";

class GifList extends Component {

    displayGifs = () => this.props.gifs.map(gif => <li key={gif}><img src={gif}></img></li>)

    render() {
        return (
            <div className="gif-list">
                <ul>{this.displayGifs()}</ul>
            </div>
        )
    }
}

export default GifList