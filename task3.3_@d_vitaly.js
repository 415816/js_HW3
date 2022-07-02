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

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
    addEnterprise("Название нового предприятия")*/
const maxId = (enterprises, arg) => {
    let idEnterpr = []
    let idDepart = []
    for (let i = 0; i < enterprises.length; i++) {
        idEnterpr.push(enterprises[i].id)
        if (enterprises[i].departments) {
            for (let j = 0; j < enterprises[i].departments.length; j++) {
                idDepart.push(enterprises[i].departments[j].id)
            }
        }
    }
    if (arg === 'max') {
        let maxIdEnt = Math.max(...idEnterpr)
        let maxIdDep = Math.max(...idDepart)
        return Math.max(maxIdEnt, maxIdDep)
    }
}

const addEnterprise = (newEnt) => {
    if (typeof newEnt !== 'string') {
        console.log('Недопустимый формат ввода названия нового предприятия')
    } else {
        let newElement = {}
        for (let i = 0; i < enterprises.length; i++) {
            if (i == enterprises.length - 1) {
                // console.log(enterprises[enterprises.length - 1])                // находим последнее предприятие
                if (enterprises[i].departments) {
                    for (let j = 0; j < enterprises[i].departments.length; j++) {
                        // console.log(enterprises[i].departments[enterprises[i].departments.length - 1])      // находим последний отдел в этом последнем предприятии
                        newElement = {
                            id: maxId(enterprises, 'max') + 1,
                            name: newEnt,
                        }
                    }
                } else {
                    newElement = {
                        id: maxId(enterprises, 'max') + 1,
                        name: newEnt,
                    }
                }
            }
        }
        enterprises.push(newElement)
        console.log(enterprises)
    }
}
addEnterprise('Новое предприятие - 4')
addEnterprise('Новое предприятие - 5')
addEnterprise('Новое предприятие - 6')
addEnterprise(3241234)