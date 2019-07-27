function onOpen(event){
  var menuitems = [
  {name:'最初のシートへ移動', functionName:'moveToFirstSheet'},
  {name:'このシートのチェック問題を表示', functionName:'getCheckNumber'},
  {name:'解答表示', functionName:'showAnswer'},
  {name:'解答非表示', functionName:'hideAnswer'},
  {name:'不要行削除', functionName:'deleteBlank'},
  {name:'templateシートからコピーを作成', functionName:'copyTemplateSheet'}
  ];
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  sheet.addMenu('scripts', menuitems);
}

