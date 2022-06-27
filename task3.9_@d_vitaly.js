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

/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
    moveEmployees(2, 3)*/
const moveEmployees = (idDepartmentFrom, idDepartmentTo) => {
    for (let i = 0; i < enterprises.length; i++) {
        for (let j = 0; j < enterprises[i].departments.length; j++) {
            if (enterprises[i].departments[j].id == idDepartmentFrom){
                enterprises[i].departments[j].employees_count--
            }
            if (enterprises[i].departments[j].id == idDepartmentTo){
                enterprises[i].departments[j].employees_count++
            }
        }
    }
}
console.log(enterprises[0])
moveEmployees(2, 3)

console.log(enterprises[0])
moveEmployees(2, 3)
console.log(enterprises[0])
