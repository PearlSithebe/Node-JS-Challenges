let visitorArray = [];

class Visitor {
    
getDetails(fullName, age, date, time, comment, nameOfAssistant) {
    
    return {
    fullName,
    age,
    date,
    time,
    comment, 
    nameOfAssistant
    }
}
 
save (getDetails){
    visitorArray.push(getDetails)
    const fs = require('fs');
    for(var i=0; i < visitorArray.length; i++){
    let data = JSON.stringify(visitorArray[i])
    fs.writeFileSync(`visitor_${i +1}.json`, data, function() {})
    console.log("saved")
   
    }
    
}  

load(i){
    
   return require(`./visitor_${i}.json`)
    

}}
