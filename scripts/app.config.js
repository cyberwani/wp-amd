!function(a){console.debug("app configuration",a),require({baseUrl:"/assets/scripts",config:define("app.config",{analytics:window.analytics={},wp_menufication:window.wp_menufication=a.menufication,ajaxurl:window.ajaxurl="http://"+window.location.hostname+"/manage/admin-ajax.php"}),paths:{jquery:["http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min"],"jquery.migrate":["/wp-includes/js/jquery/jquery-migrate.min"],"jquery.ui.widget":["/wp-includes/js/jquery/ui/jquery.ui.widget.min"],"jquery.ui.accordion":["/wp-includes/js/jquery/ui/jquery.ui.accordion.min"],"admin-bar":["/wp-includes/js/admin-bar.min"],"jquery.flexslider":["/vendor/themes/wp-festival/scripts/jquery.flexslider"],"jquery.socialstream":["/vendor/themes/wp-festival/lib/modules/social-stream/scripts/jquery.social.stream.1.5.5.custom"],"jquery.socialstream.wall":["/vendor/themes/wp-festival/lib/modules/social-stream/scripts/jquery.social.stream.wall.1.3"],"jquery.masonry":["/wp-includes/js/jquery/jquery.masonry.min"],"jquery.colorbox":["/vendor/themes/wp-festival/scripts/jquery.colorbox"],"jquery.menufication":["/vendor/plugins/wp-menufication/scripts/jquery.menufication.min"],"menufication-setup":["/vendor/plugins/wp-menufication/scripts/menufication-setup"],"menufication.advanced":["/vendor/themes/wp-festival/scripts/menufication.advanced"]},deps:["jquery","app.bootstrap"],shim:{"menufication-setup":{deps:["jquery","jquery.menufication","menufication.advanced"]},"jquery.menufication":{deps:["jquery"]},"menufication.advanced":{deps:["jquery.menufication"]},"jquery.flexslider":{deps:["jquery"]},"jquery.socialstream":{deps:["jquery"]},"jquery.socialstream.wall":{deps:["jquery.socialstream"]},"jquery.masonry":{deps:["jquery"]}}}),define("app.bootstrap",["menufication-setup"],function(){console.debug("app.bootstrap","loaded"),window._gaq=window._gaq||[],window._gaq.push(["_setAccount","UA-31265686-7"]),window._gaq.push(["_setAllowLinker",!0],["_setDomainName",window.location.hostname],["_setCustomVar",3,"year","2013",3],["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://stats.g.doubleclick.net/dc.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(),window._prum=[["id","528c4342abe53dc362000000"],["mark","firstbyte",(new Date).getTime()]],function(){var a=document.getElementsByTagName("script")[0],b=document.createElement("script");b.async="async",b.src="//rum-static.pingdom.net/prum.min.js",a.parentNode.insertBefore(b,a)}(),jQuery("#menufication-nav li li a").on("click",function(a){a.stopPropagation()}),require(["app.main","twitter.bootstrap","udx.wp.spa"])})}(_theme_app_config);