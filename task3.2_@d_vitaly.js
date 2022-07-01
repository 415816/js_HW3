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

/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
    getEnterpriseName(4) // Предприятие 1
    getEnterpriseName("Отдел маркетинга") // Предприятие 2*/

const getEnterpriseName = (idDepartment) => {
    // console.log(typeof idDepartment)
    let marker = false
    if (!idDepartment || typeof idDepartment !== 'string' && typeof idDepartment !== 'number' || typeof idDepartment === "boolean") {
        console.log('Недопустимый формат ввода идентификатора отдела')
    } else {
        for (let i = 0; i < enterprises.length; i++) {
            for (let j = 0; j < enterprises[i].departments.length; j++) {
                if ((enterprises[i].departments[j].name === idDepartment) || (enterprises[i].departments[j].id === idDepartment)) {
                    console.log(enterprises[i].name)
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
getEnterpriseName('Отдел маркетинга')
getEnterpriseName(1)
getEnterpriseName(2)
getEnterpriseName(true)
getEnterpriseName(undefined)
getEnterpriseName(null)