function Nodes(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}


function singleList() {
  this.head = null;
  this.tail = null;
  // this.count = 0;
  this.length = 0;
}


// singleList.prototype.printAll = function () {
//   while (node != null) {
//     console.log(node.data);
//     node = node.next;
//   }
// }

singleList.prototype.showLength = function () {
  console.log(length)
}

singleList.prototype.addFirst = function (value) {
  nodeDoesExist = this.checkIfExists(value)
  // console.log(nodeDoesExist);
  if (nodeDoesExist) {
    alert('That node already exists, try with another value')
  } else {
    var node = new Nodes(value);


    if (length) {
      var temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.head.next.previous = this.head;
      // console.log(this.head, this.head.next, this.head.next.previous)

    } else {

      this.head = node;
      // console.log(singleList.length);
    }

    length++

    if (length == 1) {
      this.tail = this.head;
      // console.log(this.head + '+' + this.head.next + '+' + this.tail)
    }
  }
  // console.log(this.head + '+' + this.head.next + '+' + this.tail)

}

singleList.prototype.addLast = function (value) {
  // console.log(length)
  nodeDoesExist = this.checkIfExists(value)
  // console.log(nodeDoesExist);
  if (nodeDoesExist) {
    alert('That node already exists, try with another value')
  } else {
    var node = new Nodes(value);

    if (length == 0) {
      this.tail = node;
      this.head = node;
    } else {
      var temp = this.tail;
      this.tail.next = node;
      // console.log(this.tail)
      this.tail = node;
      // console.log(this.tail)
      // console.log(node.previous)
      node.previous = temp;
      // console.log(node.previous)      

    }

    length++;
    // console.log(length)
  }
}

// singleList.prototype.add = function (value) {
//   var node = new Nodes(value),
//     currentNode = this.head

//   if (!currentNode) {
//     this.head = node;
//     this.count++;
//     return node
//   }

//   while (currentNode.next) {
//     currentNode = currentNode.next;
//   }

//   currentNode.next = node;
//   this.count++;
//   return node;
// }


singleList.prototype.removeLast = function () {
  if (length != 0) {
    if (length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      var currentNode = this.head;
      while (currentNode.next != this.tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      this.tail = currentNode;
    }
  }
  length--;
}

singleList.prototype.removeFirst = function () {
  if (length != 0) {
    this.head = this.head.next;
    length--;

    if (length == 0) {
      this.tail = null;
      // console.log(length, this.head, this.tail)

    }
  }
  // console.log(length, this.head, this.tail)

}

singleList.prototype.removeValue = function (value) {
  nodeDoesExist = this.checkIfExists(value)
  currentNode = this.head
  while (currentNode) {
    if (currentNode.data == value) {
      console.log(currentNode.previous, currentNode.next)
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      break;
    } else {
      alert('A node with such value doesn\'t exist')
      currentNode = currentNode.next;
    }
  }
}

singleList.prototype.enumerate = function () {
  currentNode = this.head;
  while (currentNode) {
    console.log(currentNode)
    currentNode = currentNode.next;
  }

  // return false;
}

singleList.prototype.checkIfExists = function (item) {
  exists = false;
  currentNode = this.head;
  while (currentNode) {
    // console.log(currentNode.data)
    if (currentNode.data == item) {
      // console.log(item, 'is equal to', currentNode)
      exists = true;
      break;
    } else {
      // console.log(item + "doesn't exist yet")
    }
    currentNode = currentNode.next;
  }
  return exists;
}
