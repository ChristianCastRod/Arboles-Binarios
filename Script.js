class Node {
    constructor (id, nombre, cantidad, costo) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor (data) {
        this.root = null;
    }

    insert(id, nombre, cantidad, costo) {
        let newNode = new Node(id, nombre, cantidad, costo);

        if (this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.id < node.id) {
            if(node.left === null) node.left = newNode;

            else this.insertNode(node.left, newNode);

        } else {
            if (node.right === null) node.right = newNode;

            else this.insertNode(node.right, newNode);
        }
    }

    inOrder(node, fn) {
        if (node !== null){
            this.inOrder(node.left, fn);
            fn.call(null, node);
            this.inOrder(node.right, fn);
        }
    }

    preOrder(node, fn) {
        if (node !== null){
            fn.call(null, node);
            this.preOrder(node.left, fn);
            this.preOrder(node.right, fn);
        }
    }

    postOrder(node, fn) {
        if (node !== null){
            this.postOrder(node.left, fn);
            this.postOrder(node.right, fn);
            fn.call(null, node);
        }
    }

    buscarNodo(node, datoBuscar) {
        if(node === null) return null;

        else if(datoBuscar < node.id) {
            return this.buscarNodo(node.left, datoBuscar);

            } else if (datoBuscar > node.id) {
            return this.buscarNodo(node.right, datoBuscar);

            } else {
                return node;
            }

    }

    getRootNode() {
        return this.root;
    }

}

const BST = new BinarySearchTree();

BST.insert(15, "Coca", "25", "15");
BST.insert(25, "Fanta", "40", "16");
BST.insert(10, "Doritos", "23", "13");
BST.insert(7, "Sabritas", "31", "14");
BST.insert(22, "Chocolates", "32", "3");

const root = BST.getRootNode();

let arrayResults = [];
console.log('"InOrder"');
BST.inOrder(root, (node)=> arrayResults.push(node.id, node.nombre, node.cantidad, node.costo));
console.log(arrayResults);

arrayResults = [];
console.log('"PreOrder"')
BST.preOrder(root, (node)=> arrayResults.push(node.id, node.nombre, node.cantidad, node.costo));
console.log(arrayResults);

arrayResults = [];
console.log('"PostOrder"')
BST.postOrder(root, (node)=> arrayResults.push(node.id, node.nombre, node.cantidad, node.costo));
console.log(arrayResults);

console.log('"Buscar" BST.buscarNodo(root,10)')
console.log(BST.buscarNodo(root, 10));

console.log('"Para agregar datos se debe usar" BST.insert(id, "nombre", "cantidad", "costo")');
