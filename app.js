const game = ()=> {
    let pScore = 0
    let cScore = 0

    //Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = ""
            })
        })

        //Computer options
        const computerOptions = ['pedra', 'papel', 'tesoura']

        options.forEach(option => {
            option.addEventListener('click', function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoise = computerOptions[computerNumber]

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoise)

                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoise}.png`
                }, 2000)

                //Animation
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })

    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner')
        
        //Cheking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'Empate'
            return
        }
        //Check for Rock
        if(playerChoice === 'pedra') {
            if(computerChoice === 'tesoura') {
                winner.textContent = 'Vitória'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Derrota'
                cScore++
                updateScore()
                return
            }
        }
        //Check for paper
        if(playerChoice === 'papel') {
            if(computerChoice === 'pedra') {
                winner.textContent = 'Vitória'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Derrota'
                cScore++
                updateScore()
                return
            }
        }
        //Check for scissors
        if(playerChoice === 'tesoura') {
            if(computerChoice === 'papel') {
                winner.textContent = 'Vitória'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Derrota'
                cScore++
                updateScore()
                return
            }
        }
    }

    //Is call all the inner function
    startGame()
    playMatch()
}

//Start the game function
game()