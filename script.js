const BinarySearchTree = require('./bst');

function main() {
    const bst = new BinarySearchTree(9, 'this is a value');
    bst.insert(0, 'this is a value');

    bst.insert(4, 'this is a value');

    bst.insert(3, 'this is a value');
    bst.insert(9, ['this is a value', 'this is a value', 'this is a value', 'this is a value']);
    bst.insert(32, 'this is a value');
    bst.insert(36, { value: 'what a value!' });
    bst.insert(37, 'this is a value');
    isSearchTree(bst)
}

function getHeight(tree, h = 0, l = null, r = null) {

    h++

    if (!tree.left && !tree.right) {
        console.log('height:', h)
        return h
    }

    if (tree.left && typeof (tree.left) === 'object') {
        let { left } = tree
        console.log('left', left.key)
        l = h
        getHeight(left, h, l)
    }

    if (tree.right && typeof (tree.right) === 'object') {
        let { right } = tree
        console.log('right', right.key)
        r = h
        getHeight(right, h, r)
    }

}


function isSearchTree(tree, bool = false) {
    let l = tree.left ? tree.left : null;
    let r = tree.right ? tree.right : null;
    let val = tree.key;

    if (!l && !r) {
        console.log('Is search tree? ', bool)
        return bool
    }

    if (l.key > val > r.key) {
        bool = true;
        isSearchTree(l, bool)
        isSearchTree(r, bool)
    } else {
        // bool = false;
        console.log('Is search tree? ', bool)
        return bool;
    }



    console.log('Is search tree? ', bool)
    return bool;






}


main();