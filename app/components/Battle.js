import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from "prop-types";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instruction</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255,191,116)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255,215,0)" size={140} />
        </li>
      </ol>
    </div>
  );
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  // CONTROLLER COMPONENT
  // User writes something into input field
  // React says notices changes and invoke onChange - handleChange
  // We get the value of whatever was into input field from the event
  // We call setstate that updates te local state
  // Which causes the re-render which then updates the value of the input field
  render() {
    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-labe">
          {this.props.label}
          <div className="row player-inputs">
            <input
              type="text"
              id="username"
              className="input-light"
              placeholder="github username"
              autoComplete="off"
              value={this.state.username} //If we want to update the value, we have to update the state, func below 
              onChange={this.handleChange}
            />
            <button
              className="btn dark-btn"
              type="submit"
              disabled={!this.state.username} //If no username, button deactivated
            >
              Submit
            </button>
          </div>
        </label>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default class Battle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />

      </React.Fragment>
    );
  }
}
