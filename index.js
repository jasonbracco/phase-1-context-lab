function createEmployeeRecord(array){
    let timeInArray = []
    let timeOutArray = []
    let singleEmployeeRecord ={
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: timeInArray,
        timeOutEvents: timeOutArray,
    }
    return singleEmployeeRecord
}
let allWagesFor = function(){
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

console.log(singleEmployeeRecord.showRecord())
function createEmployeeRecords(arrayOfArrays){
    const employeeRecords = arrayOfArrays.map(element => createEmployeeRecord(element))
    return employeeRecords
}

function createTimeInEvent(dateString){
    let timeInDateHourArray = dateString.split(" ")
    let date = timeInDateHourArray[0]
    let hour = timeInDateHourArray[1]
    let timeInObject = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeInObject)
    return this
}

function createTimeOutEvent(dateString){
    let timeOutDateHourArray = dateString.split(" ")
    let date = timeOutDateHourArray[0]
    let hour = timeOutDateHourArray[1]
    let timeOutObject = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeOutObject)
    return this
}

function hoursWorkedOnDate(dateString){
    for(let i=0;i<this.timeInEvents.length;i++) {
        let dateTimeClockedIn = this.timeInEvents[i].hour
        let dateTimeClockedOut = this.timeOutEvents[i].hour
        if (dateString === this.timeInEvents[i].date){
            return((dateTimeClockedOut-dateTimeClockedIn)/100)
        }
    }
}

function wagesEarnedOnDate(dateString){
    let payRate = this.payPerHour
    let hours = hoursWorkedOnDate.call(this, dateString)
    return hours*payRate
}

function findEmployeeByFirstName(srcArray, firstName){
    let employee = srcArray.find(element => {
            if (element.firstName === firstName){
                return element
            }
        })
    return employee
}

function calculatePayroll(array){    
    let initialValue = 0
    let fullPay = array.reduce((previousValue, currentValue) => previousValue + allWagesFor.call(currentValue), initialValue)
    return fullPay
}







































