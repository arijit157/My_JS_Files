let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                if (isNaN(eval(string))) {
                    alert("ERROR: Cannot divide 0 by 0 ❌");
                    string = "";
                    document.querySelector("input").value = string;
                }
                else {
                    string = eval(string);
                    document.querySelector("input").value = string;
                }
            } catch (error) {
                alert("Please enter valid inputs");
                string = "";
                document.querySelector("input").value = string;
            }
        }
        else if (e.target.innerHTML === "AC") {
            string = "";
            document.querySelector("input").value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});