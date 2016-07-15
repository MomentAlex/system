/**
 * Created by neeke on 14-5-15.
 */
var app_enum = (function () {

    return {
        'mobile_sdk_type_ios':1,
        'mobile_sdk_type_android':2,

        'target_type_domain': 1,
        'target_type_page': 2,
        'target_type_host': 3,
        'target_type_host_list': 7,
        'TARGET_TYPE_API': 4,

        'check_status_normal': 1,
        'check_status_offline': 0,
        'domain_status_normal': 1,
        'domain_status_offline': 2,
        'domain_status_stop': 3,

        'host_status_on': 1,
        'host_status_off': 2,
        'app_status_on': 1,
        'app_status_off': 2,

        'service_status_normal': 2,
        'service_status_stop': 1,
        'service_status_offline': 3,

        'service_type_dns': 1,
        'service_type_ping': 2,
        'service_type_ftp': 3,
        'service_type_smtp': 4,
        'service_type_tcp': 5,
        'service_type_timer': 6,
        'service_type_traceroute': 7,
        'service_type_udp': 8,
        'service_type_page_reliability': 9,//页面可靠性
        'service_type_page_property': 10,//页面全景

        'page_status_normal': 1,
        'page_status_offline': 0,
        'page_type_normal': 1,
        'page_type_homepage': 2,
        'page_type_competitor': 3,

        'alert_config_status_normal': 1,
        'alert_config_status_offline': 2,
        'alert_config_status_stop': 3,
        'alert_config_alarm_normal': 2,     //报警开启
        'alert_config_alarm_stop': 1,       //报警关闭
        'alert_config_type_warning': 1,    //警告类型
        'alert_config_type_error': 2,      //故障类型
        'alert_config_type_message': 3,    //短信提醒
        'alert_config_type_email': 4,       //邮件提醒
        'alert_config_alarm_domain': 1,
        'alert_config_alarm_page': 2,
        'alert_config_alarm_host': 3,
        'alert_config_alarm_api': 4,

        'alert_level_warning': 1,
        'alert_level_error': 2,
        'alert_level_recover': 3,

        'monitor_nc': 1,//华北
        'monitor_ec': 2,//华东
        'monitor_csc': 3, //华中南
        'monitor_wnc': 4, //华西北
        'monitor_wsc': 5, //华西南
        'monitor_enc': 6, //华东北
        'monitor_domestic': 7, //国内
        'monitor_foreign': 8, //国外
        'monitor_mobile': 9, //移动
        'monitor_unicom': 10, //联通
        'monitor_dianxin': 11, //电信

        mobile_bug_fixed:2,
        mobile_bug_unfixed:1,
        mobile_bug_all:0,

        //后台登陆前台的权限设置
        admin_operate:1,
        admin_nooperate:2
    };
})();

//事件枚举
var event_enum = (function () {
    return {
        event_date: 'common_date',//公共时间事件
        host_report_overview: 'host_report_overview', //主机概览事件
        host_report_cpu: 'host_report_cpu', //主机CPU事件
        host_report_ram: 'host_report_ram', //主机RAM事件
        host_report_process: 'host_report_process', //主机进程事件
        host_report_disk: 'host_report_disk', //主机disk事件
        host_report_nic: 'host_report_nic', //主机网卡事件
        host_report_tcp: 'host_report_nic', //主机TCP事件
        host_report_mysql: 'host_report_mysql', //主机mysql事件
        host_report_oracle: 'host_report_oracle', //主机oracle事件
        host_report_sqlserver: 'host_report_sqlserver', //主机sqlserver事件
        host_report_postgresql: 'host_report_postgresql', //主机postgresql事件
        host_report_apache: 'host_report_apache', //主机apache事件
        host_report_tomcat: 'host_report_tomcat', //主机tomcat事件
        host_report_redis: 'host_report_redis', //主机redis事件
        host_report_memcache: 'host_report_memcache', //主机memcache事件
        host_report_rabbitmq: 'host_report_rabbitmq' //主机memcache事件
    }
})();

//主机报告定时刷新枚举
var host_refresh_timer = (function () {
    return {
        ajax_switch: false,//定时刷新开关
        time: 10000 //时间
    }
})();

//时间段枚举
var date_range_enum = (function () {
    return{
        'last30minute': 30 * 60 * 1000,
        'last1hour': 60 * 60 * 1000,
        'last6hour': 6 * 3600 * 1000,
        'last12hour': 12 * 3600 * 1000,
        'last1day': 24 * 3600 * 1000,
        'last7day': 7 * 24 * 3600 * 1000,
        'last30day': 30 * 24 * 3600 * 1000
    }
})();

//监测点名称枚举
var monitor_name = (function () {
    var oMenu = {};
    oMenu[app_enum.monitor_nc] = '华北';
    oMenu[app_enum.monitor_ec] = '华东';
    oMenu[app_enum.monitor_csc] = '华中南';
    oMenu[app_enum.monitor_wnc] = '华西北';
    oMenu[app_enum.monitor_wsc] = '华西南';
    oMenu[app_enum.monitor_enc] = '华东北';
    oMenu[app_enum.monitor_domestic] = '国内';
    oMenu[app_enum.monitor_foreign] = '国外';
    oMenu[app_enum.monitor_mobile] = '移动';
    oMenu[app_enum.monitor_unicom] = '联通';
    oMenu[app_enum.monitor_dianxin] = '电信';
    return oMenu;
})();

var alert_level_name = (function () {
    var oMenu = {};
    oMenu[app_enum.alert_level_warning] = 'warning';
    oMenu[app_enum.alert_level_error] = 'error';
    oMenu[app_enum.alert_level_recover] = 'recover';
    return oMenu;
})();

var app_setting = (function () {

    return {
        'api_project_app_create': '/api/app/create',
        'api_project_app_update': '/api/app/update',
        'api_project_app_get': '/api/app/get',
        'api_project_app_list': '/api/app/list',

        'api_project_site_create': '/api/site/create',
        'api_project_site_modify': '/api/site/modify',
        'api_project_site_status_modify': '/api/site/status/modify',
        'api_project_site_get': '/api/site/get',
        'api_project_site_list': '/api/site/list',

        'api_project_page_create': '/api/page/create',
        'api_project_page_modify': '/api/page/modify',
        'api_project_page_status_modify': '/api/page/status/modify',
        'api_project_page_get': '/api/page/get',
        'api_project_page_list': '/api/page/list',

        'api_project_host_modify': '/api/host/modify',
        'api_host_status_modify': '/api/host/status/modify',
        'api_service_modify': '/api/service/modify/',

        'api_service_site_get': '/api/service/site/get',

        'api_service_page_get': '/api/service/page/get',

        'api_monitor_list_load': '/api/service/monitor/list',
        'api_service_setting_modify': '/api/service/setting/modify',

        'api_alert_setting_get': '/api/alert/setting/get',
        'api_alert_setting_modify': '/api/alert/setting/modify',

        /****** mobile ******/
        'api_mobile_pro_create': '/mobile/api/pro_create',
        'api_mobile_pro_modify': '/mobile/api/pro_modify',
        'api_mobile_api_modify': '/mobile/api/api_modify',
        'api_mobile_api_list': '/mobile/api/api_list',
        'api_mobile_template_list': '/mobile/api/template_list',
        'api_mobile_template_info': '/mobile/api/template_info',
        'api_mobile_api_order': '/mobile/api/api_order',
        'api_mobile_var_list': '/mobile/api/var_list',
        'api_mobile_var_modify': '/mobile/api/var_modify',
        'api_mobile_vars_delete': '/mobile/api/vars_delete',
        'api_mobile_api_delete': '/mobile/api/api_delete',
        'api_mobile_var_api': '/mobile/api/var_api',
        'api_mobile_template_modify': '/mobile/api/template_modify',
        'api_mobile_pro_schedule': '/mobile/api/pro_schedule',
        'api_task_status_update': '/mobile/api/task_status_update',
        'api_mobile_pro_test': '/mobile/api/pro_test',

        'app_mobile_app_create': '/mobile/sdk/app_modify',


        'api_app_status_modify': '/app/status/modify',


        /****** admin ******/
        'ajax_load_register_user': '/ajax/get_register_user',
        'ajax_dispose_register': '/ajax/dispose_register',
        'ajax_active_email_resend':'/ajax/active_email_resend',

        /***** group ******/
        'ajax_load_groups': '/ajax/get_groups',
        'ajax_create_group': '/ajax/group/create',
        'ajax_modify_group': '/ajax/group/modify',
        'ajax_load_group_users': '/ajax/get_group_users',
        'ajax_add_user': '/ajax/user/create',
        'ajax_modify_user_status': '/ajax/user/modify_status',
        'ajax_modify_user_group': '/ajax/user/modify_group',
        'ajax_add_site_user': '/ajax/site/add_user',//
        'ajax_remove_team_user': '/site/team/remove',//
        'ajax_modify_team_user': '/site/user/modify',//
        'ajax_modify_alert_status': '/ajax/site/alert/status',
        'ajax_get_group_user': '/ajax/site/group/user',
        'ajax_modify_size_status': '/ajax/site/size/status',
        'ajax_load_team_users': '/ajax/load_team_users',

        /****** user center ******/
        'ajax_user_login': '/signin',
        'ajax_load_modify_email': '/ajax/user/new_email',
        'ajax_send_email_code': '/ajax/user/email_code',
        'ajax_check_email_code': '/ajax/user/check_code',
        'ajax_modify_user_email': '/ajax/user/modify_email',
        'ajax_load_user_info': '/ajax/user/user_info',
        'ajax_modify_user_info': '/ajax/user/modify_info',
        'ajax_modify_user_pass': '/ajax/user/modify_pass',
        'ajax_load_user_like': '/ajax/user/user_like',
        'ajax_modify_user_like': '/ajax/user/modify_like',
        'ajax_load_sms_setting': '/ajax/user/sms_setting',
        'ajax_modify_sms_setting': '/ajax/user/modify_sms_setting',
        'ajax_load_email_setting': '/ajax/user/email_setting',
        'ajax_modify_email_setting': '/ajax/user/modify_email_setting',

        /********* 全景瀑布图 *********/
        'ajax_project_har_type': '/ajax/project/har/type',
        'ajax_project_har_domain': '/ajax/project/har/domain',

        /*********** 告警页面 **********/
        'ajax_load_alert_detail': '/alert/page/detail',
        'ajax_load_alert_detail_more': '/alert/page/detail',

        /************* 移动端 ****************/
        'sdk_app_status_modify': '/sdk/status/modify'
    };
})();


//用户中心枚举
var ucenter_setting = (function () {

    return {
        'email_code_time_out' : 120      //用户中心修改邮箱时，验证码过期时间
    }

})();

var service_type_enum = (function () {

    return {
        'TYPE_SERVICE' : 200, //服务
    'type_apache'       :201, //apache //apache的监控插件类型
    'type_lighttpd'     :202,
        'type_nginx'    :203,
        'type_mysql'    :204,
        'type_mongodb'  :205,
        'type_redis'    :206,
        'type_memcache' :207,
        'type_tomcat'   :208,
        'type_iis'      :209,
        'type_sqlserver':210,
        'type_oracle'   :211,
        'type_weblogic' :212,
        'type_postgresql':213,
        'type_RabbitMQ' :215
    }

})();


var color_enum = (function () {

    return {
        'LightPink'         	:'#FFB6C1',	//浅粉红
        'Pink'		            :'#FFC0CB', //粉红
        'Crimson'		        :'#DC143C',	//猩红
        'LavenderBlush'	        :'#FFF0F5',	//脸红的淡紫色	'
        'PaleVioletRed'		    :'#DB7093',	//苍白的紫罗兰红色
        'HotPink'		        :'#FF69B4',	//热情的粉红
        'DeepPink'		        :'#FF1493',	//深粉色
        'MediumVioletRed'		:'#C71585',	//适中的紫罗兰红色
        'Orchid'		        :'#DA70D6',	//兰花的紫色
        'Thistle'		        :'#D8BFD8',	//蓟
        'plum'		            :'#DDA0DD',	//李子
        'Violet'	            :'#EE82EE',	//紫罗兰
        'Magenta'		        :'#FF00FF',	//洋红
        'Fuchsia'		        :'#FF00FF',	//灯笼海棠(紫红色)
        'DarkMagenta'		    :'#8B008B', //深洋红色
        'Purple'                :'#800080',	//紫色
        'MediumOrchid'          :'#BA55D3',	//适中的兰花紫
        'DarkVoilet'            :'#9400D3',	//深紫罗兰色
        'DarkOrchid'            :'#9932CC',	//深兰花紫
        'Indigo'                :'#4B0082',	//靛青
        'BlueViolet'	        :'#8A2BE2',	//　		深紫罗兰的蓝色
        'MediumPurple'          :'#9370DB',	//　		适中的紫色
        'MediumSlateBlue'	    :'#7B68EE',	//　		适中的板岩暗蓝灰色
        'SlateBlue'             :'#6A5ACD',	//　		板岩暗蓝灰色
        'DarkSlateBlue'         :'#483D8B', //　		深岩暗蓝灰色
        'Lavender'              :'#E6E6FA',	//　		熏衣草花的淡紫色
        'GhostWhite'            :'#F8F8FF',	//　		幽灵的白色
        'Blue'                  :'#0000FF',	//　		纯蓝
        'MediumBlue'            :'#0000CD',	//　		适中的蓝色
        'MidnightBlue'          :'#191970', //午夜的蓝色
        'DarkBlue'              :'#00008B',	//　		深蓝色
        'Navy'                  :'#000080',	//　		海军蓝
        'RoyalBlue'             :'#4169E1',	//　		皇军蓝
        'CornflowerBlue'        :'#6495ED',	//矢车菊的蓝色
        'LightSteelBlue'        :'#B0C4DE',	//　		淡钢蓝
        'LightSlateGray'        :'#778899',	//浅石板灰
        'SlateGray'             :'#708090',	//　		石板灰
        'DoderBlue'             :'#1E90FF',	//　		道奇蓝
        'AliceBlue'             :'#F0F8FF',	//　		爱丽丝蓝
        'SteelBlue'             :'#4682B4',	//　		钢蓝
        'LightSkyBlue'          :'#87CEFA',	//　		淡蓝色
        'SkyBlue'               :'#87CEEB',	//　		天蓝色
        'DeepSkyBlue'           :'#00BFFF',	//　		深天蓝
        'LightBLue'             :'#ADD8E6',	//　		淡蓝
        'PowDerBlue'            :'#B0E0E6',	//　		火药蓝
        'CadetBlue'             :'#5F9EA0',	//　		军校蓝
        'Azure'                 :'#F0FFFF',	//　		蔚蓝色
        'LightCyan'             :'#E1FFFF',	//　		淡青色
        'PaleTurquoise'         :'#AFEEEE',	//　		苍白的绿宝石
        'Cyan'                  :'#00FFFF',	//　		青色
        'Aqua'                  :'#00FFFF',	//　		水绿色
        'DarkTurquoise'         :'#00CED1', //深绿宝石
        'DarkSlateGray'         :'#2F4F4F',	//　		深石板灰
        'DarkCyan'              :'#008B8B', //深青色
        'Teal'                  :'#008080',	//　		水鸭色
        'MediumTurquoise'       :'#48D1CC', //适中的绿宝石
        'LightSeaGreen'         :'#20B2AA',	//　		浅海洋绿
        'Turquoise'             :'#40E0D0',	//　		绿宝石
        'Auqamarin'             :'#7FFFAA',	//　		绿玉\碧绿色
        'MediumAquamarine'      :'#00FA9A',	//　		适中的碧绿色
        'MediumSpringGreen'     :'#F5FFFA',	//　		适中的春天的绿色
        'MintCream'             :'#00FF7F',	//　		薄荷奶油
        'SpringGreen'           :'#3CB371',	//　		春天的绿色
        'SeaGreen'              :'#2E8B57',	//　		海洋绿
        'Honeydew'              :'#F0FFF0',	//　		蜂蜜
        'LightGreen'            :'#90EE90',	//　		淡绿色
        'PaleGreen'             :'#98FB98',	//　		苍白的绿色
        'DarkSeaGreen'          :'#8FBC8F',	//　		深海洋绿
        'LimeGreen'             :'#32CD32', //	酸橙绿
        'Lime'                  :'#00FF00',	//　		酸橙色
        'ForestGreen'           :'#228B22',	//　		森林绿
        'Green'                 :'#008000',	//　		纯绿
        'DarkGreen'             :'#006400',	//　		深绿色
        'Chartreuse'            :'#7FFF00',	//　		查特酒绿
        'LawnGreen'             :'#7CFC00', //	草坪绿
        'GreenYellow'           :'#ADFF2F',	//　		绿黄色
        'OliveDrab'             :'#556B2F',	//　		橄榄土褐色
        'Beige'                 :'#6B8E23',	//　		米色(浅褐色)
        'LightGoldenrodYellow'  :'#FAFAD2',	//　		浅秋麒麟黄
        'Ivory'                 :'#FFFFF0',	//　		象牙
        'LightYellow'           :'#FFFFE0',	//　		浅黄色
        'Yellow'                :'#FFFF00',	//　		纯黄
        'Olive'                 :'#808000',	//　		橄榄
        'DarkKhaki'             :'#BDB76B',	//　		深卡其布
        'LemonChiffon'          :'#FFFACD',	//　		柠檬薄纱
        'PaleGodenrod'          :'#EEE8AA',	//　		灰秋麒麟
        'Khaki'                 :'#F0E68C',	//　		卡其布
        'Gold'                  :'#FFD700',	//　		金
        'Cornislk'              :'#FFF8DC',	//　		玉米色
        'GoldEnrod'             :'#DAA520',	//　		秋麒麟
        'FloralWhite'           :'#FFFAF0',	//　		花的白色
        'OldLace'               :'#FDF5E6',	//　		老饰带
        'Wheat'                 :'#F5DEB3',	//　		小麦色
        'Moccasin'              :'#FFE4B5',	//　		鹿皮鞋
        'Orange'                :'#FFA500',	//　		橙色
        'PapayaWhip'            :'#FFEFD5',	//　		番木瓜
        'BlanchedAlmond'        :'#FFEBCD',	//　		漂白的杏仁
        'NavajoWhite'           :'#FFDEAD',	//　		Navajo白
        'AntiqueWhite'          :'#FAEBD7',	//　		古代的白色
        'Tan'	                :'#D2B48C',	//　		晒黑
        'BrulyWood'             :'#DEB887',	//　		结实的树
        'Bisque'                :'#FFE4C4',	//　		(浓汤)乳脂,番茄等
        'DarkOrange'            :'#FF8C00',	//　		深橙色
        'Linen'                 :'#FAF0E6',	//　		亚麻布
        'Peru'                  :'#CD853F',	//　		秘鲁
        'PeachPuff'	            :'#FFDAB9',	//　		桃色
        'SandyBrown'            :'#F4A460',	//　		沙棕色
        'Chocolate'             :'#D2691E',	//　		巧克力
        'SaddleBrown'           :'#8B4513',	//　		马鞍棕色
        'SeaShell'              :'#FFF5EE',	//　		海贝壳
        'Sienna'                :'#A0522D',	//　		黄土赭色
        'LightSalmon'           :'#FFA07A',	//　		浅鲜肉(鲑鱼)色
        'Coral'                 :'#FF7F50',	//　		珊瑚
        'OrangeRed'             :'#FF4500',	//　		橙红色
        'DarkSalmon'            :'#E9967A',	//　		深鲜肉(鲑鱼)色
        'Tomato'                :'#FF6347',	//　		番茄
        'MistyRose'             :'#FFE4E1',	//　		薄雾玫瑰
        'Salmon'                :'#FA8072',	//　		鲜肉(鲑鱼)色
        'Snow'                  :'#FFFAFA',	//　		雪
        'LightCoral'            :'#F08080',	//　		淡珊瑚色
        'RosyBrown'             :'#BC8F8F',	//　		玫瑰棕色
        'IndianRed'             :'#CD5C5C',	//　		印度红
        'Red'                   :'#FF0000',	//　		纯红
        'Brown'	                :'#A52A2A',	//　		棕色
        'FireBrick'             :'#B22222',	//　		耐火砖
        'DarkRed'               :'#8B0000',	//　		深红色
        'Maroon'                :'#800000',	//　		栗色
        'White'                 :'#FFFFFF',	//　		纯白
        'WhiteSmoke'            :'#F5F5F5',	//　		白烟
        'Gainsboro'             :'#DCDCDC',	//　		Gainsboro
        'LightGrey'             :'#D3D3D3',	//　		浅灰色
        'Silver'                :'#C0C0C0',	//　		银白色
        'DarkGray'              :'#A9A9A9',	//　		深灰色
        'Gray'	                :'#808080',	//　		灰色
        'DimGray'               :'#696969',	//　		暗淡的灰色
        'Black'	                :'#000000',	//　		纯黑


        'session1'              :'#49C4FF',
        'session2'              :'#FF747A',
        'session3'              :'#32B983',
        'session4'              :'#C7A6FF',
        'session5'              :'#3673B9'
    }

})();




var mobile_session_color_list = (function () {

    return {
//        0:'DarkTurquoise',
//        1:'CornflowerBlue',
//        2:'CadetBlue',
//        3:'LightGreen',
//        4:'SeaGreen'
        0:'session1',
        1:'session2',
        2:'session3',
        3:'session4',
        4:'session5'
    }

})();

//时间段枚举
var page_enum = (function () {
    return{
        page_jump : 1
    }
})();

var sdk_user_info=function (k) {
    var info={
        cwsa_user_id : lang_sdk_user.id,
        cwsa_user_name : lang_sdk_user.name,
        cwsa_user_email : lang_sdk_user.email
    };
    if(info[k]){
        return info[k];
    }else{
        return k;
    }
};
/**
 * 获取App请求跟踪中的上下要浮动的时间
 */
var request_float_time = 5 * 60 * 1000; //浮动时间单位ms

