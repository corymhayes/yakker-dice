import { baseballState } from './state.svelte';
import outRules from './outRules';

export default function doubleplay(runners: number[]) {
	const basesOn = runners.filter((base) => base === 1);

	if (basesOn.length === 0) {
		outRules(1);
	} else if (basesOn.length === 1) {
		baseballState.baseRunners = [0, 0, 0, 0];
		outRules(2);
	} else if (basesOn.length > 1) {
		const bases: number[] = [];

		for (let i = 0; i < runners.length; i++) {
			if (runners[i] === 1) {
				bases.push(i);
			}
		}

		const randomBase = Math.floor(Math.random() * bases.length);

		baseballState.baseRunners[bases[randomBase]] = 0;
		outRules(2);
	}
}
