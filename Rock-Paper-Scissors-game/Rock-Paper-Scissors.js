let score = JSON.parse(localStorage.getItem('score'));
        if (score === null){
            score = {
                Wins: 0,
                Losses: 0,
                Ties: 0
            }
        };

        updateScore();
        

        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }

        function resetScore() {
            score.Wins = 0;
            score.Losses = 0;
            score.Ties = 0;

            localStorage.removeItem('score');  // Clear from localStorage
            updateScore();                     // ✅ Immediately update the displayed score
            document.querySelector('.js-result').innerHTML = '';
            document.querySelector('.js-choice').innerHTML = '';  // Clear result display
        }


        let computerMove = '';
        function pickComputerMove(){
            let randomNumber = Math.floor(Math.random()*30 +1);
            let result = '';
            if (randomNumber <= 10 ){
                computerMove='✊'
            } else if(randomNumber <= 20){
                computerMove = '✋';
            } else {
                computerMove = '✌️';
            }
            return computerMove;
        }

        function playGame(userMove){
            if (userMove === '✊'){
                if (computerMove == '✊'){
                    result = 'Match Tie!';
                } else if (computerMove == '✋'){
                    result = 'You Lose!';
                } else if (computerMove == '✌️'){
                    result = 'You Win!';
                }
            } else if (userMove === '✋'){
                if (computerMove == '✊'){
                    result = 'You Win!';
                } else if (computerMove == '✋'){
                    result = 'Match Tie!';
                } else if (computerMove == '✌️'){
                    result = 'You Lose!';
                }
            } else if (userMove === '✌️'){
                if (computerMove == '✊'){
                    result = 'You Lose!';
                } else if (computerMove == '✋'){
                    result = 'You Win!';
                } else if (computerMove == '✌️'){
                    result = 'Match Tie!';
                }
            }

            if (result === 'You Win!'){
                score.Wins += 1;
            } else if (result === 'You Lose!'){
                score.Losses += 1;
            } else if (result === 'Match Tie!'){
                score.Ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();
            document.querySelector('.js-result').innerHTML = `${result}`;
            document.querySelector('.js-choice').innerHTML = `You ${userMove} - ${computerMove} Computer`;
        }