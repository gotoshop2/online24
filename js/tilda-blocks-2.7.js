function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){if($(window).width()>=960){var t228_navLinks=$("#rec"+recid+" .t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=new Array(),t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_updateSectionsOffsets(t228_sections);t228_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t228_updateSectionsOffsets(t228_sections)},200));$('.t228').bind('displayChanged',function(){t228_updateSectionsOffsets(t228_sections)});setInterval(function(){t228_updateSectionsOffsets(t228_sections)},5000);t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var t228_clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t228_clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_updateSectionsOffsets(sections){$(sections).each(function(){var t228_curSection=$(this);t228_curSection.attr("data-offset-top",t228_curSection.offset().top)})}
function t228_getSectionByHref(curlink){var t228_curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t228_curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t228_curLinkValue+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop(),t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!=0&&t228_clickedSectionId==null&&t228_sections[t228_sections.length-1].attr("data-offset-top")>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_sectionTop=t228_curSection.attr("data-offset-top"),t228_id=t228_curSection.attr('id'),t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setPath(){}
function t228_setWidth(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth();if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}}
function t228_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t228"),burger=el.find(".t228__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t228_opened")})
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t229_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t229__list_item a[href='"+url+"']").addClass("t-active");$(".t229__list_item a[href='"+url+"/']").addClass("t-active");$(".t229__list_item a[href='"+pathname+"']").addClass("t-active");$(".t229__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t229__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t229__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t229_checkAnchorLinks(recid){if($(window).width()>=960){var t229_navLinks=$("#rec"+recid+" .t229__list_item a:not(.tooltipstered)[href*='#']");if(t229_navLinks.length>0){t229_catchScroll(t229_navLinks)}}}
function t229_catchScroll(t229_navLinks){var t229_clickedSectionId=null,t229_sections=new Array(),t229_sectionIdTonavigationLink=[],t229_interval=100,t229_lastCall,t229_timeoutId;t229_navLinks=$(t229_navLinks.get().reverse());t229_navLinks.each(function(){var t229_cursection=t229_getSectionByHref($(this));if(typeof t229_cursection.attr("id")!="undefined"){t229_sections.push(t229_cursection)}
t229_sectionIdTonavigationLink[t229_cursection.attr("id")]=$(this)});t229_updateSectionsOffsets(t229_sections);t229_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t229_updateSectionsOffsets(t229_sections)},200));$('.t229').bind('displayChanged',function(){t229_updateSectionsOffsets(t229_sections)});setInterval(function(){t229_updateSectionsOffsets(t229_sections)},5000);t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId);t229_navLinks.click(function(){var t229_clickedSection=t229_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t229_clickedSection.attr("id")!="undefined"){t229_navLinks.removeClass('t-active');$(this).addClass('t-active');t229_clickedSectionId=t229_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t229_now=new Date().getTime();if(t229_lastCall&&t229_now<(t229_lastCall+t229_interval)){clearTimeout(t229_timeoutId);t229_timeoutId=setTimeout(function(){t229_lastCall=t229_now;t229_clickedSectionId=t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId)},t229_interval-(t229_now-t229_lastCall))}else{t229_lastCall=t229_now;t229_clickedSectionId=t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId)}})}
function t229_updateSectionsOffsets(sections){$(sections).each(function(){var t229_curSection=$(this);t229_curSection.attr("data-offset-top",t229_curSection.offset().top)})}
function t229_getSectionByHref(curlink){var t229_curLinkValue=curlink.attr("href").replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t229_curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t229_curLinkValue+"']")}}
function t229_highlightNavLinks(t229_navLinks,t229_sections,t229_sectionIdTonavigationLink,t229_clickedSectionId){var t229_scrollPosition=$(window).scrollTop(),t229_valueToReturn=t229_clickedSectionId;if(t229_sections.length!=0&&t229_clickedSectionId==null&&t229_sections[t229_sections.length-1].attr("data-offset-top")>(t229_scrollPosition+300)){t229_navLinks.removeClass('t-active');return null}
$(t229_sections).each(function(e){var t229_curSection=$(this),t229_sectionTop=t229_curSection.attr("data-offset-top"),t229_id=t229_curSection.attr('id'),t229_navLink=t229_sectionIdTonavigationLink[t229_id];if(((t229_scrollPosition+300)>=t229_sectionTop)||(t229_sections[0].attr("id")==t229_id&&t229_scrollPosition>=$(document).height()-$(window).height())){if(t229_clickedSectionId==null&&!t229_navLink.hasClass('t-active')){t229_navLinks.removeClass('t-active');t229_navLink.addClass('t-active');t229_valueToReturn=null}else{if(t229_clickedSectionId!=null&&t229_id==t229_clickedSectionId){t229_valueToReturn=null}}
return!1}});return t229_valueToReturn}
function t229_setPath(pageid){}
function t229_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t229").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t229").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t229_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$("#rec"+recid+" .t229").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t229_changeBgOpacityMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t229").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll)}else{el.css("background-color",bgcolor)}})}}
function t452_scrollToTop(){$('html, body').animate({scrollTop:0},700)}
function t690_onSuccess(t690_form){var t690_inputsWrapper=t690_form.find('.t-form__inputsbox');var t690_inputsHeight=t690_inputsWrapper.height();var t690_inputsOffset=t690_inputsWrapper.offset().top;var t690_inputsBottom=t690_inputsHeight+t690_inputsOffset;var t690_targetOffset=t690_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t690_target=t690_targetOffset-200}else{var t690_target=t690_targetOffset-100}
if(t690_targetOffset>$(window).scrollTop()||($(document).height()-t690_inputsBottom)<($(window).height()-100)){t690_inputsWrapper.addClass('t690__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t690_target},400);setTimeout(function(){t690_inputsWrapper.addClass('t690__inputsbox_hidden')},400)}
var successurl=t690_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t706_onSuccessCallback(t706_form){$(".t706__cartwin-products").slideUp(10,function(){});$(".t706__cartwin-bottom").slideUp(10,function(){});$(".t706 .t-form__inputsbox").slideUp(700,function(){});try{tcart__unlockScroll()}catch(e){}}
function t754__init(recid){setTimeout(function(){t_prod__init(recid);t754__hoverZoom_init(recid);t754_initPopup(recid);t754__updateLazyLoad(recid);t754__alignButtons_init(recid)},500)}
function t754__alignButtons_init(recid){var rec=$('#rec'+recid);if(rec.find('[data-buttons-v-align]')[0]){try{t754__alignButtons(recid);$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&$isMobile){return}
t754__alignButtons(recid)},200));$('.t754').bind('displayChanged',function(){t754__alignButtons(recid)});if($isMobile){$(window).on('orientationchange',function(){t754__alignButtons(recid)})}}catch(e){console.log('buttons-v-align error: '+e.message)}}}
function t754__alignButtons(recid){var rec=$('#rec'+recid);var wrappers=rec.find('.t754__textwrapper');var maxHeight=0;var itemsInRow=rec.find('.t-container').attr('data-blocks-per-row')*1;var mobileView=$(window).width()<=480;var tableView=$(window).width()<=960&&$(window).width()>480;var mobileOneRow=$(window).width()<=960&&rec.find('.t754__container_mobile-flex')[0]?!0:!1;var mobileTwoItemsInRow=$(window).width()<=480&&rec.find('.t754 .mobile-two-columns')[0]?!0:!1;if(mobileView){itemsInRow=1}
if(tableView){itemsInRow=2}
if(mobileTwoItemsInRow){itemsInRow=2}
if(mobileOneRow){itemsInRow=999999}
var i=1;var wrappersInRow=[];$.each(wrappers,function(key,element){element.style.height='auto';if(itemsInRow===1){element.style.height='auto'}else{wrappersInRow.push(element);if(element.offsetHeight>maxHeight){maxHeight=element.offsetHeight}
$.each(wrappersInRow,function(key,wrapper){wrapper.style.height=maxHeight+'px'});if(i===itemsInRow){i=0;maxHeight=0;wrappersInRow=[]}
i++}})}
function t754__hoverZoom_init(recid){if(isMobile){return}
var rec=$('#rec'+recid);try{if(rec.find('[data-hover-zoom]')[0]){if(!jQuery.cachedZoomScript){jQuery.cachedZoomScript=function(url){var options={dataType:'script',cache:!0,url:url};return jQuery.ajax(options)}}
$.cachedZoomScript('https://static.tildacdn.com/js/tilda-hover-zoom-1.0.min.js').done(function(script,textStatus){if(textStatus=='success'){setTimeout(function(){t_hoverZoom_init(recid,".t-slds__container")},500)}else{console.log('Upload script error: '+textStatus)}})}}catch(e){console.log('Zoom image init error: '+e.message)}}
function t754__updateLazyLoad(recid){var scrollContainer=$("#rec"+recid+" .t754__container_mobile-flex");var curMode=$(".t-records").attr("data-tilda-mode");if(scrollContainer.length&&curMode!="edit"&&curMode!="preview"){scrollContainer.bind('scroll',t_throttle(function(){t_lazyload_update()},500))}}
function t754_initPopup(recid){var rec=$('#rec'+recid);rec.find('[href^="#prodpopup"]').one("click",function(e){e.preventDefault();var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');t_sldsInit(recid+' #t754__product-'+lid_prod+'')});rec.find('[href^="#prodpopup"]').click(function(e){e.preventDefault();t754_showPopup(recid);var el_popup=rec.find('.t-popup');var el_prod=$(this).closest('.js-product');var lid_prod=el_prod.attr('data-product-lid');el_popup.find('.js-product').css('display','none');var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]');el_fullprod.css('display','block');var analitics=el_popup.attr('data-track-popup');if(analitics>''){var virtTitle=el_fullprod.find('.js-product-name').text();if(!virtTitle){virtTitle='prod'+lid_prod}
Tilda.sendEventToStatistics(analitics,virtTitle)}
var curUrl=window.location.href;if(curUrl.indexOf('#!/tproduct/')<0&&curUrl.indexOf('%23!/tproduct/')<0&&curUrl.indexOf('#%21%2Ftproduct%2F')<0){if(typeof history.replaceState!='undefined'){window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod)}}
t754_updateSlider(recid+' #t754__product-'+lid_prod+'');if(window.lazy=='y'){t_lazyload_update()}});if($('#record'+recid).length==0){t754_checkUrl(recid)}
t754_copyTypography(recid)}
function t754_checkUrl(recid){var curUrl=window.location.href;var tprodIndex=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&tprodIndex<0){tprodIndex=curUrl.indexOf('%23!/tproduct/');if(tprodIndex<0){tprodIndex=curUrl.indexOf('#%21%2Ftproduct%2F')}}
if(tprodIndex>=0){var curUrl=curUrl.substring(tprodIndex,curUrl.length);var curProdLid=curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);var rec=$('#rec'+recid);if(curUrl.indexOf(recid)>=0&&rec.find('[data-product-lid='+curProdLid+']').length){rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click')}}}
function t754_updateSlider(recid){var el=$('#rec'+recid);t_slds_SliderWidth(recid);var sliderWrapper=el.find('.t-slds__items-wrapper');var sliderWidth=el.find('.t-slds__container').width();var pos=parseFloat(sliderWrapper.attr('data-slider-pos'));sliderWrapper.css({transform:'translate3d(-'+(sliderWidth*pos)+'px, 0, 0)'});t_slds_UpdateSliderHeight(recid);t_slds_UpdateSliderArrowsHeight(recid)}
function t754_showPopup(recid){var el=$('#rec'+recid);var popup=el.find('.t-popup');popup.css('display','block');setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show');if(window.lazy=='y'){t_lazyload_update()}},50);$('body').addClass('t-body_popupshowed');el.find('.t-popup').mousedown(function(e){var windowWidth=$(window).width();var maxScrollBarWidth=17;var windowWithoutScrollBar=windowWidth-maxScrollBarWidth;if(e.clientX>windowWithoutScrollBar){return}
if(e.target==this){t754_closePopup()}});el.find('.t-popup__close, .t754__close-text').click(function(e){t754_closePopup()});$(document).keydown(function(e){if(e.keyCode==27){t754_closePopup()}})}
function t754_closePopup(){$('body').removeClass('t-body_popupshowed');$('.t-popup').removeClass('t-popup_show');var curUrl=window.location.href;var indexToRemove=curUrl.indexOf('#!/tproduct/');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&indexToRemove<0){indexToRemove=curUrl.indexOf('%23!/tproduct/');if(indexToRemove<0){indexToRemove=curUrl.indexOf('#%21%2Ftproduct%2F')}}
curUrl=curUrl.substring(0,indexToRemove);setTimeout(function(){$(".t-popup").scrollTop(0);$('.t-popup').not('.t-popup_show').css('display','none');if(typeof history.replaceState!='undefined'){window.history.replaceState('','',curUrl)}},300)}
function t754_removeSizeStyles(styleStr){if(typeof styleStr!="undefined"&&(styleStr.indexOf('font-size')>=0||styleStr.indexOf('padding-top')>=0||styleStr.indexOf('padding-bottom')>=0)){var styleStrSplitted=styleStr.split(';');styleStr="";for(var i=0;i<styleStrSplitted.length;i++){if(styleStrSplitted[i].indexOf('font-size')>=0||styleStrSplitted[i].indexOf('padding-top')>=0||styleStrSplitted[i].indexOf('padding-bottom')>=0){styleStrSplitted.splice(i,1);i--;continue}
if(styleStrSplitted[i]==""){continue}
styleStr+=styleStrSplitted[i]+";"}}
return styleStr}
function t754_copyTypography(recid){var rec=$('#rec'+recid);var titleStyle=rec.find('.t754__title').attr('style');var descrStyle=rec.find('.t754__descr').attr('style');rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle))}
function t886_init(recid){var el=$('#rec'+recid);var block=el.find('.t886');var closeBtn=el.find('.t886__btn');var storageItem=block.attr("data-storage-item");var lastOpen=localStorage.getItem(storageItem);if(lastOpen==null){block.removeClass('t886_closed')}
closeBtn.click(function(e){block.addClass('t886_closed');localStorage.setItem(storageItem,Math.floor(Date.now()/1000));e.preventDefault()})}