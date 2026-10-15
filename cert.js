/* ==================== CERTIFICATE MAKER ==================== */
function initCertificateMaker() {
  const canvas = document.getElementById("cert-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const TEMPLATES = [
    {
      id: "friendship",
      emoji: "🤝",
      nameBn: "বন্ধুত্ব সার্টিফিকেট",
      nameEn: "Certificate of Friendship",
      presentLine: "এই সার্টিফিকেটটি গর্বের সাথে প্রদান করা হলো",
      defaultMessage:
        "ঝগড়া-খুনসুটি আর অফুরন্ত আড্ডার মাঝেও যে বন্ধুত্ব অটুট থাকে — এই সার্টিফিকেট তারই আনুষ্ঠানিক স্বীকৃতি।",
      pattern: "dots",
      titleFont: "'Baloo Da 2', sans-serif",
      titleWeight: "800",
      titleSize: 62,
      letterSpace: "0px",
      colors: {
        bg1: "#fff7ed", bg2: "#ffedd5",
        accent: "#ea580c", accentDark: "#9a3412",
        ink: "#431407", soft: "#fdba74", seal: "#f97316"
      }
    },
    {
      id: "partner",
      emoji: "💖",
      nameBn: "সেরা পার্টনার সার্টিফিকেট",
      nameEn: "Certificate of Best Partnership",
      presentLine: "ভালোবাসা ও গর্বের সাথে প্রদান করা হলো",
      defaultMessage:
        "জীবনের প্রতিটা মুহূর্তে পাশে থাকার প্রতিশ্রুতি — তুমিই আমার সেরা পার্টনার, আজ এবং সবসময়।",
      pattern: "hearts",
      titleFont: "'Baloo Da 2', sans-serif",
      titleWeight: "800",
      titleSize: 58,
      letterSpace: "0px",
      colors: {
        bg1: "#fdf2f8", bg2: "#fce7f3",
        accent: "#db2777", accentDark: "#9d174d",
        ink: "#500f28", soft: "#f9a8d4", seal: "#ec4899"
      }
    },
    {
      id: "marriage",
      emoji: "💍",
      nameBn: "বিয়ে সার্টিফিকেট",
      nameEn: "Certificate of Marriage",
      presentLine: "মনের বিয়ের আনুষ্ঠানিক ঘোষণা",
      defaultMessage:
        "মনের বিয়ে তো কবেই হয়ে গেছে! এই সার্টিফিকেট শুধুই কাগজে-কলমে স্বীকৃতি — সাক্ষী রইলো পুরো দুনিয়া।",
      pattern: "royal",
      titleFont: "'Cinzel', serif",
      titleWeight: "700",
      titleSize: 54,
      letterSpace: "6px",
      colors: {
        bg1: "#fffdf4", bg2: "#f7ecd0",
        accent: "#b45309", accentDark: "#78350f",
        ink: "#451a03", soft: "#e7c46a", seal: "#d97706"
      }
    },
    {
      id: "special",
      emoji: "⭐",
      nameBn: "বিশেষ বন্ধু সার্টিফিকেট",
      nameEn: "Certificate of Special Friendship",
      presentLine: "বিশেষ মর্যাদার সাথে প্রদান করা হলো",
      defaultMessage:
        "হাজারো মানুষের ভিড়ে তুমিই সবচেয়ে স্পেশাল — এই সার্টিফিকেট তার চিরন্তন প্রমাণ।",
      pattern: "stars",
      titleFont: "'Great Vibes', cursive",
      titleWeight: "400",
      titleSize: 72,
      letterSpace: "0px",
      dark: true,
      colors: {
        bg1: "#2a0e5e", bg2: "#5b21b6",
        accent: "#c4b5fd", accentDark: "#f5f3ff",
        ink: "#ede9fe", soft: "#8b5cf6", seal: "#7c3aed"
      }
    }
  ];

  let selected = TEMPLATES[0];

  const name1El = document.getElementById("cert-name1");
  const name2El = document.getElementById("cert-name2");
  const dateEl = document.getElementById("cert-date");
  const msgEl = document.getElementById("cert-message");
  const templatesWrap = document.getElementById("cert-templates");

  const today = new Date();
  dateEl.value =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  function renderTemplateCards() {
    templatesWrap.innerHTML = "";
    TEMPLATES.forEach((t) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "cert-template-card" + (t.id === selected.id ? " selected" : "");
      card.setAttribute("aria-pressed", t.id === selected.id ? "true" : "false");
      card.innerHTML =
        '<span class="cert-template-emoji">' + t.emoji + "</span>" +
        '<span class="cert-template-name">' + t.nameBn + "</span>" +
        '<span class="cert-template-sub">' + t.nameEn + "</span>";
      card.addEventListener("click", () => {
        selected = t;
        renderTemplateCards();
        draw();
      });
      templatesWrap.appendChild(card);
    });
  }

  /* ---------- shape helpers ---------- */
  function starPath(cx, cy, spikes, outerR, innerR) {
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const a = -Math.PI / 2 + (i * Math.PI) / spikes;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  function heartPath(cx, cy, s) {
    ctx.beginPath();
    ctx.moveTo(cx, cy + s * 0.9);
    ctx.bezierCurveTo(cx - s * 1.6, cy - s * 0.1, cx - s * 0.9, cy - s * 1.2, cx, cy - s * 0.4);
    ctx.bezierCurveTo(cx + s * 0.9, cy - s * 1.2, cx + s * 1.6, cy - s * 0.1, cx, cy + s * 0.9);
    ctx.closePath();
  }

  function sparklePath(cx, cy, r) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r);
    ctx.quadraticCurveTo(cx, cy, cx + r, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + r);
    ctx.quadraticCurveTo(cx, cy, cx - r, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - r);
    ctx.closePath();
  }

  function roundRectStroke(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.stroke();
  }

  /* ---------- background patterns ---------- */
  function paintDots(c) {
    ctx.save();
    ctx.fillStyle = c.accent;
    ctx.globalAlpha = 0.10;
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 9; x++) {
        const px = 80 + x * 130 + (y % 2 ? 65 : 0);
        const py = 95 + y * 128;
        ctx.beginPath();
        ctx.arc(px, py, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function paintHearts(c) {
    ctx.save();
    ctx.fillStyle = c.accent;
    ctx.globalAlpha = 0.10;
    const spots = [
      [120,140,26],[340,90,18],[560,150,30],[780,100,20],[1000,140,26],
      [1120,230,18],[180,330,20],[1050,370,24],[90,540,22],[1120,560,26],
      [200,720,24],[980,730,20],[430,770,18],[700,775,22]
    ];
    spots.forEach(function (s) { heartPath(s[0], s[1], s[2]); ctx.fill(); });
    ctx.restore();
  }

  function paintRoyal(c) {
    ctx.save();
    ctx.strokeStyle = c.accent;
    ctx.globalAlpha = 0.12;
    ctx.lineWidth = 2;
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 10; x++) {
        const px = 70 + x * 120, py = 85 + y * 112, s = 13;
        ctx.beginPath();
        ctx.moveTo(px, py - s); ctx.lineTo(px + s, py);
        ctx.lineTo(px, py + s); ctx.lineTo(px - s, py);
        ctx.closePath();
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function paintStars() {
    ctx.save();
    for (let i = 0; i < 42; i++) {
      const x = 60 + ((i * 211) % 1080);
      const y = 60 + ((i * 347) % 730);
      const r = 4 + (i % 3) * 4;
      ctx.globalAlpha = 0.14 + (i % 4) * 0.07;
      ctx.fillStyle = "#ffffff";
      sparklePath(x, y, r);
      ctx.fill();
    }
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "#fef9c3";
    ctx.beginPath();
    ctx.arc(1050, 130, 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#5b21b6";
    ctx.beginPath();
    ctx.arc(1064, 120, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* ---------- borders ---------- */
  function borderDots(c) {
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 9;
    roundRectStroke(30, 30, W - 60, H - 60, 36);
    ctx.save();
    ctx.setLineDash([14, 10]);
    ctx.strokeStyle = c.soft;
    ctx.lineWidth = 3;
    roundRectStroke(52, 52, W - 104, H - 104, 26);
    ctx.restore();
    ctx.fillStyle = c.accent;
    [[74,74],[W-74,74],[74,H-74],[W-74,H-74]].forEach(function (p) {
      ctx.beginPath(); ctx.arc(p[0], p[1], 11, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(p[0], p[1], 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = c.accent;
    });
  }

  function borderHearts(c) {
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 6;
    ctx.strokeRect(28, 28, W - 56, H - 56);
    ctx.lineWidth = 2;
    ctx.strokeStyle = c.soft;
    ctx.strokeRect(46, 46, W - 92, H - 92);
    ctx.fillStyle = c.accent;
    [[46,46],[W-46,46],[46,H-46],[W-46,H-46]].forEach(function (p) {
      heartPath(p[0], p[1], 13);
      ctx.fill();
    });
    ctx.globalAlpha = 0.85;
    [[W/2,28],[W/2,H-28]].forEach(function (p) {
      heartPath(p[0], p[1], 11);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function borderRoyal(c) {
    ctx.strokeStyle = c.accent;
    [26, 36, 48].forEach(function (o, i) {
      ctx.lineWidth = i === 2 ? 3 : 2;
      ctx.strokeRect(o, o, W - o * 2, H - o * 2);
    });
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 3;
    [[62,62,1,1],[W-62,62,-1,1],[62,H-62,1,-1],[W-62,H-62,-1,-1]].forEach(function (k) {
      const x = k[0], y = k[1], sx = k[2], sy = k[3];
      ctx.beginPath();
      ctx.moveTo(x, y + 44 * sy);
      ctx.quadraticCurveTo(x, y, x + 44 * sx, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y + 30 * sy);
      ctx.quadraticCurveTo(x + 8 * sx, y + 8 * sy, x + 30 * sx, y);
      ctx.stroke();
      ctx.fillStyle = c.accent;
      ctx.beginPath();
      ctx.arc(x + 52 * sx, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y + 52 * sy, 5, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function borderStars(c) {
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 2.5;
    ctx.strokeRect(28, 28, W - 56, H - 56);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = c.soft;
    ctx.strokeRect(44, 44, W - 88, H - 88);
    ctx.fillStyle = "#fef9c3";
    [[44,44],[W-44,44],[44,H-44],[W-44,H-44]].forEach(function (p) {
      starPath(p[0], p[1], 5, 13, 5.5);
      ctx.fill();
    });
  }

  /* ---------- seals ---------- */
  function sealDots(c, emoji, sx, sy) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(-0.1);
    ctx.fillStyle = c.seal;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(Math.cos(a) * 52, Math.sin(a) * 52, 10, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath(); ctx.arc(0, 0, 52, 0, Math.PI * 2); ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = "#ffffff";
    ctx.beginPath(); ctx.arc(0, 0, 42, 0, Math.PI * 2); ctx.stroke();
    ctx.font = "38px serif"; ctx.fillStyle = "#fff";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 0, 2);
    ctx.restore();
  }

  function sealHeart(c, emoji, sx, sy) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(-0.08);
    ctx.fillStyle = c.seal;
    heartPath(0, -6, 52);
    ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = "#ffffff";
    heartPath(0, -6, 40);
    ctx.stroke();
    ctx.font = "34px serif"; ctx.fillStyle = "#fff";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 0, -4);
    ctx.restore();
  }

  function sealRoyal(c, emoji, sx, sy) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(0.06);
    const g = ctx.createLinearGradient(-55, -55, 55, 55);
    g.addColorStop(0, "#f6d878");
    g.addColorStop(0.5, c.seal);
    g.addColorStop(1, "#a16207");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(0, 0, 55, 0, Math.PI * 2); ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = "#fffbeb";
    ctx.beginPath(); ctx.arc(0, 0, 46, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(0, 0, 38, 0, Math.PI * 2); ctx.stroke();
    ctx.font = "36px serif"; ctx.fillStyle = "#fffbeb";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 0, 2);
    ctx.restore();
  }

  function sealStar(c, emoji, sx, sy) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(-0.12);
    ctx.fillStyle = c.seal;
    starPath(0, 0, 5, 58, 26);
    ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = "#fef9c3";
    starPath(0, 0, 5, 46, 21);
    ctx.stroke();
    ctx.font = "32px serif"; ctx.fillStyle = "#fff";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(emoji, 0, 2);
    ctx.restore();
  }

  /* ---------- text helpers ---------- */
  function wrapText(text, maxWidth, font) {
    ctx.font = font;
    const words = text.split(" ");
    const lines = [];
    let line = "";
    words.forEach(function (w) {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  /* Optical centering: script/calligraphy fonts have asymmetric side
     bearings, so plain textAlign=center can look shifted. This centers
     the actual ink using measured bounding boxes. */
  function drawOpticallyCentered(text, y, font, color, spacing) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = "middle";
    try { ctx.letterSpacing = spacing || "0px"; } catch (e) {}
    let dx = 0;
    try {
      const m = ctx.measureText(text);
      if (typeof m.actualBoundingBoxLeft === "number" &&
          typeof m.actualBoundingBoxRight === "number") {
        dx = (m.actualBoundingBoxLeft - m.actualBoundingBoxRight) / 2;
      }
    } catch (e) {}
    ctx.textAlign = "left";
    ctx.fillText(text, W / 2 + dx, y);
    ctx.textAlign = "center";
    try { ctx.letterSpacing = "0px"; } catch (e) {}
  }

  function drawCentered(text, y, font, color, spacing) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    try { ctx.letterSpacing = spacing || "0px"; } catch (e) {}
    ctx.fillText(text, W / 2, y);
    try { ctx.letterSpacing = "0px"; } catch (e) {}
  }

  function fitFont(text, baseSize, maxWidth, family, weight) {
    let size = baseSize;
    while (size > 20) {
      ctx.font = weight + " " + size + "px " + family;
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 2;
    }
    return weight + " " + size + "px " + family;
  }

  /* ---------- main draw ---------- */
  function draw() {
    const c = selected.colors;
    const dark = !!selected.dark;
    const name1 = (name1El.value || "").trim() || "Partner";
    const name2 = (name2El.value || "").trim() || "Picchi";
    const message = (msgEl.value || "").trim() || selected.defaultMessage;
    const dateStr = formatDate(dateEl.value);

    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, c.bg1);
    bg.addColorStop(1, c.bg2);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    let sealFn = sealDots;
    if (selected.pattern === "dots") { paintDots(c); borderDots(c); sealFn = sealDots; }
    else if (selected.pattern === "hearts") { paintHearts(c); borderHearts(c); sealFn = sealHeart; }
    else if (selected.pattern === "royal") { paintRoyal(c); borderRoyal(c); sealFn = sealRoyal; }
    else if (selected.pattern === "stars") { paintStars(); borderStars(c); sealFn = sealStar; }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "72px serif";
    ctx.fillText(selected.emoji, W / 2, 130);
    drawCentered("★  O F F I C I A L  ★", 196, "600 20px Poppins, sans-serif", c.accent);

    const isScriptTitle = selected.titleFont.indexOf("Great Vibes") !== -1;
    const titleDrawFn = isScriptTitle ? drawOpticallyCentered : drawCentered;
    titleDrawFn(
      selected.nameEn, 250,
      fitFont(selected.nameEn, selected.titleSize, 980, selected.titleFont, selected.titleWeight),
      c.accentDark, selected.letterSpace
    );
    drawCentered(selected.nameBn, 312, "600 32px 'Hind Siliguri', sans-serif", c.accent);

    ctx.strokeStyle = c.soft;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 220, 350);
    ctx.lineTo(W / 2 + 220, 350);
    ctx.stroke();
    ctx.font = "26px serif";
    ctx.fillStyle = c.accent;
    ctx.fillText(selected.pattern === "stars" ? "✦" : "❤", W / 2, 350);

    drawCentered(selected.presentLine, 394, "500 26px 'Hind Siliguri', sans-serif", c.ink);

    const names = name1 + "  ❤  " + name2;
    drawOpticallyCentered(
      names, 470,
      fitFont(names, 84, 960, "'Great Vibes', cursive", "400"),
      c.accentDark
    );

    const msgLines = wrapText(message, 880, "500 27px 'Hind Siliguri', sans-serif");
    let my = 548;
    msgLines.slice(0, 3).forEach(function (ln) {
      drawCentered(ln, my, "500 27px 'Hind Siliguri', sans-serif", c.ink);
      my += 40;
    });

    ctx.textAlign = "left";
    ctx.font = "600 24px Poppins, sans-serif";
    ctx.fillStyle = dark ? c.accent : c.accentDark;
    ctx.fillText("Date: " + dateStr, 120, H - 122);
    ctx.strokeStyle = c.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W - 420, H - 134);
    ctx.lineTo(W - 140, H - 134);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.font = "500 22px 'Hind Siliguri', sans-serif";
    ctx.fillStyle = c.ink;
    ctx.fillText(dark ? "স্বাক্ষর ✦" : "স্বাক্ষর", W - 280, H - 98);

    sealFn(c, selected.emoji, W / 2, H - 110);
  }

  function download(fmt) {
    draw();
    const mime = fmt === "png" ? "image/png" : "image/jpeg";
    canvas.toBlob(function (blob) {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "certificate-" + selected.id + "." + fmt;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
    }, mime, 0.92);
  }

  [name1El, name2El, dateEl, msgEl].forEach(function (el) {
    el.addEventListener("input", draw);
    el.addEventListener("change", draw);
  });
  document.getElementById("cert-download-png").addEventListener("click", function () { download("png"); });
  document.getElementById("cert-download-jpg").addEventListener("click", function () { download("jpg"); });

  renderTemplateCards();

  function firstDraw() { draw(); }
  if (document.fonts) {
    try {
      Promise.all([
        document.fonts.load("800 60px 'Baloo Da 2'"),
        document.fonts.load("700 60px 'Cinzel'"),
        document.fonts.load("84px 'Great Vibes'"),
        document.fonts.load("600 30px 'Hind Siliguri'")
      ]).then(firstDraw).catch(firstDraw);
    } catch (e) { firstDraw(); }
    if (document.fonts.ready) document.fonts.ready.then(draw);
  } else {
    firstDraw();
  }
}

/* Lazy boot: certificate fonts + canvas work only run when the user
   scrolls near the #certificate section, so initial page load stays fast. */
function bootCertificateMaker() {
  if (window.__certBooted) return;
  window.__certBooted = true;
  initCertificateMaker();
}

function setupCertLazyBoot() {
  const section = document.getElementById("certificate");
  if (!section || !("IntersectionObserver" in window)) {
    bootCertificateMaker();
    return;
  }
  if (window.location && window.location.hash === "#certificate") {
    bootCertificateMaker();
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        bootCertificateMaker();
        io.disconnect();
      }
    });
  }, { rootMargin: "600px 0px" });
  io.observe(section);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupCertLazyBoot);
} else {
  setupCertLazyBoot();
}
