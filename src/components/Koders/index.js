/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

const KODERS_JSON = [
    {
        name: 'Axel',
        age: 31,
        hobbies: ['Drink', 'Pets']
    },
    {
        name: 'Ivan',
        age: 29,
        hobbies: ['Basketball', 'Chess', 'Videogames']
    },
    {
        name: 'Luis',
        age: 34,
        hobbies: ['Money', 'Pets', 'Social media','Drink']
    }
]

class Koders extends Component {
    constructor(props) {
        console.log('Contructor')
        super(props);
        this.state ={
            koders: []
        }
    }

    componentDidMount() {
        // -> Request
        // <- Response
        console.log('Component Mount')
        console.log('Server Request')
        setTimeout(() => {
            console.log('Server Response')
            this.setState({
                koders: KODERS_JSON,
            });
        }, 1000)
    }

    renderKoders() {
        var filteredArray = this.state.koders.filter(koder => koder.hobbies.length >= 3)
        console.log(filteredArray)

        return filteredArray.map(({name, age, hobbies}) => {
            return (
                <ul>
                    <li>
                        {name}, {age} años 
                            <ul>
                                {hobbies.map((h) => <li>{h}</li>)}
                            </ul>
                    </li>
                </ul>
            );
        });
    }

    render() {
        console.log('Render', this.state.koders)
        return (
            <div>
                <ul>{this.renderKoders()}</ul>
            </div>
        )
    }
}

export default Koders;