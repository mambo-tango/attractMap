    
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var geoCoordMap = {
	    '上海': [121.4648,31.2891],
	    '东莞': [113.8953,22.901],
	    '东营': [118.7073,37.5513],
	    '中山': [113.4229,22.478],
	    '临汾': [111.4783,36.1615],
	    '临沂': [118.3118,35.2936],
	    '丹东': [124.541,40.4242],
	    '丽水': [119.5642,28.1854],
	    '乌鲁木齐': [87.9236,43.5883],
	    '佛山': [112.8955,23.1097],
	    '保定': [115.0488,39.0948],
	    '兰州': [103.5901,36.3043],
	    '包头': [110.3467,41.4899],
	    '北京': [116.4551,40.2539],
	    '北海': [109.314,21.6211],
	    '南京': [118.8062,31.9208],
	    '南宁': [108.479,23.1152],
	    '南昌': [116.0046,28.6633],
	    '南通': [121.1023,32.1625],
	    '厦门': [118.1689,24.6478],
	    '台州': [121.1353,28.6688],
	    '合肥': [117.29,32.0581],
	    '呼和浩特': [111.4124,40.4901],
	    '咸阳': [108.4131,34.8706],
	    '哈尔滨': [127.9688,45.368],
	    '唐山': [118.4766,39.6826],
	    '嘉兴': [120.9155,30.6354],
	    '大同': [113.7854,39.8035],
	    '大连': [122.2229,39.4409],
	    '天津': [117.4219,39.4189],
	    '太原': [112.3352,37.9413],
	    '威海': [121.9482,37.1393],
	    '宁波': [121.5967,29.6466],
	    '宝鸡': [107.1826,34.3433],
	    '宿迁': [118.5535,33.7775],
	    '常州': [119.4543,31.5582],
	    '广州': [113.5107,23.2196],
	    '廊坊': [116.521,39.0509],
	    '延安': [109.1052,36.4252],
	    '张家口': [115.1477,40.8527],
	    '徐州': [117.5208,34.3268],
	    '德州': [116.6858,37.2107],
	    '惠州': [114.6204,23.1647],
	    '成都': [103.9526,30.7617],
	    '扬州': [119.4653,32.8162],
	    '承德': [117.5757,41.4075],
	    '拉萨': [91.1865,30.1465],
	    '无锡': [120.3442,31.5527],
	    '日照': [119.2786,35.5023],
	    '昆明': [102.9199,25.4663],
	    '杭州': [119.5313,29.8773],
	    '枣庄': [117.323,34.8926],
	    '柳州': [109.3799,24.9774],
	    '株洲': [113.5327,27.0319],
	    '武汉': [114.3896,30.6628],
	    '汕头': [117.1692,23.3405],
	    '江门': [112.6318,22.1484],
	    '沈阳': [123.1238,42.1216],
	    '沧州': [116.8286,38.2104],
	    '河源': [114.917,23.9722],
	    '泉州': [118.3228,25.1147],
	    '泰安': [117.0264,36.0516],
	    '泰州': [120.0586,32.5525],
	    '济南': [117.1582,36.8701],
	    '济宁': [116.8286,35.3375],
	    '海口': [110.3893,19.8516],
	    '淄博': [118.0371,36.6064],
	    '淮安': [118.927,33.4039],
	    '深圳': [114.5435,22.5439],
	    '清远': [112.9175,24.3292],
	    '温州': [120.498,27.8119],
	    '渭南': [109.7864,35.0299],
	    '湖州': [119.8608,30.7782],
	    '湘潭': [112.5439,27.7075],
	    '滨州': [117.8174,37.4963],
	    '潍坊': [119.0918,36.524],
	    '烟台': [120.7397,37.5128],
	    '玉溪': [101.9312,23.8898],
	    '珠海': [113.7305,22.1155],
	    '盐城': [120.2234,33.5577],
	    '盘锦': [121.9482,41.0449],
	    '石家庄': [114.4995,38.1006],
	    '福州': [119.4543,25.9222],
	    '秦皇岛': [119.2126,40.0232],
	    '绍兴': [120.564,29.7565],
	    '聊城': [115.9167,36.4032],
	    '肇庆': [112.1265,23.5822],
	    '舟山': [122.2559,30.2234],
	    '苏州': [120.6519,31.3989],
	    '莱芜': [117.6526,36.2714],
	    '菏泽': [115.6201,35.2057],
	    '营口': [122.4316,40.4297],
	    '葫芦岛': [120.1575,40.578],
	    '衡水': [115.8838,37.7161],
	    '衢州': [118.6853,28.8666],
	    '西宁': [101.4038,36.8207],
	    '西安': [109.1162,34.2004],
	    '贵阳': [106.6992,26.7682],
	    '连云港': [119.1248,34.552],
	    '邢台': [114.8071,37.2821],
	    '邯郸': [114.4775,36.535],
	    '郑州': [113.4668,34.6234],
	    '鄂尔多斯': [108.9734,39.2487],
	    '重庆': [107.7539,30.1904],
	    '金华': [120.0037,29.1028],
	    '铜川': [109.0393,35.1947],
	    '银川': [106.3586,38.1775],
	    '镇江': [119.4763,31.9702],
	    '长春': [125.8154,44.2584],
	    '长沙': [113.0823,28.2568],
	    '长治': [112.8625,36.4746],
	    '阳泉': [113.4778,38.0951],
	    '青岛': [120.4651,36.3373],
	    '韶关': [113.7964,24.7028]
	};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
       	if (fromCoord && toCoord) {
            res.push([
            	{
                	coord:fromCoord,
                	value: dataItem[0].value
	            },
	            {
	            	coord: toCoord,
	            }
            ]);
        }
    }
    return res;
};

var series = [];
var BJData = [];


BJData = [
    [{name:'保定',value:100}, {name:'重庆'}]
];
var option = {
	    backgroundColor: '#030511',
		title: {
	            text: '订单',
	            textStyle:{
	            	color:'#fff',
	            	fontSize:14
	            },
	            padding:[20,20,20,20]
	    },
		visualMap: { //图例值控制
	        min : 0,
	        max : 100,
	        calculable : true,
	        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
	        textStyle:{
	            color:'#fff'
	        }
	    },
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false, //是否允许缩放
			layoutCenter: ['50%', '53%'], //地图位置
			layoutSize:"110%",
			itemStyle: {
				normal: {
					color: 'rgba(51, 69, 89, 1)', //地图背景色
					borderColor: 'rgba(100,149,237,1)' //省市边界线
				},
				emphasis: {
					color: 'rgba(37, 43, 61, 0.5)'//悬浮背景
				}
			}
		},
						
		series: [
	 	     {//线样式
	 	         type: 'lines',
	 	         zlevel: 0,
	 	         effect: {
	 	             show: true,
	 	             // period: 1, //箭头指向速度，值越小速度越快
	 	             constantSpeed: 320, //固定速度，大于0的值后会忽略 period 配置项
	 	             trailLength: 0,//特效尾迹长度[0,1]值越大，尾迹越长重
	 	             symbol:'pin',//箭头图标
	 	             symbolSize: 15,//图标大小
	 	             color: '#fff',//路径颜色
//		 	             loop: false,
	 	         },
	 	         lineStyle: {
	 	             normal: {
	 	                 width: 0,//尾迹线条宽度
	 	             }
	 	         },
	 	         
//		 	         data: []
	 	        data: convertData(BJData),
	 	     },
	 	     {//被攻击点样式
	 	         type: 'effectScatter',
	 	         coordinateSystem: 'geo',
	 	         zlevel: 2,
	 	         
	 	         animationThreshold:function(val){
	 	             return 1;
	 	         },//(没用)是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
	 	         rippleEffect: {//涟漪特效
	 	         	period:12,//动画时间，值越小速度越快
	 	             brushType: 'stroke', //波纹绘制方式 stroke, fill
	 	             scale: 8, //波纹圆环最大限制，值越大波纹越大
	 	         },
	 	         symbol: 'circle',
	 	         symbolSize: function (val) {
	 	             return 8 + val[2] / 10; //圆环大小
	 	         },
	 	         itemStyle: {
	 	             normal: {
	 	             	show: false,
	 	                 color: '#f00'
	 	             }
	 	         },
//		 	         data: []
	 	         data: BJData.map(function (dataItem) {
	 	        	 return {
	 	                 name: dataItem[0].name,
	 	                 value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
 	             	};
	 	         }),
	 	     },
	 	    
	 	     {//攻击点样式
	 	         type: 'scatter',
	 	         coordinateSystem: 'geo',
	 	         zlevel: 2,
	 	         rippleEffect: {
	 	         	period:4,
	 	             brushType: 'stroke',
	 	             scale: 1
	 	         },
	 	         label: {
	 	             normal: {
	 	                 show: false,
	 	                 position: 'right',
//		 	 			                offset:[5, 0],
	 	 				
	 	 				color:'#00ffff',
	 	                 // formatter: '{b}',
	 	                 textStyle: {
	 	                 	color:"#00ffff"
	 	                 }
	 	             },
	 	             emphasis: {
	 	             	show: true
	 	             }
	 	         },
	 	         symbol: 'pin',
	 	        	symbolSize:30,
	 	         itemStyle: {
	 	             normal: {
	 	             	show: false,
	 	                 color: '#9966cc'
	 	             }
	 	         },
//		 	         data: []
	 	         data: BJData.map(function (dataItem) {
	 	        	 return {
	 	        		 name: dataItem[1].name,
	 	        		 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	 	        	 };
	 	         }),
	 	     }
	 	     ]
	};
  myChart.setOption(option);


	
function showChart(result){
//	BJData =[];
//	series =[];
//	option =[];
 	
 	if(result == '1'){
 	 	BJData = [
 		     [{name:'上海',value:100}, {name:'韶关'}],
// 		    [{name:'广州',value:100}, {name:'银川'}],
 		    // [{name:'哈尔滨',value:30}, {name:'天津'}],
 		    // [{name:'青岛',value:50}, {name:'天津'}],
 		    // [{name:'南昌',value:20}, {name:'天津'}],
 		    // [{name:'银川',value:100}, {name:'长沙'}],
 		    //[{name:'拉萨',value:100}, {name:'天津'}],
 		    // [{name:'西安',value:100}, {name:'天津'}],
 		    // [{name:'乌鲁木齐',value:100}, {name:'天津'}]
 		];
 	}else if(result == '2'){
 	 	BJData = [
 		     [{name:'东莞',value:100}, {name:'青岛'}],
// 		    [{name:'中山',value:100}, {name:'长治'}]
 		];
 	} else if(result == '3'){
 	 	BJData = [
 		    [{name:'东营',value:100}, {name:'阳泉'}]
 		];
 	}
 	 else if(result == '4'){
  	 	BJData = [
  		    [{name:'中山',value:100}, {name:'长治'}]
  		];
  	}
 	 else if(result == '5'){
  	 	BJData = [
  		    [{name:'临汾',value:100}, {name:'长沙'}]
  		];
  	}
 	 else if(result == '6'){
  	 	BJData = [
  		    [{name:'临沂',value:100}, {name:'长春'}],
//  		  [{name:'丹东',value:100}, {name:'镇江'}]
  		];
  	}
 	 else if(result == '7'){
  	 	BJData = [
  		    [{name:'丹东',value:100}, {name:'镇江'}]
  		];
  	}
 	 else if(result == '8'){
  	 	BJData = [
  		    [{name:'丽水',value:100}, {name:'银川'}]
  		];
  	}
 	 else if(result == '9'){
  	 	BJData = [
  		    [{name:'乌鲁木齐',value:100}, {name:'铜川'}]
  		];
  	}
 	 else if(result == '10'){
  	 	BJData = [
  		    [{name:'佛山',value:100}, {name:'金华'}]
  		];
  	}
 	 else if(result == '11'){
  	 	BJData = [
  		    [{name:'保定',value:100}, {name:'重庆'}]
  		];
  	}
 	 else if(result == '12'){
  	 	BJData = [
  		    [{name:'兰州',value:100}, {name:'鄂尔多斯'}],
  		  [{name:'南京',value:100}, {name:'邢台'}]
  		];
  	}
 	 else if(result == '13'){
   	 	BJData = [
   		    [{name:'包头',value:100}, {name:'郑州'}]
   		];
   	}
 	 else if(result == '14'){
   	 	BJData = [
   		    [{name:'北京',value:100}, {name:'贵阳'}],
//   		    [{name:'兰州',value:100}, {name:'鄂尔多斯'}]
   		];
   	}
 	 else if(result == '15'){
   	 	BJData = [
   		    [{name:'北海',value:100}, {name:'邯郸'}]
   		];
   	}
 	 else if(result == '16'){
   	 	BJData = [
   		    [{name:'南京',value:100}, {name:'邢台'}]
   		];
   	}
 	 else if(result == '17'){
   	 	BJData = [
   		    [{name:'南宁',value:100}, {name:'西宁'}],
//   		 [{name:'兰州',value:100}, {name:'鄂尔多斯'}]
   		];
   	}
 	
 	 
//  	option = {
// 		    backgroundColor: '#030511',
// 			title: {
// 		            text: '订单',
// 		            textStyle:{
// 		            	color:'#fff',
// 		            	fontSize:14
// 		            },
// 		            padding:[20,20,20,20]
// 		    },
// 			visualMap: { //图例值控制
// 		        min : 0,
// 		        max : 100,
// 		        calculable : true,
// 		        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
// 		        textStyle:{
// 		            color:'#fff'
// 		        }
// 		    },
// 			geo: {
// 				map: 'china',
// 				label: {
// 					emphasis: {
// 						show: false
// 					}
// 				},
// 				roam: false, //是否允许缩放
// 				layoutCenter: ['50%', '53%'], //地图位置
// 				layoutSize:"110%",
// 				itemStyle: {
// 					normal: {
// 						color: 'rgba(51, 69, 89, 1)', //地图背景色
// 						borderColor: 'rgba(100,149,237,1)' //省市边界线
// 					},
// 					emphasis: {
// 						color: 'rgba(37, 43, 61, 0.5)'//悬浮背景
// 					}
// 				}
// 			},
// 							
// 			series: [
// 		 	    
//		 	     {//线样式
//		 	         type: 'lines',
//		 	         zlevel: 0,
//		 	         effect: {
//		 	             show: true,
//		 	             // period: 1, //箭头指向速度，值越小速度越快
//		 	             constantSpeed: 320, //固定速度，大于0的值后会忽略 period 配置项
//		 	             trailLength: 0,//特效尾迹长度[0,1]值越大，尾迹越长重
//		 	             symbol:'pin',//箭头图标
//		 	             symbolSize: 15,//图标大小
//		 	             color: '#fff',//路径颜色
////		 	             loop: false,
//		 	         },
//		 	         lineStyle: {
//		 	             normal: {
//		 	                 width: 0,//尾迹线条宽度
//		 	             }
//		 	         },
//		 	         
//		 	         data: convertData(BJData)
//		 	     },
//		 	     {//被攻击点样式
//		 	         type: 'effectScatter',
//		 	         coordinateSystem: 'geo',
//		 	         zlevel: 2,
//		 	         
//		 	         animationThreshold:function(val){
//		 	             return 1;
//		 	         },//(没用)是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
//		 	         rippleEffect: {//涟漪特效
//		 	         	period:12,//动画时间，值越小速度越快
//		 	             brushType: 'stroke', //波纹绘制方式 stroke, fill
//		 	             scale: 8, //波纹圆环最大限制，值越大波纹越大
//		 	         },
//		 	         symbol: 'circle',
//		 	         symbolSize: function (val) {
//		 	             return 8 + val[2] / 10; //圆环大小
//		 	         },
//		 	         itemStyle: {
//		 	             normal: {
//		 	             	show: false,
//		 	                 color: '#f00'
//		 	             }
//		 	         },
//		 	         data: BJData.map(function (dataItem) {
//		 	             return {
//		 	                 name: dataItem[0].name,
//		 	                 value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
//		 	             };
//		 	         }),
//		 	     },
//		 	    
//		 	     {//攻击点样式
//		 	         type: 'scatter',
//		 	         coordinateSystem: 'geo',
//		 	         zlevel: 2,
//		 	         rippleEffect: {
//		 	         	period:4,
//		 	             brushType: 'stroke',
//		 	             scale: 1
//		 	         },
//		 	         label: {
//		 	             normal: {
//		 	                 show: false,
//		 	                 position: 'right',
////		 	 			                offset:[5, 0],
//		 	 				
//		 	 				color:'#00ffff',
//		 	                 // formatter: '{b}',
//		 	                 textStyle: {
//		 	                 	color:"#00ffff"
//		 	                 }
//		 	             },
//		 	             emphasis: {
//		 	             	show: true
//		 	             }
//		 	         },
//		 	         symbol: 'pin',
//		 	        	symbolSize:30,
//		 	         itemStyle: {
//		 	             normal: {
//		 	             	show: false,
//		 	                 color: '#9966cc'
//		 	             }
//		 	         },
//		 	         data: BJData.map(function (dataItem) {
//		 	             return {
//		 	                 name: dataItem[1].name,
//		 	                 value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//		 	             };
//		 	         }),
//		 	     }
//		 	     ]
// 		};
 	
 	option.series[0].data.push(convertData(BJData));
 	option.series[1].data.push(BJData.map(function (dataItem) {
         return {
	         name: dataItem[0].name,
	         value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
         };
    }));
 	option.series[2].data.push(BJData.map(function (dataItem) {
         return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
      }));
 	console.info("series[0].data:"+option.series[0].data);
  	console.info("series size:"+series.length);
 	myChart.setOption(option);
}





//++++++++ websocket start 
var websocket = null;

 //判断当前浏览器是否支持WebSocket
 if('WebSocket' in window){
     websocket = new WebSocket("ws://localhost:8081/websocket");
 }
 else{
     alert('Not support websocket')
 }

 //连接发生错误的回调方法
 websocket.onerror = function(){
     setMessageInnerHTML("error");
 };

 //连接成功建立的回调方法
 websocket.onopen = function(event){
     setMessageInnerHTML("open");
 }

 //接收到消息的回调方法
 websocket.onmessage = function(event){
     setMessageInnerHTML(event.data);
 }

 //连接关闭的回调方法
 websocket.onclose = function(){
     setMessageInnerHTML("close");
 }

 //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
 window.onbeforeunload = function(){
     websocket.close();
 }

 //将消息显示在网页上
 function setMessageInnerHTML(innerHTML){
     document.getElementById('message').innerHTML += innerHTML + '<br/>';
     showChart(innerHTML);
 }

 //关闭连接
 function closeWebSocket(){
     websocket.close();
 }

 //发送消息
 function send(){
     var message = document.getElementById('text').value;
     websocket.send(message);
 }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++websocket end 
 
 
 