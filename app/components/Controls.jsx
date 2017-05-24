import React, { Component, PropTypes } from 'react';

class Controls extends Component {
	onStatusChange = (newStatus) => {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}

	render() {
		const { countdownStatus } = this.props;		

		const renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
			} else {
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
			}
		}

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		)
	}
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
	onStatusChange: PropTypes.func.isRequired
};

export default Controls;