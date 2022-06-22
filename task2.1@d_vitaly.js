// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises')
console.log(__dirname)
pathToFile = path.join(__dirname, 'task2.json')
console.log(pathToFile)

fsPromise.readFile(pathToFile).then().catch()


fs.readFile(pathToFile, function read(err, data) {
    if (err) {throw err}
    const content = JSON.parse(data)
    filterPeople(content)
})

const filterPeople = (people) => {
    let allNames = []
    people.forEach(p => allNames.push(p.name))      // собрали список имен
    let uni = new Set(allNames)                     // оставили в списке только уникальные имена
    let indUniqArr = []
    for (let uniq of uni) {
        indUniqArr.push(allNames.indexOf(uniq))     // определили индексы уникальных имен в общем списке
    }
    let uniqPeople = []
    for (let i = 0; i < indUniqArr.length; i++) {
        uniqPeople.push(people[i])                  // по определенным индексам отбираем карточки сотрудников из заданного массива
    }
    console.log(uniqPeople.length)
    console.log(people.length)
}
// const givePeople = async (pathToJSON) => {
//     return new Promise((resolve, reject) => fs.readFile(pathToJSON, (err, content) => {
//         if (err) {
//             throw reject(err.message)
//         }
//         resolve(content)
//     }))
// }
// givePeople.then(console.log(content))

// let giveP = async () => {
//     await fs.readFile(pathToFile, (err, content) => {
//         if (err) {
//             throw err
//         }
//         console.log(content.toString())
//     })
// }
// giveP()