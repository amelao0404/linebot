// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId:1559939835
  channelSecret:f475376df41b71a6d489ed758f58ff8c
  channelAccessToken:2ThiStHizloEgakIIMCZxlNO/M61ccJg7Nb5JeQYDR3Wvoq80xhd1X1e/nySkW4DpKvpRN0EgGoRnT6pgt6j8kpgMM1J8lSNFwGDuUq7uLD2BJNcfQ8uDGmceyOIgC56KoIRTfsfmuxTaPBK5ohZfAdB04t89/1O/w1cDnyilFU=
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
