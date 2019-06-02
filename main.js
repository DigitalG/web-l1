'use strict'

const Customer = require('./Customer')
const Performer = require('./Performer')
const Project = require('./Project')
/*
a. Додавання нового замовника в колекцію
b. Редагування замовника в колекції
c. Видалення замовника з колекції
d. Пошук одного замовника в колекції
e. Додавання проекту в колекцію
f. Редагування проекту в колекції
g. Видалення проекту з колекції
h. Додавання виконавця в колекцію
i. Редагування виконавця в колекції
j. Видалення виконавця з колекції
k. Пошук усіх проектів замовника
l. Пошук усіх проектів виконавця
*/

let Customer1 = new Customer('Customer 1')
let Customer2 = new Customer('Customer 2')
let Customer3 = new Customer('Customer 3')
let Performer1 = new Performer('Performer 1')
let Performer2 = new Performer('Performer 2')
let Performer3 = new Performer('Performer 3')
let Project1 = new Project('Project 1', Performer1, Customer1, false)
let Project2 = new Project('Project 1', Performer1, Customer2, false)
let Project3 = new Project('Project 1', Performer2, Customer1, false)

console.log('Редагування об\'єкту замовника')
console.log(Customer1)
Customer1.updateCustomer('Customer 1 redacted')
console.log(Customer1)

console.log('Видалення об\'єкту замовника')
console.log(Customer.all())
Customer2.delete()
console.log(Customer.all())

console.log('Пошук об\'єкту замовника за унікальним номером')
let foundCustomer = Customer.getCustomerById(3)
console.log(foundCustomer)

console.log('Редагування об\'єкту виконавця')
console.log(Performer1)
Customer1.updateCustomer('Performer 1 redacted')
console.log(Performer1)

console.log('Видалення об\'єкту виконавця')
console.log(Performer.all())
Performer2.delete()
console.log(Performer.all())

console.log('Редагування об\'єкту проекту')
console.log(Project1)
Project1.updateProject('Project 1 redacted 1st time', Performer2, Customer2, false)
console.log(Project1)
Project1.updateProjectName('Performer 1 redacted 2nd time')
Project1.updateProjectCustomer(Performer1)
Project1.updateProjectPerformer(Customer3)
Project1.updateProjectWIPStatus(true)
console.log(Project1)

console.log('Видалення об\'єкту проекту')
console.log(Project.all())
Project2.delete()
console.log(Performer.all())

console.log('Проекти Замовника 1')
console.log(Project.getProjectsOfCustomer(Customer1))
console.log('Проекти Замовника 2')
console.log(Project.getProjectsOfCustomer(Customer2))
console.log('Проекти Замовника 3')
console.log(Project.getProjectsOfCustomer(Customer3))
console.log('Проекти Виконаця 1')
console.log(Project.getProjectsOfPerformer(Performer1))
console.log('Проекти Виконаця 2')
console.log(Project.getProjectsOfPerformer(Performer2))
console.log('Проекти Виконаця 3')
console.log(Project.getProjectsOfPerformer(Performer3))
