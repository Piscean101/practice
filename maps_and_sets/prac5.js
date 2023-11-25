grades = new Map();

class Grade {
    grade = Math.floor(Math.random()*35 + 40 + Math.random()*35);
}

grades.set("English", new Grade().grade).set("Math", new Grade().grade).set("Science", new Grade().grade).set("History", new Grade().grade)
.set("Drama", new Grade().grade).set("Philosophy", new Grade().grade).set("Social Studies", new Grade().grade);

// grades.forEach((grade) => {
//     if (grade >= 70) {
//         console.log(grades.keys())
//     }
// })

passed = 0;
failed = 0;
average = 0;

for (let grade of grades) {
    while (grade[1] > 100) {
        grade[1]--;
    }
    average += (grade[1]);
    if (grade[1] >= 70) {
        console.log(grade, `Congratulations, you passed ${grade[0]}!`);
    } else {
        margin = 70 - grade[1]; 
        console.log(grade, `Unfortunately you failed ${grade[0]} by ${margin} points.`);
    }
}

average = Math.ceil(average / grades.size);

if (average >= 90) {
    console.log(`For your examplary academic achievements, you have been inducted into the Honour Roll! Congratulations on your GPA of ${average}`)
}
else if (average >= 75) {
    console.log(`Outstanding! You graduated with an average of ${average}`);
} else {
    margin = 75 - average;
    console.log(`Your GPA: ${average} is short ${margin} point(s) in order to graduate`);
    if (margin >= 15) {
        console.log(`Please visit the Dean's office to discuss your academic progress`);
    }
};
