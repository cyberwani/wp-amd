/** Minified JS for Menufication jQuery plugin **/
"use strict";
(function( e ) {
  e.fn.extend( {
    menufication: function( n ) {
      return w[n] && m ? w[n].apply( this, Array.prototype.slice.call( arguments, 1 ) ) : "object" != typeof n && n ? (e.error( "Method " + n + " does not exist for menufication" ), void 0) : w.init.apply( this, arguments )
    },
    hasClasses: function( e ) {
      var n = e.replace( /\s/g, "" ).split( "," ), t = this;
      for( var i in n )
        if( jQuery( t ).hasClass( n[i] ) ) return !0;
      return !1
    },
    addClasses: function( e ) {
      var n = e.replace( /\s/g, "" ).split( "," ), t = this;
      for( var i in n ) jQuery( t ).addClass( n[i] )
    }
  } );
  var n, t, i, o, l, r, a, s, d, u, c, g, p = !1, m = !1, h = !1, f = "menufication", v = 0;
  t = {
    toggleElement: null,
    enableSwipe: !0,
    hideDefaultMenu: !1,
    showHeader: !0,
    customFixedHeader: null,
    menuText: "",
    headerLogo: "",
    headerLogoLink: "",
    triggerWidth: 770,
    addHomeLink: !0,
    addHomeText: "Home",
    childMenuSupport: !0,
    childMenuSelector: "sub-menu, child-menu, children",
    activeClassSelector: "active-class, active",
    supportAndroidAbove: 3.5,
    onlyMobile: !1,
    transitionDuration: 600,
    scrollSpeed: .6,
    allowedTags: "DIV, NAV, UL, LI, A, P, H1, H2, H3, H4, SPAN, FORM, INPUT",
    wrapTagsInList: "",
    addToFixedHolder: "",
    direction: "left",
    theme: "dark",
    menuLogo: "",
    disableSlideScaling: !1,
    doCapitalization: !1,
    enableBlackBerry: !1,
    enableMultiple: !1,
    multipleContentElement: "",
    multipleToggleElement: ""
  };
  var w = {
    init: function( o ) {
      m || b.utils.isOldIE( 9 ) || (n = e( this ), o || (o = {}), i = e.extend( {}, t, o ), (!i.onlyMobile || b.utils.isMobile()) && (i.enableBlackBerry || !b.utils.isBB()) && ((!b.utils.hasTranslate3d() || b.utils.androidVersionIsBelow( i.supportAndroidAbove ) || b.utils.isIE()) && (f += "-non-css3"), i.gestures = b.utils.isMobile() ? {
        start: "touchstart",
        move: "touchmove",
        end: "touchend",
        click: "click",
        fastClick: "touchend"
      } : {
        start: "mousedown",
        move: "mousemove",
        end: "mouseup",
        click: "click",
        fastClick: "click"
      }, b.utils.androidVersionIsBelow( i.supportAndroidAbove ) && (i.gestures.fastClick = "click"), 0 !== n.length && b.scrolling.setScrollHandlers(), i.triggerWidth ? (e( window ).bind( "resize", function() {
        b.utils.checkTriggerWidth( e( window ).width() )
      } ), b.utils.checkTriggerWidth( e( window ).width() )) : b.init()))
    },
    openMenu: function() {
      e( document ).trigger( "menufication-open", ["open"] ), l.addClass( f + "-transition-in" ), p = !0, o.bind( i.gestures.move, function( e ) {
        e.preventDefault()
      } )
    },
    closeMenu: function() {
      e( document ).trigger( "menufication-close", ["close"] ), l.removeClass( f + "-transition-in" ), p = !1, o.unbind()
    },
    openMultiple: function() {
      e( document ).trigger( "menufication-multiple-open", ["open"] ), l.addClass( f + "-transition-in-multiple" ), p = !0, o.bind( i.gestures.move, function( e ) {
        e.preventDefault()
      } )
    },
    closeMultiple: function() {
      e( document ).trigger( "menufication-multiple-close", ["close"] ), l.removeClass( f + "-transition-in-multiple" ), p = !1, o.unbind()
    },
    toggleMultiple: function() {
      p ? w.closeMultiple() : w.openMultiple()
    },
    toggleMenu: function() {
      p ? w.closeMenu() : w.openMenu()
    }
  }, b = {
    init: function() {
      b.utils.wrapBody( [f + "-page-holder", f + "-inner-wrap", f + "-outer-wrap"], i.enableMultiple ), l.addClass( i.theme ).addClass( i.direction + "-direction" ), i.customFixedHeader ? b.buildCustomFixedHeader() : i.showHeader && b.buildHeader(), b.buildFixedHolder(), b.buildMenu(), i.enableMultiple && b.buildMultiple(), b.addEvents(), b.utils.isMobile() ? b.scrolling.addBouncyScroll() : 0 !== n.length && a.addClass( f + "-scroll" ), m = !0, e( document ).trigger( "menufication-done", ["done"] )
    },
    buildHeader: function() {
      var t = e( '<div id="' + f + '-top" class="' + f + '-top" />' );
      0 !== n.length && t.append( '<div id="' + f + '-btn"class="' + f + '-btn"><p>' + i.menuText + "</p></div>" ), i.enableMultiple && 0 !== i.multipleToggleElement.length && t.append( e( i.multipleToggleElement ).addClass( f + "-multiple-toggle" ).show() ), l.prepend( t ).addClass( f + "-add-padding" ), i.toggleElement = "#" + f + "-btn", i.headerLogo.length > 0 && b.addHeaderLogo( t )
    },
    addHeaderLogo: function( n ) {
      if( i.headerLogoLink.length > 1 ) var t = e( '<center><a href="' + i.headerLogoLink + '"><img src="' + i.headerLogo + '" id="' + f + '-header-logo" /></a></center>' ); else var t = e( '<center><img src="' + i.headerLogo + '" id="' + f + '-header-logo" /></center>' );
      n.append( t )
    },
    buildCustomFixedHeader: function() {
      e( i.customFixedHeader ).hide().addClass( f + "-original-custom-fixed-header" );
      var n = e( i.customFixedHeader ).clone( !0 );
      n.css( "position", "static" );
      var t = e( '<div class="' + f + '-custom-top" />' );
      n.show().removeClass( f + "-original-custom-fixed-header" ), l.prepend( t.append( n ) ).addClass( f + "-add-padding" )
    },
    buildFixedHolder: function() {
      if( i.addToFixedHolder && i.addToFixedHolder.length > 0 ) {
        u = e( '<div id="' + f + '-fixed-holder" />' );
        var n = i.addToFixedHolder.replace( /\s/g, "" ).split( "," );
        for( var t in n ) u.append( e( n[t] ) );
        l.prepend( u )
      }
    },
    buildMenu: function() {
      if( 0 !== n.length ) {
        i.hideDefaultMenu && n.hide();
        var t = n.clone().removeAttr( "id class" );
        t = b.trimMenu( t ), i.addHomeLink && t.prepend( '<li><a href="http://' + window.location.hostname + '">' + i.addHomeText + "</a></li>" ), "UL" === t.prop( "tagName" ) ? t.addClass( f + "-menu-level-0" ) : t.find( "ul" ).first().addClass( f + "-menu-level-0" ).siblings( "ul" ).addClass( f + "-menu-level-0" ), i.childMenuSelector && i.childMenuSupport ? b.buildChildMenus( t ) : b.removeChildMenus( t ), i.menuLogo.length > 0 && b.addMenuLogo( t ), l.prepend( t ), t.wrap( '<div id="' + f + '-scroll-container" />' ), !b.utils.isIOS() && b.utils.isMobile() || i.disableSlideScaling || t.wrap( '<div id="' + f + '-transform-container" />' ), t.wrap( '<nav id="' + f + '-nav" class="' + f + '-nav" />' ).show(), r = e( "#" + f + "-nav" ), a = e( "#" + f + "-scroll-container" )
      }
    },
    trimMenu: function( n ) {
      var o = i.activeClassSelector ? i.activeClassSelector : "", l = i.childMenuSelector ? i.childMenuSelector : "", r = i.allowedTags ? i.allowedTags.replace( /\s/g, "" ).split( "," ) : t.allowedTags;
      return n.find( "*" ).each( function() {
        var n = e( this ), t = n.prop( "tagName" );
        if( -1 === r.indexOf( t ) || n.hasClass( "skip-link" ) ) return n.remove(), void 0;
        if( "A" === t && i.doCapitalization ) {
          var a = n.text().toLowerCase(), s = a.charAt( 0 ).toUpperCase() + a.slice( 1 );
          n.text( s )
        }
        i.wrapTagsInList === t && n.wrap( "li" ), n.hasClasses( l ) ? (n.removeAttr( "class id" ), n.addClasses( l )) : n.hasClasses( o ) ? (n.removeAttr( "class id" ), n.addClass( f + "-active-class" )) : n.removeAttr( "class id" )
      } ), n
    },
    addMenuLogo: function( n ) {
      var t = e( '<center><img src="' + i.menuLogo + '" id="' + f + '-menu-logo" /></center>' );
      n.prepend( t )
    },
    buildChildMenus: function( n ) {
      var t = i.childMenuSelector.replace( /\s/g, "" ).split( "," );
      for( var o in t ) n.find( "." + t[o] ).each( function() {
        var n = e( this );
        n.removeAttr( "id class" ), n.addClass( f + "-child-menu" ), n.parent().addClass( f + "-has-child-menu" ).bind( i.gestures.click, function( t ) {
          "A" === t.target.nodeName || "SPAN" === t.target.nodeName ? console.log( "link-click" ) : (t.preventDefault(), e( this ).toggleClass( f + "-child-menu-open" ), n.toggle(), t.stopPropagation())
        } )
      } ), i.activeClassSelector && b.toggleActiveClasses( n );
      b.countMenuLevel( n )
    },
    countMenuLevel: function( n ) {
      n.find( "." + f + "-child-menu" ).each( function() {
        var n = e( this ), t = n.parents( "." + f + "-child-menu" ).length + 1;
        n.addClass( f + "-menu-level-" + t )
      } )
    },
    removeChildMenus: function( n ) {
      if( !i.childMenuSupport ) {
        if( !i.childMenuSelector || i.childMenuSelector === t.childMenuSelector ) return n.find( "." + f + "-menu-level-0" ).children().each( function() {
          e( this ).find( "ul" ).remove()
        } ), void 0;
        var o = i.childMenuSelector.replace( /\s/g, "" ).split( "," );
        for( var l in o ) n.find( "." + o[l] ).each( function() {
          e( this ).remove()
        } )
      }
    },
    toggleActiveClasses: function( n ) {
      n.find( "." + f + "-has-child-menu" ).each( function() {
        var n = e( this );
        n.find( "*" ).children( "." + f + "-active-class" ).length > 0 && (n.toggleClass( f + "-child-menu-open" ), setTimeout( function() {
          n.addClass( f + "-child-menu-open" ), n.find( "." + f + "-child-menu" ).first().show()
        }, i.transitionDuration ))
      } )
    },
    buildMultiple: function() {
      if( 0 === i.multipleContentElement.length ) return console.log( "Menufication:  Cannot create multiple content without a multipleContentElement" ), void 0;
      var n = "left" === i.direction ? "right" : "left";
      s = e( '<div id="' + f + '-multiple-container" class="' + f + "-multiple-" + n + '" />' ), s.append( e( i.multipleContentElement ).show() ), s.css( "height", e( window ).height() + 75 + "px" ), l.prepend( s )
    },
    addEvents: function() {
      i.toggleElement && 0 !== n.length && e( i.toggleElement ).bind( i.gestures.fastClick, function( e ) {
        e.preventDefault(), e.stopPropagation(), w.toggleMenu()
      } ), i.enableMultiple && 0 !== i.multipleToggleElement.length && e( i.multipleToggleElement ).bind( i.gestures.fastClick, function( e ) {
        e.preventDefault(), e.stopPropagation(), w.toggleMultiple()
      } ), i.enableSwipe && b.utils.isMobile() && b.enableSwipeEvent()
    },
    removeEvents: function() {
      e( i.toggleElement ).unbind(), e( i.multipleToggleElement ).unbind(), a.unbind()
    },
    enableSwipeEvent: function() {
      var n, t, o, l, r, a = e( "#" + f + "-outer-wrap" );
      a.bind( i.gestures.start, function( e ) {
        o = (new Date).getTime(), n = e.originalEvent.touches[0].pageX, t = e.originalEvent.touches[0].clientY
      } ), a.bind( i.gestures.move, function( e ) {
        l = e.originalEvent.touches[0].pageX, r = e.originalEvent.touches[0].clientY
      } ), a.bind( i.gestures.end, function() {
        var e = l > n ? "right" : "left", a = r - t > 40 || -40 > r - t, s = l - n > 90 || -90 > l - n, d = (new Date).getTime();
        if( !(d - o > 600 || a) && s ) switch( e ) {
          case "left":
            "left" === i.direction ? w.closeMenu() : w.openMenu();
            break;
          case "right":
            "left" === i.direction ? w.openMenu() : w.closeMenu()
        }
      } )
    },
    prevDefault: function( e ) {
      e.preventDefault(), e.stopPropagation()
    },
    scrolling: {
      scrollHandlers: {},
      addBouncyScroll: function() {
        c = document.getElementById( f + "-nav" ), a.bind( i.gestures.start, function( e ) {
          v = b.scrolling.scrollHandlers.getTop( c );
          var n = e.originalEvent.touches[0].pageY;
          g = n
        } ), a.bind( i.gestures.move, function( e ) {
          e.preventDefault(), b.scrolling.checkTouchMove( e )
        } ), a.bind( i.gestures.end, function() {
          b.scrolling.checkScrollEffect()
        } )
      },
      checkTouchMove: function( e ) {
        var n = e.originalEvent.touches[0].pageY;
        v = b.scrolling.scrollHandlers.getTop(), b.scrolling.scrollHandlers.setTop( n ), g = n
      },
      checkScrollEffect: function() {
        b.scrolling.setScrollData(), b.scrolling.scrollHandlers.bounceBack()
      },
      setScrollHandlers: function() {
        b.scrolling.scrollHandlers = !b.utils.hasTranslate3d() || b.utils.androidVersionIsBelow( i.supportAndroidAbove ) || b.utils.isIE() ? {
          getTop: function() {
            return parseInt( getComputedStyle( c ).top, 10 )
          },
          setTop: function( e ) {
            c.style.top = g >= e ? v + 1.1 * (e - g) + "px" : v - 1.1 * (g - e) + "px"
          },
          bounceBack: function( e, n, t ) {
            if( b.scrolling.isAtBottom() ) {
              var t = b.utils.isAndroid() ? 15 : 20;
              r.animate( {
                top: -(d.navHeight - d.windowHeight - t)
              }, i.transitionDuration )
            } else b.scrolling.isAtTop() && r.animate( {
              top: 0
            }, i.transitionDuration )
          }
        } : {
          getTop: function() {
            return new WebKitCSSMatrix( window.getComputedStyle( c ).webkitTransform ).m42
          },
          setTop: function( e ) {
            c.style.webkitTransform = g >= e ? "translateY(" + (v + (e - g) * i.scrollSpeed) + "px)" : "translateY(" + (v - (g - e) * i.scrollSpeed) + "px)"
          },
          bounceBack: function( e, n, t ) {
            if( b.scrolling.isAtBottom() ) {
              r.addClass( f + "-add-transition" );
              var t = b.utils.isAndroid() ? 15 : 40;
              c.style.webkitTransform = "translateY(" + -(d.navHeight - d.windowHeight - t) + "px)", b.scrolling.removeTransitionClass( i.transitionDuration )
            } else b.scrolling.isAtTop() && (r.addClass( f + "-add-transition" ), c.style.webkitTransform = "translateY(0px)", b.scrolling.removeTransitionClass( i.transitionDuration ))
          }
        }
      },
      setScrollData: function() {
        d = {
          navHeight: r.height(),
          windowHeight: e( window ).height()
        }
      },
      isAtTop: function() {
        return v > 0 || 0 > v && d.navHeight < d.windowHeight
      },
      isAtBottom: function() {
        return d.navHeight + v < d.windowHeight && d.navHeight > d.windowHeight
      },
      removeTransitionClass: function( e ) {
        setTimeout( function() {
          r.removeClass( f + "-add-transition" )
        }, e )
      }
    },
    utils: {
      reset: function() {
        e( "." + f + "-custom-top" ).hide(), e( "#" + f + "-top" ).hide(), l.removeClass( f + "-add-padding" ), n.show(), b.removeEvents(), w.closeMenu(), e( "." + f + "-original-custom-fixed-header" ).show(), e( document ).trigger( "menufication-reset", ["done"] )
      },
      reapply: function() {
        e( "." + f + "-custom-top" ).show(), e( "#" + f + "-top" ).show(), l.addClass( f + "-add-padding" ), i.hideDefaultMenu && n.hide(), b.addEvents(), e( "." + f + "-original-custom-fixed-header" ).hide(), e( document ).trigger( "menufication-reapply", ["done"] )
      },
      checkTriggerWidth: function( e ) {
        i.triggerWidth >= e && !h ? (m ? b.utils.reapply() : b.init(), h = !0) : e > i.triggerWidth && h && (h = !1, b.utils.reset())
      },
      wrapBody: function( n ) {
        for( var t in n ) {
          var i = document.createElement( "div" );
          for( i.id = n[t]; document.body.firstChild; ) i.appendChild( document.body.firstChild );
          document.body.appendChild( i )
        }
        o = e( "#" + f + "-inner-wrap" ), l = e( "#" + f + "-outer-wrap" )
      },
      hasTranslate3d: function() {
        var e, n = document.createElement( "p" ), t = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
        document.body.insertBefore( n, null );
        for( var i in t ) void 0 !== n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", e = window.getComputedStyle( n ).getPropertyValue( t[i] ));
        return document.body.removeChild( n ), void 0 !== e && e.length > 0 && "none" !== e
      },
      isMobile: function() {
        return navigator.userAgent.match( /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i )
      },
      isAndroid: function() {
        return navigator.userAgent.match( /Android/i )
      },
      isIOS: function() {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i )
      },
      isIE: function() {
        return navigator.userAgent.match( /IEMobile/i ) || -1 != navigator.appVersion.indexOf( "MSIE" )
      },
      isBB: function() {
        return navigator.userAgent.match( /BlackBerry|BB10|RIM/i )
      },
      isOldIE: function( e ) {
        var n = -1 != navigator.appVersion.indexOf( "MSIE" );
        return n && e > parseFloat( navigator.appVersion.split( "MSIE" )[1] )
      },
      androidVersionIsBelow: function( e ) {
        var n = navigator.userAgent;
        if( n.indexOf( "Android" ) >= 0 ) {
          var t = parseFloat( n.slice( n.indexOf( "Android" ) + 8 ) );
          if( e > t ) return !0
        }
        return !1
      }
    }
  }
})( jQuery );