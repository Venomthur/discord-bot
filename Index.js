

// Important Features

const Discord = require("discord.js");
const client = new Discord.Client();
 ;

// Settings

const TOKEN = "NDE3NzU5NzEzNTU2NTYxOTUx.DkJZOw.lLeBPUhVY2g3X1fkbYSlq27rCtI"
const PREFIX = "!"

// Audio

// Clients

var bot = new Discord.Client();
var servers = {};


// Variables
 
// Startup

bot.on("ready", function(message) {
	bot.user.setStatus("online")
});

bot.on("guildMemberAdd", function(member) {
	let role10 = member.guild.roles.find("name", "Unranked");
	member.addRole(role10)
});

// Bot Commands
// To Create A Bot Command, Start With message

bot.on("message", function(message) { 

	if (message.author.equals(bot.user)) return;
	

	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch (args[0].toLowerCase()) {

	case "verify":
			let role = message.guild.roles.find("name", "Members");
			let role2 = message.guild.roles.find("name", "Unranked");
			message.member.removeRole(role2)
			message.author.send("**Congratulations!**").then (
				message.author.send("You have been verified in **" + message.guild.name + "** !")
			)
		break;
	case "permissions":
		let role = message.guild.roles.find("name", "Image Permissions");
		let role2 = message.guild.roles.find("name", "Voice Permissions");
		message.member.removeRole(role2)
		message.author.send("**Warning:**").then (
			message.author.send("If you abuse these permissions you will be removed from them!")
		)
	break;

// Ends Sequence

	};
	});

// Used To Log In

bot.login(TOKEN)
