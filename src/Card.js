import React from 'react';

import './Card.css';
import ellipsis from './assets/ellipsis-v-solid.svg';

function Value(props) {
    return <div className="Card-Value">
        <div className="name">{props.name}</div>
        <div className="value">{props.value}</div>
    </div>
}

function Footer(props) {
    return <div className="bottom-value"><span>{props.name}</span> <span>{props.value}</span></div>
}

class Card extends React.Component {
    render() {
        return <div className="Card">
            <img src={ellipsis} alt="more" />
            <div className="title">{this.props.title}</div>
            <div className="element-top">
                <Value {...this.props.left} />
                <Value {...this.props.right} />
            </div>
            <div className="middle-line"></div>
            <div className="element-bottom">
                <Footer {...this.props.footer[0]} />
                <Footer {...this.props.footer[2]} />
                <Footer {...this.props.footer[1]} />
                <Footer {...this.props.footer[3]} />
            </div>
        </div>
    }
}

export default Card;