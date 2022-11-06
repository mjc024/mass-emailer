const nodemailer = require('nodemailer')
const fs =require('fs')
pathToAttachment = `${__dirname}/Resume.pdf`
attachment = fs.readFileSync(pathToAttachment).toString("base64")
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service:'gmail',
    // port: 2525,
    // secure:true,
    auth:{
        user:"johndoe@gmail.com",
        pass:process.env.PASSWORD
      
    }
})
const sendMail= async(name,email,bccE)=>{
    const body ="Hi,\nI'm John Doe. I'm a recent grad from fast. I am currently looking for a position as a software engineer with an esteemed organization like " +name+". I'm looking to work on the latest tools and technologies with focused interest towards the backend. I have worked on Node.js,Flutter,.Net, C++ and Python. I am confident that my background and knowledge in the Information Technology arena coupled with my strong technical skills in software languages will prove an asset to your organization and add immediate value to your organization.\nI have attached my resume and I'd love to hear from you if there is an opportunity for me.\nBest Regards\nJohn Doe"
    const options = {
        from: {
            name: 'John Doe',
            address: 'johndoe@gmail.com'
        },
        to: email,
        bcc:bccE,
        subject: "Software Engineer",
        text: body,
        attachments :[
            {
              content: attachment,
                filename: "Resume.pdf",
                contentType: "application/pdf",
                path: "Resume.pdf"
            }
        ]
    }
    transporter.sendMail(options,  function(error, info){
        if(error){
           console.log(error.response)
           addEmail(name,email,bccE,error)
           return
        }
        console.log(info.response)
   })

   transporter.close()
   
}
const loadEmails= ()=>{
    try{
        const dataBuffer = fs.readFileSync('unsent.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e){
          return [];
    }

}
const addEmail=(name,email,bccE,error)=>{
    const emails=loadEmails()
    emails.push({
          name:name,
          allEmails:email,
          bcc:bccE,
          error:error
        })
    const dataJSON=JSON.stringify(emails)
    fs.writeFileSync('unsent.json',dataJSON)
}


module.exports={sendMail,loadEmails}

