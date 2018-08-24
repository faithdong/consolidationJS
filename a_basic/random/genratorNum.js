/*
 * @Author: zhongxd 
 * @Date: 2018-08-23 10:56:00 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-08-23 10:59:59
 * 
 * 生成随机数
 */

 /**1、----------生成从 1 到 9999 不重复的 随机数  begin---------------*/

var count=3000; 
var originalArray=new Array;//原数组 
//给原数组originalArray赋值 
for (var i=0;i<count;i++){ 
originalArray[i]=i+1; 
} 
var d1=new Date().getTime(); 
for (var num,i=0;i<count;i++){ 
do{ 
num=Math.floor(Math.random()*count); 
}while(originalArray[num]==null); 
console.log(originalArray[num]+" , "); 
originalArray[num]=null; 
} 
var d2=new Date().getTime(); 
console.log("运算耗时"+(d2-d1)); 

/**----------生成从 1 到 9999 不重复的 随机数  end ---------------*/
