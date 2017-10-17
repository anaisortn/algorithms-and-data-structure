function Stack() {
  // items in the Stack. length var = length of array
  this.length = 0;
  stack = []
}

Stack.prototype.push = function (button) {
  var previousColor = document.getElementById(button).style.backgroundColor
  var item = {
    button,
    previousColor
  }
  stack[length] = item
  length++
  // console.log(stack, length, item)
  Stack.prototype.changeColor(item)
}

Stack.prototype.changeColor = function (item) {
  // console.log('changeColor:', item)
  color = getRandomColor()
  document.getElementById(item.button).style.background = color
}

Stack.prototype.undo = function () {
  if (length == 0) {
    alert('The Stack is empty')
  } else {
    length--    
    var item = stack[length]
    document.getElementById(item.button).style.background = item.previousColor
    console.log(stack)
    stack.splice(length, 1)
    console.log('deleted : ', item, 'length : ', length, 'stack : ', stack)
  }
}

function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
