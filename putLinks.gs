function putLinks()
{
  var sheets = SpreadsheetApp.getActive().getSheets();
  var ssId = SpreadsheetApp.getActive().getId();

  var linkList = [[]];

  for(var i=0; i<sheets.length - 2; i++) {
    var sheetId = sheets[i+1].getSheetId();
    var sheetName = sheets[i+1].getSheetName();

    var url = "https://docs.google.com/spreadsheets/d/" + ssId + "/edit#gid=" + sheetId;
    var link = [ '=HYPERLINK("' + url + '","' + sheetName + '")' ];

    linkList[i] = link;
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('graph');
  var range = sheet.getRange(2 , 1 , linkList.length , 1);
  range.setValues(linkList);
}
