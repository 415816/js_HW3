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
const log = (arrEnt) => {
    for (let i = 0; i < arrEnt.length; i++) {
        const arrSumCount = (arr) => {
            let newArr = []
            arr.forEach(i => newArr.push(i.employees_count))
            return newArr.reduce((sum, elem) => sum + elem, 0)
        }
        console.log(`${arrEnt[i].name} (${arrSumCount(enterprises[i].departments) || 'нет'} сотрудников)`)
        for (let j = 0; j < enterprises[i].departments.length; j++){
            console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count || 'нет'} сотрудников)`)
        }
    }
}
log(enterprises)