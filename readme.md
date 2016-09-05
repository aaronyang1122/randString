# /*
 +	 * 1、第一个参数为输出随机字符串中字符的类型，接收类型为string 或 array，必需
 +	 * 		如果是 string 类型接收如下字符串：number：纯数字、letter：纯字母、symbol：符号、mix：混合(以上所有类型字符混合)
 +	 * 		如果是 array 类型接可以将 number、letter、symbol 等三种基础类型随意组合生成随机字符串
 +	 * 
 +	 * 2、第二个参数为输出随机字符串长度，接收类型为 number， 默认 10 ，最大 256
 +	 * 3、第三个参数为是否混合大写字母，接收类型为 booleans，选填 默认false
 +	 */