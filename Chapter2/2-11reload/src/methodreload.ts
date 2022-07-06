type MessageType = 'image' | 'audio' | string //消息类型

type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
}

let messages: Message[] = [
  { id: 1, type: 'image', sendmessage: 'dwadwfafwa' },
  { id: 2, type: 'audio', sendmessage: 'dwadwdwawfafwa' },
  { id: 3, type: 'audio', sendmessage: '你好啊' },
  { id: 4, type: 'image', sendmessage: '刘老哥苦练绝技' },
  { id: 5, type: 'image', sendmessage: '王牌对王牌' }
]

function getMessage(value: number, ...name: any): Message
function getMessage(value: MessageType, recordCount: number): Message[]
function getMessage(value: any, ...nameOrRecordCount: any) {
  if(typeof value === 'number') {
    return messages.find((msg)=>msg.id == value);
  }else{
    return messages.filter((msg) => {msg.type == value})
  }
}

getMessage(1)