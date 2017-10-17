function Queue() {
  length = 0
  this.queue = []
}

Queue.prototype.size = function () {
  console.log(length)
}

Queue.prototype.enqueue = function () {
  var item = window.prompt('Enter an item to add to the queue')
  length++
  queue.push(item)
  console.log(queue)
}

Queue.prototype.enumerate = function () {
  for (var i = 0; i < length; i++) {
    console.log(queue[i])
  }
}

Queue.prototype.peek = function () {
  console.log(queue[0])
}

Queue.prototype.dequeue = function () {
  if (length == 0) {
    alert('No item can be dequeued since the queue is empty')
  } else {
    queue.splice(0, 1)
    length--
    console.log(queue)
  }
}
