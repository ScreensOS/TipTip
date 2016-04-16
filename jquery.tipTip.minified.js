 /*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(t){t.fn.tipTip=function(e){var o={activation:"hover",keepAlive:!1,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:!1,executeOnInitialization:!1,enter:function(){},exit:function(){}},i=t.extend(o,e);if(t("#tiptip_holder").length<=0){var n=t('<div id="tiptip_holder" style="max-width:'+i.maxWidth+';"></div>'),r=t('<div id="tiptip_content"></div>'),a=t('<div id="tiptip_arrow"></div>');t("body").append(n.html(r).prepend(a.html('<div id="tiptip_arrow_inner"></div>')))}else var n=t("#tiptip_holder"),r=t("#tiptip_content"),a=t("#tiptip_arrow");return this.each(function(){function e(){i.enter.call(this),r.html(d),n.hide().removeAttr("class").css("margin","0"),a.removeAttr("style");var e=parseInt(f.offset().top),o=parseInt(f.offset().left),p=parseInt(f.outerWidth(!0)),l=parseInt(f.outerHeight(!0)),c=n.outerWidth(!0),h=n.outerHeight(!0),s=Math.round((p-c)/2),_=Math.round((l-h)/2),v=Math.round(o+s),m=Math.round(e+l+i.edgeOffset),g="",b="",M=Math.round(c-12)/2;"bottom"==i.defaultPosition?g="_bottom":"top"==i.defaultPosition?g="_top":"left"==i.defaultPosition?g="_left":"right"==i.defaultPosition&&(g="_right");var O=s+o<parseInt(t(window).scrollLeft()),w=c+o>parseInt(t(window).width());O&&0>s||"_right"==g&&!w||"_left"==g&&o<c+i.edgeOffset+5?(g="_right",b=Math.round(h-13)/2,M=-12,v=Math.round(o+p+i.edgeOffset),m=Math.round(e+_)):(w&&0>s||"_left"==g&&!O)&&(g="_left",b=Math.round(h-13)/2,M=Math.round(c),v=Math.round(o-(c+i.edgeOffset+5)),m=Math.round(e+_));var x=e+l+i.edgeOffset+h+8>parseInt(t(window).height()+t(window).scrollTop()),I=e+l-(i.edgeOffset+h+8)<0;x||"_bottom"==g&&x||"_top"==g&&!I?("_top"==g||"_bottom"==g?g="_top":g+="_top",b=h,m=Math.round(e-(h+5+i.edgeOffset))):(I|("_top"==g&&I)||"_bottom"==g&&!x)&&("_top"==g||"_bottom"==g?g="_bottom":g+="_bottom",b=-12,m=Math.round(e+l+i.edgeOffset)),"_right_top"==g||"_left_top"==g?m+=5:("_right_bottom"==g||"_left_bottom"==g)&&(m-=5),("_left_top"==g||"_left_bottom"==g)&&(v+=5),a.css({"margin-left":M+"px","margin-top":b+"px"}),n.css({"margin-left":v+"px","margin-top":m+"px"}).attr("class","tip"+g),u&&clearTimeout(u),u=setTimeout(function(){n.stop(!0,!0).fadeIn(i.fadeIn)},i.delay)}function o(){i.exit.call(this),u&&clearTimeout(u),n.fadeOut(i.fadeOut)}var f=t(this);if(i.content)var d=i.content;else var d=f.attr(i.attribute);if(""!=d){i.content||f.removeAttr(i.attribute);var u=!1;"hover"==i.activation?(f.hover(function(){e()},function(){i.keepAlive||o()}),i.keepAlive&&n.hover(function(){},function(){o()})):"focus"==i.activation?f.focus(function(){e()}).blur(function(){o()}):"click"==i.activation&&(f.click(function(){return e(),!1}).hover(function(){},function(){i.keepAlive||o()}),i.keepAlive&&n.hover(function(){},function(){o()})),i.executeOnInitialization&&e()}})}}(jQuery);
