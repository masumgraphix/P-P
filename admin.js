/**
 * ============================================================================
 * PARTNER & PICCHI DIARIES — ADMIN STUDIO SCRIPT
 * Full data management, video/photo moments, realtime Firestore cloud sync
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. STATE & CONFIG
  const DEFAULT_PIN = "2026";
  let activeTab = "panel-moments";
  let activeDreamPerson = "partner";
  let currentConfig = null;
  let confirmCallback = null;
  let firestoreDb = null;
  let broadcastChannel = null;

  // Initialize BroadcastChannel
  if (typeof BroadcastChannel !== "undefined") {
    broadcastChannel = new BroadcastChannel("p_p_diaries_channel");
  }

  // 2. DOM ELEMENTS
  const lockScreen = document.getElementById("admin-lock-screen");
  const dashboard = document.getElementById("admin-dashboard");
  const pinInput = document.getElementById("pin-input");
  const pinToggleBtn = document.getElementById("pin-toggle-visibility");
  const pinSubmitBtn = document.getElementById("pin-submit-btn");
  const pinErrorMsg = document.getElementById("pin-error-msg");
  const keypadKeys = document.querySelectorAll(".keypad-key[data-digit]");
  const keyClear = document.getElementById("key-clear");
  const keyBackspace = document.getElementById("key-backspace");
  const btnLogout = document.getElementById("btn-logout");
  const btnGlobalSave = document.getElementById("btn-global-save");
  const syncStatusText = document.getElementById("sync-status-text");
  const syncStatusBadge = document.getElementById("sync-status-badge");
  const cloudSyncLabel = document.getElementById("cloud-sync-status-label");

  // 3. AUTHENTICATION CONTROLLER
  function getStoredPin() {
    return localStorage.getItem("P_P_ADMIN_PIN") || DEFAULT_PIN;
  }

  function checkAuth() {
    const isAuth = sessionStorage.getItem("P_P_ADMIN_AUTH") === "true";
    if (isAuth) {
      showDashboard();
    } else {
      showLockScreen();
    }
  }

  function showLockScreen() {
    if (lockScreen) lockScreen.style.display = "flex";
    if (dashboard) dashboard.style.display = "none";
    if (pinInput) {
      pinInput.value = "";
      pinInput.focus();
    }
    if (pinErrorMsg) pinErrorMsg.style.display = "none";
  }

  function showDashboard() {
    if (lockScreen) lockScreen.style.display = "none";
    if (dashboard) dashboard.style.display = "flex";
    initData();
  }

  function handleUnlock() {
    const enteredPin = (pinInput ? pinInput.value : "").trim();
    const correctPin = getStoredPin();

    if (enteredPin === correctPin) {
      sessionStorage.setItem("P_P_ADMIN_AUTH", "true");
      showDashboard();
      showToast("স্বাগতম! ড্যাশবোর্ড আনলক হয়েছে 💖", "success");
    } else {
      if (pinErrorMsg) {
        pinErrorMsg.textContent = "ভুল পিন কোড! পুনরায় সঠিক পিন দিন।";
        pinErrorMsg.style.display = "block";
      }
      if (pinInput) {
        pinInput.value = "";
        pinInput.focus();
      }
    }
  }

  // Keypad event bindings
  keypadKeys.forEach(btn => {
    btn.addEventListener("click", () => {
      const digit = btn.getAttribute("data-digit");
      if (pinInput && pinInput.value.length < 8) {
        pinInput.value += digit;
      }
    });
  });

  if (keyClear) {
    keyClear.addEventListener("click", () => {
      if (pinInput) pinInput.value = "";
    });
  }

  if (keyBackspace) {
    keyBackspace.addEventListener("click", () => {
      if (pinInput && pinInput.value.length > 0) {
        pinInput.value = pinInput.value.slice(0, -1);
      }
    });
  }

  if (pinSubmitBtn) pinSubmitBtn.addEventListener("click", handleUnlock);
  if (pinInput) {
    pinInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleUnlock();
    });
  }

  if (pinToggleBtn) {
    pinToggleBtn.addEventListener("click", () => {
      if (pinInput.type === "password") {
        pinInput.type = "text";
        pinToggleBtn.textContent = "🙈";
      } else {
        pinInput.type = "password";
        pinToggleBtn.textContent = "👁️";
      }
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      sessionStorage.removeItem("P_P_ADMIN_AUTH");
      showLockScreen();
      showToast("ড্যাশবোর্ড লক করা হয়েছে 🔒", "info");
    });
  }

  // 4. DATA INITIALIZATION & CLOUD SYNC
  function initData() {
    // 1. Start with base clone of STORY_CONFIG
    currentConfig = JSON.parse(JSON.stringify(window.STORY_CONFIG || {}));
    if (!currentConfig.chatMemories) currentConfig.chatMemories = [];
    if (!currentConfig.diarySpreads) currentConfig.diarySpreads = [];
    if (!currentConfig.partnerDreams) currentConfig.partnerDreams = [];
    if (!currentConfig.picchiDreams) currentConfig.picchiDreams = [];
    if (!currentConfig.virtualDates) {
      currentConfig.virtualDates = {
        total: 42,
        movieDates: { count: 10, movies: [] },
        sleepingDates: { count: 31, history: [] }
      };
    }

    // 2. Merge local storage if exists
    try {
      const localCfg = localStorage.getItem("P_P_CUSTOM_CONFIG");
      if (localCfg) {
        const parsed = JSON.parse(localCfg);
        Object.assign(currentConfig, parsed);
      }
    } catch (e) {
      console.warn("Local storage config load error:", e);
    }

    // 3. Connect to Firebase Firestore
    initFirebase();

    // 4. Render all UI panels
    renderAllPanels();
  }

  function initFirebase() {
    if (typeof firebase !== "undefined" && firebase.firestore) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(window.FIREBASE_CONFIG);
        }
        firestoreDb = firebase.firestore();

        // Optional anonymous auth for security rules
        if (firebase.auth) {
          firebase.auth().signInAnonymously().catch(() => {});
        }

        // Fetch cloud doc diaries/main
        firestoreDb.collection("diaries").doc("main").get().then((doc) => {
          if (doc.exists) {
            const cloudData = doc.data();
            Object.assign(currentConfig, cloudData);
            localStorage.setItem("P_P_CUSTOM_CONFIG", JSON.stringify(cloudData));
            renderAllPanels();
            updateSyncUI(true, "ক্লাউড সিঙ্ক সক্রিয়");
          } else {
            updateSyncUI(true, "ক্লাউড কানেক্টেড (নতুন)");
          }
        }).catch((err) => {
          console.info("Firestore cloud note (fallback active):", err.message);
          updateSyncUI(false, "লোকাল সেভ মোড");
        });

      } catch (err) {
        console.warn("Firebase init error:", err);
        updateSyncUI(false, "লোকাল সেভ মোড");
      }
    } else {
      updateSyncUI(false, "লোকাল মোড");
    }
  }

  function updateSyncUI(isOnline, text) {
    if (syncStatusText) syncStatusText.textContent = text;
    if (cloudSyncLabel) {
      cloudSyncLabel.textContent = isOnline ? "অনলাইন ও সক্রিয়" : "অফলাইন / লোকাল মোড";
      cloudSyncLabel.className = isOnline ? "status-online" : "status-offline";
    }
    if (syncStatusBadge) {
      syncStatusBadge.className = isOnline ? "sync-status-badge badge-cloud" : "sync-status-badge badge-local";
    }
  }

  // 5. SAVE & PUBLISH ACTION
  function saveAndPublish(silent = false) {
    if (!currentConfig) return;

    // 1. Always save to LocalStorage (Zero fail guarantee)
    try {
      localStorage.setItem("P_P_CUSTOM_CONFIG", JSON.stringify(currentConfig));
    } catch (err) {
      console.warn("LocalStorage save error:", err);
    }

    // 2. Broadcast to other open tabs for instant live sync
    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage({
          type: "CONFIG_UPDATED",
          config: currentConfig
        });
      } catch (_) {}
    }

    // 3. Save to Firebase Cloud Firestore
    if (firestoreDb) {
      firestoreDb.collection("diaries").doc("main").set(currentConfig)
        .then(() => {
          updateSyncUI(true, "ক্লাউডে লাইভ হয়েছে");
          if (!silent) showToast("অভিনন্দন! পরিবর্তনগুলো সফলভাবে সাইটে লাইভ হয়েছে! 🎉", "success");
        })
        .catch((err) => {
          console.warn("Firestore save note:", err.message);
          updateSyncUI(false, "লোকালে সেভ হয়েছে");
          if (!silent) showToast("লোকালে সেভ হয়েছে (ক্লাউড পরে সিঙ্ক হবে) 💾", "info");
        });
    } else {
      if (!silent) showToast("লোকালে সেভ হয়েছে! মূল ওয়েবসাইট রিফ্রেশ করলেই দেখতে পাবেন। 💾", "success");
    }

    // Refresh UI counts
    updateBadgeCounts();
  }

  if (btnGlobalSave) {
    btnGlobalSave.addEventListener("click", () => saveAndPublish(false));
  }

  // 6. TAB SWITCHING CONTROLLER
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
      activeTab = targetId;
    });
  });

  // 7. TOAST NOTIFICATIONS
  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    let icon = "✨";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 8. UNIVERSAL CONFIRMATION DIALOG
  function openConfirmModal(title, message, onConfirm) {
    const modal = document.getElementById("modal-confirm");
    const titleEl = document.getElementById("confirm-title");
    const msgEl = document.getElementById("confirm-message");
    const confirmBtn = document.getElementById("btn-confirm-action");

    if (!modal) return;
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;

    confirmCallback = onConfirm;
    modal.classList.add("active");

    if (confirmBtn) {
      confirmBtn.onclick = () => {
        if (confirmCallback) confirmCallback();
        closeModal("modal-confirm");
      };
    }
  }

  // Generic modal close handler
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      closeModal(modalId);
    });
  });

  function closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove("active");
  }

  // 9. PANEL 1: MOMENTS & VIDEOS CONTROLLER
  function renderMomentsList() {
    const grid = document.getElementById("moments-list-grid");
    const totalCountEl = document.getElementById("stats-total-moments");
    const videoCountEl = document.getElementById("stats-total-videos");
    const photoCountEl = document.getElementById("stats-total-photos");

    if (!grid || !currentConfig) return;

    const memories = currentConfig.chatMemories || [];
    let videoCount = 0;
    let photoCount = 0;

    grid.innerHTML = "";

    memories.forEach((mem, idx) => {
      const isVideo = mem.type === "video" || !!mem.video;
      if (isVideo) videoCount++;
      else photoCount++;

      const card = document.createElement("div");
      card.className = "admin-moment-card";

      const mediaHtml = isVideo
        ? (mem.image
            ? `<img src="${mem.image}" alt="${mem.title || 'Video'}" />`
            : `<div class="video-thumbnail-placeholder" style="height: 100%;"><span class="video-placeholder-label">ভিডিও থাম্বনেইল</span></div>`)
        : (mem.image
            ? `<img src="${mem.image}" alt="${mem.title || 'Photo'}" />`
            : `<div class="video-thumbnail-placeholder" style="height: 100%;"><span class="video-placeholder-label">ছবি নেই</span></div>`);

      card.innerHTML = `
        <div class="moment-card-media">
          <span class="badge-media-type ${isVideo ? 'badge-video' : ''}">
            ${isVideo ? '🎥 ভিডিও স্মৃতি' : '📷 ছবি স্মৃতি'}
          </span>
          ${mediaHtml}
          ${isVideo ? `<div class="card-play-icon">▶</div>` : ''}
          <div class="badge-reaction">${mem.reaction || '❤️'}</div>
        </div>

        <div class="moment-card-body">
          <div class="moment-card-meta">
            <span class="moment-card-tag">${mem.tag || 'স্মৃতি'}</span>
            <span class="moment-card-date">🗓️ ${mem.dateTag || ''}</span>
          </div>
          <h4 class="moment-card-title">${mem.title || 'স্মৃতির শিরোনাম'}</h4>
          ${mem.quote ? `<div class="moment-card-quote">"${mem.quote}"</div>` : ''}
          <p class="moment-card-caption">"${mem.caption || ''}"</p>

          <div class="moment-card-actions">
            <div class="card-action-btn-group">
              <button type="button" class="card-action-btn btn-edit" data-edit-moment="${idx}">
                <span>✏️</span> <span>সম্পাদনা</span>
              </button>
              <button type="button" class="card-action-btn btn-delete" data-delete-moment="${idx}">
                <span>🗑️</span> <span>মুছুন</span>
              </button>
            </div>
            <div class="card-action-btn-group">
              <button type="button" class="card-action-btn btn-move" data-move-moment="${idx}" data-dir="up" title="উপরে তুলুন" ${idx === 0 ? 'disabled style="opacity:0.4;"' : ''}>↑</button>
              <button type="button" class="card-action-btn btn-move" data-move-moment="${idx}" data-dir="down" title="নিচে নামান" ${idx === memories.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>↓</button>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    if (totalCountEl) totalCountEl.textContent = memories.length;
    if (videoCountEl) videoCountEl.textContent = videoCount;
    if (photoCountEl) photoCountEl.textContent = photoCount;

    // Attach moment event handlers
    attachMomentHandlers();
  }

  function attachMomentHandlers() {
    // Edit Moment
    document.querySelectorAll("[data-edit-moment]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-edit-moment"), 10);
        openMomentModal(idx);
      });
    });

    // Delete Moment
    document.querySelectorAll("[data-delete-moment]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-delete-moment"), 10);
        const item = currentConfig.chatMemories[idx];
        openConfirmModal(
          "মুহূর্ত মুছে ফেলবেন?",
          `আপনি কি "${item.title || 'এই স্মৃতিটি'}" ডিলিট করতে নিশ্চিত?`,
          () => {
            currentConfig.chatMemories.splice(idx, 1);
            saveAndPublish(true);
            renderMomentsList();
            showToast("মুহূর্ত মুছে ফেলা হয়েছে 🗑️", "info");
          }
        );
      });
    });

    // Reorder Moment
    document.querySelectorAll("[data-move-moment]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-move-moment"), 10);
        const dir = btn.getAttribute("data-dir");
        const list = currentConfig.chatMemories;

        if (dir === "up" && idx > 0) {
          const temp = list[idx];
          list[idx] = list[idx - 1];
          list[idx - 1] = temp;
          saveAndPublish(true);
          renderMomentsList();
        } else if (dir === "down" && idx < list.length - 1) {
          const temp = list[idx];
          list[idx] = list[idx + 1];
          list[idx + 1] = temp;
          saveAndPublish(true);
          renderMomentsList();
        }
      });
    });
  }

  // Moment Modal Controller
  const btnAddMoment = document.getElementById("btn-add-moment");
  const modalMoment = document.getElementById("modal-moment");
  const formMoment = document.getElementById("form-moment");
  const btnSaveMoment = document.getElementById("btn-save-moment");
  const radioMomentTypes = document.querySelectorAll('input[name="moment-type"]');
  const videoFieldsGroup = document.getElementById("video-fields-group");
  const photoFieldsGroup = document.getElementById("photo-fields-group");

  radioMomentTypes.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "video") {
        videoFieldsGroup.style.display = "block";
        photoFieldsGroup.style.display = "none";
      } else {
        videoFieldsGroup.style.display = "none";
        photoFieldsGroup.style.display = "block";
      }
    });
  });

  if (btnAddMoment) {
    btnAddMoment.addEventListener("click", () => openMomentModal(-1));
  }

  function openMomentModal(index) {
    if (!modalMoment || !formMoment) return;
    const modalTitle = document.getElementById("modal-moment-title");
    const editIdxInput = document.getElementById("moment-edit-index");
    const videoStatus = document.getElementById("video-file-status");
    if (videoStatus) videoStatus.style.display = "none";

    editIdxInput.value = index;

    if (index >= 0) {
      const item = currentConfig.chatMemories[index];
      modalTitle.textContent = "মুহূর্ত বা ভিডিও সম্পাদনা করুন";
      const isVideo = item.type === "video" || !!item.video;

      document.querySelector(`input[name="moment-type"][value="${isVideo ? 'video' : 'photo'}"]`).checked = true;
      videoFieldsGroup.style.display = isVideo ? "block" : "none";
      photoFieldsGroup.style.display = isVideo ? "none" : "block";

      document.getElementById("moment-video-url").value = item.video || "";
      document.getElementById("moment-poster-url").value = item.image || "";
      document.getElementById("moment-image-url").value = item.image || "";
      document.getElementById("moment-title").value = item.title || "";
      document.getElementById("moment-date-tag").value = item.dateTag || "";
      document.getElementById("moment-sender").value = item.sender || "Partner & Picchi";
      document.getElementById("moment-tag").value = item.tag || "";
      document.getElementById("moment-reaction").value = item.reaction || "❤️";
      document.getElementById("moment-quote").value = item.quote || "";
      document.getElementById("moment-caption").value = item.caption || "";
    } else {
      modalTitle.textContent = "নতুন মুহূর্ত বা ভিডিও যোগ করুন";
      formMoment.reset();
      document.querySelector('input[name="moment-type"][value="photo"]').checked = true;
      videoFieldsGroup.style.display = "none";
      photoFieldsGroup.style.display = "block";
      document.getElementById("moment-sender").value = "Partner & Picchi";
      document.getElementById("moment-reaction").value = "❤️";
    }

    modalMoment.classList.add("active");
  }

  // File Upload Handlers for Moment
  const inputImageFile = document.getElementById("moment-image-file");
  const inputPosterFile = document.getElementById("moment-poster-file");
  const inputVideoFile = document.getElementById("moment-video-file");

  if (inputImageFile) {
    inputImageFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("moment-image-url").value = event.target.result;
        showToast("ছবি আপলোড সম্পন্ন! 🖼️", "success");
      };
      reader.readAsDataURL(file);
    });
  }

  if (inputPosterFile) {
    inputPosterFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("moment-poster-url").value = event.target.result;
        showToast("ভিডিও পোস্টার আপলোড সম্পন্ন! 🖼️", "success");
      };
      reader.readAsDataURL(file);
    });
  }

  if (inputVideoFile) {
    inputVideoFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const statusEl = document.getElementById("video-file-status");
      if (file.size > 25 * 1024 * 1024) {
        showToast("ভিডিও সাইজ ২৫ মেগাবাইটের বেশি! দীর্ঘ ভিডিওর জন্য ইউটিউব বা ড্রাইভ লিংক ব্যবহার করুন।", "error");
        return;
      }
      showToast("ভিডিও প্রক্রিয়া করা হচ্ছে...", "info");
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("moment-video-url").value = event.target.result;
        if (statusEl) {
          statusEl.textContent = `✅ ভিডিও ফাইল লোড হয়েছে: ${file.name} (${Math.round(file.size / 1024)} KB)`;
          statusEl.style.display = "block";
        }
        showToast("ভিডিও সফলভাবে লোড হয়েছে! 🎥", "success");
      };
      reader.readAsDataURL(file);
    });
  }

  // Save Moment
  if (btnSaveMoment) {
    btnSaveMoment.addEventListener("click", () => {
      const editIdx = parseInt(document.getElementById("moment-edit-index").value, 10);
      const isVideo = document.querySelector('input[name="moment-type"]:checked').value === "video";
      const title = document.getElementById("moment-title").value.trim();

      if (!title) {
        showToast("দয়া করে স্মৃতির একটি শিরোনাম দিন!", "error");
        return;
      }

      const momentObj = {
        type: isVideo ? "video" : "photo",
        title: title,
        sender: document.getElementById("moment-sender").value.trim() || "Partner & Picchi",
        avatarLetter: (document.getElementById("moment-sender").value.trim() || "P")[0].toUpperCase(),
        status: isVideo ? "ভিডিও স্মৃতি • প্লে করুন" : "অনলাইন ছিল • গভীর স্মৃতি",
        tag: document.getElementById("moment-tag").value.trim() || (isVideo ? "ভিডিও মেমোরি" : "স্মৃতি"),
        reaction: document.getElementById("moment-reaction").value.trim() || "❤️",
        quote: document.getElementById("moment-quote").value.trim(),
        caption: document.getElementById("moment-caption").value.trim(),
        dateTag: document.getElementById("moment-date-tag").value.trim()
      };

      if (isVideo) {
        momentObj.video = document.getElementById("moment-video-url").value.trim();
        momentObj.image = document.getElementById("moment-poster-url").value.trim();
      } else {
        momentObj.image = document.getElementById("moment-image-url").value.trim();
      }

      if (editIdx >= 0) {
        currentConfig.chatMemories[editIdx] = momentObj;
      } else {
        currentConfig.chatMemories.unshift(momentObj);
      }

      saveAndPublish(false);
      renderMomentsList();
      closeModal("modal-moment");
    });
  }

  // 10. PANEL 2: CHAPTERS CONTROLLER
  function renderChaptersList() {
    const listEl = document.getElementById("diary-chapters-list");
    if (!listEl || !currentConfig) return;

    const chapters = currentConfig.diarySpreads || [];
    listEl.innerHTML = "";

    chapters.forEach((ch, idx) => {
      const card = document.createElement("div");
      card.className = "admin-chapter-card";

      const leftText = ch.leftPage ? (ch.leftPage.text || ch.leftPage.caption || "") : "";
      const rightText = ch.rightPage ? (ch.rightPage.text || ch.rightPage.caption || "") : "";

      card.innerHTML = `
        <div class="chapter-header-row">
          <div class="chapter-badge-title">
            <span class="chapter-pill">${ch.chapterBadge || `অধ্যায় ${idx + 1}`}</span>
            <span class="chapter-name">${ch.chapterTitle || 'শিরোনামহীন অধ্যায়'}</span>
          </div>
          <span class="chapter-date-badge">🗓️ ${ch.date || ''}</span>
        </div>

        <div class="chapter-pages-grid">
          <div class="page-preview-box">
            <div class="page-preview-title">📄 বাম পাতা: ${ch.leftPage?.title || ch.leftPage?.badge || 'পাতা ১'}</div>
            <p class="page-preview-snippet">${leftText.length > 140 ? leftText.substring(0, 140) + '...' : leftText}</p>
          </div>
          <div class="page-preview-box">
            <div class="page-preview-title">📄 ডান পাতা: ${ch.rightPage?.title || ch.rightPage?.badge || 'পাতা ২'}</div>
            <p class="page-preview-snippet">${rightText.length > 140 ? rightText.substring(0, 140) + '...' : rightText}</p>
          </div>
        </div>

        <div class="moment-card-actions" style="margin-top: 1rem;">
          <div class="card-action-btn-group">
            <button type="button" class="card-action-btn btn-delete" data-delete-chapter="${idx}">
              <span>🗑️</span> <span>অধ্যায় মুছুন</span>
            </button>
          </div>
          <div class="card-action-btn-group">
            <button type="button" class="card-action-btn btn-move" data-move-chapter="${idx}" data-dir="up" ${idx === 0 ? 'disabled style="opacity:0.4;"' : ''}>↑</button>
            <button type="button" class="card-action-btn btn-move" data-move-chapter="${idx}" data-dir="down" ${idx === chapters.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>↓</button>
          </div>
        </div>
      `;
      listEl.appendChild(card);
    });

    // Chapter Event handlers
    document.querySelectorAll("[data-delete-chapter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-delete-chapter"), 10);
        openConfirmModal(
          "অধ্যায় মুছে ফেলবেন?",
          "আপনি কি নিশ্চিত যে এই ডায়েরি অধ্যায়টি মুছে ফেলতে চান?",
          () => {
            currentConfig.diarySpreads.splice(idx, 1);
            saveAndPublish(true);
            renderChaptersList();
            showToast("অধ্যায় মুছে ফেলা হয়েছে 🗑️", "info");
          }
        );
      });
    });

    document.querySelectorAll("[data-move-chapter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-move-chapter"), 10);
        const dir = btn.getAttribute("data-dir");
        const list = currentConfig.diarySpreads;

        if (dir === "up" && idx > 0) {
          const t = list[idx]; list[idx] = list[idx - 1]; list[idx - 1] = t;
        } else if (dir === "down" && idx < list.length - 1) {
          const t = list[idx]; list[idx] = list[idx + 1]; list[idx + 1] = t;
        }
        saveAndPublish(true);
        renderChaptersList();
      });
    });
  }

  // Add Chapter Quick Action
  const btnAddChapter = document.getElementById("btn-add-chapter");
  if (btnAddChapter) {
    btnAddChapter.addEventListener("click", () => {
      const nextNum = (currentConfig.diarySpreads?.length || 0) + 1;
      const newSpread = {
        chapterBadge: `অধ্যায় ${window.toBengaliNum ? window.toBengaliNum(nextNum) : nextNum}`,
        chapterTitle: "নতুন ভালোবাসার গল্প",
        date: "আজকের বিশেষ মুহূর্ত",
        leftPage: {
          type: "written",
          badge: "হৃদয়ের কথা",
          title: "নতুন স্মৃতির পাতা...",
          text: "ডায়েরির এই পাতায় যুক্ত হলো আরও একটি নির্ভেজাল অনুভূতির গল্প।",
          quote: "কিছু মুহূর্ত চিরকাল মনের কোণে উজ্জ্বল হয়ে থাকে।",
          footnote: "স্মৃতির অ্যালবাম"
        },
        rightPage: {
          type: "written",
          badge: "অনন্ত সুর",
          title: "স্নিগ্ধ অনুভূতি...",
          text: "জীবনের গল্পে এমন কিছু মানুষ থাকে যাদের সান্নিধ্যে প্রতিদিন এক নতুন আলোর মতো লাগে।",
          quote: "দূরত্ব যেখানে কোনো বাধা নয়, সেখানেই অটুট বন্ধুত্ব।",
          footnote: "চিরন্তন ভালোবাসা"
        }
      };
      currentConfig.diarySpreads.push(newSpread);
      saveAndPublish(false);
      renderChaptersList();
      showToast("নতুন অধ্যায় যোগ করা হয়েছে! 📖", "success");
    });
  }

  // 11. PANEL 3: VIRTUAL DATES CONTROLLER
  function renderVirtualDatesPanel() {
    const moviesList = document.getElementById("admin-movies-list");
    const sleepList = document.getElementById("admin-sleep-list");
    const movieCountLabel = document.getElementById("count-movie-dates");
    const sleepCountLabel = document.getElementById("count-sleep-dates");

    if (!currentConfig || !currentConfig.virtualDates) return;
    const vd = currentConfig.virtualDates;

    // Render Movies
    const movies = vd.movieDates?.movies || [];
    if (movieCountLabel) movieCountLabel.textContent = movies.length;
    if (moviesList) {
      moviesList.innerHTML = "";
      movies.forEach((m, idx) => {
        const row = document.createElement("div");
        row.className = "list-item-row";
        row.innerHTML = `
          <div class="item-left-meta">
            <span class="item-order-badge">${m.order || (window.toBengaliOrdinal ? window.toBengaliOrdinal(idx + 1) : `${idx + 1}`)}</span>
            <span class="item-main-title">${m.icon || '🎬'} ${m.name}</span>
            ${m.date ? `<span class="item-sub-text">🗓️ ${m.date}</span>` : ''}
          </div>
          <div class="item-right-actions">
            <button type="button" class="card-action-btn btn-delete" data-delete-movie="${idx}">
              <span>🗑️</span>
            </button>
          </div>
        `;
        moviesList.appendChild(row);
      });
    }

    // Render Sleeping Dates
    const sleeping = vd.sleepingDates?.history || [];
    if (sleepCountLabel) sleepCountLabel.textContent = sleeping.length;
    if (sleepList) {
      sleepList.innerHTML = "";
      sleeping.forEach((s, idx) => {
        const row = document.createElement("div");
        row.className = "list-item-row";
        row.innerHTML = `
          <div class="item-left-meta">
            <span class="item-order-badge">${s.order || (window.toBengaliOrdinal ? window.toBengaliOrdinal(idx + 1) : `${idx + 1}`)}</span>
            <span class="item-main-title">${s.title}</span>
            <span class="item-sub-text">${s.date || 'অন-কল ঘুম 💤'}</span>
          </div>
          <div class="item-right-actions">
            <button type="button" class="card-action-btn btn-delete" data-delete-sleep="${idx}">
              <span>🗑️</span>
            </button>
          </div>
        `;
        sleepList.appendChild(row);
      });
    }

    // Update Virtual Dates totals
    vd.total = movies.length + sleeping.length + 1; // 1 for rickshaw date
    if (vd.movieDates) vd.movieDates.count = movies.length;
    if (vd.sleepingDates) vd.sleepingDates.count = sleeping.length;

    // Attach Dates handlers
    attachDateHandlers();
  }

  function attachDateHandlers() {
    // Delete Movie
    document.querySelectorAll("[data-delete-movie]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-delete-movie"), 10);
        currentConfig.virtualDates.movieDates.movies.splice(idx, 1);
        saveAndPublish(true);
        renderVirtualDatesPanel();
        showToast("মুভি ডেট সরানো হয়েছে 🗑️", "info");
      });
    });

    // Delete Sleeping Date
    document.querySelectorAll("[data-delete-sleep]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-delete-sleep"), 10);
        currentConfig.virtualDates.sleepingDates.history.splice(idx, 1);
        saveAndPublish(true);
        renderVirtualDatesPanel();
        showToast("স্লিপিং ডেট সরানো হয়েছে 🗑️", "info");
      });
    });
  }

  // Smart 1-Click Next Sleeping Date Calculator
  const btnQuickNextSleep = document.getElementById("btn-quick-next-sleep");
  if (btnQuickNextSleep) {
    btnQuickNextSleep.addEventListener("click", () => {
      const history = currentConfig.virtualDates?.sleepingDates?.history || [];
      const nextIdx = history.length + 1;
      const order = window.toBengaliOrdinal ? window.toBengaliOrdinal(nextIdx) : `${nextIdx}তম`;

      // Smart Date extrapolation based on last item
      let nextDateStr = "নতুন স্লিপিং ডেট";
      if (history.length > 0) {
        const lastItem = history[history.length - 1];
        const match = (lastItem.title || "").match(/(\d+)\s+([^\d\s]+)\s+(\d{4})/);
        if (match) {
          const day = parseInt(match[1], 10);
          const month = match[2];
          const year = match[3];
          const nextDay = day + 1;
          nextDateStr = `${nextDay} ${month} ${year}`;
        } else {
          nextDateStr = `পরবর্তী স্লিপিং ডেট ২০২৬`;
        }
      }

      history.push({
        order: order,
        title: nextDateStr,
        date: "অন-কল ঘুম 💤"
      });

      saveAndPublish(false);
      renderVirtualDatesPanel();
      showToast(`সফলভাবে "${nextDateStr}" স্লিপিং ডেট যুক্ত হয়েছে! 💤`, "success");
    });
  }

  // Movie Modal Controller
  const btnAddMovie = document.getElementById("btn-add-movie");
  const modalMovie = document.getElementById("modal-movie");
  const btnSaveMovie = document.getElementById("btn-save-movie");

  if (btnAddMovie) {
    btnAddMovie.addEventListener("click", () => {
      document.getElementById("form-movie").reset();
      const currentCount = currentConfig.virtualDates?.movieDates?.movies?.length || 0;
      document.getElementById("movie-order").value = window.toBengaliOrdinal ? window.toBengaliOrdinal(currentCount + 1) : `${currentCount + 1}তম`;
      document.getElementById("movie-icon").value = "🍿";
      modalMovie.classList.add("active");
    });
  }

  if (btnSaveMovie) {
    btnSaveMovie.addEventListener("click", () => {
      const name = document.getElementById("movie-name").value.trim();
      if (!name) {
        showToast("দয়া করে মুভির নাম দিন!", "error");
        return;
      }
      const order = document.getElementById("movie-order").value.trim();
      const icon = document.getElementById("movie-icon").value.trim() || "🎬";
      const date = document.getElementById("movie-date").value.trim();

      if (!currentConfig.virtualDates.movieDates.movies) {
        currentConfig.virtualDates.movieDates.movies = [];
      }

      currentConfig.virtualDates.movieDates.movies.push({
        order: order,
        name: name,
        icon: icon,
        date: date || null
      });

      saveAndPublish(false);
      renderVirtualDatesPanel();
      closeModal("modal-movie");
      showToast(`মুভি "${name}" সফলভাবে যুক্ত হয়েছে! 🍿`, "success");
    });
  }

  // Sleeping Date Modal Controller
  const btnAddSleep = document.getElementById("btn-add-sleep");
  const modalSleep = document.getElementById("modal-sleep");
  const btnSaveSleep = document.getElementById("btn-save-sleep");

  if (btnAddSleep) {
    btnAddSleep.addEventListener("click", () => {
      document.getElementById("form-sleep").reset();
      const currentCount = currentConfig.virtualDates?.sleepingDates?.history?.length || 0;
      document.getElementById("sleep-order").value = window.toBengaliOrdinal ? window.toBengaliOrdinal(currentCount + 1) : `${currentCount + 1}তম`;
      document.getElementById("sleep-date").value = "অন-কল ঘুম 💤";
      modalSleep.classList.add("active");
    });
  }

  if (btnSaveSleep) {
    btnSaveSleep.addEventListener("click", () => {
      const title = document.getElementById("sleep-title").value.trim();
      if (!title) {
        showToast("দয়া করে তারিখ বা শিরোনাম দিন!", "error");
        return;
      }
      const order = document.getElementById("sleep-order").value.trim();
      const date = document.getElementById("sleep-date").value.trim();

      if (!currentConfig.virtualDates.sleepingDates.history) {
        currentConfig.virtualDates.sleepingDates.history = [];
      }

      currentConfig.virtualDates.sleepingDates.history.push({
        order: order,
        title: title,
        date: date || null
      });

      saveAndPublish(false);
      renderVirtualDatesPanel();
      closeModal("modal-sleep");
      showToast("স্লিপিং ডেট যুক্ত হয়েছে! 🌙", "success");
    });
  }

  // 12. PANEL 4: DREAMS JOURNAL CONTROLLER
  const personTabBtns = document.querySelectorAll(".person-tab-btn");
  personTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      personTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDreamPerson = btn.getAttribute("data-person");
      renderDreamsList();
    });
  });

  function renderDreamsList() {
    const listEl = document.getElementById("admin-dreams-list");
    const countPartner = document.getElementById("count-partner-dreams");
    const countPicchi = document.getElementById("count-picchi-dreams");

    if (!listEl || !currentConfig) return;

    const partnerDreams = currentConfig.partnerDreams || [];
    const picchiDreams = currentConfig.picchiDreams || [];

    if (countPartner) countPartner.textContent = partnerDreams.length;
    if (countPicchi) countPicchi.textContent = picchiDreams.length;

    const list = activeDreamPerson === "partner" ? partnerDreams : picchiDreams;
    listEl.innerHTML = "";

    list.forEach((dream, idx) => {
      const card = document.createElement("div");
      card.className = "dream-item-card";
      card.innerHTML = `
        <div class="dream-item-content">
          <div class="dream-meta-row">
            <span class="dream-date-tag">🗓️ ${dream.date}</span>
            <h4 class="dream-title-text">${dream.title}</h4>
          </div>
          <p class="dream-full-p">${dream.fullText}</p>
        </div>
        <div class="item-right-actions">
          <button type="button" class="card-action-btn btn-delete" data-delete-dream="${idx}">
            <span>🗑️</span>
          </button>
        </div>
      `;
      listEl.appendChild(card);
    });

    document.querySelectorAll("[data-delete-dream]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-delete-dream"), 10);
        list.splice(idx, 1);
        saveAndPublish(true);
        renderDreamsList();
        showToast("স্বপ্ন মুছে ফেলা হয়েছে 🗑️", "info");
      });
    });
  }

  // Dream Modal Controller
  const btnAddDream = document.getElementById("btn-add-dream");
  const modalDream = document.getElementById("modal-dream");
  const btnSaveDream = document.getElementById("btn-save-dream");

  if (btnAddDream) {
    btnAddDream.addEventListener("click", () => {
      document.getElementById("form-dream").reset();
      document.getElementById("dream-target-person").value = activeDreamPerson;
      modalDream.classList.add("active");
    });
  }

  if (btnSaveDream) {
    btnSaveDream.addEventListener("click", () => {
      const targetPerson = document.getElementById("dream-target-person").value;
      const date = document.getElementById("dream-date").value.trim();
      const title = document.getElementById("dream-title").value.trim();
      const fullText = document.getElementById("dream-full-text").value.trim();

      if (!title || !fullText) {
        showToast("দয়া করে শিরোনাম ও পুরো বিবরণ লিখুন!", "error");
        return;
      }

      const dreamObj = {
        date: date || "আজকের স্বপ্ন",
        title: title,
        fullText: fullText
      };

      if (targetPerson === "partner") {
        if (!currentConfig.partnerDreams) currentConfig.partnerDreams = [];
        currentConfig.partnerDreams.unshift(dreamObj);
      } else {
        if (!currentConfig.picchiDreams) currentConfig.picchiDreams = [];
        currentConfig.picchiDreams.unshift(dreamObj);
      }

      saveAndPublish(false);
      renderDreamsList();
      closeModal("modal-dream");
      showToast("নতুন স্বপ্ন যুক্ত হয়েছে! 🌙", "success");
    });
  }

  // 13. PANEL 5: PROFILE & SECURITY CONTROLLER
  function populateProfileSettings() {
    if (!currentConfig) return;
    const names = currentConfig.names || {};

    const p1 = document.getElementById("set-person1");
    const p2 = document.getElementById("set-person2");
    const brand = document.getElementById("set-brand-title");
    const subheadline = document.getElementById("set-subheadline");
    const closingQuote = document.getElementById("set-closing-quote");
    const startDate = document.getElementById("set-start-date");
    const startDateFormatted = document.getElementById("set-start-date-formatted");

    if (p1) p1.value = names.person1 || "Partner";
    if (p2) p2.value = names.person2 || "Picchi";
    if (brand) brand.value = names.brandTitle || "Partner&Picchi Diaries";
    if (subheadline) subheadline.value = names.subheadline || "";
    if (closingQuote) closingQuote.value = names.closingQuote || "";

    if (startDate && currentConfig.startDate) {
      startDate.value = currentConfig.startDate.slice(0, 16);
    }
    if (startDateFormatted) startDateFormatted.value = currentConfig.startDateFormatted || "";
  }

  const btnSaveProfile = document.getElementById("btn-save-profile");
  if (btnSaveProfile) {
    btnSaveProfile.addEventListener("click", () => {
      if (!currentConfig.names) currentConfig.names = {};

      currentConfig.names.person1 = document.getElementById("set-person1").value.trim();
      currentConfig.names.person2 = document.getElementById("set-person2").value.trim();
      currentConfig.names.brandTitle = document.getElementById("set-brand-title").value.trim();
      currentConfig.names.subheadline = document.getElementById("set-subheadline").value.trim();
      currentConfig.names.closingQuote = document.getElementById("set-closing-quote").value.trim();

      const startDateVal = document.getElementById("set-start-date").value;
      if (startDateVal) {
        currentConfig.startDate = startDateVal + ":00";
      }
      currentConfig.startDateFormatted = document.getElementById("set-start-date-formatted").value.trim();

      saveAndPublish(false);
      showToast("প্রোফাইল সেটিংস সংরক্ষিত হয়েছে! ⚙️", "success");
    });
  }

  // Change PIN Controller
  const btnUpdatePin = document.getElementById("btn-update-pin");
  if (btnUpdatePin) {
    btnUpdatePin.addEventListener("click", () => {
      const curPin = document.getElementById("pin-change-current").value.trim();
      const newPin = document.getElementById("pin-change-new").value.trim();
      const confirmPin = document.getElementById("pin-change-confirm").value.trim();
      const savedPin = getStoredPin();

      if (curPin !== savedPin) {
        showToast("বর্তমান পিন কোড সঠিক নয়!", "error");
        return;
      }
      if (newPin.length < 4 || newPin.length > 8) {
        showToast("নতুন পিন কোড ৪ থেকে ৮ ডিজিটের হতে হবে!", "error");
        return;
      }
      if (newPin !== confirmPin) {
        showToast("নতুন পিন দুটি মেলেনি!", "error");
        return;
      }

      localStorage.setItem("P_P_ADMIN_PIN", newPin);
      document.getElementById("pin-change-current").value = "";
      document.getElementById("pin-change-new").value = "";
      document.getElementById("pin-change-confirm").value = "";
      showToast("অ্যাডমিন পিন কোড সফলভাবে পরিবর্তিত হয়েছে! 🔐", "success");
    });
  }

  // 14. PANEL 6: BACKUP & RESTORE CONTROLLER
  const btnDownloadBackup = document.getElementById("btn-download-backup");
  const inputRestoreBackup = document.getElementById("input-restore-backup");
  const btnResetDefaults = document.getElementById("btn-reset-defaults");
  const btnForceCloudSync = document.getElementById("btn-force-cloud-sync");

  if (btnDownloadBackup) {
    btnDownloadBackup.addEventListener("click", () => {
      const jsonStr = JSON.stringify(currentConfig, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `partner_picchi_diaries_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("ব্যাকআপ ফাইল ডাউনলোড হয়েছে! 📥", "success");
    });
  }

  if (inputRestoreBackup) {
    inputRestoreBackup.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const restored = JSON.parse(event.target.result);
          if (restored && typeof restored === "object") {
            currentConfig = restored;
            saveAndPublish(false);
            renderAllPanels();
            showToast("ব্যাকআপ সফলভাবে রিস্টোর করা হয়েছে! 🎉", "success");
          } else {
            showToast("ভুল ফরম্যাটের ব্যাকআপ ফাইল!", "error");
          }
        } catch (err) {
          showToast("ফাইল পড়তে ত্রুটি হয়েছে!", "error");
        }
      };
      reader.readAsText(file);
    });
  }

  if (btnResetDefaults) {
    btnResetDefaults.addEventListener("click", () => {
      openConfirmModal(
        "ফ্যাক্টরি রিসেট করবেন?",
        "আপনার সমস্ত কাস্টম ডেটা ও এন্ট্রি মুছে ওয়েবসাইটের আসল ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?",
        () => {
          localStorage.removeItem("P_P_CUSTOM_CONFIG");
          currentConfig = JSON.parse(JSON.stringify(window.STORY_CONFIG || {}));
          saveAndPublish(false);
          renderAllPanels();
          showToast("আসল ডিফল্ট ডেটায় রিসেট সম্পন্ন হয়েছে 🔄", "info");
        }
      );
    });
  }

  if (btnForceCloudSync) {
    btnForceCloudSync.addEventListener("click", () => {
      saveAndPublish(false);
    });
  }

  // 15. UPDATE ALL PANELS HELPER
  function updateBadgeCounts() {
    const badgeMoments = document.getElementById("badge-count-moments");
    const badgeChapters = document.getElementById("badge-count-chapters");
    const badgeDates = document.getElementById("badge-count-dates");
    const badgeDreams = document.getElementById("badge-count-dreams");

    if (badgeMoments && currentConfig.chatMemories) badgeMoments.textContent = currentConfig.chatMemories.length;
    if (badgeChapters && currentConfig.diarySpreads) badgeChapters.textContent = currentConfig.diarySpreads.length;
    if (badgeDates && currentConfig.virtualDates) badgeDates.textContent = currentConfig.virtualDates.total || 0;
    if (badgeDreams) {
      const dTotal = (currentConfig.partnerDreams?.length || 0) + (currentConfig.picchiDreams?.length || 0);
      badgeDreams.textContent = dTotal;
    }
  }

  function renderAllPanels() {
    renderMomentsList();
    renderChaptersList();
    renderVirtualDatesPanel();
    renderDreamsList();
    populateProfileSettings();
    updateBadgeCounts();
  }

  // START APPLICATION
  checkAuth();

})();
