const crypto = require('crypto');

module.exports = {
    

    md5: function(str){
        var obj = crypto.createHash('md5');
        const MD5_SUFFIX = `ajfoahf877621dfha(jh}giu|-*-tfi0au12458gfdgadhfhaiewg544@dadfa65.*#%$fjahkfjha&*&%%&da`;
        var str=str+MD5_SUFFIX;
        obj.update(str);

        return obj.digest('hex');
    }
}