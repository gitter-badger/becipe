/*!
 * bootstrap-select v1.1.2
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */
;!function(b){var a=function(d,c,f){if(f){f.stopPropagation();f.preventDefault()}this.$element=b(d);this.$newElement=null;this.$button=null;this.$menu=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof c=="object"&&c);if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;this.render=a.prototype.render;this.refresh=a.prototype.refresh;this.setStyle=a.prototype.setStyle;this.selectAll=a.prototype.selectAll;this.deselectAll=a.prototype.deselectAll;this.init()};a.prototype={constructor:a,init:function(c){this.$element.hide();this.multiple=this.$element.prop("multiple");var f=this.$element.attr("id");this.$newElement=this.createView();this.$element.after(this.$newElement);this.$menu=this.$newElement.find("> .dropdown-menu");this.$button=this.$newElement.find("> button");if(f!==undefined){var d=this;this.$button.attr("data-id",f);b('label[for="'+f+'"]').click(function(){d.$button.focus()})}if(this.multiple){this.$newElement.addClass("show-tick")}this.checkDisabled();this.checkTabIndex();this.clickListener();this.render();this.liHeight();this.setWidth();this.setStyle();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this)},createDropdown:function(){var c="<div class='btn-group bootstrap-select'><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'><div class='filter-option pull-left'></div>&nbsp;<div class='caret'></div></button><div class='dropdown-menu open'><ul class='dropdown-menu inner' role='menu'></ul></div></div>";return b(c)},createView:function(){var c=this.createDropdown();var d=this.createLi();c.find("ul").append(d);return c},reloadLi:function(){this.destroyLi();var c=this.createLi();this.$menu.find("ul").append(c)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var e=this,d=[],c="";this.$element.find("option").each(function(h){var j=b(this);var g=j.attr("class")||"";var i=j.attr("style")||"";var n=j.data("content")?j.data("content"):j.html();var l=j.data("subtext")!==undefined?'<small class="muted">'+j.data("subtext")+"</small>":"";var k=j.data("icon")!==undefined?'<i class="glyphicon '+j.data("icon")+'"></i> ':"";if(k!==""&&(j.is(":disabled")||j.parent().is(":disabled"))){k="<span>"+k+"</span>"}if(!j.data("content")){n=k+'<span class="text">'+n+l+"</span>"}if(e.options.hideDisabled&&(j.is(":disabled")||j.parent().is(":disabled"))){d.push('<a style="min-height: 0; padding: 0"></a>')}else{if(j.parent().is("optgroup")&&j.data("divider")!=true){if(j.index()==0){var m=j.parent().attr("label");var o=j.parent().data("subtext")!==undefined?'<small class="muted">'+j.parent().data("subtext")+"</small>":"";var f=j.parent().data("icon")?'<i class="'+j.parent().data("icon")+'"></i> ':"";m=f+'<span class="text">'+m+o+"</span>";if(j[0].index!=0){d.push('<div class="div-contain"><div class="divider"></div></div><dt>'+m+"</dt>"+e.createA(n,"opt "+g,i))}else{d.push("<dt>"+m+"</dt>"+e.createA(n,"opt "+g,i))}}else{d.push(e.createA(n,"opt "+g,i))}}else{if(j.data("divider")==true){d.push('<div class="div-contain"><div class="divider"></div></div>')}else{if(b(this).data("hidden")==true){d.push("")}else{d.push(e.createA(n,g,i))}}}}});b.each(d,function(f,g){c+="<li rel="+f+">"+g+"</li>"});if(!this.multiple&&this.$element.find("option:selected").length==0&&!e.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return b(c)},createA:function(e,c,d){return'<a tabindex="0" class="'+c+'" style="'+d+'">'+e+'<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a>'},render:function(){var g=this;this.$element.find("option").each(function(h){g.setDisabled(h,b(this).is(":disabled")||b(this).parent().is(":disabled"));g.setSelected(h,b(this).is(":selected"))});var f=this.$element.find("option:selected").map(function(h,k){var l=b(this);var j=l.data("icon")&&g.options.showIcon?'<i class="glyphicon '+l.data("icon")+'"></i> ':"";var i;if(g.options.showSubtext&&l.attr("data-subtext")&&!g.multiple){i=' <small class="muted">'+l.data("subtext")+"</small>"}else{i=""}if(l.data("content")&&g.options.showContent){return l.data("content")}else{if(l.attr("title")!=undefined){return l.attr("title")}else{return j+l.html()+i}}}).toArray();var e=!this.multiple?f[0]:f.join(", ");if(g.multiple&&g.options.selectedTextFormat.indexOf("count")>-1){var c=g.options.selectedTextFormat.split(">");var d=this.options.hideDisabled?":not([disabled])":"";if((c.length>1&&f.length>c[1])||(c.length==1&&f.length>=2)){e=g.options.countSelectedText.replace("{0}",f.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+d).length)}}if(!e){e=g.options.title!=undefined?g.options.title:g.options.noneSelectedText}g.$newElement.find(".filter-option").html(e)},setStyle:function(e,d){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""))}var c=e?e:this.options.style;if(d=="add"){this.$button.addClass(c)}else{if(d=="remove"){this.$button.removeClass(c)}else{this.$button.removeClass(this.options.style);this.$button.addClass(c)}}},liHeight:function(){var d=this.$newElement.clone();d.appendTo("body");var c=d.addClass("open").find(".dropdown-menu li > a").outerHeight();d.remove();this.$newElement.data("liHeight",c)},setSize:function(){var q=this,d=this.$menu,h=d.find(".inner"),n=h.find("li > a"),s=this.$newElement.outerHeight(),f=this.$newElement.data("liHeight"),j=d.find("li .divider").outerHeight(true),p=parseInt(d.css("padding-top"))+parseInt(d.css("padding-bottom"))+parseInt(d.css("border-top-width"))+parseInt(d.css("border-bottom-width")),m=this.options.hideDisabled?":not(.disabled)":"",l=b(window),g=p+parseInt(d.css("margin-top"))+parseInt(d.css("margin-bottom"))+2,o,t,r,i=function(){t=q.$newElement.offset().top-l.scrollTop();r=l.height()-t-s};i();if(this.options.size=="auto"){var e=function(){var u;i();o=r-g;q.$newElement.toggleClass("dropup",(t>r)&&(o-g)<d.height()&&q.options.dropupAuto);if(q.$newElement.hasClass("dropup")){o=t-g}if((d.find("li").length+d.find("dt").length)>3){u=f*3+g-2}else{u=0}d.css({"max-height":o+"px",overflow:"hidden","min-height":u+"px"});h.css({"max-height":(o-p)+"px","overflow-y":"auto","min-height":(u-p)+"px"})};e();b(window).resize(e);b(window).scroll(e)}else{if(this.options.size&&this.options.size!="auto"&&d.find("li"+m).length>this.options.size){var k=d.find("li"+m+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index();var c=d.find("li").slice(0,k+1).find(".div-contain").length;o=f*this.options.size+c*j+p;this.$newElement.toggleClass("dropup",(t>r)&&o<d.height()&&this.options.dropupAuto);d.css({"max-height":o+"px",overflow:"hidden"});h.css({"max-height":(o-p)+"px","overflow-y":"auto"})}}},setWidth:function(){if(this.options.width=="auto"){this.$menu.css("min-width","0");var d=this.$newElement.clone().appendTo("body");var c=d.find("> .dropdown-menu").css("width");d.remove();this.$newElement.css("width",c)}else{if(this.options.width){this.$newElement.css("width",this.options.width)}}},selectPosition:function(){var h=this,d="<div />",e=b(d),g,f,c=function(i){e.addClass(i.attr("class")).toggleClass("dropup",i.hasClass("dropup"));g=i.offset();f=i.hasClass("dropup")?0:i[0].offsetHeight;e.css({top:g.top+f,left:g.left,width:i[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(i){c(b(this));e.appendTo(h.options.container);e.toggleClass("open",!b(this).hasClass("open"));e.append(h.$menu)});b(window).resize(function(){c(h.$newElement)});b(window).on("scroll",function(i){c(h.$newElement)});b("html").on("click",function(i){if(b(i.target).closest(h.$newElement).length<1){e.removeClass("open")}})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);if(this.options.container){this.$menu.hide()}},refresh:function(){this.reloadLi();this.render();this.setWidth();this.setStyle();this.checkDisabled()},setSelected:function(c,d){this.$menu.find("li").eq(c).toggleClass("selected",d)},setDisabled:function(c,d){if(d){this.$menu.find("li").eq(c).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1)}else{this.$menu.find("li").eq(c).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var c=this;if(this.isDisabled()){this.$button.addClass("disabled");this.$button.attr("tabindex","-1")}else{if(this.$button.hasClass("disabled")){this.$button.removeClass("disabled");this.$button.removeAttr("tabindex")}}this.$button.click(function(){return !c.isDisabled()})},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var c=this.$element.attr("tabindex");this.$button.attr("tabindex",c)}},clickListener:function(){var c=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(d){d.stopPropagation()});this.$newElement.on("click",function(){c.setSize()});this.$menu.on("click","li a",function(k){var f=b(this).parent().index(),j=b(this).parent(),i=c.$element.val();if(c.multiple){k.stopPropagation()}k.preventDefault();if(!c.isDisabled()&&!b(this).parent().hasClass("disabled")){var d=c.$element.find("option");var h=d.eq(f);if(!c.multiple){d.prop("selected",false);h.prop("selected",true)}else{var g=h.prop("selected");h.prop("selected",!g)}c.$button.focus();if(i!=c.$element.val()){c.$element.change()}}});this.$menu.on("click","li.disabled a, li dt, li .div-contain",function(d){d.preventDefault();d.stopPropagation();c.$button.focus()});this.$element.change(function(){c.render()})},val:function(c){if(c!=undefined){this.$element.val(c);this.$element.change();return this.$element}else{return this.$element.val()}},selectAll:function(){this.$element.find("option").prop("selected",true).attr("selected","selected");this.render()},deselectAll:function(){this.$element.find("option").prop("selected",false).removeAttr("selected");this.render()},keydown:function(o){var p,n,h,m,j,i,q,d,g,l;p=b(this);h=p.parent();l=h.data("this");if(l.options.container){h=l.$menu}n=b("[role=menu] li:not(.divider):visible a",h);if(!n.length){return}if(/(38|40)/.test(o.keyCode)){m=n.index(n.filter(":focus"));i=n.parent(":not(.disabled)").first().index();q=n.parent(":not(.disabled)").last().index();j=n.eq(m).parent().nextAll(":not(.disabled)").eq(0).index();d=n.eq(m).parent().prevAll(":not(.disabled)").eq(0).index();g=n.eq(j).parent().prevAll(":not(.disabled)").eq(0).index();if(o.keyCode==38){if(m!=g&&m>d){m=d}if(m<i){m=i}}if(o.keyCode==40){if(m!=g&&m<j){m=j}if(m>q){m=q}if(m==-1){m=0}}n.eq(m).focus()}else{var f={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};var c=[];n.each(function(){if(b(this).parent().is(":not(.disabled)")){if(b.trim(b(this).text().toLowerCase()).substring(0,1)==f[o.keyCode]){c.push(b(this).parent().index())}}});var k=b(document).data("keycount");k++;b(document).data("keycount",k);var r=b.trim(b(":focus").text().toLowerCase()).substring(0,1);if(r!=f[o.keyCode]){k=1;b(document).data("keycount",k)}else{if(k>=c.length){b(document).data("keycount",0)}}n.eq(c[k-1]).focus()}if(/(13|32)/.test(o.keyCode)){o.preventDefault();b(":focus").click();b(document).data("keycount",0)}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove();this.$element.remove()}};b.fn.selectpicker=function(e,f){var c=arguments;var g;var d=this.each(function(){if(b(this).is("select")){var m=b(this),l=m.data("selectpicker"),h=typeof e=="object"&&e;if(!l){m.data("selectpicker",(l=new a(this,h,f)))}else{if(h){for(var j in h){l.options[j]=h[j]}}}if(typeof e=="string"){var k=e;if(l[k] instanceof Function){[].shift.apply(c);g=l[k].apply(l,c)}else{g=l.options[k]}}}});if(g!=undefined){return g}else{return d}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",countSelectedText:"{0} of {1} selected",width:null,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true};b(document).data("keycount",0).on("keydown","[data-toggle=dropdown], [role=menu]",a.prototype.keydown)}(window.jQuery);