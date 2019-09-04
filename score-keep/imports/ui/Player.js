import React from "react";
import {Players} from './../../imports/api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component{
    render() {
        return (
            <div key={this.props.player._id} className="item">
                <p>
                    {this.props.player.name} has {this.props.player.score} point(s).
                </p>
                <button className="button button--round" onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: -1}})}>-1</button>
                <button className="button button--round" onClick={() => Players.update({_id: this.props.player._id}, {$inc: {score: 1}})}>+1</button>
                <button className="button button--round" onClick={() => Players.remove({_id: this.props.player._id})}>X</button>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    //score: PropTypes.object.isRequired
};