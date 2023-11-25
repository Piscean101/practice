class Random {
    constructor() {
        return this.one;
    }
    number = Math.floor(Math.random()*options.length);
}

count = 0;
options = [];

const obj = {
    red: ["Apple", "Cherry", "Pomegranate", "Raspberry", "Watermelon"],
    yellow: ["Lemon", "Mango", "Banana", "Pear", "Pineapple"],
    brown: ["Coconut", "Kiwi"],
    purple: ["Plum", "Grape"],
};

const fruit = new Map();

function convert () {

    const groups = ["red", "yellow", "brown", "purple"];

    for (const group of groups) {
        fruit.set(group, []);
        for (const f of obj[group]) {
            options.push(f);
            fruit.get(group).push(f);
        }

    }

    choice = `${options[new Random().number]}`;

    choice2 = fruit.get(groups[Math.floor(Math.random()*groups.length)]);
    filter = choice2[Math.floor(Math.random()*choice2.length)];

    return `\nArray: ${choice} \nMap: ${filter}`;
};

// console.log(convert());
// console.log(fruit);
// while (count <= 3) {
//     count++;
//     console.log(count, convert());
// }
// console.log(fruit);

class Country {
    population = 3250000;
    races = {
        asian: this.population * 18.27 / 100,
        black: this.population * 24.03 / 100,
        spanish: this.population * 15.78 / 100,
        white: this.population * 27.25 / 100
    }
    moreraces = this.population - [this.races.asian + this.races.black + this.races.white + this.races.spanish];
    GDP = 575000000000;
    income = {
        asian: this.GDP * 0.101 / 100,
        black: this.GDP * 0.073 / 100,
        spanish: this.GDP * 0.068 / 100,
        white: this.GDP * 0.092 / 100,
        other: this.GDP * 0.042 / 100
    }
    demographic() {
        return `
        Asian Community: Population ${this.races.asian} / Net Worth: $${this.income.asian}  => avg $${(this.income.asian / this.races.asian).toFixed(3)} per person 
        Black Community: Population ${this.races.black} / Net Worth: $${this.income.black}  => avg $${(this.income.black / this.races.black).toFixed(3)} per person
        Spanish Community: Population ${this.races.spanish} / Net Worth: $${this.income.spanish}  => avg $${(this.income.spanish / this.races.spanish).toFixed(3)} per person
        White Community: Population ${this.races.white} / Net Worth: $${this.income.white}  => avg $${(this.income.white / this.races.white).toFixed(3)} per person
        Other: Population ${this.moreraces} / Net Worth: $${this.income.other}  => avg $${(this.income.other / this.moreraces).toFixed(3)} per person
        `
    }
}

const Canada = new Country();

console.log(Canada.demographic());

