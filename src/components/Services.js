import React, { Component } from 'react';
import Title from "./Title";
import DisplayServices from "./DisplayServices";
import { FaFly,FaStickerMule,FaCocktail,FaCar } from 'react-icons/fa';

class Services extends Component {
    state={
        services: [
            {
                id : 0,
                icon : <FaFly />,
                title : "Fly with baloon"
            },
            {
                id : 1,
                icon : <FaStickerMule />,
                title : "Horse riding"
            },
            {
                id : 2,
                icon : <FaCocktail />,
                title : "Cocktail in hotel bar"
            },
            {
                id : 3,
                icon : <FaCar />,
                title : "Rent-A-Car"
            },
        ]
    }
    render() {
        return (
            <section className="serviceField">
                <Title title="We offering discount on next services"/>
                <div className="serviceParts">
                    {this.state.services.map(service => {
                       return <DisplayServices key={service.id} service={service}/>
                    })
                    }
                </div>
            </section>
        )
    }
}

export default Services
