const Sudoku = Object.create(null);

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

var boardfill;
const diff1 = document.getElementById("diff-1");
const diff2 = document.getElementById("diff-2");
const diff3 = document.getElementById("diff-3");

//summary functions
function qs(selector) {
    return document.querySelector(selector);
}
function qsa(selector) {
    return document.querySelectorAll(selector);
}

Sudoku.check_done = function() {
    //returns array of every tile in board
    let tiles = qsa(".tile");
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].textContent === "") return false;
    }
    return true;
    // display you won statement
}

Sudoku.check_correct = function(tile) {
    //set solution based on difficulty array
    if (diff1.checked) {
        boardfill = easy[1];}
    else if (diff2.checked) {
        boardfill = medium[1];}
    if (diff3.checked) {
        boardfill = hard[1];}
    //if tile index = solution index
    console.log("checked")
    if (boardfill.charAt(tile.id) === tile.textContent) return true;
    else return false
}

export default Object.freeze(Sudoku);