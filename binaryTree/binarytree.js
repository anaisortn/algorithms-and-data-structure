function Node(data) {
  this.data = data;
  this.parent = null;
  this.rightChild = null;
  this.leftChild = null;
  this.level = 0
}

function BinaryTree() {
  this.head = null
}

var tree = new BinaryTree()

tree.getData = function () {
  var data = parseInt(document.getElementsByName('number')[0].value)
  if (isNaN(data)) {
    return null
  } else {
    return data
  }
}

tree.createTree = function (data) {
  var button = document.getElementById(head.data)
  var level = document.createElement('div')
  var item = document.createElement('div')
  var span = document.createElement('span')
  var txt = document.createTextNode(data.data)
  level.setAttribute('class', 'lv' + data.level + ' level')
  span.setAttribute('class', 'title')
  span.setAttribute('id', data.data)
  level.appendChild(item).appendChild(span).appendChild(txt)

  if (!button) {
    document.getElementsByClassName('root')[0].appendChild(level)
    item.setAttribute('class', 'item')
  } else {
    var parent = document.getElementById(data.parent.data).parentNode
    var element = parent.getElementsByClassName('lv' + data.level)
    item.setAttribute('class', 'item')
    if (element.length > 0) {
      element[0].appendChild(item)
    } else {
      parent.appendChild(level)
    }
  }
}

tree.removeElement = function (data, children) {
  var temp = data
  var element = document.getElementById(temp.data).parentNode
  var parent = element.parentNode
  if (children != null) {
    if (children.firstChild && children.secondChild) {
      var append1 = children.firstChild
      var append2 = children.secondChild
      var child1 = document.getElementById(append1.data).parentNode
      var child2 = document.getElementById(append2.data).parentNode.parentNode
      parent.removeChild(element)
      parent.appendChild(child1).appendChild(child2)
    } else if (children.firstChild || children.secondChild) {
      if (children.firstChild) {
        var append = children.firstChild
        var child = document.getElementById(append.data).parentNode
        parent.removeChild(element)
        parent.appendChild(child)
      } else {
        var append = children.secondChild
        var child = document.getElementById(append.data).parentNode
        parent.removeChild(element)
        parent.appendChild(child)
      }
    }
  } else {
    parent.removeChild(element)
  }
}

tree.add = function () {
  var levelCount = 1
  var data = tree.getData()
  var node = new Node(data)
  var currentNode = head
  if (data != null) {
    if (!currentNode) {
      head = node
      node.level = levelCount
    } else
      while (currentNode) {
        levelCount++
        if (node.data < currentNode.data) {
          if (!currentNode.leftChild) {
            node.level = levelCount
            currentNode.leftChild = node
            node.parent = currentNode
            break
          } else {
            currentNode = currentNode.leftChild
          }
        } else if (node.data > currentNode.data) {
          if (!currentNode.rightChild) {
            node.level = levelCount
            currentNode.rightChild = node
            node.parent = currentNode
            break
          } else {
            currentNode = currentNode.rightChild
          }
        } else if (node.data == currentNode.data) {
          window.alert('The node already exists')
          break
        }
      }
    tree.createTree(node)

  }
}


tree.contains = function () {
  var data = tree.getData()
  var count = 0
  if (data != null) {
    currentNode = head
    while (currentNode) {
      count++
      if (data > currentNode.data) {
        if (!currentNode.rightChild) {
          window.alert('Sorry, that node doesn\'t exist ')
          break
        } else {
          currentNode = currentNode.rightChild
        }
      } else if (data < currentNode.data) {
        if (!currentNode.leftChild) {
          window.alert('Sorry, that node doesn\'t exist ')
          break
        } else {
          currentNode = currentNode.leftChild
        }
      } else if (data == currentNode.data) {
        // window.alert('The node already exists', currentNode)
        return currentNode
        break
      }
    }
  }
}


tree.remove = function () {
  var data = tree.contains()
  var send = data
  var children = {
    firstChild: data.leftChild,
    secondChild: data.rightChild
  }
  if (data != null) {

    // Parent
    if (data.parent) {
      // No child
      if (!data.leftChild && !data.rightChild) {
        if (data.parent.leftChild == data) {
          data.parent.leftChild = null
        } else {
          data.parent.rightChild = null
        }
        tree.removeElement(send)
        data = null
      }
      // Children
      else if (data.leftChild && data.rightChild) {
        if (data.parent.leftChild == data) {
          data.parent.leftChild = null
        } else {
          data.parent.rightChild = null
        }
        var temp = data.leftChild
        data.leftChild = null
        var currentNode = head
        while (currentNode) {
          if (temp.data > currentNode.data) {
            if (!currentNode.rightChild) {
              currentNode.rightChild = temp
              currentNode.rightChild.parent = currentNode
              if (data.leftChild == null) {
                if (data.rightChild == null) {
                  tree.removeElement(send, children)
                  data = null
                  break
                } else {
                  temp = data.rightChild
                  data.rightChild = null
                  currentNode = head
                }
              }
            }
            else {
              currentNode = currentNode.rightChild
            }
          }
          else if (temp.data < currentNode.data) {
            if (!currentNode.leftChild) {
              currentNode.leftChild = temp
              currentNode.leftChild.parent = currentNode
              if (data.leftChild == null) {
                if (data.rightChild == null) {
                  tree.removeElement(send, children)
                  data = null
                  break
                } else {
                  temp = data.rightChild
                  data.rightChild = null
                  currentNode = head
                }
              }
            } else {
              currentNode = currentNode.leftChild
            }
          }
        }
      }

      // One child
      else {
        var temp
        var currentNode = head
        if (data.parent.leftChild == data) {
          data.parent.leftChild = null
        } else {
          data.parent.rightChild = null
        }
        if (data.rightChild) {
          temp = data.rightChild
        } else {
          temp = data.leftChild
        }
        while (currentNode) {
          if (temp.data > currentNode.data) {
            if (!currentNode.rightChild) {
              currentNode.rightChild = temp
              currentNode.rightChild.parent = currentNode
              tree.removeElement(send, children)
              break
            } else {
              currentNode = currentNode.rightChild
            }
          } else if (temp.data < currentNode.data) {
            if (!currentNode.leftChild) {
              currentNode.leftChild = temp
              currentNode.leftChild.parent = currentNode
              tree.removeElement(send, children)
              break
            } else {
              currentNode = currentNode.leftChild
            }
          }
        }
      }
    }

    // No parent
    else {
      // Children
      if (data.leftChild && data.rightChild) {
        var temp = data.leftChild
        data.leftChild = null
        var currentNode = head
        while (currentNode) {
          if (temp.data > currentNode.data || temp.data === currentNode.data) {
            if (!currentNode.rightChild) {
              currentNode.rightChild = temp
              if (data.leftChild == null) {
                if (data.rightChild == null) {
                  tree.removeElement(send)
                  data = null
                  break
                } else {
                  temp = data.rightChild
                  data.rightChild = null
                  currentNode = head
                }
              }
            } else {
              currentNode = currentNode.rightChild
            }
          } else if (temp.data < currentNode.data) {
            if (!currentNode.leftChild) {
              currentNode.leftChild = temp
              if (data.leftChild == null) {
                if (data.rightChild == null) {
                  tree.removeElement(send)
                  data = null
                  break
                } else {
                  temp = data.rightChild
                  currentNode = head
                }
              }
            } else {
              currentNode = currentNode.leftChild
            }
          }
        }
      }
      // No child
      else if (!data.rightChild && !data.leftChild) {
        tree.removeElement(send)
        head = null
        data = null
      }
      // One child
      else {
        var temp
        var currentNode = head
        if (data.rightChild) {
          temp = data.rightChild
        } else {
          temp = data.leftChild
        }
        while (currentNode) {
          if (temp.data > currentNode.data || temp.data === currentNode.data) {
            if (!currentNode.rightChild) {
              currentNode.rightChild = temp
              currentNode.rightChild.parent = currentNode
              tree.removeElement(send)
              break
            } else {
              currentNode = currentNode.rightChild
            }
          } else if (temp.data < currentNode.data) {
            if (!currentNode.leftChild) {
              currentNode.leftChild = temp
              currentNode.leftChild.parent = currentNode
              tree.removeElement(send)
              break
            } else {
              currentNode = currentNode.leftChild
            }
          }
        }
      }
    }
  }
}
