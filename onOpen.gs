function onOpen(event){
  var menuitems = [
  {name:'masterシートに移動して全シートのリンクを取得', functionName:'moveToMasterSheet'},
  {name:'このシートのチェック問題を表示', functionName:'getCheckNumber'},
  {name:'解答表示', functionName:'showAnswer'},
  {name:'解答非表示', functionName:'hideAnswer'},
  {name:'不要行削除', functionName:'deleteBlank'},
  {name:'templateシートからコピーを作成', functionName:'copyTemplateSheet'}
  ]

  var sheet = SpreadsheetApp.getActiveSpreadsheet()
  sheet.addMenu('scripts', menuitems)
}

