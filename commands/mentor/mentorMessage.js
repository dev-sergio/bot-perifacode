const { MessageEmbed } = require('discord.js');

module.exports = (emoji) => new MessageEmbed()
  .setTitle('👩🏽‍💻 Quais os temas que você deseja receber/oferecer mentorias? 👨🏽‍💻')
  .setDescription(`
    0️⃣ - Front-end
    1️⃣ - Back-end
    2️⃣ - Data Science
    3️⃣ - Javascript
    4️⃣ - Java
    5️⃣ - Python
    6️⃣ - C#
    7️⃣ - Android
    8️⃣ - NodeJS
    9️⃣ - Ruby
    🔟 - DevOps
    
    ${emoji} - Pronto

    `)
    .setFooter('Criado com 💛 pela comunidade perifaCode')
    .setColor('#fff200');