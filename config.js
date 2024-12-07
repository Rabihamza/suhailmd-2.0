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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_46_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid21rb1ZaOW55YXhLRzJ3Y0lpR1dKY3hmY3QzMzNYSVBYajdTWUdvRXgvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQW9La2FjQkdUbFc1dWQxZzFFUjcxZ1wiLFxuICBcInBob25lSWRcIjogXCI5OTJlNDdlMC00NDA0LTQyYjMtYmU0YS1kZWJjZmI5Y2VmYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAxOTIsXG4gICAgICA4NixcbiAgICAgIDEyMSxcbiAgICAgIDEzNSxcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDI5LFxuICAgICAgNzgsXG4gICAgICAxMzUsXG4gICAgICA1NSxcbiAgICAgIDEyNSxcbiAgICAgIDIyMixcbiAgICAgIDU3LFxuICAgICAgMTgsXG4gICAgICAxMjMsXG4gICAgICAxMjEsXG4gICAgICA1NCxcbiAgICAgIDE1MSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDEwMSxcbiAgICAgIDY3LFxuICAgICAgNDAsXG4gICAgICA2OSxcbiAgICAgIDE4MSxcbiAgICAgIDQsXG4gICAgICA0NyxcbiAgICAgIDIxOSxcbiAgICAgIDI1MixcbiAgICAgIDczLFxuICAgICAgODYsXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDE2OCxcbiAgICAgIDc4LFxuICAgICAgMjQwLFxuICAgICAgMzcsXG4gICAgICAyNDQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREI0WVExQ0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjgxNjI1Nzk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzgyNTcxMjgzNjY0MjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNzkyNGdFRUlUTTByb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNoMkdHakFaQ0xZTDcvSStVTFB5elhoMkZTV24xelNYNEZHTWFPY0h3bnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzdXL2hDRXpFMHd0WXJlZGhnNmlqZGlIVVN5RlRuNmYvYUk3Z0tWZC9pUjhMczJSbnA0cGo2MFQ2RFFEWitiV0lka2tLNHU5TXYzcUkyM21PYjlEQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSE9QWUU2eWIreU5LdmJQNGhPTktXeU82UW4xZnVRcC9wQklFRVZuMUE4aVV6K3ZBQXZlWWxkL2M4Y1ZzRkt4RXd5SWhMZGlweEtJZy9Ndmp1d3l6QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2ODE2MjU3OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYwMDc3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
