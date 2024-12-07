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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_05_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMMXVtMC9JWTBZOFQxb2lXTXBoaE1NckQrRTRaUmwyQTdhTkxUTHBDMnVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKSGYzV3BZTFMzMnJIcWUzZUdjUzB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJjMDNmODRkLTdiYTEtNDZhZi04ZmY4LTc4YmRmMjhiMzExNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDE0NixcbiAgICAgIDE3OSxcbiAgICAgIDEyOCxcbiAgICAgIDU5LFxuICAgICAgMTkwLFxuICAgICAgMTkyLFxuICAgICAgMTkwLFxuICAgICAgNjMsXG4gICAgICAwLFxuICAgICAgMTMyLFxuICAgICAgMTIsXG4gICAgICAzMCxcbiAgICAgIDM1LFxuICAgICAgMTYsXG4gICAgICAxMDAsXG4gICAgICAyNDcsXG4gICAgICAyNCxcbiAgICAgIDE3LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDk1LFxuICAgICAgNTAsXG4gICAgICA1NCxcbiAgICAgIDQyLFxuICAgICAgMjUxLFxuICAgICAgMjQ4LFxuICAgICAgOTksXG4gICAgICAyMjksXG4gICAgICAxNCxcbiAgICAgIDQ2LFxuICAgICAgOTEsXG4gICAgICA3MCxcbiAgICAgIDExMixcbiAgICAgIDI1MixcbiAgICAgIDE5MyxcbiAgICAgIDE3NyxcbiAgICAgIDE4MixcbiAgICAgIDIyOSxcbiAgICAgIDIwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OEZSNTExWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2ODE2MjU3OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDM4MjU3MTI4MzY2NDI6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNzkyNGdFRUpQTHo3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNoMkdHakFaQ0xZTDcvSStVTFB5elhoMkZTV24xelNYNEZHTWFPY0h3bnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNW92QWlIcWs3NmNJUnFLc2JzSmltNUtsb2pxb083T2JTbjZJRmYwbmV5MWFiZ1hoM2I2Q1lTRFg5QXpwTSsva05CaCtTb1lZdC91YWpHZDA3aHM5RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibzJHL0lRMXdLSU9CcWkxUjQ2RklYK2Z2aXpFRTlBZTNTWjFZVG9hWmhkeENEUHdHNVArYlczb3lRc0Eyem1WL1dDOVZqeGF2RlNiUDVydXMzOGsyaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2ODE2MjU3OTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTUxNTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM1YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsYXBTV3BzSHJOUXV2cm9mMU1JWXVCOEFTelNoNFdld05vR3JzN1dVWGJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTIwMjYwNjAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
