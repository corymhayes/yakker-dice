export const baseballState = $state({
	outs: 0,
	homeScore: 0,
	awayScore: 0,
	turn: 0,
	baseRunners: [0, 0, 0, 0], // [ home, first, second, third, ]
	history: [[0, 0, 0, 0]]
});
