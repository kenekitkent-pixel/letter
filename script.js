// script.js

// ---------- USER DATA ----------
const users = {
  Akira: {
    code: "676767",
    bg: "https://i.pinimg.com/736x/da/92/72/da9272ae43b8157755d1d4fd5db3d3d4.jpg",
    message: `You're the constant in a shifting scene,\nThe one who stayed, through all the in-between.\nWhile other ships sailed off on different tides,\nYou've anchored fast, right here, by my side.\n\nI know our souls don't perfectly align,\nLike oil and water, or a different design.\nBut that's the wonder, the unlikely art,\nNot chance, but God, who chose to join our heart.\nFor this I'm thankful, every single day,\nHe placed me with you, along the way.\n\nI may not give the finest gifts or grandest things,\nNo lavish praise that such a friendship brings.\nBut this I offer, and it's truly true,\nYou're in my prayers each night, a space for you.\n\nI wish for you a future, bright and vast,\nSuccess that holds you steady, unsurpassed.\nAnd when life's storms gather, dark and steep,\nMay you find the strength to climb, and not to weep.\n\nSo thank you, for the friend you've been to me,\nA simple truth, that sets my spirit free.`
  },
  Jessa: {
    code: "121314",
    bg: "https://i.pinimg.com/736x/2f/92/e3/2f92e3fee607257f37b3d9c886c174a1.jpg",
    message: `Hi Jessa Mae Englatera, ang tao nga never pa nangusi.\nThe random hits and pinches moments that somehow became a normal part of our friendship.\nAnd honestly, there’s something about our interactions that always ends up funny to me.\nWala lang, murag lingaw lang gyud kaayo sige'g pang ragebait ninyo.\n\nWe both know we’re like cats and dogs sometimes,\nbut I never take it seriously. I see it as your friendly love for me —\nyour own way of showing you care.\n\nI know I have shortcomings as your friend,\npero ayaw kabalaka kay palitan ra tika’g purple nga jeep kung madato ko. HAHAHA.\n\nPero bitaw oie. I may not always give the best as your friend,\nbut the best thing I can offer is that you are always part of my nightly prayers.\nI may look basher nimo sometimes, but truthfully,\nI’m excited to see you succeed in the future and I'm proud nimo jessa.\nThank you for being a good friend to me.`
  },
  Felicity: {
    code: "232425",
    bg: "https://i.pinimg.com/736x/b4/97/09/b49709b86eb85b194f6d69c0c9e30d3d.jpg",
    message: `Thank you for the way you step aside\nWhen conversations drift to lows of pride.\nYou never bite the bait, you never feed\nThe hungry talk that other mouths might need.\nThat silence of yours? It speaks so loud—\nA quiet soul among a noisy crowd.\n\nThank you for the smart that you conceal,\nThe brightness you refuse to oversell.\nYou wear it lightly, like it's nothing much,\nBut those who listen know your mind is such\nA gift—not forced, not flaunted, just there, still.\nAnd somehow that's what makes it more brilliant.\n\nBut here's the thanks that settles in my chest:\nYou've stayed. Through everything, you've stayed and blessed\nThis friendship with a presence so secure,\nA steady hand, a heart that stays demure.\nYou show respect like breathing—natural, free,\nThe kind that makes each person feel they're worthy to be seen.\n\nI met your parents once, and understood\nWhy kindness grows in you the way it should.\nNo surprise there—their warmth was simply you,\nReflected back in everything you do.\nThey raised you well, Felicity, and how—\nTheir love wears your face now.\n\nSo here's my simple prayer for all your days:\nMay God bless every exam, every grade,\nMay you succeed in ways that make you proud,\nYet still be you—the same, above the crowd.\nI'm proud of you. I'll always be.\nThank you, Felicity, for being simply... thee.`
  }
};

// ---------- DOM elements ----------
const loginContainer = document.getElementById('login-container');
const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const letterWindow = document.querySelector('.letter-window');
const envelopeImg = document.getElementById('envelope');

const loginName = document.getElementById('login-name');
const loginCode = document.getElementById('login-code');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

const letterTitle = document.getElementById('letter-title');
const catImg = document.getElementById('letter-cat');
const messageDiv = document.getElementById('message-text');

// current logged in user (name)
let currentUser = null;

// ---------- LOGIN handler ----------
loginBtn.addEventListener('click', () => {
  const nameInput = loginName.value.trim();
  const codeInput = loginCode.value.trim();

  if (users.hasOwnProperty(nameInput) && users[nameInput].code === codeInput) {
    loginError.style.display = 'none';
    currentUser = nameInput;

    document.body.style.backgroundImage = `url('${users[nameInput].bg}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    loginContainer.style.display = 'none';
    envelopeContainer.style.display = 'block';
  } else {
    loginError.style.display = 'block';
  }
});

[loginName, loginCode].forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loginBtn.click();
  });
});

// ---------- ENVELOPE click ----------
envelopeContainer.addEventListener('click', () => {
  if (!currentUser) {
    loginContainer.style.display = 'flex';
    envelopeContainer.style.display = 'none';
    return;
  }

  envelopeContainer.style.display = 'none';

  const userData = users[currentUser];
  letterTitle.textContent = `To ${currentUser}`;
  catImg.src = 'cat_heart.gif';
  messageDiv.textContent = userData.message;

  // ensure background stays
  document.body.style.backgroundImage = `url('${userData.bg}')`;

  letterContainer.style.display = 'flex';
  setTimeout(() => {
    letterWindow.classList.add('open');
  }, 20);
});
