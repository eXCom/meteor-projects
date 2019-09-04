import React from 'react';
import {Players} from "../api/players";
import PropTypes from 'prop-types';

export default class AddPlayer extends React.Component{
    handleSubmit(e) {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if(playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    render() {
        return (
            <div className="item">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add player</button>
                </form>
            </div>
        );
    }
}