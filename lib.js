/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-03-02 15:11:54
 * @version $Id$
 */



/*
js中没有原生的sleep函数，这边封装一个
*/
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}
