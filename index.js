// Your code here
const createEmployeeRecord = function(array) {
   const employeeObj = { 
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
   }
   return employeeObj
}


const createEmployeeRecords = function(array) {
   return array.map(function(element) { 
      return createEmployeeRecord(element);

   })
}


function createTimeInEvent(employeeRecord, dateAndTime){
   // console.log(employeeRecord.familyName)
   // console.log(dateAndTime)
   let [date, hour] = dateAndTime.split(' ')
   const timeInObj = {
      type: 'TimeIn',
      hour: Number(hour),
      date: date,
   }
   employeeRecord.timeInEvents.push(timeInObj);
   // console.log(employeeRecord)
   return employeeRecord
}
createTimeInEvent(createEmployeeRecord(["moe", "sizlak", "barkeep", 2]), '2018-01-03 180')

function createTimeOutEvent(employeeRecord, dateAndTime) {
   let [date, hour] = dateAndTime.split(' ')
   const timeOutObj = {
      type: "TimeOut",
      hour: Number(hour),
      date: date,
   }
   employeeRecord.timeOutEvents.push(timeOutObj);
   // console.log(employeeRecord);
   return employeeRecord;
}
createTimeOutEvent(createEmployeeRecord(["moe", "sizlak", "barkeep", 2]), '2018-01-03 180')

function hoursWorkedOnDate(employeeRecord, date) {
   // console.log(employeeRecord)
   // console.log(date)
   const timeInArray = employeeRecord.timeInEvents
   const timeOutArray = employeeRecord.timeOutEvents
   


   /*for (const elementI of timeInArray) {
      for(const elementJ of timeOutArray) {
         if (elementI.date === elementJ.date && elementI === date) {
            let hoursForDay = elementJ.hour - elementI.hour;
            console.log(hoursForDay)
            return hoursForDay
         }
      }
   }*/
   // console.log('time in:' + timeInArray)
   // console.log('time out:' + timeOutArray)
}
hoursWorkedOnDate({
   firstName: 'Julius',
   familyName: 'Caesar',
   title: 'General',
   payPerHour: 1000,
   timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
   timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]
 }, "0044-03-15")




