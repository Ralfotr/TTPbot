//©raltec 2019

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    let ttpTestChannel = client.channels.get("642490607079653416")
    ttpTestChannel.send("Bot restarted - " + Date())
    client.user.setActivity('with a Tatra T6B5SU', { type: 'PLAYING' }); //PLAYING / STREAMING / LISTENING / WATCHING         MAINTENANCE
    client.user.setStatus('online') //online - user is online / idle - user is AFK / offline - user is offline or invisible / dnd - user is in Do Not Disturb
});

client.on('message', message => {
    if (message.guild === null) {
        //space for dm commands
    } else {
	    if (message.content.startsWith('/help')) {
			if (message.content != '/help') {
				var reason = message.content.slice(6);
				message.guild.createChannel('test', {type: 'text'}).then(newchannel => {
					newchannel.setParent('669536429189365761')
					newchannel.send("**Help request opened - " + Date() + "**\nAuthor: " + message.author + "\nQuestion or reason for requesting help: ``" + message.content.substr(5) + "``\n<@&669535649409269770>");
				})
			} else {
				message.channel.send('❗ Enter valid question or reason for requesting help   ``/help [question/reason]``');
			}
		}
       if (message.content == '/results') {
            let ttpResultsChannel = client.channels.get("662034469708103690")
			var temp
		   	ttpResultsChannel.fetchMessage('662034597508546582').then(results => {
				var resultSplit = results.content.split("{}")
				var userIDposition = resultSplit.indexOf(message.author.id)
				if (userIDposition == -1) {
					message.channel.send("❗ Application not found. If you applied, contact an Administrator for support.")
				} else {
					var userID = resultSplit[userIDposition]
					var mark = resultSplit[userIDposition+1]
					var comment = resultSplit[userIDposition+2]
					var role = resultSplit[userIDposition+3]
					var specialRole = "Feel free to re-apply next time we're hiring!"
					if (mark == "PASSED") {
						var specialRole = "You have been automaticially roled"
						if (role == "Tram Driver") {
							message.member.addRole('641984034397749258') //Staff
							message.member.addRole('645398767633170462') //LR
							message.member.addRole('643841138482216979') //Passenger Service
							message.member.addRole('642382484968833024') //Tram Driver
						} else {
							if (role == "Technician") {
								message.member.addRole('641984034397749258') //Staff
								message.member.addRole('645398767633170462') //LR
								message.member.addRole('643841189669240852') //Fleet Service
								message.member.addRole('642478589186408470') //Technician
							} else {
								if (role == "Dispatcher") {
									message.member.addRole('641984034397749258') //Staff
									message.member.addRole('645398767633170462') //LR
									message.member.addRole('643841357248724992') //Dispatch Service
									var specialRole = "❗ Please contact the Chief Central Dispatcher to get ranked Station or Central Dispatcher." 
								} else {
									var specialRole = "❗ We had trouble automaticially adding you roles. Please contact an administrator to role you."
								}
							}
						}
					}
					var color
					message.channel.send("Results sent, check your DMs!")
					if (mark == "PASSED") {
						color = '#008000'
					} else {
						color = '#800000'
					}
					const resultsEmbed = new Discord.RichEmbed()
					.setColor(color)
					.setTitle('Application results')
					.setDescription(mark)
					.addField('User ID', userID)
					.addField('Notes', "Applied for: " + role + "\n" + comment)
					.addField(specialRole, "─────────────────────")
					.setTimestamp()
					.setFooter('TRAMVAJU UN TROLEJBUSU PĀRVALDE', 'https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png');

					message.author.send(resultsEmbed);
				}
        	})
        }
        if (message.content == 'ping?') {
            if (message.author.id == 179654608371712000) {
                message.react('❤️')
                message.channel.send("🏓")
                message.channel.send("*** Pong!***");
                } else {        
                    var a = ['no', 'leave me alone', 'you aint worth my time', 'why do u even want ur ping', 'ask another bot im busy', 'not you again', 'god help me', '*Ping Service 1x* has been added to your cart\nNew Total: € 6.90', 'noobs doesnt even have a ping', '**666 ms!** ***Burn in hell!***', 'GET LOST', 'im tired of you', 'idk', 'you get coal from me this christmas, only normal people get a ping present', 'This is a Premium feature! You are too poor to afford Premium of such cool bot!']
                    message.react('⛔')
                    message.channel.send(a[Math.floor(Math.random() * a.length)]);
                }
            }
        if (message.content == '/cmds') {
            message.channel.send('Due to budget cuts, this command has been disabled\nWe apologise for any inconvenience caused', {files: ['https://cdn.drawception.com/drawings/LrK4OWAvPQ.png']});
        }
        if (message.content.startsWith('/ttp')) {
            var lang = message.content.split(" ");
            if (lang[1] == 'lv') {
                message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n────────────────────────────\nDibināta 1944.gada oktobrī kā Rīgas pilsētas darbaļaužu deputātu padomes IK Rīgas pilsētas satiksmes un transporta pārvalde.\n\nNo 19.01.1945.g. pārvalde tiek pārdēvēta par Rīgas pilsētas satiksmes un transporta trestu.\n\nNo 01.01.1955.g. trests tiek pārdēvēts par Rīgas pilsētas tramvaju un trolejbusu trestu.\n\nNo 30.12.1961.g. trests pārdēvēts par Tramvaju un trolejbusu pārvaldi.\n\nNo 1991.g. Rīgas pilsētas pašvaldības uzņēmums 'Tramvaju un trolejbusu pārvalde'.\n\nSaskaņā ar RD lēmumu Nr.3171 'Par SIA 'Tramvaju un trolejbusu pārvalde' pievienošanu SIA 'Rīgas satiksme'' un SIA 'Rīgas satiksme' dalībnieku 23.09.2004. kopsapulces lēmumu pievienota SIA 'Rīgas satiksme'.\n\n\n``LATVIJAS VALSTS ARHĪVS``\n``http://www.archiv.org.lv/index3.php?id=9009&kods=300107303&vien=2``", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
            } else {
                if (lang[1] == 'en') {
                    message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n( *Tram and Trolleybus Management* )\n────────────────────────────\nEstablished in October 1944 as the 'Riga City Traffic and Transport Department' of the Riga City Workers Deputy Council.\n\n01/19/1945 - renamed to 'Riga City Traffic and Transport Trust'.\n\n01/01/1955 - renamed to 'Riga City Tram and Trolleybus Trust'.\n\n12/30/1961 - renamed to 'Tram and Trolleybus Management'.\n\nSince 1991 - Riga City Municipal Enterprise (Rīgas domes SIA) 'Tram and Trolley Management'.\n\nFollowing Riga Council Resolution No. 3171 on the 'incorporation of 'Tram and Trolley Management' into the members of SIA 'Rīgas satiksme'' and SIA 'Rīgas satiksme' 23.09.2004. the decision of the Board Meeting was attached to SIA 'Rīgas satiksme'.\n\n\n`Translated LV --> EN; ralfotr`", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
                } else {
                    if (lang[1] == 'lt') {
                    message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n( *Tramvajų ir troleibusų vadyba* )\n────────────────────────────\nĮkurtas 1944 Spalį 'Rygos miesto ir transporto departamentas' Rygos Miesto Darbininkų taryboje.\n\n01/19/1945 pervadintas į 'Rygos Miesto eismo ir transporto vadyba'\n\n01/01/1955 pervadintas į 'Rygos Miesto tramvajų ir troleibusų vadyba'\n\n12/30/1961 - pervadintas į 'Tramvajų ir Troleibusų vadyba'\n\nNuo 1991-  Rygos Miesto Savivaldybės įmonė (Rīgas domes SIA)\n\nRygos miesto savivaldybės nutarimu Nr. 3171, bendrovė 'Tramvajų ir troleibusų vadyba' 2004 metų rugsėjo 23 dieną buvo prijungta į vieną įmonę- 'Rygos eismas' SIA 'Rīgas satiksme'.\n\n\n`Translated EN --> LT; SlayerzPlayz`", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
                    } else {
                        if (lang[1] == 'pl') {
                            message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n( *Zarząd Tramwajów i Trolejbusów* )\n────────────────────────────\nUtworzony w październiku 1944 r. jako 'Wydział Ruchu i Transportu Miasta Rygi', będący częścią Rady Ryskich Pracowników Miejskich.\n\n01/19/1945 r. - przemianowany został na 'Urząd ds. Ruchu i Komunikacji Miejskiej w Rydze'.\n\n01/01/1955 - przemianowany został na 'Urząd ds. Ryskich Tramwajów i Trolejbusów'.\n\n12/30/1961 - przemianowany został na 'Zarząd Tramwajów i Trolejbusów'.\n\nOd 1991 r. do teraz - Miejske Przedsiębiorstwo Komunalne Miasta Rygi (Rīgas domes SIA) 'Zarząd Tramwajów i Trolejbusów'.\n\nJako następstwo uchwały Rady Rygi nr 3171 w sprawie 'włączenia zarządzania tramwajami i trolejbusami do członków SIA Rīgas satiksme' z dnia 23 września 2004 r. decyzja zarządu została dołączona do istniejącego SIA 'Rīgas satiksme'.\n\n\n`Translated EN --> PL; sthakrk`", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
                        } else {
                            if (lang[1] == 'de') {
                                message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n( *Straßenbahn und Oberleitungs Verwaltung* )\n────────────────────────────\nBegründet im Oktober 1944 als die 'Riga Stadt Verkehr und Transport Abteilung von die Riga Stadt Arbeiter Stellvertreter Rat.\n\n01/19/1945 - umbenannt zu 'Riga Stadt Verkehr und Transport das vertrauen.\n\n01/01/1955 - umbenannt zu 'Riga Stadt Straßenbahn und Oberleitungsbus das vertrauen'.\n\n12/30/1961 - umbenannt zu 'Straßenbahn und Oberleitungsbus Verwaltung'.\n\nSeit 1991 - Riga Stadt Municipal unternehmer (Riga Doma SIA) 'Straßenbahn und Oberleitungsbus Verwaltung'.\n\nFolgenden Riga Rat Auflösung No. 3171 auf das 'Eingemeindung von Straßenbahn und Oberleitungsbus Verwaltung' in das Mitglieder von SIA 'Riga Verkehr'' und SIA 'Riga Verkehr' 23.09.2004. Das Entscheidung von der Tafel Besprechung war befestigt zu SIA 'Riga Verkehr'.\n\n\n`Translated EN --> DE; essterszvaigzne12`", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
                            } else {
                                if (lang[1] == 'ru') {
                                    message.channel.send(">>> <:TTP:642373499205451797> **TRAMVAJU UN TROLEJBUSU PĀRVALDE**\n( *Трамвайно-Троллейбусное Управление* )\n────────────────────────────\nУчреждено в октябре 1944 года как Рижское городское управление транспорта и транспорта при Рижском городском совете рабочих.\n\nОт 19 января 1945 г. переименован в Рижский в Трест сообщения и транспорта (ТСТ)\n\nОт 01.01.1955 г. Трест переименован в Рижский городской трамвайный и троллейбусный трест. (ТТТ)\n\nОт 30.12.1961.g. трест был переименован в Трамвайно-троллейбусное управление.(ТТУ)\n\nОт 1991 г. Муниципальное предприятие Трамвайно-троллейбусное управление (ТТУ)\n\nВ связи с решением рижской  думы №3171 , о ООО ''ТТУ'' присоединении ООО ''Rigas satiksme'' и  решению совещания членов OOO ''Rigas satiksme'' присоеденена к  OOO ''Rigas satiksme''.\n\n\n`Translated LV --> RU; Blufi_Fox`", {files: ['https://i.gyazo.com/c2da46134a992ace4d9ee3cda7cfe8b2.png', 'https://i.gyazo.com/e6b60cb753ffad8b3b4d91cfdb13fdbf.jpg']});
                                } else {
                                    message.channel.send("❗ Invalid language   ``/ttp [en/lv/lt/pl/de/ru]``")
                                }
                            }
                        }
                    }
                }
            }
        }
        if (message.content.startsWith('/purge')) {
            if (message.content != '/purge') {
                if (message.member.hasPermission("ADMINISTRATOR")) {
                    var delnum = message.content.split(" ");
                    var bulkError = false
                    if (parseInt(delnum[1]) > 100) {
                        message.channel.send("❗ You can only delete 100 or less messages at once").then(msg => {msg.delete(5000)})
                    } else {
                        message.channel.bulkDelete(parseInt(delnum[1])).catch(error => bulkError = true && message.channel.send(`❗ Couldn't delete messages because of: ${error}`));
                        if (bulkError == false) {
                            message.channel.send("Deleted **" + delnum[1] + "** messages!").then(msg => {msg.delete(5000)})
                        } else {
                            bulkError = false;
                        }
                    }
                } else {
                    message.channel.send('❗ Insufficient permissions');
                }
            } else {
                message.channel.send('❗ Enter valid amount   ``/purge [amount]``');
            }   
        }
    }
});

client.login(process.env.BOT_TOKEN);
//©raltec 2019
