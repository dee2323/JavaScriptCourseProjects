let count = 0;
let counterElement = document.querySelector("#count-el");
let printEntries = document.querySelector("#save-el");
let entries = [];
/*********************/
counterElement.textContent = count;
/*********************/
let increment = () => {
    count++;
    counterElement.textContent = count;
}
let save = () => {

    let result = count + " - ";
    count = 0;
    counterElement.textContent = count;
    printEntries.textContent += result;

}