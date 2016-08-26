module.exports = function(type, length, uppercase){
	/*
	 * 1、第一个参数为输出随机字符串中字符的类型，接收类型为string 或 array，必需
	 * 		如果是 string 类型接收如下字符串：number：纯数字、letter：纯字母、symbol：符号、mix：混合(以上所有类型字符混合)
	 * 		如果是 array 类型接可以将 number、letter、symbol 等三种基础类型随意组合生成随机字符串
	 * 
	 * 2、第二个参数为输出随机字符串长度，接收类型为 number， 默认 10 ，最大 256
	 * 3、第三个参数为是否混合大写字母，接收类型为 booleans，选填 默认false
	 */
	if(!type || type.constructor !== String && type.constructor !== Array) {
		console.log('type: error, please input the param \'type: number or letter or symbol... \' and the type must be \'String\' or \'Array\'')
		return;
	};
	
	if(arguments[1].constructor === Boolean){
		uppercase = arguments[1];
		length = undefined;
	}
	
	var _init = {
		'baseType': {
			'number': '0123456789',
			'letter': 'abcdefghijklmnopqrstuvwxyz',
			'symbol': '~!@#$%^&*(){}|\:<>?/'
		},
		'length': function(){
			if(!length){
				return 10;
			}else{
				// 将length转换正整数
				length = Math.abs(parseInt(length,10));
				if(length > 256){
					// 对转后后length判断，大于256位抛错，并返回最大值 256
					console.log('the param \'length\' max value is 256');
					return 256;
				}else{
					return length;
				}
			}
		}(),
		'uppercase': function(){
			if(!uppercase){
				return false;
			}else{
				if(uppercase.constructor !== Boolean){
					// 判断 uppercase 是否为布尔值，如不是抛错，并返回 false
					console.log('the param \'uppercase\' type must be Boolean');
					return false;
				}else{
					return uppercase;
				}
			}
		}()
	};
	
	var randomString = function(_string, _length){
		var result = '', data;
		data = _string.split('');
    for(var i = 0; i<_length; i++){  
      var r = Math.floor(Math.random()*data.length);     
      result += data[r];          
    }
    return result;
	}
	
	// 是否混入大写字母
	_init.baseType.letter = _init.uppercase ? _init.baseType.letter + _init.baseType.letter.toUpperCase() : _init.baseType.letter;
	// 混入全部字符
	var _mix = _init.baseType.letter + _init.baseType.number + _init.baseType.symbol;
	
	switch(type.constructor){
		// 判断type 为 string
		case String:
			switch(type)
			{
				case 'number':
				return randomString(_init.baseType.number, _init.length);
				case 'letter':
				return randomString(_init.baseType.letter, _init.length);
				case 'symbol':
				return randomString(_init.baseType.symbol, _init.length);
				case 'mix':
				return randomString(_mix, _init.length);
			}
		break;
		case Array:
			var _mixedString = '';
			var _type = type.filter(function(e){
				// 过滤数组中无效属性
				return _init.baseType.hasOwnProperty(e);
			});
			if(_type.length === 0){
				console.log('please input effective items into the Array, or not it will output the mixed String');
				_mixedString = _mix;
			}else{
				_type.forEach(function(e){
					_mixedString += _init.baseType[e];
				});
			}
			return randomString(_mixedString, _init.length);
		break;
	}
}
