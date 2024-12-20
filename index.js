const flipButton = document.getElementById("Flip");
const board = document.getElementById("Board");
Flip = () =>{
    if (board.style.transform === "rotate(180deg)") {
        board.style.transform = "rotate(0deg)";
    } else {
        board.style.transform = "rotate(180deg)";
    }
}
flipButton.addEventListener('click', Flip);
