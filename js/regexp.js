

(function () {
    var result = '1234abc12'.replace(/[a-z]{3}/g, 'R');
    console.log(result);                                  //1234R12   匹配a-z连续3个数
})();


(function () {
    var result = '1234abc12'.replace(/[0-9]{2}$/g, 'R');
    console.log(result);                                  //1234abcR   匹配以0-9连续2个数结尾
})();


(function () {
    var result = '1234abc12'.replace(/12\b/g, 'R');
    console.log(result);                                  //R34abc12   匹配12,并且后面接着单词边界
})();


(function () {
    var result = '123456789'.replace(/\d{4,6}/g, 'R');
    console.log(result);                                  //R789   贪婪模式，尽可能多的匹配，这里为匹配6个数字;
})();


(function () {
    var result = '123456789'.replace(/\d{4,6}?/g, 'R');
    console.log(result);                                  //RR9   非贪婪模式，尽可能少的匹配，这里为匹配4个数字;
})();


(function () {
    var result = '1b9K2-j3_H'.replace(/[0-5a-z-_]/g, 'R');
    console.log(result);                                  //RR9KRRRRRH   匹配中括号内的所有满足的字符;
})();


(function () {
    var result = 'foodnnzood'.replace(/foo|ood/g, 'R');
    console.log(result);                                  //RdnnzR   匹配foo或者ood;
})();


(function () {
    var result = 'foodnnzood'.replace(/(f|z)ood/g, 'R');
    console.log(result);                                  //RnnR   匹配food或者zood;
})();


(function () {
    var result = '1g23icd9b56'.replace(/(\d{2})|(cd)/g, 'R');
    console.log(result);                                  //1gRiR9bR   匹配连续两个数字或cd;
})();