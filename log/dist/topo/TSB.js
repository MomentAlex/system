/**
 * Created by neeke on 14-5-15.
 *
 * 前端组件库
 */
console.log('TSB.js')
 define(function (require, exports, module) {
	var $ = jQuery = require('jquery');
	var T;
    var TSB = require('TSB');
	T = (function ($, window, document, undefined) {

		var alert = function (msg, type) {
			TSB.modalAlert({status: type ? type : 'success', msg: msg});
		};

		/*var restGet = function (url, data, success, error, type) {
			var der = $.Deferred();
			$.ajax({
				url: url,
				type: type || "get",
				data: data,
				dataType: "json",
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//TODO 防止后台出现500等错误时出现"服务器错误弹窗"
					//TSB.modalAlert({status: 'danger', msg: lang_common.server_error});
				}
			}).done(function (data) {
					if (data && data.code === 1000) {
						if (typeof success === "function") {
							success.call(this, data);
						}
						der.resolve();
					}
					else {
						if (typeof error === 'function') {
							error.call(this, data);
						}
						der.reject(data);
					}
				}).fail(function () {

					der.reject();
				});
			return der.promise();
		};*/
		//'test test'
        var restGet = function (url, data2, success, error, type) {
			var der = $.Deferred();
			    console.log('模拟数据位置 ,覆盖 ajax 请求数据接口')
			var data={"code":1000,"msg":"success","data":{"nodes":[{"id":"or:10.201.128.108:1521","label":"Oracle:10.201.128.108:1521","group":"oracle","color":"#202020"},{"id":"curl:st.osp.cc:80","label":"RESTApi:st.osp.cc:80","group":"cloud","color":"#333"},{"id":"m:10.201.128.47:3306","label":"MySQL:10.201.128.47:3306","group":"mysql","color":"#202020"},{"id":"m:10.201.129.90:3306","label":"MySQL:10.201.129.90:3306","group":"mysql","color":"#202020"},{"id":"curl:10.201.64.61:8080","label":"RESTApi:10.201.64.61:8080","group":"cloud","color":"#333"},{"id":"10835246136275355","label":"blgroup-osp-bigdata:21080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10623055584214657","label":"product-admin:8080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10610312368693336","label":"product-syn:8084","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10591070008086537","label":"quartz-monitor:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10545086851016651","label":"promotion-service:7180","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10517605654034013","label":"blgroup-osp-comment:25080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"10113593838411385","label":"blgroup-smbr:21280","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"9127537048288639","label":"content-service:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"9013036032230790","label":"211.147.90.118:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8826614840328635","label":"product-business:8082","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8771946656541834","label":"oms-admin:8092","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8566563552742543","label":"blgroup-osp-points:32988","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8398878582657004","label":"blgroup-osp-site:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8353567216141236","label":"blgroup-osp-site-api:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"8006625910336418","label":"blgroup-osp-api:7200","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"7906268023350533","label":"blgroup-shop-prod:28080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"7341690955256413","label":"blgroup-osp-social:28080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"7300203660706410","label":"trial-admin-service:7410","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"6932861656106481","label":"blgroup-osp-mbr:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"6712043633158368","label":"tms-business:8010","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"6191106005545717","label":"bigdata-member-web:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"6051758300440575","label":"blgroup-osp:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"6044265907115919","label":"content_admin_service:7010","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"5508603760520104","label":"store.st.iokbl.com:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"5263676916885163","label":"marketing-admin-service:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"5114646465337609","label":"member-service:7080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"4881906533167534","label":"blgroup-osp-camp:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"4758533875653328","label":"oms-core:8090","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"4255658046616360","label":"blgroup-osp-marketing:21080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"3540032301805763","label":"blgroup-osp-sales:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"3446210710381886","label":"product-inner:8086","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"3157860086410358","label":"marketing-service:7310","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"2859633763162302","label":"iokblShoppingCartApi:9081","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"2761737483103615","label":"osp-cas:8080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"3"},{"id":"2384298676667985","label":"promotion-admin-service:7480","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"2225511026367881","label":"blgroup-osp-prod:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1932006836360898","label":"store.st.bl.com:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1719662550669181","label":"member-admin-service:7082","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1593589904480665","label":"blgroup-osp-report:29080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1395601115678553","label":"campaign-service:7280","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1290860217510751","label":"campaign-admin-service:7380","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1188069182588207","label":"trial-service:7610","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"},{"id":"1118355588828072","label":"bigdata-member-service:7220","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1"}],"app_list":{"10835246136275355":"blgroup-osp-bigdata:21080","10623055584214657":"product-admin:8080","10610312368693336":"product-syn:8084","10591070008086537":"quartz-monitor:19080","10545086851016651":"promotion-service:7180","10517605654034013":"blgroup-osp-comment:25080","10113593838411385":"blgroup-smbr:21280","9127537048288639":"content-service:7210","9013036032230790":"211.147.90.118:80","8826614840328635":"product-business:8082","8771946656541834":"oms-admin:8092","8566563552742543":"blgroup-osp-points:32988","8398878582657004":"blgroup-osp-site:18080","8353567216141236":"blgroup-osp-site-api:19080","8006625910336418":"blgroup-osp-api:7200","7906268023350533":"blgroup-shop-prod:28080","7341690955256413":"blgroup-osp-social:28080","7300203660706410":"trial-admin-service:7410","6932861656106481":"blgroup-osp-mbr:18080","6712043633158368":"tms-business:8010","6191106005545717":"bigdata-member-web:7210","6051758300440575":"blgroup-osp:18080","6044265907115919":"content_admin_service:7010","5508603760520104":"store.st.iokbl.com:80","5263676916885163":"marketing-admin-service:7210","5114646465337609":"member-service:7080","4881906533167534":"blgroup-osp-camp:19080","4758533875653328":"oms-core:8090","4255658046616360":"blgroup-osp-marketing:21080","3540032301805763":"blgroup-osp-sales:19080","3446210710381886":"product-inner:8086","3157860086410358":"marketing-service:7310","2859633763162302":"iokblShoppingCartApi:9081","2761737483103615":"osp-cas:8080","2384298676667985":"promotion-admin-service:7480","2225511026367881":"blgroup-osp-prod:18080","1932006836360898":"store.st.bl.com:80","1719662550669181":"member-admin-service:7082","1593589904480665":"blgroup-osp-report:29080","1395601115678553":"campaign-service:7280","1290860217510751":"campaign-admin-service:7380","1188069182588207":"trial-service:7610","1118355588828072":"bigdata-member-service:7220"},"resource_ids":["2225511026367881or:10.201.128.108:1521","2225511026367881curl:st.osp.cc:80","3540032301805763or:10.201.128.108:1521","4881906533167534or:10.201.128.108:1521","4881906533167534curl:st.osp.cc:80","6932861656106481or:10.201.128.108:1521","6932861656106481curl:st.osp.cc:80","1719662550669181or:10.201.128.108:1521","10623055584214657or:10.201.128.108:1521","8826614840328635or:10.201.128.108:1521","10610312368693336or:10.201.128.108:1521","3446210710381886or:10.201.128.108:1521","4758533875653328or:10.201.128.108:1521","8771946656541834or:10.201.128.108:1521","7906268023350533or:10.201.128.108:1521","5114646465337609or:10.201.128.108:1521","10545086851016651or:10.201.128.108:1521","2384298676667985or:10.201.128.108:1521","8398878582657004or:10.201.128.108:1521","8398878582657004curl:st.osp.cc:80","8353567216141236or:10.201.128.108:1521","1395601115678553or:10.201.128.108:1521","1290860217510751or:10.201.128.108:1521","1593589904480665or:10.201.128.108:1521","6712043633158368or:10.201.128.108:1521","6051758300440575or:10.201.128.108:1521","6051758300440575curl:st.osp.cc:80","10591070008086537or:10.201.128.108:1521","10517605654034013or:10.201.128.108:1521","10517605654034013curl:st.osp.cc:80","2761737483103615or:10.201.128.108:1521","10113593838411385or:10.201.128.108:1521","9013036032230790or:10.201.128.108:1521","8006625910336418or:10.201.128.108:1521","8006625910336418m:10.201.128.47:3306","7341690955256413or:10.201.128.108:1521","7341690955256413curl:st.osp.cc:80","5508603760520104or:10.201.128.108:1521","1118355588828072or:10.201.128.108:1521","6044265907115919or:10.201.128.108:1521","1188069182588207m:10.201.129.90:3306","3157860086410358or:10.201.128.108:1521","5263676916885163or:10.201.128.108:1521","4255658046616360or:10.201.128.108:1521","4255658046616360curl:st.osp.cc:80","6191106005545717or:10.201.128.108:1521","8566563552742543or:10.201.128.108:1521","9127537048288639or:10.201.128.108:1521","10835246136275355or:10.201.128.108:1521","2859633763162302curl:10.201.64.61:8080","7300203660706410m:10.201.129.90:3306","1932006836360898or:10.201.128.108:1521"],"app_ids":["10835246136275355","10623055584214657","10610312368693336","10591070008086537","10545086851016651","10517605654034013","10113593838411385","9127537048288639","9013036032230790","8826614840328635","8771946656541834","8566563552742543","8398878582657004","8353567216141236","8006625910336418","7906268023350533","7341690955256413","7300203660706410","6932861656106481","6712043633158368","6191106005545717","6051758300440575","6044265907115919","5508603760520104","5263676916885163","5114646465337609","4881906533167534","4758533875653328","4255658046616360","3540032301805763","3446210710381886","3157860086410358","2859633763162302","2761737483103615","2384298676667985","2225511026367881","1932006836360898","1719662550669181","1593589904480665","1395601115678553","1290860217510751","1188069182588207","1118355588828072"],"edges":[{"id":"2225511026367881or:10.201.128.108:1521","from":"2225511026367881","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"2225511026367881curl:st.osp.cc:80","from":"2225511026367881","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"3540032301805763or:10.201.128.108:1521","from":"3540032301805763","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"4881906533167534or:10.201.128.108:1521","from":"4881906533167534","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"4881906533167534curl:st.osp.cc:80","from":"4881906533167534","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"6932861656106481or:10.201.128.108:1521","from":"6932861656106481","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"6932861656106481curl:st.osp.cc:80","from":"6932861656106481","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"1719662550669181or:10.201.128.108:1521","from":"1719662550669181","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10623055584214657or:10.201.128.108:1521","from":"10623055584214657","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8826614840328635or:10.201.128.108:1521","from":"8826614840328635","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10610312368693336or:10.201.128.108:1521","from":"10610312368693336","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"3446210710381886or:10.201.128.108:1521","from":"3446210710381886","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"4758533875653328or:10.201.128.108:1521","from":"4758533875653328","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8771946656541834or:10.201.128.108:1521","from":"8771946656541834","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"7906268023350533or:10.201.128.108:1521","from":"7906268023350533","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"5114646465337609or:10.201.128.108:1521","from":"5114646465337609","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10545086851016651or:10.201.128.108:1521","from":"10545086851016651","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"2384298676667985or:10.201.128.108:1521","from":"2384298676667985","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8398878582657004or:10.201.128.108:1521","from":"8398878582657004","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8398878582657004curl:st.osp.cc:80","from":"8398878582657004","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"8353567216141236or:10.201.128.108:1521","from":"8353567216141236","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"1395601115678553or:10.201.128.108:1521","from":"1395601115678553","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"1290860217510751or:10.201.128.108:1521","from":"1290860217510751","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"1593589904480665or:10.201.128.108:1521","from":"1593589904480665","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"6712043633158368or:10.201.128.108:1521","from":"6712043633158368","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"6051758300440575or:10.201.128.108:1521","from":"6051758300440575","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"6051758300440575curl:st.osp.cc:80","from":"6051758300440575","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"10591070008086537or:10.201.128.108:1521","from":"10591070008086537","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10517605654034013or:10.201.128.108:1521","from":"10517605654034013","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10517605654034013curl:st.osp.cc:80","from":"10517605654034013","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"2761737483103615or:10.201.128.108:1521","from":"2761737483103615","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10113593838411385or:10.201.128.108:1521","from":"10113593838411385","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"9013036032230790or:10.201.128.108:1521","from":"9013036032230790","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8006625910336418or:10.201.128.108:1521","from":"8006625910336418","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8006625910336418m:10.201.128.47:3306","from":"8006625910336418","to":"m:10.201.128.47:3306","arrows":"to","label":""},{"id":"7341690955256413or:10.201.128.108:1521","from":"7341690955256413","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"7341690955256413curl:st.osp.cc:80","from":"7341690955256413","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"5508603760520104or:10.201.128.108:1521","from":"5508603760520104","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"1118355588828072or:10.201.128.108:1521","from":"1118355588828072","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"6044265907115919or:10.201.128.108:1521","from":"6044265907115919","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"1188069182588207m:10.201.129.90:3306","from":"1188069182588207","to":"m:10.201.129.90:3306","arrows":"to","label":""},{"id":"3157860086410358or:10.201.128.108:1521","from":"3157860086410358","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"5263676916885163or:10.201.128.108:1521","from":"5263676916885163","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"4255658046616360or:10.201.128.108:1521","from":"4255658046616360","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"4255658046616360curl:st.osp.cc:80","from":"4255658046616360","to":"curl:st.osp.cc:80","arrows":"to","label":""},{"id":"6191106005545717or:10.201.128.108:1521","from":"6191106005545717","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"8566563552742543or:10.201.128.108:1521","from":"8566563552742543","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"9127537048288639or:10.201.128.108:1521","from":"9127537048288639","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"10835246136275355or:10.201.128.108:1521","from":"10835246136275355","to":"or:10.201.128.108:1521","arrows":"to","label":""},{"id":"2859633763162302curl:10.201.64.61:8080","from":"2859633763162302","to":"curl:10.201.64.61:8080","arrows":"to","label":""},{"id":"7300203660706410m:10.201.129.90:3306","from":"7300203660706410","to":"m:10.201.129.90:3306","arrows":"to","label":""},{"id":"1932006836360898or:10.201.128.108:1521","from":"1932006836360898","to":"or:10.201.128.108:1521","arrows":"to","label":""}],"position":{"scale_in":8,"scale_out":1,"nodes":{"or:10.201.128.108:1521":{"id":"or:10.201.128.108:1521","label":"Oracle:10.201.128.108:1521","group":"oracle","color":"#202020","x":0,"y":1},"curl:st.osp.cc:80":{"id":"curl:st.osp.cc:80","label":"RESTApi:st.osp.cc:80","group":"cloud","color":"#333","x":0.95105651629515,"y":0.30901699437495},"m:10.201.128.47:3306":{"id":"m:10.201.128.47:3306","label":"MySQL:10.201.128.47:3306","group":"mysql","color":"#202020","x":0.58778525229247,"y":-0.80901699437495},"m:10.201.129.90:3306":{"id":"m:10.201.129.90:3306","label":"MySQL:10.201.129.90:3306","group":"mysql","color":"#202020","x":-0.58778525229247,"y":-0.80901699437495},"curl:10.201.64.61:8080":{"id":"curl:10.201.64.61:8080","label":"RESTApi:10.201.64.61:8080","group":"cloud","color":"#333","x":-0.95105651629515,"y":0.30901699437495},"10835246136275355":{"id":"10835246136275355","label":"blgroup-osp-bigdata:21080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0,"y":1},"10623055584214657":{"id":"10623055584214657","label":"product-admin:8080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.145601167735,"y":0.98934336807511},"10610312368693336":{"id":"10610312368693336","label":"product-syn:8084","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.28809909936524,"y":0.95760059990841},"10591070008086537":{"id":"10591070008086537","label":"quartz-monitor:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.42445669887582,"y":0.90544823749315},"10545086851016651":{"id":"10545086851016651","label":"promotion-service:7180","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.55176774077045,"y":0.83399781788988},"10517605654034013":{"id":"10517605654034013","label":"blgroup-osp-comment:25080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.66731881122224,"y":0.74477218274378},"10113593838411385":{"id":"10113593838411385","label":"blgroup-smbr:21280","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.76864713977853,"y":0.63967302155889},"9127537048288639":{"id":"9127537048288639","label":"content-service:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.85359308903735,"y":0.52094034048793},"9013036032230790":{"id":"9013036032230790","label":"211.147.90.118:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.92034618356916,"y":0.39110472049016},"8826614840328635":{"id":"8826614840328635","label":"product-business:8082","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.96748369705743,"y":0.25293338239168},"8771946656541834":{"id":"8771946656541834","label":"oms-admin:8092","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.99400097523995,"y":0.10937120837787},"8566563552742543":{"id":"8566563552742543","label":"blgroup-osp-points:32988","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.99933284837024,"y":-0.036522023057659},"8398878582657004":{"id":"8398878582657004","label":"blgroup-osp-site:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.98336567682947,"y":-0.18163685097944},"8353567216141236":{"id":"8353567216141236","label":"blgroup-osp-site-api:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.94643977315761,"y":-0.32288040477145},"8006625910336418":{"id":"8006625910336418","label":"blgroup-osp-api:7200","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.88934214888252,"y":-0.45724232330464},"7906268023350533":{"id":"7906268023350533","label":"blgroup-shop-prod:28080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.81328974073557,"y":-0.58185891555795},"7341690955256413":{"id":"7341690955256413","label":"blgroup-osp-social:28080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.719903473758,"y":-0.69407419522063},"7300203660706410":{"id":"7300203660706410","label":"trial-admin-service:7410","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.61117371409785,"y":-0.79149648842925},"6932861656106481":{"id":"6932861656106481","label":"blgroup-osp-mbr:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.48941784781109,"y":-0.87204940814381},"6712043633158368":{"id":"6712043633158368","label":"tms-business:8010","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.35723088980113,"y":-0.93401610873255},"6191106005545717":{"id":"6191106005545717","label":"bigdata-member-web:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.21743017558156,"y":-0.97607587755593},"6051758300440575":{"id":"6051758300440575","label":"blgroup-osp:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":0.072995314660908,"y":-0.99733228366355},"6044265907115919":{"id":"6044265907115919","label":"content_admin_service:7010","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.072995314660908,"y":-0.99733228366355},"5508603760520104":{"id":"5508603760520104","label":"store.st.iokbl.com:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.21743017558156,"y":-0.97607587755593},"5263676916885163":{"id":"5263676916885163","label":"marketing-admin-service:7210","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.35723088980113,"y":-0.93401610873255},"5114646465337609":{"id":"5114646465337609","label":"member-service:7080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.48941784781109,"y":-0.87204940814381},"4881906533167534":{"id":"4881906533167534","label":"blgroup-osp-camp:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.61117371409785,"y":-0.79149648842925},"4758533875653328":{"id":"4758533875653328","label":"oms-core:8090","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.719903473758,"y":-0.69407419522063},"4255658046616360":{"id":"4255658046616360","label":"blgroup-osp-marketing:21080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.81328974073557,"y":-0.58185891555795},"3540032301805763":{"id":"3540032301805763","label":"blgroup-osp-sales:19080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.88934214888252,"y":-0.45724232330464},"3446210710381886":{"id":"3446210710381886","label":"product-inner:8086","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.94643977315761,"y":-0.32288040477145},"3157860086410358":{"id":"3157860086410358","label":"marketing-service:7310","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.98336567682947,"y":-0.18163685097944},"2859633763162302":{"id":"2859633763162302","label":"iokblShoppingCartApi:9081","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.99933284837024,"y":-0.036522023057659},"2761737483103615":{"id":"2761737483103615","label":"osp-cas:8080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"3","x":-0.99400097523995,"y":0.10937120837787},"2384298676667985":{"id":"2384298676667985","label":"promotion-admin-service:7480","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.96748369705743,"y":0.25293338239168},"2225511026367881":{"id":"2225511026367881","label":"blgroup-osp-prod:18080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.92034618356916,"y":0.39110472049016},"1932006836360898":{"id":"1932006836360898","label":"store.st.bl.com:80","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.85359308903735,"y":0.52094034048793},"1719662550669181":{"id":"1719662550669181","label":"member-admin-service:7082","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.76864713977853,"y":0.63967302155889},"1593589904480665":{"id":"1593589904480665","label":"blgroup-osp-report:29080","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.66731881122224,"y":0.74477218274378},"1395601115678553":{"id":"1395601115678553","label":"campaign-service:7280","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.55176774077045,"y":0.83399781788988},"1290860217510751":{"id":"1290860217510751","label":"campaign-admin-service:7380","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.42445669887581,"y":0.90544823749315},"1188069182588207":{"id":"1188069182588207","label":"trial-service:7610","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.28809909936524,"y":0.95760059990841},"1118355588828072":{"id":"1118355588828072","label":"bigdata-member-service:7220","group":"app_normal","color":"#A0E75E","title":"JAVA","number":"1","x":-0.145601167735,"y":0.98934336807511}}},"color":{"app":"#A0E75E","database":"#202020","cloud":"#333","n":"#333","a":"#333","t":"#333","p":"#333","j":"#333","d":"#333","py":"#333","r":"#333","me":"#333","m":"#333","po":"#333","or":"#333","we":"#333","sq":"#333","mo":"#333","curl":"#333","io":"#333"}}};
					if (data && data.code === 1000) {
						if (typeof success === "function") {
							success.call(this, data);
						}
						der.resolve();
					}
					else {
						if (typeof error === 'function') {
							error.call(this, data);
						}
						der.reject(data);
					}
				
			return der.promise();
		};
		var restPost = function (url, data, success, error) {
			return T.restGet(url, data, success, error, "post");
		};

		var ajaxLoad = function (url, domId, data, callback) {
			data = (typeof data != 'undefined') ? data : {};
			var key, counter = 0;
			for (key in data) counter++;

			if (counter < 1) {
				$("#" + domId).load(url, function (response, status) {
					status = status.toLowerCase();
					if (status == 'success') {
						if (typeof callback != 'undefined') callback();
					}
					if (status == 'error') {

					}
				});
			} else {
				$("#" + domId).load(url, data, function (response, status, xhr) {
					status = status.toLowerCase();
					if (status == 'success') {
						if (typeof callback != 'undefined') callback();
					}
					if (status == 'error') {

					}
				});
			}
		}
		//获取对象中属性的个数
		var getObjCount = function (o) {
			var t = typeof o;
			if (t == 'string') {
				return o.length;
			} else if (t == 'object') {
				var n = 0;
				for (var i in o) {
					n++;
				}
				return n;
			}
			return false;
			};

		//显示loading
		var showLoading = function(domId){

			if(!$('#'+domId).data('reset')){
				//$('#'+domId).data('reset', $('#'+domId).html());
				if($('#'+domId)[0]!=undefined){
					$('#'+domId).data('reset', $('#'+domId)[0].outerHTML);
				}
			}
			if(!$('#'+domId).data('class')){
				$('#'+domId).data('class', $('#'+domId).attr('class'));
			}
			//divReset(domId);
			$('#'+domId).addClass('loading');
		}
		//无数据的样式
		var showNoData = function(domId){
			divReset(domId);
			$('#'+domId).addClass('nodata');
		}
		//重置
		var divReset = function(domId){
			var target = $('#'+domId);
			var parent = target.parent();
			var html = target.data('reset');
			target.remove();
			parent.append(html);
			$('#'+domId).attr('class',$('#'+domId).data('class'));
			/*$('#'+domId).html($('#'+domId).data('reset')).attr('class',$('#'+domId).data('class'));*/
		}

		var notFoundData = function(domId){
			var html = '<div class="basic-main-left-div dash top_15" style="padding:50px; border:1px dashed #ccc;"><div class="text-center"><img src="/resource/img/not_found.png"></div><div class="text-center font-18" style="font-size:18px; line-height:40px">'+lang_tsb.not_found+'</div> <div class="text-center"> '+lang_tsb.any_question+'，<a href="/help/help_operation">'+lang_tsb.get_help+'</a>'+lang_tsb.get_phone+'</div>';
			$('#'+domId).html(html);
		}
        var confirm=function(msg,ok,quxiao){
            var opt = {
                status: 'success',
                msg: msg,
                speed: 2000
            };
            if (opt.status == 'success') {
                var alertIcon = '<i class="fa fa-check-circle" id="green"></i>';
            } else {
                var alertIcon = '<i class="fa fa-times-circle" id="red"></i>';
            }
            var alertHtml = $('<div class="modal-alert" style="display:none;height:100%;margin-top: -30px;padding-top: 100px"><div class="alert alert-' + opt.status + '">' + alertIcon + opt.msg + '</<div></br></br><input type="button" id="confirm" class="btn-blue " style="margin-left: 80px;border: none;border-radius: 4px;" value="'+lang_alert_page.confirm+'"/>     <input type="button" id="cancle" class="btn-blue center"  style="border: none;border-radius: 4px;margin-left: 40px" value="'+lang_alert_page.cancel+'"/></div></div>');

            $(alertHtml).find("#confirm").click(function(e){
                $(this).parent().parent().hide();
                $.isFunction(ok) && ok(e);
            })

            $(alertHtml).find("#cancle").click(function(e){
                $(this).parent().parent().hide();
                $.isFunction(quxiao) && quxiao(e);
            })

            $(alertHtml).appendTo($('body')).fadeIn().delay(opt.speed);
        }
		return {
			restGet: restGet,
			restPost: restPost,
			alert: alert,
			ajaxLoad: ajaxLoad,
			getObjCount: getObjCount,
			showLoading:showLoading,
			showNoData:showNoData,
			divRest:divReset,
			notFoundData:notFoundData,
            confirm:confirm
		};
	})(jQuery, window, document, undefined);
	
	module.exports = T;
});