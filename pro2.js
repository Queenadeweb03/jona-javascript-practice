const scoreEl = document.getElementById('score-0');
const scoreEl2 = document.getElementById('score-1');
const playerEl = document.querySelector('.player-0');
const playerEl1 = document.querySelector('.player-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const currentEl0 = document.getElementById('current-0');
const currentEl1 = document.getElementById('current-1');

let scores, currentScore, activePlayer, player;
//starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreEl.textContent = 0;
  scoreEl2.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add('hidden');

  playerEl.classList.remove('player-winner');
  playerEl1.classList.remove('player-winner');
  playerEl.classList.add('player-active');
  playerEl1.classList.remove('player-active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  playerEl.classList.toggle('player-active');
  playerEl1.classList.toggle('player-active');
};

//rolling dice funtionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      /* document.getElementById(`current-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerEl.classList.toggle('player-active');
    playerEl1.classList.toggle('player-active');*/

      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //3. finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove('player-active');
    } else {
      //4. switch to next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
