require({baseUrl:"/assets/scripts",config:define("app.config",{analytics:window.analytics={},wp_menufication:window.wp_menufication={element:"#wp_menufication",enable_menufication:"on",headerLogo:"http://umesouthpadre.com/media/2014/01/020a9ba2dd708c48353fe9bc3f4aecb190.png",headerLogoLink:"http://umesouthpadre.com/",menuLogo:"",menuText:"",triggerWidth:"770",addHomeLink:null,addHomeText:"",addSearchField:null,hideDefaultMenu:"on",onlyMobile:null,direction:"left",theme:"dark",disableCSS:"on",childMenuSupport:"on",childMenuSelector:"sub-menu, children",activeClassSelector:"current-menu-item, current-page-item, active",enableSwipe:"on",doCapitalization:null,supportAndroidAbove:"3.5",disableSlideScaling:null,toggleElement:"",customMenuElement:"",customFixedHeader:"",addToFixedHolder:"",page_menu_support:null,wrapTagsInList:"",allowedTags:"DIV, NAV, UL, OL, LI, A, P, H1, H2, H3, H4, SPAN, FORM, INPUT, SEARCH",customCSS:"",is_page_menu:"",enableMultiple:"",is_user_logged_in:""},ajaxurl:window.ajaxurl="http://umesouthpadre.com/manage/admin-ajax.php"}),paths:{jquery:["http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min"],"jquery.migrate":["http://umesouthpadre.com/wp-includes/js/jquery/jquery-migrate.min"],"jquery.menufication":["http://umesouthpadre.com/vendor/usabilitydynamics/wp-menufication/scripts/jquery.menufication.min"],"menufication-setup":["/vendor/usabilitydynamics/wp-menufication/scripts/menufication-setup"],"jquery.ui.widget":["http://umesouthpadre.com/wp-includes/js/jquery/ui/jquery.ui.widget.min"],"jquery.ui.accordion":["http://umesouthpadre.com/wp-includes/js/jquery/ui/jquery.ui.accordion.min"],"admin-bar":["http://discodonniepresents.com/wp-includes/js/admin-bar.min"],"jquery.flexslider":["http://umesouthpadre.com/assets/scripts/jquery.flexslider"],"jquery.socialstream":["/vendor/usabilitydynamics/wp-festival/lib/modules/social-stream/scripts/jquery.social.stream.1.5.5.custom"],"jquery.socialstream.wall":["/vendor/usabilitydynamics/wp-festival/lib/modules/social-stream/scripts/jquery.social.stream.wall.1.3"],"jquery.masonry":["http://umesouthpadre.com/wp-includes/js/jquery/jquery.masonry.min"]},deps:["jquery","app.bootstrap"],shim:{"menufication-setup":{deps:["jquery"]},"jquery.menufication":{deps:["jquery"]},"jquery.flexslider":{deps:["jquery"]},"jquery.socialstream":{deps:["jquery"]},"jquery.socialstream.wall":{deps:["jquery.socialstream"]},"jquery.masonry":{deps:["jquery"]}}}),define("app.bootstrap",["jquery.menufication","menufication-setup"],function(){console.debug("app.bootstrap","loaded"),window._gaq=window._gaq||[],window._gaq.push(["_setAccount","UA-31265686-7"]),window._gaq.push(["_setAllowLinker",!0],["_setDomainName","umesouthpadre.com"],["_setCustomVar",3,"year","2013",3],["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://stats.g.doubleclick.net/dc.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(),window._prum=[["id","528c4342abe53dc362000000"],["mark","firstbyte",(new Date).getTime()]],function(){var a=document.getElementsByTagName("script")[0],b=document.createElement("script");b.async="async",b.src="//rum-static.pingdom.net/prum.min.js",a.parentNode.insertBefore(b,a)}(),require(["app.main","twitter.bootstrap","udx.wp.spa"])});