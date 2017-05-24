import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class About extends Component {
	state = {
		count: 0,
		timerStatus: 'stopped'
	}

	handleStart = () => {
		this.timer = setInterval(() => {
			this.setState((prevState) => {
  			return {count: prevState.count + 1};
			});
		}, 1000);
	}

	handleStatusChange = (newTimerStatus) => {
		this.setState({
			timerStatus: newTimerStatus
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.handleStart();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		const { count, timerStatus } = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count} />
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
			</div>
		)
	}
}

export default About;