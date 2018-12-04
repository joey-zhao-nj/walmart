import React from 'react';

import './ConstMGT.css';
import arrowDown from './assets/sort-down-solid.svg'
import info from './assets/info-circle-solid.svg';

import Title from './Title';
import Card from './Card';

class ConstMGT extends React.Component {
    cards = [{
        title: <span>Capital Project <img className="cappro-info" src={info} alt="info" /></span>,
        left: { name: "Total", value: "55.14%" },
        right: { name: "CPViz", value: "100%" },
        footer: [
            { name: "Completed", value: "59" },
            { name: "Active", value: "100" },
            { name: "In Progress", value: "30" },
            { name: "Draft", value: "47" },
        ]
    }, {
        title: "Project Schedule",
        left: { name: "Total", value: "66.6%" },
        right: { name: "PSViz", value: "100%" },
        footer: [
            { name: "Completed", value: "100" },
            { name: "Incomplete", value: "180" },
            { name: "Total", value: "280" },
        ]
    }, {
        title: "Schedule Task Risk",
        left: { name: "Total", value: "66.66%" },
        right: { name: "Total Tasks", value: "3000" },
        footer: [
            { name: "On Track", value: "100" },
            { name: "Red", value: "30" },
        ]
    }];
    render() {
        return <React.Fragment>
            <Title title="Construction Management" />
            <div className="constMGT-body">
                <div className="title">Business Summary</div>
                <div className="time">Week To Date  <img src={arrowDown} alt="more" /></div>
                <div className="container">
                    <div className="cards">
                        {this.cards.map(card => <Card {...card}></Card>)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default ConstMGT;