function doGet(request) {
  var callbackName = request.parameters.callback;
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JAVASCRIPT);

  // https://docs.google.com/a/<org>/spreadsheets/d/<spreadsheet_id>/edit#gid=0
  // => id is <spreadsheet_id>
  var sheet = SpreadsheetApp.openById('1ICYkCrEmIXdde2FSX3W2BTi_W1e2yYt2dqSSWpHao4E').getSheets()[0];
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

  output.setContent(callbackName+'('+JSON.stringify(data)+')');
  return output;
}
