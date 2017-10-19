function Stack() {
  // items in the Stack. length var = length of array
  this.length = 0;
  stack = []
}

var initStack = new Stack()

initStack.push = function () {
  var item = window.prompt('Please enter a number or operator')
  if (!isNaN(item)) {
    item = parseInt(item)
  }
  stack[length] = item
  length++
  var button = document.createElement('button')
  var txt = document.createTextNode(item)
  var parent = document.getElementById('stack')
  button.setAttribute('class', 'stackElement')
  button.appendChild(txt)
  // console.log(button)
  parent.appendChild(button)
}

initStack.pushToStack = function (item, i) {
  var button = document.createElement('button')
  var txt = document.createTextNode(item)
  button.appendChild(txt)
  button.setAttribute('class', 'stackElement')
  var parent = document.getElementById('stack')
  parent.insertBefore(button, parent.firstChild)
  // console.log(stack)
  stack.splice(i - 2, 1)
  console.log('ITEM', item)
  stack[0] = item
  console.log(stack)
  initStack.calculator()

}

initStack.pop = function () {
  if (length == 0) {
    alert('The Stack is empty')
  } else {
    var parent = document.getElementById('stack')
    parent.removeChild(parent.lastChild)
    length--
    var deletedData = stack[length]
    delete stack[length]
    return deletedData
  }
}

initStack.peek = function () {
  tempLength = length - 1
  // console.log(stack[tempLength])
}

initStack.clear = function () {
  length = 0
  stack = []
  var parent = document.getElementById('stack')
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild)
  }
}

// initStack.enumerate = function () {
//   for (var i = length - 1; i >= 0; i--) {
//     console.log(stack[i])
//   }
// }

initStack.calculator = function () {
  // Loop through stack, enumerate and return final result
  // console.log(item)
  for (var i = 0; i < length; i++) {
    console.log(stack[i])
    var parent = document.getElementById('stack')
    parent.removeChild(parent.childNodes[0])
    if (!isNaN(stack[i])) {
      console.log('is Number', stack[i])
    } else if (isNaN(stack[i])) {
      // initStack.push(item)
      // } else {
      // var firstNumber = initStack.pop()
      // var secondNumber = initStack.pop()
      var firstNumber = stack[i - 1]
      var secondNumber = stack[i - 2]
      length = length - 3
      console.log('is not a Number', stack[i], firstNumber, secondNumber)

      switch (stack[i]) {
        case '+':
          initStack.pushToStack(+secondNumber + +firstNumber, [i])
          console.log(stack)
          break;
        case '-':
          initStack.pushToStack(secondNumber - firstNumber, [i])
          console.log(stack)
          break;
        case '*':
          initStack.pushToStack(secondNumber * firstNumber, [i])
          console.log(stack)
          break;
        case '/':
          initStack.pushToStack(secondNumber / firstNumber, [i])
          console.log(stack)
          break;
        case '%':
          initStack.pushToStack(firstNumber % secondNumber, [i])
          console.log(stack)
          break;
        // default:
        //   alert('Unrecognized element : ', stack[i])
      }
    }
  }
}
