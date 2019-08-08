let visitorArray = [];


module.exports = class Visitor {
    
    constructor(fullName, age, date, time, comment, nameOfAssistant) {
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comment = comment;
        this.nameOfAssistant = nameOfAssistant
        }
 
    save (){
        visitorArray.push(this)
        const fs = require('fs');
        for(var i=0; i < visitorArray.length; i++){
        let data = JSON.stringify(visitorArray[i])
        fs.writeFileSync(`visitor_${i +1}.json`, data, function() {})
    
        }
        return "saved"
} 

    load(i){
        const fs = require('fs');
        let fileName =`./visitor_${i}.json`
        let visitorlog = fs.readFileSync(fileName)
        let  visitordata = JSON.parse(visitorlog)
        
        return visitordata;

   
    }
}
