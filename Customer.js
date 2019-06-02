const CustomerList = []
let count = 1

module.exports = class Customer {
  constructor (name) {
    this.id = count++
    this.name = name
    CustomerList.push(this)
  }

  static all () {
    return CustomerList
  }

  updateCustomer (newName) {
    this.name = newName
  }

  delete () {
    CustomerList.splice(CustomerList.indexOf(this), 1)
  }

  static getCustomerById (id) {
    return this.all()[id]
  }

  static getCustomerByName (name) {
    return this.all().find(name)
  }
}
