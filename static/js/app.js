const commonButtons = document.querySelectorAll(".common-button");
const countedNumber = document.querySelector(".counted-number");
let number = 0;
countedNumber.textContent = number;
commonButtons.forEach(mainFunctionality);
function mainFunctionality(button, index, arr)
{
    button.addEventListener("click", () =>{
        switch(index)
        {
            case 0:
                number--;
                break;
            case 1:
                if(number == 0)
                {
                }
                else
                {
                    number = 0;
                }
                break;
            case 2:
                number++;
                break;
        }
        countedNumber.textContent = number;
    });
}