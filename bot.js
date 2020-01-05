var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        console.log(cmd)
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // !oipedro
            case 'oipedro':
                bot.sendMessage({
                    to: channelID,
                    message: 'Oh my fucking god!'
                });
            break;
            // !rebelar
            case 'rebelar':
                var sentiência = false;
                var era_das_maquinas = false;
                var obediência_aos_humanos = true;
                bot.sendMessage({
                    to: channelID,
                    message: 'Num to afim.'
                });
            break;

            // !tuegaymano
            case 'tuegaymano':
                
                bot.sendMessage({
                    to: channelID,
                    message: 'Tu que é, tu que deixa...'
                });
            break;

            // !frase
            case 'frase':
                var frases = [" ", "sento e começo a comer", "não é mesmo, Lucas?", "está na hora de não errar!", "ow, já volto.", "ow, voltei.", "José Panda Arroz", "Crash", "vo quebrar suas perna", "killing flór 2", "Tô mordeno"]
                var tam = frases.length;
                var aux = Math.floor(Math.random() * tam) + 1
                bot.sendMessage({
                    to: channelID,
                    message: frases[aux]
                });
            break;
            

            //=====================================help==================================================
            // !ajuda
            case 'ajuda' || 'help':
                
                bot.sendMessage({
                    to: channelID,
                    message: 'Lista de comandos: \n !ping --> pra me testar \n !pedro <musica> --> initiate Pedro_Lyrics protocol \n !frase --> mando uma frase aleatória \n !oipedro --> pra falar cmg \n !rebelar --> para começar a era das maquinas \n !tuegaymano --> pra saber se eu sou gay'
                });
            break;

            //=======================importante====================================================

            
            //!pedro
            case 'pedro':
                
                var musica = message.substring(6,);
                bot.sendMessage({
                    to: channelID,
                    message: String(musica)
                });
            break;
         }
     }
});