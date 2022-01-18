$(function(){
  // back内のaタグがクリックされた時の処理 function(e)としても良い。
  $("#back a").on("click",function(event){
    // ページ全体に対して処理を実行する。→「body要素またはhtml要素」という意味。
    $("body,html").animate({
      // スクロールを最上部まで移動
      scrollTop:0
      // 最上部まで移動する時間(0.8秒間)
    },800);
    event,preventDefault();
  });
});