
console.log('app_topo.js')
define(function (require, exports, module) {
    var app_topo = require('app_topo_dashboard');
    require('jqueryTsbPlugin');
    require('echartsPlugin');
  /*  require('event_extension');*/
    var T = require('T');
    var TSB = require('TSB');
    var moving = false;
    var app_id;
    var topoDataApi = '/app_topo/right_data';

    TSB.eventManager.addListener(event_enum.event_date,function(){
        getAppTopo();
    });

    var getAppTopo = function(){
        T.restPost('/app_topo/get_topo_data', {type: 1}, function (result) {
            if(result.data.app_list.length<1){
                $('#app_topo').removeClass('loading').addClass('nodata');
                return false;
            }else{
                var str = '';
                $.each(result.data.app_list, function (app_id, app_name) {
                    str += '<option value="' + app_id + '">' + app_name + '</option>';
                });
                $('#select').html(str);
                //这里生成 select option 选项   
            }
            app_topo.setHighLingFunction(function (id) {
                if ($.isNumeric(id)) {
                    $('.hide_line').attr('data-hide',1);
                    $('.time-water').css('width',0);
                    app_id = id;
                }
            });
            app_topo.initTopoData('app_topo', result.data);
            if (result.data.nodes.length == 0) {
                return;
            }

            //初始化右侧图表数据
            app_id = $('#select option').eq(0).val();
            //双击事件
            app_topo.bindEventToTopo('doubleClick', function (event) {
                if (event.nodes.length > 0) {
                    if (parseInt(event.nodes[0]) == event.nodes[0]) {
                        T.restPost('/app_topo/get_app_type', {app_id: event.nodes[0]}, function (result) {
                            window.location.href = '/app/dashboard/overview/' + event.nodes[0] + '?appCodeType=' + result.data.appType;
                        }, function () {
                            TSB.modalAlert({status: 'error', msg: lang_app_topo.install_smartagent_msg});
                        });
                    } else {
                        var host_id = 0;
                        T.restPost('/app_topo/get_host_id', {node: event.nodes[0]}, function (result) {
                            host_id = result.data;
                            if (host_id > 0) {
                                window.location.href = '/host/board/service/' + host_id;
                            } else {
                                TSB.modalAlert({status: 'error', msg: lang_app_topo.install_smartagent_msg});
                            }
                        }, function () {
                            TSB.modalAlert({status: 'error', msg: lang_app_topo.install_smartagent_msg});
                        });
                    }
                }
            });
            app_topo.bindEventToElement('convert', '.convert_module', 'click', app_topo.RebindOperations);
            $('.convert_module').eq(0).trigger('click');

            $(document).delegate('#select', 'change', function () {
                $('.time-water').css('width',0);
                var network = app_topo.getNetwork();
                var app_id = $('#select').find('option:selected').val();
                var params = {nodes: [app_id]};
                network.selectNodes([app_id]);
                app_topo.neighbourhoodHighlight(params);
                var option = {
                    position: {x: 0, y: 0},
                    scale: 1,
                    offset: {x: 0, y: 0},
                    animation: {
                        duration: 1000,
                        easingFunction: 'easeInOutQuad'
                    },
                    lockedOnNode: app_id
                };
                network.focus(app_id, option);
            });
            $('.format').click(function () {
                $(this).addClass('active');
                $('.convert_module').removeClass('active');
                app_topo.updateNodesPosition(result.data.position);
            });
            $('.hide_line').click(function () {
                if ($('.hide_line').attr('data-hide') == 1) {
                    $('.hide_line').attr('data-hide', 0);
                    $('.hide_line').addClass('active');
                    $('.hide_line').attr('title', lang_app_topo.show);
                    app_topo.hideNormalLine(true);
                } else {
                    app_topo.hideNormalLine(false);
                    $('.hide_line').attr('title', lang_app_topo.hide);
                    $('.hide_line').removeClass('active');
                    $('.hide_line').attr('data-hide', 1);
                }
            });
        }, function () {
        })
    }
    //异步调用数据
    $(function () {
        getAppTopo();
    });

    $('.surf').click(function(){
        $('.app_select').toggle();
    });
});