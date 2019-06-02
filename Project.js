const projectList = []
let count = 1
module.exports = class Project {
  constructor (name, Performer, Customer, WIPStatus) {
    this.id = count++
    this.name = name
    this.Performer_id = Performer.id
    this.Customer_id = Customer.id
    this.WIPStatus = WIPStatus // bool
    projectList.push(this)
  }

  static all () {
    return projectList
  }

  updateProjectName (newName) {
    this.name = newName
  }

  updateProjectPerformer (Performer) {
    this.Performer_id = Performer.id
  }

  updateProjectCustomer (Customer) {
    this.Customer_id = Customer.id
  }

  updateProjectWIPStatus (WIPStatus) {
    this.WIPStatus = WIPStatus
  }

  updateProject (name, Performer, Customer, WIPStatus) {
    this.name = name
    this.Performer_id = Performer.id
    this.Customer_id = Customer.id
    this.WIPStatus = WIPStatus // bool
  }

  delete () {
    projectList.splice(projectList.indexOf(this), 1)
  }

  static getProjectById (id) {
    return this.all()[id]
  }

  static getProjectsOfCustomer (Customer) {
    let result = []
    Project.all().forEach(function (e) {
      if (e.Customer_id === Customer.id) {
        result.push(e)
      }
    })

    return result
  }

  static getProjectsOfPerformer (Performer) {
    let result = []
    Project.all().forEach(function (e) {
      if (e.Performer_id === Performer.id) {
        result.push(e)
      }
    })

    return result
  }

  // moveProductToStorage(storage){
  //     storage.projectList.push(this)
  // }

  // removeProductToStorage(storage){
  //   for(let i=0;i< storage.projectList.length;i++){
  //
  //     if (storage.projectList[i].id == this.id){
  //       storage.projectList.splice(i,1);
  //     }
  //   }
  // }

  // moveProductFromStorageToShop(storage,shop){
  //     this.moveProductToStorage(shop);
  //     this.removeProductToStorage(storage);
  // }
}
