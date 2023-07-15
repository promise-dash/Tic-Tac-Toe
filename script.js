const arr = Array(9).fill(null);

let currentPlayer = '❌';
let playGame = true;

const result = document.querySelector(".result");

const checkWinner = () => {
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
      ){
        result.innerHTML = `Winner is ${currentPlayer}`;
        playGame = false;
      }
    else if(!arr.some((e) => e === null)){
        result.innerHTML = "Its a Draw!";
    }
}

document.querySelector(".board").addEventListener("click", (event) => {
    if(playGame){
        let id = event.target.id;
        if(arr[id] === null){
            arr[id] = currentPlayer;
            document.getElementById(`${id}`).innerHTML = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === '❌' ? '⭕' : '❌';
        }
    }
});


