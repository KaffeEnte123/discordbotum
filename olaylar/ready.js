const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Destek sunucumuz saldırıya uğradı sunucumuza gelmek için /desteksunucum yazabilirsiniz",
        "Destek sunucumuz saldırıya uğradı sunucumuza gelmek için /desteksunucum yazabilirsiniz",
        "?? 7/24 Aktif!",  
        "?? /davet | Botumuzu ekleyin",
        "?? 35.000 Kullanıcı!",
        "?? 115 Sunucuda Hizmet!",
        "/yardım ?? + /davet ?? + /otorol"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "");
        }, 2 * 2500);
}
??
36
??
10
??
2
