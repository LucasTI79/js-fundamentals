const obj = {
  name: 'Lucas',
  age: 20,
  toString(){
    return `Name: ${this.name}, Age: ${this.age}`
  },
  valueOf(){
    return 007;
  },
  [Symbol.toPrimitive](coercionType){
    console.log('coercionType: ', coercionType)
    const types = {
      string: JSON.stringify(this),
      number: '007',
      default: '001'
    }
    return types[coercionType]
  }
}

console.log('obj', obj + 0)