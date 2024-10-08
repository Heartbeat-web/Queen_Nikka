//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkd6K3BCeXVNRWZ3WlVuYW1jSFN3NzJQTDRlREo5aUtDWWxCbWxTZWJYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNldRVWVqLytNSDk3cDhCcW9McUIvQkZqMjhNRXoyaHNhRWVodkw5b3lqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSVJyc2xlMVF5SERQWWpmM3BXemFwSzlpZHRRTit4c091Yk9aUFFGMDJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwQXNiMGd4ci8wdCtyOHgrckFBV0QvK29GRmlBRTl3KzhZTFVEd3pyb1UwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKc3N6S21EY3JrREM5VWU4bm5qanRTTmY2WU9TaFd2dzFBQXhhSlUwWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLY1NnemUwaE50WE0xZjZNNFNYWUNiRDIwSllxNUFCUnlZVHRTNjFrMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0F6a0VCRzJWaEZMOHc4QVMwV0hwcEJ2L2N1VXpTWEdkZ2E4aEo0SDRXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlJiWlkyVS9Rc2l3UmJKWmJibHU0UVRJdVBJcktUNW9ubFgrdCtXNjd3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9haUt6dkc1bytRbTgyeDY0eHNsSkZvZDlheDk5U2dZK2R3K1dqV2JNYTk1anNMZkJaWmdIcGQ4NEIxWXhKQjNFN0VoMlFhMW80a3FRZnRrY1Z5OERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6InlVcHA3THRlby9yMDBTRWRuWFhmVm0zV0dQdG13ZDFyVjZyM092TEQyOUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMzc1OEJDMjBDOUQxRjU5MUUwOUMyMzZCNEQxN0I2NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NDAyMjMyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCSUVwSEJrY1RCTzVMNXRrbTF0WHdRIiwicGhvbmVJZCI6Ijk5OGUxZGY3LWNhYjQtNDc2OS05N2JiLWM4MDdiNDI4ZTkyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZUhxV1NzeWlEUHJMa1NBSXM2d2MrQWR3Tms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3EvMjJ6RlNWYlpqRlVsSUo1V05yaExrWXNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw5U0pQOVFXIiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjE5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcXA4WUlGRUtpbWxiZ0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvYXNkNjlLdktYK1dmMFNmVVZncG1oTEo1V3hpVFFqUlFTSWV3SFFIcmlrPSIsImFjY291bnRTaWduYXR1cmUiOiJzcEJkYkFsZU1ZbmZkM2RvaTE3b1FTYTY4ZmJkMDEzU3dqNGhTa2gwK1l2dEduQmhRUVBkSm5zNVFRWnV0THZlRDQ4cXNDNGtPRjRjZ2FsYldUdFNEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZjhSL0hWa3lzRit6Q0UwU2xXcG5FRjh2QS9DOHdob0RCUjlodzJwazRLY1FOOHlrNFZYcWR2dnF6T0N3MmlwbjdHb0UwanBreFFOcmxPQ2FpYzlIRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI0MjUyNzQ0OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYyckhldlNyeWwvbG45RW4xRllLWm9TeWVWc1lrMEkwVUVpSHNCMEI2NHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg0MDIyMjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGxOIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
