const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    mentionedJid,
    processTime
} = require('@adiwajshing/baileys')

const { 
  color,
  bgcolor
} = require('./lib/color')

const { 
  help
} = require('./src/help')

const {
  newsCnn
} = require('./plugins/cnn.js')

const { 
  wait, 
  getBuffer, 
  h2k, 
  generateMessageID,
  getGroupAdmins,
  NumberRandom,
  start,
  info,
  success,
  close,
} = require('./lib/functions')

const { 
  fetchJson
} = require('./lib/fetcher')

const { 
  jagoKata
} = require('./plugins/jagokata.js')

const {
  convertSticker
} = require("./plugins/swm.js")

const {
  webp2gifFile 
} = require("./plugins/gif.js")

const {
  mediafireDl
} = require('./plugins/mediafire.js')

const {
  dafontSearch, 
  dafontDown
} = require('./plugins/dafont.js')

const {
  covid
} = require('./plugins/covid.js')

const { 
  herolist 
} = require("./plugins/herolist.js")

const { 
  herodetails 
} = require("./plugins/herodetail.js")

const { 
  y2mateA,
  y2mateV
} = require('./plugins/y2mate.js')

const {
  fotoIg, 
  videoIg
} = require('./plugins/ig.js')

const {
  lirikLagu
} = require('./plugins/lirik.js')

const {
  fbDown 
} = require('./plugins/fb.js')

const {
  wikiSearch
} = require('./plugins/wiki.js')

const { 
  exec
} = require('child_process')

const { 
  recognize 
} = require('./lib/ocr')

const { 
  removeBackgroundFromImageFile
} = require('remove.bg')

const fs = require('fs')
const moment = require('moment-timezone')
const imageToBase64 = require('image-to-base64')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const util = require('util')
const brainly = require('brainly-scraper')
const axios = require('axios')
const cheerio = require('cheerio') 
const googleImage = require('g-i-s')
const yts = require('yt-search')
const ggs = require('google-it')

const { ind } = require('./owner/data')
const imgbb = require('imgbb-uploader')
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const antilenk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))
const antigay = JSON.parse(fs.readFileSync('./database/antigay.json'))
const antijawa = JSON.parse(fs.readFileSync('./database/antijawa.json'))
const antibocil = JSON.parse(fs.readFileSync('./database/antibocil.json'))
const antibucin = JSON.parse(fs.readFileSync('./database/antibucin.json'))
const antiwibu = JSON.parse(fs.readFileSync('./database/antiwibu.json'))
const antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const simin = JSON.parse(fs.readFileSync('./src/simi.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const speed = require('performance-now')
const chatban = JSON.parse(fs.readFileSync('./src/banchat.json'))
const vcard = 'BEGIN:VCARD\n'//JANGAN DI GANTI ANJING
            + 'VERSION:3.0\n'//JANGAN DI GANTI ANJING,NTAR EROR
            + 'FN:zxagung\n' // GANTI NAMA LU BODOH
            + 'ORG: zxagung;\n'//GANTI NAMA BOT LUH BANGSAT
            + 'TEL;type=CELL;type=VOICE;waid=6289655478810:+62 896-554-78810\n' // GANTI NOMOR LU BEGONIAN
            + 'END:VCARD'
//zxagungcreator
prefix = '>'
botname = 'ZxY Bot'
namaowner = 'Zxagung'
name = 'Zxagung'
botinfo = 'Zxagung'
fake = 'ZxyBot-FIX-ANTIDELETE'
ator = 'BOT'
namo = 'zxagung'
cr = '~*SUBSCRIBE:xagung{108P}🍁~OWNER:Zxagung🍁*'
nomerowner = '6289655478810'
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log('>', '[',color('INFO','blue'),']','Starting Bot...')
  console.log('>', '[',color('INFO','blue'),']','Configure Connection...')
  console.log('>', '[',color('INFO','blue'),']','Configure Success, Connecting...')
	client.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
	start('2', 'Connecting...')
	})
	client.on('open', () => {
	success('2', 'Connected')
	}) 
	await client.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
	client.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
	const mdata = await client.groupMetadata(anu.jid)
	console.log(anu)
	if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Halo @${num.split('@')[0]}\nSelamat datang di group.      _SilakanINTRO_                            *Nama* :                  	           *Kelas* : 	                                       *Jomblo/tidak* :                        	*Favorit Anime* :                *${mdata.subject}*`
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	} else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Sayonara @${num.split('@')[0]}👋`
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	}
	} catch (e) {
	console.log('Error : %s', color(e, 'red'))
	}
	})

	client.on('CB:Blocklist', json => {
  if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	}
	})

	client.on('chat-update', async (msg) => {
	try {
  if (!msg.hasNewMessage) return
  msg = JSON.parse(JSON.stringify(msg)).messages[0]
	if (!msg.message) return
	msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
	if (msg.key && msg.key.remoteJid == 'status@broadcast') return
	if (msg.key.fromMe) return
  global.prefix
	global.blocked
	global.botname
	const content = JSON.stringify(msg.message)
	const from = msg.key.remoteJid
	const type = Object.keys(msg.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('HH:mm DD-MM') + '-2021'
  const tanggal = moment.tz('Asia/Jakarta').format('DD-MM') + '-2021'
  const jams = moment.tz('Asia/Jakarta').format('HH:mm')
  const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
  const copid = await covid()
	body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption.startsWith(prefix) ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption.startsWith(prefix) ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : ''
	bodi = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
	budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const isCmd = body.startsWith(prefix)
  const botNumber = client.user.jid
  const ownerNumber = ["6289655478810@s.whatsapp.net"]
  const arya = ["6289655478830@s.whatsapp.net"]
  const premium = ["6289655478810@s.whatsapp.net","18482883219@s.whatsapp.net"]
	const isGroup = from.endsWith('@g.us')
  number = msg.participant ? msg.participant : client.user.jid
	const sender = isGroup ? number : msg.key.remoteJid
	const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
	const groupName = isGroup ? groupMetadata.subject : ''
	const groupId = isGroup ? groupMetadata.jid : ''
	const groupMembers = isGroup ? groupMetadata.participants : ''
	const mentionUser = type == "extendedTextMessage" ? msg.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
	var pes = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
	const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
	const date = new Date().toLocaleDateString()
    const sekarang = new Date().getTime();
    const conts = msg.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = msg.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isPrem = premium.includes(sender)
	const isGroupAdmins = groupAdmins.includes(sender) || false
	const isWelkom = isGroup ? welkom.includes(from) : false
	const isNsfw = isGroup ? nsfw.includes(from) : false
	const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntijawa = isGroup ? antijawa.includes(from) : false
            const isAntigay = isGroup ? antigay.includes(from) : false
            const isAntibocil = isGroup ? antibocil.includes(from) : false
            const isAntibucin = isGroup ? antibucin.includes(from) : false
            const isAntitoxic = isGroup ? antitoxic.includes(from) : false
            const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
	const isOwner = ownerNumber.includes(sender)
  const isBanChat = chatban.includes(from)
	if (isBanChat && !isOwner) return
	const aryanjing = arya.includes(sender)
	const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
	}
	
mess = {
wait: 'Tunggu Sedang Di Proses.......',
success: 'Berhasil ✓',
error: {
stick: 'Gagal, terjadi kesalahan saat mengkonversi',
Iv: 'Link Tidak Valid'
},
only: {
group: 'Perintah ini hanya bisa di gunakan dalam group!',
ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group!',
admin: 'Hanya Admin Yang Bisa Menggunakan Command Ini',
Badmin: 'Bot Harus Admin Untuk Perintah Ini'
}
}
	
const reply = (teks) => {
	client.sendMessage(from, teks, text, {quoted: msg})
	}
const sendFileFromStorage = (path, type, options) => {
client.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}

const sendFile = async (medya, namefile, capti, tag, vn) => {
  baper = await getBuffer(medya)
  mimi = ''
  if (namefile.includes('m4a')){
  client.sendMessage(from, baper, audio,{mimetype: 'audio/mp4',quoted: tag, filename: namefile, ptt: vn})
  }
  if (namefile.includes('mp4')){
  client.sendMessage(from, baper, video, {mimetype: 'video/mp4', quoted: tag, caption: capti, filename: namefile})
  }
  if (namefile.includes('gif')){
  client.sendMessage(from, baper, video, {mimetype: Mimetype.gif, caption: capti, quoted: tag, filename: namefile})
  } 
  if (namefile.includes('png')){
  client.sendMessage(from, baper, image, {quoted: tag, caption: capti, filename: namefile})
  }
  
  if (namefile.includes('webp')){
  client.sendMessage(from, baper, sticker, {quoted: tag})
  } else {
  kobe = namefile.split(`.`)[1]
  client.sendMessage(from, baper, document, {mimetype: kobe, quoted: tag, filename: namefile})
  }
}

const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	client.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	client.sendMessage(from, hasil, type, options).catch(e => {
	client.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
const downloadM = async(save) => {
encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await client.downloadAndSaveMediaMessage(encmedia)
return await client.downloadMediaMessage(encmedia)
  }
  const sendMess = (hehe, teks) => {
 client.sendMessage(hehe, teks, text)
 }
  const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
	}
const fakeReply = (teks, target, teks2) => {
client.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}

    const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
    const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
    const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}

	colors = ['red','white','black','blue','yellow','green']
	const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	const isAntiLink = isGroup ? antilenk.includes(from) : false
	const isSimi = simin.includes(from)
	const isTagedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isTagedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const isTagedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
	const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	const isTagedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	
	
	if (aryanjing) return reply('kamu di bened')
	
	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
	if (!isGroup && !isCmd) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
	
  if (isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m',']', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
  if (!isCmd && isGroup) console.log('\x1b[1;37m>', '[', '\x1b[1;31mRECV\x1b[1;37m', ']', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  
//dpa
			dpa = {
			wait: `「❗」Wait Sedang Proses`,
			succes: `「 ❗ 」Sukses Ngab!!!`,
			error: `「 ❗ 」Error!`,
			lvlon: `「 ❗ 」Berhasil Mengaktifkan Mode Leveling Di Group Ini️`,
			lvloff: `「 ❗ 」Berhasil Menonaktifkan Mode Leveling Di Group Ini️`,
			lvlnul: `「 ❗ 」Level Mu Masih Kosong`,
			baned: `「 ❗ 」Maaf Kamu Sudah Terbanned!!`,
			lvlnoon: `「 ❗ 」Leveling Di Group Belum Diaktifkan`,
			noregis: `「 ❗ 」Daftar Dulu Ngab\nCara Daftar : ${prefix}verify`,
			rediregis: `「 ❗ 」Kamu Sudah Terdaftar Di Database ${botname}`,
			stikga: `「 ❗ 」Yah Gagal Coba Ulangi Beberapa Saat Lagi`,
			linkga: `「 ❗ 」Link Tidak Valid`,
			groupo: `「 ❗ 」Command Ini Khusus Untuk Group`,
			ownerb: `「 ❗ 」Command Ini Khusus Untuk Owner`,
			ownerg: `「 ❗ 」Command Ini Khusus Untuk Owner Group`,
			admin: `「 ❗ 」Command Ini Khusus Untuk Admin`,
			badmin: `「 ❗ 」BOT Harus Menjadi Admin`,
			nsfwoff: `「 ❗ 」Aktifkan Mode Nsfw!`,
			bug: `「 ❗ 」Masalah Telah Dilaporkan Ke Owner ${namaowner}ツ, Laporan Palsu/Main Main Auto Block + Ban Permanent`,
			wrongf: `「 ❗ 」Format Salah/Text Kosong`,
			clears: `「 ❗ 」Clear All Succes`,
			}
			
/*====================================================================*/
//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}✨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🔥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}🌛`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;

 for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk ajg.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
           
/*====================================================================*/
            
if (messagesC.match(`@19199992616`)){
		        if (!isGroup) return
		        if (!isTagDappa) return
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Tag terdeteksi ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }

                if (messagesC.match('://youtube.com/')){
		        if (!isGroup) return
		        if (!isAntiLinkytc) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            
if (messagesC.match('instagram.com/')){
		        if (!isGroup) return
		        if (!isAntiLinkig) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }

if (messagesC.match('facebook.com/')){
		        if (!isGroup) return
		        if (!isAntiLinkfb) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            
if (messagesC.match('t.me/')){
		        if (!isGroup) return
		        if (!isAntiLinkTelegram) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		        if (isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split('@')[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply('1detik')
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('2detik')
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply('3detik')
		        }, 0)
	            }
	            if (messagesC.match(`chan`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`yamete`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`onichan`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`otaku`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`vtuber`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`komik`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`mangga`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`yamete`)){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
	            
	            if (messagesC.match(`yok`)){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`free fire`)){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`alok`)){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`bagi diamond`)){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`yok`)){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				   if (messagesC.match(`beb`)){
					if (!isGroup) return
					if (!isAntibucin) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bucin yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bucin Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`ayang`)){
					if (!isGroup) return
					if (!isAntibucin) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bucin yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bucin Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`khawatir`)){
					if (!isGroup) return
					if (!isAntibucin) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bucin yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bucin Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`cinta`)){
					if (!isGroup) return
					if (!isAntibucin) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bucin yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bucin Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`peduli`)){
					if (!isGroup) return
					if (!isAntibucin) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bucin yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bucin Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`syg`)){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				     
				    if (messagesC.match(`ayan`)){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`love `)){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`ayang `)){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				    if (messagesC.match(`beb `)){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }

if (messagesC.match(`ambe`)){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge jawa yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`tempek`)){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh jawa nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`matamu`)){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge jawa yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`jancok`)){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge jawa yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`aing`)){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge jawa yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`kontol`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`bangsat`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`babi`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`tai`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`gaguna`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`kontol`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`kntl`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (messagesC.match(`asu`)){
					if (!isGroup) return
					if (!isAntitoxic) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge toxic yakan 😎 EZzz')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("@6289655478810")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					client.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
switch(command) {
case 'help':
case 'menu':
case 'bantuan':
reply(help(prefix, copid, tanggal, jams, botname))
break
case 'bugreport':
if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
teks = args.join(' ')
reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
client.sendMessage('6289655478810@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
break
case 'brainly':
brainly(args.join(" ")).then(res => {
hmm = '────────────\n'
for (let Y of res.data) {
hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
reply(hmm)
console.log(res)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 

*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}
`
reply(her)
break
case 'quotes2'://UPDATE zxagung
data = await fetchJson(`https://apizxxy.herokuapp.com/api/quotes?apikey=zxagung`)
cop = `Quotes : _${data.result.result.quote}_\n\nAuthor : _${data.result.result.by}_`
reply(cop)
break
case 'sound1':
satu = fs.readFileSync('./loli/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./loli/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./loli/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
tiga = fs.readFileSync('./loli/sound4.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
tigapuluh = fs.readFileSync('./loli/sound5.mp3');
client.sendMessage(from, tigapuluh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
tigasatu = fs.readFileSync('./loli/sound6.mp3');
client.sendMessage(from, tigasatu, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./loli/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./loli/sound8.mp3');
client.sendMessage(from, delapan, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./loli/sound9.mp3');
client.sendMessage(from, sembilan, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./loli/sound10.mp3');
client.sendMessage(from, sepuluh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break

case 'sound11':
duabelas = fs.readFileSync('./loli/sound11.mp3');
client.sendMessage(from, duabelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
empatbelas = fs.readFileSync('./loli/sound12.mp3');
client.sendMessage(from, empatbelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
limabelas = fs.readFileSync('./loli/sound13.mp3');
client.sendMessage(from, limabelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
enambelas = fs.readFileSync('./loli/sound14.mp3');
client.sendMessage(from, enambelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
tujuhbelas = fs.readFileSync('./loli/sound15.mp3');
client.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
delapanbelas = fs.readFileSync('./loli/sound16.mp3');
client.sendMessage(from, delapanbelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
sembilanbelas = fs.readFileSync('./loli//sound17.mp3');
client.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
duasatu = fs.readFileSync('./loli/sound18.mp3');
client.sendMessage(from, duasatu, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
duatiga = fs.readFileSync('./loli/sound19.mp3');
client.sendMessage(from, duatiga, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duaempat = fs.readFileSync('./loli/sound20.mp3');
client.sendMessage(from, duaempat, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
dualima = fs.readFileSync('./loli/sound21.mp3');
client.sendMessage(from, dualima, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duaenam = fs.readFileSync('./loli/sound22.mp3');
client.sendMessage(from, duaenam, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatujuh = fs.readFileSync('./loli/sound23.mp3');
client.sendMessage(from, duatujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
dualapan = fs.readFileSync('./loli/sound24.mp3');
client.sendMessage(from, dualapan, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
duasembilan = fs.readFileSync('./loli/sound25.mp3');
client.sendMessage(from, duasembilan, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'quotesnime'://UPDATE zxagung
data = await fetchJson(`https://apizxxy.herokuapp.com/api/quotesanime?apikey=zxagung`)
cuyyt = `*Quotes* : _${data.result.result.quote}_\n\*character* : _${data.result.result.character}_\n\*episode* : _${data.result.result.episode}_\n\*anime* : _${data.result.result.anime}_`
reply(cuyyt)
break
case 'pantun'://UPDATE zxagung
gatauda = body.slice(8)					
anu = await fetchJson(`https://apizxxy.herokuapp.com/api/pantun?apikey=zxagung`, {method: 'get'})
reply(anu.result.result)
break
case 'gcsearch':
gcser = `${body.slice(9)}`
anu = await fetchJson(`https://apizxxy.herokuapp.com/api/groupwhatsapp?apikey=zxagung&query=${gcser}`, {method: 'get'})
djududuu = `name : ${anu.result.result.name}\n\genre : ${anu.result.result.genre}\n\link : ${anu.result.result.link}`
client.sendMessage(from, djududuu, text, {quoted: msg})
break
case 'swm':
if (type === 'imageMessage' || isTagedImage){
var kls = body.slice(5)
var pack = kls.split("|")[0];
var author = kls.split("|")[1];
const getbuff = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const dlfile = await client.downloadMediaMessage(getbuff)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
client.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
} else {
reply('Format Salah!')
}
break
case 'tovideo':
if ((isMedia && !msg.message.videoMessage || isTagedSticker) && args.length == 0) {
const encmediaaa = isTagedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/mp4', filename: `stick.mp4`, quoted: msg, caption: 'success'})
fs.unlinkSync(mediaaa)
}
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `❒「  *Wiki*  」
├ *Judul :* ${res[0].judul}
└ *Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: msg, caption: result}).catch(e => {
  reply(result)
})
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('hmm')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Mode Antilink sudah aktif')
antilenk.push(from)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilenk))
reply('Sukses mengaktifkan mode anti link di group ini')
} else if (Number(args[0]) === 0) {
antilenk.splice(from, 1)
fs.writeFileSync('./src/antilink.json', JSON.stringify(antilenk))
reply('Sukes menonaktifkan mode anti link di group ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antijawa':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntijawa) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./database/antijawa.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./database/antijawa.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antitoxic':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntitoxic) return reply('*SUDAH AKTIF* !!!')
					antitoxic.push(from)
					fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
					reply('*[❗] ACTIVATED ANTITOXIC*')
					} else if (Number(args[0]) === 0) {
					antitoxic.splice(from, 1)
					fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
					reply('*[❗] DEACTIVATED ANTITOXIC*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
case 'antigay':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntigay) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./database/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antigay.splice(from, 1)
					fs.writeFileSync('./database/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
case 'antiwibu': 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntiwibu) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./database/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./database/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
case 'antibocil':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntibocil) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./database/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./database/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibucin':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntibucin) return reply('*SUDAH AKTIF* !!!')
					antibucin.push(from)
					fs.writeFileSync('./database/antibucin.json', JSON.stringify(antibucin))
					reply('*[❗] ACTIVATED ANTIBUCIN HARGAI YG JOMBLO*')
					} else if (Number(args[0]) === 0) {
					antibucin.splice(from, 1)
					fs.writeFileSync('./database/antibucin.json', JSON.stringify(antibucin))
					reply('*[❗] DEACTIVATED ANTIBOCIL YAH JANGAN LUPA HARGAI YANG JOMBLO*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
case 'antilinkyoutube-c':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				if (Number(args[0]) === 1) {
				if (isAntiLinkytv) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkytc.push(from)
				fs.writeFileSync('./database/group/antilinkytc.json', JSON.stringify(antilinkytc))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				client.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLinkytc) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkytv.splice(from, 1)
				fs.writeFileSync('./database/group/antilinkytc.json', JSON.stringify(antilinkytc))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				}
				break
case 'antilinkinstagram':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				if (Number(args[0]) === 1) {
				if (isAntiLinkytv) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkig.push(from)
				fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				client.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLinkig) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkig.splice(from, 1)
				fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				}
				break
case 'antilinktelegram':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				if (Number(args[0]) === 1) {
				if (isAntiLinkTelegram) return reply(`[❗] Fitur ${command} sudah aktif`)
				antitelegram.push(from)
				fs.writeFileSync('./database/group/antitelegram.json', JSON.stringify(antitelegram))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				client.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLinkTelegram) return reply(`[❗] Fitur ${command} sudah aktif`)
				antitelegram.splice(from, 1)
				fs.writeFileSync('./database/group/antitelegram.json', JSON.stringify(antitelegram))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				}
				break
				case 'antilinkfb':
		        if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				if (Number(args[0]) === 1) {
				if (isAntiLinkfb) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkfb.push(from)
				fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				client.sendMessage(from,`PERINGATAN!! jika bukan admin kirim link wajib menggunakan #izinadmin`, text, {quoted: fkontak})
				} else if (Number(args[0]) === 0) {
				if (!isAntiLinkfb) return reply(`[❗] Fitur ${command} sudah aktif`)
				antilinkfb.splice(from, 1)
				fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				}
				break
				case 'antitagamel':
				if (!isOwner) return reply(dpa.ownerb)
		        if (!isGroup) return reply(ind.groupo())					
				if (args.length < 1) return reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				if (Number(args[0]) === 1) {
				if (isTagAmel) return reply(`[❗] Fitur ${command} sudah aktif`)
				antgdpaa.push(from)
				fs.writeFileSync('./database/tagmell.json', JSON.stringify(antgdpaa))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isTagDappa) return reply(`[❗] Fitur ${command} sudah aktif`)
				antgdpaa.splice(from, 1)
				fs.writeFileSync('./database/tagmell.json', JSON.stringify(antgdpaa))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan angka 1 untuk mengaktifkan dan 0 untuk menonaktifkan paham kan babu??')
				}
				break
case 'banchat':
if (!isOwner) return 
if (args.length < 1) return reply('hmm')
if (body.endsWith('true')) {
if (isBanChat) return reply('Silent Mode Telah Aktif Sebelumnya')
chatban.push(from)
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*Silent Mode True....*')
} else if (body.endsWith('false')) {
chatban.splice(from)
fs.writeFileSync('./src/banchat.json', JSON.stringify(chatban))
reply('*Silent Mode False....*')
} else {
reply(`Ketik ${prefix}banchat true Untuk Mengaktifkan dan false untung Menonaktifkan`)
}
break
case 'jadian':
				jds = []
				const jdii = groupMembers
				const koss = groupMembers
				const akuu = jdii[Math.floor(Math.random() * jdii.length)]
				const diaa = koss[Math.floor(Math.random() * koss.length)]
				teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
				jds.push(akuu.jid)
				jds.push(diaa.jid)
				mentions(teks, jds, true)
				break
				case 'truth':
				const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
				break
				case 'dare':
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				client.sendMessage(from, tod, image, { quoted: freply, caption: '*Dare*\n\n'+ der })
				break
				case 'bisakah':
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: fkontak })
				break
		        case 'kapankah':
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: fkontak })
				break
		        case 'apakah':
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: fkontak })
				break
		        case 'bagaimanakah':
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: fkontak })
				break
		        case 'rate':
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: fkontak })
				break
                case 'sangecek':
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: fkontak })
				break
                case 'gaycek':
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: fkontak })
				break
                case 'lesbicek':
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: fkontak })
				break
                case 'gantengcek':
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: fkontak })
				break
		        case 'cantikcek':
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: fkontak })
				break
		        case 'watak':
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: fkontak })
				break
		        case 'hobby':
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: fkontak })
				break
				//gw ga tanggung jawab:v
				case 'ngewe':
				jds = []
				const jdiid = groupMembers
				const kosst = groupMembers
				const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
				const diaat = kosst[Math.floor(Math.random() * kosst.length)]
				teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
				jds.push(akuut.jid)
				jds.push(diaat.jid)
				mentions(teks, jds, true)
				break	
			    case 'terganteng':
				jds = []
				const jdiidc = groupMembers
				const kosstc = groupMembers
				const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
				teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
				jds.push(akuutc.jid)
				mentions(teks, jds, true)
				break	
				case 'tercantik':
				jds = []
				const jdiidr = groupMembers
				const kosstr = groupMembers
				const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
				teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
				jds.push(akuutr.jid)
				mentions(teks, jds, true)
				break
//==========================================BATES NGAB==========================================\\
//TOOLS MENU
case 'modesimi':
if (args.length < 1) return reply('hmm')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Mode Simi sudah aktif')
simin.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(simin))
reply('Sukses mengaktifkan mode simi')
} else if (Number(args[0]) === 0) {
simin.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(simin))
reply('Sukes menonaktifkan mode simi')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'kodebahasa':
let LANGUAGES = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(`${LANGUAGES}`)
break
case 'restart':
if (!isOwner) return
reply(mess.wait)
exec(`node main`)
reply('_Restarting Bot Success_')
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `❒「  *${botname}*  」
├ *Nama :* ${res[0].nama}
├ *Ukuran :* ${res[0].size}
└ *Link :* ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: msg})
break
case 'dafontdown':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await dafontDown(teks) 
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Style :* ${res[0].style}
├ *Nama File :* ${res[0].output}
└ *Isi File :* ${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: msg})
break
case 'dafontsearch':
case 'dafonts':
if (args.length < 1) return reply('Apa Yang Mau Di Cari? ')
teks = args.join(' ')
reply(mess.wait)
res = await dafontSearch(teks)
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Style :* ${a.style}
└ *Link :* ${a.link}
`
reply(result)
break
case 'blocklist':
teks = 'This is list of blocked number :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": blocked}})
break
case 'pinterest':
case 'pin':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
var string = JSON.parse(JSON.stringify(res.data))
var random =  string[Math.floor(Math.random() * string.length)]
sendFileFromUrl(random, image, {quoted: msg, caption: `*Hasil Pencarian Dari :* ${teks}`})
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: msg, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `❒「  *Google*  」
├ *Judul :* ${i.title}
├ *Link :* ${i.link}
└ *Keterangan :* ${i.snippet}


`
}
var akhir = kant.trim()
reply(akhir)
break
break
case 'ocr':
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
const encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3}).then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
}).catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Tag Foto Yang Mau Dijadikan Text!')
}
break
case 's':
case 'stiker':
case 'sticker':
reply(mess.wait)
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
const encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = NumberRandom('.webp')
await ffmpeg(`./${media}`).input(media).on('error', function (err) {
fs.unlinkSync(media)
reply(mess.error.stick)
}).on('end', function () {
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(ran)
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isTagedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = NumberRandom('.webp')
	await ffmpeg(`./${media}`).inputFormat(media.split('.')[1]).on('error', function (err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
	}).on('end', function () {
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(ran)
}).addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
	} else if ((isMedia || isTagedImage) && args[0] == 'nobg') {
const media = await downloadM()
ranw = NumberRandom('.webp')
ranp = NumberRandom('.png')
reply(mess.wait)
keyrmbg = '2483de5ac680abacead80f8575f38363'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: msg})
})
})
} else {
reply(`Kirim Media dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim!`)
}
break
case 'tts':
if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: msg})
reply(mess.wait)
bogay = body.replace(prefix, '')
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: msg})
dtt = bogay.slice(8)
ranm = NumberRandom('.mp3')
dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
sendFileFromStorage(ranm, audio, {quoted: msg, mimetype: 'audio/mp4', ptt: true})
fs.unlinkSync(ranm)
})
break
case 'afk':
                    if (!isGroup) return reply(mess.only.group)
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    client.sendMessage(from, ini_txt, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"©zxagung","currencyCode":"IDR","priceAmount1000":"1000000000000000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
case 'setprefix':
if (!isOwner) return
teks = args.join('') 
prefix = teks
reply(`_Change Prefix Success!! Prefix_ : *${prefix}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return client.eply(mess.only.admin)
teks = args.join(' ')
group = await client.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, teks, text, {contexInfo: {mentionedJid: jids}, quoted: msg})
break
case 'sticktag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isTagedSticker) return reply('Tag Sticker Nya Oum')
teks = body.slice(9)
stik = await downloadM()
group = await client.groupMetadata(from);
member = group['participants']
jids = []
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, stik, sticker, {contexInfo: {mentionedJid: jids}, quoted: msg})
break
case 'facebook':
case 'fb':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await fbDown(teks).catch(e => {
  reply('_[ ! ] Error Terjadi Kesalahan Dalam Memasuki Web Atau Link Error_')
})
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Source :* ${a.source}
├ *Ukuran :* ${a.size}
├ *Kualitas :* ${a.quality}
├ *Type :* ${a.type}
└ *Nama File :* ${a.judul}.${a.type}
`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: msg})
sendFileFromUrl(a.link, video, { mimetype: 'video/mp4',quoted: msg, filename: `${a.judul}.${a.type}`})
break
case 'ytmp3':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await y2mateA(teks).catch(e => {
reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}kbps
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: msg}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}p
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: msg}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: msg, mimetype: 'video/mp4', filename: res[0].output})
})
break
case 'ig':
case 'instagram':
if (args.length < 1) return reply('Link Yang Mana? ')
if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(mess.error.Iv)
teks = args.join(' ')
if (!teks.endsWith('-video') && !teks.endsWith('-foto')) return reply('Ketik -foto / -video Untuk Mengisi Option ')
reply(mess.wait)
if (teks.endsWith('-foto')) {
igl = teks.replace('-foto',"") 
res = await fotoIg(igl).catch(e => {
  reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error_')
})
sendFileFromUrl(res[0].foto, image, {quoted: msg})
}
if (teks.endsWith('-video')) {
igl = teks.replace('-video',"")
res = await videoIg(teks).catch(e => {
  reply('_[ ! ] Error Gagal Dalam Masuk Web Atau Link Error')
})
sendFileFromUrl(res[0].video, video, {mimetype: 'video/mp4', quoted: msg})
}
break
case 'play':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *Youtube Search*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: msg, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *${botname}*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'tiktok':
case 'tiktok':
if (args.length < 1) return reply('Urlnya mana um?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
url = args[0]
url =`http://api.lolhuman.xyz/api/tiktok?apikey=Apikey&url=https://vt.tiktok.com/ZSwWCk5o/${url}`
result = await fetchJson(url)
buffer = await getBuffer(result.result.link)
client.sendMessage(from, buffer, video, { quoted: msg })
break
case 'jagokata':
case 'quote':
case 'quotes':
case 'katamutiara':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
res = await jagoKata(teks)
let hasil = `*“* ${res[0].isi} *”*
_~${res[0].by}_`
reply(hasil)
break
case 'yts':
case 'ytsearch':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await yts(`${teks}`)
kant = ``
for (let i of res.videos) {
kant += `❒「  *${botname}*  」
├ *Judul :* ${i.title}
├ *ID Video :* ${i.videoId}
├ *Views :* ${i.views}
├ *Di Upload Pada : ${i.ago}
├ *Durasi :* ${i.timestamp}
├ *Channel :* ${i.author.name}
├ *Link Channel :* ${i.author.url}
└ *Link Video :* ${i.url}


`
}
var akhir = kant.trim()
sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: akhir})
break
case 'attp':
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
client.sendMessage(from, attp2, sticker, {quoted: msg})
break
case 'ttp2':
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp2 Wajahku Ganteng*`)
ttp2 = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=Apikey&text=${body.slice(6)}`)
client.sendMessage(from, ttp2, sticker, {quoted: msg})
break
case 'markzug':
reply(mess.wait)
jdisjdiddij = await getBuffer(`https://apizxxy.herokuapp.com/api/randommark?apikey=zxagung`)
client.sendMessage(from, jdisjdiddij, image, {quoted: msg})
break
case 'donghoua':
reply(mess.wait)
jdisjdiddiij = await getBuffer(`https://apizxxy.herokuapp.com/api/donghoua?apikey=zxagung`)
client.sendMessage(from, jdisjdiddiij, image, {quoted: msg})
break
case 'randomsemok':
reply(mess.wait)
jdisjdiddiiij = await getBuffer(`https://apizxxy.herokuapp.com/api/cewesemok?apikey=zxagung`)
client.sendMessage(from, jdisjdiddiiij, image, {quoted: msg})
break
case 'fitnah':
if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(5)
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
break
					case 'tebakgambar':
					anu = await fetchJson(`https://apixxy.herokuapp.com/api/kuis/tebakgambar?apikey=zxagung`, {method: 'get'})
					ngebuff = await getBuffer(anu.image)
					tebak = `➸ Jawaban : *${anu.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: msg})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: msg }) // ur cods
					}, 0) // 1000 = 1s,
				break
				case 'caklontong'://UPDATE zxagung
					anu = await fetchJson(`https://apixxy.herokuapp.com/api/kuis/caklontong?apikey=zxagung`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.deskripsi, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Zxagung_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, {quoted: msg })
					}, 0) // 1000 = 1s, 
					break
					case 'tebakliriklagu'://UPDATE zxagung
					anu = await fetchJson(`https://apizxxy.herokuapp.com/api/kuis/tebakliriklagu?apikey=zxagung`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.result.answer+'\n'+anu.result.result.question, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot Zxagung_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.result.question, text, {quoted: msg })
					}, 0) // 1000 = 1s, 
					break
				case 'wasted':
				  case 'was':
				if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: msg
				var imgbb = require('imgbb-uploader')
				  owgi = await client.downloadAndSaveMediaMessage(ger)
				  anu = await imgbb("2483de5ac680abacead80f8575f38363", owgi)
				  teks = `${anu.display_url}`
				  ranp = NumberRandom('.gif')
				  rano = NumberRandom('.webp')
				  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
				  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				nobg = fs.readFileSync(rano)
				reply(mess.wait)
				client.sendMessage(from, nobg, sticker, {
				  quoted: msg
				})
				fs.unlinkSync(rano)
				  })
				
				} else {
				  reply('Gunakan foto!')
				}
				break
				 case 'triggered':
case 'trigger':
reply(dpa.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
owgi = await client.downloadAndSaveMediaMessage(ger)
dpaa = await imgbb('2483de5ac680abacead80f8575f38363', owgi)
ranp = NumberRandom('.gif')
rano = NumberRandom('.webp')
uhyy = `https://some-random-api.ml/canvas/triggered?avatar=${dpaa.display_url}`
exec(`wget ${uhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply()
jadinyaa = fs.readFileSync(rano)
reply(mess.wait)
client.sendMessage(from, jadinyaa, sticker, {quoted: msg})
fs.unlinkSync(rano)
})                  
} else {
reply('Reply Imagenya!!')
}
break
case 'asupan':
reply(mess.wait)
get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=Apikey`)
buffer = await getBuffer(get_result.result)
client.sendMessage(from, buffer, video, { quoted: msg, mimetype: Mimetype.mp4, filename: "asupan.mp4" , caption: 'Follow _zxagung'})
break
case 'neko'://UPDATE zxagung
reply(mess.wait)
anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=neko loli`, {method: 'get'})
naru = JSON.parse(JSON.stringify(anu));
to =  naru[Math.floor(Math.random() * naru.length)];
nye = await getBuffer(to)
client.sendMessage(from, nye, image, { caption: 'kyaa one chan!!', quoted: msg })
break
case 'anime':	
reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            jdidjcjsjsjxj =  Buffer.from(response, 'base64');
            client.sendMessage(from,jdidjcjsjsjxj,image,{quoted:msg,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'loli'://UPDATE zxagung	
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=loli`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: msg }) 
					break
					case 'pictlolicon'://UPDATE zxagung					
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=Loli kawaii`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'One chan >_<', quoted: msg }) 
					break
case 'randomanime'://UPDATE zxagung	
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=anime`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'Nihh', quoted: msg }) 
					break 
case 'waifukawai'://UPDATE zxagung
				    reply(mess.wait)
				    try {
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					client.sendMessage(from, buf, image, {quoted: msg,caption: "KAWAII!!"})
					})})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
client.sendMessage(from, buff, image, {quoted: msg, caption: mess.success}).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}setname Isi* Buat Edit Subjek Grup`)
teks = args.join(' ')
client.groupUpdateSubject(from, teks)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
encmedia = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
client.updateProfilePicture (from, media)
} else {
  reply(`Tag Foto Atau Kirim Foto Caption *${prefix}setpp*`)
}
break
case 'group':
case 'grup':
case 'gc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}grup buka* Untuk Buka Grup dan *${prefix}grup tutup* Untuk Tutup Grup`)
if (body.endsWith('buka')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, false)
}
if (body.endsWith('Buka')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, false)
}
if (body.endsWith('tutup')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
if (body.endsWith('Tutup')){
  client.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
teks = body.slice(9)
client.groupUpdateDescription(from, teks)
break
case 'tagall2':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
reply(teks)
break
case 'tagall3':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
					}
client.sendMessage(from, teks, text, {detectLinks: false, quoted: msg})
break
case 'clearall':
				if (!isGroup) return reply(dpa.groupo)
				anu = await client.chats.all()
				client.setMaxListeners(25)
				for (let _ of anu) {
				client.deleteChat(_.jid)
				}
				reply(dpa.clears)
				break
				case 'addprem':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./owner/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan wa.me/${addp} Ke Daftar Premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(ind.ownerb())
					delp = body.slice(11)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./owner/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
					case 'speed'://UPDATE FIX BUG
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                client.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: msg})
                    break
case 'bc':
if (!isOwner) return
if (args.length < 1) return
anu = await client.chats.all()
if (isMedia && !msg.message.videoMessage || isTagedImage) {
buff = await downloadM()
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}

*_• Broadcast •_*`})
}
reply('Beres Lord Kirim Bc')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}

*_• Broadcast •_*`)
}
reply('Beres Lord Kirim Bc')
}
break
case 'meadmin':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return
if (isGroupAdmins) return reply('Lu Dah Admin Om')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupMakeAdmin(from, [sender])
reply('Sukses')
break
case 'promote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Promote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '*Mengeluarkan :* '
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
					} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
}
break
case 'listadmin':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (isGroupAdmins || isOwner) {
client.groupLeave(from)
 } else {
 reply(mess.only.admin)
 }
 break
 case 'joox':
 if (args.length < 1) return reply('Lagu Yang Dicari Nya Apa? ')
 teks = args.join(' ')
 axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}&apikey=Tobzzz17`).then((res) => {
 if (res.data.error) return reply(res.data.error) 
 if (!res.data.error) reply(`Ditemukan!!`) 
 let hasil = `*Judul:* ${res.data.result.judul} - ${res.data.result.album}
*Album:* ${res.data.result.album}
*Artis:* ${res.data.result.judul}
*Di Upload Pada:* ${res.data.result.dipublikasi}

*_Tunggu Proses Upload......._*`
client.sendMessage(from, { url : res.data.result.thumb }, image, {quoted: msg, caption: hasil})
client.sendMessage(from, { url : res.data.result.mp3 }, document, {mimetype: 'audio/mp3', filename: `${res.data.result.judul} - ${res.data.result.album}.mp3`,quoted: msg})
})
break
case 'tomp3':
case 'toaudio':
if ((isMedia && !msg.message.videoMessage || isTagedVideo)&& args.length == 0) {
reply(mess.wait)
const encmedia = isTagedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await client.downloadAndSaveMediaMessage(encmedia)
const ran = NumberRandom('.mp3')
exec(`ffmpeg -i ${media} -b:a 192K -vn ${ran}`, (err) => {
if (err) return reply('_[ ! ] Error Terjadi Kesalahan Dalam Mengconvert_')
sendFileFromStorage(ran, audio, {mimetype: 'audio/mp4', quoted: msg, filename: ran})
fs.unlinkSync(ran)
fs.unlinkSync(media)
})
} else {
  reply(`_Tag Video Atau Kirim Video Dengan Caption ${prefix}tomp3 Untuk Convert Ke Mp3_`)
}
break
case 'toimg':
case 'toimage':
if (!isTagedSticker) return reply('Tag Stiker Yang Akan Di Jadikan Foto')
reply(mess.wait)
const media = await downloadM('save')
ran = NumberRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('*_• Gagal •_*')
sendFileFromStorage(ran, image, {caption : mess.success, quoted: msg})
fs.unlinkSync(ran)
})
break
case 'ytdesc':
if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
teks = args.join(' ')
res = await yts(teks)
reply(res.all[0].description)
break
case 'tovn':
if (!isTagedAudio) return reply('Tag Audio Yang Mau Di Jadiin Vn')
reply(mess.wait)
aud = await downloadM()
client.sendMessage(from, aud, audio, {mimetype: 'audio/mp4',ptt : true})
break
case 'preview':
if (body.endsWith("-font")) {
if (args.length < 1) return reply('Teks Sama Ukuran Nya Mana? ')
if (!body.includes("|")) return reply(`Ketik *${prefix}preview Teks|Ukuran|Font -font`)
mentah = args.join(' ').replace("-font", "")
teks = mentah.split('|')
if (isNaN(parseInt(teks[1]))) return reply("Pake Angka Gan")
reply(mess.wait)
size = teks[1]
isi = teks[0]
res = await dafontSearch(teks[2])
a = res[0]
result = `❒「  *${botname}*  」
├ *Judul :* ${a.judul}
├ *Style :* ${a.style}
└ *Link :* ${a.link}
`
reply(result)
res = await dafontDown(a.link) 
bup = await getBuffer(res[0].down)
const hasil = await fs.writeFileSync(res[0].output, bup)
exec(`unzip ${res[0].output}`, (err) => {
if (err) return
fs.unlinkSync(res[0].output)
font = `./${res[0].isi[0]}.ttf`
exec(`magick 'blank.png' -gravity center -fill '#ffff' -font '${font}' -size 1280x710 -pointsize ${size} -interline-spacing 7.5 -annotate 0 '${isi}' 'quotes.jpg'`, (err) => {
if (err) return reply('err') 
sendFileFromStorage('quotes.jpg', image,{quoted: msg})
fs.unlinkSync('quotes.jpg')
fs.unlinkSync(font)
})
})
return
}
if(!isTagedDocument) return reply('Tag font Yang Akan Di Jadikan Foto')
if (args.length < 1) return reply('Teks Sama Ukuran Nya Mana? ')
if (!body.includes("|")) return reply(`Ketik *${prefix}preview Teks|Ukuran* Sambil Tag Font`)
mentah = args.join(' ')
teks = mentah.split('|')
if (isNaN(parseInt(teks[1]))) return reply("Pake Angka Gan")
reply(mess.wait)
font = await downloadM('save')
size = teks[1]
isi = teks[0]
exec(`magick 'blank.png' -gravity center -fill '#ffff' -font '${font}' -size 1280x710 -pointsize ${size} -interline-spacing 7.5 -annotate 0 '${isi}' 'quotes.jpg'`, (err) => {
if (err) return reply('err') 
sendFileFromStorage('quotes.jpg', image,{quoted: msg})
fs.unlinkSync('quotes.jpg')
fs.unlinkSync(font)
})
break
case 'owner':
case 'creator':
client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: msg})
client.sendMessage(from, 'Ini owner saya Jangan spam...',MessageType.text, { quoted: msg})                
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Udah aktif um')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✓')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'lirik':
if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `❒「  *${botname}*  」
└ *Lirik Lagu :*


${res[0].result}
`
reply(lirik)
})
break
case '>':
if (!isOwner) return
var konsol = args.join(' ')
function _return(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
  err = String(e)
  reply(err)
}
break
case '$':
if (!isOwner) return 
const cod = args.join(' ')
exec(cod, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
break
case 'shutdown':
if (!isOwner) return reply(mess.only.ownerB)
reply('Shutdown Bot In 3 Second....') 
setTimeout( () => {
client.close() }, 3000)
break
case 'wait':
if ((isMedia && !msg.message.videoMessage || isTagedImage) && args.length == 0) {
reply(mess.wait)
bang = isTagedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
foto = await client.downloadMediaMessage(bang)
await wait(foto).then(res => {
client.sendMessage(from, res.video, video, {quoted: msg, caption: res.teks.trim()})
}).catch(err => {
reply(err)
})
} else {
reply(`Kirim Foto Dengan Caption *${prefix}wait* Untuk Mencari Anime Dari Foto`)
}
break
default:
if (budy.includes(`@6289655478810`)) {
                  reply(`Jangan Tag Agungx Kak, Dia Lagi Sibuk ✨`)
                  }
if (budy.includes(`@6289655478810`)) {
                  reply(`Jangan Tag Agungx Kak, Dia Lagi Sibuk ✨`)
                  }
                  if (budy.includes(`@6289655478810`)) {
                const loliio = fs.readFileSync('./loli/arigatou.mp3');
                client.sendMessage(from, loliio, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
                  }
                  
if (waktu == 205300) {
  res = await newsCnn('nasional')
  data = res.slice(0, 5)
  for (let a of data){
  isi = `${a.judul}
  
_Info Lebih Lanjut >>_ ${a.link}`
  buf = await getBuffer(a.thumb)
 return client.sendMessage("13479919177-1603694135@g.us", buf, image, {caption: isi})
  }
}
if (isSimi && bodi != undefined){
 res = await axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${bodi}`)
 reply(res.data.result)
}
if (bodi.startsWith('$')){
if (!isOwner) return 
var konsol = bodi.slice(1)
exec(konsol, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
} 
if (bodi.startsWith('>')){
if (!isOwner) return
var konsol = bodi.slice(1)
function _return(sul) {
var sat = JSON.stringify(sul, null, 2)
var bang = util.format(sat)
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
  err = String(e)
  reply(err)
}
} else {
if (bodi != undefined) {
console.log('>', '[',color('INFO','red'),']',`Message : ${bodi} From`, color(sender.split('@')[0]))
}
if (isGroup && isAntiLink && isUrl(bodi) && !isGroupAdmins && bodi != undefined) {
var sial = sender.split('@')[0] + "@s.whatsapp.net"
client.groupRemove(from, [sial])
} 
}
if (!bodi.startsWith('$')) return
if (!bodi.startsWith('>')) return
}
} catch (e) {
const emror = String(e)
if (emror.includes('startsWith')){ 
return
}
if (emror.includes('this.isZero')){
return
}
console.log('Error : %s', color(e, 'red'))
console.log(e)
}
})
}
starts()
