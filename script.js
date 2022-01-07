// 1) Select the section with an id of container without using querySelector.
const containerByID = document.getElementById("container");
console.log(containerByID);

// 2) Select the section with an id of container using querySelector.
const containerByQuerySelector = document.querySelector("#container");
console.log(containerByQuerySelector);

// 3) Select all of the list items with a class of "second".
const secondClassItems = document.querySelectorAll(".second");
console.log(secondClassItems);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const olThirdItem = containerByQuerySelector
  .querySelector("ol")
  .querySelector(".third");
console.log(olThirdItem);

// 5) Give the section with an id of container the text "Hello!".
containerByQuerySelector.insertAdjacentHTML("afterbegin", "<p>Hello!</p>");

// 6) Add the class main to the div with a class of footer.
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
console.log(footerDiv);

// 7) Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main");
console.log(footerDiv);

// 8) Create a new li element.
const newLiElement = document.createElement("li");

// 9) Give the li the text "four".
newLiElement.innerHTML = "four";

// 10) Append the li to the ul element.
const ulElement = containerByQuerySelector.querySelector("ul");
ulElement.append(newLiElement);
console.log(ulElement);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const olElement = document.querySelectorAll("ol");
olElement.forEach((element) => (element.style.color = "green"));

// 13) Remove the div with a class of footer.
footerDiv.remove();
