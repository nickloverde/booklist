import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="Btns">
                    <input/>
                    <button>search</button>
                    <button>clear search</button>
                </div>
            </div>
        )
    }
}


export default SearchBar