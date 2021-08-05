import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        };
    }

    fetchGifs = input => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=3TxQbYgJ5zn6zXALlXnRKf8JJBkQY7VW&rating=g`).then(resp => resp.json()).then(results => {
            this.setState({
                gifs: results.data.slice(0, 3).map(gif => gif.images.original.url)
            });
        })
    }

    render() {
        return (
            <div className="gif-list-container">
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer