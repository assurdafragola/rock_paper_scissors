// const { constants } = require("buffer")


$(function(){

    const choices = ["rock", "paper", "scissors"]

    const step1 = $(".game_step1")
    const options = $(".game_step1 .game_option")

    const step2 = $(".game_choice")
    const yourChoices = step2.children().first().children()
    const computerChoices = step2.children().last().children()


    // const rock = $(".game_step1 .game_option.rock")
    // const paper = $(".game_step1 .game_option.paper")
    // const scissors = $(".game_step1 .game_option.scissors")

    const hide = (el) => {
        el.addClass('hidden')
    }

    const show = (el) => {
        el.removeClass('hidden')
    }


    //step1 - choose your weapon

    let yourChoice = ""

    const chooseYourWeapon = (event) => {
        yourChoice = event.currentTarget.classList[1]
        hide(step1)
        show(step2)
        for (let i=0; i < yourChoices.length; i++) {
            if (yourChoices.eq(i).hasClass(yourChoice)) {
                show(yourChoices.eq(i))
            }
        }
    }

    options.on("click", chooseYourWeapon)


    //step2 - computer chooses weapon


    let computerChoice = ""

    const randomDraw = () => {
        computerChoice = choices[Math.floor(Math.random() * 3)]

    }


    const chooseComputerWeapon = () => {
        randomDraw()
        hide(computerChoices.eq(1))
        for (let i=0; i < computerChoices.length; i++) {
            if (computerChoices.eq(i).hasClass(computerChoice)) {
                show(computerChoices.eq(i))
            }
        }
    }







    
    //Result

    const score = $(".header_score_points")

    let points = 0
    score.text(points)

    const gameResult = '<div class="game_result"> </div>'


    const showResult = () => {
        
        step2.children().first().after(gameResult)

        if (yourChoice === computerChoice) {
            $(".game_result").html('<div class="game_result_text">CALL IT A DRAW</div> <button class="game_result_btn pointer">PLAY AGAIN</button>')
            $(".game_result").children(".game_result_text").css("font-size", "45px")
            
        } else if ((yourChoice === "paper" & computerChoice === "rock") || (yourChoice === "rock" & computerChoice === "scissors") || (yourChoice === "scissors" & computerChoice === "paper")) {
            $(".game_result").html('<div class="game_result_text">YOU WIN</div> <button class="game_result_btn pointer">PLAY AGAIN</button>')
            points += 1
            score.text(points)
        } else if ((yourChoice === "paper" & computerChoice === "scissors") || (yourChoice === "rock" & computerChoice === "paper") || (yourChoice === "scissors" & computerChoice === "rock")) {
            $(".game_result").html('<div class="game_result_text">YOU LOSE</div> <button class="game_result_btn pointer">PLAY AGAIN</button>')
            points -= 1
            score.text(points)
        }
    }


    //Play
    
    const result = () => {
        chooseComputerWeapon();
        showResult();
    }

    computerChoices.eq(1).on("click", result)


  
    //Play Again 

    

    const playAgain = () => {
        hide(step2) 
        $(".game_result").remove()
        show(computerChoices.eq(1))

        for (let i=0; i < computerChoices.length; i++) {
            if (computerChoices.eq(i).hasClass(computerChoice)) {
                hide(computerChoices.eq(i))
            }
        }
        for (let i=0; i < yourChoices.length; i++) {
            if (yourChoices.eq(i).hasClass(yourChoice)) {
                hide(yourChoices.eq(i))
            }
        }

        show(step1)
        
    }

    step2.on('click', '.game_result_btn', playAgain)


    //RULES POP UP 

    const popup = () => {
        $(".rules_content").toggleClass("active")
        $(".rules_overlay").toggleClass("active")
    }

    $(".footer_rules").on("click", popup)
    $(".rules_content_close").on("click", popup)

})