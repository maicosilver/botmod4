let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Termos e Condições do Bot *KAMI*
1. O texto e seu nome de usuário do WhatsApp serão armazenados no servidor enquanto o bot estiver ativo
2. Os dados serão excluídos quando o bot estiver offline
3. Não armazenamos fotos, vídeos, arquivos, áudios e documentos que você envia
4. Nunca pediremos que você forneça informações pessoais
5. Se você encontrar um bug / erro, informe-o diretamente ao proprietário do bot
6. O que quer que você peça neste bot, NÃO SEREMOS RESPONSÁVEIS!

Obrigado!
2021 © 
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

