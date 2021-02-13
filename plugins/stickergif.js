const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

if (mute || pvmte) return console.log('Ignorando comando [Silence]')
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 15 || mimetype === 'image/gif' && message.duration < 15) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=15 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! A conversão obteve erros, talvez seja o tamanho do gif ou seu peso.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Caso receba isso considere 2 motivos.\n\n1 - Isso não é um gif ou video.\n\n2 - O gif ou video tem mais de 15 segundos, passando do limite que posso converter`, id)
                }
            } else if (quotedMsg) {
                if (quotedMsg.mimetype == 'video/mp4' && quotedMsg.duration < 15 || quotedMsg.mimetype == 'image/gif' && quotedMsg.duration < 15) {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                    kill.reply(from, mess.wait, id)
                    var filename = `./lib/media/stickergif.${quotedMsg.mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./lib/media/stickergf.gif --fps=15 --scale=256:256`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./lib/media/stickergf.gif', { encoding: "base64" })
                        await kill.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            kill.reply(from, 'Aff! A conversão obteve erros, talvez seja o tamanho do gif ou seu peso.', id)
                        })
                    })
                } else {
                    kill.reply(from, `Caso receba isso considere 2 motivos.\n\n1 - Isso não é um gif ou video.\n\n2 - O gif ou video tem mais de 15 segundos, passando do limite que posso converter.`, id)
                }
			} else {
                kill.reply(from, mess.error.St, id)
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
