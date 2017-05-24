import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from '../../components/Timer';

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();		
	});

	it('should start timer on started status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer />);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({count: 10});
		timer.handleStatusChange('paused');
		expect(timer.state.count).toBe(10);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(10);
			done();
		}, 1001);
	});	

	it('should clear timer on stopped status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
			done();
		}, 1001);
	});		
})