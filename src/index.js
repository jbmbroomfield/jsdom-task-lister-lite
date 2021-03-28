document.addEventListener("DOMContentLoaded", (event) => {
  
});

const submit = document.querySelector('input#submit')
const textInput = document.querySelector('input#new-task-description')
const priorityInput = document.getElementById('priority')
const ul = document.querySelector('#tasks')
const h1 = document.querySelector('h1')
let i = 0

submit.addEventListener('click', function(event) {
  h1.innerText = 'HI'
  const element = document.createElement('li');
  element.innerText = textInput.value + ' ';
  textInput.value = '';
  element.className = `priority-${priority.value}`
  const deleteButton = document.createElement('button')
  const t = document.createTextNode('X')
  deleteButton.appendChild(t)
  deleteButton.id = i
  deleteButton.onclick = function() {
    ul.removeChild(element);
  }
  element.appendChild(deleteButton)
  
  let otherNode;
  for (const child of ul.children) {
    switch(element.className) {
      case 'priority-high':
        if (['priority-medium','priority-low'].includes(child.className)) {
          otherNode = child
        }
        break
      case 'priority-medium':
        if (child.className === 'priority-low') {
          otherNode = child
        }
        break
      }
    if (otherNode) {
      break
    }
  }
  if (otherNode) {
    ul.insertBefore(element,otherNode)
  } else {
    ul.appendChild(element)
  }
  event.preventDefault();
  i++
})