document.getElementById("textinputid").addEventListener("input", function(event) {

    const buttonElement = document.getElementById("buttonid");
    const userInput = event.target.value;

    const isCorrect = userInput.toLowerCase() === "electric mucus";

    buttonElement.style.backgroundColor = userInput.toLowerCase() === "electric mucus" ? "green": userInput;
    
    buttonElement.disabled = !isCorrect;

})



