/*
 * @Author: zhongxd 
 * @Date: 2018-08-28 11:19:00 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-08-28 11:28:08
 */


function Observer(data) {
  this.data = data;
  this.walk(data);
};


Observer.prototype = {
  walk: function (data) {
    var me = this;
    Object.keys(data).forEach(function (key) {
      me.convert(key, data[key]);
    })
  },
  convert: function (key, val) {
    this.defineReactive(this.data, key, val);
  },
  defineReactive: function (data, key, val) {
    var dep = new Dep();
    var childObj = observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurablefalse: false,
      get: function () {
        if (Dep.target) {
          dep.depend();
        }
        return val;
      },
      set: function (newVale) {
        if (newVale == val) {
          return;
        }
        val = newVal;
      }
    })
  }
}


function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }

  return new Observer(value);
}

var uid = 0;
function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },

  depend: function () {
    Dep.target.addDep(this);
  },

  removeSub: function (sub) {
    var index = this.subs.indexOf(sub);
    if (index != -1) {
      this.subs.splice(index, 1);
    }
  },

  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
};
Dep.target = null;