const getTodos = async () => {

    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error('Cannot fetch the data from the resource');
    }
    const data = await response.json();
    return data;
};

console.log('Before fetching todos');
console.log('Fetching todos...');

getTodos()
.then(data =>console.log('resolved', data))
.catch(err => console.log('rejected', err.message));

console.log('After fetching todos');
console.log('This will run while todos are being fetched');
