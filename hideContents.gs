function showAnswer() {
  hideContents(false);
}

function hideAnswer() {
  hideContents(true);
}


function hideContents(arg) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();

  for(var i=1; i<sheets.length-1; i++) {
    var sheet = sheets[i];
    sheet.getRange('A1').setValue(arg);

    var lastRow = sheet.getLastRow();
    var lastColumn = sheet.getLastColumn();
    var contentRow = 2;
    var contentColumn = 6;

    for(var j=contentColumn; j<lastColumn; j++){
      for(var k = contentRow;k<lastRow; k++){
        var cellValue = sheet.getRange(k,j).getValue();
        if(cellValue === '○' || cellValue === '×'){
          continue;
        } else if(cellValue !== ''){
          if (arg === true){
            sheet.hideColumns(j,2);
          } else if(arg === false){
            sheet.showColumns(j,2);
          }
          break;
        }
      }
    }
  }
}

