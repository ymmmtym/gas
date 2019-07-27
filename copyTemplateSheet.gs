function copyTemplateSheet(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets()
  const templateSheet = ss.getSheetByName('template');
  const newSheetName = Browser.inputBox('please input new sheet name');
  const newSheet = templateSheet.copyTo(ss);
  newSheet.setName(newSheetName);
  ss.setActiveSheet(newSheet)
  ss.moveActiveSheet(sheets.length);
}
