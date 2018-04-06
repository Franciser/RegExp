

(function () {
    var result = '1234abc12'.replace(/[a-z]{3}/g, 'R');
    console.log(result);                                  //1234R12   匹配a-z连续3个数
})();


(function () {
    var result = '1234abc12'.replace(/[0-9]{2}$/g, 'R');
    console.log(result);                                  //1234abcR   匹配以0-9连续2个数结尾
})();


