angular.module("glossaryApp",["ngStorage"]).run(function(){"use strict";"9000"!==window.location.port&&(appCacheNanny.start(),appCacheNanny.on("updateready",function(){location.reload(!0)}))}),angular.module("glossaryApp").controller("GlossaryCtrl",["$scope","$http","glossaryData",function(a,b,c){"use strict";c().then(function(b){a.terms=b},function(a){console.log("oops",a)})}]),angular.module("glossaryApp").service("glossaryData",["$http","$q","$localStorage",function(a,b,c){"use strict";var d,e="https://script.google.com/macros/s/AKfycbw_6cOyOuvow4c1MXSvBCK3bLKyZU1nkiY55SKlucoa7EOEgXZv/exec?callback=JSON_CALLBACK",f=a.jsonp(e);return d=c[e]?b.when(c[e]):f,f.then(function(a){c[e]=a}),function(){return d.then(function(a){return a.data.map(function(a){return{name:a[0],explanation:a[1],type:a[2],description:a[3],synonyms:a[4]}})})}}]),angular.module("glossaryApp").filter("highlight",["$sce",function(a){"use strict";return function(b,c){var d=b.match(/<a.*(?=<\/a>)<\/a>/,"gi");return d&&d.forEach(function(a,c){b=b.replace(new RegExp("("+a+")","i"),"§§"+c)}),c&&(b=b.replace(new RegExp("("+c+")","gi"),'<span class="highlighted">$1</span>')),d&&d.forEach(function(a,d){b=""!==c&&a.match(new RegExp("("+c+")","gi"))?b.replace("§§"+d,'<span class="highlighted">'+a+"</span>"):b.replace("§§"+d,a)}),a.trustAsHtml(b)}}]),angular.module("glossaryApp").filter("linkify",function(){"use strict";return function(a){var b,c,d,e;return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,'<a href="$1" target="_blank">link</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,'$1<a href="http://$2" target="_blank">$2</a>'),e=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,b=b.replace(e,'<a href="mailto:$1">$1</a>')}}),angular.module("glossaryApp").filter("rawHtml",["$sce",function(a){"use strict";return function(b){return a.trustAsHtml(b)}}]);