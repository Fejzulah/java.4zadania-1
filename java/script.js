console.log("задание 1");
function checkNumber(number) {
    if (number > 0) {
        console.log("Положительное");
    } else if (number < 0) {
        console.log("Отрицательное");
    } else {
        console.log("Ноль");
    }

    if (number % 2 === 0) {
        console.log("Чётное");
    } else {
        console.log("Нечётное");
    }
}
checkNumber(7);



console.log("Задание 2")
const massiv = [4, 8, 15, 16, 23, 42]

let sum = 0
let max =  massiv[0]
const big = []

for (let i = 0; i < massiv.length; i++) {
    sum = sum + massiv[i]
    if (massiv[i] > max) max = massiv[i]
    if (massiv[i] > 10) big.push(massiv[i])
}

console.log('Сумма элементов:', sum)
console.log('Максимальное число:', max)
console.log('Числа больше 10:', big) 



console.log("Задание 3")
const students = [
    { name: 'Анна', grade: 4 },
    { name: 'Игорь', grade: 5 },
    { name: 'Олег', grade: 3 },
    { name: 'Мария', grade: 5 },
    { name: 'Иван', grade: 2 }
]
function tmp(a) {
    let sum = 0
    for (let i = 0; i < students.length; i++){
        if (students[i].grade > a){
            console.log(students[i])
        }
        sum = sum + students[i].grade
    }
    const.avg = sum / students.length
    console.log(avg)
}



console.log("Задание 4")
function randomaizer() {
    const secretnoechislo = Math.floor(Math.random() * 10) + 1;
    
    let chislo;

    while (chislo !== secretnoechislo) {
        chislo = Number(prompt('Задание 4: Угадай число от 1 до 10'));

        if (chislo === secretnoechislo) {
            console.log('Вы угадали!');
        } else if (chislo < secretnoechislo) {
            console.log('Не угадали, загаданное число больше!');
        } else {
            console.log('Не угадали, загаданное число меньше!');
        }
    }
}

randomaizer();
