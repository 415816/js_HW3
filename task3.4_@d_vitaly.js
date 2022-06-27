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

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

    Пример:
addDepartment(1, "Название нового отдела")*/
const allId = (arg) => {
    let idEnterpr =[]
    let idDepart =[]
    for (let i = 0; i < enterprises.length; i++) {
        idEnterpr.push(enterprises[i].id)
        for (let j = 0; j < enterprises[i].departments.length; j++) {
            idDepart.push(enterprises[i].departments[j].id)
        }
    }
    if (arg === 'max'){
        let maxIdEnt =  Math.max(...idEnterpr)
        let maxIdDep = Math.max(...idDepart)
        return Math.max(maxIdEnt, maxIdDep)
    }
}

const addDepartment = (idEnterprise, nameNewDepartment) => {

    for (let i = 0; i < enterprises.length; i++) {
        if (enterprises[i].id == idEnterprise) {
            if (enterprises[i].departments) {
                for (let j = 0; j < enterprises[i].departments.length; j++) {// находим последний отдел в этом последнем предприятии
                    // console.log(enterprises[i].departments[enterprises[i].departments.length - 1])
                    newElement = {
                        id: allId('max') + 1,
                        name: nameNewDepartment,
                    }
                    // console.log(newElement)
                }
            } else {
                newElement = {
                    id: enterprises[enterprises.length - 1].id + 1,
                    name: newEnt,
                }

            }
            enterprises[i].departments.push(newElement)
        }
    }

}
addDepartment(1, "НазваниеНовогоОтдела")
addDepartment(5, "НазвНовОтд")
console.log(enterprises[0])
console.log(enterprises[1])