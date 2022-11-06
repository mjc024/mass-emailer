# mass-emailer using nodemailer
- index.js is the main file
- provide your email and password(use password for third party accesss for gmail) in email.js file
- LINK FOR SOUFTWARE HOUSES FILE:https://www.linkedin.com/posts/mohammad-sharaf-ali-96a4038a_software-houses-activity-6952906233737539584-qqtR?utm_source=share&utm_medium=member_android
- After running index.js, unsent.json will contain the list of unsent emails due to unavailablity of gmail or internet
- Run index.js again to send those unsent emails
- In excelReader.js, you can specify the range of index in loop according to excel file, which will specify number of softwares houses to hit at a time.
- E.g index=2, index<=10, will pick up emails of software house from row 2 till row 10 and will send emails to 8 different software houses
