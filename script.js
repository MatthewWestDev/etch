const canvas = document.querySelector(".canvas");

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    canvas.textContent = "";
    drawPixels();
});

    function drawPixels () {
        pixelNum = prompt("Enter a number less than 100");

        if (pixelNum <= 100 && pixelNum >= 1) {
        
        for(let i = 0; i < (pixelNum * pixelNum); i++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.flexBasis = (100 / pixelNum) + "%";
            pixel.style.aspectRatio = "1/1";
            canvas.appendChild(pixel);
            resetBtn.textContent = "Reset";

            pixel.addEventListener("mouseover", () => {
        pixel.style.opacity = "0.2"
    });

            };
        } else if (pixelNum > 100 || pixelNum < 1) {
            pixelNum = 0;
            resetBtn.textContent = "Start";
            alert("You've entered an invalid number");
        };
    };



    