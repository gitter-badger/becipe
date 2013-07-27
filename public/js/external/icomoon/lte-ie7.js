/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'first\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-quill' : '&#xe000;',
			'icon-pen' : '&#xe001;',
			'icon-images' : '&#xe002;',
			'icon-image' : '&#xe003;',
			'icon-home' : '&#xe004;',
			'icon-home-2' : '&#xe005;',
			'icon-alarm' : '&#xe006;',
			'icon-bubbles' : '&#xe009;',
			'icon-redo' : '&#xe00a;',
			'icon-undo' : '&#xe00b;',
			'icon-forward' : '&#xe00c;',
			'icon-reply' : '&#xe00d;',
			'icon-bubbles-2' : '&#xe00e;',
			'icon-bubble' : '&#xe007;',
			'icon-bubble-2' : '&#xe008;',
			'icon-bubbles-3' : '&#xe00f;',
			'icon-bubbles-4' : '&#xe010;',
			'icon-spinner' : '&#xe011;',
			'icon-leaf' : '&#xe012;',
			'icon-cogs' : '&#xe013;',
			'icon-wink' : '&#xe014;',
			'icon-wink-2' : '&#xe015;',
			'icon-grin' : '&#xe016;',
			'icon-grin-2' : '&#xe017;',
			'icon-cool' : '&#xe018;',
			'icon-cool-2' : '&#xe019;',
			'icon-angry' : '&#xe01a;',
			'icon-angry-2' : '&#xe01b;',
			'icon-evil' : '&#xe01c;',
			'icon-evil-2' : '&#xe01d;',
			'icon-happy' : '&#xe01e;',
			'icon-happy-2' : '&#xe01f;',
			'icon-shocked' : '&#xe020;',
			'icon-shocked-2' : '&#xe021;',
			'icon-wondering' : '&#xe022;',
			'icon-sad' : '&#xe023;',
			'icon-sad-2' : '&#xe024;',
			'icon-wondering-2' : '&#xe025;',
			'icon-neutral' : '&#xe026;',
			'icon-tongue' : '&#xe027;',
			'icon-tongue-2' : '&#xe028;',
			'icon-neutral-2' : '&#xe029;',
			'icon-confused' : '&#xe02a;',
			'icon-smiley' : '&#xe02b;',
			'icon-smiley-2' : '&#xe02c;',
			'icon-confused-2' : '&#xe02d;',
			'icon-radio-checked' : '&#xe02e;',
			'icon-radio-unchecked' : '&#xe02f;',
			'icon-twitter' : '&#xe030;',
			'icon-facebook' : '&#xe031;',
			'icon-facebook-2' : '&#xe032;',
			'icon-twitter-2' : '&#xe033;',
			'icon-google-plus' : '&#xe034;',
			'icon-google-plus-2' : '&#xe035;',
			'icon-paypal' : '&#xe036;',
			'icon-tumblr' : '&#xe037;',
			'icon-linkedin' : '&#xe038;',
			'icon-ampersand' : '&#xe039;',
			'icon-star' : '&#xe03a;',
			'icon-feather' : '&#xe03b;',
			'icon-mobile' : '&#xe03c;',
			'icon-new' : '&#xe03d;',
			'icon-leaf-2' : '&#xe03e;',
			'icon-palette' : '&#xe03f;',
			'icon-link' : '&#xe040;',
			'icon-thumbs-down' : '&#xe041;',
			'icon-thumbs-up' : '&#xe042;',
			'icon-googleplus' : '&#xe043;',
			'icon-facebook-3' : '&#xe044;',
			'icon-twitter-3' : '&#xe045;',
			'icon-pinterest' : '&#xe046;',
			'icon-linkedin-2' : '&#xe047;',
			'icon-twitter-4' : '&#xe048;',
			'icon-facebook-4' : '&#xe049;',
			'icon-googleplus-2' : '&#xe04a;',
			'icon-pinterest-2' : '&#xe04b;',
			'icon-tumblr-2' : '&#xe04c;',
			'icon-linkedin-3' : '&#xe04d;',
			'icon-paypal-2' : '&#xe04e;',
			'icon-instagram' : '&#xe04f;',
			'icon-qq' : '&#xe050;',
			'icon-gift' : '&#xe051;',
			'icon-link-2' : '&#xe052;',
			'icon-check' : '&#xf046;',
			'icon-edit' : '&#xf044;',
			'icon-gift-2' : '&#xf06b;',
			'icon-leaf-3' : '&#xf06c;',
			'icon-cut' : '&#xf0c4;',
			'icon-user-md' : '&#xf0f0;',
			'icon-unlink' : '&#xf127;',
			'icon-gift-3' : '&#xe053;',
			'icon-coffee' : '&#xe054;',
			'icon-shit' : '&#xe055;',
			'icon-address-book' : '&#xe056;',
			'icon-feather-2' : '&#xe057;',
			'icon-store' : '&#xe058;',
			'icon-share' : '&#xf045;',
			'icon-graduation' : '&#xe059;',
			'icon-hourglass' : '&#xe05a;',
			'icon-bucket' : '&#xe05b;',
			'icon-directions' : '&#xe05c;',
			'icon-home-3' : '&#xe05d;',
			'icon-pencil' : '&#xe05e;',
			'icon-scissors' : '&#xe05f;',
			'icon-lab' : '&#xe060;',
			'icon-remove' : '&#xe061;',
			'icon-accessibility' : '&#xe062;',
			'icon-lab-2' : '&#xe063;',
			'icon-arrow-left' : '&#xe064;',
			'icon-arrow-up' : '&#xe065;',
			'icon-arrow-down' : '&#xe066;',
			'icon-arrow-right' : '&#xe067;',
			'icon-star-2' : '&#xe068;',
			'icon-heart' : '&#xe069;',
			'icon-user' : '&#xe06a;',
			'icon-search' : '&#xe06b;',
			'icon-photo' : '&#xe06c;',
			'icon-lab-3' : '&#xe06d;',
			'icon-study' : '&#xe06e;',
			'icon-food' : '&#xe06f;',
			'icon-clip' : '&#xe070;',
			'icon-trash' : '&#xe071;',
			'icon-settings' : '&#xe072;',
			'icon-t-shirt' : '&#xe073;',
			'icon-fire' : '&#xe074;',
			'icon-location' : '&#xe075;',
			'icon-bubble-3' : '&#xe076;',
			'icon-megaphone' : '&#xe077;',
			'icon-close' : '&#xe078;',
			'icon-star-3' : '&#xe079;',
			'icon-star-4' : '&#xe07a;',
			'icon-pavitra-s-tandon-chat-for-lovers' : '&#xe07b;',
			'icon-pavitra-s-tandon-only-goodness' : '&#xe07c;',
			'icon-designmodo-settings' : '&#xe07d;',
			'icon-designmodo-location' : '&#xe07e;',
			'icon-designmodo-like' : '&#xe07f;',
			'icon-ian-yates-porridge' : '&#xe080;',
			'icon-juan-gomez-alzaga-bird' : '&#xe081;',
			'icon-juan-gomez-alzaga-leaf' : '&#xe082;',
			'icon-juan-gomez-alzaga-paint-brush' : '&#xe083;',
			'icon-juan-gomez-alzaga-rocking-horse' : '&#xe084;',
			'icon-jack-rugile-anchor' : '&#xe085;',
			'icon-johana-barretto-kitty-stripy' : '&#xe086;',
			'icon-johana-barretto-kitty' : '&#xe087;',
			'icon-darren-reay-pen-nib' : '&#xe088;',
			'icon-joshua-barker-landscape' : '&#xe089;',
			'icon-joshua-barker-house' : '&#xe08a;',
			'icon-matt-hakes-spectacles' : '&#xe08b;',
			'icon-matt-hakes-moustache' : '&#xe08c;',
			'icon-ian-yates-creative-commons' : '&#xe08d;',
			'icon-dom-waters-knife' : '&#xe08e;',
			'icon-arno-hattingh-park' : '&#xe08f;',
			'icon-jj-moi-manga-poison' : '&#xe090;',
			'icon-wand' : '&#xe091;',
			'icon-camera' : '&#xe092;',
			'icon-film' : '&#xe093;',
			'icon-tag' : '&#xe094;',
			'icon-alarm-clock' : '&#xe096;',
			'icon-lab-4' : '&#xe097;',
			'icon-warning' : '&#xe098;',
			'icon-notice' : '&#xe095;',
			'icon-lamp' : '&#xe099;',
			'icon-list' : '&#xe09a;',
			'icon-bag' : '&#xe09b;',
			'icon-money-bag' : '&#xe09c;',
			'icon-archive' : '&#xe09d;',
			'icon-pig' : '&#xe09e;',
			'icon-clipboard' : '&#xe09f;',
			'icon-clipboard-2' : '&#xe0a0;',
			'icon-eyedropper' : '&#xe0a1;',
			'icon-navigation' : '&#xe0a2;',
			'icon-hourglass-2' : '&#xe0a3;',
			'icon-justice' : '&#xe0a4;',
			'icon-pin' : '&#xe0a5;',
			'icon-lamp-2' : '&#xe0a6;',
			'icon-umbrella' : '&#xe0a7;',
			'icon-medal' : '&#xe0a8;',
			'icon-trashcan' : '&#xe0a9;',
			'icon-graduate' : '&#xe0aa;',
			'icon-vote' : '&#xe0ab;',
			'icon-hand' : '&#xe0ac;',
			'icon-trashcan-2' : '&#xe0ad;',
			'icon-pictures' : '&#xe0ae;',
			'icon-link-3' : '&#xe0af;',
			'icon-baloon' : '&#xf405;',
			'icon-broom' : '&#xf40a;',
			'icon-danger' : '&#xf415;',
			'icon-safetypin' : '&#xf417;',
			'icon-fishbone' : '&#xf42b;',
			'icon-birdhouse' : '&#xf390;',
			'icon-certificate' : '&#xf058;',
			'icon-certificate2' : '&#xf059;',
			'icon-favorite2' : '&#xf13b;',
			'icon-favorite' : '&#xf13a;',
			'icon-thumbdown' : '&#xf139;',
			'icon-thumbup' : '&#xf138;',
			'icon-macro' : '&#xf1c6;',
			'icon-spray' : '&#xf1c7;',
			'icon-palette-2' : '&#xf1b9;',
			'icon-eyedropper-2' : '&#xf1ad;',
			'icon-inkpen' : '&#xf1ac;',
			'icon-bucket-2' : '&#xf1b5;',
			'icon-brush' : '&#xf1b8;',
			'icon-book' : '&#xf1ba;',
			'icon-women' : '&#xf24d;',
			'icon-men' : '&#xf24c;',
			'icon-paw' : '&#xf29d;',
			'icon-orange' : '&#xf29e;',
			'icon-crown' : '&#xf28f;',
			'icon-paperclip3' : '&#xf286;',
			'icon-paperclip' : '&#xf284;',
			'icon-student' : '&#xf288;',
			'icon-piggybank' : '&#xf257;',
			'icon-gift-4' : '&#xf260;',
			'icon-sale' : '&#xf277;',
			'icon-flower' : '&#xf2a5;',
			'icon-candle' : '&#xf29a;',
			'icon-flashlight' : '&#xf299;',
			'icon-jar' : '&#xf2b6;',
			'icon-eye2' : '&#xf2b5;',
			'icon-bed' : '&#xf2b9;',
			'icon-starempty' : '&#xf2de;',
			'icon-starhalf' : '&#xf2df;',
			'icon-starfull' : '&#xf2e0;',
			'icon-medal-2' : '&#xf2e5;',
			'icon-downright' : '&#xf300;',
			'icon-ghost' : '&#xf2da;',
			'icon-bow' : '&#xf2ee;',
			'icon-zoomin' : '&#xf320;',
			'icon-zoomout' : '&#xf321;',
			'icon-trash-2' : '&#xf0ce;',
			'icon-cut-2' : '&#xf0ca;',
			'icon-cms' : '&#xf036;',
			'icon-ruby' : '&#xf067;',
			'icon-error2' : '&#xf05a;',
			'icon-wizard' : '&#xf03c;',
			'icon-value' : '&#xf018;',
			'icon-home-4' : '&#x21b8;',
			'icon-egg' : '&#xf407;',
			'icon-xbox' : '&#xf353;',
			'icon-rim' : '&#xf36f;',
			'icon-bottle' : '&#xf361;',
			'icon-fedora' : '&#xf3f1;',
			'icon-greenhosting' : '&#xf039;',
			'icon-perl2' : '&#xf0b7;',
			'icon-fantastico' : '&#xf0ae;',
			'icon-menu' : '&#xe0b0;',
			'icon-android' : '&#xf12a;',
			'icon-moneybag' : '&#xf271;',
			'icon-flaskfull' : '&#xf27e;',
			'icon-flask' : '&#xf27d;',
			'icon-rubberstamp' : '&#xf274;',
			'icon-grass' : '&#xe0b1;',
			'icon-user-2' : '&#xe0b2;',
			'icon-user-3' : '&#xe0b3;',
			'icon-user-4' : '&#xe0b4;',
			'icon-gift-5' : '&#xe0b5;',
			'icon-tree' : '&#xe0b6;',
			'icon-leaf-4' : '&#xe0b7;',
			'icon-flower-2' : '&#xe0b8;',
			'icon-arrow-bottom-right' : '&#xe0b9;',
			'icon-arrow-top-left' : '&#xe0ba;',
			'icon-arrow-top-right' : '&#xe0bb;',
			'icon-arrow-right-2' : '&#xe0bc;',
			'icon-arrow-left-2' : '&#xe0bd;',
			'icon-arrow-down-2' : '&#xe0be;',
			'icon-arrow-up-2' : '&#xe0bf;',
			'icon-arrow-bottom-left' : '&#xe0c0;',
			'icon-bird' : '&#xe0c1;',
			'icon-chat' : '&#xe0c2;',
			'icon-eye' : '&#xe0c3;',
			'icon-attachment' : '&#xe0c4;',
			'icon-lollipop' : '&#xe0c5;',
			'icon-lab-5' : '&#xe0c6;',
			'icon-puzzle' : '&#xe0c7;',
			'icon-heart-2' : '&#xe0c8;',
			'icon-users' : '&#xe0c9;',
			'icon-user-5' : '&#xe0ca;',
			'icon-menu-2' : '&#xe0cb;',
			'icon-alarm-2' : '&#xe0cc;',
			'icon-file' : '&#xe0cd;',
			'icon-heart-3' : '&#xe0ce;',
			'icon-comment' : '&#xe0cf;',
			'icon-grid' : '&#xe0d0;',
			'icon-clock' : '&#xe0d1;',
			'icon-link-4' : '&#xe0d2;',
			'icon-file-2' : '&#xe0d3;',
			'icon-star-5' : '&#xe0d4;',
			'icon-eye-2' : '&#xe0d5;',
			'icon-twitter-5' : '&#xe0d6;',
			'icon-briefcase' : '&#xe0d7;',
			'icon-chat-2' : '&#xe0d8;',
			'icon-gear' : '&#xe0d9;',
			'icon-compass' : '&#xe0da;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};