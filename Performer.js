const performerList = []
let count = 1
module.exports = class Performer {
  constructor (name) {
    this.id = count++
    this.name = name
    this.projects_list = []
    performerList.push(this)
  }

  static all () {
    return performerList
  }

  updatePerformer (newName) {
    this.name = newName
  }

  delete () {
    performerList.splice(performerList.indexOf(this), 1)
  }

  static getPerformerById (id) {
    return this.all()[id]
  }

  showProductsOnStorage () {
    return this.projects_list
  }
}
