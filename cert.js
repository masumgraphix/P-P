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
      nameEn: "Certificate of Marriage (Fun Edition)",
      presentLine: "মনের বিয়ের আনুষ্ঠানিক ঘোষণা",
      defaultMessage:
        "মনের বিয়ে তো কবেই হয়ে গেছে! এই সার্টিফিকেট শুধুই কাগজে-কলমে স্বীকৃতি — সাক্ষী রইলো পুরো দুনিয়া।",
      colors: {
        bg1: "#fffbeb", bg2: "#fef3c7",
        accent: "#b45309", accentDark: "#78350f",
        ink: "#451a03", soft: "#fcd34d", seal: "#d97706"
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
      colors: {
        bg1: "#f5f3ff", bg2: "#ede9fe",
        accent: "#7c3aed", accentDark: "#5b21b6",
        ink: "#2e1065", soft: "#c4b5fd", seal: "#8b5cf6"
      }
    }
  ];

  let selected = TEMPLATES[0];

  const name1El = document.getElementById("cert-name1");
  const name2El = document.getElementById("cert-name2");
  const dateEl = document.getElementById("cert-date");
  const msgEl = document.getElementById("cert-message");
  const templatesWrap = document.getElementById("cert-templates");

  // Default date = today
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

  // Render template picker cards
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

  function wrapText(text, maxWidth, font) {
    ctx.font = font;
    const words = text.split(" ");
    const lines = [];
    let line = "";
    words.forEach((w) => {
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

  function drawCentered(text, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, W / 2, y);
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

  function draw() {
    const c = selected.colors;
    const name1 = (name1El.value || "").trim() || "Partner";
    const name2 = (name2El.value || "").trim() || "Picchi";
    const message = (msgEl.value || "").trim() || selected.defaultMessage;
    const dateStr = formatDate(dateEl.value);

    // Background
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, c.bg1);
    bg.addColorStop(1, c.bg2);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Soft floating hearts pattern
    ctx.save();
    ctx.globalAlpha = 0.07;
    ctx.font = "60px serif";
    ctx.textAlign = "center";
    const hearts = ["❤", "✿", "❦", "♥"];
    for (let i = 0; i < 14; i++) {
      const x = 90 + ((i * 197) % 1020);
      const y = 90 + ((i * 331) % 670);
      ctx.fillStyle = c.accent;
      ctx.fillText(hearts[i % hearts.length], x, y);
    }
    ctx.restore();

    // Double border
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 6;
    ctx.strokeRect(26, 26, W - 52, H - 52);
    ctx.strokeStyle = c.soft;
    ctx.lineWidth = 2;
    ctx.strokeRect(44, 44, W - 88, H - 88);

    // Corner ornaments
    const corners = [[44, 44], [W - 44, 44], [44, H - 44], [W - 44, H - 44]];
    ctx.fillStyle = c.accent;
    corners.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = c.accent;
    });

    // Top emoji + official line
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "72px serif";
    ctx.fillText(selected.emoji, W / 2, 130);
    drawCentered("★  O F F I C I A L  ★", 196, "600 20px Poppins, sans-serif", c.accentDark);

    // Title
    drawCentered(selected.nameEn, 248, fitFont(selected.nameEn, 62, 980, "'Baloo Da 2', sans-serif", "800"), c.accentDark);
    drawCentered(selected.nameBn, 308, "600 32px 'Hind Siliguri', sans-serif", c.accent);

    // Divider
    ctx.strokeStyle = c.soft;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 220, 348);
    ctx.lineTo(W / 2 + 220, 348);
    ctx.stroke();
    ctx.font = "26px serif";
    ctx.fillStyle = c.accent;
    ctx.fillText("❤", W / 2, 348);

    // Presented line
    drawCentered(selected.presentLine, 392, "500 26px 'Hind Siliguri', sans-serif", c.ink);

    // Names
    const names = name1 + "  ❤  " + name2;
    drawCentered(names, 462, fitFont(names, 58, 960, "'Baloo Da 2', 'Hind Siliguri', sans-serif", "800"), c.accentDark);

    // Message (wrapped)
    const msgLines = wrapText(message, 880, "500 27px 'Hind Siliguri', sans-serif");
    let my = 540;
    ctx.fillStyle = c.ink;
    msgLines.slice(0, 3).forEach((ln) => {
      drawCentered(ln, my, "500 27px 'Hind Siliguri', sans-serif", c.ink);
      my += 40;
    });

    // Date (left) + signature (right)
    ctx.textAlign = "left";
    ctx.font = "600 24px Poppins, sans-serif";
    ctx.fillStyle = c.accentDark;
    ctx.fillText("Date: " + dateStr, 120, H - 120);
    ctx.strokeStyle = c.ink;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W - 420, H - 132);
    ctx.lineTo(W - 140, H - 132);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.font = "500 22px 'Hind Siliguri', sans-serif";
    ctx.fillStyle = c.ink;
    ctx.fillText("স্বাক্ষর", W - 280, H - 96);

    // Seal (bottom center-right)
    const sx = W / 2, sy = H - 108, sr = 52;
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(-0.12);
    ctx.beginPath();
    ctx.arc(0, 0, sr, 0, Math.PI * 2);
    ctx.fillStyle = c.seal;
    ctx.globalAlpha = 0.92;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(0, 0, sr - 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = "40px serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(selected.emoji, 0, 2);
    ctx.restore();
  }

  function download(fmt) {
    draw(); // ensure latest
    const mime = fmt === "png" ? "image/png" : "image/jpeg";
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "certificate-" + selected.id + "." + fmt;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    }, mime, 0.92);
  }

  // Events
  [name1El, name2El, dateEl, msgEl].forEach((el) => {
    el.addEventListener("input", draw);
    el.addEventListener("change", draw);
  });
  document.getElementById("cert-download-png").addEventListener("click", () => download("png"));
  document.getElementById("cert-download-jpg").addEventListener("click", () => download("jpg"));

  renderTemplateCards();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(draw);
  }
  draw();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCertificateMaker);
} else {
  initCertificateMaker();
}
