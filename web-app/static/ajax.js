const Ajax = Object.create(null);
//helper file that allows communication between client and server
//get = request resource/link
//post = give data to be processed

const json = (response) => response.json();
const fetch = window.fetch;

Ajax.query = function (request_object) {
    const body = JSON.stringify(request_object);

    return fetch("/", {
        "method": "POST",
        "body": body,
        "headers": {
            "Content-Type": "application/json"
        }
    }).then(json);

};


/*const playerArray = [
    {username: "Player1", time: "00:01:30", id: "player1"}
];

function compare(a,b) { return b.time - a.time };

playerArray.sort(compare);*/

export default Object.freeze(Ajax);