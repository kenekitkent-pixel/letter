// ---------- User data ----------
const users = {
  Akira: {
    code: "676767",
    color: "blue",
    bg: "https://i.pinimg.com/736x/da/92/72/da9272ae43b8157755d1d4fd5db3d3d4.jpg", // portrait
    message: `These hands, not often pen to paper trained,
Have traced these lines, a sentiment sustained.
With every clumsy stroke, a quiet care,
A proof of friendship, drafted line by line, laid bare.

For you're the constant in a shifting scene,
The one who stayed, through all the in-between.
While other ships sailed off on different tides,
You've anchored fast, right here, by my side.

I know our souls don't perfectly align,
Like oil and water, or a different design.
But that's the wonder, the unlikely art,
Not chance, but God, who chose to join our heart.
For this I'm thankful, every single day,
He placed me with you, along the way.

I may not give the finest gifts or grandest things,
No lavish praise that such a friendship brings.
But this I offer, and it's truly true,
You're in my prayers each night, a space for you.

I wish for you a future, bright and vast,
Success that holds you steady, unsurpassed.
And when life's storms gather, dark and steep,
May you find the strength to climb, and not to weep.

So thank you, for the friend you've been to me,
A simple truth, that sets my spirit free.`
  },
  Jessa: {
    code: "121314",
    color: "purple",
    bg: "https://i.pinimg.com/736x/2f/92/e3/2f92e3fee607257f37b3d9c886c174a1.jpg", // portrait
    message: `Hi Jessa Mae Englatera, ang tao nga never pa nangusi. The random hits and pinches moments that somehow became a normal part of our friendship. And honestly, there's something about our interactions that always ends up funny to me. Wala lang, murag lingaw lang gyud kaayo sige'g pang rage bait ninyo.

We both know we're like cats and dogs sometimes, but I never take it seriously. I see it as your friendly love for me — your own way of showing you care.

I know I have shortcomings as your friend, pero ayaw kabalaka kay palitan ra tika'g purple nga jeep kung madato ko. HAHAHA.

Pero bitaw oie. I may not always give the best as your friend, but the best thing I can offer is that you are always part of my nightly prayers. I may look basher nimo sometimes, but truthfully, I'm excited to see you succeed in the future and I'm proud nimo jessa. Thank you for being a good friend to me.`
  },
  Felicity: {
    code: "232425",
    color: "red",
    bg: "https://i.pinimg.com/736x/b4/97/09/b49709b86eb85b194f6d69c0c9e30d3d.jpg", // portrait
    message: `Thank you for the way you step aside
When conversations drift to lows of pride.
You never bite the bait, you never feed
The hungry talk that other mouths might need.
That silence of yours? It speaks so loud—
A quiet soul among a noisy crowd.

Thank you for the smart that you conceal,
The brightness you refuse to oversell.
You wear it lightly, like it's nothing much,
But those who listen know your mind is such
A gift—not forced, not flaunted, just there, still.
And somehow that's what makes it more brilliant.

But here's the thanks that settles in my chest:
You've stayed. Through everything, you've stayed and blessed
This friendship with a presence so secure,
A steady hand, a heart that stays demure.
You show respect like breathing—natural, free,
The kind that makes each person feel they're worthy to be seen.

I met your parents once, and understood
Why kindness grows in you the way it should.
No surprise there—their warmth was simply you,
Reflected back in everything you do.
They raised you well, Felicity, and how—
Their love wears your face now.

So here's my simple prayer for all your days:
May God bless every exam, every grade,
May you succeed in ways that make you proud,
Yet still be you—the same, above the crowd.
I'm proud of you. I'll always be.
Thank you, Felicity, for being simply... thee.`
  }
};

// ---------- DOM elements ----------
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");
const loginFormDiv = document.getElementById("login-form");
const personalDiv = document.getElementById("personal-content");
const nameInput = document.getElementById("name-input");
const codeInput = document.getElementById("code-input");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("login-error");

const personalTitle = document.getElementById("personal-title");
const personalCat = document.getElementById("personal-cat");
const personalMessage = document.getElementById("personal-message");

// ---------- Helper: reset to login view ----------
function resetToLogin() {
  // Show login, hide personal
  loginFormDiv.style.display = "flex";
  personalDiv.style.display = "none";

  // Clear inputs and error
  nameInput.value = "";
  codeInput.value = "";
  errorMsg.textContent = "";

  // Reset body background to default (heart-bg)
  document.body.style.backgroundImage = "url('heart-bg.jpg')";
  document.body.removeAttribute("data-theme");

  // Cat image back to heart (will be visible only after login)
  personalCat.src = "cat_heart.gif";
}

// ---------- Envelope click: open letter window ----------
envelopeContainer.addEventListener("click", () => {
  envelopeContainer.style.display = "none";
  letterContainer.style.display = "flex";

  // Reset to login view every time envelope is opened
  resetToLogin();

  // Trigger open animation
  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// ---------- Login validation ----------
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const enteredName = nameInput.value.trim();
  const enteredCode = codeInput.value.trim();

  // Case‑insensitive lookup
  const matchedKey = Object.keys(users).find(
    (key) => key.toLowerCase() === enteredName.toLowerCase()
  );

  if (!matchedKey) {
    errorMsg.textContent = "🤔 name not found...";
    return;
  }

  const user = users[matchedKey];

  if (user.code !== enteredCode) {
    errorMsg.textContent = "🔐 wrong code, try again";
    return;
  }

  // ---------- Success! ----------
  errorMsg.textContent = "";

  // Apply user's background and theme attribute
  document.body.style.backgroundImage = `url('${user.bg}')`;
  document.body.setAttribute("data-theme", user.color);

  // Customize personal content
  personalTitle.textContent = `For ${matchedKey}`;
  personalMessage.innerHTML = user.message.replace(/\n/g, "<br>");
  personalCat.src = "cat_dance.gif"; // happy dance!

  // Hide login, show personal
  loginFormDiv.style.display = "none";
  personalDiv.style.display = "flex";
});

// ---------- Optional: allow pressing Enter in inputs ----------
[nameInput, codeInput].forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      loginBtn.click();
    }
  });
});