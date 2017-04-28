function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
exports.run = (client, msg, args, data, errors, devs) => {
    if (!devs.includes(msg.author.id)) return msg.reply(errors.devErr);
    args = args.join(" ");
    try {
        var evaled = eval(args);
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        msg.channel.sendMessage(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
    } catch (err) {
        msg.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}