// copy from template sheet

function copyTemplateSheet(){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const sheets = ss.getSheets()
  const templateSheet = ss.getSheetByName('template')
  const newSheetName = Browser.inputBox("Please input new sheet's name.")
  const newSheet = templateSheet.copyTo(ss)

  newSheet.setName(newSheetName)
  ss.setActiveSheet(newSheet)
  ss.moveActiveSheet(sheets.length)
}
