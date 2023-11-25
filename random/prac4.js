grades = [20, 7 , 12 , 10 , 98 , 3 , 0 , 53];

sum = grades.reduce((acc, curr) => 
    acc + curr, 50
)

console.log(sum)