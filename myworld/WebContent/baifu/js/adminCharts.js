$(document).ready(function(){
	adminCharts.userStatistics();
});

var adminCharts = {
		//用户统计
		userStatistics : function(){
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('userStatisticsCharts'));

			// 指定图表的配置项和数据
			//app.title = '折柱混合';

			var option = {
					 title: {
			                text: '注册用户统计'
			            },
			    tooltip: {
			        trigger: 'axis'
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {show: true}
			        }
			    },
			    legend: {
			        data:['总量','增长量']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '总量',
			            min: 0,
			            max: 700,
			            interval: 50,
			            axisLabel: {
			                formatter: '{value}'
			            }
			        },
			        {
			            type: 'value',
			            name: '增长量',
			            min: 0,
			            max: 350,
			            interval: 50,
			            axisLabel: {
			                formatter: '{value}'
			            }
			        }
			    ],
			    series: [
			        {
			            name:'总量',
			            type:'bar',
			            data:[20,30,35,42,44,50,68,90,150,235,355,680]
			        },
			       
			        {
			            name:'增长量',
			            type:'line',
			            yAxisIndex: 1,
			            data:[20,10,15,7,2,6,18,22,60,85,120,325]
			        }
			    ]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		}
};

