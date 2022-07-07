var messages = [
    { id: 1, type: 'image', sendmessage: 'dwadwfafwa' },
    { id: 2, type: 'audio', sendmessage: 'dwadwdwawfafwa' },
    { id: 3, type: 'audio', sendmessage: '你好啊' },
    { id: 4, type: 'image', sendmessage: '刘老哥苦练绝技' },
    { id: 5, type: 'image', sendmessage: '王牌对王牌' }
];
function getMessage(value) {
    var nameOrRecordCount = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nameOrRecordCount[_i - 1] = arguments[_i];
    }
    if (typeof value === 'number') {
        return messages.find(function (msg) { return msg.id == value; });
    }
    else {
        return messages.filter(function (msg) { msg.type == value; });
    }
}
getMessage(1);
