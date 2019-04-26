const NUMBER_OF_GAMES_IN_SET = 2;
const TOTAL_SETS = 2;
const PINS_COUNT = 10;
const SPARE_BONUS_POINTS = 5;
const STRIKE_BONUS_POINTS = 10;
const MAXIMUM_TURNS_IN_FINAL_SET = 3;
const STRIKE_SYMBOL = 'X';
const SPARE_SYMBOL = '/';

var getBowlingSystem = function(playersCount) {
	var currentSet = 0;
	var currentPlayer = 0;
	var gameEnd = false;
	var playersData = [];

	for (let i = 0; i < playersCount; i++) {
		playersData[i] = {
			setsPlayed: 0,
			total: 0,
			setScore: [],
			lastSetTurns: 0
		};
	}

	var getPlayerScoreData = () => {
		return playersData[currentPlayer];
	};

	var handleLastSet = score => {
		var playerScoreData = getPlayerScoreData();

		playerScoreData.setScore.push(score);
		playerScoreData.lastSetTurns++;

		if (MAXIMUM_TURNS_IN_FINAL_SET <= playerScoreData.lastSetTurns) {
			let i = 0;

			while (
				playerScoreData.setScore[i] === STRIKE_SYMBOL &&
				i < playerScoreData.setScore.length
			) {
				playerScoreData.total += PINS_COUNT + STRIKE_BONUS_POINTS;
				i++;
			}

			playerScoreData.setsPlayed++;
			currentPlayer++;
		}
	};

	var handleStrike = () => {
		var playerScoreData = getPlayerScoreData();

		if (currentSet < TOTAL_SETS - 1) {
			playerScoreData.total += PINS_COUNT + STRIKE_BONUS_POINTS;
			playerScoreData.setsPlayed++;
			playerScoreData.setScore.length = 0;
			currentPlayer++;
		} else {
			handleLastSet(playerScoreData, STRIKE_SYMBOL);
		}
	};

	var handleSpare = () => {
		var playerScoreData = getPlayerScoreData();

		if (currentSet < TOTAL_SETS - 1) {
			playerScoreData.total +=
				playerScoreData.setScore[0] +
				(PINS_COUNT - playerScoreData.setScore[0]) +
				SPARE_BONUS_POINTS;
			playerScoreData.setsPlayed++;
			playerScoreData.setScore.length = 0;
			currentPlayer++;
		} else {
			handleLastSet(SPARE_SYMBOL);
		}
	};

	var handleRegularScore = score => {
		var playerScoreData = getPlayerScoreData();
		playerScoreData.setScore.push(score);

		if (currentSet < TOTAL_SETS - 1) {
			if (playerScoreData.setScore.length === NUMBER_OF_GAMES_IN_SET) {
				var totalScoreInTheSet = playerScoreData.setScore.reduce(
					(totalScore, scoreInSet) => {
						totalScore += scoreInSet;
						return totalScore;
					},
					0
				);

				playerScoreData.total += totalScoreInTheSet;
				playerScoreData.setsPlayed++;
				playerScoreData.setScore.length = 0;
				currentPlayer++;
			}
		} else {
			handleLastSet(score);
		}
	};

	var findNextPlayer = () => {
		let i = 0;

		if (currentPlayer === playersCount) {
			currentPlayer = 0;
		}

		while (i < playersCount) {
			if (playersData[currentPlayer].setsPlayed < TOTAL_SETS) {
				break;
			}

			if (currentPlayer === playersCount) {
				currentPlayer = 0;
			}

			i++;
		}

		if (i === playersCount) {
			gameEnd = true;
		}
	};

	const addScore = score => {
		if (gameEnd) {
			console.log('Game already ended');
			return 'Game already ended';
		}

		switch (score) {
			case STRIKE_SYMBOL:
				handleStrike();
				break;

			case SPARE_SYMBOL:
				handleSpare();
				break;

			default:
				handleRegularScore(score);
		}

		findNextPlayer();

		console.log(playersData);
	};

	return {
		addScore
		// getWinner
	};
};

var bowlingSystem = getBowlingSystem(2);
bowlingSystem.addScore('X');
// bowlingSystem.addScore('X');
// bowlingSystem.addScore('X');
bowlingSystem.addScore(5);
bowlingSystem.addScore('/');
// bowlingSystem.addScore(8);
// bowlingSystem.addScore(1);
// bowlingSystem.addScore(2);

bowlingSystem.addScore(5);
bowlingSystem.addScore('/');
bowlingSystem.addScore(5);
bowlingSystem.addScore('/');
