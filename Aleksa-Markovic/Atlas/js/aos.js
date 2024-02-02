//moj javascript//
console.log("provera konzole");


function provera() {
    var imeJeValidno = proveraIme();
    var prezimeJeValidno = proveraPrezime();
    var pasvordJeValidan=proveraLozinka();
    var proveraPasvordajeValidna=proveraUneteLozinke()
    var emailJeValidan=proveraEmail();

    return imeJeValidno && prezimeJeValidno && pasvordJeValidan && proveraPasvordajeValidna && emailJeValidan;
}

var proveraImena = /^[A-ZŠĐČĆ][a-zšđžčć]{1,10}$/;
function proveraIme()
{
    var tekst = document.getElementById("name").value;
    var moretext=document.getElementById("moretext")
    if (tekst === "") {

        moretext.innerHTML = "The name fild can't be empty";
        moretext.classList.add("tocolor");
        return false;
    }
    else if (proveraImena.test(tekst))
    {
        document.getElementById("moretext").innerHTML="Name is succsesfully written ";
        moretext.classList.remove("tocolor");
        return true ;

    }

    else{
        document.getElementById("moretext").innerHTML="Name is not succesfully written, it must start with capital letter and only can be text ";

        moretext.classList.add("tocolor");
        return false;
    }
};


var proveraPrezimena = /^[A-ZŠĐŽČĆ]+[a-zšđžčć]{2,15}$/;
function proveraPrezime()
{
    var tekst1 = document.getElementById("surname").value;
    var moretext1=document.getElementById("moretext1")
    if (tekst1 === "") {

        moretext1.innerHTML = "The name fild can't be empty";
        moretext1.classList.add("tocolor");
        return false;
    }
    else if (proveraPrezimena.test(tekst1))
    {
        document.getElementById("moretext1").innerHTML="Surname is succsesfully written ";
        moretext1.classList.remove("tocolor");
        return true ;

    }

    else{
        document.getElementById("moretext1").innerHTML="Surname is not succesfully written, it must start with capital letter and only can be text ";

        moretext1.classList.add("tocolor");
        return false;
    }
};

var proveraLozinke = /^[A-zšđžčć\d?!@$%&]{8,20}$/;
function proveraLozinka(){
    var tekst3 = document.getElementById("password").value;
    var moretext2=document.getElementById("moretext2")
    if (tekst3 === "") {

        moretext2.innerHTML = "The password fild can't be empty";
        moretext2.classList.add("tocolor");
        return false;
    }
    else if (proveraLozinke.test(tekst3))
    {
        document.getElementById("moretext2").innerHTML="Password is succsesfully written ";
        moretext2.classList.remove("tocolor");
        return true ;

    }

    else{
        document.getElementById("moretext2").innerHTML="Password most contain 8 leters(simbols)";

        moretext2.classList.add("tocolor");
        return false;
    }
};

function proveraUneteLozinke()
{
    var tekst4 = document.getElementById("confirmpassword").value;
    var tekst5 = document.getElementById("password").value;
    var moretext3=document.getElementById("moretext3")
    if (tekst4 === "") {

        moretext3.innerHTML = "The password fild can't be empty";
        moretext3.classList.add("tocolor");
        return false;
    }
    else if (tekst5===tekst4)
    {
        document.getElementById("moretext3").innerHTML="Password is succsesfully written";
        moretext3.classList.remove("tocolor");
        return true ;

    }

    else{
        document.getElementById("moretext3").innerHTML="Password is not the same";

        moretext3.classList.add("tocolor");
        return false;
}
}

var proveraEmaila = /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/;
function proveraEmail()
{
    var tekst6 = document.getElementById("email").value;
    var moretext4=document.getElementById("moretext4")
    if (tekst6 === "") {

        moretext4.innerHTML = "The email fild can't be empty";
         moretext4.classList.remove("tocolor");
        moretext4.classList.add("tocolor");
        return false;
    }
    else if (proveraEmaila.test(tekst6))
    {
        document.getElementById("moretext4").innerHTML="Email is succsesfully written ";
        moretext4.classList.remove("tocolor");
        moretext4.classList.add("tocolor1");
        return true ;

    }

    else{
        document.getElementById("moretext4").innerHTML="Email must start with letter and have @. Exemple: aleksa.markovic.134.22@ict.edu.rs ";

        moretext4.classList.add("tocolor");
        return false;
    }
};
document.addEventListener('DOMContentLoaded', function() {
    var hiddenText = document.getElementById('hiddenText');
    var toggleButton = document.getElementById('button1');

    toggleButton.addEventListener('click', function() {

        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
            toggleButton.textContent='Hide';
        } else {
            hiddenText.style.display = 'none';
            toggleButton.textContent='Learn More';
        }


    });
});


document.addEventListener('DOMContentLoaded', function() {
    var hiddenText = document.getElementById('hiddenText2');
    var toggleButton = document.getElementById('button2');

    toggleButton.addEventListener('click', function() {

        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
            toggleButton.textContent='Hide';
        } else {
            hiddenText.style.display = 'none';
            toggleButton.textContent='Learn More';
        }


    });
});



$(document).ready(function () {
    var images = ['img/banner-bk.jpg', 'img/biznis.jpg','img/biznis1.jpg'];
    var currentImage = 0;

    function changeBackground() {
        $('#banner').css('background-image', 'url(' + images[currentImage] + ')').fadeIn(1000, function () {
            $(this).animate(1000);
        });

        currentImage = (currentImage + 1) % images.length;
    }


    $('#banner').css('background-image', 'url(' + images[currentImage] + ')');

    setInterval(changeBackground, 3000);
});




    function zoomIn(element) {
        element.style.transform = "scale(1.2)";
        element.style.transition = "transform 0.3s ease";
    }

    function zoomOut(element) {
        element.style.transform = "scale(1)";
    }


 var listData = [
        { text: " <b>Anti-Spam Service: Defend Your Inbox</b> - Advanced algorithms block spam, phishing, and malicious emails in real-time.", },
        { text: "<b>Phishing Detection Service: Stay Ahead of Deceptive Tactics</b> - Machine learning studies user behavior, recognizing anomalies and potential phishing indicators." },
        { text: "<b>Smart Scan Service: Elevate Your Cybersecurity</b> - Identify and address potential weaknesses in your digital infrastructure.Monitor and neutralize emerging threats in real-time." }
 ];

var ispisHTML="<ul>";
for (var i = 0; i < listData.length; i++) {
    ispisHTML += `<li>${listData[i].text}</li>`;
}

ispisHTML+="</ul>";
hiddenText.innerHTML=ispisHTML;

var listData1 = [
    { text: "<b>Robust Encryption Standards</b> - We employ state-of-the-art encryption standards to safeguard your data during transmission and storage. This ensures that unauthorized access is virtually impossible, providing an additional layer of security for your peace of mind.", },
    { text: "<b>Strict Access Controls</b> - Our systems implement stringent access controls, allowing only authorized personnel to access specific data. Role-based access ensures that individuals have the appropriate level of access based on their responsibilities, minimizing the risk of unauthorized usage." },
    { text: "<b>Regular Security Audits</b> - To stay ahead of potential threats, we conduct regular security audits and assessments. These proactive measures help identify vulnerabilities and ensure that our systems adhere to the highest security standards. Any identified issues are promptly addressed to maintain the integrity of your data." }
];

var ispisHTML="<ul>";
for (var i = 0; i < listData1.length; i++) {
ispisHTML += `<li>${listData1[i].text}</li>`;
}

ispisHTML+="</ul>";
hiddenText2.innerHTML=ispisHTML;

//dinamicko dodavanje clasa sa cenom//
const priceData = [
    {
      title: 'STARTUP',
      price: 0,
      features: [
        'Up to 5 Documents',
        'Up to 3 Reviews',
        '5 team Members',
        'Limited Support'
      ]
    },
    {
      title: 'PREMIUM',
      price: 10,
      features: [
        'Up to 15 Documents',
        'Up to 10 Reviews',
        '25 team Members',
        'Limited Support'
      ],
      style: 'background-color: #192440; color: white;', 
      btnStyle: 'background-color: red; color: #fff;' 
    },
    {
      title: 'PROFESSIONAL',
      price: 30,
      features: [
        'Unlimited Documents',
        'Unlimited Reviews',
        'Unlimited Members',
        'Unlimited Support'
      ]
    }
  ];
  
  const priceCardsRow = document.getElementById('priceCardsRow');
  
  priceData.forEach(item => {
    const priceCard = document.createElement('div');
    priceCard.classList.add('col-md-4', 'text-center', 'py-4', 'mt-5');
    priceCard.setAttribute('data-aos', 'fade-' + (item === priceData[0] ? 'right' : 'left'));
    priceCard.setAttribute('data-aos-delay', '200');
    priceCard.setAttribute('data-aos-duration', '1000');
    priceCard.setAttribute('data-aos-once', 'true');
  
    if (item.style) {
      priceCard.style.cssText = item.style;
    }
  
    const h4 = document.createElement('h4');
    h4.classList.add('my-4');
    h4.textContent = item.title;
  
    const price = document.createElement('p');
    price.classList.add('font-weight-bold');
    price.innerHTML = `$ <span class="display-2 font-weight-bold">${item.price}</span> / MO.`;
  
    const ul = document.createElement('ul');
    ul.classList.add('list-unstyled');
    item.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      ul.appendChild(li);
    });
  
    const btn = document.createElement('p');
    btn.classList.add('btn', 'my-4', 'font-weight-bold', 'atlas-cta', 'cta-ghost');
  
    if (item.btnStyle) {
      btn.style.cssText = item.btnStyle;
    }
  
    btn.textContent = 'Get Free';
    btn.onclick = porukaOispisu;
  
    priceCard.appendChild(h4);
    priceCard.appendChild(price);
    priceCard.appendChild(ul);
    priceCard.appendChild(btn);
  
    priceCardsRow.appendChild(priceCard);
  });
  
  function porukaOispisu() {
   
  }
  







!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map