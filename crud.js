var form = document.getElementById('form1');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  if (newItem === "") {
    alert("Can't leave a notice empty!");
    return;
  }
  var li = document.createElement('h5');
  li.appendChild(document.createTextNode(newItem));
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn-danger btn';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  document.getElementById('item').value = '';
}

function removeItem(e){
  if(e.target.classList.contains("btn-danger")){
    if(confirm('Sure you want to delete ?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('h5');
  Array.from(items, function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display= 'list-item';
    } else {
      item.style.display = 'none';
    }
  });
}

