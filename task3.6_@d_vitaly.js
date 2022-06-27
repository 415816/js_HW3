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


/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

    Пример:
editDepartment(7, "Новое название отдела")*/
const editDepartment = (idDepartment, newNameDepartment) => {
    for (let i = 0; i < enterprises.length; i++) {
        for (let j = 0; j < enterprises[i].departments.length; j++) {
            if (enterprises[i].departments[j].id == idDepartment){
                enterprises[i].departments[j].name = newNameDepartment
            }
        }
    }
}
editDepartment(2,'Дворники')
console.log(enterprises[0])
editDepartment(4,'Отдел снабжения дворников')
console.log(enterprises[0])
