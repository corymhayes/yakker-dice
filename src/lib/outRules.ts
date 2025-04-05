import { baseballState } from './state.svelte';

export default function outRules(outs: number) {
	if (baseballState.outs > 2) {
		if (baseballState.turn === 0) {
			baseballState.turn = 1;
		} else {
			baseballState.turn = 0;
		}

		baseballState.outs = 0;
		baseballState.baseRunners = [0, 0, 0, 0];
	} else {
		baseballState.outs += outs;
	}
}
