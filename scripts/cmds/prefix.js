const { utils } = global;

module.exports = {
  config: {
    name: "prefix",
    alias: [""], 
    version: "1.3",
    author: "NTKhang",
    countDown: 5,
    role: 0,
    shortDescription: "see the bot's prefix",
    longDescription: "See the bot's prefix in your chat box.",
    category: "members",
    guide: {
      en: "   {pn} reset: change prefix in your box chat to default"
    }
  },

  langs: {
    en: {
      reset: "Your prefix has been reset to default: %1",
      myPrefix: "━━━━━━━━━━━━━━━━ \n✨| 𝙷𝚎𝚕𝚕𝚘 𝙵𝚛𝚒𝚎𝚗𝚍 |✨\n━━━━━━━━━━━━━━━━ \n\nThis is My Only Prefix: [ - ]\n\n━━ 🗃️ | 𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ━━\n%1ai <𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛>\n%1alldl <𝑙𝑖𝑛𝑘>\n%1animagine <𝑝𝑟𝑜𝑚𝑝𝑡>\n%1dalle <𝑝𝑟𝑜𝑚𝑝𝑡>\n%1join <𝑗𝑜𝑖𝑛 𝑒𝑥𝑖𝑠𝑡𝑖𝑛𝑔 𝑔𝑟𝑜𝑢𝑝𝑠>\n%1lyrics <𝑡𝑖𝑡𝑙𝑒 𝑏𝑦 𝑎𝑟𝑡𝑖𝑠𝑡>\n%1pinterest <𝑐𝑎𝑡> <-5>\n%1remini <𝑟𝑒𝑝𝑙𝑦 𝑡𝑜 𝑖𝑚𝑎𝑔𝑒>\n%1spotify <𝑡𝑖𝑡𝑙𝑒 𝑏𝑦 𝑎𝑟𝑡𝑖𝑠𝑡>\n%1tempmail <𝑐𝑟𝑒𝑎𝑡𝑒>\n%1tempmail <𝑖𝑛𝑏𝑜𝑥> <𝑒𝑚𝑎𝑖𝑙>\n%1translate <-ℎ𝑒𝑙𝑝 𝑡𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑒>\n%1unsend <𝑟𝑒𝑝𝑙𝑦 𝑡𝑜 𝑚𝑒𝑠𝑠𝑎𝑔𝑒>\n\nChat -𝚑𝚎𝚕𝚙 to see all available commands.\n━━━━━━━━━━━━━━━━"
    }
  },

  onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
    // This is an empty onStart function
  },

  onChat: async function ({ event, message, getLang }) {
    if (event.body && (event.body.toLowerCase() === "prefix" || event.body.toLowerCase() === ""))
      return () => {
        return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
      };
  }
};