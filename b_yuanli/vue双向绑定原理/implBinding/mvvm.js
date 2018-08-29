/*
 * @Author: zhongxd 
 * @Date: 2018-08-28 10:18:03 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-08-28 11:27:14
 *  
 * 
 */

 //1、定义构造函数
 function MVVM(options){
   this.$options = options || {};
   var data = this._data = this.$options.data;
   var me = this;

   //数据劫持(数据代理)
   Object.keys(data).forEach(function(key){
     me._proxyData(key);
   });
   observe(data,this);
 };

 MVVM.prototype = {

  _proxyData:function(key, setter, getter){
    var me = this;
    setter = setter ||
    Object.defineProperty(me,key,{
      configurable:false,
      enumerable:true,
      get:function(){
        return me[key];
      },
      set:function(newVal){
        me[key] = newVal;
      }
    })
  },

 };