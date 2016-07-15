seajs.config({
 //base 基础路径
  base:"./dist/topo/",
// alias:别名
            alias: {     
                'jquery':'jquery.min.js',
                'TSB':'main.js',
                'T':'TSB.js',
                'bootstrap':'bootstrap.min.js',
                /*'metronic':'metronic.js',
                'layout':'layout.js',
                'quick_sidebar':'quick-sidebar.js',
                'demo':'demo.js',*/
                'overview_topo':'app_topo.js',
                'app_topo_dashboard':'app_topo_dashboard.js',
                'jqueryTsbPlugin':'jquery-tsb-plugins.js',
                /*'event_extension':'event-extension.js',*/
                'app_vis_topo':'vis_topo.js',
                'app_vis_tool':'vis_tool.js',
                'echarts':'echarts/echarts-plain.js',
                'echartsPlugin':'echarts/echarts-plugin.js',
                'echartsDriverDataMixed':'echarts/echartsDriverDataMixed.js',
                'echartsDriverDataPie':'echarts/echartsDriverDataPie.js',
                'echartsDriverDataGauge':'echarts/echartsDriverDataGauge.js',
                'echartsDriverDataMap':'echarts/echartsDriverDataMap.js',
                'echartsDriverDataRadar':'echarts/echartsDriverDataRadar.js',
                'echartsDriverDataScatter':'echarts/echartsDriverDataScatter.js',
                'echartsDriverDataLine':'echarts/echartsDriverDataLine.js',
                'echartsDriverThemeDefaultTsb':'echarts/default-tsb.js',
                'echartsDriverDataMiniRing':"echarts/echartsDriverDataMiniRing.js",
                'echartsDriverThemeMiniRing':"echarts/echartsDriverThemeMiniRing.js",
                
              },
            preload: ['jquery'],
            charset: 'utf-8' 
});
