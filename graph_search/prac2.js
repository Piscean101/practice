// The Data

const nodes = "TOR INN PIC NIA BRD OAK STF MSS AJX HAM".split(" ");

const routes = [
    ["TOR", "PIC"],
    ["TOR", "INN"],
    ["PIC", "BRD"],
    ["INN", "NIA"],
    ["BRD", "STF"],
    ["NIA", "OAK"],
    ["STF", "MSS"],
    ["MSS", "AJX"],
    ["AJX", "HAM"],
];

// Initialize Graph

const routeList = new Map();

function addNode(node) {
    routeList.set(node, []);
};
function addEdge(start, end) {
    routeList.get(start).push(end);
    routeList.get(end).push(start);
};

// Populate Graph

nodes.forEach(value => {
    addNode(value);
});

routes.forEach(value => {
    addEdge(value[0], value[1]);
});

console.log(routeList);

// Initialize Search

/* function bfs(start) {
    console.log(start);
    const queue = [start];
    const visited = new Set();
    while (queue.length > 0) {
        const current = queue.shift();
        const edges = routeList.get(current);
        for (const edge of edges) {
            if (edge === 'HAM') {
                console.log('We found the city of ', edge);
                return;
            }
            if (!visited.has(edge)) {
                visited.add(edge);
                queue.push(edge);
                console.log(edge);
            }
        }
    }
}; */

/* function bfs2(start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
        const current = queue.shift();
        const edges = routeList.get(current);
        for (const edge of edges) {
            if (edge === 'AJX') {
                console.log(`Found ${edge}`);
                return;
            }
            if (!visited.has(edge)) {
                visited.add(edge);
                queue.push(edge);
                console.log(edge);
            }
        }
    }
};

bfs2('TOR'); */

let count = 0;

 function dfs(start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    const edges = routeList.get(start);
    count++;
    for (const edge of edges) {
        if (start === 'BRD') {
            console.log(`Found ${start} in ${count} steps`); 
            return;  
        }
        else if (!visited.has(edge)) {
            dfs(edge, visited);
        }
    }
};

// dfs('NIA'); 

function dfs2(start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    const edges = routeList.get(start);
    count++;
    for (const edge of edges) {
        if (start === 'AJX') {
            return console.log(`Found ${start} in ${count} steps`);
        }
        if (!visited.has(edge)) {
            dfs2(edge, visited);
        }
    }
};

// dfs2('TOR');

function bfs3(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    count = 0;
    while (queue.length > 0) {
        count++;
        const current = queue.shift();
        const edges = routeList.get(current);
        for (const edge of edges) {
            if (edge === "AJX") {
                return console.log(`Found ${edge}`);
            }
            if (!visited.has(edge)) {
                visited.add(edge);
                queue.push(edge);
                console.log(edge);
            }
        }
    }
};

function dfs3(start, visited = new Set()) {
    console.log(start);
    visited.add(start);
    count++;
    const edges = routeList.get(start);
    for (const edge of edges) {
        if (edge === "BRD") {
            return console.log(`Found ${edge} in ${count} steps dfs3`);
        }
        if (!visited.has(edge)) {
            dfs3(edge, visited);
        }
    }
};

function dfs4(start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    const edges = routeList.get(start);
        for (const edge of edges) {
            if (edge === "AJX") {
                return console.log(`Found ${edge}`, 'dfs4');
            }
            else if (!visited.has(edge)) {
                dfs4(edge, visited);
            }
        }
}

dfs3("AJX");
// bfs3("TOR");

function bfs4(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length > 0) {
        const current = queue.shift();
        const edges = routeList.get(current);
        for (const edge of edges) {
            if (edge === "TOR") {
                return console.log(`Found ${edge} bfs4`);
            }
            if (!visited.has(edge)) {
                visited.add(edge);
                queue.push(edge);
                console.log(edge);
            }
        }
    }
};

bfs4('AJX');

dfs4('HAM');