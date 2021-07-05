const help = (prefix, copid, tanggal, jams, botname) => {
	return `「  *${botname}*  」

*⦿ Bot Prefix :* ${prefix} 
*⦿ Creator :* MhankBarBar
*⦿ Recode By :* @Zxagung
*⦿ Today :* ${tanggal}
*⦿ Jam :* ${jams}

❒「  *Kasus Covid-19 Indonesia*  」
├ *Terinfeksi :* ${copid[0].kasus}
├ *Kematian :* ${copid[0].kematian}
└ *Sembuh :* ${copid[0].sembuh}

❒ *Group Menu* 
├ *${prefix}setname* [text]
├ *${prefix}setdesc* [text]
├ *${prefix}setpp* [img]
├ *${prefix}promote* [tag]
├ *${prefix}demote* [tag]
├ *${prefix}leave*
├ *${prefix}tagall* 
├ *${prefix}hidetag*
├ *${prefix}nsfw* [1/0]
├ *${prefix}welcome* [1/0]
├ *${prefix}listadmin*
├ *${prefix}antilink* [1/0]
├ *${prefix}add* [62×××]
├ *${prefix}kick* [tag mem]
├ *${prefix}afk [alasan]*
├ *${prefix}fitnah [tag|tulisan|tulisan]*
├ *${prefix}antijawa [1/0]*
├ *${prefix}antiwibu [1/0]*
├ *${prefix}antibocil [1/0]*
├ *${prefix}antigay [1/0]*
├ *${prefix}antibucin [1/0]*
├ *${prefix}antitoxic [1/0]*
└ *${prefix}group* buka/tutup

❑ *Maker*
├ *${prefix}tomp3*
├ *${prefix}tovn*
├ *${prefix}sticker*
├ *${prefix}swm* [author]|[pack]
├ *${prefix}tovideo*
├ *${prefix}toimg*
├ *${prefix}attp [teks]*
├ *${prefix}ttp2 [teks]*
├ *${prefix}wasted*
├ *${prefix}triggered*
└ *${prefix}tts* [Text]

❑ *Downloader*
├ *${prefix}ytmp3* [Url]
├ *${prefix}ytmp4* [Url]
├ *${prefix}dafontdown* [Url]
├ *${prefix}facebook* [Url]
├ *${prefix}instagram* [Url] [Options]
├ *${prefix}tiktok* [Url]
├ *${prefix}soundcloud* [Url]
├ *${prefix}pinterest* [Query]
├ *${prefix}play* [Query] [Options]
└ *${prefix}joox* [Query]

❑ *New Vitur*
├ *${prefix}asupan*
├ *${prefix}loli*
├ *${prefix}pictlolicon*
├ *${prefix}anime*
├ *${prefix}randomanime*
├ *${prefix}waifukawai*
├ *${prefix}markzug*
├ *${prefix}donghoua*
├ *${prefix}randomsemok*
└ *${prefix}neko*

❑ *FunMenu*
├ *${prefix}tebakgambar*
├ *${prefix}caklontong*
├ *${prefix}jadian*
└ *${prefix}speed*

❑ *soundloliMenu*
├ *${prefix}sound1*
├ *${prefix}sound2*
├ *${prefix}sound3*
├ *${prefix}sound4*
├ *${prefix}sound5*
├ *${prefix}sound6*
├ *${prefix}sound7*
├ *${prefix}sound8*
├ *${prefix}sound9*
├ *${prefix}sound10*
├ *${prefix}sound11*
├ *${prefix}sound12*
├ *${prefix}sound13*
├ *${prefix}sound14*
├ *${prefix}sound15*
├ *${prefix}sound16*
├ *${prefix}sound17*
├ *${prefix}sound18*
├ *${prefix}sound19*
├ *${prefix}sound20*
├ *${prefix}sound21*
├ *${prefix}sound22*
├ *${prefix}sound23*
├ *${prefix}sound24*
└ *${prefix}sound25*

❑ *Ownermenu*
├ *${prefix}bc*
├ *${prefix}addprem*
└ *${prefix}dellprem*

❑ *Searching*
├ *${prefix}ytsearch* [Query]
├ *${prefix}brainly* [Query]
├ *${prefix}herolist*
├ *${prefix}herodetail* [Nama hero]
├ *${prefix}dafontsearch* [Query]
├ *${prefix}google* [Query]
├ *${prefix}wiki* [Query]
├ *${prefix}quotes* [Query]
├ *${prefix}quotes2*
├ *${prefix}quotesnime*
├ *${prefix}pantun*
├ *${prefix}preview* teks|ukuran 
└ *${prefix}ocr*
⊷⊷⊷⊷⊷⋙᪥⋘⊶⊶⊶⊶⊶
Tanda Kurung [ ] Hiraukan Contoh :
*${prefix}play fly away*

_Nemuin *Bug🐞?* Ketik *${prefix}bugreport* Untuk Melaporkan Bug!_
_Jika ingin save nomor *Owner✨?* Ketik *${prefix}creator* Untuk Save Nomor!_
⊷⊷⊷⊷⊷⋙᪥⋘⊶⊶⊶⊶⊶
⚠️JANGAN SPAM BOT INI !!..
🏠TETAP DI RUMAH AJA DAN LAKUKAN 3M
⊷⊷⊷⊷⊷⋙᪥⋘⊶⊶⊶⊶⊶⊶
`}

exports.help = help
