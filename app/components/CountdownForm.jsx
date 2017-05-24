import React, { Component } from 'react';

class CountdownForm extends Component {

	onSubmit = (e) => {
		e.preventDefault();
		const strSeconds = this.refs.seconds.value;

		// check if the seconds is valid
		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	}

	render() {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>					
				</form>
			</div>
		)
	}
}

export default CountdownForm;