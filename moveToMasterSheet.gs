function moveToMasterSheet(){
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName('master')

  sheet.activate()
  getSheetsLink()
}
