const clearBtn = document.querySelector("#clearBtn")
const numberBtns = document.querySelectorAll("#numbers-pad button")
const mathBtns = document.querySelectorAll("#right-frame button")
const output = document.querySelector("#output")

let currentExpression = "";
const clear = function() {
    currentExpression = "";
    output.textContent = ""
}
clearBtn.addEventListener("click",clear)

numberBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        currentExpression += btn.textContent
        output.textContent = currentExpression
    })
})

mathBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        const symbol = btn.textContent
        if (symbol === "=") {
            try {
               let expression = currentExpression.replace(/x/g, "*").replace(/÷/g, "/")
               output.textContent = eval(expression)
               currentExpression = output.textContent
            } catch {
                output.textContent = "Error"
            }
        } else {
            currentExpression += symbol
            output.textContent = currentExpression
        }
    })
})