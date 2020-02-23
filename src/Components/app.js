import React, { Component } from 'react';
import SearchBar from './SearchBar/searchBar';
import ImageList from './Image/imageList';
import axios from 'axios';
import './app.css';


class App extends Component {

    state = {
        images: []
    }

    onSearchImage = async (search) => {
        const result = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: search
            },
            headers: {
                Authorization: 'Client-ID ab5f37306f09d2d87a3767d3ed96c85e0689ad22fd8273b2e7b0206720998ff0'
            }
        })
        // console.log(result.data.results)
        this.setState({
            images:result.data.results
        });
    }

    render() {
        return(
            <div className='app-container'>
                <SearchBar onSearchImage={this.onSearchImage} />
                <ImageList images={this.state.images} />
                {/* <div>
                     {this.state.Images.length} adet resim bulundu.
                </div> */}
            </div>
            
        )  
    }
};

export default App;