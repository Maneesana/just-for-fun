const textContent = `❄AKUMA STORE❄[86💎-105₹][172💎-210₹][257💎-320₹][344💎-420₹][514💎-640₹][706💎-840₹][878💎-1050₹][1050💎-1260₹][2195💎-2499₹][3688💎-4100₹][4390💎-4980₹][5532💎-5950₹][7727💎-8500₹][9288💎-9900₹][Twilight Pass 🌠 - 689₹][Starlight Member 💫- 689₹][Starlight Member Plus✨ - 1550₹][For Order:       ID Number(Server) Eg: 12682982(1243) With payment ScreenshotPRE-ORDER FORMAT :User ID - 898737829Zone(Server) ID - 1802Order(Dias 💎) - 706 PAYMENT METHODS:G-Pay /Paytm:- 7005921639Send Screenshot of Payment  before recharge -----------------------------------*Group-1*https://chat.whatsapp.com/FcP2cF6CnGu1ZIKbrHVHKVJoin our group for new updates and offers:Dm on-*wa.me/ 91 7005921639
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
