import Sudoku from "./sudoku.js";
import Ajax from "./ajax.js";

//stored sudoku game: auto fill, solution
const easy = [
    `6------7------5-2------1---362----81--96-----71--9-4-5-
    2---651---78----345-------`,
    `6853291749714853262347618593625749815496187327182934658
    23946517197852643456137298`
];
const medium = [
    `--9-------4----6-758-31----15--4-36-------4-8----9-----
    --75----3-------1--2--3--`,
    `6194725832439856175873169241582473699265314787346981528
    91754236365829741472163895`
];
const hard = [
    `-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-
    4------2-3-----9-7----8--`,
    `7125836946397142588452691735214369873679284154981753261
    84697532253841769976352841`
];

//variables
var selectedNum;
var selectedTile;
var disableSelect;
var boardfill;

//stopwatch variables
var seconds = 0;
var minutes = 0;
var hours = 0;
//vars to hold display value
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;
//var for setInrerval() function
var interval = null;

//get id values from html
const numbers = document.getElementById("numbers");
const start_btn = document.getElementById("start-btn");
const giveup_btn = document.getElementById("giveup-btn");
const diff1 = document.getElementById("diff-1");
const diff2 = document.getElementById("diff-2");
const diff3 = document.getElementById("diff-3");
const display = document.getElementById("display");
const board = document.getElementById("board");
const rankings = document.getElementById("rankings");
const leader_board = document.getElementById("leader-board");
const send_btn = document.getElementById("send-btn");
const lb_item_easy = document.getElementById("lb_item easy");
const lb_item_medium = document.getElementById("lb_item medium");
const lb_item_hard = document.getElementById("lb_item hard");
const send = document.getElementById("send");

//summary functions
function qs(selector) {
    return document.querySelector(selector);
}
function qsa(selector) {
    return document.querySelectorAll(selector);
}

//how you move from tab to tab on the leadearboard
var tabs = document.querySelectorAll(".lboard_tabs ul li");
var easy_tab = document.querySelector(".easy");
var medium_tab = document.querySelector(".medium");
var hard_tab = document.querySelector(".hard");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){

        var currenttab = tab.getAttribute("data-li");
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        });

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display = "none";
        });

        if(currenttab == "easy"){
            easy_tab.style.display = "block";
        }
        else if(currenttab == "medium"){
            medium_tab.style.display = "block";
        }
        else{
            hard_tab.style.display = "block";
        }
    });
});

var easyboard = [];
var mediumboard = [];
var hardboard = [];

update_board = function (board_ul, list) {
    list.forEach
    const li = docomunt.createElement("li");
    var time = display.textContent;
    li.textContent = (`${username}, ${time}`);
}

function record() {
    //notes unsername and time taken then sorts in descending order
    //put time here before reset
    seconds
    minutes
    hours
       if(currenttab == "easy"){
        update_board(lb_item_easy, easyboard);
        lb_item_easy.sort();
    }
    else if(currenttab == "medium"){
        lb_item_medium.append(li);
        lb_item_medium.sort();
    }
    else{
        lb_item_hard.append(li);
        lb_item_hard.sort();
    }
}

//update and request
//here display
//1 update incrementally
//2 clear and redraw board each time : clear, draw(add to java based on array)


//function that says when this is called, call this function
start_btn.onclick = function() {
    console.log("game start");
    start_game();
    disableSelect = false;
    //reset stopwatch
    reset_stopwatch();
    generate_board(board);
    //start stopwatch
    //calls function every 100ms
    interval = window.setInterval(start_stopwatch, 1000);
    number_containers();
};

giveup_btn.onclick = function() {
    console.log("give up");
    end_game();
    console.log("end game");
};

function number_containers() {
    for (let i = 0; i < 9; i++) {
        numbers.children[i].addEventListener("click", function() {
            if (!disableSelect) {
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                    selectedNum = null;
                }
                else {
                    for (let i = 0; i < 9; i++) {
                        numbers.children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedNum = this;
                    update_move();
                }
            }
        });
    }
}

function start_game() {
    // choose board difficulty
    if (diff1.checked) {
        boardfill = easy[0];
    }
    else if (diff2.checked) {
        boardfill = medium[0];
    }
    else {
        boardfill = hard[0];
    }
}

function start_stopwatch() {
    //defining time incrementations
    seconds++;
    //defines when should move on to minutes
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if(minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }
    ////define when to add trailing 0, when only one digit
    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if(hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    //display on website
    //innerHTML gets/sets the HTML contained within the element
    display.
    textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function reset_stopwatch() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = "00:00:00";
}

function generate_board(board) {
    //Clear prevous boards
    clear_previous();
    let idCount = 0;
    // create 81 tiles
    for (let i = 0; i < 81; i++) {
        let tile = document.createElement("p");
        // if tile not blank
        if (boardfill.charAt(i) != "-") {
            tile.textContent = boardfill.charAt(i);
            tile.style.color = "green";
        } else {
            // add event listener to tile
            tile.addEventListener("click", function() {
                if(!disableSelect) {
                    if (tile.classList.contains("selected")) {
                        tile.classList.remove("selected");
                        selectedTile = null;
                    } else {
                        for (let i = 0; i < 81; i ++) {
                            qsa(".tile")[i].classList.remove("selected");
                        }
                        tile.classList.add("selected");
                        selectedTile = tile;
                        update_move()
                    }
                }
            })
        }
        tile.id = idCount;
        //Increment for next tile
        idCount ++;
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 & tile.id < 54)) {
            tile.classList.add("bottomblockOutline");
        }
        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
            tile.classList.add("rightblockOutline");
        }
        board.appendChild(tile);
    }
}

function clear_previous() {
   // rankings.style.visibility = "hidden";
    //Acess all tiles
    let tiles = qsa(".tile");
    //Remove each tile
    for (let i = 0; i<tiles.length; i++) {
        tiles[i].remove();
    }
    //Deselect any numbers
    for (let i = 0; i <numbers.children.length; i++) {
        numbers.children[i].classList.remove("selected");
    }
    //clear selected variables
    selectedNum = null;
    selectedTile = null;
}

function update_move() {
    //when tile & number selected
    if (selectedTile && selectedNum) {
        selectedTile.textContent = selectedNum.textContent;
        //if number matches corresponding number in solution key
        if (Sudoku.check_correct(selectedTile)) {
            //deselect
            selectedTile.classList.remove("selected");
            selectedNum.classList.remove("selected");
            //Clear selected values
            selectedNum = null;
            selectedTile = null;
            //check if board completed correctly
            if (Sudoku.check_done()) {
                end_game();
                leader_board.classList.remove("hidden");
                send.classList.remove("hidden");
                record();
            }
            // if number does not match solution
        } else {
            //disable selecting new numbers for one second
            disableSelect = true;
            selectedTile.classList.add("incorrect");
            setTimeout( function() {
                disableSelect = false;
                selectedTile.classList.remove("incorrect");
                selectedTile.classList.remove("selected");
                selectedNum.classList.remove("selected");
                //Clear tiles and selected variables
                selectedTile.textContent = "";
                selectedTile = null;
                selectedNum = null;
            }, 1000);
        }
    }
}

function end_game() {
    //disable moves and stop timer
    disableSelect = true;
    console.log("disable select");
    window.clearInterval(interval);
    //show_solution()
}

/*document.addEventListener("DOMContentLoaded", () => {
    let elements = []
    let container = document.querySelector("#container")
    // Add each row to the array
    container.querySelectorAll(".row").forEach(el => elements.push(el));
    // Clear the container
    container.innerHTML = "";
    // Sort the array from highest to lowest
    elements.sort((a, b) => b.querySelector(".score").textContent - a.
    querySelector(".score").textContent);
    // Put the elements back into the container
    elements.forEach(e => container.appendChild(e));
  })*/

/*function hover() {
    //highlitght row, block & column when hover over a tile
    // if ((tile.id >= 0 && tile.id < 9) || (tile.id > 44 & tile.id < 54)) {

}

function show_solution() {
    //displays solution with differing tiles with correct tiles highlighted
    if (diff1.checked) {
        boardfill = easy[1];}
    else if (diff2.checked) {
        boardfill = medium[1];}
    if (diff3.checked) {
        boardfill = hard[1];}
    //if tile index = solutin index
    console.log("checked")
    if (boardfill.charAt(tile.id) === tile.textContent) {

    } else {

    }
    console.log("show solution");
}*/

/*send_btn.onlick = function() {
    console.log(composition.value);
    const username = composition.value;
    const my_new_message = cloneTemplate("my-message");
    my_new_message.querySelector(
        "[name=message]"
    ).textContent = my_message_text;
    messages.appendChild(my_new_message);

    Ajax.query({
        "username": "Palyer1",
        "timetaken": "00:01:30"
    }).then(function (response_object) {

        const their_new_message = cloneTemplate("their-message");
        their_new_message.querySelector(
            "[name=message]"
        ).textContent = response_object.response;
        messages.appendChild(their_new_message);

    });
    composition.value = "";
};

composition.onkeydown = function (event) {
    if (event.key !== "Enter" || event.shiftKey) {
        return; // Do nothing special if it's not an enter key.
    }
    send_button.onclick();
};*/
