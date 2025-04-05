import scoring from './scoring';

export function singleRun(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[2] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
	}
}

export function walk(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
	}
}

export function sacFly(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[2] = 0;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
	}
}

export function singlePlus(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(2);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 0;
		scoring(2);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 1;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[2] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 1;
	}
}

export function doubleRun(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
		scoring(2);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[2] = 1;
		baseRunners[3] = 0;
		scoring(2);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[2] = 1;
		baseRunners[3] = 0;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[2] = 1;
		baseRunners[3] = 1;
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[2] = 1;
	}
}

export function tripleRun(baseRunners: number[]) {
	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(3);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[1] = 0;
		baseRunners[3] = 1;
		scoring(2);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 1) {
		baseRunners[2] = 0;
		scoring(2);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(2);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 1) {
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 1 && baseRunners[3] === 0) {
		baseRunners[2] = 0;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 1 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[1] = 0;
		baseRunners[3] = 1;
		scoring(1);
	}

	if (baseRunners[1] === 0 && baseRunners[2] === 0 && baseRunners[3] === 0) {
		baseRunners[3] = 1;
	}
}
