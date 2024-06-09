let x: number = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

let time: number = 30;
if (time >= 0 && time < 15) {
    console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
    console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
    console.log('Четверта чверть');
}


let day: number = 15;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада');
}


let dayOfWeek: number = parseInt(prompt('Enter the day number (1-7):') || '0');

switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}



let num1: number = parseInt(prompt('Enter the first number:') || '0');
let num2: number = parseInt(prompt('Enter the second number:') || '0');

if (num1 > num2) {
    console.log(`Max number: ${num1}`);
} else if (num2 > num1) {
    console.log(`Max number: ${num2}`);
} else {
    console.log('Numbers are equal');
}


let x1: any = '';
x1 = x || 'default';
console.log(x1);

interface Course {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: Course[] = [
    { title: 'Course1', monthDuration: 6 },
    { title: 'Course2', monthDuration: 4 },
    { title: 'Course3', monthDuration: 7 },
    { title: 'Course4', monthDuration: 3 },
    { title: 'Course5', monthDuration: 5 },
    { title: 'Course6', monthDuration: 8 },
    { title: 'Course7', monthDuration: 2 },
    { title: 'Course8', monthDuration: 9 },
    { title: 'Course9', monthDuration: 10 },
    { title: 'Course10', monthDuration: 1 }
];

coursesAndDurationArray.forEach(course => {
    if (course.monthDuration > 5) {
        console.log('Супер');
    }
});
