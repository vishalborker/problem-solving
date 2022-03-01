const states = [
    { name: "goa", polulation: 10000 },
    { name: "delhi", polulation: 10000 },
    { name: "kerala", polulation: 10000 }
];

const infectedState = [
    { name: "goa", infectedPpl: 10 },
	{ name: "delhi", infectedPpl: 12 }
];

const final = states.filter((state) => infectedState.map((is) => is.name).indexOf(state.name) === -1);
console.log(final);
