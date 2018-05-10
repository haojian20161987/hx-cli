//导航栏数据结构，value是用来绑定唯一值的，向外传输，执行双向绑定的东西。text是名称，url是点击后要跳转到的地方，second是用来
//判定该地方是否显示的。pageString用来提供拼接字符串时候的由页面判定的那部分字符串。
//
let navigation = [
    {
        value: 'jgblbh',
        text: '结构比例变化',
        url: '/index2/jgblbh',
        second: false,
        pageString: 'searchZqjgbl'
    },
    {
        value: 'chchbyc',
        text: '超缺编预测',
        url: '/index2/chqbyc',
        second: true,
        pageString: 'searchChqb'
    },
    {
        value: 'jcqkyc',
        text: '送修情况预测',
        url: '/index2/schqkyc',
        second: true,
        pageString: 'searchJcdxyc'
    },
    {
        value: 'jqtyyc',
        text: '机群退役预测',
        url: '/index2/jqtyyc',
        second: true,
        pageString: 'searchJqty'
    },
    {
        value: 'zdqkyc',
        text: '在队情况预测',
        url: '/index2/zdqkyc',
        second: true,
        pageString: 'searchZdwh'
    },
    {
        value: 'zcqkyc',
        text: '在厂情况预测',
        url: '/index2/zchqkyc',
        second: true,
        pageString: 'searchZddxsl'
    },


    {
        value: 'ccqkyc',
        text: '出厂情况预测',
        url: '/index2/chchqkyc',
        second: true,
        pageString: 'searchDjcc'
    },
    {
        value: 'bfqkyc',
        text: '报废情况预测',
        url: '/index2/bfqkyc',
        second: true,
        pageString: 'searchDjcc'
    },
]