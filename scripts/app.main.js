define("app.main",["jquery","skrollr"],function(a){console.debug("app.main","loaded"),window.innerWidth>700&&require(["sticky"],function(){a(".navbar-top").sticky({})}),a("a[data-track], a[href*=eventbrite]").click(function(a){return a.preventDefault(),_gaq.push(["_link",a.target.href]),!0})});