import { baseballState } from './state.svelte';

export default function scoring(runs: number) {
	if (baseballState.turn === 0) {
		baseballState.homeScore += runs;
	}

	if (baseballState.turn === 1) {
		baseballState.awayScore += runs;
	}
}
