import Sudoku from "../static/sudoku.js";
import fc from "fast-check";
import property from "./property.js";

//making random input board that represents user
let input = Math.floor(Math.random() * 10) + 1;
function repeatStringNumTimes(str, num) {
    return str;
}
let random_board = repeatStringNumTimes(`${input}`, 81);

//storing values
const board_example = [
[
    random_board,
    `6853291749714853262347618593625749815496187327182934658
    23946517197852643456137298`
],
[
    random_board,
    `6194725832439856175873169241582473699265314787346981528
    91754236365829741472163895`
],
[
    random_board,
    `7125836946397142588452691735214369873679284154981753261
    84697532253841769976352841`
]
];

const completed = [
    [
        `6853291749714853262347618593625749815496187327182934658
        23946517197852643456137298`,
        `6853291749714853262347618593625749815496187327182934658
        23946517197852643456137298`
    ],
    [
        `6194725832439856175873169241582473699265314787346981528
        91754236365829741472163895`,
        `6194725832439856175873169241582473699265314787346981528
        91754236365829741472163895`
    ],
    [
        `7125836946397142588452691735214369873679284154981753261
        84697532253841769976352841`,
        `7125836946397142588452691735214369873679284154981753261
        84697532253841769976352841`
    ]
    ];

//feed an incorrect/random boardfill to compare against
//solution
describe("Check board finished", function() {
    it("Examples: correct tiles come out true", function(){
        completed.forEach(function([input, solution]) {
            const check_tile = Sudoku.check_correct(input);
            if (input!== solution) {
                throw `Expected ${input} to match ${solution}.`;
            }
        });
    });
    property(
        "Correct tiles come out true",
        [fc.object(fc.string)],
        function ([board, solution]) {
            board_example.forEach(function([input, solution]) {
                const check_tile = Sudoku.check_correct(input);
                if (input!== solution) {
                    throw `Expected ${input} to match ${solution}.`;
                }
            });
        }
    );
});

describe("Check tile is correct", function() {
    it("Examples: correct tiles come out true", function(){
        board_example.forEach(function([input, solution]) {
            const check_tile = Sudoku.check_correct(input);
            if (input!== solution) {
                throw `Expected ${input} to match ${solution}.`;
            }
        });
    });
    property(
        "Correct tiles come out true",
        [fc.object(fc.string)],
        function ([board, solution]) {
            board_example.forEach(function([input, solution]) {
                const check_tile = Sudoku.check_correct(input);
                if (input!== solution) {
                    throw `Expected ${input} to match ${solution}.`;
                }
            });
        }
    );
});
