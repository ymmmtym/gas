function deleteBlank() {
  const sheet = SpreadsheetApp.getActiveSheet();

  const lastRow = sheet.getLastRow();
  const columnBVals = sheet.getRange('A:A').getValues();
  const LastStrRow = columnBVals.filter(String).length;

  sheet.deleteRows(LastStrRow+1,lastRow-LastStrRow);
}
