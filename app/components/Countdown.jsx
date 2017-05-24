import React, { Component } from 'react';
import { Link } from 'react-router';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Example extends Component {
	state = {
		count: 0,
		countdownStatus: 'stopped'
	}

	handleSetCountdown = (seconds) => {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		})
	}

	startTimer = () => {
		this.timer = setInterval(() => {
			const newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount === 0) {
				this.setState({
					countdownStatus: 'stopped'
				})
			}			
		}, 1000);
	}	

	handleStatusChange = (newStatus) => {
		this.setState({
			countdownStatus: newStatus
		})
	}

	componentDidUpdate(prevProps, prevState) {
		// check if the component state has changed
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						count: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	render() {
		const { count, countdownStatus } = this.state;

		const renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown} />				
			}
		}

		return (
			<div>
				<h1 className="page-title">Countdown App</h1>
				<Clock totalSeconds={count} />
				{renderControlArea()}
			</div>
		)
	}
}

export default Example;