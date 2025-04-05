import { baseballState } from './state.svelte';
import scoring from './scoring';

export default function homerun() {
	const bases: number[] = [];

	for (let i = 0; i < baseballState.baseRunners.length; i++) {
		if (baseballState.baseRunners[i] === 1) {
			bases.push(i);
		}
	}

	if (bases.length === 0) {
		scoring(1);
	} else {
		scoring(bases.length + 1);
		baseballState.baseRunners = [0, 0, 0, 0];
	}
}
