document.addEventListener('DOMContentLoaded', () => {
    const shoppingForm = document.getElementById('shoppingForm');
    const itemInput = document.getElementById('itemInput');
    const listContainer = document.getElementById('listContainer');
    const clearButton = document.getElementById('clearButton');
    const emptyListMessage = document.getElementById('emptyListMessage');
  
    let shoppingList = [];
  
    function updateList() {
      listContainer.innerHTML = ''; // Clear the list
      if (shoppingList.length === 0) {
        emptyListMessage.style.display = 'block'; // Show the "empty list" message
      } else {
        emptyListMessage.style.display = 'none'; // Hide the "empty list" message
        shoppingList.forEach((item, index) => {
          const li = document.createElement('li');
          li.textContent = item.name;
  
          if (item.purchased) {
            li.classList.add('purchased');
          }
  
          li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            updateList();
          });
  
          listContainer.appendChild(li);
        });
      }
    }
  
    shoppingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const itemName = itemInput.value.trim();
      if (itemName) {
        shoppingList.push({ name: itemName, purchased: false });
        itemInput.value = '';
        updateList();
      }
    });
  
    clearButton.addEventListener('click', () => {
      shoppingList = [];
      updateList();
    });
  
    updateList();
  });
  