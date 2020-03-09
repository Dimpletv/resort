import React, { Component } from 'react';
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from 'react-icons/fa';
// import { TiBeer } from 'react-icons/ti';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:  <FaCocktail/>,
                title: "Free cocktails",
                info: 'All drinks (cocktails, beer, coffee, water, etc) are complimentary/free.'
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'Use our comprehensive trail guides with descriptions, photos, and reviews to plan your next hiking trail adventure.'
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: 'Free shuttle service to the airport.'
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: 'We serve best craft beer here, from Home of the Brave Brewing.'
            }
        ]
    };

    render() {
        return (
            <section className="services"> 
                <Title title="services" /> 
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
            );
    }
}

