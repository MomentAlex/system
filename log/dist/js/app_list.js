/*define(function(require,exports,module) {
    var $ = require('jquery');
    var jqueryCookie = require('jqueryCookie');
    jqueryCookie($);
    var T = require('T');
    var TSB = require('TSB');
    require('echartsPlugin');
    require('event_extension');
    require('jqueryTsbPlugin');
    var app_group_id_p='';*/


    $(document).ready(function(){
        if($.cookie('msg_id') != undefined && $.cookie('msg_id') != ''){
            var msg_id = $.cookie('msg_id');
            $.cookie('msg_id','',{path:'/'});
            window.location.href = '/alert/mobile/snapshop?msg_id=' + msg_id;
        }
    });


        //查询APP列表
        var ApplistLocation = function(page){
            page=page?page:1;
            $('#app_list').html('<div class="loading" style="height: 300px;"></div>');
            var name = TSB.getSearchInputVal($('#search_input'));
            var status = $('#app_status_button .active').data('status');
            var sort = $('.app_list_sort li.active').data('sort');
            var app_status=$('#app_status li.active').data('value');
            var group_name=$('#select_group_list li.active').data('value');
            var order=$('.app_list_sort li.active').data('field');
            var type='app';

            var sumbitData = {
                sort:sort ? sort : 'desc',
                name:name ? name : '',
                order:order,
                status:status,
                app_status:app_status,
                group_id:group_name,
                page:page,
                type:type
            };
            T.ajaxLoad('/app/searchAppList','app_list',sumbitData,function(){
                var app_ids = [];
                if($('.apply-list').length == 0){
                    return;
                }
                $('.apply-list').each(function(){
                    app_ids.push($(this).data('app_id'));
                });
                //查询主机数据
                T.restPost('/app/load/host_data',{app_ids:app_ids},function(result){
                    $.each(result.data,function(app_id,app_info){
                        var str = '';
                        $.each(app_info,function(host_id,host_info){
                            str += '<tr><td>'+host_info.host_name+'</td><td>'+host_info.cpu_rate+'</td><td>'+host_info.ram_rate+'</td><td>'+host_info.cpu_burden+'</td></tr>';
                        });
                        if(str != ''){
                            $('.apply-list[data-app_id="'+app_id+'"]').find('tbody').html(str);
                        }
                    });
                },function(){})
                //查询应用状态
                T.restPost('/app/load/app_status',{app_ids:app_ids},function(result){
                    $('.apply-list').each(function () {
                        var app_id = $(this).data('app_id');
                        if(result.data[app_id] != undefined){
                            switch (result.data[app_id]){
                                case 'normal':
                                    var str='<div class="sucess-color"><i class="fa fa-check-circle"></i>'+lang_app.normal+'</div>';
                                    break;
                                case 'slow':
                                    var  str='<div class="color-yellow"><i class="fa fa fa-exclamation-circle"></i>'+lang_app.slow+'</div>';
                                    break;
                                case  'very_slow':
                                    var str=' <div class="color-orange"><i class="fa fa fa-exclamation-circle"></i>'+lang_app.slowest+'</div>'
                                    break;
                                case 'error':
                                    var str=' <div class="color-red"><i class="fa fa fa-minus-circle"></i>'+lang_app.error+'</div>';
                                    break;
                            }
                        }else{
                            var str=' <div class="color-gray"><i class="fa fa fa-minus-circle"></i>'+lang_app.nodata+'</div>';
                        }
                        $(this).find('.aplly-list-modal-first').removeClass('loading').html(str);
                    });
                })
            },function(){});
        };
    $(document).delegate('.aplly-list-content .app_list_list_class','click',function(){
        var page=$(this).attr('page_num');
        ApplistLocation(page);
    })

        //绑定切换状态事件
        $('#app_status_button .btn,#app_type_button .btn').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var status = $('#app_status_button .active').data('status');
            switch (status){
                case 1:
                    $('#pause_app').parent().css('display','inline-block');
                    $('#start_app').parent().hide();
                    break;
                case 2:
                    $('#start_app').parent().css('display','inline-block');
                    $('#pause_app').parent().hide();
                    break;
            }
            ApplistLocation();
        });

        //绑定切换类型状态事件
        $('#app_type_button .btn').click(function(){
            var type=$(this).data('type');
            switch (type){
                case 'app':
                    $('#group_list_id').show();
                    $('#app_status_list_id').show();
                    $('#add_group_manage').parent().show();
                    $('#message_app_group').parent().show();
                    break;
                case 'admin':
                    $('#group_list_id').hide();
                    $('#app_status_list_id').hide();
                    $('#add_group_manage').parent().hide();
                    $('#message_app_group').parent().hide();
                    break;
            }
        })

        //绑定搜索按钮事件
        $('#search_input+.fa-search').click(function(){
            $('#search_input').trigger('onkey');
        });


        //绑定回车搜索事件
        $('#search_input').on('onkey',function (key) {
            ApplistLocation();
        });

        //绑定排序切换事件
        $(document).delegate('.dropdown-menu.app_list_sort li','click',function(){


            var $i = $(this).find('i.fa-sort');
            var text = $(this).text().trim();
            if($($i).hasClass('fa-sort-desc')){
                var sort = 'asc';
                var css = 'up';
            }else{
                var sort = 'desc';
                var css = 'down';
            }

            $(this).data('sort',sort);
            $(this).addClass('active').siblings().removeClass('active');
            $('.app_list_sort li').find('i.fa-sort').removeClass('fa-sort-desc').removeClass('fa-sort-asc');
            $i.removeClass('fa-sort-desc').removeClass('fa-sort-asc').addClass('fa-sort-'+sort);

            $('#app_sort button').html(text+'<span class="fa fa-long-arrow-'+css+'">');
            ApplistLocation();
        });
        //运行状态筛选事件
        $(document).delegate('#app_status li','click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            var text=$(this).text().trim();
            text+='<span class="fa fa-caret"></span>';
            $(this).parent().prev().html(text);
            ApplistLocation();
        })
        //分组筛选事件
        $(document).delegate('#select_group_list li','click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            var text=$(this).text().trim();
            text+='<span class="fa fa-caret"></span>';
            $(this).parent().prev().html(text);
            ApplistLocation();
        })

        //区块点击进入应用
//    $(document).delegate('.aplly-list-content .aplly-list-right ','click',function(){
//        if($('#app_status_button .active').data('status') == 2){
//            return;
//        }
//        var app_id = $(this).parent().data('app_id');
//        var code_type = $(this).parent().data('code_type');
//        window.location.href='/app/dashboard/overview/'+app_id+'?appCodeType='+code_type;
//    })




        $('#app_list').delegate('.task_block','click',function(){
            if($('#app_status_button .active').data('status') == 2){
                return;
            }
            var app_id = $(this).data('app_id');
            var code_type = $(this).data('code_type');
            window.location.href='/app/dashboard/overview/'+app_id+'?appCodeType='+code_type;
        });

        $('#app_list').delegate('.task_block .fa-cog','click',function(e){
            if(e && e.stopPropagation){
                e.stopPropagation();
            }else{
                window.event.cancelBubble = true;
            }
            var app_id = $(this).parents('.task_block').data('app_id');
            window.location = "/app/setting/overview/"+app_id;
        });

      /*  $('#app_list').delegate('.task_block .fa-pause,.task_block .fa-play','click',function(e){
            if($(this).hasClass('admin')){
                TSB.modalAlert({msg:lang_mobile.no_permission,status:'danger'});
                return false;
            }
            if(e && e.stopPropagation){
                e.stopPropagation();
            }else{
                window.event.cancelBubble = true;
            }
            var data = {};
            var dom = $(this);
            data.app_id = $(this).closest('.task_block').data('app_id');

            if(dom.hasClass('fa-pause')){
                data.status = 2;
            }else{
                data.status = 1;
            }
            T.restPost('/app/status/modify',data,
                function(back){

                    TSB.modalAlert({msg: back.msg});

                    dom.closest('.task_block').remove();
                    var pauseNum = parseInt($('#down_count').text());
                    var playNum = parseInt($('#up_count').text());

                    if(dom.hasClass('fa-play')){
                        $('#down_count').text(pauseNum-1);
                        $('#up_count').text(playNum+1);


                    }else{

                            $('#down_count').text(pauseNum+1);
                            $('#up_count').text(playNum-1);

                    }
                },function(back){
                    TSB.modalAlert({status: 'danger',msg: back.msg});
                });
        });*/

    //新建分组
    $(document).delegate('#add_app_group','click',function(){
        T.ajaxLoad('/app/ajaxList/data/add_app_group','create_group',{data:1},function(){
             $('#create_group').modal();
        })
    })
    //保存新建分组
    $(document).delegate('#save_app_group','click',function(){
//        T.ajaxLoad('/app/ajaxList/data/add_app_group','create_group',{data:1},function(){
//            $('#create_group').modal();
//        })

        var group_name=$('#add_app_group_name').val();
        if(!group_name){
            TSB.modalAlert({status: 'danger',msg: lang_app.input_group_name});
            return false;
        }
        var submit={};
        submit.app_group_name=group_name;
        T.restPost('/app/ajaxList/data/save_app_group',submit,function(result){
            TSB.modalAlert({msg: result.data});
            getAppGroupList();
            $('#create_group').modal('hide');
        },function(result){
            TSB.modalAlert({status: 'danger',msg: result.msg});
        })
    })
    //取消新建分组
//    $(document).delegate('#add_app_group','click',function(){
//        T.ajaxLoad('/app/ajaxList/data/add_app_group','create_group',{data:1},function(){
//            $('#create_group').modal();
//        })
//    })
    //管理分组
    $(document).delegate('#message_app_group','click',function(){
        T.ajaxLoad('/app/ajaxList/data/message_app_group','detail_group',{data:1},function(){
            showAppGroupList();
             $('#detail_group').modal();
        })
    })
    //管理分组的分页
    $(document).delegate('#app_group_list .app_group_class','click',function(){
        var page=$(this).attr('page_num');
        showAppGroupList(page);
    })
    //修改分组
    $(document).delegate('#app_group_list .modify-group-item','click',function(){
        if($('#app_group_list .process_name_input').length >=1){
            TSB.modalAlert({status: 'danger',msg:'请先完成上一个修改'});
            return false
        }
        var name=$(this).data('name');
        var id=$(this).data('value');
        var count=$(this).data('count');

        var input_str='<input class="process_name_input" type="text" value="'+name+'" data-type="modify_group" data-count="'+count+'"data-value="'+id+'" placeholder="'+name+'" style="width: 100%;display: block;" size="20">';
        $(this).parent().parent().prev().prev().html(input_str);
        $(this).parent().parent().prev().prev().find('input').focus();
    })
    $(document).delegate('#app_group_list .process_name_input','blur',function(){
        var group_name=$(this).val().trim();
        var group_id=$(this).data('value');
        var group_count=$(this).data('count');
        var placehold=$(this).attr('placeholder').trim();
        if(group_name==placehold){
            var str='<a class="group_app_list cursor modify_app_group_list" data-app_group_id="'+group_id+'" data-app_group_name="'+group_name+'" data-app_count="'+group_count+'">'+group_name+'</a>';
            $(this).parent().html(str);
            return false;
        }
        if(group_name.length==0){
            TSB.modalAlert({status: 'danger',msg: '请输入分组名称'});
            return false;
        }
        if(group_name.length>30){
            TSB.modalAlert({status: 'danger',msg: '字符长度大于30'});
            return false;
        }
        if(group_name.match(/[^\u4E00-\u9FA5a-zA-Z0-9_]/g)){
            TSB.modalAlert({status: 'danger',msg: '名称只能包含中、英文、数字和下划线，不能包含特殊符号'});
            return false;
        }
        var submit={};
        submit.app_group_name=group_name;
        var dom=$(this);
        T.restPost('/app/ajaxList/data/check_group_name_exists',submit,function(result){
           var str='<a class="group_app_list cursor modify_app_group_list" data-app_group_id="'+group_id+'" data-app_group_name="'+group_name+'" data-app_count="'+group_count+'">'+group_name+'</a>';
            dom.parent().html(str);
        },function(result){
            TSB.modalAlert({status: 'danger',msg: result.msg});
        })
    })
    //修改分组的触发保存事件
    $(document).delegate('.save_modify','click',function(){
        var type=$('.show_group_type.active').data('type');
        switch (type){
            case 'modify_group':
                var params=new Array();
                $('#app_group_list .modify_app_group_list').each(function(i,v){
                    params.push($(this).data());
                })
                if(params.length){
                    var submit={};
                    submit.params=params;

                    var dom=$('#manage_group_list .process_name_input').parent();
                    T.restPost('/app/ajaxList/data/save_app_group',submit,function(result){
                        var page=$('#app_group_list .pagination li.active ').text();
                        getAppGroupList();
                        ApplistLocation();
                        showAppGroupList(page);
                        TSB.modalAlert({msg: result.data});
                    },function(result){
                        TSB.modalAlert({status: 'danger',msg: result.msg});
                    })
                }else{
                    TSB.modalAlert({msg: '没有修改项'});
                    return false;
                }

                break;
            case 'modify_app':
                var params=new Array();
                $('#group_app_list .modify_group_app_list').each(function(i,v){
                    params.push($(this).data());
                })
              if(params.length){
                  var submit={};
                  submit.params=params;
                  T.restPost('/app/ajaxList/data/save_app_item',submit,function(result){

                      var page=$('#group_app_list .pagination li.active ').text();
                      showGroupAppList(page);
                      ApplistLocation();
                      TSB.modalAlert({msg: result.data});
                  },function(result){
                      TSB.modalAlert({status: 'danger',msg: result.msg});
                  })
              }else{
                  TSB.modalAlert({msg: '没有修改项'});
                  return false;
              }


                break;
        }

        $('#detail_group').modal('hide');
    })
    //修改分组取消触发事件
    $(document).delegate('.cancel_modify','click',function(){
        var type=$('.show_group_type.active').data('type');
        switch (type){
            case 'modify_group':
                $('#app_group_list .modify-group-item').each(function(){
                    var group_name=$(this).data('name');
                    var group_id=$(this).data('value');
                    var group_count=$(this).data('count');
                    var str='<a class="group_app_list" data-app_group_id="'+group_id+'" data-app_group_name="'+group_name+'" data-app_count="'+group_count+'">'+group_name+'</a>';
                    $(this).parent().parent().prev().prev().html(str);
                })
                break;
            case 'modify_app':
              $('#group_app_list .modify-app-item').each(function(){
                  var  app_name=$(this).data('name');
                  var str=app_name;
                  $(this).parent().parent().prev().html(str);
              })
                break;
        }
        $('#detail_group').modal('hide');
    })
    //删除分组
    $(document).delegate('#app_group_list .remove-group-item','click',function(){
        var  dom=$(this);
        T.confirm(lang_alert_page.confirm_to_remove,function(){
            var app_group_id=dom.data('value');
            var submit={};
            submit.app_group_id=app_group_id;
            T.restPost('/app/ajaxList/data/remove_group_item',submit,function(result){
                showAppGroupList();
                getAppGroupList();
                TSB.modalAlert({msg: result.data});
            },function(result){
                TSB.modalAlert({status: 'danger',msg: result.msg});
            })
        })

    })
    //点击分组显示具体的app应用列表
    $(document).delegate('#app_group_list .group_app_list','click',function(){
        var app_count=$(this).data('app_count');
        if(!app_count){
            return false;
        }
         app_group_id_p=$(this).data('app_group_id');
        var app_group_name=$(this).data('app_group_name');
        $('#app_group_name_select').html(app_group_name);
        showGroupAppList();

    })
    //分组显示具体app的搜索
    $(document).delegate('#search_input_group','click',function(){
        showGroupAppList();
    })

    //显示分组下的具体app
    var showGroupAppList=function(page){
        page=page?page:1;
        var surf_content=$('#search_input_group_onkey').val().trim();
        var submit={};
        submit.app_group_id=app_group_id_p;
        submit.page=page;
        submit.surf_content=surf_content;
        $('#group_app_list').table({
            data:function(order,sort){
                return {
                    url:'/app/ajaxList/data/show_group_app_list',
                    data:submit,
                    method:'post',
                    success:function(data){
                        if(data.data){
                            $('#group_app_list .block-foot').html(data.data.page);
                        }else{
                            $('#group_app_list .block-foot').html('');
                        }
                        return data.data.list;
                    }
                };
            },
            loop:function(item,trData,tableData){
                if(item.key=='action'){
                    return '<td align="center"><a><i class="fa fa-edit modify-app-item" data-value="'+trData.app_group_id+'" data-name="'+trData.app_name+'" data-app_id="'+trData.app_id+'" data-port="'+trData.port+'"></i></a><a><i class="fa fa-trash-o remove-app-item" data-value="'+trData.app_group_id+'" data-app_id="'+trData.app_id+'"></i></a></td>';
                }
                if(item.key=='app_count'){
                    return '<td align="center">'+item.value+'</td>'
                }
                if(item.key=='app_name'){
                    return '<td align="center">'+trData.app_name+':'+trData.port+'</td>'
                }
            },
            done:function(){
                $('#show_group_list').removeClass('active');
                $('#show_app_list').addClass('active');
                $('#search_input_group_onkey').unbind('keypress');
                $('#search_input_group_onkey').bind('keypress',function(event){
                    if(event.keyCode == "13")
                    {
                        showGroupAppList();
                    }
                });
            }

        });
    }
    //删除分组下的单个app应用
    $(document).delegate('#group_app_list .remove-app-item','click',function(){
        var dom_p=$(this);
        T.confirm(lang_alert_page.confirm_to_remove,function(){

            var app_group_id=dom_p.data('value');
            var app_id=dom_p.data('app_id');
            var submit={};
            submit.app_group_id=app_group_id;
            submit.app_id=app_id;
            var dom=$(this)
            T.restPost('/app/ajaxList/data/remove_app_item',submit,function(result){
                dom.closest('tr').remove();
                showAppGroupList();
                ApplistLocation();
                TSB.modalAlert({msg: result.data});
            },function(result){
                TSB.modalAlert({status: 'danger',msg: result.msg});
            })
        })

    })
    //app_list下的修改app应用名称
    $(document).delegate('.aplly-list-content .apply-list .aplly-list-title .aplly-title-edit','click',function(){
        var name=$(this).data('name').split(":");
        var app_group_id=$(this).data('value');
        var app_id=$(this).data('app_id');
        var code_type=$(this).data('code_type');
        var input_str='<input class="process_name_input" type="text" value="'+name[0]+'" data-port="'+name[1]+'" data-code="'+code_type+'" data-value="'+app_group_id+'" data-app_id="'+app_id+'" placeholder="'+name[0]+'" style="width: 25%;display: inline-block;" size="20">';
        $(this).parent().html(input_str);
        $('.process_name_input').focus();
    })
    //取消修改名称
/*    $(document).delegate('.aplly-list-content .apply-list .aplly-list-title .cancle_modify_app_name','click',function(){
        var name=$(this).prev().data('name');
        var app_group_id=$(this).prev().data('value');
        var app_id=$(this).prev().data('app_id');
        var code_type=$(this).prev().data('code_type');
        var str_p='<a href="/app/dashboard/overview/'+app_id+'?appCodeType='+code_type+'">'+str_name+'</a><i class="fa fa-pencil aplly-title-edit" data-name="'+str_name+'" data-value="0" data-app_id="'+app_id+'" data-code_type="'+code_type+'"></i>';
        $(this).parent(str_p);
    })*/
    //app_list下的修改app_name触发事件
    $(document).delegate('.aplly-list-content .apply-list .aplly-list-title .process_name_input','blur',function(){
        var name=$(this).val().trim();
        var app_id=$(this).data('app_id');
        var code_type=$(this).data('code');
        if(!name || name==$('.process_name_input').attr('placeholder').trim()){
            var str_name=$('.process_name_input').attr('placeholder').trim()+':'+$(this).data('port');
            var str_p='<a href="/app/dashboard/overview/'+app_id+'?appCodeType='+code_type+'">'+str_name+'</a><i class="fa fa-pencil aplly-title-edit" data-name="'+str_name+'" data-value="0" data-app_id="'+app_id+'" data-code_type="'+code_type+'"></i>';
            $(this).parent().html(str_p);
//            TSB.modalAlert({msg: lang_common.modify_success});
            return false;
        }
        var submit={};
        submit.app_name=name;
        submit.app_id=app_id;
        var port = $(this).data('port');
        var dom=$(this).parent();
        T.restPost('/ajax/app/set/name',submit,function(result){
            name = name+':'+port;
            var str_p='<a href="/app/dashboard/overview/'+app_id+'?appCodeType='+code_type+'">'+name+'</a><i class="fa fa-pencil aplly-title-edit" data-name="'+name+'" data-value="0" data-app_id="'+app_id+'" data-code_type="'+code_type+'"></i>';
            dom.html(str_p);
//            getAppGroupList();
//            ApplistLocation();
            TSB.modalAlert({msg: result.msg});
        },function(result){
            TSB.modalAlert({status: 'danger',msg: result.msg});
        })
    })
    //修改分组下的app应用名称
    $(document).delegate('#group_app_list .modify-app-item','click',function(){
        if($('#group_app_list .process_name_input').length >=1){
            TSB.modalAlert({status: 'danger',msg:'请先完成上一个修改'});
            return false
        }
        var name=$(this).data('name');
        var app_group_id=$(this).data('value');
        var app_id=$(this).data('app_id');
        var port=$(this).data('port');
        var input_str='<input class="process_name_input" type="text" value="'+name+'"  data-type="modify_app" data-value="'+app_group_id+'" data-app_id="'+app_id+'" data-port="'+port+'" placeholder="'+name+'" style="width: 100%;display: block;" size="20">';
        $(this).parent().parent().prev().html(input_str);
        $(this).parent().parent().prev().find('input').focus();
    })
    //修改分组下的app应用名称的触发事件
       $(document).delegate('#group_app_list .process_name_input','blur',function(){
        var name=$(this).val().trim();
        var id=$(this).data('value');
        var app_id=$(this).data('app_id');
        var count=$(this).data('count');
        var port=$(this).data('port');
        var placehold=$(this).attr('placeholder').trim();
           if(placehold==name){
               var str=name+':'+port;
               $(this).parent().html(str);
               return false;
           }

        if(!name){
            TSB.modalAlert({status: 'danger',msg: '请输入应用名称'});
            return false;
        }


        var submit={};
        submit.app_name=name;
        submit.app_id=app_id;
        var dom=$(this).parent();
        T.restPost('/app/ajaxList/data/check_app_name_exists',submit,function(result){
            var str='<a class="modify_group_app_list" data-name="'+name+'" data-app_id="'+app_id+'">'+name+':'+port+'</a>';
            dom.html(str);
        },function(result){
            TSB.modalAlert({status: 'danger',msg: result.msg});
        })
    })
    //分组下的app应用分页事件
    $(document).delegate('#group_app_list .group_app_list_class','click',function(){
        var page=$(this).attr('page_num');
        showGroupAppList(page);
    })

    //显示分组信息
    var showAppGroupList=function(page){
        page=page?page:1;
        var submit={};
        submit.data=1;
        submit.type='show';
        submit.page=page;
        $('#app_group_list').table({
            data:function(order,sort){
                return {
                    url:'/app/ajaxList/data/get_group_list',
                    data:submit,
                    method:'post',
                    success:function(data){
                        if(data.data){
                            $('#app_group_list .block-foot').html(data.data.page);
                        }else{
                            $('#app_group_list .block-foot').html('');
                        }
                        return data.data.list;
                    }
                };
            },
            loop:function(item,trData,tableData){
                if(item.key=='action'){
                    return '<td align="center"><a><i class="fa fa-edit modify-group-item" data-value="'+trData.app_group_id+'" data-name="'+trData.app_group_name+'" data-count="'+trData.app_count+'"></i></a><a><i class="fa fa-trash-o remove-group-item" data-value="'+trData.app_group_id+'"></i></a></td>';
                }
                if(item.key=='app_count'){
                    return '<td align="center">'+item.value+'</td>';
                }
                if(item.key=='app_group_name'){
                    if(trData.app_count){
                        return '<td align="center"><a class="group_app_list cursor" data-app_group_id="'+trData.app_group_id+'" data-app_group_name="'+trData.app_group_name+'" data-app_count="'+trData.app_count+'">'+item.value+'</a></td>';
                    }else{
                        return '<td align="center"><a class="group_app_list" data-app_group_id="'+trData.app_group_id+'" data-app_group_name="'+trData.app_group_name+'" data-app_count="'+trData.app_count+'">'+item.value+'</a></td>';
                    }

                }
            }

        });
    };
    var getAppGroupList=function(){
        var submit={};
        submit.data=1;
        submit.type='get';
        T.restPost('/app/ajaxList/data/get_group_list',submit,function(result){
            var str='<li class="active" data-value=0><a>'+lang_common.all+'</i></a></li><li class="" data-value="no_group"><a>'+lang_common.no_group+'</i></a></li>';
            var str_p='<li class="text-right"><a id="add_app_group"><i class="fa fa-plus btn-pause"></i>'+lang_app.create_group+'</a></li>';
            $.each(result.data,function(i,v){
                str+='<li class="" data-value="'+v['app_group_id']+'"><a>'+v['app_group_name']+'</i></a></li>';
                str_p+='<li class="group_item" data-value="'+v['app_group_id']+'"><a>'+v['app_group_name']+'</i></a></li>';
            })
            $('#select_group_list').html(str);
            $('#add_group_manage').html(str_p);
        },function(result){

        })
    }
    getAppGroupList();

    //选中全部app
    $(document).delegate('#select_all_app','click',function(){
        if($('#select_all_app').is(':checked')){
            $('.aplly-list-content input:checkbox').prop('checked',true);
        }else{
            $('.aplly-list-content input:checkbox').prop('checked',false);
        }
    })
    //批量添加分组
    $(document).delegate('#add_group_manage .group_item','click',function(){
         var app_group_id=$(this).data('value');
         var checkbox_dom=$('.aplly-list-content input:checkbox');
         var app_ids=new Array();
        $.each(checkbox_dom,function(i,v){
            if($(this).is(':checked')){
                app_ids.push($(this).val());
            }

        });
        var submit={};
        submit.app_ids=app_ids;
        submit.app_group_id=app_group_id;
        T.restPost('/app/ajaxList/data/add_group_manage',submit,function(result){
            ApplistLocation();
            TSB.modalAlert({msg: result.data});
        },function(result){
            TSB.modalAlert({status: 'danger',msg: result.msg});
        })
    })
    //批量暂停应用
    $(document).delegate('#pause_app','click',function(e){
        var checkbox_dom=$('.aplly-list-content input:checkbox');
        var app_ids=new Array();
        $.each(checkbox_dom,function(i,v){
            if($(this).is(':checked')){
                app_ids.push($(this).val());
            }
        });
        if(!app_ids.length){
            TSB.modalAlert({msg:lang_app.more_than_one,status:'danger'});
            return false;
        }
        if($(this).hasClass('admin')){
            TSB.modalAlert({msg:lang_mobile.no_permission,status:'danger'});
            return false;
        }
        if(e && e.stopPropagation){
            e.stopPropagation();
        }else{
            window.event.cancelBubble = true;
        }
        var submit={};
        submit.app_ids=app_ids;
        submit.status=2;
        T.restPost('/app/status/modify',submit,function(back){
                TSB.modalAlert({msg: back.msg});
                $.each(checkbox_dom,function(i,v){
                    if($(this).is(':checked')){
                        $(this).closest('.apply-list').remove();
                    }
                });
                $('#select_all_host').prop('checked',false)
                var pauseNum = parseInt($('#down_count').text());
                var playNum = parseInt($('#up_count').text());
                $('#down_count').text(pauseNum+app_ids.length);
                $('#up_count').text(playNum-app_ids.length);

            },function(back){
                TSB.modalAlert({status: 'danger',msg: back.msg});
            });

    })
    //批量开启应用
    $(document).delegate('#start_app','click',function(e){
        var checkbox_dom=$('.aplly-list-content input:checkbox');
        var app_ids=new Array();
        $.each(checkbox_dom,function(i,v){
            if($(this).is(':checked')){
                app_ids.push($(this).val());
            }
        });
        if(!app_ids.length){
            TSB.modalAlert({msg:lang_app.more_than_one,status:'danger'});
            return false;
        }
        if($(this).hasClass('admin')){
            TSB.modalAlert({msg:lang_mobile.no_permission,status:'danger'});
            return false;
        }
        if(e && e.stopPropagation){
            e.stopPropagation();
        }else{
            window.event.cancelBubble = true;
        }
        var submit={};
        submit.app_ids=app_ids;
        submit.status=1;
        T.restPost('/app/status/modify',submit,function(back){
            TSB.modalAlert({msg: back.msg});
            $.each(checkbox_dom,function(i,v){
                if($(this).is(':checked')){
                    $(this).closest('.apply-list').remove();
                }
            });
            $('#select_all_host').prop('checked',false)
            var pauseNum = parseInt($('#down_count').text());
            var playNum = parseInt($('#up_count').text());
            $('#down_count').text(pauseNum-app_ids.length);
            $('#up_count').text(playNum+app_ids.length);
        },function(back){
            TSB.modalAlert({status: 'danger',msg: back.msg});
        });

    })

    exports.ApplistLocation = ApplistLocation();
/*
});*/