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

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

    Пример:
deleteEnterprise(1)*/
const deleteEnterprise = (idEnterprise) => {
    if (!idEnterprise || typeof idEnterprise !== 'number' || typeof idEnterprise === "boolean") {
        console.log('Недопустимый формат ввода идентификатора предприятия')
    } else {
        for (let i = 0; i < enterprises.length; i++) {
            if (enterprises[i].id == idEnterprise) {
                enterprises.splice(i, 1)
            }
        }
    }
}
deleteEnterprise(true)
deleteEnterprise('5')
deleteEnterprise(5)
console.log(enterprises)