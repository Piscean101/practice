weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

chores = ["Dishes", "Laundry", "Groceries", "Vacuum", "Cooking", "Skincare", "Dog Park"];

agenda = new Map();

// console.log(weekdays.splice(5, 1));

// console.log(weekdays);

class Random {
    constructor() {
        return this.number;
    }
    number = Math.floor(Math.random()*chores.length);
}

function assign () {
    dayoff = new Random().number;
        weekdays.forEach(day => {
            chore = chores.splice(new Random().number, 1);
            agenda.set(day, chore);
        });
        agenda.get(weekdays[dayoff]).splice(0, 1, "REST DAY");
    console.log(agenda);
}

assign();
// console.log(chores.splice(new Random().number, 1), chores.splice(new Random().number, 1), chores.splice(new Random().number, 1));
// console.log(chores);
