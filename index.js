const textContent = `βAKUMA STOREβ[86π-105βΉ][172π-210βΉ][257π-320βΉ][344π-420βΉ][514π-640βΉ][706π-840βΉ][878π-1050βΉ][1050π-1260βΉ][2195π-2499βΉ][3688π-4100βΉ][4390π-4980βΉ][5532π-5950βΉ][7727π-8500βΉ][9288π-9900βΉ][Twilight Pass π  - 689βΉ][Starlight Member π«- 689βΉ][Starlight Member Plusβ¨ - 1550βΉ][For Order:       ID Number(Server) Eg: 12682982(1243) With payment ScreenshotPRE-ORDER FORMAT :User ID - 898737829Zone(Server) ID - 1802Order(Dias π) - 706 PAYMENT METHODS:G-Pay /Paytm:- 7005921639Send Screenshot of Payment  before recharge -----------------------------------*Group-1*https://chat.whatsapp.com/FcP2cF6CnGu1ZIKbrHVHKVJoin our group for new updates and offers:Dm on-*wa.me/ 91 7005921639
    to share again : https://amazon-give-away.netlify.app/
    `;

const shareNowBtn = document.querySelector(".btn-share--now");
const joinNowBtn = document.querySelector(".btn-join--now");

const hiddenInfoJoin = document.querySelector(".join-now-hidden-info");
const hiddenInfoShare = document.querySelector(".share-now-hidden-info");

const deviceInfo = window.navigator.userAgent;
console.log(deviceInfo);
const screenValue =
  deviceInfo.search("Windows" || "Machintosh") > 0 ? true : false;
console.log(screenValue);

let redirectUrl = "";
screenValue
  ? (redirectUrl = "https://web.whatsapp.com/send?text=")
  : (redirectUrl = "whatsapp://send?text=");

shareNowBtn.addEventListener("mouseover", () => {
  hiddenInfoShare.style.opacity = "1";
});

shareNowBtn.addEventListener("mouseleave", () => {
  hiddenInfoShare.style.opacity = "0";
});

joinNowBtn.addEventListener("mouseover", () => {
  hiddenInfoJoin.style.opacity = "1";
});

joinNowBtn.addEventListener("mouseleave", () => {
  hiddenInfoJoin.style.opacity = "0";
});
shareNowBtn.addEventListener("click", (e) => {
  console.log(shareNowBtn.setAttribute("href", redirectUrl + textContent));
  console.log(shareNowBtn.attributes["href"]);
});
