const DATA = {
  good: 0,
  bad: 0
};

let state = load();

function load() {
  return JSON.parse(localStorage.getItem("loveSystem")) || DATA;
}

function save() {
  localStorage.setItem("loveSystem", JSON.stringify(state));
}

function update() {
  document.getElementById("goodCount").innerText = state.good;
  document.getElementById("badCount").innerText = state.bad;
}

function action(btn) {
  const type = btn.dataset.type;
  const card = btn.parentElement;

  if (type === "good") {
    state.good++;
    spawn("💖");
  }

  if (type === "bad") {
    state.bad++;
    spawn("😭");
    shake();
  }

  save();
  update();
  show(card, type);
}

function show(card, type) {
  const el = document.createElement("div");
  el.className = "msg";

  if (type === "good") {
    el.innerHTML = "تم إيداع بوسة 💋<br>بحبك يا هدهدتي ❤️";
  } else {
    el.innerHTML = "تم إيداع عقاب 😈<br>أنا آسف يا هدهدتي 😔";
  }

  card.appendChild(el);

  setTimeout(() => el.remove(), 1500);
}

function spawn(icon) {
  const el = document.createElement("div");
  el.className = "float";
  el.innerText = icon;

  el.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 2000);
}

function shake() {
  document.body.style.transform = "translateX(-5px)";
  setTimeout(() => document.body.style.transform = "translateX(5px)", 50);
  setTimeout(() => document.body.style.transform = "translateX(0)", 120);
}

update();