const listItem = ["acqua", "pane", "gnocchi", "pesche", "origano","olio", "tonno", "pasta", "mele", "pomodori"];
let x = 0;

while (x < listItem.length) {
    const shoppingList = document.querySelector("#shoppingList");
    const listItemElement = document.createElement("p");
    listItemElement.textContent = listItem[x];
    shoppingList.appendChild(listItemElement); 
    x++;
}
