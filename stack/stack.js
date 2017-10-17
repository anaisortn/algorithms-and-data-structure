function Stack() {
  // items in the Stack. length var = length of array
  this.length = 0;
  stack = []
}

Stack.prototype.push = function () {
  var item = window.prompt('Please enter a number or operator')
  stack[length] = item
  length++
  console.log(stack, length)
}

Stack.prototype.pushToStack = function (item, i) {
  stack[i] = item
  // spot = i-2
  stack.splice(i - 2, 2)
  console.log(stack)
  // stack[0] = item
  // length++
  // console.log(stack, length)
}

Stack.prototype.pop = function () {
  if (length == 0) {
    alert('The Stack is empty')
  } else {
    length--
    var deletedData = stack[length]
    delete stack[length]
    return deletedData
    console.log('deleted : ', deletedData, 'length : ', length, 'stack : ', stack)
  }
}

Stack.prototype.peek = function () {
  tempLength = length - 1
  console.log(stack[tempLength])
}

Stack.prototype.clear = function () {
  length = 0
  stack = []
}

Stack.prototype.enumerate = function () {
  for (var i = length - 1; i >= 0; i--) {
    console.log(stack[i])
  }
}

Stack.prototype.calculator = function () {
  // Loop through stack, enumerate and return final result
  // console.log(item)
  for (var i = 0; i < length; i++) {
    if (!isNaN(stack[i])) {
      console.log(stack[i])
    } else if (isNaN(stack[i])) {
      // Stack.prototype.push(item)
      // } else {
      // var firstNumber = Stack.prototype.pop()
      // var secondNumber = Stack.prototype.pop()
      var firstNumber = stack[i - 1]
      var secondNumber = stack[i - 2]

      switch (stack[i]) {
        case '+':
          Stack.prototype.pushToStack(+secondNumber + +firstNumber, [i])
          console.log(stack)
          break;
        case '-':
          Stack.prototype.pushToStack(secondNumber - firstNumber, [i])
          console.log(stack)
          break;
        case '*':
          Stack.prototype.pushToStack(secondNumber * firstNumber, [i])
          console.log(stack)
          break;
        case '/':
          Stack.prototype.pushToStack(secondNumber / firstNumber, [i])
          console.log(stack)
          break;
        case '%':
          Stack.prototype.pushToStack(firstNumber % secondNumber, [i])
          console.log(stack)
          break;
        // default:
        //   alert('Unrecognized element : ', stack[i])
      }
    }
  }
}
