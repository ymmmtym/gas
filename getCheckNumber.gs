// Pop up checked question

function getCheckNumber() {
  var mySheet=SpreadsheetApp.getActiveSheet()
 
  var i=2
  var list = new Array()
  while(mySheet.getRange(i,4).getValue()!=""){
    if(mySheet.getRange(i,5).getValue()!=""){
      list.push(mySheet.getRange(i,4).getValue())
    }
    i++
  }

  Browser.msgBox(list)
}

