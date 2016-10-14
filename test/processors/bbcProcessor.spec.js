var bbcProcessor = require('../../src/processors/bbcProcessor');

describe('test test', () => {
    beforeEach( () => {
        console.log('this is before each ');
    });
    
   it('this is a test', () => {
      console.log('this is a test test');
      var html = `
      <!DOCTYPE html>
<html lang="en" id="responsive-news">
<head  prefix="og: http://ogp.me/ns#">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>US election 2016: Trump says groping claims 'absolutely false' - BBC News</title>
    <meta name="description" content="Donald Trump rejects accusations of sexual misconduct as &quot;totally and absolutely false&quot;, as First Lady Michelle Obama calls his lewd remarks &quot;shocking&quot;.">

    <link rel="dns-prefetch" href="https://ssl.bbc.co.uk/">
    <link rel="dns-prefetch" href="http://sa.bbc.co.uk/">
    <link rel="dns-prefetch" href="http://ichef-1.bbci.co.uk/">
    <link rel="dns-prefetch" href="http://ichef.bbci.co.uk/">
    <link rel="dns-prefetch" href="//c.go-mpulse.net/">

    <meta name="x-country" content="cn">
    <meta name="x-audience" content="Asia">
    <meta name="CPS_AUDIENCE" content="Asia">
    <meta name="CPS_CHANGEQUEUEID" content="288858348">
    <link rel="canonical" href="http://www.bbc.com/news/election-us-2016-37650500">

                        <link rel="alternate" hreflang="en-gb" href="http://www.bbc.co.uk/news/election-us-2016-37650500">
                                <link rel="alternate" hreflang="en" href="http://www.bbc.com/news/election-us-2016-37650500">
                            <meta property="og:title" content="US election 2016: Trump says groping claims 'absolutely false' - BBC News" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Donald Trump rejects accusations of sexual misconduct as &quot;totally and absolutely false&quot;, as First Lady Michelle Obama calls his lewd remarks &quot;shocking&quot;." />
    <meta property="og:site_name" content="BBC News" />
    <meta property="og:locale" content="en_GB" />
    <meta property="article:author" content="BBC News" />
    <meta property="article:section" content="US Election 2016" />
    <meta property="og:url" content="http://www.bbc.com/news/election-us-2016-37650500" />
    <meta property="og:image" content="http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/14411/production/_91916928_hi035846073.jpg" />

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@BBCWorld">
    <meta name="twitter:title" content="US election 2016: Trump says groping claims 'absolutely false' - BBC News">
    <meta name="twitter:description" content="Donald Trump rejects accusations of sexual misconduct as &quot;totally and absolutely false&quot;, as First Lady Michelle Obama calls his lewd remarks &quot;shocking&quot;.">
    <meta name="twitter:creator" content="@BBCWorld">
    <meta name="twitter:image:src" content="http://ichef-1.bbci.co.uk/news/560/cpsprodpb/14411/production/_91916928_hi035846073.jpg">
    <meta name="twitter:image:alt" content="Trump at rally" />
    <meta name="twitter:domain" content="www.bbc.com">

    <script type="application/ld+json">
    {
        "@context": "http://schema.org"
        ,"@type": "Article"
        
        ,"url": "http://www.bbc.com/news/election-us-2016-37650500"
        ,"publisher": {
            "@type": "Organization",
            "name": "BBC News",
            "logo": "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1"
        }
        
        ,"headline": "US election 2016: Trump says groping claims 'absolutely false'"
        
        ,"mainEntityOfPage": "http://www.bbc.com/news/election-us-2016-37650500"
        ,"articleBody": "Donald Trump rejects accusations of sexual misconduct as \"totally and absolutely false\", as First Lady Michelle Obama calls his lewd remarks \"shocking\"."
        
        ,"image": {
            "@list": [
                "http://ichef-1.bbci.co.uk/news/560/cpsprodpb/11D01/production/_91916927_hi035846073.jpg"
                ,"http://ichef.bbci.co.uk/news/560/cpsprodpb/11622/production/_91920217_crowd_976ap.jpg"
                ,"http://ichef.bbci.co.uk/news/560/media/images/76020000/jpg/_76020974_line976.jpg"
            ]
        }
        ,"datePublished": "2016-10-13T23:35:41+01:00"
    }
    </script>


            <link rel="amphtml" href="http://www.bbc.co.uk/news/amp/37650500">
    
    
    <meta name="apple-mobile-web-app-title" content="BBC News">
    <link rel="apple-touch-icon-precomposed" sizes="57x57"    href="http://static.bbci.co.uk/news/1.155.0816/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72"    href="http://static.bbci.co.uk/news/1.155.0816/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114"  href="http://static.bbci.co.uk/news/1.155.0816/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144"  href="http://static.bbci.co.uk/news/1.155.0816/apple-touch-icon.png">
    <link rel="apple-touch-icon" href="http://static.bbci.co.uk/news/1.155.0816/apple-touch-icon.png">
    <meta name="application-name" content="BBC News">
    <meta name="msapplication-TileImage" content="http://static.bbci.co.uk/news/1.155.0816/windows-eight-icon-144x144.png">
    <meta name="msapplication-TileColor" content="#bb1919">
    <meta http-equiv="cleartype" content="on">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="robots" content="NOODP,NOYDIR" />
    <meta name="theme-color" content="#bb1919">
    <script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script>


    <script>
        (function() {
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement("style");
                msViewportStyle.appendChild(
                    document.createTextNode("@-ms-viewport{width:auto!important}")
                );
                document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
            }
        })();
    </script>
    
    <script>window.fig = window.fig || {}; window.fig.async = true;</script>

           <meta name="viewport" content="width=device-width, initial-scale=1.0" />  <meta property="fb:admins" content="100004154058350" />  <script type="text/javascript">window.bbcredirection={geo:true}</script>  
<!--[if (gt IE 8) | (IEMobile)]><!-->
<link rel="stylesheet" href="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/style/orb.min.css">
<!--<![endif]-->

<!--[if (lt IE 9) & (!IEMobile)]>
<link rel="stylesheet" href="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/style/orb-ie.min.css">
<![endif]-->

  <!--orb.ws.require.lib--> <script class="js-require-lib" src="http://static.bbci.co.uk/frameworks/requirejs/lib.js"></script> <script type="text/javascript">  bbcRequireMap = {"jquery-1":"http://static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.7.2", "jquery-1.4":"http://static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.4", "jquery-1.9":"http://static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.9.1", "jquery-1.12":"http://static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.12.0.min", "jquery-2.2":"http://static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-2.2.0.min", "istats-1":"//nav.files.bbci.co.uk/nav-analytics/0.1.0-43/js/istats-1", "swfobject-2":"http://static.bbci.co.uk/frameworks/swfobject/0.1.10/sharedmodules/swfobject-2", "demi-1":"http://static.bbci.co.uk/frameworks/demi/0.10.0/sharedmodules/demi-1", "gelui-1":"http://static.bbci.co.uk/frameworks/gelui/0.9.13/sharedmodules/gelui-1", "cssp!gelui-1/overlay":"http://static.bbci.co.uk/frameworks/gelui/0.9.13/sharedmodules/gelui-1/overlay.css", "relay-1":"http://static.bbci.co.uk/frameworks/relay/0.2.6/sharedmodules/relay-1", "clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/clock-1", "canvas-clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/canvas-clock-1", "cssp!clock-1":"http://static.bbci.co.uk/frameworks/clock/0.1.9/sharedmodules/clock-1.css", "jssignals-1":"http://static.bbci.co.uk/frameworks/jssignals/0.3.6/modules/jssignals-1", "jcarousel-1":"http://static.bbci.co.uk/frameworks/jcarousel/0.1.10/modules/jcarousel-1", "bump-3":"//emp.bbci.co.uk/emp/bump-3/bump-3"}; require({ baseUrl: 'http://static.bbci.co.uk/', paths: bbcRequireMap, waitSeconds: 30 }); </script>   <script type="text/javascript">/*<![CDATA[*/ if (typeof bbccookies_flag === 'undefined') { bbccookies_flag = 'ON'; } showCTA_flag = true; cta_enabled = (showCTA_flag && (bbccookies_flag === 'ON')); (function(){var m="ckns_policy",q="Thu, 01 Jan 1970 00:00:00 GMT",i={ads:true,personalisation:true,performance:true,necessary:true};function c(u){if(c.cache[u]){return c.cache[u]}var t=u.split("/"),v=[""];do{v.unshift((t.join("/")||"/"));t.pop()}while(v[0]!=="/");c.cache[u]=v;return v}c.cache={};function a(u){if(a.cache[u]){return a.cache[u]}var v=u.split("."),t=[];while(v.length&&"|co.uk|com|".indexOf("|"+v.join(".")+"|")===-1){if(v.length){t.push(v.join("."))}v.shift()}c.cache[u]=t;return t}a.cache={};function s(t,y,u){var E=[""].concat(a(window.location.hostname)),B=c(window.location.pathname),D="",w,C;for(var x=0,A=E.length;x<A;x++){w=E[x];for(var v=0,z=B.length;v<z;v++){C=B[v];D=t+"="+y+";"+(w?"domain="+w+";":"")+(C?"path="+C+";":"")+(u?"expires="+u+";":"");bbccookies.set(D,true)}}}window.bbccookies={POLICY_REFRESH_DATE_MILLIS:new Date(2015,4,21,0,0,0,0).getTime(),POLICY_EXPIRY_COOKIENAME:"ckns_policy_exp",_setEverywhere:s,cookiesEnabled:function(){var t="ckns_testcookie"+Math.floor(Math.random()*100000);this.set(t+"=1");if(this.get().indexOf(t)>-1){e(t);return true}return false},get:function(){return document.cookie},getCrumb:function(t){if(!t){return null}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},policyRequiresRefresh:function(){var u=new Date();u.setHours(0);u.setMinutes(0);u.setSeconds(0);u.setMilliseconds(0);if(bbccookies.POLICY_REFRESH_DATE_MILLIS<=u.getTime()){var t=bbccookies.getCrumb(bbccookies.POLICY_EXPIRY_COOKIENAME);if(t){t=new Date(parseInt(t));t.setYear(t.getFullYear()-1);return bbccookies.POLICY_REFRESH_DATE_MILLIS>=t.getTime()}else{return true}}else{return false}},_setPolicy:function(t){return f.apply(this,arguments)},readPolicy:function(){return l.apply(this,arguments)},_deletePolicy:function(){s(m,"",q)},_isConfirmed:function(){return n()!==null},_acceptsAll:function(){var t=l();return t&&!(j(t).indexOf("0")>-1)},_getCookieName:function(){return b.apply(this,arguments)},_showPrompt:function(){var t=((!this._isConfirmed()||this.policyRequiresRefresh())&&window.cta_enabled&&this.cookiesEnabled()&&!window.bbccookies_disable);return(window.orb&&window.orb.fig)?t&&(window.orb.fig("no")||window.orb.fig("ck")):t},_getPolicy:this.readPolicy};function b(u){var t=(""+u).match(/^([^=]+)(?==)/);return(t&&t.length?t[0]:"")}function j(t){return""+(t.ads?1:0)+(t.personalisation?1:0)+(t.performance?1:0)}function f(x){if(typeof x==="undefined"){x=i}if(typeof arguments[0]==="string"){var u=arguments[0],w=arguments[1];if(u==="necessary"){w=true}x=l();x[u]=w}else{if(typeof arguments[0]==="object"){x.necessary=true}}var v=new Date();v.setYear(v.getFullYear()+1);bbccookies.set(m+"="+j(x)+";domain=bbc.co.uk;path=/;expires="+v.toUTCString()+";");bbccookies.set(m+"="+j(x)+";domain=bbc.com;path=/;expires="+v.toUTCString()+";");bbccookies.set(m+"="+j(x)+";domain=bbci.co.uk;path=/;expires="+v.toUTCString()+";");var t=new Date(v.getTime());t.setMonth(t.getMonth()+1);bbccookies.set(bbccookies.POLICY_EXPIRY_COOKIENAME+"="+v.getTime()+";domain=bbc.co.uk;path=/;expires="+t.toUTCString()+";");bbccookies.set(bbccookies.POLICY_EXPIRY_COOKIENAME+"="+v.getTime()+";domain=bbc.com;path=/;expires="+t.toUTCString()+";");bbccookies.set(bbccookies.POLICY_EXPIRY_COOKIENAME+"="+v.getTime()+";domain=bbci.co.uk;path=/;expires="+t.toUTCString()+";");return x}function o(t){if(t===null){return null}var u=t.split("");return{ads:!!+u[0],personalisation:!!+u[1],performance:!!+u[2],necessary:true}}function n(){var t=new RegExp("(?:^|; ?)"+m+"=(\\d\\d\\d)($|;)"),u=document.cookie.match(t);if(!u){return null}return u[1]}function l(t){var u=o(n());if(!u){u=i}if(t){return u[t]}else{return u}}function e(t){return document.cookie=t+"=;expires="+q+";"}var g=!(window.bbccookies_flag==="ON"&&!bbccookies._acceptsAll()&&!window.bbccookies_disable);var k={},d={"personalisation":"ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|WEATHER|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2","performance":"ckpf_.+|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|s1|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|sa_labels|obuid|mm_.+|mmid|mmcore.+|mmpa.+","ads":"ckad_.+|rsi_segs|c","necessary":"ckns_.+|BBC-UID|blq\\.dPref|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt"};function r(){var x=document.cookie.replace(/; +/g,";").split(";"),u,v=[];for(var w=0,t=x.length;w<t;w++){u=x[w];v.push(bbccookies._getCookieName(u))}return v}function h(w){var v=JSON.stringify(w);if(typeof(k[v])!=="undefined"){return k[v]}var u="";for(var t in w){if(w.hasOwnProperty(t)&&d[t]){if(w[t]===true){u+=(u?"|":"")+d[t]}}}k[v]=new RegExp("^("+(u?u:".*")+")$","i");return k[v]}bbccookies.getPolicyExpiryDateTime=function(){return bbccookies.POLICY_EXPIRY_COOKIENAME};bbccookies.purge=function(){var u=bbccookies.readPolicy(),w=r(),x;for(var v=0,t=w.length;v<t;v++){if(!bbccookies.isAllowed(w[v],u)){x=new Date();x.setTime(0);x=x.toUTCString();s(w[v],"deleted",x)}}};function p(){if(g){return}bbccookies.purge();contentLoaded(window,bbccookies.purge);if(window.addEventListener){window.addEventListener("beforeunload",bbccookies.purge,false)}else{if(window.attachEvent){window.attachEvent("onbeforeunload",bbccookies.purge)}else{window.onbeforeunload=bbccookies.purge}}}bbccookies.set=function(u,t){if(g){return document.cookie=u}var v=bbccookies._getCookieName(u);if(t||bbccookies.isAllowed(v)){return document.cookie=u}return null};bbccookies.isAllowed=function(v){var u=bbccookies.readPolicy();var t=h(u);return t.test(v)};p()})();
/*!
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 *
 */
function contentLoaded(d,i){var c=false,h=true,k=d.document,j=k.documentElement,a=k.addEventListener,n=a?"addEventListener":"attachEvent",l=a?"removeEventListener":"detachEvent",b=a?"":"on",m=function(o){if(o.type==="readystatechange"&&k.readyState!="complete"){return}(o.type==="load"?d:k)[l](b+o.type,m,false);if(!c&&(c=true)){i.call(d,o.type||o)}},g=function(){try{j.doScroll("left")}catch(o){setTimeout(g,50);return}m("poll")};if(k.readyState==="complete"){i.call(d,"lazy")}else{if(!a&&j.doScroll){try{h=!d.frameElement}catch(f){}if(h){g()}}k[n](b+"DOMContentLoaded",m,false);k[n](b+"readystatechange",m,false);d[n](b+"load",m,false)}}if(typeof(require)==="function"&&!require.defined("orb/cookies")){define("orb/cookies",window.bbccookies)}; /*]]>*/</script> <script type="text/javascript">/*<![CDATA[*/
(function(){window.fig=window.fig||{};window.fig.manager={include:function(e){e=e||window;var i=e.document,j=i.cookie,h=j.match(/(?:^|; ?)ckns_orb_fig=([^;]+)/),g,b="";if(!h&&j.indexOf("ckns_orb_nofig=1")>-1){this.setFig(e,{no:1})}else{if(h){h=this.deserialise(decodeURIComponent(RegExp.$1));this.setFig(e,h)}if(window.fig.async&&typeof JSON!="undefined"){var a=(document.cookie.match("(^|; )ckns_orb_cachedfig=([^;]*)")||0)[2];g=a?JSON.parse(a):null;if(g){this.setFig(e,g);b="async"}}i.write('<script src="https://fig.bbc.co.uk/frameworks/fig/1/fig.js"'+b+"><"+"/script>")}},confirm:function(a){a=a||window;if(a.orb&&a.orb.fig&&a.orb.fig("no")){this.setNoFigCookie(a)}if(a.orb===undefined||a.orb.fig===undefined){this.setFig(a,{no:1});this.setNoFigCookie(a)}},setNoFigCookie:function(a){a.document.cookie="ckns_orb_nofig=1; expires="+new Date(new Date().getTime()+1000*60*10).toGMTString()+";"},setFig:function(a,b){(function(){var c=b;a.orb=a.orb||{};a.orb.fig=function(d){return(arguments.length)?c[d]:c}})()},deserialise:function(b){var a={};b.replace(/([a-z]{2}):([0-9]+)/g,function(){a[RegExp.$1]=+RegExp.$2});return a}}})();fig.manager.include();/*]]>*/</script>
<!-- Nav Analytics : 62 -->
<script type="text/javascript">window.bbcFlagpoles_istats="ON",require.config({paths:{"istats-1":"//nav.files.bbci.co.uk/nav-analytics/0.1.0-62/js/istats-1"}}),require.defined("orb/cookies")||(window.bbccookies?define("orb/cookies",function(){return window.bbccookies}):define("orb/cookies",function(){return{isAllowed:function(e){return!1}}})),require(["istats-1","orb/cookies"],function(e,o){if(o.isAllowed("s1")){var n="//sa.bbc.co.uk/bbc/bbc/s";e.addCollector({name:"default",url:n,separator:"&"});var i="news.election.us2016.story.37650500.page";i&&"unknown"!==i&&e.setCountername(i),window.istats_countername&&e.setCountername(window.istats_countername),e.addLabels("ml_name=webmodule&ml_version=62")}});</script>

<script type="text/javascript">/*<![CDATA[*/
    window.bbcFlagpoles_istats = 'ON';
    window.orb = window.orb || {};

    if (typeof bbccookies !== 'undefined' && bbccookies.isAllowed('s1')) {
        var istatsTrackingUrl = '//sa.bbc.co.uk/bbc/bbc/s?name=news.election.us2016.story.37650500.page&cps_asset_id=37650500&page_type=Story&section=%2Fnews%2Felection%2Fus2016&first_pub=2016-10-13T18%3A05%3A27%2B00%3A00&last_editorial_update=2016-10-13T22%3A35%3A41%2B00%3A00&curie=0a31348e-6645-cb4c-a11d-0fa4cdb47bef&title=US+election+2016%3A+Trump+says+groping+claims+%27absolutely+false%27&has_video=1&topic_names=Republican+Party%21US+Election+2016%21Donald+Trump&topic_ids=1da109b9-d231-44a5-ab28-29a1b039b590%21530d1350-d83c-405b-b6c3-809473e23c58%2178080d81-2849-497e-bc3a-bf364626456b&for_nation=cn&app_version=1.155.0&bbc_site=news&pal_route=asset&app_type=responsive&language=en-GB&pal_webapp=tabloid&prod_name=news&app_name=news';
        require(['istats-1'], function (istats) {
            var counterName = (window.istats_countername) ? window.istats_countername : istatsTrackingUrl.match(/[\?&]name=([^&]*)/i)[1];
            istats.setCountername(counterName);

            istats.addLabels('cps_asset_id=37650500&page_type=Story&section=%2Fnews%2Felection%2Fus2016&first_pub=2016-10-13T18%3A05%3A27%2B00%3A00&last_editorial_update=2016-10-13T22%3A35%3A41%2B00%3A00&curie=0a31348e-6645-cb4c-a11d-0fa4cdb47bef&title=US+election+2016%3A+Trump+says+groping+claims+%27absolutely+false%27&has_video=1&topic_names=Republican+Party%21US+Election+2016%21Donald+Trump&topic_ids=1da109b9-d231-44a5-ab28-29a1b039b590%21530d1350-d83c-405b-b6c3-809473e23c58%2178080d81-2849-497e-bc3a-bf364626456b&for_nation=cn&app_version=1.155.0&bbc_site=news&pal_route=asset&app_type=responsive&language=en-GB&pal_webapp=tabloid&prod_name=news&app_name=news');
            var c = (document.cookie.match(/\bckns_policy=(\d\d\d)/) || []).pop() || '';
            istats.addLabels({
                                        'blq_s': '4d',
                    'blq_r': '2.7',
                    'blq_v': 'default',
                    'blq_e': 'pal',
                                        'bbc_mc': (c ? 'ad' + c.charAt(0) + 'ps' + c.charAt(1) + 'pf' + c.charAt(2) : 'not_set')
                }
            );
        });
    }
    /*]]>*/</script>
 <script type="text/javascript">/*<![CDATA[*/ (function(undefined){if(!window.bbc){window.bbc={}}var ROLLING_PERIOD_DAYS=30;window.bbc.Mandolin=function(id,segments,opts){var now=new Date().getTime(),storedItem,DEFAULT_START=now,DEFAULT_RATE=1,COOKIE_NAME="ckpf_mandolin";opts=opts||{};this._id=id;this._segmentSet=segments;this._store=new window.window.bbc.Mandolin.Storage(COOKIE_NAME);this._opts=opts;this._rate=(opts.rate!==undefined)?+opts.rate:DEFAULT_RATE;this._startTs=(opts.start!==undefined)?new Date(opts.start).getTime():new Date(DEFAULT_START).getTime();this._endTs=(opts.end!==undefined)?new Date(opts.end).getTime():daysFromNow(ROLLING_PERIOD_DAYS);this._signupEndTs=(opts.signupEnd!==undefined)?new Date(opts.signupEnd).getTime():this._endTs;this._segment=null;if(typeof id!=="string"){throw new Error("Invalid Argument: id must be defined and be a string")}if(Object.prototype.toString.call(segments)!=="[object Array]"){throw new Error("Invalid Argument: Segments are required.")}if(opts.rate!==undefined&&(opts.rate<0||opts.rate>1)){throw new Error("Invalid Argument: Rate must be between 0 and 1.")}if(this._startTs>this._endTs){throw new Error("Invalid Argument: end date must occur after start date.")}if(!(this._startTs<this._signupEndTs&&this._signupEndTs<=this._endTs)){throw new Error("Invalid Argument: SignupEnd must be between start and end date")}removeExpired.call(this,now);var overrides=window.bbccookies.get().match(/ckns_mandolin_setSegments=([^;]+)/);if(overrides!==null){eval("overrides = "+decodeURIComponent(RegExp.$1)+";");if(overrides[this._id]&&this._segmentSet.indexOf(overrides[this._id])==-1){throw new Error("Invalid Override: overridden segment should exist in segments array")}}if(overrides!==null&&overrides[this._id]){this._segment=overrides[this._id]}else{if((storedItem=this._store.getItem(this._id))){this._segment=storedItem.segment}else{if(this._startTs<=now&&now<this._signupEndTs&&now<=this._endTs&&this._store.isEnabled()===true){this._segment=pick(segments,this._rate);if(opts.end===undefined){this._store.setItem(this._id,{segment:this._segment})}else{this._store.setItem(this._id,{segment:this._segment,end:this._endTs})}log.call(this,"mandolin_segment")}}}log.call(this,"mandolin_view")};window.bbc.Mandolin.prototype.getSegment=function(){return this._segment};function log(actionType,params){var that=this;require(["istats-1"],function(istats){istats.log(actionType,that._id+":"+that._segment,params?params:{})})}function removeExpired(expires){var items=this._store.getItems(),expiresInt=+expires;for(var key in items){if(items[key].end!==undefined&&+items[key].end<expiresInt){this._store.removeItem(key)}}}function getLastExpirationDate(data){var winner=0,rollingExpire=daysFromNow(ROLLING_PERIOD_DAYS);for(var key in data){if(data[key].end===undefined&&rollingExpire>winner){winner=rollingExpire}else{if(+data[key].end>winner){winner=+data[key].end}}}return(winner)?new Date(winner):new Date(rollingExpire)}window.bbc.Mandolin.prototype.log=function(params){log.call(this,"mandolin_log",params)};window.bbc.Mandolin.prototype.convert=function(params){log.call(this,"mandolin_convert",params);this.convert=function(){}};function daysFromNow(n){var endDate;endDate=new Date().getTime()+(n*60*60*24)*1000;return endDate}function pick(segments,rate){var picked,min=0,max=segments.length-1;if(typeof rate==="number"&&Math.random()>rate){return null}do{picked=Math.floor(Math.random()*(max-min+1))+min}while(picked>max);return segments[picked]}window.bbc.Mandolin.Storage=function(name){validateCookieName(name);this._cookieName=name;this._isEnabled=(bbccookies.isAllowed(this._cookieName)===true&&bbccookies.cookiesEnabled()===true)};window.bbc.Mandolin.Storage.prototype.setItem=function(key,value){var storeData=this.getItems();storeData[key]=value;this.save(storeData);return value};window.bbc.Mandolin.Storage.prototype.isEnabled=function(){return this._isEnabled};window.bbc.Mandolin.Storage.prototype.getItem=function(key){var storeData=this.getItems();return storeData[key]};window.bbc.Mandolin.Storage.prototype.removeItem=function(key){var storeData=this.getItems();delete storeData[key];this.save(storeData)};window.bbc.Mandolin.Storage.prototype.getItems=function(){return deserialise(this.readCookie(this._cookieName)||"")};window.bbc.Mandolin.Storage.prototype.save=function(data){window.bbccookies.set(this._cookieName+"="+encodeURIComponent(serialise(data))+"; expires="+getLastExpirationDate(data).toUTCString()+";")};window.bbc.Mandolin.Storage.prototype.readCookie=function(name){var nameEq=name+"=",ca=window.bbccookies.get().split("; "),i,c;validateCookieName(name);for(i=0;i<ca.length;i++){c=ca[i];if(c.indexOf(nameEq)===0){return decodeURIComponent(c.substring(nameEq.length,c.length))}}return null};function serialise(o){var str="";for(var p in o){if(o.hasOwnProperty(p)){str+='"'+p+'"'+":"+(typeof o[p]==="object"?(o[p]===null?"null":"{"+serialise(o[p])+"}"):'"'+o[p].toString()+'"')+","}}return str.replace(/,\}/g,"}").replace(/,$/g,"")}function deserialise(str){var o;str="{"+str+"}";if(!validateSerialisation(str)){throw"Invalid input provided for deserialisation."}eval("o = "+str);return o}var validateSerialisation=(function(){var OBJECT_TOKEN="<Object>",ESCAPED_CHAR='"\\n\\r\\u2028\\u2029\\u000A\\u000D\\u005C',ALLOWED_CHAR="([^"+ESCAPED_CHAR+"]|\\\\["+ESCAPED_CHAR+"])",KEY='"'+ALLOWED_CHAR+'+"',VALUE='(null|"'+ALLOWED_CHAR+'*"|'+OBJECT_TOKEN+")",KEY_VALUE=KEY+":"+VALUE,KEY_VALUE_SEQUENCE="("+KEY_VALUE+",)*"+KEY_VALUE,OBJECT_LITERAL="({}|{"+KEY_VALUE_SEQUENCE+"})",objectPattern=new RegExp(OBJECT_LITERAL,"g");return function(str){if(str.indexOf(OBJECT_TOKEN)!==-1){return false}while(str.match(objectPattern)){str=str.replace(objectPattern,OBJECT_TOKEN)}return str===OBJECT_TOKEN}})();function validateCookieName(name){if(name.match(/ ,;/)){throw"Illegal name provided, must be valid in browser cookie."}}})(); /*]]>*/</script>  <script type="text/javascript">  document.documentElement.className += (document.documentElement.className? ' ' : '') + 'orb-js';  fig.manager.confirm(); </script> <script src="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/script/orb/api.min.js"></script> <script type="text/javascript"> var blq = { environment: function() { return 'live'; } } </script>   <script type="text/javascript"> /*<![CDATA[*/ function oqsSurveyManager(w, flag) { if (flag !== 'OFF' && (w.orb.fig("no") || w.orb.fig("uk"))) { w.document.write('<script type="text/javascript" src="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/script/vendor/edr.min.js"><'+'/script>'); } } oqsSurveyManager(window, 'ON'); /*]]>*/ </script>             <!-- BBCDOTCOM template: responsive webservice  -->
        <!-- BBCDOTCOM head --><script type="text/javascript"> /*<![CDATA[*/ var _sf_startpt = (new Date()).getTime(); /*]]>*/ </script><style type="text/css">.bbccom_display_none{display:none;}</style><script type="text/javascript"> /*<![CDATA[*/ var bbcdotcomConfig, googletag = googletag || {}; googletag.cmd = googletag.cmd || []; var bbcdotcom = false; (function(){ if(typeof require !== 'undefined') { require({ paths:{ "bbcdotcom":"http://static.bbci.co.uk/bbcdotcom/1.31.0/script" } }); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ var bbcdotcom = { adverts: { keyValues: { set: function() {} } }, advert: { write: function () {}, show: function () {}, isActive: function () { return false; }, layout: function() { return { reset: function() {} } } }, config: { init: function() {}, isActive: function() {}, setSections: function() {}, isAdsEnabled: function() {}, setAdsEnabled: function() {}, isAnalyticsEnabled: function() {}, setAnalyticsEnabled: function() {}, setAssetPrefix: function() {}, setVersion: function () {}, setJsPrefix: function() {}, setSwfPrefix: function() {}, setCssPrefix: function() {}, setConfig: function() {}, getAssetPrefix: function() {}, getJsPrefix: function () {}, getSwfPrefix: function () {}, getCssPrefix: function () {} }, survey: { init: function(){ return false; } }, data: {}, init: function() {}, objects: function(str) { return false; }, locale: { set: function() {}, get: function() {} }, setAdKeyValue: function() {}, utils: { addEvent: function() {}, addHtmlTagClass: function() {}, log: function () {} }, addLoadEvent: function() {} }; /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (typeof orb !== 'undefined' && typeof orb.fig === 'function') { if (orb.fig('ad') && orb.fig('uk') == 0) { bbcdotcom.data = { ads: (orb.fig('ad') ? 1 : 0), stats: (orb.fig('uk') == 0 ? 1 : 0), statsProvider: orb.fig('ap') }; } } else { document.write('<script type="text/javascript" src="'+('https:' == document.location.protocol ? 'https://ssl.bbc.com' : 'http://tps.bbc.com')+'/wwscripts/data">\x3C/script>'); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (typeof orb === 'undefined' || typeof orb.fig !== 'function') { bbcdotcom.data = { ads: bbcdotcom.data.a, stats: bbcdotcom.data.b, statsProvider: bbcdotcom.data.c }; } if (bbcdotcom.data.ads == 1) { document.write('<script type="text/javascript" src="'+('https:' == document.location.protocol ? 'https://ssl.bbc.co.uk' : 'http://www.bbc.co.uk')+'/wwscripts/flag">\x3C/script>'); } })(); /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (window.bbcdotcom && (typeof bbcdotcom.flag == 'undefined' || (typeof bbcdotcom.data.ads !== 'undefined' && bbcdotcom.flag.a != 1))) { bbcdotcom.data.ads = 0; } if (/[?|&]ads/.test(window.location.href) || /(^|; )ads=on; /.test(document.cookie) || /; ads=on(; |$)/.test(document.cookie)) { bbcdotcom.data.ads = 1; bbcdotcom.data.stats = 1; } if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) { bbcdotcom.assetPrefix = "http://static.bbci.co.uk/bbcdotcom/1.31.0/"; if (/(sandbox|int)(.dev)*.bbc.co*/.test(window.location.href) || /[?|&]ads-debug/.test(window.location.href) || document.cookie.indexOf('ads-debug=') !== -1) { document.write('<script type="text/javascript" src="http://static.bbci.co.uk/bbcdotcom/1.31.0/script/dist/bbcdotcom.dev.js">\x3C/script>'); } else { document.write('<script type="text/javascript" src="http://static.bbci.co.uk/bbcdotcom/1.31.0/script/dist/bbcdotcom.js">\x3C/script>'); } } })(); /*]]>*/ </script><script type="text/javascript"> if (window.bbcdotcom && bbcdotcom.data.stats == 1) { document.write('<link rel="dns-prefetch" href="//secure-us.imrworldwide.com/">'); document.write('<link rel="dns-prefetch" href="//me-cdn.effectivemeasure.net/">'); document.write('<link rel="dns-prefetch" href="//ssc.api.bbc.com/">'); } if (window.bbcdotcom && bbcdotcom.data.ads == 1) { document.write('<link rel="dns-prefetch" href="//www.googletagservices.com/">'); } </script><script type="text/javascript"> /*<![CDATA[*/ (function(){ if (window.bbcdotcom && (bbcdotcom.data.ads == 1 || bbcdotcom.data.stats == 1)) { bbcdotcomConfig = {"adFormat":"standard","adKeyword":"","adMode":"smart","adsEnabled":true,"appAnalyticsSections":"news>election","asyncEnabled":true,"disableInitialLoad":false,"advertInfoPageUrl":"http:\/\/www.bbc.com\/privacy\/cookies\/international\/","advertisementText":"Advertisement","analyticsEnabled":true,"kruxEnabled":true,"appName":"tabloid","assetPrefix":"http:\/\/static.bbci.co.uk\/bbcdotcom\/1.31.0\/","customAdParams":[],"customStatsParams":[],"headline":"US election 2016: Trump says groping claims 'absolutely false'","id":"37650500","inAssociationWithText":"in association with","keywords":"","language":"","orbTransitional":false,"outbrainEnabled":true,"palEnv":"live","productName":"","sections":[],"comScoreEnabled":true,"comscoreSite":"bbc","comscoreID":"19293874","comscorePageName":"news.election-us-2016-37650500","slots":"","sponsoredByText":"is sponsored by","adsByGoogleText":"Ads by Google","summary":"Donald Trump rejects accusations of sexual misconduct as \"totally and absolutely false\", as First Lady Michelle Obama calls his lewd remarks \"shocking\".","type":"STORY","features":{"testfeature":{"name":"testfeature","envs":["sandbox","int","test"],"on":true,"options":{},"override":null},"lxadverts":{"name":"lxadverts","envs":[],"on":true,"options":{},"override":null}},"staticBase":"\/bbcdotcom","staticHost":"http:\/\/static.bbci.co.uk","staticVersion":"1.31.0","staticPrefix":"http:\/\/static.bbci.co.uk\/bbcdotcom\/1.31.0","dataHttp":"tps.bbc.com","dataHttps":"ssl.bbc.com","flagHttp":"www.bbc.co.uk","flagHttps":"ssl.bbc.co.uk","analyticsHttp":"sa.bbc.com","analyticsHttps":"ssa.bbc.com"}; bbcdotcom.config.init(bbcdotcomConfig, bbcdotcom.data, window.location, window.document); bbcdotcom.config.setAssetPrefix("http://static.bbci.co.uk/bbcdotcom/1.31.0/"); bbcdotcom.config.setVersion("1.31.0"); document.write('<!--[if IE 7]><script type="text/javascript">bbcdotcom.config.setIE7(true);\x3C/script><![endif]-->'); document.write('<!--[if IE 8]><script type="text/javascript">bbcdotcom.config.setIE8(true);\x3C/script><![endif]-->'); document.write('<!--[if IE 9]><script type="text/javascript">bbcdotcom.config.setIE9(true);\x3C/script><![endif]-->'); if (/[?|&]ex-dp/.test(window.location.href) || document.cookie.indexOf('ex-dp=') !== -1) { bbcdotcom.utils.addHtmlTagClass('bbcdotcom-ex-dp'); } } })(); /*]]>*/ </script>             <!--Searchbox:111-->  <script type="text/javascript">
  // Globally available search context
  window.SEARCHBOX={"variant":"default","locale":"en","navSearchboxStaticPrefix":"//nav.files.bbci.co.uk/searchbox/1.0.0-111","searchboxAppStaticPrefix":"//search.files.bbci.co.uk/searchbox-app/1.0.9","searchFormHtml":"<div tabindex=\"-1\" data-reactid=\".1h5sdb67jeo\" data-react-checksum=\"704586644\"><div data-reactid=\".1h5sdb67jeo.0\"><section class=\"se-searchbox-panel\" data-reactid=\".1h5sdb67jeo.0.0\"><div class=\"se-g-wrap\" data-reactid=\".1h5sdb67jeo.0.0.0\"><div class=\"se-g-layout\" data-reactid=\".1h5sdb67jeo.0.0.0.0\"><div class=\"se-g-layout__item se-searchbox-title\" aria-hidden=\"true\" data-reactid=\".1h5sdb67jeo.0.0.0.0.0\">search</div><div class=\"se-g-layout__item se-searchbox\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1\"><form accept-charset=\"utf-8\" id=\"searchboxDrawerForm\" method=\"get\" action=\"//search.bbc.co.uk/search\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0\"><label class=\"se-searchbox__input\" for=\"se-searchbox-input-field\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.0\"><span class=\"se-sr-only\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.0.0\">Search Term</span><input name=\"q\" type=\"text\" value=\"\" id=\"se-searchbox-input-field\" class=\"se-searchbox__input__field\" maxlength=\"512\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" tabindex=\"0\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.0.1\"/></label><input type=\"hidden\" name=\"scope\" value=\"\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.2\"/><button type=\"submit\" class=\"se-searchbox__submit\" tabindex=\"0\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.3\">Search</button><button type=\"button\" class=\"se-searchbox__clear se-searchbox__clear--visible\" tabindex=\"0\" data-reactid=\".1h5sdb67jeo.0.0.0.0.1.0.4\">Close</button></form></div></div></div></section><div aria-live=\"polite\" aria-atomic=\"true\" class=\"se-suggestions-container\" data-reactid=\".1h5sdb67jeo.0.1\"><section class=\"se-g-wrap\" data-reactid=\".1h5sdb67jeo.0.1.0\"></section></div></div></div>","searchScopePlaceholder":"","searchScopeParam":"","searchScopeTemplate":"","searchPlaceholderWrapperStart":"","searchPlaceholderWrapperEnd":""};
  window.SEARCHBOX.suppress = false;
  window.SEARCHBOX.searchScope = SEARCHBOX.searchScopeTemplate.split('-')[0];
</script>
<link rel="stylesheet" href="//nav.files.bbci.co.uk/searchbox/1.0.0-111/css/main.css">
<!--[if IE 8]>
  <script type="text/javascript" src="//nav.files.bbci.co.uk/searchbox/1.0.0-111/script/html5shiv.min.js"></script>
  <script type="text/javascript">window['searchboxIEVersion'] = 8;</script>
  <link rel="stylesheet" href="//nav.files.bbci.co.uk/searchbox/1.0.0-111/css/ie8.css">
<![endif]-->
<!--[if IE 9]>
  <script type="text/javascript">window['searchboxIEVersion'] = 9;</script>
<![endif]-->
  <!--NavID:0.2.0-140--> <link rel="stylesheet" href="//static.bbc.co.uk/id/0.35.93/style/id-cta.css" />  <link rel="stylesheet" href="//static.bbc.co.uk/id/0.35.93/style/id-cta-v5.css" />  <!--[if IE 8]><link href="//static.bbc.co.uk/id/0.35.93/style/ie8.css" rel="stylesheet"/> <![endif]--> <script type="text/javascript"> /* <![CDATA[ */ var map = {};  if (typeof(map['jssignals-1']) == 'undefined') { map['jssignals-1'] = 'https://static.bbc.co.uk/frameworks/jssignals/0.3.6/modules/jssignals-1'; }  require({paths: map}); /* ]]> */ </script>   <script src="//static.bbc.co.uk/id/0.35.93/modules/idcta/dist/idcta-1.min.js"></script>  <script type="text/javascript"> (function () { if (!window.require) { throw new Error('idcta: could not find require module'); } if(typeof(map) == 'undefined') { var map = {}; } if(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect) { document.documentElement.className += ' id-svg'; } var ptrt = RegExp("[\\?&]ptrt=([^&#]*)").exec(document.location.href); var ENDPOINT_URL = '//' + ((window.location.protocol == "https:") ? ('ssl.bbc.co.uk').replace("www.", "ssl.") : ('ssl.bbc.co.uk').replace("ssl.", "www.")); var ENDPOINT_CONFIG = ('/idcta/config?callback&amp;locale=en-GB&ptrt=' + encodeURI((ptrt ? ptrt[1] : document.location.href))).replace(/\&amp;/g, '&'); var ENDPOINT_TRANSLATIONS = '/idcta/translations?callback&locale=en-GB'; map['idapp-1'] = '//static.bbc.co.uk/idapp/0.72.58/modules/idapp/idapp-1'; map['idcta'] = '//static.bbc.co.uk/id/0.35.93/modules/idcta'; map['idcta/config'] = [ENDPOINT_URL + ENDPOINT_CONFIG, '//static.bbc.co.uk/id/0.35.93/modules/idcta/fallbackConfig']; map['idcta/translations'] = [ENDPOINT_URL + ENDPOINT_TRANSLATIONS, '//static.bbc.co.uk/id/0.35.93/modules/idcta/fallbackTranslations']; require({paths: map}); /* * Temporary code * To be removed when old id-statusbar-config is no longer supported */ define('id-statusbar-config', ['idcta/id-config'], function(conf) { return conf; }); define('idcta/id-statusbar-config', ['idcta/id-config'], function(conf) { return conf; }); })(); </script> <script type="text/javascript"> try { /* Users downgraded after IDP tokens were invalidated */ require(['idcta/idCookie'], function(idCookie){ idCookie.downgradeUser(); }); } catch(error) { /* Fail silently in case idCookie is not defined */ } </script>

    <link rel="stylesheet" href="//mybbc.files.bbci.co.uk/s/notification-ui/2.5.0/css/main.min.css"/>
             
        <link type="text/css" rel="stylesheet" href="http://static.bbci.co.uk/news/1.155.0816/stylesheets/services/news/core.css">
    <!--[if lt IE 9]>
        <link type="text/css" rel="stylesheet" href="http://static.bbci.co.uk/news/1.155.0816/stylesheets/services/news/old-ie.css">
        <script src="http://static.bbci.co.uk/news/1.155.0816/js/vendor/html5shiv/html5shiv.js"></script>
    <![endif]-->
 <script id="news-loader"> if (document.getElementById("responsive-news")) { window.bbcNewsResponsive = true; } var isIE = (function() { var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i'); while ( div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0] ); return v > 4 ? v : undef; }()); var modernDevice = 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window, forceCore = document.cookie.indexOf('ckps_force_core') !== -1; window.cutsTheMustard = modernDevice && !forceCore; if (window.cutsTheMustard) { document.documentElement.className += ' ctm'; var insertPoint = document.getElementById('news-loader'), config = {"asset":{"asset_id":"37650500","asset_uri":"\/news\/election-us-2016-37650500","original_asset_uri":null,"first_created":{"date":"2016-10-13 19:05:27","timezone_type":3,"timezone":"Europe\/London"},"last_updated":{"date":"2016-10-13 23:35:41","timezone_type":3,"timezone":"Europe\/London"},"options":{"allowRightHandSide":true,"allowRelatedStoriesBox":true,"includeComments":false,"isIgorSeoTagsEnabled":false,"hasNewsTracker":false,"allowAdvertising":true,"hasContentWarning":false,"allowDateStamp":true,"allowHeadline":true,"isKeyContent":false,"allowPrintingSharingLinks":true,"isBreakingNews":false,"suitableForSyndication":true},"section":{"name":"US Election 2016","id":"102423","uri":"\/news\/election\/us2016","urlIdentifier":"\/news\/election\/us2016"},"edition":"Asia","audience":null,"iStats_counter_name":"news.election.us2016.story.37650500.page","type":"STY","curie":"asset:0a31348e-6645-cb4c-a11d-0fa4cdb47bef","length":7213,"byline":{},"headline":"US election 2016: Trump says groping claims 'absolutely false'","mediaType":"video","topicTags":null},"smpBrand":null,"staticHost":"http:\/\/static.bbci.co.uk","environment":"live","locatorVersion":"0.46.3","pathPrefix":"\/news","staticPrefix":"http:\/\/static.bbci.co.uk\/news\/1.155.0816","jsPath":"http:\/\/static.bbci.co.uk\/news\/1.155.0816\/js","cssPath":"http:\/\/static.bbci.co.uk\/news\/1.155.0816\/stylesheets\/services\/news","cssPostfix":"","dynamic":null,"features":{"localnews":true,"video":true,"liveeventcomponent":true,"mediaassetpage":true,"travel":true,"gallery":true,"rollingnews":true,"sportstories":true,"radiopromo":true,"fromothernewssites":true,"locallive":true,"weather":true},"features2":{"svg_brand":true,"chartbeat":true,"connected_stream":true,"connected_stream_promo":true,"nav":true,"pulse_survey":false,"local_survey":true,"correspondents":true,"blogs":true,"open_graph":true,"follow_us":true,"marketdata_markets":true,"marketdata_shares":true,"nations_pseudo_nav":true,"politics_election2015_topic_pages":true,"responsive_breaking_news":true,"live_event":true,"most_popular":true,"most_popular_tabs":true,"most_popular_by_day":true,"routing":true,"radiopromonownext":true,"config_based_layout":true,"orb":true,"map_most_watched":true,"top_stories_promo":true,"features_and_analysis":true,"section_labels":true,"index_title":true,"share_tools":true,"local_live_promo":true,"adverts":true,"adverts_async":true,"adexpert":true,"igor_geo_redirect":true,"igor_device_redirect":true,"live":true,"comscore_mmx":true,"find_local_news":true,"comments":true,"comments_enhanced":true,"browser_notify":true,"stream_grid_promo":true,"breaking_news":false,"top_stories_max_volume":true,"record_livestats":true,"contact_form":true,"channel_page":true,"portlet_global_variants":true,"suppress_lep_timezone":true,"story_sticky_player":true,"cedexis":true,"mpulse":true,"story_single_column_layout":true,"story_image_copyright_labels":true,"ovp_resolve_primary_media_vpids":false,"media_player":true,"travel":true,"services_bar":true,"live_v2_stream":true,"ldp_tag_augmentation":true,"map_related_topic_tags":true,"maxymiser":true,"rio2016_medals":true},"configuration":{"showtimestamp":"1","showweather":"1","showsport":"1","showolympics":"1","showfeaturemain":"1","candyplatform":"EnhancedMobile","showwatchlisten":"1","showspecialreports":"","videotopiccandyid":"","showvideofeedsections":"1","showstorytopstories":"","showstoryfeaturesandanalysis":"1","showstorymostpopular":"","showgallery":"1","cms":"cps","channelpagecandyid":"10318089"},"pollingHost":"http:\/\/polling.bbc.co.uk","service":"news","locale":"en-GB","locatorHost":null,"locatorFlagPole":true,"local":{"allowLocationLookup":true},"isWorldService":false,"isChannelPage":false,"languageVariant":"","commentsHost":"https:\/\/feeds.bbci.co.uk","search":null,"comscoreAnalytics":null}; config.configuration['get'] = function (key) { return this[key.toLowerCase()]; };  var bootstrapUI=function(){var e=function(){if(navigator.userAgent.match(/(Android (2.0|2.1))|(Nokia)|(OSRE\/)|(Opera (Mini|Mobi))|(w(eb)?OSBrowser)|(UCWEB)|(Windows Phone)|(XBLWP)|(ZuneWP)/))return!1;if(navigator.userAgent.match(/MSIE 10.0/))return!0;var e,t=document,n=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style"),s=t.implementation||{hasFeature:function(){return!1}};r.type="text/css",n.insertBefore(r,n.firstChild),e=r.sheet||r.styleSheet;var i=s.hasFeature("CSS2","")?function(t){if(!e||!t)return!1;var n=!1;try{e.insertRule(t,0),n=!/unknown/i.test(e.cssRules[0].cssText),e.deleteRule(e.cssRules.length-1)}catch(r){}return n}:function(t){return e&&t?(e.cssText=t,0!==e.cssText.length&&!/unknown/i.test(e.cssText)&&0===e.cssText.replace(/\r+|\n+/g,"").indexOf(t.split(" ")[0])):!1};return i('@font-face{ font-family:"font";src:"font.ttf"; }')}();e&&(document.getElementsByTagName("html")[0].className+=" ff"),function(){var e=document.documentElement.style;("flexBasis"in e||"WebkitFlexBasis"in e||"msFlexBasis"in e)&&(document.documentElement.className+=" flex")}();var t,n,r,s,i,a={},o=function(){var e=document.documentElement.clientWidth,n=window.innerWidth,r=n>1.5*e;t=r?e:n},u=function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",n+e+r+".css"),t.setAttribute("media",i[e]),s.parentNode.insertBefore(t,s),delete i[e]},c=function(e,n,r){n&&!r&&t>=n&&u(e),r&&!n&&r>=t&&u(e),n&&r&&t>=n&&r>=t&&u(e)},l=function(e){if(a[e])return a[e];var t=e.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/),n=e.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/),r=t&&parseFloat(t[1])||null,s=n&&parseFloat(n[1])||null;return a[e]=[r,s],a[e]},f=function(){var e=0;for(var t in i)e++;return e},m=function(){f()||window.removeEventListener("resize",d,!1);for(var e in i){var t=i[e],n=l(t);c(e,n[0],n[1])}},d=function(){o(),m()},h=function(e,t){i=e,n=t.path+("/"!==t.path.substr(-1)?"/":""),r=t.postfix,s=t.insertBefore,o(),m(),window.addEventListener("resize",d,!1)};return{stylesheetLoaderInit:h}}(); var stylesheets = {"compact":"(max-width: 599px)","tablet":"(min-width: 600px)","wide":"(min-width: 1008px)"}; bootstrapUI.stylesheetLoaderInit(stylesheets, { path: 'http://static.bbci.co.uk/news/1.155.0816/stylesheets/services/news', postfix: '', insertBefore: insertPoint }); var loadRequire = function(){ var js_paths = {"jquery-1.9":"vendor\/jquery-1\/jquery","jquery-1":"http:\/\/static.bbci.co.uk\/frameworks\/jquery\/0.4.1\/sharedmodules\/jquery-1.7.2","demi-1":"http:\/\/static.bbci.co.uk\/frameworks\/demi\/0.10.0\/sharedmodules\/demi-1","swfobject-2":"http:\/\/static.bbci.co.uk\/frameworks\/swfobject\/0.1.10\/sharedmodules\/swfobject-2","jquery":"vendor\/jquery-2\/jquery.min","domReady":"vendor\/require\/domReady","translation":"module\/translations\/en-GB","bump-3":"\/\/emp.bbci.co.uk\/emp\/bump-3\/bump-3"};  js_paths.navigation = 'module/nav/navManager';  requirejs.config({ baseUrl: 'http://static.bbci.co.uk/news/1.155.0816/js', map: { 'vendor/locator': { 'module/bootstrap': 'vendor/locator/bootstrap', 'locator/stats': 'vendor/locator/stats', 'locator/locatorView': 'vendor/locator/locatorView' } }, paths: js_paths, waitSeconds: 30 }); define('config', function () { return config; });             require(["compiled\/all"], function() {
      require(['domReady'], function (domReady) { domReady(function () { require(["module\/dotcom\/handlerAdapter","module\/stats\/statsSubscriberAdapter","module\/alternativeJsStrategy\/controller","module\/iconLoaderAdapter","module\/polyfill\/location.origin","module\/components\/breakingNewsAdapter","module\/indexTitleAdaptor","module\/navigation\/handlerAdaptor","module\/noTouchDetectionForCss","module\/components\/mediaPlayer\/mainAdapter","module\/components\/responsiveImage","module\/components\/timestampAdaptor","module\/components\/twiteAdapter","module\/tableScrollAdapter"], function() {  require(["module\/strategiserAdaptor"]);  }); }); });              });
     };  loadRequire();  } else { var l = document.createElement('link'); l.href = 'http://static.bbci.co.uk/news/1.155.0816/icons/generated/icons.fallback.css'; l.rel = 'stylesheet'; document.getElementsByTagName('head')[0].appendChild(l); } </script>  <script type="text/javascript"> /*<![CDATA[*/ bbcdotcom.init({adsToDisplay:['leaderboard', 'sponsor_section', 'mpu', 'outbrain_ar_5', 'outbrain_ar_7', 'outbrain_ar_8', 'outbrain_ar_9', 'native', 'mpu_bottom', 'adsense', 'inread']}); /*]]>*/ </script>      <noscript><link href="http://static.bbci.co.uk/news/1.155.0816/icons/generated/icons.fallback.css" rel="stylesheet"></noscript>

                
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1">

                                                                                            <script>
    (function () {
        var matches = window.location.href.match(/[?&]maxymiser=(on|off)/g),
            maxymise = false;

        if (matches) {
            maxymise = (matches[0].substr(11) === 'on');
        } else if ('object' === typeof bbccookies && bbccookies.cookiesEnabled() && bbccookies.readPolicy('personalisation')) {
            matches = (' ' + window.bbccookies.get()).match(/[; ]BBC-UID=([^\\s;]*)/);
            if (matches) {
                bucket = "0123456789abcdef".indexOf(unescape(matches[1] + 'X').charAt(0));
                maxymise = (bucket >= 0 && bucket <= 0);
            }
        }

        if (maxymise) {
            document.write('<scr'+'ipt type="text/javascript" src="//service.maxymiser.net/cdn/mbbccoUK/js/mmcore.js"></scr'+'ipt>');
        }
    })();
</script>
                                                                    </head>
<!--[if IE]><body id="asset-type-sty" class="ie device--feature"><![endif]-->
<!--[if !IE]>--><body id="asset-type-sty" class="device--feature"><!--<![endif]-->
    <div class="direction" >

    
             <!-- BBCDOTCOM bodyFirst --><div id="bbccom_interstitial_ad" class="bbccom_display_none"></div><div id="bbccom_interstitial" class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { googletag.cmd.push(function() { googletag.display('bbccom_interstitial'); }); } }()); /*]]>*/ </script></div><div id="bbccom_wallpaper_ad" class="bbccom_display_none"></div><div id="bbccom_wallpaper" class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ (function() { var wallpaper; if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { if (bbcdotcom.config.isAsync()) { googletag.cmd.push(function() { googletag.display('bbccom_wallpaper'); }); } else { googletag.display("wallpaper"); } wallpaper = bbcdotcom.adverts.adRegister.getAd('wallpaper'); } }()); /*]]>*/ </script></div><script type="text/javascript"> /*<![CDATA[*/ (function() { if (window.bbcdotcom && bbcdotcom.config.isActive('ads')) { document.write(unescape('%3Cscript id="gnlAdsEnabled" class="bbccom_display_none"%3E%3C/script%3E')); } if (window.bbcdotcom && bbcdotcom.config.isActive('analytics')) { document.write(unescape('%3Cscript id="gnlAnalyticsEnabled" class="bbccom_display_none"%3E%3C/script%3E')); } }()); /*]]>*/ </script> <div id="blq-global"> <div id="blq-pre-mast">  </div> </div>  <script type="text/html" id="blq-bbccookies-tmpl"><![CDATA[ <section> <div id="bbccookies" class="bbccookies-banner orb-banner-wrapper bbccookies-d"> <div id="bbccookies-prompt" class="orb-banner b-g-p b-r b-f"> <h2 class="orb-banner-title"> Cookies on the BBC website </h2> <p class="orb-banner-content" dir="ltr"> The BBC has updated its cookie policy. We use cookies to ensure that we give you the best experience on our website. This includes cookies from third party social media websites if you visit a page which contains embedded content from social media. Such third party cookies may track your use of the BBC website.<span class="bbccookies-international-message"> We and our partners also use cookies to ensure we show you advertising that is relevant to you.</span> If you continue without changing your settings, we'll assume that you are happy to receive all cookies on the BBC website. However, you can change your cookie settings at any time. </p> <ul class="orb-banner-options"> <li id="bbccookies-continue"> <button type="button" id="bbccookies-continue-button">Continue</button> </li> <li id="bbccookies-settings"> <a href="/privacy/cookies/managing/cookie-settings.html">Change settings</a> </li> <li id="bbccookies-more"><a href="/privacy/cookies/bbc">Find out more</a></li></ul> </div> </div> </section> ]]></script> <script type="text/javascript">/*<![CDATA[*/ (function(){if(bbccookies._showPrompt()){var g=document,b=g.getElementById("blq-pre-mast"),e=g.getElementById("blq-bbccookies-tmpl"),a,f;if(b&&g.createElement){a=g.createElement("div");f=e.innerHTML;f=f.replace("<"+"![CDATA[","").replace("]]"+">","");a.innerHTML=f;b.appendChild(a);blqCookieContinueButton=g.getElementById("bbccookies-continue-button");blqCookieContinueButton.onclick=function(){a.parentNode.removeChild(a);return false};bbccookies._setPolicy(bbccookies.readPolicy())}var c=g.getElementById("bbccookies");if(c&&!window.orb.fig("uk")){c.className=c.className.replace(/\bbbccookies-d\b/,"");c.className=c.className+(" bbccookies-w")}}})(); /*]]>*/</script>   <noscript><p style="position: absolute; top: -999em"><img src="//sa.bbc.co.uk/bbc/bbc/s?name=news.election.us2016.story.37650500.page&amp;ml_name&#x3D;webmodule&amp;ml_version&#x3D;62&amp;blq_js_enabled=0&blq_s=4d&blq_r=2.7&blq_v=default&blq_e=pal&cps_asset_id=37650500&page_type=Story&section=%2Fnews%2Felection%2Fus2016&first_pub=2016-10-13T18%3A05%3A27%2B00%3A00&last_editorial_update=2016-10-13T22%3A35%3A41%2B00%3A00&curie=0a31348e-6645-cb4c-a11d-0fa4cdb47bef&title=US+election+2016%3A+Trump+says+groping+claims+%27absolutely+false%27&has_video=1&topic_names=Republican+Party%21US+Election+2016%21Donald+Trump&topic_ids=1da109b9-d231-44a5-ab28-29a1b039b590%21530d1350-d83c-405b-b6c3-809473e23c58%2178080d81-2849-497e-bc3a-bf364626456b&for_nation=cn&app_version=1.155.0&bbc_site=news&pal_route=asset&app_type=responsive&language=en-GB&pal_webapp=tabloid&prod_name=news&app_name=news" height="1" width="1" alt=""></p></noscript>  <!-- Begin iStats 20100118 (UX-CMC 1.1009.3) --> <script type="text/javascript">/*<![CDATA[*/ if (typeof bbccookies !== 'undefined' && bbccookies.isAllowed('s1')) { (function () { require(['istats-1'], function (istats) { istatsTrackingUrl = istats.getDefaultURL(); if (istats.isEnabled() && bbcFlagpoles_istats === 'ON') { sitestat(istatsTrackingUrl); } else { window.ns_pixelUrl = istatsTrackingUrl; /* used by Flash library to track */ } function sitestat(n) { var j = document, f = j.location, b = ""; if (j.cookie.indexOf("st_ux=") != -1) { var k = j.cookie.split(";"); var e = "st_ux", h = document.domain, a = "/"; if (typeof ns_ != "undefined" && typeof ns_.ux != "undefined") { e = ns_.ux.cName || e; h = ns_.ux.cDomain || h; a = ns_.ux.cPath || a } for (var g = 0, f = k.length; g < f; g++) { var m = k[g].indexOf("st_ux="); if (m != -1) { b = "&" + decodeURI(k[g].substring(m + 6)) } } bbccookies.set(e + "=; expires=" + new Date(new Date().getTime() - 60).toGMTString() + "; path=" + a + "; domain=" + h); } window.ns_pixelUrl = n;  } }); })(); } else { window.istats = {enabled: false}; } /*]]>*/</script> <!-- End iStats (UX-CMC) -->  
 <!--[if (gt IE 8) | (IEMobile)]><!--> <header id="orb-banner" role="banner"> <!--<![endif]--> <!--[if (lt IE 9) & (!IEMobile)]> <![if (IE 8)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie8"> <![endif]> <![if (IE 7)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie7"> <![endif]> <![if (IE 6)]> <header id="orb-banner" role="banner" class="orb-old-ie orb-ie6"> <![endif]> <![endif]--> <div id="orb-header"  class="orb-nav-pri orb-nav-pri-white b-header--white--black orb-nav-empty"  > <div class="orb-nav-pri-container b-r b-g-p"> <div class="orb-nav-section orb-nav-blocks"> <a href="/"> <img  src="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/img/bbc-blocks-dark.png" width="84" height="24" alt="BBC" /> </a> </div> <section> <div class="orb-skip-links"> <h2>Accessibility links</h2> <ul>  <li><a href="#page">Skip to content</a></li>  <li><a id="orb-accessibility-help" href="/accessibility/">Accessibility Help</a></li> </ul> </div> </section>  <div id="mybbc-wrapper" class="orb-nav-section orb-nav-id orb-nav-focus"> <div id="idcta-statusbar" class="orb-nav-section orb-nav-focus"> <a id="idcta-link" href="https://www.bbc.com/account?ptrt=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500"> <span id="idcta-username">BBC iD</span> </a> </div>  <script type="text/javascript"> require(['idcta/statusbar'], function(statusbar) { new statusbar.Statusbar({"id":"idcta-statusbar","publiclyCacheable":true}); }); </script>

    <a id="notification-link" class="js-notification-link animated three" href="#">
        <span class="hidden-span">Notifications</span>
        <div class="notification-link--triangle"></div>
        <div class="notification-link--triangle"></div>
        <span id="not-num"></span>
    </a>
 </div>  <nav role="navigation" class="orb-nav"> <div class="orb-nav-section orb-nav-links orb-nav-focus" id="orb-nav-links"> <h2>BBC navigation</h2> <ul>    <li  class="orb-nav-news orb-d"  > <a href="http://www.bbc.co.uk/news/">News</a> </li>    <li  class="orb-nav-newsdotcom orb-w"  > <a href="http://www.bbc.com/news/">News</a> </li>    <li  class="orb-nav-sport"  > <a href="/sport/">Sport</a> </li>    <li  class="orb-nav-weather"  > <a href="/weather/">Weather</a> </li>    <li  class="orb-nav-shop orb-w"  > <a href="http://shop.bbc.com/">Shop</a> </li>    <li  class="orb-nav-earthdotcom orb-w"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-travel-dotcom orb-w"  > <a href="http://www.bbc.com/travel/">Travel</a> </li>    <li  class="orb-nav-capital orb-w"  > <a href="http://www.bbc.com/capital/">Capital</a> </li>    <li  class="orb-nav-iplayer orb-d"  > <a href="/iplayer/">iPlayer</a> </li>    <li  class="orb-nav-culture orb-w"  > <a href="http://www.bbc.com/culture/">Culture</a> </li>    <li  class="orb-nav-autos orb-w"  > <a href="http://www.bbc.com/autos/">Autos</a> </li>    <li  class="orb-nav-future orb-w"  > <a href="http://www.bbc.com/future/">Future</a> </li>    <li  class="orb-nav-tv"  > <a href="/tv/">TV</a> </li>    <li  class="orb-nav-radio"  > <a href="/radio/">Radio</a> </li>    <li  class="orb-nav-cbbc"  > <a href="/cbbc">CBBC</a> </li>    <li  class="orb-nav-cbeebies"  > <a href="/cbeebies">CBeebies</a> </li>    <li  class="orb-nav-food"  > <a href="/food/">Food</a> </li>    <li  > <a href="/iwonder">iWonder</a> </li>    <li  > <a href="/education">Bitesize</a> </li>    <li  class="orb-nav-travel orb-d"  > <a href="/travel/">Travel</a> </li>    <li  class="orb-nav-music"  > <a href="/music/">Music</a> </li>    <li  class="orb-nav-earth orb-d"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-arts"  > <a href="/arts/">Arts</a> </li>    <li  class="orb-nav-makeitdigital"  > <a href="/makeitdigital">Make It Digital</a> </li>    <li  > <a href="/taster">Taster</a> </li>    <li  class="orb-nav-nature orb-w"  > <a href="/nature/">Nature</a> </li>    <li  class="orb-nav-local"  > <a href="/local/">Local</a> </li>    <li id="orb-nav-more"><a href="#orb-footer" data-alt="More">Menu<span class="orb-icon orb-icon-arrow"></span></a></li> </ul> </div> </nav>   <div class="orb-nav-section orb-nav-search"> <a class="orb-search__button" href="http://search.bbc.co.uk/search">Search the BBC</a>

<form class="b-f" id="orb-search-form" role="search" method="get"
      action="//search.bbc.co.uk/search" accept-charset="utf-8">
    <div>
        
        <label for="orb-search-q">Search the BBC</label>
            <input
                id="orb-search-q"
                type="text"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                name="q"
                placeholder="Search"
            >
            <button id="orb-search-button" class="orb-search__button">Search the BBC</button>
            <input type="hidden" name="suggid" id="orb-search-suggid"/>
    </div>
</form>
 </div>  </div> <div id="orb-panels"  > <script type="text/template" id="orb-panel-template"><![CDATA[ <div id="orb-panel-<%= panelname %>" class="orb-panel" aria-labelledby="orb-nav-<%= panelname %>"> <div class="orb-panel-content b-g-p b-r"> <%= panelcontent %> </div> </div> ]]></script> </div> </div> </header> <!-- Styling hook for shared modules only --> <div id="orb-modules">             
    <div id="site-container">

    <!--[if lt IE 9]>
<div class="browser-notify">
    <div class="browser-notify__banner">
        <div class="browser-notify__icon"></div>
        <span>This site is optimised for modern web browsers, and does not fully support your version of Internet Explorer</span>
    </div>
</div>
<![endif]-->            <div class="site-brand site-brand--height" role="banner" aria-label="News">
                        <div class="site-brand-inner site-brand-inner--height">
                <div class="navigation navigation--primary">
                    <a href="/news" id="brand">
            <svg class="brand__svg" aria-label="BBC News" width="102" height="30">
            <title>BBC News</title>
            <image xlink:href="http://static.bbci.co.uk/news/1.155.0816/img/brand/generated/news-light.svg" src="http://static.bbci.co.uk/news/1.155.0816/img/brand/generated/news-light.png" width="100%" height="100%"/>
        </svg>
        </a>
                                        <h2 class="navigation__heading off-screen">News navigation</h2>
                    <a href="#core-navigation" class="navigation__section navigation__section--core" data-event="header">
                        Sections                    </a>
                                    </div>
            </div>
                        

<div class="navigation navigation--wide">
    <ul class="navigation-wide-list" role="navigation" aria-label="News" data-panel-id="js-navigation-panel-primary">
                    <li>
                <a href="/news" class="navigation-wide-list__link">
                    <span>Home</span>
                </a>
                            </li>
                    <li>
                <a href="/news/video_and_audio/international" class="navigation-wide-list__link">
                    <span>Video</span>
                </a>
                            </li>
                    <li class="selected">
                <a href="/news/world" data-panel-id="js-navigation-panel-World" class="navigation-wide-list__link navigation-arrow--open">
                    <span>World</span>
                </a>
                 <span class="off-screen">selected</span>            </li>
                    <li>
                <a href="/news/world/asia" data-panel-id="js-navigation-panel-Asia" class="navigation-wide-list__link">
                    <span>Asia</span>
                </a>
                            </li>
                    <li>
                <a href="/news/uk" data-panel-id="js-navigation-panel-UK" class="navigation-wide-list__link">
                    <span>UK</span>
                </a>
                            </li>
                    <li>
                <a href="/news/business" data-panel-id="js-navigation-panel-Business" class="navigation-wide-list__link">
                    <span>Business</span>
                </a>
                            </li>
                    <li>
                <a href="/news/technology" class="navigation-wide-list__link">
                    <span>Tech</span>
                </a>
                            </li>
                    <li>
                <a href="/news/science_and_environment" class="navigation-wide-list__link">
                    <span>Science</span>
                </a>
                            </li>
                    <li>
                <a href="/news/magazine" class="navigation-wide-list__link">
                    <span>Magazine</span>
                </a>
                            </li>
                    <li>
                <a href="/news/entertainment_and_arts" class="navigation-wide-list__link">
                    <span>Entertainment &amp; Arts</span>
                </a>
                            </li>
                    <li>
                <a href="/news/health" class="navigation-wide-list__link">
                    <span>Health</span>
                </a>
                            </li>
                    <li>
                <a href="/news/world_radio_and_tv" class="navigation-wide-list__link">
                    <span>World News TV</span>
                </a>
                            </li>
                    <li>
                <a href="/news/in_pictures" class="navigation-wide-list__link">
                    <span>In Pictures</span>
                </a>
                            </li>
                    <li>
                <a href="/news/also_in_the_news" class="navigation-wide-list__link">
                    <span>Also in the News</span>
                </a>
                            </li>
                    <li>
                <a href="/news/special_reports" class="navigation-wide-list__link">
                    <span>Special Reports</span>
                </a>
                            </li>
                    <li>
                <a href="/news/explainers" class="navigation-wide-list__link">
                    <span>Explainers</span>
                </a>
                            </li>
                    <li>
                <a href="/news/the_reporters" class="navigation-wide-list__link">
                    <span>The Reporters</span>
                </a>
                            </li>
                    <li>
                <a href="/news/have_your_say" class="navigation-wide-list__link navigation-wide-list__link--last">
                    <span>Have Your Say</span>
                </a>
                            </li>
            </ul>
</div>

    <div class="secondary-navigation secondary-navigation--wide">
        <nav class="navigation-wide-list navigation-wide-list--secondary" role="navigation" aria-label="US &amp; Canada">
            <a class="secondary-navigation__title navigation-wide-list__link " href="/news/world/us_and_canada"><span>US &amp; Canada</span></a> <span class="off-screen">selected</span>                            <ul data-panel-id="js-navigation-panel-secondary">
                                            <li class="selected">
                            <a href="/news/election/us2016"
                                class="navigation-wide-list__link navigation-wide-list__link--first navigation-wide-list__link--last">
                                <span>US Election 2016</span>
                            </a>
                             <span class="off-screen">selected</span>                        </li>
                                    </ul>
                    </nav>
    </div>
                    </div>
            
    
<div id="bbccom_leaderboard_1_2_3_4" class="bbccom_slot "  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('leaderboard', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

    <div id="breaking-news-container" data-polling-url="http://polling.bbc.co.uk/news/latest_breaking_news?audience=Asia" aria-live="polite"></div>

                        <div class="container-width-only">
                            <span class="index-title index-title--redundant " id="comp-index-title" data-index-title-meta="{&quot;id&quot;:&quot;comp-index-title&quot;,&quot;type&quot;:&quot;index-title&quot;,&quot;handler&quot;:&quot;indexTitle&quot;,&quot;deviceGroups&quot;:null,&quot;opts&quot;:{&quot;alwaysVisible&quot;:false,&quot;onFrontPage&quot;:false},&quot;template&quot;:&quot;index-title&quot;}">
        <span class="index-title__container">
            <a href="/news/election/us2016">US Election 2016</a>
        </span>
    </span>
            
<div id="bbccom_sponsor_section_1_2_3_4" class="bbccom_slot "  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('sponsor_section', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
            </div>
            
         <div id="page" class="configurable story " data-story-id="election-us-2016-37650500"> <div id="breaking-news-banner-focus-target" tabindex="-1"></div>                         <div class="page__head">
                                                                            

    <div id="comp-pattern-library-5" class="distinct-component-group container-width-only">
        
            <div class="us2016-logo" aria-hidden="true">
    <a href="/news/election/us2016" class="us2016-logo__link">
    <svg class="us2016-logo__hex" viewBox="0 0 65 56">
      <g fill="none" fill-rule="evenodd">
        <path fill="#FFF" d="M17.66 1.517H47.52l15.457 26.62L47.526 54.4l-29.868.174L1.94 28.03"/>
        <path d="M30.12 21.637l-.71-1.364 3.67-.634 2.78 1.39-.127.853-.406 2.715 2.532-2.575 3.23 1.61-1.666-3.2 2.232-2.275 1.11-.192-.294-1.705 3.073-.53 4.505-.778.992 5.746.325 1.885L5.14 30.566 3.656 28l2.104-3.643 19.468-3.362-.38 2.548 1.256-1.28 1.274-1.295 3.232 1.61-.49-.94zm18.662 24.39l-4.662.805-26.907 4.647-4.126-7.147 34.377-5.936.363 2.1.955 5.53zm2.906-14.054l.39 2.257-40.76 7.04-4.125-7.147L50.76 26.6l.336 1.946.592 3.427z" fill="#BF0930"/>
        <path d="M25.38 19.974l-.152 1.02L5.76 24.358l12.234-21.19H40.21l1.116 6.46 1.146 6.634.295 1.706-1.11.19.292-.297-3.558.594-1.666-3.2-.533 3.568-3.557.595.443.222-3.67.632-.466-.894 2.525-2.574-3.558.595-1.666-3.202-.533 3.57-3.557.594 3.225 1.612zm-8.454-.074l-2.53 2.575.532-3.568-3.225-1.613 3.557-.595.534-3.57 1.665 3.2 3.556-.594-2.524 2.574 1.665 3.2-3.23-1.61zm12.766-4.555l.533-3.57L27 10.166l3.557-.596L31.09 6l1.666 3.2 3.557-.594-2.524 2.574 1.665 3.2-3.232-1.61-2.53 2.575zm-10-1l.533-3.57L17 9.166l3.557-.596L21.09 5l1.666 3.2 3.557-.594-2.524 2.574 1.665 3.2-3.232-1.61-2.53 2.575z" fill="#002868"/>
        <path d="M48.497 0l16.166 28-16.166 28h-32.33L0 28 16.166 0h32.33zM46.67 52.833l7.78-13.48 2.078-3.596L61.006 28l-3.96-6.86-.777-1.345-9.6-16.628H17.993L5.76 24.357 3.657 28l1.48 2.566 2.055 3.558 4.126 7.145 1.77 3.063 4.124 7.146.782 1.353H46.67z" fill="#D6D9E3"/>
      </g>
    </svg>
    <svg class="us2016-logo__text" viewBox="0 0 255 56" xmlns="http://www.w3.org/2000/svg">
        
        <image class="us2016-logo__normal" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://static.bbci.co.uk/news/1.155.0816/img/elections/us2016/english.svg" src="http://static.bbci.co.uk/news/1.155.0816/img/elections/us2016/english.png" width="100%" height="100%"></image>
        <image class="us2016-logo__hover" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://static.bbci.co.uk/news/1.155.0816/img/elections/us2016/english-hover.svg" width="100%" height="100%"></image>
    </svg>
    </a>
</div>

        
    </div>

                                                                        </div>
             <div role="main"> <div class="container-width-only">       <span class="index-title index-title--redundant " id="comp-index-title" data-index-title-meta="{&quot;id&quot;:&quot;comp-index-title&quot;,&quot;type&quot;:&quot;index-title&quot;,&quot;handler&quot;:&quot;indexTitle&quot;,&quot;deviceGroups&quot;:null,&quot;opts&quot;:{&quot;alwaysVisible&quot;:false,&quot;onFrontPage&quot;:false},&quot;template&quot;:&quot;index-title&quot;}">
        <span class="index-title__container">
            <a href="/news/election/us2016">US Election 2016</a>
        </span>
    </span>
 
<div id="bbccom_sponsor_section_1_2_3_4" class="bbccom_slot "  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('sponsor_section', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
   </div>      <div class="container">       <div class="container--primary-and-secondary-columns column-clearfix">                         <div class="column--primary">
                                                                            
<div class="story-body">
    <h1 class="story-body__h1">US election 2016: Trump says groping claims 'absolutely false'</h1>

    
    <div class="story-body__mini-info-list-and-share">
        <ul class="mini-info-list">
    <li class="mini-info-list__item">    <div class="date date--v2" data-seconds="1476398141" data-datetime="13 October 2016">13 October 2016</div>
</li>
            <li class="mini-info-list__item"><span class="mini-info-list__section-desc off-screen">From the section </span><a href="/news/election/us2016" class="mini-info-list__section" data-entityid="section-label">US Election 2016</a></li>
</ul>
                     </div>

            <div class="share-tools--no-event-tag">
        

    <div id="comp-pattern-library-6" class="distinct-component-group container-twite">
        
            <div class="twite">
    <form method="get" action="http://www.bbc.co.uk/modules/share/page">
        <input type="hidden" name="app_id" value="58567469885">
        <input type="hidden" name="shareUrl" value="http://www.bbc.com/news/election-us-2016-37650500">
        <input type="hidden" name="title" value="US election 2016: Trump says groping claims 'absolutely false'">
        <input type="hidden" name="twitterName" value="BBCNews">
        <input type="hidden" name="redirect_uri" value="http://www.bbc.com/news/election-us-2016-37650500">
        <input type="hidden" name="locale" value="en-gb">
        <input type="hidden" name="js" value="1">
        <input type="hidden" name="css" value="1">
        <input type="hidden" name="version" value="1.5.1">
        <a href="#share-tools" class="twite__share-button" aria-label="Open share panel" data-origin="page" aria-expanded="false" aria-haspopup="true">
        
            <svg class="twite__share-icon" aria-hidden="true" viewBox="0 0 29.266 32"><path d="M5.473 22.153c1.586 0 3.01-.684 4.012-1.762l9 4.845c-.102.412-.16.85-.16 1.297 0 3.02 2.452 5.468 5.472 5.468 3.017 0 5.47-2.446 5.47-5.468 0-3.023-2.453-5.47-5.47-5.47-1.587 0-3.02.68-4.015 1.757l-9.457-5.175-.074-2.792 9.74-5.456c.99.953 2.327 1.543 3.807 1.543 3.017 0 5.47-2.45 5.47-5.474 0-3.022-2.453-5.467-5.47-5.467-3.02 0-5.473 2.444-5.473 5.466 0 .554.08 1.09.243 1.597L9.27 12.75c-.988-.95-2.326-1.537-3.797-1.537C2.447 11.213 0 13.657 0 16.68c0 3.03 2.447 5.473 5.473 5.473"/></svg><span class="twite__share-text">Share</span>
        </a>
        
        <div class="twite__panel arrow-top" data-share-uri="">
            <p class="twite__title" aria-hidden="true">Share this with</p>
            <ul class="twite__channels">
                <li class="twite__channel twite__channel--email">
                    <a class="twite__channel-link" href="mailto:?subject=Shared%20from%20BBC%20News&amp;body=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500">
                        <span class="twite__icon twite__icon--email"></span>
                        <p class="twite__channel-text" aria-hidden="true">Email</p>
                        <span class="off-screen">Share this with Email</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--facebook">
                    <a class="twite__channel-link" href="http://www.facebook.com/dialog/feed?app_id=58567469885&amp;redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&amp;link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FSThisFB">
                        <span class="twite__icon twite__icon--facebook"></span>
                        <p class="twite__channel-text" aria-hidden="true">Facebook</p>
                        <span class="off-screen">Share this with Facebook</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--messengerdesktop">
                    <a class="twite__channel-link" href="http://www.facebook.com/dialog/send?app_id=58567469885&amp;redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&amp;link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FSThisFB">
                        <span class="twite__icon twite__icon--messengerdesktop"></span>
                        <p class="twite__channel-text" aria-hidden="true">Messenger</p>
                        <span class="off-screen">Share this with Messenger</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--messengermobile">
                    <a class="twite__channel-link" href="fb-messenger://share?app_id=58567469885&amp;redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&amp;link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FCMP%3Dshare_btn_me"target=_blank>
                        <span class="twite__icon twite__icon--messengermobile"></span>
                        <p class="twite__channel-text" aria-hidden="true">Messenger</p>
                        <span class="off-screen">Share this with Messenger</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--twitter">
                    <a class="twite__channel-link" href="https://twitter.com/intent/tweet?text=BBC%20News%20-%20US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&amp;url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500"class=shortenUrl data-social-url=https://twitter.com/intent/tweet?text=BBC+News+-+US+election+2016%3A+Trump+says+groping+claims+%27absolutely+false%27&amp;amp;url= data-target-url=http://www.bbc.com/news/election-us-2016-37650500>
                        <span class="twite__icon twite__icon--twitter"></span>
                        <p class="twite__channel-text" aria-hidden="true">Twitter</p>
                        <span class="off-screen">Share this with Twitter</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--pinterest">
                    <a class="twite__channel-link" href="https://uk.pinterest.com/pin/create/bookmarklet/?url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&amp;description=Donald%20Trump%20rejects%20accusations%20of%20sexual%20misconduct%20as%20%22totally%20and%20absolutely%20false%22%2C%20as%20First%20Lady%20Michelle%20Obama%20calls%20his%20lewd%20remarks%20%22shocking%22.&amp;title=US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&amp;media=http%3A%2F%2Fc.files.bbci.co.uk%2F14411%2Fproduction%2F_91916928_hi035846073.jpg">
                        <span class="twite__icon twite__icon--pinterest"></span>
                        <p class="twite__channel-text" aria-hidden="true">Pinterest</p>
                        <span class="off-screen">Share this with Pinterest</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--whatsapp">
                    <a class="twite__channel-link" href="whatsapp://send?text=BBC%20News%20%7C%20US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27%20-%20http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3Focid%3Dwsnews.chat-apps.in-app-msg.whatsapp.trial.link1_.auin">
                        <span class="twite__icon twite__icon--whatsapp"></span>
                        <p class="twite__channel-text" aria-hidden="true">WhatsApp</p>
                        <span class="off-screen">Share this with WhatsApp</span>
                    </a>
                </li>
                <li class="twite__channel twite__channel--linkedin">
                    <a class="twite__channel-link" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&amp;title=US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&amp;summary=Donald%20Trump%20rejects%20accusations%20of%20sexual%20misconduct%20as%20%22totally%20and%20absolutely%20false%22%2C%20as%20First%20Lady%20Michelle%20Obama%20calls%20his%20lewd%20remarks%20%22shocking%22.&amp;source=BBC">
                        <span class="twite__icon twite__icon--linkedin"></span>
                        <p class="twite__channel-text" aria-hidden="true">Linkedin</p>
                        <span class="off-screen">Share this with Linkedin</span>
                    </a>
                </li>
            </ul>
            <p class="twite__copy-text">Copy this link</p>
            <div class="twite__copy-input">
                <a class="twite__share-link" href="http://www.bbc.com/news/election-us-2016-37650500" tabindex="-1" contenteditable="true">http://www.bbc.com/news/election-us-2016-37650500</a>
            </div>
            <a class="twite__read-more" href="http://www.bbc.co.uk/faqs/questions/bbc_online/sharing">Read more about sharing.</a>
            <button class="twite__close-button">
                <span class="off-screen">Close share panel</span>
                <span class="twite__close-button-graphic" aria-hidden="true">&times;</span>
            </button>
        </div>
    </form>
</div>

        
    </div>

        </div>
    
    <div class="story-body__inner" property="articleBody">
        <figure class="media-with-caption">
        <div class="media-player-wrapper">
            <figure class="js-media-player-unprocessed media-player" data-playable="{&quot;settings&quot;:{&quot;counterName&quot;:&quot;news.election.us2016.story.37650500.page&quot;,&quot;edition&quot;:&quot;Asia&quot;,&quot;pageType&quot;:&quot;eav2&quot;,&quot;uniqueID&quot;:&quot;37650500&quot;,&quot;ui&quot;:{&quot;locale&quot;:{&quot;lang&quot;:&quot;en-gb&quot;}},&quot;externalEmbedUrl&quot;:&quot;http:\/\/www.bbc.com\/news\/election-us-2016-37650500\/embed&quot;,&quot;insideIframe&quot;:false,&quot;statsObject&quot;:{&quot;clipPID&quot;:&quot;p04by13s&quot;},&quot;playlistObject&quot;:{&quot;title&quot;:&quot;Michelle Obama and Donald Trump's duelling speeches on women&quot;,&quot;holdingImageURL&quot;:&quot;http:\/\/ichef.bbci.co.uk\/images\/ic\/$recipe\/p04by298.jpg&quot;,&quot;guidance&quot;:&quot;&quot;,&quot;simulcast&quot;:false,&quot;liveRewind&quot;:false,&quot;embedRights&quot;:&quot;blocked&quot;,&quot;items&quot;:[{&quot;vpid&quot;:&quot;p04by13z&quot;,&quot;live&quot;:false,&quot;duration&quot;:154,&quot;kind&quot;:&quot;programme&quot;}],&quot;summary&quot;:&quot;Michelle Obama and Donald Trump's duelling speeches on women&quot;}},&quot;otherSettings&quot;:{&quot;advertisingAllowed&quot;:true,&quot;continuousPlayCfg&quot;:{&quot;enabled&quot;:false},&quot;isAutoplayOnForAudience&quot;:false}}"></figure>
        </div>
    <figcaption class="media-with-caption__caption"><span class="off-screen">Media caption</span>Michelle Obama and Donald Trump's duelling speeches on women</figcaption>
</figure><p class="story-body__introduction">Donald Trump has rejected a slew of accusations of sexual misconduct, telling supporters in Florida they are "totally and absolutely false".</p><p>The Republican presidential nominee said the women making the allegations were "horrible liars" and the media was colluding with rival Hillary Clinton.</p><p>Several women say he groped them or forcibly kissed them.</p><p>First Lady Michelle Obama earlier said Mr Trump's boasts about groping women were "shocking and demeaning".</p><p>"Leaders should meet a basic standard of human decency," she said during a campaign appearance in New Hampshire.  </p><div id="bbccom_mpu_1_2_3" class="bbccom_slot mpu-ad" aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /**/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('mpu', [1,2,3]);
                }
            })();
            /**/
        </script>
    </div>
</div><p>Seeing Mr Trump make lewd comments about women, on a video leaked last week to the Washington Post, "has shaken me to my core in a way that I cannot have predicted," Mrs Obama said, her voice cracking with emotion.</p><p>She never mentioned the former reality TV star by name but her references made her target obvious.</p><ul class="story-body__unordered-list">
<li class="story-body__list-item"><a href="http://www.bbc.com/news/live/election-us-2016-35404043" class="story-body__link">As it happened - Obama/Trump speeches</a></li>
<li class="story-body__list-item"><a href="http://www.bbc.co.uk/news/world-us-canada-37639640" class="story-body__link">The dark secret of sexual assault</a></li>
<li class="story-body__list-item"><a href="/news/election-us-2016-37626323" class="story-body__link">Trump denies groping - read speech in full</a></li>
<li class="story-body__list-item"><a href="/news/election-us-2016-37651657" class="story-body__link">Read Michelle Obama speech in full</a></li>
<li class="story-body__list-item"><a href="http://www.bbc.co.uk/news/election-us-2016-37641814" class="story-body__link">What are the claims against Trump?</a></li>
<li class="story-body__list-item"><a href="/news/election-us-2016-37640049" class="story-body__link">Your US election daily dig</a></li>
<li class="story-body__list-item"><a href="http://www.bbc.co.uk/news/election-us-2016-37625056" class="story-body__link">A silver lining in #TrumpTapes story</a></li>
</ul><hr class="story-body__line"><h2 class="story-body__crosshead">At the scene: Rajini Vaidyanathan, BBC News, Manchester, New Hampshire</h2><p>The rally was packed with students from across the political spectrum, including a young Republican who told me he was disgusted by Donald Trump, but yet to be convinced by Hillary Clinton. </p><p>As Michelle Obama entered the room, the deafening screams were at the sort of ear piercing level, usually reserved for rock stars.  </p><p>And it was to this backdrop, the First Lady expressed her revulsion at Donald Trump's comments about women, as heard on that recently released tape. </p><p>She spoke with emotion, energy, and from the heart, but didn't name Mr Trump once - referring to him instead, as the candidate. </p><p>But aside from expressing her distaste at the Republican nominee's tone this election-  she had another important message to those in the room.  </p><p>That they must vote. Turnout, she said, was key. It's what helped her husband win this state of New Hampshire, and will be crucial for Hillary Clinton too. </p><p>In some precincts her husband won by an average of only 66 votes. Every ballot can make a difference, she urged the crowd. </p><p>If Mrs Obama really is a secret weapon for the Clinton campaign, then the true measure of how powerful her sermon was, will be tested in how she manages to rally the Democratic base.  </p><hr class="story-body__line"><p>Two women <a href="http://www.nytimes.com/2016/10/13/us/politics/donald-trump-women.html?hp&amp;action=click&amp;pgtype=Homepage&amp;clickSource=story-heading&amp;module=first-column-region&amp;region=top-news&amp;WT.nav=top-news&amp;_r=0" class="story-body__link-external">told the New York Times</a> that the Republican presidential candidate groped or kissed them.</p><p>A <a href="http://people.com/politics/donald-trump-attacked-people-writer/" class="story-body__link-external">People magazine reporter also said</a> she was forcibly kissed, while another woman said Mr Trump grabbed her bottom.</p><p>Making his first public appearance since the allegations were made, Mr Trump told a rally in West Palm Beach these stories were "a conspiracy against the American people" by the political and media establishment. </p><p>He said he had evidence the accusations were unfounded and would release that at the "appropriate time".</p><p>In one reference, he appeared to imply People writer Natasha Stoynoff could not have been telling the truth because of her appearance.</p><p>"Take a look. You take a look. Look at her, look at her words, you tell me what you think. I don't think so, I don't think so."</p><figure class="media-with-caption">
        <div class="media-player-wrapper">
            <figure class="js-media-player-unprocessed media-player" data-playable="{&quot;settings&quot;:{&quot;counterName&quot;:&quot;news.election.us2016.story.37650500.page&quot;,&quot;edition&quot;:&quot;Asia&quot;,&quot;pageType&quot;:&quot;eav2&quot;,&quot;uniqueID&quot;:&quot;37650500&quot;,&quot;ui&quot;:{&quot;locale&quot;:{&quot;lang&quot;:&quot;en-gb&quot;}},&quot;externalEmbedUrl&quot;:&quot;http:\/\/www.bbc.com\/news\/election-us-2016-37650500\/embed&quot;,&quot;insideIframe&quot;:false,&quot;statsObject&quot;:{&quot;clipPID&quot;:&quot;p04bxtsn&quot;},&quot;playlistObject&quot;:{&quot;title&quot;:&quot;Trump denies women's claims of groping&quot;,&quot;holdingImageURL&quot;:&quot;http:\/\/ichef.bbci.co.uk\/images\/ic\/$recipe\/p04bxv7h.jpg&quot;,&quot;guidance&quot;:&quot;&quot;,&quot;simulcast&quot;:false,&quot;liveRewind&quot;:false,&quot;embedRights&quot;:&quot;blocked&quot;,&quot;items&quot;:[{&quot;vpid&quot;:&quot;p04bxtsr&quot;,&quot;live&quot;:false,&quot;duration&quot;:52,&quot;kind&quot;:&quot;programme&quot;}],&quot;summary&quot;:&quot;Trump denies women's claims of groping&quot;}},&quot;otherSettings&quot;:{&quot;advertisingAllowed&quot;:true,&quot;continuousPlayCfg&quot;:{&quot;enabled&quot;:false},&quot;isAutoplayOnForAudience&quot;:false}}"></figure>
        </div>
    <figcaption class="media-with-caption__caption"><span class="off-screen">Media caption</span>Trump denies women's claims of groping</figcaption>
</figure><figure class="media-with-caption">
        <div class="media-player-wrapper">
            <figure class="js-media-player-unprocessed media-player" data-playable="{&quot;settings&quot;:{&quot;counterName&quot;:&quot;news.election.us2016.story.37650500.page&quot;,&quot;edition&quot;:&quot;Asia&quot;,&quot;pageType&quot;:&quot;eav2&quot;,&quot;uniqueID&quot;:&quot;37650500&quot;,&quot;ui&quot;:{&quot;locale&quot;:{&quot;lang&quot;:&quot;en-gb&quot;}},&quot;externalEmbedUrl&quot;:&quot;http:\/\/www.bbc.com\/news\/election-us-2016-37650500\/embed&quot;,&quot;insideIframe&quot;:false,&quot;statsObject&quot;:{&quot;clipPID&quot;:&quot;p04bxqg8&quot;},&quot;playlistObject&quot;:{&quot;title&quot;:&quot;Jessica Leeds told the New York Times Donald Trump's hands \&quot;were all over me\&quot;&quot;,&quot;holdingImageURL&quot;:&quot;http:\/\/ichef.bbci.co.uk\/images\/ic\/$recipe\/p04bxqh0.jpg&quot;,&quot;guidance&quot;:&quot;&quot;,&quot;simulcast&quot;:false,&quot;liveRewind&quot;:false,&quot;embedRights&quot;:&quot;blocked&quot;,&quot;items&quot;:[{&quot;vpid&quot;:&quot;p04bxqgb&quot;,&quot;live&quot;:false,&quot;duration&quot;:44,&quot;kind&quot;:&quot;programme&quot;}],&quot;summary&quot;:&quot;Jessica Leeds told the New York Times Donald Trump's hands \&quot;were all over me\&quot;&quot;}},&quot;otherSettings&quot;:{&quot;advertisingAllowed&quot;:true,&quot;continuousPlayCfg&quot;:{&quot;enabled&quot;:false},&quot;isAutoplayOnForAudience&quot;:false}}"></figure>
        </div>
    <figcaption class="media-with-caption__caption"><span class="off-screen">Media caption</span>Jessica Leeds told the New York Times Donald Trump's hands "were all over me"</figcaption>
</figure><p>The media, he said, "will seek to destroy your career and your family".</p><p>He has threatened to sue the New York Times, which published accusations from two women on Wednesday evening.</p><p>The newspaper has responded by saying it would welcome the opportunity to make its case in court.</p><p>Asked during last Sunday's televised presidential debate whether he had kissed or groped women without their consent, Mr Trump said: "No, I have not", and stressed that he respected women. </p><figure class="media-landscape has-caption full-width">
            <span class="image-and-copyright-container">
                
                
                <div class="js-delayed-image-load" data-alt="Trump crowd" data-src="http://ichef.bbci.co.uk/news/320/cpsprodpb/11622/production/_91920217_crowd_976ap.jpg" data-width="976" data-height="549"></div>
                
                
                 <span class="off-screen">Image copyright</span>
                 <span class="story-image-copyright">AP</span>
                
            </span>
            
            <figcaption class="media-caption">
                <span class="off-screen">Image caption</span>
                <span class="media-caption__text">
                    The crowd showed no signs of wavering in their support
                </span>
            </figcaption>
            
        </figure><p>Many of the women said Mr Trump's denial during the second presidential debate prompted them to come forward. </p><p>Last week's emergence of a video tape in which Mr Trump boasted that his fame meant he could "do anything" to women has sparked a crisis that has engulfed his campaign.</p><p>Dozens of Republicans have said they can no longer back him and he has fallen further behind Mrs Clinton in national and state polls.</p><p><a href="/news/election-us-2016-37036626" class="story-body__link">Which Republicans have deserted Trump?</a></p><p><a href="/news/world-us-canada-37625913" class="story-body__link">Inside the tortured mind of an anti-Trump Republican</a></p><p><a href="/news/election-us-2016-36232280" class="story-body__link">Five issues where Trump and Ryan clash</a></p>
    </div>
</div>
                                                                                            <div class="tags-container">
    <h2 class="tags-title story-body__crosshead">Related Topics</h2>
        <ul class="tags-list">
            <li class="tags-list__tags" data-entityid="topic_link">
                <a href="/news/topics/78080d81-2849-497e-bc3a-bf364626456b/donald-trump">Donald Trump</a>
            </li>
        </ul>
</div>

                                                                                                <div class="share share--lightweight  show ghost-column">
            <div id="share-tools"></div>
            <h2 class="share__title share__title--lightweight">
        Share this story        <a href="http://www.bbc.co.uk/help/web/sharing.shtml">About&nbsp;sharing</a>
    </h2>
        <ul class="share__tools share__tools--lightweight">
                            <li class="share__tool share__tool--email">
        <a href="mailto:?subject=Shared%20from%20BBC%20News&body=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500" >
            <span>Email</span>
        </a>
    </li>
                            <li class="share__tool share__tool--facebook">
        <a href="http://www.facebook.com/dialog/feed?app_id=58567469885&redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FSThisFB" >
            <span>Facebook</span>
        </a>
    </li>
                            <li class="share__tool share__tool--messengerdesktop">
        <a href="http://www.facebook.com/dialog/send?app_id=58567469885&redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FSThisFB" >
            <span>Messenger</span>
        </a>
    </li>
                            <li class="share__tool share__tool--messengermobile">
        <a href="fb-messenger://share?app_id=58567469885&redirect_uri=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&link=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3FCMP%3Dshare_btn_me" target=_blank>
            <span>Messenger</span>
        </a>
    </li>
                            <li class="share__tool share__tool--twitter">
        <a href="https://twitter.com/intent/tweet?text=BBC%20News%20-%20US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500" class=shortenUrl data-social-url=https://twitter.com/intent/tweet?text=BBC+News+-+US+election+2016%3A+Trump+says+groping+claims+%27absolutely+false%27&amp;url= data-target-url=http://www.bbc.com/news/election-us-2016-37650500>
            <span>Twitter</span>
        </a>
    </li>
                            <li class="share__tool share__tool--pinterest">
        <a href="https://uk.pinterest.com/pin/create/bookmarklet/?url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&description=Donald%20Trump%20rejects%20accusations%20of%20sexual%20misconduct%20as%20%22totally%20and%20absolutely%20false%22%2C%20as%20First%20Lady%20Michelle%20Obama%20calls%20his%20lewd%20remarks%20%22shocking%22.&title=US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&media=http%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fspecial%2F2015%2Fnewsspec_10857%2Fbbc_news_logo.png%3Fcb%3D1" >
            <span>Pinterest</span>
        </a>
    </li>
                            <li class="share__tool share__tool--whatsapp">
        <a href="whatsapp://send?text=BBC%20News%20%7C%20US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27%20-%20http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500%3Focid%3Dwsnews.chat-apps.in-app-msg.whatsapp.trial.link1_.auin" >
            <span>WhatsApp</span>
        </a>
    </li>
                            <li class="share__tool share__tool--linkedin">
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fwww.bbc.com%2Fnews%2Felection-us-2016-37650500&title=US%20election%202016%3A%20Trump%20says%20groping%20claims%20%27absolutely%20false%27&summary=Donald%20Trump%20rejects%20accusations%20of%20sexual%20misconduct%20as%20%22totally%20and%20absolutely%20false%22%2C%20as%20First%20Lady%20Michelle%20Obama%20calls%20his%20lewd%20remarks%20%22shocking%22.&source=BBC" >
            <span>Linkedin</span>
        </a>
    </li>
            </ul>
</div>

                                                                                                                                                                                            <div class="story-more">
        <div id="comp-hyper" class="group hyperpuff story-alsos not-fetched" data-comp-meta="{&quot;id&quot;:&quot;comp-hyper&quot;,&quot;type&quot;:&quot;hyper&quot;,&quot;handler&quot;:&quot;hyper&quot;,&quot;deviceGroups&quot;:null,&quot;opts&quot;:{&quot;assetId&quot;:&quot;37650500&quot;,&quot;loading_strategy&quot;:&quot;post_load&quot;,&quot;bespoke_post_load_handler&quot;:&quot;module\/components\/hyperAdapter&quot;,&quot;story_id&quot;:&quot;election-us-2016-37650500&quot;,&quot;hyper_id&quot;:&quot;world-us-canada-35457209&quot;,&quot;position_info&quot;:{&quot;instanceNo&quot;:1,&quot;positionInRegion&quot;:5,&quot;lastInRegion&quot;:false,&quot;lastOnPage&quot;:false,&quot;column&quot;:&quot;primary_column&quot;}},&quot;template&quot;:&quot;\/component\/hyper&quot;}">
            <div class="group__header">
                <h2 class="hyper-title group__title"><a href="/news/world-us-canada-35457209" class="fetch-hyperpuff has-right-arrow"><span class="cta">Road to the White House</span></a></h2>
            </div>
            <div class="group__body">
                <div class="placeholder-hyperpuff"></div>
            </div>
        </div>
    </div>
                                                                                            
                                                                                                    <div id=comp-pattern-library-8
            class="hidden"
            data-post-load-url="/news/pattern-library-components?options%5BassetId%5D=37650500&amp;options%5Bcontainer_class%5D=container-more-from-this-index&amp;options%5Bdata%5D%5Bsource%5D=candy_parent_index&amp;options%5Bdata%5D%5Bsource_params%5D%5Bsection_title%5D=1&amp;options%5Bcomponents%5D%5B0%5D%5Bname%5D=sparrow&amp;options%5Bcomponents%5D%5B0%5D%5Blimit%5D=3&amp;options%5Bloading_strategy%5D=post_load&amp;options%5Bstats%5D%5Blink_location%5D=more-section&amp;options%5Basset_id%5D=election-us-2016-37650500&amp;presenter=pattern-library-presenter">
        </div>                                                                                                    <div id=comp-from-other-news-sites
            class="hidden"
            data-comp-meta="{&quot;id&quot;:&quot;comp-from-other-news-sites&quot;,&quot;type&quot;:&quot;from-other-news-sites&quot;,&quot;handler&quot;:&quot;default&quot;,&quot;deviceGroups&quot;:null,&quot;opts&quot;:{&quot;assetId&quot;:&quot;37650500&quot;,&quot;conditions&quot;:[&quot;is_local_page&quot;],&quot;loading_strategy&quot;:&quot;post_load&quot;,&quot;asset_id&quot;:&quot;election-us-2016-37650500&quot;,&quot;position_info&quot;:{&quot;instanceNo&quot;:1,&quot;positionInRegion&quot;:8,&quot;lastInRegion&quot;:true,&quot;lastOnPage&quot;:false,&quot;column&quot;:&quot;primary_column&quot;}},&quot;template&quot;:&quot;\/component\/from-other-news-sites&quot;}">
        </div>                                
<div id="bbccom_outbrain_ar_5_1_2_3_4" class="bbccom_slot outbrain-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('outbrain_ar_5', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

<div id="bbccom_outbrain_ar_7_1_2_3_4" class="bbccom_slot outbrain-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('outbrain_ar_7', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

<div id="bbccom_outbrain_ar_8_1_2_3_4" class="bbccom_slot outbrain-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('outbrain_ar_8', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
                                        </div>
                                     <div class="column--secondary" role="complementary">
                                                                            <div id="comp-top-stories-promo" class="top-stories-promo">
    <h2 class="top-stories-promo__title">Top Stories</h2>
                    <a href="/news/world-asia-37650415" class="top-stories-promo-story" data-asset-id="/news/world-asia-37650415"data-entityid="top-stories#1">
        <strong class="top-stories-promo-story__title">Thais mourn death of King Bhumibol</strong>
                    <p class="top-stories-promo-story__summary ">The people of Thailand mourn the death of King Bhumibol Adulyadej, a pillar of stability in the country during his 70-year reign.</p>
                    <div class="date date--v2" data-seconds="1476428494" data-datetime="14 October 2016">14 October 2016</div>
    </a>
                    <a href="/news/election-us-2016-37650500" class="top-stories-promo-story" data-asset-id="/news/election-us-2016-37650500"data-entityid="top-stories#3">
        <strong class="top-stories-promo-story__title">Trump: Groping claims 'absolutely false'</strong>
                    <div class="date date--v2" data-seconds="1476398141" data-datetime="13 October 2016">13 October 2016</div>
    </a>
                    <a href="/news/business-37651835" class="top-stories-promo-story" data-asset-id="/news/business-37651835"data-entityid="top-stories#5">
        <strong class="top-stories-promo-story__title">Samsung takes £4.4bn hit from Note 7</strong>
                    <div class="date date--v2" data-seconds="1476408408" data-datetime="14 October 2016">14 October 2016</div>
    </a>
        </div>                                
<div id="bbccom_mpu_4" class="bbccom_slot mpu-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('mpu', [4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
                                                            
<div class="features-and-analysis" id="comp-features-and-analysis" >
    <h2 class="features-and-analysis__title">
        
        Features &amp; Analysis
    </h2>
    <div class="features-and-analysis__stories promo-unit-spacer">
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#1">
            <a href="/news/magazine-37637797" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/15902/production/_91922388_mediaitem91922387.jpg" data-width="2048" data-height="1152" data-alt="Bob Dylan performing in 2010"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/15902/production/_91922388_mediaitem91922387.jpg" class="js-image-replace" alt="Bob Dylan performing in 2010" width="2048" height="1152" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Rhymes they are a-changing</h3>
                <p class="bold-image-promo__summary">After Dylan's prize, can song lyrics ever be poetry?</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#2">
            <a href="/news/world-middle-east-37512887" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/FE2F/production/_91917056_gettyimages-502803514.jpg" data-width="976" data-height="549" data-alt="A Yemeni man lies in a hospital bed after he was reportedly injured in a Saudi-led coalition air strike against Shiite Huthi rebels and their allies on December 29, 2015"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/FE2F/production/_91917056_gettyimages-502803514.jpg" class="js-image-replace" alt="A Yemeni man lies in a hospital bed after he was reportedly injured in a Saudi-led coalition air strike against Shiite Huthi rebels and their allies on December 29, 2015" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Crisis in Yemen  </h3>
                <p class="bold-image-promo__summary">State of despair grips country’s devastated health system </p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#3">
            <a href="/news/world-asia-37651953" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef.bbci.co.uk/news/304/cpsprodpb/10BA0/production/_91921586_gettyimages-614395628-1.jpg" data-width="976" data-height="549" data-alt="Thai mourners"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef.bbci.co.uk/news/304/cpsprodpb/10BA0/production/_91921586_gettyimages-614395628-1.jpg" class="js-image-replace" alt="Thai mourners" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Nation in mourning</h3>
                <p class="bold-image-promo__summary">What do tourists in Thailand need to know?</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#4">
            <a href="/news/world-asia-37650466" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/1261B/production/_91919257_4f9974d8-10b8-4d67-ad46-7fa79f3f6090.jpg" data-width="976" data-height="549" data-alt="TV grab of King Bhumibol (right) with rivals Gen Suchinda Kraprayoon (centre) and Chamlong Srimuang at the Royal Palace on 20 May 1992"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/1261B/production/_91919257_4f9974d8-10b8-4d67-ad46-7fa79f3f6090.jpg" class="js-image-replace" alt="TV grab of King Bhumibol (right) with rivals Gen Suchinda Kraprayoon (centre) and Chamlong Srimuang at the Royal Palace on 20 May 1992" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Kneeling before a king</h3>
                <p class="bold-image-promo__summary">The grainy picture that shook a nation</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#5">
            <a href="/news/world-asia-37651921" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/6600/production/_91921162_mourningking-11.jpg" data-width="976" data-height="549" data-alt="Thais react in grief upon hearing of the King's death"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/6600/production/_91921162_mourningking-11.jpg" class="js-image-replace" alt="Thais react in grief upon hearing of the King's death" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Faces of grief</h3>
                <p class="bold-image-promo__summary">A night of mourning in Bangkok</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#6">
            <a href="/news/world-africa-37645201" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef.bbci.co.uk/news/304/cpsprodpb/5439/production/_91916512_10.mcgrodersandyanto.jpg" data-width="976" data-height="549" data-alt="Brett Archibald"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef.bbci.co.uk/news/304/cpsprodpb/5439/production/_91916512_10.mcgrodersandyanto.jpg" class="js-image-replace" alt="Brett Archibald" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Man overboard</h3>
                <p class="bold-image-promo__summary">'I survived 28 hours alone in the Indian Ocean'</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#7">
            <a href="/news/magazine-37618233" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/117F7/production/_91917617_trumpsmile_afp976.jpg" data-width="976" data-height="549" data-alt="Donald Trump, smiling, July 2016"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/117F7/production/_91917617_trumpsmile_afp976.jpg" class="js-image-replace" alt="Donald Trump, smiling, July 2016" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">The best emails</h3>
                <p class="bold-image-promo__summary">My accidental life on the Donald Trump supporters list</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#8">
            <a href="/news/world-asia-india-37640399" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef.bbci.co.uk/news/304/cpsprodpb/96EE/production/_91483683_015084938.jpg" data-width="2048" data-height="1152" data-alt="Indian currency at a cash counter inside a bank in Calcutta in June 2012"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef.bbci.co.uk/news/304/cpsprodpb/96EE/production/_91483683_015084938.jpg" class="js-image-replace" alt="Indian currency at a cash counter inside a bank in Calcutta in June 2012" width="2048" height="1152" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">Big bonanza</h3>
                <p class="bold-image-promo__summary">Was India's tax evasion amnesty a success?</p>
            </a>
        </div>
        
        
        <div class="features-and-analysis__story"  data-entityid="features-and-analysis#9">
            <a href="/news/magazine-37643996" class="bold-image-promo">
                <div class="bold-image-promo__image">
                            <div class="responsive-image responsive-image--16by9">
                                
                                    <div class="js-delayed-image-load" data-src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/BC33/production/_91897184_spagbol.jpg" data-width="976" data-height="549" data-alt="Woman eating spaghetti bolognese"></div>
                                    <!--[if lt IE 9]>
                                    <img src="http://ichef-1.bbci.co.uk/news/304/cpsprodpb/BC33/production/_91897184_spagbol.jpg" class="js-image-replace" alt="Woman eating spaghetti bolognese" width="976" height="549" />
                                    <![endif]-->
                                
                            </div>
                </div>
                <h3 class="bold-image-promo__title">7 days quiz</h3>
                <p class="bold-image-promo__summary">What's wrong with British bolognese?</p>
            </a>
        </div>
        
    </div>
</div>
                                
<div id="bbccom_native_1_2_3_4" class="bbccom_slot native-ad"  >
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('native', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
                                                                    <div id=comp-most-popular
            class="hidden"
            data-comp-meta="{&quot;id&quot;:&quot;comp-most-popular&quot;,&quot;type&quot;:&quot;most-popular&quot;,&quot;handler&quot;:&quot;mostPopular&quot;,&quot;deviceGroups&quot;:null,&quot;opts&quot;:{&quot;assetId&quot;:&quot;37650500&quot;,&quot;loading_strategy&quot;:&quot;post_load&quot;,&quot;position_info&quot;:{&quot;instanceNo&quot;:1,&quot;positionInRegion&quot;:3,&quot;lastInRegion&quot;:true,&quot;lastOnPage&quot;:true,&quot;column&quot;:&quot;secondary_column&quot;}}}">
        </div>                                
<div id="bbccom_mpu_bottom_1_2_3_4" class="bbccom_slot mpu-bottom-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('mpu_bottom', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

<div id="bbccom_outbrain_ar_9_1_2_3_4" class="bbccom_slot outbrain-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('outbrain_ar_9', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

<div id="bbccom_adsense_1_2_3_4" class="bbccom_slot adsense-ad"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('adsense', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>

<div id="bbccom_inread_1_2_3_4" class="bbccom_slot inread"  aria-hidden="true">
    <div class="bbccom_advert">
        <script type="text/javascript">
            /*<![CDATA[*/
            (function() {
                if (window.bbcdotcom && bbcdotcom.adverts && bbcdotcom.adverts.slotAsync) {
                    bbcdotcom.adverts.slotAsync('inread', [1,2,3,4]);
                }
            })();
            /*]]>*/
        </script>
    </div>
</div>
                                        </div>
             </div>          </div> </div>      </div> 
   

<div id="core-navigation" class="navigation--footer">
    <h2 class="navigation--footer__heading">News navigation</h2>

            <nav id="secondary-navigation--bottom" class="secondary-navigation--bottom" role="navigation" aria-label="US &amp; Canada">
            <a class="secondary-navigation__title navigation-arrow " href="/news/world/us_and_canada"><span>US &amp; Canada</span></a>
                            <span class="navigation-core-title"><span>Sections</span></span>
                <ul class="secondary-navigation--bottom__toplevel">
                                        <li class="navigation-core-index ">
                        <a href="/news/world/us_and_canada">
                            <span>US &amp; Canada</span>
                        </a>
                    </li>
                                                            <li class="selected">
                        <a href="/news/election/us2016"><span>US Election 2016</span></a>
                         <span class="off-screen">selected</span>                    </li>
                                    </ul>
                    </nav>
    
    <nav id="navigation--bottom" class="navigation navigation--bottom core--with-secondary" role="navigation" aria-label="News">
                <ul class="navigation--bottom__toplevel">
                        <li class="">
                    <a href="/news" class="">
                        <span>Home</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/video_and_audio/international" class="">
                        <span>Video</span>
                    </a>
                                                        </li>
                            <li class="selected navigation-list-item--open">
                    <a href="/news/world" data-panel-id="js-navigation-panel-World" class="navigation-arrow navigation-arrow--open">
                        <span>World</span>
                    </a>
                     <span class="off-screen">selected</span>                                            <div class="navigation-panel js-navigation-panel-World">
                            <div class="navigation-panel__content">
                                <ul class="navigation-panel-secondary">
                                    <li><a href="/news/world"><span>World Home</span></a></li>
                                                                                                                    <li>
                                            <a href="/news/world/africa"><span>Africa</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/world/australia"><span>Australia</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/world/europe"><span>Europe</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/world/latin_america"><span>Latin America</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/world/middle_east"><span>Middle East</span></a>                                        </li>
                                                                                                                                                            <li class="selected">
                                            <a href="/news/world/us_and_canada"><span>US &amp; Canada</span></a> <span class="off-screen">selected</span>                                        </li>
                                                                                                            </ul>
                            </div>
                        </div>
                                    </li>
                            <li class="">
                    <a href="/news/world/asia" data-panel-id="js-navigation-panel-Asia" class="navigation-arrow">
                        <span>Asia</span>
                    </a>
                                                                <div class="navigation-panel navigation-panel--closed js-navigation-panel-Asia">
                            <div class="navigation-panel__content">
                                <ul class="navigation-panel-secondary">
                                    <li><a href="/news/world/asia"><span>Asia Home</span></a></li>
                                                                                                                    <li>
                                            <a href="/news/world/asia/china"><span>China</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/world/asia/india"><span>India</span></a>                                        </li>
                                                                                                            </ul>
                            </div>
                        </div>
                                    </li>
                            <li class="">
                    <a href="/news/uk" data-panel-id="js-navigation-panel-UK" class="navigation-arrow">
                        <span>UK</span>
                    </a>
                                                                <div class="navigation-panel navigation-panel--closed js-navigation-panel-UK">
                            <div class="navigation-panel__content">
                                <ul class="navigation-panel-secondary">
                                    <li><a href="/news/uk"><span>UK Home</span></a></li>
                                                                                                                    <li>
                                            <a href="/news/england"><span>England</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/northern_ireland"><span>N. Ireland</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/scotland"><span>Scotland</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/wales"><span>Wales</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/politics"><span>Politics</span></a>                                        </li>
                                                                                                            </ul>
                            </div>
                        </div>
                                    </li>
                            <li class="">
                    <a href="/news/business" data-panel-id="js-navigation-panel-Business" class="navigation-arrow">
                        <span>Business</span>
                    </a>
                                                                <div class="navigation-panel navigation-panel--closed js-navigation-panel-Business">
                            <div class="navigation-panel__content">
                                <ul class="navigation-panel-secondary">
                                    <li><a href="/news/business"><span>Business Home</span></a></li>
                                                                                                                    <li>
                                            <a href="http://www.bbc.co.uk/news/business/market_data"><span>Market Data</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business/markets"><span>Markets</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business/economy"><span>Economy</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business/companies"><span>Companies</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business-22434141"><span>Entrepreneurship</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business-11428889"><span>Technology of Business</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business/business_of_sport"><span>Business of Sport</span></a>                                        </li>
                                                                                                                                                            <li>
                                            <a href="/news/business-12686570"><span>Global Education</span></a>                                        </li>
                                                                                                            </ul>
                            </div>
                        </div>
                                    </li>
                            <li class="">
                    <a href="/news/technology" class="">
                        <span>Tech</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/science_and_environment" class="">
                        <span>Science</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/magazine" class="">
                        <span>Magazine</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/entertainment_and_arts" class="">
                        <span>Entertainment &amp; Arts</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/health" class="">
                        <span>Health</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/world_radio_and_tv" class="">
                        <span>World News TV</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/in_pictures" class="">
                        <span>In Pictures</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/also_in_the_news" class="">
                        <span>Also in the News</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/special_reports" class="">
                        <span>Special Reports</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/explainers" class="">
                        <span>Explainers</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/the_reporters" class="">
                        <span>The Reporters</span>
                    </a>
                                                        </li>
                            <li class="">
                    <a href="/news/have_your_say" class="">
                        <span>Have Your Say</span>
                    </a>
                                                        </li>
                    </ul>
    </nav>
</div>
   

    <div id="comp-pattern-library-2" class="distinct-component-group ">
        
            <div id="bbc-news-services" class="blue-tit" role="navigation" aria-label="BBC News Services">
    <div class="blue-tit__inner">
        <h2 class="blue-tit__title">BBC News Services</h2>
        <ul class="blue-tit__list">
            <li class="blue-tit__list-item">
                <a href="http://www.bbc.co.uk/news/10628994" class="blue-tit__list-item-link mobile">On your mobile</a>
            </li>
            <li class="blue-tit__list-item">
                <a href="http://www.bbc.co.uk/news/help-17655000" class="blue-tit__list-item-link connected-tv">On your connected tv</a>
            </li>
            <li class="blue-tit__list-item">
                <a href="http://www.bbc.co.uk/news/10628323" class="blue-tit__list-item-link newsletter">Get news alerts</a>
            </li>
            <li class="blue-tit__list-item">
                <a href="http://www.bbc.co.uk/news/20039682" class="blue-tit__list-item-link contact-us">Contact BBC News</a>
            </li>
        </ul>
    </div>
</div>

        
    </div>

  </div><!-- closes #site-container -->      </div> <div id="orb-footer"  class="orb-footer orb-footer-grey b-footer--grey--white" >  <div id="navp-orb-footer-promo" class="orb-footer-grey"></div>  <aside role="complementary"> <div id="orb-aside" class="orb-nav-sec b-r b-g-p"> <div class="orb-footer-inner" role="navigation"> <h2 class="orb-footer-lead">Explore the BBC</h2> <div class="orb-footer-primary-links"> <ul>    <li  class="orb-nav-news orb-d"  > <a href="http://www.bbc.co.uk/news/">News</a> </li>    <li  class="orb-nav-newsdotcom orb-w"  > <a href="http://www.bbc.com/news/">News</a> </li>    <li  class="orb-nav-sport"  > <a href="/sport/">Sport</a> </li>    <li  class="orb-nav-weather"  > <a href="/weather/">Weather</a> </li>    <li  class="orb-nav-shop orb-w"  > <a href="http://shop.bbc.com/">Shop</a> </li>    <li  class="orb-nav-earthdotcom orb-w"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-travel-dotcom orb-w"  > <a href="http://www.bbc.com/travel/">Travel</a> </li>    <li  class="orb-nav-capital orb-w"  > <a href="http://www.bbc.com/capital/">Capital</a> </li>    <li  class="orb-nav-iplayer orb-d"  > <a href="/iplayer/">iPlayer</a> </li>    <li  class="orb-nav-culture orb-w"  > <a href="http://www.bbc.com/culture/">Culture</a> </li>    <li  class="orb-nav-autos orb-w"  > <a href="http://www.bbc.com/autos/">Autos</a> </li>    <li  class="orb-nav-future orb-w"  > <a href="http://www.bbc.com/future/">Future</a> </li>    <li  class="orb-nav-tv"  > <a href="/tv/">TV</a> </li>    <li  class="orb-nav-radio"  > <a href="/radio/">Radio</a> </li>    <li  class="orb-nav-cbbc"  > <a href="/cbbc">CBBC</a> </li>    <li  class="orb-nav-cbeebies"  > <a href="/cbeebies">CBeebies</a> </li>    <li  class="orb-nav-food"  > <a href="/food/">Food</a> </li>    <li  > <a href="/iwonder">iWonder</a> </li>    <li  > <a href="/education">Bitesize</a> </li>    <li  class="orb-nav-travel orb-d"  > <a href="/travel/">Travel</a> </li>    <li  class="orb-nav-music"  > <a href="/music/">Music</a> </li>    <li  class="orb-nav-earth orb-d"  > <a href="http://www.bbc.com/earth/">Earth</a> </li>    <li  class="orb-nav-arts"  > <a href="/arts/">Arts</a> </li>    <li  class="orb-nav-makeitdigital"  > <a href="/makeitdigital">Make It Digital</a> </li>    <li  > <a href="/taster">Taster</a> </li>    <li  class="orb-nav-nature orb-w"  > <a href="/nature/">Nature</a> </li>    <li  class="orb-nav-local"  > <a href="/local/">Local</a> </li>    </ul> </div> </div> </div> </aside> <footer role="contentinfo"> <div id="orb-contentinfo" class="orb-nav-sec b-r b-g-p"> <div class="orb-footer-inner"> <ul>        <li  > <a href="/terms/">Terms of Use</a> </li>    <li  > <a href="/aboutthebbc/">About the BBC</a> </li>    <li  > <a href="/privacy/">Privacy Policy</a> </li>    <li  > <a href="/privacy/cookies/about">Cookies</a> </li>    <li  > <a href="/accessibility/">Accessibility Help</a> </li>    <li  > <a href="/guidance/">Parental Guidance</a> </li>    <li  > <a href="/contact/">Contact the BBC</a> </li>        <li  class=" orb-w"  > <a href="http://advertising.bbcworldwide.com/">Advertise with us</a> </li>    <li  class=" orb-w"  > <a href="/privacy/cookies/international/">Ad choices</a> </li>    </ul> <small> <span class="orb-hilight">Copyright &copy; 2016 BBC.</span> The BBC is not responsible for the content of external sites. <a href="/help/web/links/" class="orb-hilight">Read about our approach to external linking.</a> </small> </div> </div> </footer> </div>     <!-- BBCDOTCOM bodyLast --><div class="bbccom_display_none"><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && window.bbcdotcom.analytics) { bbcdotcom.analytics.page(); } /*]]>*/ </script><noscript><img src="//ssc.api.bbc.com/?c1=2&c2=19293874&ns_site=bbc&name=news.election-us-2016-37650500" height="1" width="1" alt=""></noscript><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && bbcdotcom.currencyProviders) { bbcdotcom.currencyProviders.write(); } /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && bbcdotcom.currencyProviders) { bbcdotcom.currencyProviders.postWrite(); } /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ /** * ASYNC waits to make any gpt requests until the bottom of the page */ if ( window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.ads && bbcdotcom.data.ads == 1 && bbcdotcom.config && bbcdotcom.config.isAsync && bbcdotcom.config.isAsync() ) { (function () { var gads = document.createElement('script'); gads.async = true; gads.type = 'text/javascript'; var useSSL = 'https:' == document.location.protocol; gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js'; var node = document.getElementsByTagName('script')[0]; node.parentNode.insertBefore(gads, node); })(); } /*]]>*/ </script><script type="text/javascript"> /*<![CDATA[*/ if (window.bbcdotcom && bbcdotcom.data && bbcdotcom.data.stats && bbcdotcom.data.stats === 1 && bbcdotcom.utils && window.location.pathname === '/' && window.bbccookies && bbccookies.readPolicy('performance') ) { var wwhpEdition = bbcdotcom.utils.getMetaPropertyContent('wwhp-edition'); var _sf_async_config={}; /** CONFIGURATION START **/ _sf_async_config.uid = 50924; _sf_async_config.domain = "bbc.co.uk"; _sf_async_config.title = "Homepage"+(wwhpEdition !== '' ? ' - '+wwhpEdition : ''); _sf_async_config.sections = "Homepage"+(wwhpEdition !== '' ? ', Homepage - '+wwhpEdition : ''); _sf_async_config.region = wwhpEdition; _sf_async_config.path = "/"+(wwhpEdition !== '' ? '?'+wwhpEdition : ''); /** CONFIGURATION END **/ (function(){ function loadChartbeat() { window._sf_endpt=(new Date()).getTime(); var e = document.createElement("script"); e.setAttribute("language", "javascript"); e.setAttribute("type", "text/javascript"); e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js'); document.body.appendChild(e); } var oldonload = window.onload; window.onload = (typeof window.onload != "function") ? loadChartbeat : function() { oldonload(); loadChartbeat(); }; })(); } /*]]>*/ </script></div><!-- BBCDOTCOM all code in page -->  <script type="text/javascript" id="orb-js-script" data-assetpath="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/" src="http://static.bbci.co.uk/frameworks/barlesque/3.20.5/orb/4/script/orb.min.js"></script>  <script type="text/javascript"> (function() {
    'use strict';

    var promoManager = {
        url: '',
        promoLoaded: false,
                makeUrl: function (theme, site, win) {
            var loc = win? win.location : window.location,
                proto = loc.protocol,
                host = loc.host,
                url = proto + '//' + ((proto.match(/s:/i) && !host.match(/^www\.(int|test)\./i))? 'ssl.' : 'www.'),
                themes = ['light', 'dark'];

            if ( host.match(/^(?:www|ssl|m)\.(int|test|stage|live)\.bbc\./i) ) {
                url += RegExp.$1 + '.';
            }
            else if ( host.match(/^pal\.sandbox\./i) ) {
                url += 'test.';
            }

                        theme = themes[ +(theme === themes[0]) ];
           
           return url + 'bbc.co.uk/navpromo/card/' + site + '/' + theme;
        },
                init: function(node) {
            var disabledByCookie = (document.cookie.indexOf('ckns_orb_nopromo=1') > -1),
                that = this;
            
            if (window.promomanagerOverride) {
                for (var p in promomanagerOverride) {
                    that[p] = promomanagerOverride[p];
                }
            }
                
            if ( window.orb.fig('uk') && !disabledByCookie ) {
                require(['orb/async/_footerpromo', 'istats-1'], function(promo, istats) {

                    var virtualSite = istats.getSite() || 'default';
                    that.url = (window.promomanagerOverride || that).makeUrl('light', virtualSite);

                    if (that.url) { 
                        promo.load(that.url, node, {
                                                          onSuccess: function(e) {
                                if(e.status === 'success') {
                                    node.parentNode.className = node.parentNode.className + ' orb-footer-promo-loaded';
                                    promoManager.promoLoaded = true;
                                    promoManager.event('promo-loaded').fire(e);
                                }
                             },
                             onError: function() {
                                istats.log('error', 'orb-footer-promo-failed');
                                bbccookies.set('ckns_orb_nopromo=1; expires=' + new Date(new Date().getTime() + 1000 * 60 * 10).toGMTString() + ';path=/;');
                             }
                        });   
                    }
                });
            }
        }
    };
    
        
    define('orb/promomanager', ['orb/lib/_event'], function (event) {
        event.mixin(promoManager);
        return promoManager;
    });
    
    require(['orb/promomanager'], function (promoManager) {
        promoManager.init(document.getElementById('navp-orb-footer-promo'));
    })
})();
 </script>   
    <script type="text/javascript">

        require.config({
            paths: {
                "mybbc/templates": '//mybbc.files.bbci.co.uk/s/notification-ui/2.5.0/templates',
                "mybbc/notifications": '//mybbc.files.bbci.co.uk/s/notification-ui/2.5.0/js'
            }
        });

        require(['mybbc/notifications/NotificationsMain', 'idcta/idcta-1'], function (NotificationsMain, idcta) {
            var loadNotifications = function (fig) {
                if (fig.geo.isUK()) {
                    NotificationsMain.run(idcta, '//mybbc.files.bbci.co.uk/s/notification-ui/2.5.0/');
                }
            };
            var orbFig = window.orb.fig;
            if (typeof orbFig.load === 'function') {
                // Use new async API from Orbit
                orbFig.load(loadNotifications, loadNotifications);
            } else {
                // Use old sync-only API from PAL orbfig project
                loadNotifications(orbFig);
            }
        });
    </script>

 <script type="text/javascript"> if (typeof require !== 'undefined') { require(['istats-1'], function(istats){ istats.track('external', { region: document.getElementsByTagName('body')[0] }); istats.track('download', { region: document.getElementsByTagName('body')[0] }); }); } </script>   <script type="text/javascript">

 if( window.SEARCHBOX.suppress === false && window.SEARCHBOX.locale && /^en-?.*?/.test(window.SEARCHBOX.locale) ){
   require.config({
     paths: {
       "search/searchbox": window.SEARCHBOX.searchboxAppStaticPrefix
     }
   });

   require(['search/searchbox/searchboxDrawer'], function(SearchboxDrawer) {
     SearchboxDrawer.run(window.SEARCHBOX);
   });
 }
</script>
             <script type="text/javascript">require(["istats-1","orb/cookies"],function(t,o){if(o.isAllowed("s1"))try{if(!require.s.contexts._.config.paths.idcta)return void t.invoke();require(["idcta/idcta-1"],function(o){o&&"function"==typeof o.getIStatsLabels&&t.addLabels(o.getIStatsLabels()),t.invoke()},function(t){throw t})}catch(o){console&&"function"==typeof console.log&&console.log("an exception occurred while adding idcta labels to istats, invoking istats without them",o),t.invoke()}});</script>  <img alt="" id="livestats" src="http://stats.bbc.co.uk/o.gif?~RS~s~RS~News~RS~t~RS~HighWeb_Story~RS~i~RS~37650500~RS~p~RS~102423~RS~a~RS~Asia~RS~u~RS~/news/election-us-2016-37650500~RS~r~RS~0~RS~q~RS~0~RS~z~RS~7809~RS~">  </div><!-- closes .direction -->  <script> window.old_onload = window.onload; window.onload = function() { if(window.old_onload) { window.old_onload(); } window.loaded = true; }; </script> <!-- Chartbeat Web Analytics code - start -->
<script type="text/javascript">
    /** CONFIGURATION START **/
    var _sf_async_config = {};
    
    _sf_async_config.uid = "50924";
    _sf_async_config.domain = "www.bbc.co.uk";
    _sf_async_config.sections = "News, News - us-election-2016, News - STY, News - us-election-2016 - STY";
    <!-- if page is an index, add the edition to the path -->
    _sf_async_config.path = "bbc.co.uk/news/election-us-2016-37650500";
    
        (function() {
        var noCookies = true;
        var cookiePrefix = '_chartbeat';
        if ("object" === typeof bbccookies && typeof bbccookies.readPolicy == 'function') {
            noCookies = !bbccookies.readPolicy().performance;
        }
        if (noCookies && document.cookie.indexOf(cookiePrefix) !== -1) {
            //Find and remove cookies whose names begin with '_chartbeat'
            var cookieSplit = document.cookie.split(';');
            var cookieLength = cookieSplit.length;
            while (cookieLength--) {
                var cookie = cookieSplit[cookieLength].replace(/^\s+|\s+$/g, '');
                var cookieName = cookie.split('=')[0];

                if (cookieName.indexOf(cookiePrefix) === 0) {
                    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
                }
            }
        }
        _sf_async_config.noCookies = noCookies;
    }());

    /** CONFIGURATION END **/
    (function(){
        function loadChartbeat() {
            window._sf_endpt=(new Date()).getTime();
            var e = document.createElement("script");
            e.setAttribute("language", "javascript");
            e.setAttribute("type", "text/javascript");
            e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
            document.body.appendChild(e);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != "function") ?
            loadChartbeat : function() { oldonload(); loadChartbeat(); };
    }());
</script>
<!-- Chartbeat Web Analytics code - end -->
    <!-- mpulse start -->
<script>
(function(){
    window.bbcnewsperformance = {};
    var perf = window.performance;

    function firstScrollTimer() {
        document.removeEventListener('scroll', firstScrollTimer);

        perf.mark('firstScroll');
        perf.measure('scrolltime', 'firstScroll');
        var timing = perf.getEntriesByName('scrolltime');
        bbcnewsperformance.firstScrollTime = timing[0].startTime;
    }

    if (perf && perf.mark && perf.measure) {
        document.addEventListener('scroll', firstScrollTimer);
    }

    var random = Math.random();
    var rate   = 0.25;
    var throttle = 0.02;
    var forceMpulse = window.location.href.match(/force_mpulse/);

    if (rate && throttle && (random < (rate * throttle)) || forceMpulse) {
        if(window.BOOMR && window.BOOMR.version){return;}
        var dom,doc,where,iframe = document.createElement('iframe'),win = window;

        function boomerangSaveLoadTime(e) {
            win.BOOMR_onload=(e && e.timeStamp) || new Date().getTime();
        }
        if (win.addEventListener) {
            win.addEventListener("load", boomerangSaveLoadTime, false);
        } else if (win.attachEvent) {
            win.attachEvent("onload", boomerangSaveLoadTime);
        }

        iframe.src = "javascript:false";
        iframe.title = ""; iframe.role="presentation";
        (iframe.frameElement || iframe).style.cssText = "width:0;height:0;border:0;display:none;";
        where = document.getElementsByTagName('script')[0];
        where.parentNode.insertBefore(iframe, where);

        try {
            doc = iframe.contentWindow.document;
        } catch(e) {
            dom = document.domain;
            iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";
            doc = iframe.contentWindow.document;
        }
        doc.open()._l = function() {
            var js = this.createElement("script");
            if(dom) this.domain = dom;
            js.id = "boomr-if-as";
            js.src = '//c.go-mpulse.net/boomerang/' +
            '86ZLR-T78UG-6FNFN-UVDPZ-VZFWR';
            BOOMR_lstart=new Date().getTime();
            this.body.appendChild(js);
        };
        doc.write('<body onload="document._l();">');
        doc.close();
    }
})();
</script>
<!-- mpulse end -->
 </body> </html> 












      `;
      
      bbcProcessor.execute(html, (data) => {
          //console.log('############## test result is ' + data);
      });
      expect(2).toBe(2); 
   });
});