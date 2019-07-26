let count =  1;
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
        let visitorData = getDetails;
        const fs = require('fs');
        let data = JSON.stringify(visitorData);
        if(
        fs.writeFileSync(`visitor_${count}.json`, data, function() {})){
        
        }
    }
}
