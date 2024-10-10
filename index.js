
    const textElement = document.getElementById("text");
    const increaseButton = document.getElementById("increase");
    const resetButton = document.getElementById("reset");

    let counter = 0;

    increaseButton.addEventListener("click", () => {
        counter++;
        textElement.textContent = counter;
    });

    resetButton.addEventListener("click", () => {
        counter = 0;
        textElement.textContent = counter;
    });

