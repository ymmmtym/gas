function moveToGraphSheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName('graph')

  sheet.activate()
  getSheetsLink()
}
