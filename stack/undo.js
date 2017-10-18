function Stack() {
  this.length = 0;
  stacks = []
}

var stack = new Stack()

stack.push = function (button) {
  var previousColor = document.getElementById(button).style.backgroundColor
  var item = {
    button,
    previousColor
  }
  stacks[length] = item
  length++
  stack.changeColor(item)
}

stack.changeColor = function (item) {
  color = getRandomColor()
  document.getElementById(item.button).style.background = color
  stack.appendToList(item.button, color)
}

stack.undo = function () {
  if (length == 0) {
    alert('The Stack is empty')
  } else {
    length--
    var item = stacks[length]
    document.getElementById(item.button).style.background = item.previousColor
    stacks.splice(length, 1)
    stack.removeFromList()
  }
}

stack.removeFromList = function () {
  var list = document.getElementById('colors')
  list.removeChild(list.lastChild)
}

stack.appendToList = function (item, color) {
  var list = document.getElementById('colors')
  var span = document.createElement('p')
  var txt = document.createTextNode(item + ' : ' + color)
  span.style.color = color
  list.appendChild(span).appendChild(txt)
  list.scrollTop = list.scrollHeight
}

function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

