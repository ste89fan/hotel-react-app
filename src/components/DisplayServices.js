import React, { Component } from 'react'

class DisplayServices extends Component {
    render() {
        const {id,icon,title} = this.props.service;
        return (
            <article key={id} className="serviceArticle">
                <div>{icon}</div>
                <h5>{title}</h5>
            </article>
        )
    }
}

export default DisplayServices
