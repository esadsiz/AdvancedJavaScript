// ADVANCED DOM AND EVENTS

document.getElementsByTagName("h1");  // Elementleri tag isimlerinden yakalayip ARRAY döndürür. (örn; "h1","span","button")
document.getElementsByClassName("second"); //	Elementleri class isimlerinden yakalayip döndürür. (örn; "h1","span","button")
document.getElementById("first"); // Elementleri id isimlerinden yakalayip döndürür. (örn; "h1","span","button")
	
document.querySelector("h1") //	document'teki ilk h1 tagini döndürür.
document.querySelectorAll("h1") // document'teki bütün h1 taglerini döndürür.
document.querySelectorAll("h1").length // document'teki h1 taglerinin sayisini döndürür.

document.getElementById("first").addEventListener("click", function() {}) //	id ismi first olan elemente "click" isimli event'i ekle, bu event gerceklesirse fonksiyonu calistir.
// (document.getElementByTag("first")'ün ne döndürdügüne konsoldan bi bak yanina bi [0] koyman gerekebilir.) https://www.w3schools.com/jsref/dom_obj_event.asp
document.addEventListener // böylece eventi her yerde dinlemis (beklemis) oluyoruz. örnegin;
document.addEventListener("keydown", function(gerceklesenEvent){if (gerceklesenEvent.key==="Escape"){ ... }})
// keydown, söz konusu tusa bastigin anda,
// keypress, söz konusu tusa basili tuttugun sürece
// keyup, söz konusu tustan parmagini cektigin anda ilgili fonksiyonu calistir.
// eger basilan tus ESC ise... (burada console.log'dan gerceklesenEvent objesine gir bir incele).

document.getElementById("bilgiGir").value //	bilgiGir id'li inputtaki halihazirdaki value'yu döndürür.
document.getElementById("bilgiGir").value.length //	bilgiGir id'li inputtaki halihazirdaki value'nun uzunlugunu döndürür.

//
//
//
//
//
//
//
//
//
// # SELECTING, CREATING AND DELETING ELEMENTS

document.querySelector("h1").innerHTML //	document'teki ilk h1 taginin ic kismini döndürür. =" <span>Merhaba<span>"; yaparsak, icine Merhaba yazili bir span yerlestirir.
document.getElementById('h1').textContent; //	document'teki ilk h1 taginin yalnizca text icerigini döndürür.
document.querySelector("h1").parentElement //	document'teki ilk h1 taginin parentini döndürür.
document.querySelector("h1").children //	document'teki ilk h1 taginin childrenini döndürür.

const messageBox = document.createElement("div"); // messageBox adinda bir div olustur.
messageBox.classList.add("cookie"); // Bu div'in sahip oldugu classlar arasina cookie classini ekle. 
messageBox.textContent="I am a by esadsiz created div."; // Olusturdugumuz div'e text icerigi ekleme.
messageBox.innerHTML="<h1>I am a by esadsiz created div.<h1/>"; // innerHTML, secili div'in direkt ic kismini alir. OLusturdugumuz div'in ic kismina bu kodu yerlestir.

header.prepend(messageBox); // Olusturdugumuz div'i header tag'inin cocuklari arasina en üst siraya yerlestir.
header.append(messageBox); // Olusturdugumuz div'i header tag'inin cocuklari arasina en alt siraya yerlestir.
header.before(messageBox); // Olusturdugumuz div'i header'in hemen öncesine yerlestir.
header.after(messageBox); // Olusturdugumuz div'i header'in hemen sonrasina yerlestir.
messageBox.remove(); // messageBox isimli div'i kaldir. eskiden silme islemi su sekildeydi;
messageBox.parentElement.removeChild(messageBox);

messageBox.cloneNode(true); // Secili ögeyi (true ise) tüm alt cocuklari ile birlikte kopyala. false ise sadece tag'in kendisini kopyalar.

//
//
//
//
//
//
//
//
//
// # STYLES, ATTRIBUTES AND CLASSES

document.querySelectorAll("h1").style //	document'teki bütün h1 taglerinin style'ini döndürür.
document.querySelectorAll("h1").style.color //	document'teki bütün h1 taglerinin color propertysini döndürür.

getComputedStyle(messageBox); // messageBox'un css dosyasinda sahip oldugu tüm özellikleri döndürür.
getComputedStyle(messageBox).color; // messageBox'un css dosyasinda sahip oldugu color özelligini döndürür.
getComputedStyle(messageBox).fontSize = 30+"rem" // Deger vermede bir sayi söz konusuyla islem böyle yapilir.
messageBox.style.setProperty("yaziRengi") = "orange"; // css dosyasindaki yaziRengi isimli tanimlanmis degiskenin degerini degistirir.

document.getElementsByClassName("resim").src // "resim" classina ait elementin src property'sini döndürür.
document.getElementsByClassName("resim").src = 'resim-${resimNumarasi}.png';

document.querySelector("örnek").getAttribute("src") // tag'in (burada örnegin bir img) src isimli attribute'unu döndürür. (Komponentlerde kullanilabilir.)
document.querySelector("örnek").setAttribute("src", "./img.png") // secili tag'a src isminde, value'su "./img.png" olan bir attribute atar.
document.querySelector("h1").getAttribute("random") // document'teki, ilk h1 tag'inin, random adli property'sinin degerini döndürür.
document.querySelector("h1").setAttribute("newroperty", 1000)	// document'teki, ilk h1 tag'ine, newproperty adli yeni bir property ekler ve degerini 1000 olarak belirler.


document.querySelector("h1").className //	document'teki ilk h1 taginin class atamamiza yarar. ="cool"; deriz, CSS dosyasi icinde "cool" isimli class'i arar.
document.querySelector("h1").classList //	document'teki ilk h1 taginin sahip oldugu class'larin listesini verir.
document.querySelector("h1").classList.add("yeniclass") //	document'teki ilk h1 taginin sahip oldugu class'lar arasina "yeniclass"i ekler.
document.querySelector("h1").classList.remove("eskiclass") //	document'teki ilk h1 taginin sahip oldugu class'lar arasindan "eskiclass"i cikartir.
document.querySelector("h1").classList.toggle("onoff") //	document'teki ilk h1 taginin sahip oldugu onoff class'ini aktifse pasif, pasifse aktiflestirir.
document.querySelector("h1").classList.contains("gizle") //	document'teki ilk h1 taginin halihazirda gizle adinda bir sinifa sahip olup olmadigini true ya da false olarak döndürür.

//
//
//
//
//
//
//
//
//
// # IMPLEMENTING SMOOTH SCROLLING

document.querySelector(".örnek").getBoundingClientRect(); // secili elementin sayfa üzerinde bulundugu koordinatlari döndürür.
document.documentElement.clientHeight; // viewportun, tarayicinin o anki yüksekligini döndürür.
document.documentElement.clientWidth; // viewportun, tarayicinin o anki genisligini döndürür.

window.pageXOffset // sol sag olan scroll bar'in o anki konumunu döndürür.
window.pageYOffset // yukari asagi olan scroll bar'in o anki konumunu döndürür.

window.scrollTo(document.querySelector(".örnek").getBoundingClientRect().top + window.pageYOffset); // scroll bari secili elementin oldugu yere tasir. diger bir degisle scroll barin mevcut konumunu secili elementin tepeye olan yüksekligi kadar asagiya kaydirir.

window.scrollTo({
    top: document.querySelector(".örnek").getBoundingClientRect().top + window.pageYOffset;
    behavior: "smooth"
}) // yukaridaki kodun, smooth gecisli olani.

document.querySelector(".örnek").scrollIntoView({behavior:"smooth"}); // yukarida yazilanlarin hicbirine gerek birakmayan smooth gecis kodu.

//
//
//
//
//
//
//
//
//
// # TYPES OF EVENTS AND EVENT HANDLERS

document.querySelector("h1").addEventListener("mouseenter", ()=>{}) // h1 taginin bulundugu alana mouse girdiginde. Google'a event reference yazip aratirsan tüm eventleri görebilirsin.
// mouseenter, secili dive girildiginde de, secili div'in child'ina girildiginde de tetiklenir. mouseover, sadece div'e girildiginde tetiklenir.
document.querySelector("h1").onmouseenter= () => {}; // h1 taginin bulundugu alana mouse girdiginde.

document.querySelector("h1").removeEventListener("mouseenter", örnekFonksiyon); // h1 tagininin mouseenter eventinden örnekFonksiyon isimli fonksiyonu kaldir.

setTimeout(()=>{document.querySelector("h1").removeEventListener("mouseenter", örnekFonksiyon)}, 3000); // h1 tagininin mouseenter eventinden örnekFonksiyon isimli fonksiyonu 3000 ms sonra kaldir.

// e.target, olayin gerceklestigi yeri, e.currentTarget, olayin attached oldugu yeri döndürür.

// bir eventdan beklemedigin bir sekilde parentlar da etkileniyorsa e.stopPropagation()'u kullanmayi dene.

//
//
//
//
//
//
//
//
//
// # EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

// Navbardaki bir linkten, tiklama ile ayni sayfadaki baska bir bölgeye smooth gecis.
document.querySelector(".navbardakilinkler").addEventListener("click", (e)=>{e.preventDefault(); if(e.target.classList.contains("navbarlinkiise")){document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"});}});

window.addEventListener("scroll", ()=>{}); // scroll bar her hareket ettiginde.
window.scrollY; // yukari asagi scroll barin o anki konumunu döndürür.

// sticky navbar yapimi
window.addEventListener("scroll", ()=>{ if( window.scrollY > (document.querySelector("nerdenitibarenstickyolsun").getBoundingClientRect.top) ) {document.querySelector("navbar").classList.add("sticky")} else {document.querySelector("navbar").classList.remove("sticky")} // belirli bir konuma gelince navbar'a sticky isimli class'i ekle.})

//
//
//
//
//
//
//
//
//
// # DOM TRAVERSING

document.querySelector("h1").childNodes; // h1 elementinin sahip oldugu tüm elementleri döndürür.
document.querySelector("h1").children; // h1 elementinin sahip oldugu tüm tagleri döndürür.
document.querySelector("h1").firstElementChild.style.color = "white"; // h1 elementinin sahip oldugu ilk child'i döndürür.
document.querySelector("h1").lastElementChild.style.color = "white"; // h1 elementinin sahip oldugu son child'i döndürür.
document.querySelector("h1").parentNode; // h1 elementinin ait oldugu ilk parenti döndürür.
document.querySelector("h1").parentElement; // h1 elementinin ait oldugu ilk parenti döndürür. aynisi.
document.querySelector("h1").closest(".header"); // h1 elementinden baslar, header classina sahip bir element bulana kadar yukari dogru gezer, bulunca onu döndürür.
document.querySelector("h1").previousElementSibling; // h1 elementinin kendinden önceki ilk kardesini döndürür.
document.querySelector("h1").nextElementSibling; // h1 elementinin kendinden sonraki ilk kardesini döndürür.

//
//
//
//
//
//
//
//
//
// # A BETTER WAY: THE INTERSECTION OBSERVER API

const stickyNavbar = (entries, gözlemci) => { const [entry] = entries; if(!entry.isIntersecting) {document.querySelector(".navbar").classList.add("sticky");} else {document.querySelector(".navbar").classList.remove("sticky");}}
// bu fonksiyon, hedef element, root elementle her kesistiginde bu fonksiyon cagirilacak.

const header = document.querySelector(".header");
const headerGözlemci = new IntersectionObserver(stickyNavbar, { root:null, threshold:0.1, rootMargin:"90px" // 90px kala. }); // hedef elementin %10'u root'un icine girdigi anda. root:null, yani burada root viewportun geneline karsilik gelir.
headerGözlemci.observe("header"); // header'i gözle.

// Bu konuya daha ayrintili bak.

//
//
//
//
//
//
//
//
//
// # LIFECYCLE DOM EVENTS

document.addEventListener("load", ()=>{}); // sayfa tamamen yüklendiginde.
document.addEventListener("beforeunload", ()=>{}); // sayfadan cikilmadan önce. // Buna daha ayrintili bak.

// # # # # # # # # # # # # # # # # # # # # # # # # # # #
