/*
 * @Author: zhongxd 
 * @Date: 2018-08-02 23:55:40 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-08-03 00:10:42
 */


 'use strict'

 console.log('global')

 setTimeout(function () {
		console.log('timeout1')
		new Promise(function (resolve) {
			console.log('timeout1_promise')
				resolve()
		}).then(function () {
			console.log('timeout1_then')
	 })
 },2000)
 
 for (var i = 1;i <= 5;i ++) {
	 setTimeout(function() {
		 console.log(i)
	 },i*1000)
	 console.log(i)
 }
 
 new Promise(function (resolve) {
	 console.log('promise1')
	 resolve()
	}).then(function () {
	 console.log('then1')
 })
 
 setTimeout(function () {
	 console.log('timeout2')
	 new Promise(function (resolve) {
		 console.log('timeout2_promise')
		 resolve()
	 }).then(function () {
		 console.log('timeout2_then')
	 })
 }, 1000)
 
 new Promise(function (resolve) {
	 console.log('promise2')
	 resolve()
 }).then(function () {
	 console.log('then2')
 })
 
