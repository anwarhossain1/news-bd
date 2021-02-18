import React, { Component } from 'react'
import CardUI from './CardUI'

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                
                <div className="row">
                    <div className="col-md-4">
                        <CardUI/>
                        <CardUI/>
                        <CardUI/>
                    </div>
                    <div className="col-md-4">
                        <CardUI/>
                        <CardUI/>
                        <CardUI/>
                    </div>
                    <div className="col-md-4">
                        <CardUI/>
                        <CardUI/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
