/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-03-02 15:11:54
 * @version $Id$
 */



/*
js中没有原生的sleep函数，这里封装一个
*/
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}



/**
 * 在其他语言中，都有相应的格式化字符串函数避免丑陋的字符串进行拼接，
 * 而 javascript 却没有，这里封装一个格式化字符串接口
 * 使用方法：
    两种调用方式：
    var template1="我是{0}，今年{1}了";
    var result1=template1.format("shell", 20);
    var template2="我是{name}，今年{age}了";
    var result2=template2.format({name:"shell",age:20});

    两个结果都是： “我是shell，今年20了“

    当文本中出现多个替换位时，都可以被替换，如：
    var tempate3 = "我是{name}，今年{age}了， 她是Anna，今年也{age}了";
    var result3 = tempate3.format({name:"shell", age: 22})
    结果为： "我是shell，今年22了， 她是Anna，今年也22了";
*/

/**
 * 替换所有匹配exp的字符串为指定字符串
 * @param exp 被替换部分的正则
 * @param newStr 替换成的字符串
 */
String.prototype.replaceAll = function (exp, newStr) {
    return this.replace(new RegExp(exp, "gm"), newStr);
};

/**
 * 原型：字符串格式化
 * @param args 格式化参数值
 */
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }

    var data = arguments; // 如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        // 如果模板参数是对象
        data = args;
    }
    for ( var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replaceAll("\\{" + key + "\\}", value);
        }
    }
    return result;
}
