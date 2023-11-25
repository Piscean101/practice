const nodes = ['A', 'B' , 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', "K"];

const routes = [
    ['A', 'B'],
    ['B', 'J'],
    ['C', 'D'],
    ['D', 'G'],
    ['E', 'F'],
    ['C', 'F'],
    ['C', 'H'],
    ['D', 'K'],
    ['J', 'K'],
    ['A', 'J'],
    ['C', 'I'],
];

// Initializing Graph

const routeList = new Map();

function addNode(letter) {
    routeList.set(letter, []);
}
function addEdge(origin, destination) {
    routeList.get(origin).push(destination);
    routeList.get(destination).push(origin);
}

// Populating Graph

nodes.forEach(value => {
    addNode(value);
});
routes.forEach(value => {
    addEdge(value[0], value[1]);
})

/* breadth first search

function bfs(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
        const target = queue.shift();
        const edges = routeList.get(target);
    for (const edge of edges) {
        if (edge === 'E') {
           return console.log(edge, 'found it!');
        }

        if (!visited.has(edge)) {
            visited.add(edge);
            queue.push(edge);
            console.log(edge);
        }
    }
    }
}

bfs('A'); */

// depth first search 

let count = 0;

function dfs(start, visited = new Set()) {

    visited.add(start);

    console.log(start);

    const edges = routeList.get(start);

    for (const edge of edges) {

        if (edge === 'D') {
            return console.log(`Found ${edge}: child of ${start} in ${count} steps!`);
        }

        if (!visited.has(edge)) {
            dfs(edge, visited);
        }

    }

}

// dfs('A');

function dfs2(start, visited = new Set()) {

    visited.add(start);

    console.log(start);

    const edges = routeList.get(start);

    for (const edge of edges) {
        if (edge === 'B') {
            return console.log(`Found ${edge} starting from ${start}`);
        }
        if (!visited.has(edge)) {
            dfs2(edge, visited);
        }
    }
};

dfs2('G');

function bfs2(start) {

    let visited = new Set();

    let queue = [start];

    while (queue.length > 0) {
        const current = queue.shift();

        const edges = routeList.get(current);

        console.log(`Searching ${current}..`)

        count++;

        for (const edge of edges) {

            if(edge === 'G') {
                console.log(`Found ${edge} connected to ${current} starting from ${start} in ${count} steps`);
                return count = 0;
            }

            if(!visited.has(edge)) {
                visited.add(edge);
                queue.push(edge);
            }

        }
    }
}

console.log(routeList)
bfs2('C');