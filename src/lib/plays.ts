import { baseballState } from './state.svelte';
import { singleRun, walk, sacFly, singlePlus, doubleRun, tripleRun } from './baseRunning';
import outRules from './outRules';
import doubleplay from './doubleplay';
import homerun from './homerun';

export default function plays(dice1: number, dice2: number) {
	let play = '';

	if (dice1 === 1) {
		if (dice2 === 1) {
			play = 'Home Run';
			homerun();
		}
		if (dice2 === 2) {
			play = 'Double';
			doubleRun(baseballState.baseRunners);
		}
		if (dice2 === 3) {
			play = 'Fly Out';
			outRules(1);
		}
		if (dice2 === 4) {
			play = 'Walk';
			walk(baseballState.baseRunners);
		}
		if (dice2 === 5) {
			play = 'Pop Out';
			outRules(1);
		}
		if (dice2 === 6) {
			play = 'Single';
			singleRun(baseballState.baseRunners);
		}
	}

	if (dice1 === 2) {
		if (dice2 === 2) {
			play = 'Double Play';
			doubleplay(baseballState.baseRunners);
		}
		if (dice2 === 3) {
			play = 'Ground Out';
			outRules(1);
		}
		if (dice2 === 4) {
			play = 'Out';
			outRules(1);
		}
		if (dice2 === 5) {
			play = 'Single, Runners Advance 2 Bases';
			singlePlus(baseballState.baseRunners);
		}
		if (dice2 === 6) {
			play = 'Out';
			outRules(1);
		}
	}

	if (dice1 === 3) {
		if (dice2 === 3) {
			play = 'Walk';
			walk(baseballState.baseRunners);
		}
		if (dice2 === 4) {
			play = 'Single';
			singleRun(baseballState.baseRunners);
		}
		if (dice2 === 5) {
			play = 'Ground Out';
			outRules(1);
		}
		if (dice2 === 6) {
			play = 'Fly Out';
			outRules(1);
		}
	}

	if (dice1 === 4) {
		if (dice2 === 4) {
			play = 'Walk';
			walk(baseballState.baseRunners);
		}
		if (dice2 === 5) {
			play = 'Pop Out';
			outRules(1);
		}
		if (dice2 === 6) {
			play = 'Out';
			outRules(1);
		}
	}

	if (dice1 === 5) {
		if (dice2 === 5) {
			play = 'Strike Out';
			outRules(1);
		}
		if (dice2 === 6) {
			play = 'Sac Fly, Runners Advance 1 Base';
			outRules(1);
			sacFly(baseballState.baseRunners);
		}
	}

	if (dice1 === 6) {
		if (dice2 === 6) {
			play = 'Triple';
			tripleRun(baseballState.baseRunners);
		}
	}

	return play;
}
