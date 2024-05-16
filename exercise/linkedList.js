class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }


    add(element){
        let node = new Node(element);

        let current

        if (this.head == null){
            this.head = node
        } else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size += 1;
    }
}


const linkedList = new LinkedList()

linkedList.add("A")
linkedList.add("B")
linkedList.add("C")
linkedList.add("D")


linkedList.printList()

console.log(linkedlist)