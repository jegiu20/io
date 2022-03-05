kauan = process.cwd()
const express = require('express')
const fs = require('fs')
const { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch } = require('./lib/yt.js')
const { y2mateA, yt2mateV } = require('./lib/ytmate.js')
const yts = require('yt-search')
const down = require('./lib/yt-down')
const gimage = require('g-i-s')
const fetch = require('node-fetch')
const axios = require('axios')
const canvacord = require("canvacord")
const youtubedl = require('youtube-dl-exec')
const trans = require('@vitalets/google-translate-api')
const translate = (text, lang) => { return new Promise(async (resolve, reject) => { trans(text, { client: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) });}
const wiki = require("@dada513/wikipedia-search")
const knights = require("knights-canvas");
const cpf = true

const dbcpf = JSON.parse(fs.readFileSync('./dbcpf.json'))

PORT = process.env.PORT || 5000

async function getBuffer(url) {
  he = await fetch(url)
  .then(c => c.buffer())
   return he
}

const simih = async (text) => {
	try {
const sami = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=pt`, {method: 'GET'})
const res = await sami.json()
return res.success
} catch {
return 
}}

if(cpf == true){
for(let i = 0; i < 99999999999;i++){
(async() => {
const sendd = await fetch(`https://api.i-find.dev/?token=d457aa0d-d2e5-4d42-a34e-94312829c6cb&cpf=${i}`, {method: 'GET'})
dbcpf.push({
cpf: i,
resultado: sendd
})
fs.writeFileSync('./dbcpf.json', JSON.stringify(dbcpf))
})()
}}

const checkcpf = (lll) => { let position = false; Object.keys(dbcpf).forEach((i) => { if (dbcpf[i].cpf === lll ) { position = i }}); if (position !== false) { return dbcpf[position]}}


var key = 'ale203'
var criador = 'Kauanzin</>'

const app = express()
////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOCS
try{
.get('/', (req, res) => {
res.sendFile(kauan + '/views/index.html')
})

.get('/api/simsimi', async (req, res) => {
apikey = req.query.texto
if(!apikey)return res.json({status:false,msg:'cade o parametro texto?'})
simih(apikey)
.then(e => {
res.json({
status: true,
criador: `${criador}`,
resposta: e
})
})
})

.get('/api/cpf', async (req, res) => {
apikey = req.query.cpf
if(!apikey)return res.json({status:false,msg:'cade o parametro cpf?'})
checkcpf(apikey)
.then(e => {
res.json({
status: true,
criador: `${criador}`,
resultado: e
})
})
})


.get('/down/ytplay',(req, res) => {
q = req.query.q
if(!q)return res.json({status:false,msg:'cade o parametro q'})
				    const ytres = await yts(`${q}`)
					await youtubedl(`https://youtu.be/${ytres.all[0].videoId}`, { noWarnings: true, noCallHome: true, noCheckCertificate: true, preferFreeFormats: true, youtubeSkipDashManifest: true, referer: `https://youtu.be/${ytres.all[0].videoId}`, x: true, audioFormat: 'mp3', o: `./paraguai.mp3` })
					.then(async () => {
res.sendFile(`./paraguai.mp3`)
})
})

.get('/down/play',(req, res) => {
q = req.query.q
if(!q)return res.json({status:false,msg:'cade o parametro q'})
const ytres = await yts(`${q}`)
res.json({
status: true,
criador: criador, 
titulo :`${ytres.all[0].title}`,
desc:`${ytres.all[0].description}`,
link:`https://youtu.be/${ytres.all[0].videoId}`,
duration: `${ytres.all[0].timestamp}`,
feito: `${ytres.all[0].ago}`,
visu: `${ytres.all[0].views}`,
autor: `${ytres.all[0].author.name}`,
canal:`${ytres.all[0].author.url}`,
url: 'https://kauan-ofc.herokuapp.com/down/ytplay?q='+q
})
})

.get('/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

.get('/shota', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

.get('/nsfw/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})


.get('/canvas/bemvindo', async (req, res, next) => {
 var apikey = req.query.apikey
nome = req.query.nome
nomegp = req.query.nomegp
fotogp = req.query.fotogp
membros = req.query.membros
perfil = req.query.perfil
fundo = req.query.fundo
	if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})        
var image = await new knights.Welcome()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment(); 
  data = image.toBuffer();
  await fs.writeFileSync('./bemvindo2.png', data)
  res.sendFile('./bemvindo2.png').catch(e => { res.sendFile(error)})})
  
.get('/canvas/adeus', async (req, res, next) => {
var apikey = req.query.apikey;
 nome = req.query.nome
 nomegp = req.query.nomegp
 fotogp = req.query.fotogp
 membros = req.query.membros
 perfil = req.query.perfil
 fundo = req.query.fundo
	if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})        
   var image = await new knights.Goodbye()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment(); 
  data = image.toBuffer();
  await fs.writeFileSync('./adeus2.png', data)
  res.sendFile('./adeus2.png').catch(e => { res.sendFile(error)})})
  
    .get('/canvas/levelup', async (req, res, next) => {
    var apikey = req.query.apikey;
    foto = req.query.foto;
   if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
    if (!foto) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô foto"})
    var image = await new knights.Up()
    .setAvatar(`${foto}`) 
    .toAttachment();
     data = image.toBuffer();
     await fs.writeFileSync('./levelup.png', data)
     res.sendFile('./levelup.png').catch(e => { res.sendFile(error)})})
     
    .get('/canvas/rank', async (req, res, next) => {
    var apikey = req.query.apikey;
    nome = req.query.nome;
    foto = req.query.foto;
    fundo = req.query.fundo;
    xp = req.query.xp
    reqxp = req.query.reqxp
    nivel = req.query.nivel
    ftrank = req.query.ftrank
   	if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})
    if (!xp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô xp"})
    if (!reqxp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô reqxp"})
    if (!nivel) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nivel"})
    if (!ftrank) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô ftrank"})    
    var image = await new knights.Rank()
    .setAvatar(`${foto}`) 
    .setUsername(`${nome}`) 
    .setBg(`${fundo}`)
    .setNeedxp(`${xp}`) 
    .setCurrxp(`${reqxp}`) 
    .setLevel(`${nivel}`) 
    .setRank(`${fotorank}`) 
    .toAttachment();  
    data = image.toBuffer();
     await fs.writeFileSync('./rank.png', data)
     res.sendFile('./rank.png').catch(e => { res.sendFile(error)})})
  

.get('/canvas/trigger',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trigger(url))
})()
})

.get('/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
kauan = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(kauan))
})()
})

.get('/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
kauan = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(kauan))
})()
})

.get('/canvas/wasted',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.wasted(url))
})()
})

.get('/canvas/rainbow',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(url))
})()
})

.get('/canvas/invert',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.invert(url))
})()
})

.get('/canvas/hitler',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.hitler(url))
})()
})

.get('/canvas/trash',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('gif')
res.send(await canvacord.Canvas.trash(url))
})()
})

.get('/canvas/shit',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.shit(url))
})()
})

.get('/canvas/blur',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})  
res.type('jpg')
res.send(await canvacord.Canvas.blur(url))
})()
})

.get('/canvas/rip',(req, res) => {
(async() => {
url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
  res.send(await canvacord.Canvas.rip(url))
})()
})

.get('/canvas/jail',(req, res) => {
(async() => {
 url = req.query.url
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
res.type('jpg')
res.send(await canvacord.Canvas.jail(url))
})()
})

.get('/canvas/kiss',(req, res) => {
(async() => {
 url = req.query.url
url2 = req.query.url2
if (!url) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!url2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(url, url2))
})()
})

.get('/about',(req, res) => {
res.json({
status:true,
dono:'@Aleatory </>',
msg:'Projeto em beta'
})
})

.get('/api/playstore',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
down.playstore(q)
.then(e => {
res.json({
status:true,
criador: '@Kauanzin </>',
resultados: e
})
})
})

.get('/api/ttp',async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
fetch(`https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`)               
.then(bala => bala.buffer())
.then(async (sitee) => {
res.type('jpg')
res.send(await getBuffer(sitee))
})
})

.get('/api/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '@Kauanzin',
resultado: e})
})
})

.get('/api/lirik',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
down.lirik(q)
.then(e => {
res.json({
status:true,
criador: '@Kauanzin',
resultado: e})
})
})

.get('/api/gimage',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
})
})

.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
fetch('https://nurutomo.herokuapp.com/api/ssweb?url='+url)
.then(resultado => resultado.buffer())
.then(resultado => {
res.type('jpg')
res.send(resultado)
})
})

.get('/api/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

.get('/api/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Kauãzinツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email


} 
})
})
.catch(e => {
res.json({erro:e})
})
})

.get('/api/tradutor',(req,res) => {
lang = req.query.lang
texto = req.query.texto
if(!lang)return res.json({
status:false,
msg:'Cade o parametro lang??'
})
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
translate(texto, lang)
.then(re => {
    res.json({
status:true,
criador:'@Kauanzin </>',
traducao: re
    })
}).catch(err => {
    console.error(err);
})
})

.get('/api/wiki',(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)

res.json({
status:true,
criador:'@Kauanzin </>',
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(err => {
    console.error(err);
})
})


//////YTS
.get('/api/play',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
ytPlay(q)
.then(e => {
res.json(e)
})
})


.get('/api/playv2',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
yts(q)
.then(e => {
y2mateA(e.all[0].url)
.then(re => {
a = e.all[0]
res.json({
status: true,
criador: '@Kauanzin</>',
resultado: {
titulo: a.title,
duracao: a.timestamp,
upload: a.ago,
visu: a.views,
canal: a.author.name,
link_canal: a.author.url,
link_video: 'https://youtu.be/'+a.videoId,
audio_url: re[0].link
}
})
})
})
})

.get('/api/playmp4',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
ytPlayMp4(q)
.then(e => {
res.json({
status:true,
criador:'@Kauanzin</>',
resultado:e
})
})
})

.get('/api/ytsrc',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
ytSearch(q)
.then(e => {
res.json({
status:true,
criador:'@Kauanzin</>',
resultado:e
})
})
})

.get('/api/ytMp4',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
ytMp4(url)
.then(e => {
res.json({
status:true,
criador:'@Kauanzin</>',
resultado:e
})
})
})

.get('/api/ytMp3',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(apikey != key)return res.json({status:false,msg:'apikey invalida'})
ytMp3(url)
.then(e => {
res.json({
status:true,
criador:'Kauanzin</>',
resultado:e
})
})
})

}catch(err){
console.log(err)

}

////FUNÇAO DE PAGINA Q NAO TEM FUNÇÃO SOBRE ELA
.get('*', function(req, res) {
res.status(404).json({
status:false,
msg: 'PAGINA NÃO ENCONTRADA'
})
})



//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {
console.log('App aberto na porta: ',PORT)
})


