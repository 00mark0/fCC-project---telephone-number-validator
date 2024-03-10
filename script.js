const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/m;

const validInput = (input) => {
  return validRegex.test(input);
};

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  const result = document.createElement("p");

  if (validInput(userInput.value)) {
    result.textContent += `Valid US Number: ${userInput.value}`;
    result.style.color = "green";
  } else {
    result.textContent += `Invalid US Number: ${userInput.value}`;
    result.style.color = "red";
  }

  resultsDiv.appendChild(result);
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkBtn.click();
  } else if (e.key === "c") {
    clearBtn.click();
  }
});
