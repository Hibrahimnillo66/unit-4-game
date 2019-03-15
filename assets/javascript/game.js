$(document).ready(function() {

    // GLOBAL VARIABLES


    // Crystal Variables

    var Crystal = {
        stones: {
            name:"Crystal 1",
            value: 0
        },
        diamond: {
            name: "Crystal 2",
            value: 0
        },
        triangle: {
            name: "Crystal 3",
            value: 0
        },
        ruby: {
            name: "Crystal 4",
            value: 0
        }

    };

    //SCORES

    var currentScore = 0;
    var targetScore = 0;

    // Wins and Losses

    var winCount = 0;
    var loseCount = 0;

    //FUNCTIONS
    //====================================================================================

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //^^ this function generate random number between two numbers.

    var startGame = function(){

        currentScore = 0;

        targetScore = getRandom(19,120);

        Crystal.diamond.value  = getRandom(1,12);
        Crystal.ruby.value     = getRandom(1,12);
        Crystal.stones.value   = getRandom(1,12);
        Crystal.triangle.value = getRandom(1,12);

        $("#targetNumber").html(targetScore);
        $("#myScore").html(currentScore);
        // This functions generates all random numbers for crystals and Target Number

    }
    // This function adds up the values of the crystals, taking as argument the Crystal object
    // so we can specify which value to add.

    var addValues = function(Crystal) {

        currentScore = currentScore + Crystal.value
        $("#myScore").html(currentScore);

        checkWin();
        
    }

    //Function to check if we have same score and win.
    var checkWin = function() {

        if(currentScore === targetScore){
            
            winCount++;
            $("#wins").html(winCount);
            alert("You Win");
            
            
        }
        else if(currentScore > targetScore){
            
            loseCount++;
            $("#losses").html(loseCount);
            alert("You Lose");
            
        }
    }


    //MAIN PROCESS
    //====================================================================================

    startGame();

    $("#crystal1").click(function(){
        addValues(Crystal.stones);
        
    })

    $("#crystal2").click(function(){
       addValues(Crystal.diamond);
    })

    $("#crystal3").click(function(){
        addValues(Crystal.triangle);
    })

    $("#crystal4").click(function(){
        addValues(Crystal.ruby);
    })

    $(".btn").click(function(){
        startGame();
    })
})