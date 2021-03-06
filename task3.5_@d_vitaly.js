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

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

    Пример:
editEnterprise(1, "Новое название предприятия")*/
const editEnterprise = (idEnterprise, newNameEnt) => {
    if (!idEnterprise || isNaN(idEnterprise) || typeof newNameEnt !== 'string') {
        console.log('Недопустимый формат ввода идентификатора или названия предприятия')
    } else {
        for (let i = 0; i < enterprises.length; i++) {
            if (enterprises[i].id == idEnterprise) {
                enterprises[i].name = newNameEnt
            }
        }
    }
}

editEnterprise(1, 5)
editEnterprise('sdfsf', 'sdfsdf')

editEnterprise(1, 'Бывшее предприятие 1')
console.log(enterprises)

editEnterprise(1, 'Бывшее бывшее предприятие 1')
console.log(enterprises)
