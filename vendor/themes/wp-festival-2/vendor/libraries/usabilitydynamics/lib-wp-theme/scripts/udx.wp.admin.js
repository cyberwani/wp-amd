define("udx.wp.admin",["udx.utility"],function(){return console.debug("udx.wp.admin","loaded"),function(){return console.debug("udx.wp.admin","ready"),"function"==typeof prettyPrint&&prettyPrint(),"function"==typeof jQuery.prototype.datepicker&&jQuery(".flawless_datepicker").datepicker(),"function"==typeof jQuery.fn.sortable&&jQuery(".flawless_sortable_wrapper").each(function(){jQuery(".flawless_sortable_attributes",this).sortable()}),jQuery("#cfct-copy-build-data").click("live",function(a){a.preventDefault();var b={};b.action="cbc_get_page_build",b.post_id=jQuery("input#post_ID").val(),jQuery.post(ajaxurl,b,function(a){jQuery(".cb_page_data").remove(),jQuery("<div class='cb_page_data'><textarea style='width: 100%;margin: 0 0 10px 0; height: 200px;' readonly='true'>"+a.content+"</textarea></div>").insertAfter("#titlediv")},"json")}),jQuery("#cfct-paste-build-data").click("live",function(a){a.preventDefault();var b={},c=prompt("Paste the serialized data below.");b.action="cbc_insert_page_build",b.post_id=jQuery("input#post_ID").val(),b.post_data=c,jQuery.ajax({url:ajaxurl,data:b,type:"post",dataType:"json",success:function(a){jQuery(".cb_page_data").remove(),alert("true"==a.success?"Done. Reload page.":"Error.")}})}),jQuery("#cfct-set-build-class").live("click",function(a){a.preventDefault();var b=this,c=jQuery(b).attr("current_setting")?jQuery(b).attr("current_setting"):"",d=jQuery("#post_ID").val(),e=prompt("Build Class:",c);null!==e&&e!=c&&jQuery.ajax({url:ajaxurl,data:{action:"flawless_cb_build_class",post_id:d,new_class:e},success:function(){jQuery(b).attr("current_setting",e)},dataType:"json"})}),jQuery(".misc-pub-section.curtime.misc-pub-section-last").removeClass("misc-pub-section-last"),jQuery("#edit-post-type-change").click(function(a){jQuery(this).hide(),jQuery("#post-type-select").slideDown(),a.preventDefault()}),jQuery("#save-post-type-change").click(function(a){jQuery("#post-type-select").slideUp(),jQuery("#edit-post-type-change").show(),jQuery("#post-type-display").text(jQuery("#flawless_cpt_post_type :selected").text()),a.preventDefault()}),jQuery("#cancel-post-type-change").click(function(a){jQuery("#post-type-select").slideUp(),jQuery("#edit-post-type-change").show(),a.preventDefault()}),jQuery("#cfct-sortables").find(".cfct-add-row-class").live("click",function(a){a.preventDefault();var b=this,c=jQuery(b).attr("data-row-class"),d=jQuery(b).attr("data-current-setting")?jQuery(b).attr("data-current-setting"):"",e=jQuery(b).closest("."+c),f=jQuery(e).attr("id"),g=jQuery("#post_ID").val(),h=prompt("Row Class:",d);null!==h&&h!=d&&jQuery.ajax({url:ajaxurl,data:{action:"flawless_cb_row_class",post_id:g,row_id:f,row_class:c,new_class:h},success:function(){jQuery(b).attr("data-current-setting",h)},dataType:"json"})}),this}});