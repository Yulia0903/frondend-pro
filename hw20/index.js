class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  remove(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  search(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.size);
console.log(linkedList.head.value);
console.log(linkedList.tail.value);

linkedList.remove(2);
console.log(linkedList.size);

const searchResult = linkedList.search(3);
console.log(searchResult.value);

const arrayRepresentation = linkedList.toArray();
console.log(arrayRepresentation);
