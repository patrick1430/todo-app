let inputText = document.querySelector('input');
let todoContainer = document.querySelector('.list-container');
let icon = document.getElementById('icon');
let backgroundImg = document.getElementById('background');
let todoItemsLeft = document.querySelector('.items-left');
let filterButtons = document.querySelectorAll('.action-btns p');
let clearCompletedButton = document.querySelector('.clear-completed')



function addTodo(){

    let li = document.createElement('li');
    li.innerHTML = inputText.value;
    todoContainer.appendChild(li);
    li.draggable='true';

    let span = document.createElement('span');
    span.innerHTML =  '\u00d7';
    li.appendChild(span);
    inputText.value = '';

}


function increament(){
 let value = todoItemsLeft.innerHTML;
     value++;
    todoItemsLeft.innerHTML  = value;
     
   
}

function decrement(){
    let value = todoItemsLeft.innerHTML;
    value--;
    todoItemsLeft.innerHTML  = value;
}


inputText.addEventListener('keypress', function(event){      
  if (inputText.value ==''){ 
    preventDefault();
        
    } 

     else if (event.key ==='Enter'){
   
        addTodo();
        increament();
    }


     
})

todoContainer.addEventListener('click',function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }

    else if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
     decrement();
     
    }

})





function darkMode(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src ='images/icon-sun.svg';
        backgroundImg.src = 'images/bg-desktop-dark.jpg'

    }
    else{
     icon.src = 'images/icon-moon.svg'
     backgroundImg.src = 'images/bg-desktop-light.jpg'
    }
}






let actionContainer = document.querySelectorAll('span p')

actionContainer.forEach(action => {
    action.addEventListener('click',()=> {
        document.querySelector('.active')?.classList.remove('active')
       action.classList.add('active');
       })
})




function filterTodos(filter) {
    let todoItems = todoContainer.querySelectorAll('li');
    todoItems.forEach(function(item) {
      switch (filter) {
        case 'completed':
          if (item.classList.contains('checked')) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
          break;
        case 'active':
          if (item.classList.contains('checked')) {
            item.style.display = 'none';
          } else {
            item.style.display = 'block';
          }
          break;
        default:
          item.style.display = 'block';
          break;
      }
    });
  }
  
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      let filter = button.getAttribute('data-filter');
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      filterTodos(filter);
    });
  });
  
  clearCompletedButton.addEventListener('click', function() {
    let completedItems = todoContainer.querySelectorAll('.checked');
    completedItems.forEach(function(item) {
      item.remove();
      decrement();
    });
  });