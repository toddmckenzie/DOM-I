const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let acrossImg = document.getElementById("cta-img");
acrossImg.setAttribute('src', siteContent["cta"]["img-src"]);

let navigation = document.querySelectorAll('nav a');
navigation.forEach((item, index) => item.innerHTML = siteContent["nav"][`nav-item-${index + 1}`]);

let domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.innerHTML = siteContent['cta']['h1'];

let buttons = document.querySelector('button');
buttons.innerHTML = siteContent['cta']['button'];

domIsAwesome.style.height = "220px";
domIsAwesome.style.width = "170px"
domIsAwesome.style.marginRight = "60px";


let multipleTextTopH4 = document.querySelectorAll('.text-content h4');
let multipleTextTopP = document.querySelectorAll('.text-content p');
multipleTextTopH4[0].innerHTML = siteContent["main-content"]["features-h4"];
multipleTextTopP[0].innerHTML = siteContent["main-content"]["features-content"];

multipleTextTopH4[1].innerHTML = siteContent["main-content"]["about-h4"];
multipleTextTopP[1].innerHTML = siteContent["main-content"]["about-content"];

document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];


let multipleBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
let multipleBottomP = document.querySelectorAll('.bottom-content .text-content p');


multipleBottomH4[0].innerHTML = siteContent["main-content"]["services-h4"];
multipleBottomH4[1].innerHTML = siteContent["main-content"]["product-h4"];
multipleBottomH4[2].innerHTML = siteContent["main-content"]["vision-h4"];



multipleBottomP[0].innerHTML = siteContent["main-content"]["services-content"];
multipleBottomP[1].innerHTML = siteContent["main-content"]["product-content"];
multipleBottomP[2].innerHTML = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4').innerHTML = siteContent["contact"]["contact-h4"];
let multipleContactPs = document.querySelectorAll('.contact p');

let newAddress = [];
siteContent["contact"]["address"].split(' ').map(item => (item === "Street")?newAddress.push(item + '<br>'): newAddress.push(item));
//multipleContactPs[0].innerHTML = siteContent["contact"]["address"];
multipleContactPs[0].innerHTML = newAddress.join(' ');
multipleContactPs[1].innerHTML = siteContent["contact"]["phone"];
multipleContactPs[2].innerHTML = siteContent["contact"]["email"];


document.querySelector('footer p').innerHTML = siteContent["footer"]["copyright"];

//let navigationColor = document.querySelectorAll('nav a');
//navigationColor.forEach(item => item.style.color = "green");

let navigations = document.querySelector('header nav');
//let navigations2 = document.querySelector('header nav');
let beforeAnchor = document.createElement('a');
let afterAnchor = document.createElement('a');
//let anchors2 = document.createElement('a');
//let before = navigations2.prepend(anchors2);
//let after = navigations.appendChild(anchors);

//before.innerHTML = "Before";
//after.innerHTML = "After";

beforeAnchor.textContent = "Before";
afterAnchor.textContent = "After";
beforeAnchor.href = "#";
afterAnchor.href = "#";
navigations.prepend(beforeAnchor);
navigations.appendChild(afterAnchor);

let navigationColor = document.querySelectorAll('nav a');
navigationColor.forEach(item => item.style.color = "green");
