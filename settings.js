/*
===================================================================================================
💃 𝗤𝘂𝗲𝗲𝗻 𝗡𝗶𝗹𝘂 𝗕𝗼𝘁 𝗠𝗱 💃
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'true'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94740612695'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'on'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  'ǫᴜᴇᴇɴ ɴɪʟᴜ' 
//👇 Your name
global.ownernma =  ' ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ ' 
//👇 Sticker package name
global.packname =  '𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈   ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ ;' 
//👇 Sticker Author Name
global.Stickerauthor =  '𝙲𝚄𝚃𝙴 𝚂𝙴𝙽𝚄 🖤✨' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'true'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '👸'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = 'https://github.com/Cute777senu/QueenNilu'
//👇 URL button 2 name
global.BUTTON2 = '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/janithsadanuwan/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/c/Janithsadanuwan'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|🪄'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

| ```I am Queen ELISA 👸```

| ```A WhatsApp user bot developed by  ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ 💻```

| ```I'm here to help you with different tasks```

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

| 𝑂𝑤𝑛𝑒𝑟 -  ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ  (+94740612695)🧑‍💻

| 𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 - 𝖰𝗎𝖾𝖾𝗇 Elisa

| 𝐵𝑜𝑡 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 - 3.0.6

| 𝑤𝑒𝑏𝑠𝑖𝑡𝑒 - 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

| ❀ ᴛʏᴘᴇ *.MENU* ᴛᴏ ɢᴇᴛ ʟɪsᴛ ᴏғ ᴄᴏᴍᴍᴀɴᴅs

| ❀ ᴛʏᴘᴇ *.ALIVE* ᴛᴏ ᴄʜᴇᴄᴋ ɪs ʙᴏᴛ ᴏɴʟɪɴᴇ ᴏʀ ɴᴏᴛ 

| ❀ ᴛʏᴘᴇ *.QAVERSION* ᴛᴏ sᴇᴇ ʙᴏᴛ's ᴄᴜʀʀᴇɴᴛ ᴠᴇʀsɪᴏɴ

| ❀ ᴛʏᴘᴇ *.INFO* ᴛᴏ sᴇᴇ ɢʀᴏᴜᴘ/ᴄʜᴀᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ   

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

☘︎𝘜𝘴𝘦 𝘣𝘶𝘵𝘵𝘰𝘯𝘴 𝘣𝘦𝘭𝘰𝘸 𝘵𝘰 𝘢𝘤𝘤𝘦𝘴𝘴 

          ☃︎ᴍᴇɴᴜ

          ☃︎sʏsᴛᴇᴍ

          ☃︎sʏsᴛᴇᴍ

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

```👻💕Thank you for using my bot💃🏻♥️``` - *_ ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ _*

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Desable PM Block
global.NO_BLOCK = ["94740612695"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94740612695'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94740612695'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '_ ✆ ᶜᵁ̥ᵀ̯ᴱ̥׀〲⃝ꜱͥᴇɴͣᴜͫ 𓆩×͜×𓆪ꪾ _' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Nilu.jpg')
global.alivelogo = `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
global.imgalive = fs.readFileSync('./Media/image/Nilu.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
