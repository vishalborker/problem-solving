const people = [
    { firstName: 'deepika', lastName: 'padukone', age: 26},
    { firstName: 'akshay', lastName: 'saini', age: 27},
    { firstName: 'elon', lastName: 'musk', age: 38},
    { firstName: 'donald', lastName: 'trump', age: 50},
]

// ['deepika', 'akshay']
const output = people.reduce((acc, curr) => {
    if (curr.age < 30) {
      acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output);