const superagent = require('superagent');
exports.run = (client, msg, args) => {
    if (args[0] === "suggestion") return msg.reply("Please specify something you want to suggest. Example\n`;suggest more music commands.`");
    args = args.join(" ");
    msg.reply("Your suggestion has been sent to Toasty HQ for review. To check the status, join Toasty HQ by typing, `;hq`");
    const content = `**${msg.author.username}**#${msg.author.discriminator} (${msg.author.id}) suggested:\n${args}\nServer: **${msg.guild.id}**\nID: **${msg.guild.id}**`;
    const id = '303204291198451715';
    return new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
      .set('Authorization', `Bot ${client.token}`).send({ content })
      .end((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
}
