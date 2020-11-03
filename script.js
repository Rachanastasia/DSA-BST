const BinarySearchTree = require('./bst');

function main() {
    const bst = new BinarySearchTree(5, 'value');
    bst.insert(3, 'value');
    bst.insert(7, 'value');
    bst.insert(2, 'value');
    bst.insert(4, 'value');
    bst.insert(6, 'value');
    bst.insert(9, 'value');
    bst.insert(2, 'value');
    bst.insert(1, 'value');

    display(bst)
}

function display(tree, branch = 'main') {

    const { left, right, key } = tree
    console.log('Branch:', branch)

    console.log('KEY: ', key, '| Left:', left !== null ? left.key : "/", '| Right:', right !== null ? right.key : "/")

    if (!left && !right) {
        console.log('End of tree | Last leaf:', key)
        console.log('                                                    ')
    }

    if (tree.parent === null) {
        console.log('HEAD: ', key)



    }

    if (left) {
        console.log('                                                    ')
        display(left, 'left')
    }

    if (right) {
        console.log('                                                    ')
        display(right, 'right')
    }


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


//function thirdLargestNode


main();