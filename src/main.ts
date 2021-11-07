import { updateSourceFileNode } from 'typescript';

const ps = PropertiesService.getScriptProperties();
const sheetId     = ps.getProperty("SHEET_ID");
const notifyUrl   = ps.getProperty("SLACK_INCOMING_WEBHOOK_URL");
const sheetUrl    = `https://docs.google.com/spreadsheets/d/${sheetId}/edit`

function doPost() {
  // Read GMail retrieve query from spread sheet
  const s = SpreadsheetApp.openById(sheetId);
  const sheet = s.getSheetByName("config");
  const startRow = 2;
  const numColumn = sheet.getLastColumn();
  const query     = sheet.getSheetValues(startRow, 1, 1, 1)[0][0];

  // Get messages from GMail
  const threads = GmailApp.search(query, 0, 5)
  const messages = GmailApp.getMessagesForThreads(threads);
  const summary = [];
  messages.forEach(messagesInThread => {
    const message = messagesInThread[0];

    if (message.isUnread()) {
      message.markRead();
      summary.push({
        title: message.getSubject(),
        value: message.getFrom() + "\n" + 
               message.getPlainBody().slice(0, 100) + "\n" + 
               message.getDate() + "\n" +
               "--------------------",
      });
    }
  });

  // No messages
  if (summary.length == 0) {
    return
  }
  
  // Make payload
  const notifyMessage = {
    attachments: [
      {
        title: "Grett",
        fields: summary,
        footer: `<${sheetUrl}|Sheet URL>`,
      },
    ],    
  };

  // message通知
  const res = pushMessage(notifyMessage);
}

function pushMessage(message) {
  const res = UrlFetchApp.fetch(notifyUrl, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(message),
  });
  return res.getContentText();
}