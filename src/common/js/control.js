
import store from ".././../store/index.js"
var fn = function(){
  var w = document.documentElement.clientWidth || document.body.clientWidth;
  var f = window.innerWidth
  if(w>1200){
      //超大屏幕
    store.commit("setdeviceFlag","pc")
     document.documentElement.style.fontSize = '20px'
  }
  if(w<=1200&&w>=992){
<<<<<<< Updated upstream
     //中等屏幕 桌面显示器 
    var f = window.innerWidth
    document.documentElement.style.fontSize = '18px'
    if(w<994||(f==w&&f<1000)){
=======
     //中等屏幕 桌面显示器
    document.documentElement.style.fontSize = '18px'
    if(w<1005||(f==w&&f<=1010)){
>>>>>>> Stashed changes
      store.commit("setdeviceFlag","mid_pc")
    }else{
      store.commit("setdeviceFlag","pc")
    }
  }
  if(w<=992&&w>768){
    store.commit("setdeviceFlag","mid_pc")
     //小屏幕 平板
    document.documentElement.style.fontSize = '18px'
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isiOS){
      store.commit("setbrowserType","IOS")//判断浏览器类型是否为ios
    }
  }
  if(w<=768){
      //超小屏幕，手机
    var f1 = window.innerWidth
    if(f1>768){
      document.documentElement.style.fontSize = '18px'
    }else{
      document.documentElement.style.fontSize = '10pt'
    }
    
    store.commit("setdeviceFlag","mobile")
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isiOS){
        store.commit("setbrowserType","IOS")//判断浏览器类型是否为ios
    }
  }
}
fn();
window.onresize = fn;