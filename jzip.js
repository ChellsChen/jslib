/**
 *
 * @authors 陈小雪 (shell_chen@yeah.net)
 * @date    2015-11-27 11:43:39
 * @version $Id$
 */

 /*
    实现类似python中zip的功能
 */

function JsZip(arr){
    var len = arr[0].length,
        arrs = [];

    $.each(arr, function(index, value){
        $.each(value, function(i, v){
            var vv = arrs[i];
            if(!vv){
                vv = [];
            }
            vv.push(v);
            arrs[i] = vv;
        });
    });
    return arrs;
}

function JsParseZip(arrs){
    var len = 0,
        result =[];
    $.each(arrs, function(i, a){
        if(a.length > len){
            len =a.length;
        }
    });

    for(var i =0; i < len; i++){
        var tmp = [];
        $.each(arrs, function(j, arr){
            tmp.push(arr[i]);
        });
        result.push(tmp);
    }
    return result;
}






