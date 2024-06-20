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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349118051516";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_56_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJobG9UUVBiZU5HUURqTFVtZ1VaVTRPTng1SkFTVjcxN1NTMmtDV25aMEVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhMjYybUlxcVFmYUNPdm9MZUNuSFdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1ZTc2NGE4LWE5ZDItNGQ1MS04NTFhLTU0MWQ2MmU0M2Y5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyNDUsXG4gICAgICAxNjUsXG4gICAgICA3NCxcbiAgICAgIDIxNCxcbiAgICAgIDEyMCxcbiAgICAgIDI0NSxcbiAgICAgIDkxLFxuICAgICAgMTAzLFxuICAgICAgODQsXG4gICAgICAxNjcsXG4gICAgICA5NixcbiAgICAgIDE4NixcbiAgICAgIDc1LFxuICAgICAgMjE0LFxuICAgICAgNDQsXG4gICAgICAyNDAsXG4gICAgICAyMzcsXG4gICAgICAyMTksXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICA0OSxcbiAgICAgIDI0OSxcbiAgICAgIDUsXG4gICAgICAxNSxcbiAgICAgIDE1MCxcbiAgICAgIDI0LFxuICAgICAgMzcsXG4gICAgICAyNTQsXG4gICAgICA3NyxcbiAgICAgIDE4OCxcbiAgICAgIDE4NSxcbiAgICAgIDksXG4gICAgICA3NyxcbiAgICAgIDI0OCxcbiAgICAgIDIzOCxcbiAgICAgIDE1NixcbiAgICAgIDQ0LFxuICAgICAgNjYsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVJUOEtOTjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTgwNTE1MTY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRhbmllbCBFa2VuZVwiLFxuICAgIFwibGlkXCI6IFwiNTE1NDIyOTIxMTE2NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lqSi9hVUhFUCtGMGJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUhPZUxZWFBYTmVxbmxaSGw0YUQ0R3c0dkpKaFdRaTVURGVHOVdxdlpXcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJubFJ5Nm1iMVdwOFBObXI2NHVsZy95ZWxFUUw3ZGQ1WnYwaVROeGp0ZDFmbnh0a0tQOVBUUG02SGJLZk9rRzdWQXJOd2RCSmFBSUtmY2t4T3NySzNBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2eXlaMTV4aWRzUk1oVTl3cDlsN01xRTZxbjk1aWlqQ251K28yc2JDN1NrczUzWFNRWSs3ZlB2OXRDcFFjR01hd1lXSW1kWW04UWJCRHZYRUgrMTZqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE4MDUxNTE2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4OTUzNjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
