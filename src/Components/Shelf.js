import React, {Component} from 'react'

class Shelf extends Component{
    constructor() {
        super()
        this.state ={}
    }

    render(){
        return(
            <div className="Shelf">
                <h1>Your Shelf</h1>
                <button>clear shelf</button>
            </div>
        )
    }
    
}

export default Shelf