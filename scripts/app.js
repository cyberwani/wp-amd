function Bootstrap(jQuery){require(["countdown"],function(){var liftoffTime=new Date;liftoffTime.setDate(liftoffTime.getDate()+25),jQuery("#countdown").countdown({until:liftoffTime,format:"dHMS",labels:["Years","Months","Weeks","Days","Hour","Min","Sec"],labels1:["Year","Month","Week","Day","Hour","Min","Sec"]})}),require(["skrollr"],function(){skrollr.init({forceHeight:!1})}),require(["sticky"],function(){var st=0;jQuery("#wpadminbar").length>0&&(st=jQuery("#wpadminbar").height()),jQuery(".navbar-top").sticky({topSpacing:st})})}require.config({paths:{html5shiv:"//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js",bootstrap:"//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min",jquery:"//codeorigin.jquery.com/jquery-2.0.3",countdown:"utility/jquery.countdown",skrollr:"utility/skrollr",sticky:"utility/sticky"},shim:{bootstrap:{deps:["jquery"]}},uglify:{beautify:!0,max_line_length:1e3,no_mangle:!0},waitSeconds:15}),require(["jquery","bootstrap"],Bootstrap);