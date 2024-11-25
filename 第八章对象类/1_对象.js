// 理解对象
// let person = new Object()
// person.name = 'test'

// let person1 = {
//     name: 'test'
// } // ok

// let obj = {}
// Object.defineProperty(obj, 'name', {
//     configurable: false,
//     value: 'Nicale'
// })
// Object.defineProperty(obj, 'name', {
//     configurable: true,
//     value: 'test'
// }) // TypeError: Cannot redefine property: name

// 2. 访问器属性
//  getter setter
// let book = {
//     year_: 2017,
//     edition: 1
// }
// Object.defineProperty(book, 'year', {
//     get() {
//         return this.year_
//     },
//     set(newVal) {
//         if (newVal > 2017) {
//             this.edition += newVal -  this.year_
//             this.year_ = newVal
//         }
//     }
// })

// book.year = 2017
// console.log(book)

// 定义多个属性  false属性
// let book2 = {}
// Object.defineProperties(book2, {
//     year_: {
//         value: 2017
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get() {
//             return this.year_
//         },
//         set(newVal) {
//             if (newVal > 2017) {
//                 console.log(newVal) // 2019
//                 this.year_ = newVal
//                 this.edition += newVal -  2017
//             }
//         }
//     }
// })

// book2.year = 2019
// console.log(book2.edition) // 1
// console.log(book2.year) // 2019
// console.log(book2.year_) // 2019

// 4 合并对象
// Object.assign 
let dest, src, result
// dest = {}
// src = {id: 'src'}
// result = Object.assign(dest, src)
// console.log(result)
// console.log(dest)

// dest = {}
// result = Object.assign(dest, {a: 'foo'}, {b: 'bar'})
// console.log(result)
// console.log(dest)

// Object.assign 是属于浅复制，会有覆盖情况
// dest = {id: 'dest'}
// result = Object.assign(dest, {id: 'src1', a: 'aaa'}, {id: 'src2', b: 'bbbb'})
// console.log(result)

// 5 增强对象的语法
// 5.1 属性值简写
// let name = 'Matt'
// let person = {
//     name
// }
// console.log(person)

// 5.2 可计算属性
// const nameKey = 'name'
// const ageKey = 'age'
// const jobKey = 'job'
// let perObj = {}
// perObj[nameKey] = 'Matt'
// perObj[ageKey] = 27
// perObj[jobKey] = 'engineer'
// console.log(perObj) // { name: 'Matt', age: 27, job: 'engineer' }

// 5.3 简写方法名
// let perObj = {
//     sayName(name) {
//         console.log(`my name is ${name}`)
//     }
// }
// perObj.sayName('Matt') // my name is Matt

// const methodKey = 'sayName'
// let perObj1 = {
//     [methodKey](name) {
//         console.log(`my name is ${name}`)
//     }
// }

// perObj1.sayName('Matt1') // my name is Matt1

// 5.4 对象解构
// let person = {
//     name: 'json',
//     age: 27
// }
// let {name: personName, age: personAge} = person
// console.log(personName) // json
// console.log(personAge) // 27
// let {name,  job='engineer'} = person
// console.log(job) // engineer

// 1. 嵌套解构
// let person = {
//     name: 'Matt',
//     age: 27,
//     job: {
//         title: 'teacther'
//     }
// }
// let personCopy = {}

// ({
//     name: personCopy.name,
//     age: personCopy.age,
//     job: personCopy.job
// } = person)

// console.log(person)
// console.log(personCopy)

// let {job: { title }} = person

// console.log(title) // teacther

// let per = {
//     job: {
//         title: 'teacher'
//     }
// }

// (
//     {
//         foo: {
//             bar: personCopy.bar
//         }
//     } = per
// )

// 1.嵌套结构
let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'teacher'
    }
}

let personCopy = {}
try{
    ({
        name: personCopy.name,
        age: personCopy.age,
    } = person)
    console.log(personCopy)

} catch(e) {
    console.log(e)
}








