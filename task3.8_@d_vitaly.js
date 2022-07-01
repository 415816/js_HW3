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


/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

    Пример:
deleteDepartment(3)*/

const deleteDepartment = (idDepartment) => {
    if (!idDepartment || typeof idDepartment !== 'number' || typeof idDepartment === "boolean") {
        console.log('Недопустимый формат ввода идентификатора отдела')
    } else {
        let marker = false

        for (let i = 0; i < enterprises.length; i++) {
            for (let j = 0; j < enterprises[i].departments.length; j++) {
                if (enterprises[i].departments[j].id == idDepartment && enterprises[i].departments[j].employees_count > 0) {
                    console.log('Нельзя удалять отдел, люди же останутся без работы!')
                    marker = true
                    break
                } else if (enterprises[i].departments[j].id == idDepartment) {
                    enterprises[i].departments.splice(j, 1)
                    marker = true
                    break
                } else if ((i === enterprises.length - 1) && (j === enterprises[i].departments.length - 1) && marker === false) {
                    console.log('Указанный отдел не найден!')
                    break
                }
            }
        }
    }
}

console.log(enterprises[2])
deleteDepartment(2)
deleteDepartment('2')
deleteDepartment(1)
deleteDepartment(10)
deleteDepartment(4)
console.log(enterprises[2])