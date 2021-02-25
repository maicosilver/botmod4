let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['sexualidade']
handler.tags = ['Tools']
handler.command = /^(sexualidade)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
   Você é 1% homem,
   Você é 2% mulher,
   Você é 99% analmente ativo,
   Você é 73% queimador de rosca,
   Você é mais gay do que eu,
   Você é 75% mais gay que clodovil,
   Você é 76% lésbica,
   Você é 500% gay, 
   Você é 77% bicicleta-suxual,
   Você é 78% bissexual,
   Você é 79% transgenero,
   Você é 80% queer, 
   Você é 81% intersexual, 
   Você é 82% pedro-sexual,
   Você é 83 negrosexual, 
   Você é 84 helicoptero sexual,
   Você é 85 androgino,
   Você é 86 assexual, 
   Você é 87 macaco-sexual, 
   Você é 88 dedo-sexual, 
   Você é 89 Sexo-Inexplicavel,
   Você é 90 predio-sexual, 
   Você é 91 sexual-não-sexual,
   Você é 92 pansexual, 
   Você é 93% kiko-sexual, 
   Você é 94% incestuoso, 
   Você é 95% comedor-de-casadas,
   Você é 96% unicornio-sexual,
   Você é 97% maniaco-sexual,
   Você é 14% agenero,
   Você é 98% baitola,
   Você é 100% gay
]
