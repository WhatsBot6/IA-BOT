import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*enter a request or an order to use the chatgpt*\n\n*ββ π΄xample*\n*β ${usedPrefix + command}series 2022  netflix*\n*β ${usedPrefix + command} write a js code*`
try {
m.reply(`*Fon ti tann me bro*`)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*π΄πππΎπ*`
}}
handler.command = ['bro', 'chatgpt', 'ia', 'siri']
export default handler
