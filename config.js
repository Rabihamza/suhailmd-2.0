const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348068162579";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_25_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMbXpIS0hJbmplS3RhQTU5RnlRMkhDdkZXZ09vajF3amlGOFN6YjNJdk13PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2ZXpfb01WTlJQQ2Q2QmswR2EwalZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjOTE2M2I5LTBkZDYtNDJkMS1iYWNkLWE0MzY2MGNhMDdjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICA3MyxcbiAgICAgIDE5MSxcbiAgICAgIDIyOCxcbiAgICAgIDg0LFxuICAgICAgMjA0LFxuICAgICAgMjgsXG4gICAgICA3OSxcbiAgICAgIDMxLFxuICAgICAgOCxcbiAgICAgIDI1MixcbiAgICAgIDE2MSxcbiAgICAgIDg2LFxuICAgICAgMTA4LFxuICAgICAgMjE1LFxuICAgICAgMTAwLFxuICAgICAgODAsXG4gICAgICAxMzksXG4gICAgICAyMzgsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxNTQsXG4gICAgICAxNTksXG4gICAgICAyMjUsXG4gICAgICAyOCxcbiAgICAgIDgzLFxuICAgICAgMjI2LFxuICAgICAgMjEsXG4gICAgICAxMSxcbiAgICAgIDIzMyxcbiAgICAgIDUzLFxuICAgICAgMTExLFxuICAgICAgMjI3LFxuICAgICAgMTg5LFxuICAgICAgODQsXG4gICAgICA5MSxcbiAgICAgIDEwNCxcbiAgICAgIDIxMyxcbiAgICAgIDEyLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAzQkwzNU40XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY4MTYyNTc5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDM4MjU3MTI4MzY2NDI6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTc5MjRnRUVNajMxTG9HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjaDJHR2pBWkNMWUw3L0krVUxQeXpYaDJGU1duMXpTWDRGR01hT2NId25zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImcvWGQ2dmpZckhFN1VqOVczS2Rob1ZSUnVhS2g0cUtuMG8wa1hWY3Q4KzNHVVM1R0lseFpFc3FkOVZuK1JlYXRmNC9LZUcyMTNkV1dua2xvMFNOREJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInM5NUVjZ1lydld5TjN0NUdsY1VVUTFYK29IVFp3S1ZkVlhQT0prSUpqUmF0eGJoT3hTbDlibkV1RytiRkxmeUJNSWR3cStnbzdpc3dMUlk5alF3Smp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjgxNjI1Nzk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2MzkxMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzVi5qc29uIjogIntcImtleURhdGFcIjpcImxhcFNXcHNIck5RdXZyb2YxTUlZdUI4QVN6U2g0V2V3Tm9HcnM3V1VYYnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5MjAyNjA2MCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
