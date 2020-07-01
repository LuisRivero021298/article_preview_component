const btnShared = document.getElementById('btn-share');
var btnShared2;
const userShare = document.getElementById('user-share');
const userShared = document.getElementById('user-shared');
let sharedOptions = `
<div class="shared-option">
  <div id="na">
    <span>share</span>
  </div>
  <div id="shared-social">
  <a href="facebook.com">
    <img src="images/icon-facebook.svg" alt="facebook">
  </a>
  <a href="twiiter.com">
    <img src="images/icon-twitter.svg" alt="twitter">
  </a>
  <a href="pinterest.com">
    <img src="images/icon-pinterest.svg" alt="pinterest">
  </a>
  </div>
  <div class="shared">
    <button id="btn-share-2" class="circle-box btn-shared" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
        <path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
      </svg>    
    </button>
  </div>
</div>`;

/* Click for shared */
btnShared.addEventListener("click", (event) => {
  console.log(event);
  console.log('Entra');
  userShare.style.display = "none";
  userShared.innerHTML = sharedOptions; 
  btnShared2 = document.getElementById('btn-share-2');
}, false);

btnShared2.addEventListener("click", (event)=> {
  console.log(event);
  console.log('Entra');
})