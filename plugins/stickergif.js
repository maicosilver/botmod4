const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, args }) => {
  let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted }} : m
  if (/image/.test((m.quoted ? m.quoted : m).mtype)) {
    let img = await conn.downloadM(q)
    if (!img) throw img
    let stiker = await sticker(img)
stiker = await nStiker(stiker, {
 author: '9672-4995',
 name: 'nokia'
})
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } else if (args[0]) {
    let stiker = await sticker(false, args[0])
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.command = /^stic?kergif$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
