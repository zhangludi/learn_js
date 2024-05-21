
// 理解迭代器
// 迭代器模式
//  可迭代协议
//  支持迭代的自我识别能力和创建实现Iterator接口的对象的能力
// 意味着必须暴露一个属性作为默认迭代器，这个属性必须使用特殊的Symbol.iterator 作为键值
// 字符串 数组 映射 集合 arguments NodeList等DOM集合类型
const str = 'wwewew'
console.log(str[Symbol.iterator])
const num = 123
console.log(num[Symbol.iterator]) // undefined