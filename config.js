const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163910968";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_44_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2dnNwQTBsQWx1VXhYeTFwcEhPVTVMS25TVjMzRlozWllNQXRSY1k2cHlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxcGdZTlVPU1RIcWlQX1NlMjJQdUlBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0Mzg3M2Q1LTNlNDAtNDA4MC1hZDdmLTNmOTY1MjFmNWFlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxODIsXG4gICAgICA5MSxcbiAgICAgIDE0NixcbiAgICAgIDIzNixcbiAgICAgIDIxMixcbiAgICAgIDI1NCxcbiAgICAgIDE5NixcbiAgICAgIDI0MixcbiAgICAgIDEwLFxuICAgICAgMTIsXG4gICAgICAxMzIsXG4gICAgICAyOSxcbiAgICAgIDEwOSxcbiAgICAgIDEzNyxcbiAgICAgIDEwNixcbiAgICAgIDQxLFxuICAgICAgNyxcbiAgICAgIDEyMyxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxNDMsXG4gICAgICA3NSxcbiAgICAgIDE4NixcbiAgICAgIDI0MSxcbiAgICAgIDEyNyxcbiAgICAgIDQ4LFxuICAgICAgMTI0LFxuICAgICAgMTk5LFxuICAgICAgMjAwLFxuICAgICAgMTkwLFxuICAgICAgMTc5LFxuICAgICAgNTQsXG4gICAgICAxMixcbiAgICAgIDIzNyxcbiAgICAgIDEzNSxcbiAgICAgIDIyOSxcbiAgICAgIDY3LFxuICAgICAgMTA0LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0yRjY5UFJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzOTEwOTY4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc4ODQ3Mjc4MDY3OTYxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSldsOWVvRkVPeUR6YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxc2lnV0V1bjVETCtkV3J0Q3RvSE02ZVBrZkNucGFiNTRNVTJPYXZHK1NrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhGeC9JNzg3WU14ZmpnUCthcXVMQy91V2orc0l1SnFQWWtkK0xabHRhTGZidDBQSDZIZFYxR2N3aW9PQ3IvWUpaNnZkZnY4Q3RKRWhTSmg4VjJhUkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlptTUVYM29zRHFnR2g4Um9nRzVBcitMcXp4VmJxSXlHSEdtR3ZmRTV5b3NhTEhLK0ZYYW5rL2VmWjZDQ3dyQWtjNlpmK29kei9sR3JIMGk3RnBIWkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM5MTA5Njg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDIzODU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
