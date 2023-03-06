import React, { Component } from 'react'

// need to reference props.children because subcontent and advertisement are children 
// of main.


class Main extends Component {
    constructor(){
        super()
    }
    render() {
        
        return(
            <div className='main'>
                {this.props.children}
            </div>
        )
    }
}


export default Main;