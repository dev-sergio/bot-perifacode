const { MessageEmbed } = require('discord.js');

module.exports = function site(msg) {
  if (msg.content === '!plantao' || msg.content === '!plantoes') {
    const embed = new MessageEmbed()
      .setTitle('🌎 Plantões da perifaCode 🌎')
      .setDescription(`
      👉🏼 Segunda (21h30) - PHP
      👉🏼 Quarta (20h) - Java
      👉🏼 Sexta (20h) - C#
      👉🏼 Domingo (16h) - Javascript

      ⚠ Caso esteja querendo puxar o plantão de alguma outra linguagem, tecnologia, ou qualquer coisa, entrar em contato com um organizador.
      `)
      .setFooter('Criado com 💛 pela comunidade perifaCode')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};
