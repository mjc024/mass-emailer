const XLSX = require('xlsx')
const book =XLSX.readFile("Software-Houses.xlsx")
const constants = require('./Constants')

let sheet = book.Sheets[book.SheetNames[0]]
let email 
let companyAndEmails = []
let list=[]

const srartRowNum = constants.startRowNum
const endRowNuM = constants.endRowNuM


for(let index=srartRowNum;index<=endRowNuM;index++){
    
    email=sheet[`C${index}`].v
    if( email.includes(',') ){
        
        let arr2=[]    
        arr2=email.split(',')
        
        for( i=0;i<arr2.length;i++){     
        arr2[i]=arr2[i].trimStart()
        list.push(arr2[i])   
        }
     
        companyAndEmails.push({
        companyName:sheet[`A${index}`].v,
        allEmails:arr2  })       
    }
    else{
        companyAndEmails.push({
            companyName:sheet[`A${index}`].v,
            allEmails:[email]})
            list.push(email)       
        }
}
console.log("Num of Emails:"+companyAndEmails.length)


module.exports=companyAndEmails


