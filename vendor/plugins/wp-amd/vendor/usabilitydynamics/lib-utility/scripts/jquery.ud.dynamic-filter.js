!function(a){"use strict";a.prototype.dynamic_filter=function(b){this.s=b=a.extend(!0,{ajax:{args:{},async:!0,cache:!0,format:"json"},active_timers:{status:{}},attributes:{},attribute_defaults:{label:"",concatenation_character:", ",display:!0,default_filter_label:"",related_attributes:[],sortable:!1,filter:!1,filter_always_show:!1,filter_collapsable:4,filter_multi_select:!1,filter_show_count:!1,filter_show_label:!0,filter_note:"",filter_placeholder:"",filter_show_disabled_values:!1,filter_range:{},filter_ux:[],filter_value_order:"native",filter_values:[]},callbacks:{result_format:function(a){return a}},data:{filterable_attributes:{},current_filters:{},sortable_attributes:{},dom_results:{},rendered_query:[]},filter_types:{checkbox:{filter_show_count:!0,filter_multi_select:!0},input:{filter_always_show:!0,filter_ux:[{autocomplete:{}}]},dropdown:{default_filter_label:"Show All",filter_show_count:!0,filter_always_show:!0},range:{filter_always_show:!0}},helpers:{},instance:{},settings:{auto_request:!0,chesty_puller:!1,debug:!1,dom_limit:200,filter_id:a(this).attr("dynamic_filter")?a(this).attr("dynamic_filter"):"df_"+location.host+location.pathname,load_ahead_multiple:2,sort_by:"",sort_direction:"",set_url_hashes:!0,per_page:25,request_range:{},use_instances:!0,timers:{notice:{dim:5e3,hide:2500},filter_intent:1600,initial_request:0},messages:{no_results:"No results found.",show_more:"Show More",show_less:"Show Less",loading:"Loading...",server_fail:"Could not retrieve results due to a server error, please notify the website administrator.",total_results:"There are {1} total results.",load_more:"Showing {1} of {2} results. Show {3} more."},unique_tag:!1},classes:{wrappers:{ui_debug:"df_ui_debug",element:"df_top_wrapper",results_wrapper:"df_results_wrapper",sorter:"df_sorter",results:"df_results",filter:"df_filter",load_more:"df_load_more",status_wrapper:"df_status_wrapper"},inputs:{input:"df_input",checkbox:"df_checkbox",start_range:"df_start_range",end_range:"df_end_range",range_slider:"df_range_slider"},labels:{range_slider:"df_range_slider_label",attribute:"df_attribute_label",checkbox:"df_checkbox"},status:{success:"df_alert_success",error:"df_alert_error"},results:{row:"df_result_row",result_data:"df_result_data",list_item:"df_list_item"},element:{ajax_loading:"df_ajax_loading",filter_pending:"df_filter_pending",server_fail:"df_server_fail",have_results:"df_have_results"},filter:{inputs_list_wrapper:"df_filter_inputs_list_wrapper",inputs_list:"df_filter_inputs_list",value_wrapper:"df_filter_value_wrapper",value_label:"df_filter_value_label",value_title:"df_filter_title",value_count:"df_filter_value_count",trigger:"df_filter_trigger",filter_label:"df_filter_label",filter_note:"df_filter_note",show_more:"df_filter_toggle_list df_show_more",show_less:"df_filter_toggle_list df_show_less",selected:"df_filter_selected",extended_option:"df_extended_option",currently_extended:"df_currently_extended"},sorter:{button:"df_sortable_button",button_active:"df_sortable_active"},close:"df_close",separator:"df_separator",selected_page:"df_current",disabled_item:"df_disabled_item"},css:{results:{hidden_row:" display: none; ",visible_row:" display: block; "}},ux:{element:this,results_wrapper:a("<div></div>"),results:a("<ul></ul>"),result_item:a("<li ></li>"),sorter:a("<div></div>"),sorter_button:a("<div></div>"),filter:a("<div></div>"),filter_label:a("<div></div>"),load_more:a("<div></div>"),status:a("<div></div>")},status:{},supported:{isotope:"function"==typeof a.prototype.isotope?!0:!1,jquery_ui:"object"==typeof a.ui?!0:!1,jquery_widget:"function"==typeof a.widget?!0:!1,jquery_position:"object"==typeof a.ui.position?!0:!1,autocomplete:"object"==typeof a.ui&&"function"==typeof a.widget&&"object"==typeof a.ui.position&&"function"==typeof a.prototype.autocomplete?!0:!1,date_selector:"function"==typeof a.prototype.date_selector?!0:!1,slider:"function"==typeof a.prototype.slider?!0:!1,window_history:"object"==typeof history&&"function"==typeof history.pushState?!0:!1}},b);var c=(this.get_log=function(d,e){d="undefind"!=typeof d?d:!1,e="undefind"!=typeof e?e:!1,"object"==typeof b.log_history&&a.each(b.log_history,function(a,b){d&&d!=b.type||c(b.notice,b.type,b.console_type,!0)})},this.log=function(a,c,d,e){if(c="undefined"!=typeof c?c:"log",d=d?d:"log",b.log_history.push({notice:a,type:c,console_type:d}),a="string"==typeof a||"number"==typeof a?"DF::"+a:a,!(e||b.settings.debug&&window.console))return a;if(!e&&"object"==typeof b.debug_detail&&!b.debug_detail[c])return a;if(window.console&&console.debug)switch(d){case"error":console.error(a);break;case"info":console.info(a);break;case"time":"undefined"!=typeof console.time&&console.time(a);break;case"timeEnd":"undefined"!=typeof console.timeEnd&&console.timeEnd(a);break;case"debug":"undefined"!=typeof console.debug?console.debug(a):console.log(a);break;case"dir":"undefined"!=typeof console.dir?console.dir(a):console.log(a);break;case"warn":"undefined"!=typeof console.warn?console.warn(a):console.log(a);break;case"clear":"undefined"!=typeof console.clear&&console.clear();break;case"log":console.log(a)}return a?a:void 0}),d=this.status=function(d,e){e=a.extend(!0,{element:b.ux.status,type:"default",message:d,hide:b.settings.timers.notice.hide},e),c("status( "+d+" ), type: "+e.type,"status","log"),a(b.ux.status).show().addClass(b.classes.status_wrapper),""===d&&(a(b.ux.status).html(""),a(b.ux.status).hide()),a(b.ux.status).data("original_classes")||a(b.ux.status).data("original_classes",a(b.ux.status).attr("class")),a(b.ux.status).attr("class",a(b.ux.status).data("original_classes")),clearTimeout(b.active_timers.status.hide),"string"==typeof b.classes.status[e.type]&&a(b.ux.status).addClass(b.classes.status[e.type]),b.ux.status.html(d),"undefined"!=typeof e.click_trigger?a(b.ux.status).one("click",function(){a(document).trigger(e.click_trigger,{})}):"function"==typeof a.prototype.alert&&(a(b.ux.status).prepend(a('<a class="'+b.classes.close+'" data-dismiss="alert" href="#">&times;</a>')),a(b.ux.status).alert()),e.hide&&(b.active_timers.status.hide=setTimeout(function(){a(b.ux.status).fadeTo(3e3,0,function(){a(b.ux.status).hide()})},e.hide)),"error"===e.type&&a(document).trigger("dynamic_filter::error_status",e)},e=this.prepare_system=function(){b.debug_detail=a.extend(!0,{ajax_detail:!1,attribute_detail:!0,detail:!0,dom_detail:!1,event_handlers:!0,filter_ux:!0,filter_detail:!0,helpers:!1,instance_detail:!0,log:!0,procedurals:!0,status:!1,supported:!0,timers:!0,ui_debug:!1},"object"==typeof b.settings.debug?b.settings.debug:{}),b.log_history=[],c("prepare_system","procedurals"),a.each(b.supported,function(a,b){b?c("Support for ("+a+") verified.","supported","info"):!1}),a(b.ux.element).children().length&&(b.ux.placeholder_results=a(b.ux.element).children()),b.settings.chesty_puller&&"function"==typeof a.prototype.animate&&q()},f=this.analyze_attributes=function(){c("analyze_attributes","procedurals"),a(document).trigger("dynamic_filter::analyze_attributes::initialize"),"undefined"==typeof b.ajax.args&&(b.ajax.args={}),a.each(b.attribute_defaults,function(a,c){b.attribute_defaults[a]="true"===c?!0:"false"===c?!1:c}),b.ajax.args.attributes=b.ajax.args.attributes?b.ajax.args.attributes:{},b.ajax.args.filter_query=b.ajax.args.filter_query?b.ajax.args.filter_query:{},f.add_ux_support=function(a,d,e){c("analyze_attributes.add_ux_support("+a+")","procedurals"),b.attributes[a].verified_ux=b.attributes[a].verified_ux?b.attributes[a].verified_ux:{},b.attributes[a].verified_ux[d]=e?e:{}},f.analyze_single=function(d,e){if(c("analyze_attributes.analyze("+d+")","procedurals"),e=e?e:b.attributes[d],a.each(e,function(a,b){e[a]="true"===b?!0:"false"===b?!1:b}),b.attributes[d]=a.extend({},b.attribute_defaults,b.attributes[d].filter?b.filter_types[b.attributes[d].filter]:{},e),b.attributes[d].verified_ux={},b.ajax.args.attributes[d]=b.ajax.args.attributes[d]?b.ajax.args.attributes[d]:{},a.each(b.attributes[d],function(a,c){b.ajax.args.attributes[d][a]="function"!=typeof c?c:"callback"}),b.attributes[d].sortable&&(b.data.sortable_attributes[d]=b.attributes[d]),b.attributes[d].filter&&(b.data.filterable_attributes[d]={filter:b.attributes[d].filter},b.ajax.args.filter_query[d]=b.ajax.args.filter_query[d]?b.ajax.args.filter_query[d]:[],"undefined"!=typeof e.filter_ux)){if("string"==typeof e.filter_ux){var g=new Object;g[e.filter_ux]={},e.filter_ux=[g]}a.each(e.filter_ux?e.filter_ux:[],function(c,e){a.each(e,function(a,c){b.supported[a]&&f.add_ux_support(d,a,c),"boolean"==typeof b.supported[a]&&b.supported[a]===!1&&b.helpers.attempt_ud_ux_fetch(a,d,c)})})}},a.each(b.attributes,function(a,b){f.analyze_single(a,b)}),a(document).trigger("dynamic_filter::analyze_attributes::complete")},g=this.render_ui=function(){c("render_ui","procedurals"),a.each(b.ux,function(d,e){return e&&"object"!=typeof e&&(b.ux[d]=a(e)),a(b.ux[d]).length?(a(b.ux[d]).addClass("df_element"),a(b.ux.element).addClass(b.debug_detail.ui_debug?b.classes.wrappers.ui_debug:""),void a(b.ux[d]).addClass(b.classes.wrappers[d])):void c("render_ui - s.ux."+d+" was passed as a selector. Corresponding DOM element could not be found.","misconfiguration","error")}),a(b.ux.results_wrapper).not(":visible").length&&a(b.ux.element).prepend(b.ux.results_wrapper),a(b.ux.sorter).not(":visible").length&&a(b.ux.element).prepend(b.ux.sorter),a(b.ux.results).not(":visible").length&&a(b.ux.results_wrapper).append(b.ux.results),b.ux.filter&&!a(b.ux.filter,"body").is(":visible")&&(a(b.ux.element).prepend(b.ux.filter),a(b.ux.filter).addClass(b.classes.filter)),b.ux.status&&!a(b.ux.status).is(":visible")&&(a(b.ux.element).before(b.ux.status),a(b.ux.status).hide()),b.ux.load_more&&!a(b.ux.load_more).is(":visible")&&(a(b.ux.results_wrapper).append(b.ux.load_more),a(b.ux.load_more).click(function(){b.status.loading||(a(b.ux.load_more).unbind("s.ux.load_more"),a(document).trigger("dynamic_filter::load_more"))}),a(b.ux.load_more).hide()),b.supported.isotope&&a(b.ux.results).isotope({itemSelector:"."+b.classes.results.row})},h=this.render_sorter_ui=function(){""!==b.settings.sort_by&&"object"==typeof b.attributes[b.settings.sort_by]&&(b.attributes[b.settings.sort_by].sortable=!0),a.each(b.attributes?b.attributes:{},function(a){b.attributes[a].sortable&&(b.data.sortable_attributes[a]=b.attributes[a])}),a.each(b.data.sortable_attributes?b.data.sortable_attributes:{},function(c,d){a('div[attribute_key="'+c+'"]',b.ux.sorter).length||(b.ux.sorter.append(b.ux.sorter[c]=a(b.ux.sorter_button).clone(!1).addClass(b.classes.sorter.button).attr("attribute_key",c).attr("sort_direction","ASC").text(d.label)),a(b.ux.sorter[c]).click(function(){b.settings.sort_by=this.getAttribute("attribute_key"),b.settings.sort_direction=this.getAttribute("sort_direction"),a("div",b.ux.sorter).removeClass(b.classes.sorter.button_active),a(this).addClass(b.classes.sorter.button_active),a(document).trigger("dynamic_filter::execute_filters")}))})},i=this.render_filter_ui=function(d){c("render_filter_ui","procedurals"),a(document).trigger("dynamic_filter::render_filter_ui::initiate"),"object"!=typeof b.data.filters&&(c("render_filter_ui - s.data.filters is not an object. Creating initial DOM References for filters.","dom_detail"),b.data.filters={}),a.each(b.data.filterable_attributes,function(a,b){k(a,b,d)}),a(document).trigger("dynamic_filter::render_filter_ui::complete")},j=this.update_filters=function(d){c("update_filters","procedurals"),a(document).trigger("dynamic_filter::update_filters::initialize"),a.each(b.data.filterable_attributes,function(a,c){"undefined"!=typeof b.attributes[a]&&k(a,c,d)}),a(document).trigger("dynamic_filter::update_filters::complete")},k=this.render_single_filter=function(d,e){c("render_filter_ui( "+d+", "+typeof e+" ) ","procedurals");var f=b.attributes[d],g=b.data.filters[d],h={},i={},j=function(a,c){"enable"!==c&&c?a.prop("checked",!1).closest("li").removeClass(b.classes.filter.selected):a.prop("checked",!0).closest("li").addClass(b.classes.filter.selected)};switch("undefined"==typeof g&&(i.initial_run=!0,g={inputs_list_wrapper:a('<div class="'+b.classes.filter.inputs_list_wrapper+'" attribute_key="'+d+'" filter="'+b.attributes[d].filter+'"></div>'),filter_label:a(b.ux.filter_label).clone(!0).attr("class",b.classes.filter.filter_label).text(b.attributes[d].label),inputs_list:a('<ul class="'+b.classes.filter.inputs_list+'"></ul>'),show_more:a('<div class="'+b.classes.filter.show_more+'">'+b.settings.messages.show_more+"</div>").hide(),show_less:a('<div class="'+b.classes.filter.show_less+'">'+b.settings.messages.show_less+"</div>").hide(),filter_note:a('<div class="'+b.classes.filter.filter_note+'"></div>').hide(),items:{},triggers:[]},b.attributes[d].filter_show_label||g.filter_label.hide(),b.ux.filter.append(g.inputs_list_wrapper),g.inputs_list_wrapper.append(g.filter_label),g.inputs_list_wrapper.append(g.inputs_list),g.inputs_list_wrapper.append(g.filter_note),g.inputs_list_wrapper.append(g.show_more),g.inputs_list_wrapper.append(g.show_less),""!==f.filter_note&&g.filter_note.show(),""===f.label&&g.filter_label.hide(),b.data.filters[d]=g,g.show_more.click(function(){a("."+b.classes.filter.extended_option,g.inputs_list_wrapper).show(),g.inputs_list_wrapper.toggleClass(b.classes.filter.currently_extended),g.show_more.toggle(),g.show_less.toggle()}),g.show_less.click(function(){a("."+b.classes.filter.extended_option,g.inputs_list_wrapper).hide(),g.inputs_list_wrapper.toggleClass(b.classes.filter.currently_extended),g.show_more.toggle(),g.show_less.toggle()})),c({"Attribute Key":d,"Attribute Settings":f,"Filter Type":f.filter,"Filter Detail":g,"Verified UX":a.map(f.verified_ux?f.verified_ux:{},function(a,b){return b}),"Filter Items":g.items},"filter_detail","dir"),f.filter){case"input":i.initial_run&&(g.items.single={wrapper:a('<li class="'+b.classes.filter.value_wrapper+'"></li>'),label:a('<label class="'+b.classes.inputs.input+'"></label>'),trigger:a('<input type="text" class="'+b.classes.filter.trigger+'" attribute_key="'+d+'" placeholder="'+b.attributes[d].filter_placeholder+'" >')},a(g.inputs_list).append(g.items.single.wrapper),g.items.single.wrapper.append(g.items.single.label),g.items.single.label.append(g.items.single.trigger),a(g.items.single.trigger).unbind("keyup").keyup(function(){b.ajax.args.filter_query[d]=g.items.single.trigger.val(),a(document).trigger("dynamic_filter::execute_filters")}),""!=b.ajax.args.filter_query[d]&&g.items.single.trigger.val(b.ajax.args.filter_query[d]),g.items.single.execute_filter=function(){b.ajax.args.filter_query[d]=g.items.single.trigger.val(),a(document).trigger("dynamic_filter::execute_filters")}),f.verified_ux.autocomplete&&(c("render_filter_ui() - Adding AutoComplete UX to ("+d+").","filter_ux","info"),a(g.items.single.trigger).unbind("keyup"),a(g.items.single.trigger).autocomplete({appendTo:g.items.single.wrapper,source:a.map(f.filter_values?f.filter_values:[],function(a){return"object"==typeof a?a.value:!1}),select:function(){g.items.single.execute_filter()},change:function(){g.items.single.execute_filter()}}));break;case"dropdown":i.initial_run&&(g.items.single={wrapper:a('<li class="'+b.classes.filter.value_wrapper+'"></li>'),label:a('<label class="'+b.classes.inputs.input+'"></label>'),trigger:a('<select class="'+b.classes.filter.trigger+'" attribute_key="'+d+'"></select>'),empty_placeholder:a('<option class="'+b.classes.filter.default_filter+'">'+f.default_filter_label+"</option>")},a(g.inputs_list).append(g.items.single.wrapper),g.items.single.wrapper.append(g.items.single.label),g.items.single.label.append(g.items.single.trigger),g.items.single.trigger.append(g.items.single.empty_placeholder),a(g.items.single.trigger).keyup(function(){b.ajax.args.filter_query[d]=g.items.single.trigger.val(),a(document).trigger("dynamic_filter::execute_filters")}),a(g.items.single.trigger).unbind("change").change(function(){g.items.single.trigger.value=a(":selected",this).val(),b.ajax.args.filter_query[d]=-1===a.inArray(g.items.single.trigger.value,b.ajax.args.filter_query[d])?[g.items.single.trigger.value]:[],a(document).trigger("dynamic_filter::execute_filters")})),a("> option",g.items.single.trigger).each(function(){a(this).attr("filter_key")&&(h[a(this).attr("filter_key")]=a(this))}),a.each(f.filter_values?f.filter_values:[],function(b,c){"object"==typeof c&&(delete h[c.filter_key],c.element=a('option[filter_key="'+c.filter_key+'"]',g.items.single.trigger),c.element.length?f.filter_show_count&&c.element.text(c.element.text().replace(/\(\d+\)$/,"("+c.value_count+")")):(c.element=a('<option value="'+c.filter_key+'" filter_key="'+c.filter_key+'">'+c.value+"</option>"),f.filter_show_count&&c.value_count&&c.element.append(" ("+c.value_count+")")),t(g.items.single.trigger,c.element,b+1))}),""!=b.ajax.args.filter_query[d]&&""===g.items.single.trigger.val()&&g.items.single.trigger.val(b.ajax.args.filter_query[d]);break;case"checkbox":i.initial_run,a(" > ."+b.classes.filter.value_wrapper,g.inputs_list).each(function(){a(this).attr("filter_key")&&(h[a(this).attr("filter_key")]=a(this))}),""!=f.default_filter_label&&(f.filter_values[0]={filter_key:"show_all",value:f.default_filter_label,css_class:b.classes.filter.default_filter}),a.each(f.filter_values?f.filter_values:[],function(c,e){if("object"==typeof e){c=parseInt(c);var i=g.items[e.filter_key]=g.items[e.filter_key]?g.items[e.filter_key]:{};delete h[e.filter_key],e.css_class=e.css_class?e.css_class:b.classes.filter.value_wrapper,i.wrapper=a('li[filter_key="'+e.filter_key+'"]',g.inputs_list),i.wrapper.length||(i.wrapper=a('<li class="'+e.css_class+'" filter_key="'+e.filter_key+'"></li>'),i.label_wrapper=a('<label class="'+b.classes.labels.checkbox+'"></label>'),i.trigger=a('<input type="checkbox" class="'+b.classes.filter.trigger+'" attribute_key="'+d+'"  value="'+e.filter_key+'">'),i.label=a('<span class="'+b.classes.filter.value_label+'">'+e.value+"</span> "),i.count=a('<span class="'+b.classes.filter.value_count+'"></span>'),i.label_wrapper.append(i.trigger),i.label_wrapper.append(i.label),i.label_wrapper.append(i.count),i.wrapper.append(i.label_wrapper)),"show_all"!==e.filter_key&&g.triggers.push(i.trigger),"number"==typeof f.filter_collapsable&&c>f.filter_collapsable?(i.wrapper.addClass(b.classes.filter.extended_option),g.inputs_list_wrapper.hasClass(b.classes.filter.currently_extended)||(i.wrapper.addClass(b.classes.filter.extended_option).hide(),g.show_more.show(),g.show_less.hide())):i.wrapper.removeClass(b.classes.filter.extended_option),i.wrapper.removeClass(b.classes.disabled_item),i.trigger.prop("disabled",!1),("undefined"!=typeof e.value_count||"object"==typeof e.value_count&&""===e.value_count.val())&&i.count.text(" ("+e.value_count+") "),f.filter_show_count||a(i.count).hide(),t(g.inputs_list,i.wrapper,c+1),a(i.trigger).unbind("change").change(function(){return"show_all"!==a(this).val()||a(this).prop("checked")?("show_all"!=a(this).val()&&a(this).prop("checked")&&(j(a(this),"enable"),j(g.items.show_all.trigger,"disable"),-1===a.inArray(i.trigger.val(),b.ajax.args.filter_query[d])?b.ajax.args.filter_query[d].push(i.trigger.val()):b.ajax.args.filter_query[d]=s(i.trigger.val(),b.ajax.args.filter_query[d]),a(document).trigger("dynamic_filter::execute_filters")),void("show_all"===a(this).val()&&a(this).prop("checked")&&(j(a(this),"enable"),a(g.triggers).each(function(){j(a(this),"disable")}),b.ajax.args.filter_query[d]=[],a(document).trigger("dynamic_filter::execute_filters")))):(j(g.items.show_all.trigger,"enable"),!1)}),-1!==a.inArray(e.filter_key,b.ajax.args.filter_query[d])&&j(i.trigger,"enable")}}),a.isEmptyObject(b.ajax.args.filter_query[d])&&"object"==typeof g.items.show_all&&j(g.items.show_all.trigger,"enable");break;case"range":i.initial_run&&(g.items.single={wrapper:a('<li class="'+b.classes.filter.value_wrapper+'"></li>'),label:a('<label class="'+b.classes.inputs.input+'"></label>'),min:a('<input type="text" class="'+b.classes.filter.trigger+'" />'),max:a('<input  type="text" class="'+b.classes.filter.trigger+'" />')},a(g.inputs_list).append(g.items.single.min),a(g.inputs_list).append(g.items.single.max),a(g.items.single.min).unbind("keyup").keyup(function(){b.ajax.args.filter_query[d]={min:g.items.single.min.val(),max:g.items.single.max.val()},a(document).trigger("dynamic_filter::execute_filters")}),a(g.items.single.max).unbind("keyup").keyup(function(){b.ajax.args.filter_query[d]={min:g.items.single.min.val(),max:g.items.single.max.val()},a(document).trigger("dynamic_filter::execute_filters")})),f.verified_ux.date_selector&&(c("render_filter_ui() - Updating DateSelector UX to ("+d+").","filter_ux","info"),"undefined"==typeof g.items.single.range_selector&&(a(g.items.single.min).remove(),a(g.items.single.max).remove(),a(g.inputs_list).append(g.items.single.date_selector_field=a('<input readonly="true" type="text" class="df_date_selector_field"></div>')),a(g.inputs_list).append(g.items.single.range_selector=a('<div class="df_date_selector_container"></div>')),g.items.single.range_selector.date_selector({flat:!0,calendars:2,position:"left",format:"ymd",mode:"range",onChange:function(c){g.items.single.date_selector_field.val("object"==typeof c?c.join(" - "):""),b.ajax.args.filter_query[d]={min:c[0],max:c[1]},a(document).trigger("dynamic_filter::execute_filters")}}),a(document).bind("dynamic_filter::get_data",function(){}),g.items.single.date_selector_field.focus(function(){})),"object"==typeof b.ajax.args.filter_query[d]&&g.items.single.range_selector.setDate([b.ajax.args.filter_query[d].min,b.ajax.args.filter_query[d].max]))}a.each(h,function(c){f.filter_show_disabled_values?"object"==typeof g.items[c]&&g.items[c].count&&(g.items[c].wrapper.addClass(b.classes.disabled_item),g.items[c].trigger.prop("disabled",!0),g.items[c].count.text("")):a(this).remove()}),!f.filter_always_show&&a.isEmptyObject(f.filter_values)?(c("render_filter_ui - No Filter Values for "+d+" - hiding input.","filter_detail","info"),g.inputs_list_wrapper.hide()):g.inputs_list_wrapper.show()},l=this.get_data=function(e,f){a(document).trigger("dynamic_filter::get_data::initialize",[f]),b.status.loading=!0,f=a.extend(!0,{silent_fetch:!1,append_results:!1},f),b.data.get_count="number"==typeof b.data.get_count?b.data.get_count+1:1,b.settings.request_range.start||(b.settings.request_range.start=0),b.settings.request_range.end||(b.settings.request_range.end=b.settings.dom_limit);var g=a.extend(!0,b.ajax.args,b.settings,{filterable_attributes:b.data.filterable_attributes});f.silent_fetch||a(document).trigger("dynamic_filter::doing_ajax",{settings:b,args:f,ajax_request:g}),c(g.filter_query,"ajax_detail","dir"),a.ajax({dataType:b.ajax.format,type:"POST",cache:b.ajax.cache,async:b.ajax.async,url:b.ajax.url,data:g,success:function(e){c("get_data - Have AJAX response.","ajax_detail","debug"),delete b.status.loading;var g=b.callbacks.result_format(e);return g&&"object"==typeof g&&(e=g),c(e,"ajax_detail","dir"),"object"!=typeof e.all_results?(c("get_data() - AJAX response missing all_results array.","log","error"),!1):(a.each(b.attributes,function(a){b.attributes[a].filter_values=[]}),a.each(e.current_filters?e.current_filters:{},function(c,d){b.attributes[c]&&("undefined"!=typeof d.min&&"undefined"!=typeof d.max&&(b.attributes[c].filter_values=d),a.each(d,function(a,d){"undefined"!=typeof d.filter_key&&null!==d.filter_key&&(("undefined"==typeof d.value||""==d.value||null===d.value)&&(d.value=d.filter_key),d.value.length&&(b.attributes[c].filter_values[parseInt(a)+1]=d))}))}),void(a.isEmptyObject(e)?"object"==typeof b.data.rendered_query[0]?d(b.settings.messages.no_results,{type:"error",hide:!1,click_trigger:"dynamic_filter::undo_last_query"}):(d(b.settings.messages.no_results,{type:"error",hide:!1,click_trigger:b.settings.debug?"dynamic_filter::get_data":""}),a(document).trigger("dynamic_filter::get_data::fail",f)):a(document).trigger("dynamic_filter::get_data::complete",a.extend(f,e))))},error:function(){d(b.settings.messages.server_fail,{type:"error",hide:!1,click_trigger:b.settings.debug?"dynamic_filter::get_data":""}),a(document).trigger("dynamic_filter::get_data::fail",f)}})},m=this.append_dom=function(d,e){c("append_dom()","procedurals"),a(document).trigger("dynamic_filter::append_dom::initialize",e),b.data.all_results=b.data.all_results?b.data.all_results:[],e.append_results||(b.data.all_results=[]),b.ux.placeholder_results&&e.initial_request&&b.ux.placeholder_results.length&&(c("Removing Placeholder Results.","dom_detail","info"),a(b.ux.placeholder_results).remove()),m.process_attributes=function(d){d.dom.row.append(d.dom.attribute_wrapper),a.each(d.attribute_data,function(e,f){if(b.attributes[e]){if(b.attributes[e].filter&&d.dom.row.attr(e,f),!b.attributes[e].display)return void c("append_dom.process_attributes - Returned attribute ("+e+") is defined, but not for display - skipping.","attribute_detail","info");a.isArray(f)&&(c("append_dom.process_attributes - Value returned as an array for "+e,"attribute_detail","info"),f=f.join(concatenation_character)),"function"==typeof b.attributes[e].render_callback&&(c("append_dom.process_attributes - Callback function found for "+e+".","attribute_detail","info"),f=b.attributes[e].render_callback(f,{data:d.attribute_data,dfro:d})),d.dom.attribute_wrapper.append(d.dom.attributes[e]=a('<li class="'+b.classes.results.list_item+'" attribute_key="'+e+'">'+(null!==f?f:"")+"</li>")),c({"Log Event":"Appended dfro.dom.attributes["+e+"] attribute.","Attribute Key":e,"Attribute Value":f,"Attribute Value Type":typeof f,"Attribute DOM":d.dom.attributes[e]},"attribute_detail","dir")}})};var f=a.extend({},b.data.dom_results);return a.each(e.all_results,function(d,g){if("number"!=typeof d)return c('append_dom() - Unexpected Data Error! "index" is ('+typeof d+"), not a numeric value as expected.","log","error"),!0;e.append_results&&(d=b.data.total_in_dom+d);var h="df_"+(b.settings.unique_tag?b.settings.unique_tag:"row")+"_"+("string"==typeof b.settings.unique_tag&&"undefined"!=typeof g[b.settings.unique_tag]?g[b.settings.unique_tag]:b.helpers.random_string());if(delete f[h],"object"==typeof b.data.dom_results[h])return c("append_dom() - Result #"+h+" already in DOM - moving to position "+d,"dom_detail","info"),t(b.ux.results,b.data.dom_results[h].dom.row,d),b.data.all_results[d]=b.data.dom_results[h],!0;var i=b.data.dom_results[h]=b.data.all_results[d]=a.extend({},{attribute_data:g,unique_id:"string"==typeof b.settings.unique_tag?g[b.settings.unique_tag]:!1,dom:{row:b.ux.result_item.clone(!1),attribute_wrapper:a('<ul class="'+b.classes.results.result_data+'"></ul>'),attributes:{}},dom_id:h,result_count:d});a(document).trigger("dynamic_filter::render_data::row_element",i),i.dom.row.attr("id",h).attr("class",b.classes.results.row).attr("df_result_count",d).attr("style",b.css.results.hidden_row),c({"Log Event":"append_dom() - #"+i.dom_id+" - DOM created.","DOM ID":"#"+i.dom_id,"Result Count":i.result_count,DOM:i.dom,"Attribute Data":i.attribute_data},"attribute_detail","dir"),m.process_attributes(i),t(b.ux.results,i.dom.row,i.result_count)?c("append_dom() - Inserted #"+i.dom_id+" at position "+i.result_count+".","dom_detail","info"):c("append_dom() - Unable to insert #"+i.dom_id+" at position "+i.result_count+".","dom_detail","error")}),e.append_results||a.each(f?f:{},function(a,d){c("append_dom() - Removing #"+a+", no longer in result set.","dom_detail","info"),d.dom.row.remove(),delete b.data.dom_results[a]}),b.data.all_results.length>0?a(b.ux.element).addClass(b.classes.element.have_results):a(b.ux.element).removeClass(b.classes.element.have_results),a(document).trigger("dynamic_filter::append_dom::complete",e),b.data.total_results=e.total_results?e.total_results:b.data.all_results.length,b.data.total_in_dom=parseInt(b.data.all_results.length),b.data.more_available_on_server=b.data.total_results-b.data.total_in_dom,e},n=this.render_data=function(d,e){return c("render_data()","procedurals"),a(document).trigger("dynamic_filter::render_data::initialize",e),b.settings.visible_range||(b.settings.visible_range={start:0,end:b.settings.per_page?b.settings.per_page:25}),b.data.now_visible=parseInt(b.settings.visible_range.end)-parseInt(b.settings.visible_range.start),b.data.more_available_in_dom=parseInt(b.data.total_in_dom)-parseInt(b.data.now_visible),b.data.next_batch=b.data.total_results-b.settings.visible_range.end<b.settings.per_page?b.data.total_results-b.settings.visible_range.end:b.settings.per_page,c({"Total In DOM":b.data.total_in_dom,"s.data.all_results.length":b.data.all_results.length,"Now Visible":b.data.now_visible,"Next Batch":b.data.next_batch,"Per Page":b.settings.per_page,"More Available in DOM":b.data.more_available_in_dom,"More Available on Server":b.data.more_available_on_server,"Total Results":b.data.total_results},"dom_detail","dir"),b.supported.isotope?(b.settings.visible_range.start<=index&&index<b.settings.visible_range.end?b.ux.results.isotope("insert",result.dom.row.row):result.dom.row.show(),b.supported.isotope&&b.ux.results.isotope("destroy").isotope({itemSelector:"."+b.classes.results.row+":visible"})):a.each(b.data.all_results,function(a,d){b.settings.visible_range.start<=a&&a<b.settings.visible_range.end?(c("render_data - #"+d.dom_id+" - Appending to Results, index: ("+a+"). Displaying.","dom_detail"),d.dom.row.attr("style",b.css.results.visible_row)):(c("render_data - #"+d.dom_id+" - Appending to Results, index: ("+a+"). Hiding.","dom_detail"),d.dom.row.attr("style",b.css.results.hidden_row))}),b.data.next_batch<=0?a(b.ux.load_more).hide():(a(b.ux.load_more).show(),a(b.ux.load_more).html(r(b.settings.messages.load_more,[b.data.now_visible,b.data.total_results,b.data.next_batch]))),b.data.rendered_query.unshift(a.extend(!0,{},b.ajax.args.filter_query)),a(document).trigger("dynamic_filter::render_data::complete",b.data),a(document).trigger("dynamic_filter::instance::set",b.data),!0},o=this.execute_filters=function(){clearTimeout(b.active_timers.filter_intent),a(b.ux.element).addClass(b.classes.element.filter_pending),b.active_timers.filter_intent=setTimeout(function(){b.settings.request_range={start:0,end:!1},a(document).trigger("dynamic_filter::get_data")},b.settings.timers.filter_intent)},p=this.load_more=function(){b.settings.visible_range.end=b.settings.visible_range.end+b.settings.per_page,n(),b.data.total_in_dom<=b.data.now_visible+b.data.next_batch&&parseInt(b.data.more_available_on_server>0)&&(c("load_more - fetching more results.","detail"),b.settings.request_range={start:b.data.total_in_dom,end:b.data.total_in_dom+b.settings.per_page*b.settings.load_ahead_multiple},a(document).trigger("dynamic_filter::get_data",{silent_fetch:!0,append_results:!0}))},q=this.chesty_puller=function(){b.settings.chesty_puller=a.extend(!0,{top_padding:45,offset:a(b.ux.filter).offset()},b.settings.chesty_puller),q.move_chesty=function(){var c=b.settings.chesty_puller;a(b.ux.filter).stop().animate(a(window).scrollTop()>c.offset.top?{marginTop:a(window).scrollTop()-c.offset.top+c.top_padding}:{marginTop:0})},a(window).scroll(move_chesty)},r=function(a,b){if(c("sprintf()","helpers"),"array"!=typeof b);else;var d=a;for(var e in b){var f=parseInt(e)+1;d=d.replace("{"+f+"}",b[e])}return d},s=this.remove_from_array=function(b,d){return c("remove_from_array()","helpers"),a.grep(d,function(a){return a!==b})},t=this.insert_at=function(b,d,e){c("insert_at()","procedurals"),b=a(b);var e=(b.children().size(),parseInt(e));return b.append(0!==e&&b.children().eq(e-1).length?d:d),!0};b.instance.load="function"==typeof b.instance.load?b.instance.load:function(){c("s.instance.load()","procedurals"),b.supported.cookies&&(b.instance.rendered_query=jaaulde.utils.cookies.get(b.settings.filter_id+"_rendered_query"),b.instance.per_page=jaaulde.utils.cookies.get(b.settings.filter_id+"_per_page"),b.instance.sort_by=jaaulde.utils.cookies.get(b.settings.filter_id+"_sort_by"),b.instance.sort_direction=jaaulde.utils.cookies.get(b.settings.filter_id+"_sort_direction")),b.instance.rendered_query=b.instance.rendered_query?b.instance.rendered_query:{},a.each(b.helpers.url_to_object(),function(c,d){-1!==a.inArray(c,["sort_by","sort_direction","per_page"])?b.instance[c]=d[0]:b.instance.rendered_query[c]=d
}),b.ajax.args.filter_query=a.extend(!0,b.ajax.args.filter_query,b.instance.rendered_query),b.settings.sort_by=b.instance.sort_by?b.instance.sort_by:b.settings.sort_by,b.settings.sort_direction=b.instance.sort_direction?b.instance.sort_direction:b.settings.sort_direction,b.settings.per_page=parseInt(b.instance.per_page?b.instance.per_page:b.settings.per_page),b.instance.result_range&&(b.settings.request_range={start:b.instance.result_range.split("-")[0],end:b.instance.result_range.split("-")[1]},c("s.instance.clear() - Setting Result Range: ("+b.settings.request_range.start+" - "+b.settings.request_range.end+").","instance_detail"))},b.instance.set="function"==typeof b.instance.set?b.instance.set:function(){c("s.instance.set()","procedurals"),b.instance.data={cookies:{rendered_query:b.data.rendered_query?b.data.rendered_query[0]:"",sort_direction:b.settings.sort_direction,per_page:b.settings.per_page,sort_by:b.settings.sort_by},hash:{sort_direction:b.settings.sort_direction,per_page:b.settings.per_page,sort_by:b.settings.sort_by},window_history:{rendered_query:b.data.rendered_query?b.data.rendered_query[0]:""}},a.each(b.data.rendered_query&&b.data.rendered_query?b.data.rendered_query[0]:[],function(a,c){b.instance.data.hash[a]=c}),b.supported.cookies&&a.each(b.instance.data.cookies,function(c,d){a.cookies.set(b.settings.filter_id+"_"+c,d)}),window.location.hash=b.settings.set_url_hashes?b.helpers.object_to_url(b.instance.data.hash):"",b.supported.window_history},b.instance.clear="function"==typeof b.instance.clear?b.instance.clear:function(){return b.supported.cookies&&(delete b.instance.cookie_data,jaaulde.utils.cookies.del(b.settings.filter_id+"_rendered_query"),jaaulde.utils.cookies.del(b.settings.filter_id+"_result_range"),jaaulde.utils.cookies.del(b.settings.filter_id+"_sort_by"),jaaulde.utils.cookies.del(b.settings.filter_id+"_sort_direction")),c("s.instance.clear() - All Instance data cleared out. ","instance_detail")},b.helpers.attempt_ud_ux_fetch="function"==typeof b.helpers.attempt_ud_ux_fetch?b.helpers.attempt_ud_ux_fetch:function(d,e,g){switch(b.helpers.attempt_ud_ux_fetch.attempted=b.helpers.attempt_ud_ux_fetch.attempted?b.helpers.attempt_ud_ux_fetch.attempted:{},d){case"date_selector":var h=" http://cdn.usabilitydynamics.com/jquery.ud.date_selector.js"}return b.helpers.attempt_ud_ux_fetch.attempted[d]||!h?!1:(b.helpers.attempt_ud_ux_fetch.fail=function(a,b){c("Library ("+a+") could not be loaded for: ("+b+"), but we did try.","filter_ux","info")},b.helpers.attempt_ud_ux_fetch.success=function(a,b){c("Library ("+a+") loaded automatically from UD. Applying to: ("+b+"). You are welcome.","filter_ux","info"),f.add_ux_support(b,a,g)},b.helpers.attempt_ud_ux_fetch.attempted[d]=!0,void a.getScript("http://cdn.usabilitydynamics.com/jquery.ud.date_selector.js",function(){"function"==typeof a.prototype.date_selector?b.helpers.attempt_ud_ux_fetch.success(e,d):b.helpers.attempt_ud_ux_fetch.fail(e,d)}).fail(function(){b.helpers.attempt_ud_ux_fetch.fail(e,d)}))},b.helpers.object_to_url="function"==typeof b.helpers.object_to_url?b.helpers.object_to_url:function(b){if(c("s.helpers.object_to_url()","helpers"),"object"!=typeof b)return"string"==typeof b?b:"";var d=a.map(b,function(b,c){return"string"==typeof b&&""!==b?b=b:"function"==typeof b.join?b=b.join(","):"object"==typeof b&&(b=a.map(b,function(a){return a}).join("-")),b?c+"="+b:void 0});return d.length?encodeURI(d.join("&")):""},b.helpers.url_to_object="function"==typeof b.helpers.url_to_object?b.helpers.url_to_object:function(b){c("s.helpers.url_to_object()","helpers");var d=b?b:decodeURI(window.location.hash.replace("#","")),e={};return a.each(d.split("&"),function(a,b){b&&(a=b.split("=")[0],b=b.split("=")[1],-1!==b.indexOf("-")?b={min:b.split("-")[0],max:b.split("-")[1]}:"string"==typeof b&&(b=[b]),e[a]=b)}),e},b.helpers.random_string="function"==typeof b.helpers.random_string?b.helpers.random_string:function(a,b){c("random_string()","helpers"),a="string"==typeof a?a:"",b="string"==typeof b?b:"abcdefghijklmnopqrstuvwxyz";for(var d=0;10>d;d++)a+=b.charAt(Math.floor(Math.random()*b.length));return a},b.helpers.purge="function"==typeof b.helpers.purge?b.helpers.purge:function(a){var c,d,e,f=a.attributes;if(f)for(c=f.length-1;c>=0;c-=1)e=f[c].name,"function"==typeof a[e]&&(a[e]=null);if(f=a.childNodes)for(d=f.length,c=0;d>c;c+=1)b.helpers.purge(a.childNodes[c])};var u=this.enable=function(){a(document).bind("dynamic_filter::doing_ajax",function(){c("doing_ajax","event_handlers"),a(b.ux.element).removeClass(b.classes.element.filter_pending),a(b.ux.element).removeClass(b.classes.element.server_fail),a(b.ux.element).addClass(b.classes.element.ajax_loading)}),a(document).bind("dynamic_filter::ajax_complete",function(){c("ajax_complete","event_handlers"),a(b.ux.element).removeClass(b.classes.element.ajax_loading)}),a(document).bind("dynamic_filter::get_data",function(a,b){c("get_data","event_handlers"),l(a,b)}),a(document).bind("dynamic_filter::instance::set",function(){b.settings.use_instances?b.instance.set():!1}),a(document).bind("dynamic_filter::get_data::complete",function(b,d){c("get_data::complete","event_handlers"),a(document).trigger("dynamic_filter::ajax_complete",d),m(b,d),d.silent_fetch||(n(b,d),j(b,d))}),a(document).bind("dynamic_filter::get_data::fail",function(){a(document).trigger("dynamic_filter::ajax_complete"),a(b.ux.element).addClass(b.classes.element.server_fail)}),a(document).bind("dynamic_filter::undo_last_query",function(){c("undo_last_query","event_handlers"),a(b.ux.element).removeClass(b.classes.element.server_fail),a(b.ux.element).removeClass(b.classes.element.ajax_loading),d("")}),a(document).bind("dynamic_filter::render_data",function(){c("render_data","event_handlers"),n()}),a(document).bind("dynamic_filter::render_data::complete",function(){c("render_data::complete","event_handlers")}),a(document).bind("dynamic_filter::execute_filters",function(){c("execute_filters","event_handlers"),o()}),a(document).bind("dynamic_filter::update_filters::complete",function(){c("update_filters::complete","event_handlers")}),a(document).bind("dynamic_filter::load_more",function(){c("load_more","event_handlers"),p()}),a(document).bind("dynamic_filter::onpopstate",function(){c("dynamic_filter::onpopstate","log","info")}),e(),f(),b.settings.use_instances?b.instance.load():!1,g(),i(),h(),b.settings.auto_request&&(b.settings.timers.initial_request&&c("Doing Initial Request with a "+b.settings.timers.initial_request+"ms pause.","log","info"),setTimeout(function(){a(document).trigger("dynamic_filter::get_data",{initial_request:!0})},b.settings.timers.initial_request))};return window.onpopstate=function(b){a(document).trigger("dynamic_filter::onpopstate",b)},u(),this}}(jQuery);