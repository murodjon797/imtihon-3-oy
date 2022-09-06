let breadTypes = ["Yupqa", "O'rtacha", "Qalin"];
let sizes = [25, 30, 35];
let toppings = ["Pomidor", "Tuzlangan bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"];
let addl = ["Achchiq", "Sosiskali"];

let elPizzaForm = document.querySelector(".js-pizza-form");
let elBreadSelect = elPizzaForm.querySelector(".js-bread-select");
let elSizeRadioWrapper = elPizzaForm.querySelector(".js-size-radio-wrapper");
let elToppingsWrapper = elPizzaForm.querySelector(".js-toppings-wrapper");
let elAddlWrapper = elPizzaForm.querySelector(".js-addl-wrapper");

let elOrderState = document.querySelector(".js-order-state");
let elOrderBread = elOrderState.querySelector(".js-order-bread");
let elOrderSize = elOrderState.querySelector(".js-order-size");
let elOrderToppings = elOrderState.querySelector(".js-order-toppings");
let elOrderAddl = elOrderState.querySelector(".js-order-addl");

for (let i = 0; i < breadTypes.length; i++) {
  let elBreadOption = document.createElement("option");
  elBreadOption.value = breadTypes[i];
  elBreadOption.textContent = breadTypes[i];

  elBreadSelect.appendChild(elBreadOption);
}

for (let i = 0; i < sizes.length; i++) {
  let elSizeLabel = document.createElement("label");
  let elSizeInput = document.createElement("input");
  let elSizeText = document.createElement("span");

  elSizeInput.classList.add("size-radio", "js-size-radio");
  elSizeInput.type = "radio";
  elSizeInput.name = "size";
  elSizeInput.value = sizes[i];
  elSizeText.classList.add("me-2");
  elSizeText.textContent = `${sizes[i]} sm`;

  elSizeInput.addEventListener("change", function() {
    elOrderSize.textContent = this.value;
  })

  elSizeLabel.append(elSizeInput, elSizeText);

  elSizeRadioWrapper.appendChild(elSizeLabel);
}

for (let i = 0; i < toppings.length; i++) {
  let elToppingsLabel = document.createElement("label");
  let elToppingsInput = document.createElement("input");
  let elToppingsSpan = document.createElement("span");

  elToppingsInput.classList.add("topping-checkbox", "js-topping-checkbox");
  elToppingsInput.name = "topping";
  elToppingsInput.type = "checkbox";
  elToppingsInput.value = toppings[i];

  elToppingsSpan.classList.add("me-2");
  elToppingsSpan.textContent = toppings[i];

  elToppingsLabel.append(elToppingsInput, elToppingsSpan);

  elToppingsWrapper.appendChild(elToppingsLabel);
}

for (let i = 0; i < addl.length; i++) {
  let elAddlLabel = document.createElement("label");
  let elAddlInput = document.createElement("input");
  let elAddlSpan = document.createElement("span");

  elAddlInput.classList.add("addl-ingredient", "js-addl-ingredient");
  elAddlInput.name = "topping";
  elAddlInput.type = "checkbox";
  elAddlInput.value = addl[i];

  elAddlSpan.classList.add("me-2");
  elAddlSpan.textContent = addl[i];

  elAddlLabel.append(elAddlInput, elAddlSpan);

  elAddlWrapper.appendChild(elAddlLabel);
}

let updateBreadType = function() {
  elOrderBread.textContent = elBreadSelect.value;
}
updateBreadType()

elBreadSelect.addEventListener("change", updateBreadType)
























































// for (let i = 0; i < breadTypes.length; i++) {
//   let elNewElBreadOption = document.createElement("option");
//   elNewElBreadOption.textContent = breadTypes[i];

//   elBreadSelect.appendChild(elNewElBreadOption);
// }

// for (let i = 0; i < sizes.length; i++) {
//   let elSizeLabel = document.createElement("label");
//   let elSizeInput = document.createElement("input");
//   let elSizeSpan = document.createElement("span");

//   elSizeInput.type = "radio";
//   elSizeInput.name = "size";
//   elSizeInput.classList.add("size-radio", "js-size-radio");
//   elSizeInput.value = sizes[i];

//   elSizeSpan.textContent = `${sizes[i]} sm`;

//   elSizeInput.addEventListener("change", function() {
//     elOrderSize.textContent = this.value;
//   })

//   elSizeLabel.appendChild(elSizeInput);
//   elSizeLabel.appendChild(elSizeSpan);

//   elSizeRadioWrapper.appendChild(elSizeLabel);
// }

// for (let i = 0; i < toppings.length; i++) {
//   let elToppingsLabel = document.createElement("label");
//   let elToppingsInput = document.createElement("input");
//   let elToppingsSpan = document.createElement("span");

//   elToppingsInput.type = "checkbox";
//   elToppingsInput.name = "toppings";
//   elToppingsInput.classList.add("topping-checkbox", "js-topping-checkbox");
//   elToppingsInput.value = toppings[i];

//   elToppingsSpan.textContent = toppings[i];

//   elToppingsLabel.appendChild(elToppingsInput);
//   elToppingsLabel.appendChild(elToppingsSpan);

//   elToppingsWrapper.appendChild(elToppingsLabel);
// }

// let updateBreadType = function() {
//   elOrderBread.textContent = elBreadSelect.value;
// }

// updateBreadType()
// elBreadSelect.addEventListener("change", updateBreadType)