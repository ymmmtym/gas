//チェックのついた問題を表示する
function getCheckNumber() {
  var mySheet=SpreadsheetApp.getActiveSheet(); //シートを取得
 
  var i=2;
  var list = new Array();
  while(mySheet.getRange(i,4).getValue()!=""){ //D列がNULLでない間繰り返し
    if(mySheet.getRange(i,5).getValue()!=""){ //E列がNULLでなければ
      list.push(mySheet.getRange(i,4).getValue()); //D列の値を配列に格納する
    }
    i++;
  }

  Browser.msgBox(list);
}

