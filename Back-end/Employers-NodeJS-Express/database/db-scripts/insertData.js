const Employee = require('../model/Employee');
const Position = require('../model/Position');

const countEmployeers = 50000; //+-10%

const firstNameArr = [
    'Александр',
    'Сергей',
    'Владимир',
    'Алексей',
    'Николай',
    'Андрей',
    'Виктор',
    'Юрий',
    'Дмитрий',
    'Иван',
    'Борис',
    'Николай',
    'Константин',
    'Евгений'
];

const lastNameArr = [
    'Смирнов',
    'Иванов',
    'Кузнецов',
    'Соколов',
    'Попов',
    'Лебедев',
    'Козлов',
    'Новиков',
    'Морозов',
    'Петров',
    'Волков',
    'Соловьёв',
    'Васильев',
    'Зайцев',
    'Павлов',
    'Семёнов',
    'Голубев',
    'Виноградов',
    'Богданов',
    'Воробьёв',
    'Фёдоров',
    'Михайлов',
    'Беляев',
    'Тарасов',
    'Белов',
];

const surNameArr = [
    'Александрович',
    'Сергеевич',
    'Владимирович',
    'Алексеевич',
    'Николаевич',
    'Андреевич',
    'Викторович',
    'Юрьевич',
    'Дмитриевич',
    'Иваныч',
    'Борисович',
    'Николаевич',
    'Константинович',
    'Евгеньевич'
];

(async function(){

    let countDirectors = Math.round(countEmployeers * 0.001); //0.1%

    let countChief = Math.round(countEmployeers * 0.05); //5%

    let countMainWorker = Math.round(countEmployeers * 0.15); //15%

    let countForeman = Math.round(countEmployeers * 0.25); //35%

    let countWorker = Math.round(countEmployeers * 0.449); //44.9%

    await Position.create({
        Title: 'Director'
    });

    await Position.create({
        Title: 'Chief'
    });

    await Position.create({
        Title: 'Main Worker'
    });

    await Position.create({
        Title: 'Foreman'
    });

    await Position.create({
        Title: 'Worker'
    });

    let TempIDS = 1;

    for(let i = 0; i < countDirectors; i++){

        await Employee.create({
            PositionID: 1,
            FirstName: firstNameArr[getRandomInt(0, firstNameArr.length - 1)],
            LastName: lastNameArr[getRandomInt(0, lastNameArr.length - 1)],
            SurName: surNameArr[getRandomInt(0, surNameArr.length - 1)],
            Salary: (getRandomInt(1000, 5000) * 100)
        });

    }//for

    for(let i = 0; i < countChief; i++){

        await Employee.create({
            ChiefID: getRandomInt(TempIDS, countDirectors),
            PositionID: 2,
            FirstName: firstNameArr[getRandomInt(0, firstNameArr.length - 1)],
            LastName: lastNameArr[getRandomInt(0, lastNameArr.length - 1)],
            SurName: surNameArr[getRandomInt(0, surNameArr.length - 1)],
            Salary: (getRandomInt(500, 3000) * 100)
        });

    }//for

    TempIDS = countDirectors;

    for(let i = 0; i < countMainWorker; i++){

        await Employee.create({
            ChiefID: getRandomInt(TempIDS, TempIDS + countChief),
            PositionID: 3,
            FirstName: firstNameArr[getRandomInt(0, firstNameArr.length - 1)],
            LastName: lastNameArr[getRandomInt(0, lastNameArr.length - 1)],
            SurName: surNameArr[getRandomInt(0, surNameArr.length - 1)],
            Salary: (getRandomInt(300, 1000) * 100)
        });

    }//for

    TempIDS += countChief;

    for(let i = 0; i < countForeman; i++){

        await Employee.create({
            ChiefID: getRandomInt(TempIDS, TempIDS + countMainWorker),
            PositionID: 4,
            FirstName: firstNameArr[getRandomInt(0, firstNameArr.length - 1)],
            LastName: lastNameArr[getRandomInt(0, lastNameArr.length - 1)],
            SurName: surNameArr[getRandomInt(0, surNameArr.length - 1)],
            Salary: (getRandomInt(200, 800) * 100)
        });

    }//for

    TempIDS += countMainWorker;

    for(let i = 0; i < countWorker; i++){

        await Employee.create({
            ChiefID: getRandomInt(TempIDS, TempIDS + countForeman),
            PositionID: 5,
            FirstName: firstNameArr[getRandomInt(0, firstNameArr.length - 1)],
            LastName: lastNameArr[getRandomInt(0, lastNameArr.length - 1)],
            SurName: surNameArr[getRandomInt(0, surNameArr.length - 1)],
            Salary: (getRandomInt(100, 600) * 100)
        });

    }//for


})();

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}//getRandomInt

