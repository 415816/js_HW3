const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

/*Задания:
    1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/

//===============Вариант 1===============

// let allNamesEnterprises = []
// let namesDepartmentFirstEnt = []
// let countsDepartmentFirstEnt = []
// let namesDepartmentSecondEnt = []
// let countsDepartmentSecondEnt = []
// let namesDepartmentThirdEnt = []
// let countsDepartmentThirdEnt = []
//
// const fillNewArray = (oldArray, nameIt) => {
//     let newArray = []
//     oldArray.forEach(i => {
//         newArray.push(i[nameIt])
//     })
//     return newArray
// }
// allNamesEnterprises = fillNewArray(enterprises, 'name')
//
// namesDepartmentFirstEnt = fillNewArray(enterprises[0].departments, 'name')
// countsDepartmentFirstEnt = fillNewArray(enterprises[0].departments, 'employees_count')
//
// namesDepartmentSecondEnt = fillNewArray(enterprises[1].departments, 'name')
// countsDepartmentSecondEnt = fillNewArray(enterprises[1].departments, 'employees_count')
//
// namesDepartmentThirdEnt = fillNewArray(enterprises[2].departments, 'name')
// countsDepartmentThirdEnt = fillNewArray(enterprises[2].departments, 'employees_count')
// console.log(`
// ${allNamesEnterprises[0]} (${countsDepartmentFirstEnt[0] + countsDepartmentFirstEnt[1] + countsDepartmentFirstEnt[2]} сотрудников)
// - ${namesDepartmentFirstEnt[0]} (${countsDepartmentFirstEnt[0]} сотрудников)
// - ${namesDepartmentFirstEnt[1]} (${countsDepartmentFirstEnt[1]} сотрудников)
// - ${namesDepartmentFirstEnt[2]} (${countsDepartmentFirstEnt[2]} человек)
// ${allNamesEnterprises[1]} (${countsDepartmentSecondEnt[0] + countsDepartmentSecondEnt[1] + countsDepartmentSecondEnt[2]} сотрудников)
// - ${namesDepartmentSecondEnt[0]} (${countsDepartmentSecondEnt[0]} сотрудников)
// - ${namesDepartmentSecondEnt[1]} (${countsDepartmentSecondEnt[1]} сотрудников)
// - ${namesDepartmentSecondEnt[2]} (${countsDepartmentSecondEnt[2]} сотрудников)
// ${allNamesEnterprises[2]} (${countsDepartmentThirdEnt[0] || 'нет'} сотрудников)
// - ${namesDepartmentThirdEnt[0]} (${countsDepartmentThirdEnt[0] || 'нет'} сотрудников)
// `)
//

//===============Вариант 2===============
// const log = (arrEnt) => {
//     for (let i = 0; i < arrEnt.length; i++) {
//         const arrSumCount = (arr) => {
//             let newArr = []
//             arr.forEach(i => newArr.push(i.employees_count))
//             return newArr.reduce((sum, elem) => sum + elem, 0)
//         }
//         console.log(`${arrEnt[i].name} (${arrSumCount(enterprises[i].departments) || 'нет'} сотрудников)`)
//         for (let j = 0; j < enterprises[i].departments.length; j++){
//             console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count || 'нет'} сотрудников)`)
//         }
//     }
// }
// log(enterprises)


// /*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
//
// Пример:
//     getEnterpriseName(4) // Предприятие 1
//     getEnterpriseName("Отдел маркетинга") // Предприятие 2*/

// const getEnterpriseName = (idDepartment) => {
//     for (let i = 0; i < enterprises.length; i++) {
//         for (let j = 0; j < enterprises[i].departments.length; j++){
//             if ((enterprises[i].departments[j].name === idDepartment) || (enterprises[i].departments[j].id === idDepartment)){
//                 console.log(enterprises[i].name)
//             }
//
//         }
//     }
// }
// getEnterpriseName('Отдел маркетинга')   // ТЗ не соответствует примеру, сделал по ТЗ, т.к. по логике надо выводить все предприятия, где есть такие названия отделов (с id понятное дело такой дилемы не возникает)

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
    addEnterprise("Название нового предприятия")*/
// const addEnterprise = (newEnt) => {
//     let newElement = {}
//     for (let i = 0; i < enterprises.length; i++) {
//         if (i == enterprises.length - 1) {
//             console.log(enterprises[enterprises.length - 1])                // находим последнее предприятие
//             if (enterprises[i].departments) {
//             for (let j = 0; j < enterprises[i].departments.length; j++) {
//                 console.log(enterprises[i].departments[enterprises[i].departments.length - 1])      // находим последний отдел в этом последнем предприятии
//                 newElement = {
//                     id: enterprises[i].departments[enterprises[i].departments.length - 1].id + 1,
//                     name: newEnt,
//                 }
//             }} else {
//                 newElement = {
//                     id: enterprises[enterprises.length - 1].id + 1,
//                     name: newEnt,
//                 }
//             }
//
//         }
//     }
//     enterprises.push(newElement)
//     console.log(enterprises)
// }
// addEnterprise('Новое предприятие')
// addEnterprise('4444444444444444')
// addEnterprise('jgjg')

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

    Пример:
addDepartment(1, "Название нового отдела")*/
// const allId = (arg) => {
//     let idEnterpr =[]
//     let idDepart =[]
//     for (let i = 0; i < enterprises.length; i++) {
//         idEnterpr.push(enterprises[i].id)
//         for (let j = 0; j < enterprises[i].departments.length; j++) {
//             idDepart.push(enterprises[i].departments[j].id)
//         }
//     }
//     if (arg === 'max'){
//         let maxIdEnt =  Math.max(...idEnterpr)
//         let maxIdDep = Math.max(...idDepart)
//         return Math.max(maxIdEnt, maxIdDep)
//     }
// }
//
// const addDepartment = (idEnterprise, nameNewDepartment) => {
//
//     for (let i = 0; i < enterprises.length; i++) {
//         if (enterprises[i].id == idEnterprise) {
//             if (enterprises[i].departments) {
//                 for (let j = 0; j < enterprises[i].departments.length; j++) {// находим последний отдел в этом последнем предприятии
//                     // console.log(enterprises[i].departments[enterprises[i].departments.length - 1])
//                     newElement = {
//                         id: allId('max') + 1,
//                         name: nameNewDepartment,
//                     }
//                     // console.log(newElement)
//                 }
//             } else {
//                 newElement = {
//                     id: enterprises[enterprises.length - 1].id + 1,
//                     name: newEnt,
//                 }
//
//             }
//             enterprises[i].departments.push(newElement)
//         }
//     }
//
// }
// addDepartment(1, "НазваниеНовогоОтдела")
// addDepartment(5, "НазвНовОтд")
// console.log(enterprises[0])
// console.log(enterprises[1])


/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

    Пример:
editEnterprise(1, "Новое название предприятия")*/


/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

    Пример:
editDepartment(7, "Новое название отдела")*/


/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

    Пример:
deleteEnterprise(1)*/


/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

    Пример:
deleteDepartment(3)*/


/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
    moveEmployees(2, 3)*/

