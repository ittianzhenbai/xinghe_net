var fn = function(){
  var w = document.documentElement.clientWidth || document.body.clientWidth;
  if(w>1200){
      //超大屏幕
     document.documentElement.style.fontSize = '20px'
     console.log(document.documentElement.style.fontSize)
  }
  if(w<=1200&&w>=992){
     //中等屏幕 桌面显示器 
    document.documentElement.style.fontSize = '15px'
  }
  if(w<=992&&w>=768){
     //小屏幕 平板
    document.documentElement.style.fontSize = '14px'
  }
  if(w<768){
      //超小屏幕，手机
    document.documentElement.style.fontSize = '16px'
  }
}
fn();
window.onresize = fn;