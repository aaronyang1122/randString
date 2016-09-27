#randString 
##介绍（Introduce）
一个node环境运行的用于生成随机字符串的小插件

###1. 安装
全局
```javascript
npm install -g randString
```
依赖项目
```javascript
npm install --save-dev randString
```

###2. 引用
```javascript
var randString = require('randString');
```

###3. 使用
第一个参数是指生成字符串类型，必填参数，类型为字符串，预设值为 纯数字：'number', 纯字母：'letter', 纯符号：'symbol', 以上三种混合：'mix'
```javascript
randString('number');
```
>显然只能指定一个类型的字符生成的字符串显然是不合理的，所以这里提供了自定义类型，对上述单个类型通过数组方式组合

```javascript
var mixString = randString(['letter','number','symbol']);
// 等同于
// var mixString = randString('mix');
```

第二个参数是指生成字符串长度，选填参数，类型为整数型，默认值为10，最大值为256，输入整数不得超过256，否则取256为最大值
```javascript
randString('number', 20);
```
第三个参数是指字符串中是否容许有大写字母，选填参数，类型为布尔值，默认值false，不生成大写字母，此参数只有在生成含有字母的字符串时才有效，否则无效
```javascript
randString('number', 20, true);
```

