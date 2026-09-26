/**
 * ============================================================================
 * OUR FRIENDSHIP STORY - JAVASCRIPT LOGIC & CONFIGURATION
 * ============================================================================
 * Edit the `STORY_CONFIG` object below to customize all names, dates,
 * timeline milestones, chat memories, dreams, and vibe match statistics
 * without touching any HTML or CSS layout code!
 * ============================================================================
 */

const STORY_CONFIG = {
  // 1. Core Profile Details
  names: {
    person1: "Partner",
    person2: "Picchi",
    brandTitle: "Partner&Picchi Diaries",
    subheadline: "একটি নির্ভেজাল বন্ধুত্বের গল্প, যা সময়ের সাথে আরও গভীর হয়েছে",
    closingQuote: "কিছু সম্পর্কের কোনো ব্যাখ্যার প্রয়োজন হয় না, তারা যেন ঠিক নিজের মনের ঘরে ফিরে আসার মতো পরম প্রশান্তি।",
    credits: "Partner&Picchi Diaries"
  },

  // 2. Friendship Start Date (YYYY-MM-DD or ISO format)
  // Used by the live hero counter and restated in the footer
  startDate: "2026-08-09T00:00:00",
  startDateFormatted: "৯ আগস্ট ২০২৬ (রবিবার)",

  // 3. Our Story (Open Vintage Diary Spreads - Fully Written & Poetic)
  diarySpreads: [
    {
      chapterBadge: "অধ্যায় ১",
      chapterTitle: "প্রথম বার্তা ও অকৃত্রিম সারল্য",
      date: "৯ আগস্ট ২০২৬",
      leftPage: {
        type: "written",
        badge: "প্রথম আলাপ",
        title: "যেখান থেকে আমাদের গল্প শুরু...",
        text: "একটি অপরিচিত গ্রুপের সাধারণ ভিড় থেকে হঠাৎ ইনবক্সে শুরু হওয়া সেই প্রথম বার্তা। কোনো কৃত্রিমতা ছিল না, ছিল কেবল 'Hi, Mahib!' আর পাল্টা আন্তরিক সালাম। বাংলিশ ছেড়ে খাঁটি বাংলায় লেখার মিষ্টি বায়না—সেখান থেকেই জন্ম নিয়েছিল স্নিগ্ধ এক অনুভূতির।",
        quote: "কিছু মানুষের সাথে পরিচয় ক্ষণিকের হলেও মনে হয়, আত্মিক টান বহু জনমের।",
        footnote: "৯ আগস্ট ২০২৬ • সকাল ০৭:৫২"
      },
      rightPage: {
        type: "written",
        badge: "হৃদয়ের কথা",
        title: "সহজ সুর আর স্নিগ্ধ ভালোলাগা...",
        text: "মানুষের ভিড়ে মনের মতো একজন কথা বলার সঙ্গী পাওয়া সত্যি ভাগ্যের ব্যাপার। প্রথম দিনের সেই আলাপ থেকেই মনে হয়েছিল সুরটা ভীষণ আপন। কোনো বাড়তি ভণিতা ছাড়া কত সহজে দুজন মানুষ একে অপরের বন্ধু হয়ে উঠতে পারে, সেই সকালের স্মৃতিগুলো তারই জীবন্ত সাক্ষী।",
        quote: "শুরুর মুহূর্তগুলো সবসময় স্নিগ্ধ কুয়াশার মতো—সময়ের সাথে যার সৌন্দর্য আরও মায়াবী হয়।",
        footnote: "স্মৃতির প্রথম পাতা"
      }
    },
    {
      chapterBadge: "অধ্যায় ২",
      chapterTitle: "সাবলীল খুনসুটি ও গভীর বিশ্বাস",
      date: "রাতজাগা মুহূর্তগুলো",
      leftPage: {
        type: "written",
        badge: "মিষ্টি খুনসুটি",
        title: "শব্দের ভাঁজে নির্মল হাসি...",
        text: "'সাবলীল' শব্দের অর্থ নিয়ে সেই নিষ্পাপ দুষ্টুমি কিংবা একই খাটে বসে দুজন দুদিক ফিরে চ্যাট করার অদ্ভুত কল্পনা—সবকিছুই মুখে নির্মল হাসি ফোটাত। টেক্সটের ওপারে বসেও অপর প্রান্তের হাসির ঝিলিক স্পষ্ট অনুভব করা যেত। কোনো আড়ষ্টতা নয়, ছিল শুধুই মনখোলা আনন্দ।",
        quote: "যে সম্পর্কের প্রতিটি খুনসুটিতে নির্মল প্রশান্তি থাকে, সেই বন্ধনই সবচেয়ে সুন্দর।",
        footnote: "অফুরন্ত হাসির রাতগুলো"
      },
      rightPage: {
        type: "written",
        badge: "বিশ্বাসের নোঙর",
        title: "স্পেস ও গভীর বোঝাপড়া...",
        text: "সিরিয়াস বন্ধুত্ব মানে একে অপরকে বেঁধে ফেলা নয়, বরং পূর্ণ স্বাধীনতা আর আস্থার জায়গা তৈরি করে দেওয়া। নিজের অভ্যাস না বানিয়েও কীভাবে একে অপরের সবচেয়ে নিরাপদ আশ্রয় হওয়া যায়, সেই স্পষ্ট সততাই আমাদের মূল শক্তি। দূরত্ব যেখানে কোনো বাধা হতে পারেনি।",
        quote: "কাছে থাকার নামই শুধু সান্নিধ্য নয়; দূরত্ব পেরিয়ে নিঃশব্দে পাশে থাকাই আসল টান।",
        footnote: "পারস্পরিক আস্থার অঙ্গীকার"
      }
    },
    {
      chapterBadge: "অধ্যায় ৩",
      chapterTitle: "কণ্ঠের মায়া ও অনন্ত পথচলা",
      date: "চিরন্তন অধ্যায়",
      leftPage: {
        type: "written",
        badge: "কণ্ঠের সুর",
        title: "প্রথম ভয়েস নোটের সেই জাদু...",
        text: "হাজারো টেক্সটের পর হঠাৎ পাঠানো সেই ২০ সেকেন্ডের ছোট্ট অডিও ক্লিপ। 'ভয়েস বেবিদের মতো না হলেও খুব সুন্দর, যেন কোনো ভয়েস আর্টিস্টের সুর'—মুগ্ধতা ভরা সেই প্রশংসা হৃদয়ে এক পশলা বৃষ্টির মতো ছুঁয়ে গিয়েছিল। কণ্ঠের সেই কোমল মায়া শব্দের সীমানা পেরিয়ে এক অদ্ভুত অনুভূতি এনে দিয়েছিল।",
        quote: "কখনো কখনো ছোট্ট একটি কণ্ঠস্বর হাজারো না বলা অনুভূতির চেয়েও গভীর প্রশান্তি দেয়।",
        footnote: "প্রথমবার কণ্ঠ শোনার স্মৃতি"
      },
      rightPage: {
        type: "written",
        badge: "আগামীর অঙ্গীকার",
        title: "সময়ের ওপারে আমাদের গল্প...",
        text: "এই ডায়েরির সাদা পাতাগুলো সময়ের সাথে হয়তো পুরনো হবে, কালির রঙ কিছুটা ফিকে হবে। কিন্তু আমাদের এই পারস্পরিক শ্রদ্ধা, খুনসুটি আর অটুট বন্ধুত্বের কোনো শেষ নেই। জীবনের প্রতিটি অধ্যায়ে, ঝড় কিংবা রোদে—আমরা এভাবেই একে অপরের হাত ধরে পাশে থাকব।",
        quote: "একটি সত্যিকারের বন্ধুত্ব কোনো দিন বা তিথির বন্ধন নয়, এ তো নিঃশব্দে এক হয়ে যাওয়া দুটি প্রাণের গল্প।",
        footnote: "অনন্তকালের বন্ধুত্ব"
      }
    },
    {
      chapterBadge: "অধ্যায় ৪",
      chapterTitle: "পিচ্চির স্পেশাল কথা ও হৃদয়ের টান",
      date: "অকৃত্রিম ভালোলাগা",
      leftPage: {
        type: "written",
        badge: "পিচ্চির স্পেশাল কথা",
        title: "আমার তো শুধু আপনাকে দরকার...",
        text: "চারপাশের মানুষ কে কী করছে বা না করছে, তা নিয়ে বিন্দুমাত্র কৌতূহল নেই। কোলাহলপূর্ণ এই দুনিয়ায় সমস্ত ভাবনা আর অনুভূতির কেন্দ্রবিন্দুতে শুধুই একজন আপন মুখ। মনের সবটুকু নির্ভরতা আর মিষ্টি আবদার জুড়ে কেবল তারই উপস্থিতি।",
        quote: "অন্যান্য মানুষ কে কি করছে না করছে, তা জেনে আমার কি কাজ, আমার তো শুধু আপনাকে দরকার।",
        footnote: "পিচ্চির অকৃত্রিম ও সহজ অনুভূতি"
      },
      rightPage: {
        type: "written",
        badge: "হৃদয়ের টান",
        title: "বুকটা কেমন জানি ফাঁকা ফাঁকা লাগছে...",
        text: "কথার মাঝেই হঠাৎ এক অদ্ভুত নীরব হাহাকার আর তীব্র ভালোবাসার টান। প্রিয় মানুষের সান্নিধ্য আর কথা শুনতে শুনতেই মনের অজান্তে এক অদ্ভুত গভীর আবেগ ছুঁয়ে যায়—যা সাধারণ কোনো শব্দের সীমানায় প্রকাশ করা যায় না।",
        quote: `<span class="dialogue-turn"><span class="dialogue-speaker">পিচ্চি:</span> "আমার বুক টা কেমন জানি ফাকা ফাকা লাগছে..."</span><span class="dialogue-turn"><span class="dialogue-speaker">পার্টনার:</span> "কেন, আবার হঠাত কি হয়েছে ?"</span><span class="dialogue-turn"><span class="dialogue-speaker">পিচ্চি:</span> "আপনার কথা শুনে এমন হচ্ছে আমার।"</span>`,
        footnote: "কথার ওপারে এক গভীর মায়ার টান"
      }
    },
    {
      chapterBadge: "অধ্যায় ৫",
      chapterTitle: "রাগ-অভিমান ও ফজরের প্রথম ডাক",
      date: "২২ সেপ্টেম্বর ২০২৬",
      leftPage: {
        type: "written",
        badge: "২২ সেপ্টেম্বর • মান-অভিমান",
        title: "ঘুমানোর আগের মান-অভিমান...",
        text: "সেদিন রাতে ঘুমানোর আগে দুজনের মাঝে বেশ ভালোই রাগ আর অভিমান জমে উঠেছিল। কথার মাঝে নেমে এসেছিল এক অদ্ভুত ভারী নীরবতা। তবে রাগের আড়ালে যে কত গভীর অধিকারবোধ আর না বলা টান লুকিয়ে ছিল, রাত যত গভীর হচ্ছিল তা যেন ততই স্পষ্ট হয়ে উঠছিল।",
        quote: "যেখানে অধিকারের টান সবচেয়ে বেশি, সেখানেই তো সামান্য কারণে অভিমানের ঝড় ওঠে।",
        footnote: "২২ সেপ্টেম্বর ২০২৬ • ঘুমানোর আগের নীরবতা"
      },
      rightPage: {
        type: "written",
        badge: "২২ সেপ্টেম্বর • ফজরের ভোর",
        title: "জান, কলিজা আর প্রথম টাইট হাগ...",
        text: "ফজরের সময় পিচ্চির ব্যাকুল চেষ্টা রাগ ভাঙানোর। এই প্রথমবার সমস্ত দূরত্ব ভেঙে পরম আদরে 'জান' আর 'কলিজা' বলে ডেকে ওঠা! এমনকি কাছে এসে শক্ত করে জড়িয়ে ধরে টাইট হাগ করতে চাওয়ার সেই আকুল আবদার—যা তাদের মাঝে এই প্রথমবার ছিল। মুহূর্তেই সমস্ত মান-অভিমান গলে ভালোবাসার পরম উষ্ণতায় রূপ নিয়েছিল।",
        quote: `<span class="dialogue-turn"><span class="dialogue-speaker">পিচ্চি:</span> "রাগ ভাঙাতে এই প্রথম 'জান' ও 'কলিজা' বলে সম্বোধন..."</span><span class="dialogue-turn"><span class="dialogue-speaker">প্রথম অনুভূতি:</span> "পরম নির্ভরতায় জড়িয়ে ধরে প্রথম টাইট হাগ করার মিষ্টি আবদার।"</span>`,
        footnote: "২২ সেপ্টেম্বর ২০২৬ • ফজরের আলোয় প্রথম প্রকাশ"
      }
    },
    {
      chapterBadge: "অধ্যায় ৬",
      chapterTitle: "কান্নাভেজা রাত, হিলিং ও পরম নির্ভরতা",
      date: "২৫ সেপ্টেম্বর ২০২৬",
      leftPage: {
        type: "written",
        badge: "২৫ সেপ্টেম্বর • রাত ৮টা",
        title: "অশ্রুসজল কান্না আর অভিমানের রাত...",
        text: "২৫ সেপ্টেম্বর রাত ৮টার পর ফোনে দুজনের মাঝে নেমে এসেছিল এক তীব্র আবেগের ঝড়। কথায় কথায় কষ্ট পাওয়া নিয়ে সৃষ্টি হয়েছিল এক গভীর মান-অভিমান; পিচ্চিও বুঝতে পারছিল না কীভাবে সবকিছু সামলাবে। সেদিন মনের ভেতর জমে থাকা সমস্ত কান্না যেন বাঁধ ভেঙে বেরিয়ে এসেছিল—নিজের জীবনে এর আগে কখনো এমন অঝোরে কান্না আসেনি। দুজনের বুকফাটা সেই কান্নায় ফোন স্তব্ধ হয়ে গিয়েছিল।",
        quote: "যেখানে সবচেয়ে বেশি মায়া, সেখানেই সামান্য কথার আঘাতে চোখ দিয়ে বুকভাঙা কান্না ঝরে।",
        footnote: "২৫ সেপ্টেম্বর ২০২৬ • রাত ৮টার অশ্রুসজল অনুভূতি"
      },
      rightPage: {
        type: "written",
        badge: "হিলিং ও পরম মায়া",
        title: "সব ঠিক হওয়া আর বালিশ জড়িয়ে ঘুম...",
        text: "এত কান্নাকাটির পর সমস্ত দূরত্ব ভুলে আবার নিজেদের মাঝে ফিরে আসা। পিচ্চিও অঝোরে কেঁদেছিল, তারপর ব্যাকুল হয়ে তাকে শান্ত করা, পরম মমতায় হিলিং করার চেষ্টা—একসময় সমস্ত মান-অভিমান গলে পরিস্থিতি আবার সুন্দর ও স্বাভাবিক হয়ে ওঠে। সেদিন রাতে তীব্র দূরত্বের মাঝেও পরম নির্ভরতায় পিচ্চি তার পাশের বালিশটাকে পার্টনার কল্পনা করে শক্ত করে জড়িয়ে ধরে ঘুমিয়েছিল।",
        quote: `<span class="dialogue-turn"><span class="dialogue-speaker">অভিমানের পর:</span> "কান্নাভেজা রাত পেরিয়ে পরম যত্নে একে অপরকে শান্ত করা ও সব ঠিক করে নেওয়া।"</span><span class="dialogue-turn"><span class="dialogue-speaker">পরম নির্ভরতা:</span> "পাশের বালিশকে পার্টনার কল্পনা করে ভালোবাসায় জড়িয়ে নিশ্চিন্ত ঘুম..."</span>`,
        footnote: "২৫ সেপ্টেম্বর ২০২৬ • মায়া ও বালিশ জড়িয়ে ঘুম"
      }
    }
  ],

  // 4. Memorable Moments (Messenger Memories Carousel with Real Attached Screenshots)
  chatMemories: [
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "স্মৃতির শুরু • ৯ আগস্ট ২০২৬",
      tag: "প্রথম আলাপ",
      title: "প্রথম আলাপ ও বাংলা লেখার আবদার 🌸",
      image: "assets/chat-story-1.png",
      quote: "Hi, Mahib! — sorry বাংলিশ লেখা আমার পছন্দ নয়... আচ্ছা বাংলাতেই লিখব",
      caption: "একটি অচেনা গ্রুপ থেকে শুরু হয়ে ইনবক্সের সেই স্নিগ্ধ কুশলবিনিময়। প্রথম আলাপেই বাংলায় কথা বলার মিষ্টি সমঝোতা।",
      reaction: "🌸",
      dateTag: "৯ আগস্ট ২০২৬ • সকাল ০৭:৫২"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "গভীর রাতের আলাপ",
      tag: "হেলদি স্পেস",
      title: "সিরিয়াস ফ্রেন্ডশিপ ও হেলদি স্পেস 💫",
      image: "assets/chat-story-2.png",
      quote: "সিরিয়াস ফ্রেন্ডশীপ হলেও কিছু স্পেস রাখাটা দরকার... আমার জন্য এটা খুব স্বস্তিদায়ক",
      caption: "একে অপরকে সম্পূর্ণ স্বাধীনতা দিয়েও কীভাবে আত্মার সবচেয়ে আপন হওয়া যায়, পারস্পরিক শ্রদ্ধাবোধের সেই সুন্দর অঙ্গীকার।",
      reaction: "💫",
      dateTag: "৯ আগস্ট ২০২৬ • গভীর রাত"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "মিষ্টি খুনসুটি",
      tag: "খুনসুটি",
      title: "সাবলীল মানে ও ভবিষ্যৎ ভাবনা 😂",
      image: "assets/memory-chat-2.jpg",
      quote: "বিয়ে না করলে এইটা কাটবেনা মনেহয়... কারণ আপনি তো টেক্সটে ঠিকই সাবলীল! সাবলীল মানে কি ভালো না খারাপ?",
      caption: "শব্দ নিয়ে এমন নিষ্পাপ খুনসুটি আর নির্মল হাসি। কথার ওপারে থেকেও অনুভবের এই সাবলীল টান এক অদ্ভুত মায়া ছড়ায়।",
      reaction: "😂",
      dateTag: "স্মৃতির অ্যালবাম • সাবলীল খুনসুটি"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "অজান্তেই আপন",
      tag: "মধুর বন্ধন",
      title: "একই খাটে বসে চ্যাট করার আইডিয়া! ❤️",
      image: "assets/memory-chat-1.jpg",
      quote: "বিয়ে করলে, ওয়াইফ কে ফোনে হাতে ধরায়া, একই বেডে বসে চ্যাট করব — আইডিয়া ভালো 😂 ১ম ১ম তো ছিলাম না, কেমনে জানি আপনার সাথে হয়ে গেছি...",
      caption: "অজান্তেই কখন যে মানুষ একে অপরের এত আপন হয়ে যায়! হাসির ছলে অদ্ভুত সব আইডিয়া আর মনের অজান্তে তৈরি হওয়া গভীর এক টান।",
      reaction: "❤️",
      dateTag: "রাতজাগা স্মৃতি • মনখোলা আড্ডা"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "স্পেশাল মোমেন্ট",
      tag: "ভয়েস নোট",
      title: "প্রথম ভয়েস নোট ও কণ্ঠের জাদু 🎙️",
      image: "assets/memory-chat-3.jpg",
      quote: "ভয়েজ যদি কোনো দিন শোনেন সেদিন বুঝতে পারবেন... voice baby der moton na, but voice kintu sundor, like voice artist der moton...",
      caption: "প্রথমবার পাঠানো সেই ২০ সেকেন্ডের ছোট্ট অডিও ক্লিপ। অপার্থিব মুগ্ধতা আর কণ্ঠের প্রশংসায় ভরা এক অবিস্মরণীয় মুহূর্ত।",
      reaction: "🎙️",
      dateTag: "বিশেষ মুহূর্ত • প্রথম ভয়েস ক্লিপ"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "সাত ঘণ্টার সুদীর্ঘ কল",
      tag: "ভিডিও কল ও ভোর",
      title: "টানা সাড়ে ৭ ঘণ্টার কল ও ভোরের মিষ্টি ঘুম 📞😴",
      image: "assets/memory-chat-4.png",
      quote: "Video call: 7 hrs, 31 min, 5 secs • chap lege kete gese picchi sorry 🙏 — headphone charge diye call dibo ne, arektu ghumai?",
      caption: "রাত পেরিয়ে ভোর—একটানা সাড়ে ৭ ঘণ্টারও বেশি সময়ের অবিরাম ভিডিও কল! কথার মাঝে কখন যে ভোর পেরিয়ে সকাল হয়ে গেছে টেরই পাওয়া যায়নি। মিষ্টি মান-অভিমান আর আরেকটু ঘুমের আবদার।",
      reaction: "📞",
      dateTag: "বিশেষ মুহূর্ত • সাড়ে ৭ ঘণ্টার সুদীর্ঘ কল"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "৮ দিনের খুনসুটি",
      tag: "ধৈর্য ও এন্ট্রি",
      title: "লাইফে এন্ট্রি মারার ধন্যবাদ ও ৮ দিনের স্মৃতি ✨",
      image: "assets/memory-chat-5.jpg",
      quote: "বাহ, কি ধৈর্য, আমার লাইফে এভাবে এন্ট্রি মারার জন্য ধন্যবাদ✨✨ — হইছে না ৮ দিন?",
      caption: "পরিচয়ের মাত্র ৮ দিনের মাথায় খুনসুটি, মান্যতা আর মিষ্টি অধিকারবোধ। জীবনে এত ধৈর্য নিয়ে মায়াবী এন্ট্রি নেওয়ার জন্য ধন্যবাদ ও ভয়েস নোট বিনিময়।",
      reaction: "✨",
      dateTag: "স্মৃতির অ্যালবাম • ৮ দিনের মিষ্টি এন্ট্রি"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "পুরনো টেক্সট",
      tag: "পুরনো কথা",
      title: "পুরনো টেক্সট পড়ে একা একা হাসার অভ্যাস 📜",
      image: "assets/memory-chat-6.jpg",
      quote: "আমি প্রায়ই পুরনো টেক্সট পড়ি। আগের দিনের কথা গুলো মনে করি... গতকাল হাসালাম, আপনি কি সেই পুরনো মেসেজ পরে আবার হাসেন? হুম এরকমই!",
      caption: "আগের দিনের কথাগুলো মনে করে পুরনো মেসেজ পড়ে আপন মনেই একা একা হেসে ওঠার এক মিষ্টি অভ্যাস। শব্দের ওপারে জমে থাকা গভীর অনুভূতি।",
      reaction: "😊",
      dateTag: "স্মৃতির অ্যালবাম • পুরনো কথার ভালোলাগা"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "গভীর নির্ভরতা",
      tag: "পাশে থাকা",
      title: "আই উইল বি হেয়ার অলওয়েজ ফর ইউ 💛",
      image: "assets/memory-chat-7.jpg",
      quote: "Dear Picchi, if your heart feels heavy, I will listen... No matter what life brings, remember this, I will here always for you 💛",
      caption: "মন খারাপ হলে কান পেতে শোনার আর জীবনের যেকোনো পরিস্থিতিতে নিঃশর্ত পাশে থাকার এক অটুট প্রতিশ্রুতি। 'You'll always have someone to count on'—এক পরম নির্ভরতার আশ্রয়।",
      reaction: "💛",
      dateTag: "১৬ আগস্ট ২০২৬ • গভীর নির্ভরতার অঙ্গীকার"
    },
    {
      sender: "Partner & Picchi",
      avatarLetter: "P",
      status: "নিখাদ মায়া",
      tag: "ফ্রেন্ডশিপ",
      title: "কথা না বললে ভালো লাগে না • এটা মায়া ও ফ্রেন্ডশিপ 💫",
      image: "assets/memory-chat-8.jpg",
      quote: "আপনার সাথে কথা না বললে আমার ভালো লাগে না... এটা মায়া, এটা সবাইকে দেয়া যায়না... আর এটা হলো ফ্রেন্ডশিপ!",
      caption: "অন্যান্য সম্পর্কের চেয়ে সম্পূর্ণ আলাদা এক টান—মাত্র ২ ঘণ্টা দূরে থাকলেই মন খারাপ আর একাকীত্ব। ভালোবাসা কিংবা সাধারণ বন্ধুত্বের চেয়েও যা এক অদ্ভুত পবিত্র 'মায়া'।",
      reaction: "💫",
      dateTag: "স্মৃতির অ্যালবাম • মায়া ও নিখাদ বন্ধুত্ব"
    }
  ],

  // 5. Virtual Dates Breakdown (Our Special Online Dates)
  virtualDates: {
    total: 17,
    movieDates: {
      count: 6,
      movies: [
        { order: "১ম", name: "Blast", icon: "💥" },
        { order: "২য়", name: "Ratsasan", icon: "🎭" },
        { order: "৩য়", name: "Maharaja", icon: "👑" },
        { order: "৪র্থ", name: "Forensic", icon: "🔍" },
        { order: "৫ম", name: "Makkhi", icon: "🎬", date: "১৬ সেপ্টেম্বর ২০২৬" },
        { order: "৬ষ্ঠ", name: "Total Dhamaal", icon: "😂", date: "২৪ সেপ্টেম্বর ২০২৬" }
      ]
    },
    sleepingDates: {
      count: 10,
      history: [
        { order: "১ম", title: "প্রথম স্লিপিং ডেট", date: null },
        { order: "২য়", title: "দ্বিতীয় স্লিপিং ডেট", date: null },
        { order: "৩য়", title: "তৃতীয় স্লিপিং ডেট", date: "১৪ সেপ্টেম্বর ২০২৬" },
        { order: "৪র্থ", title: "চতুর্থ স্লিপিং ডেট", date: "১৫ সেপ্টেম্বর ২০২৬" },
        { order: "৫ম", title: "পঞ্চম স্লিপিং ডেট", date: "১৬ সেপ্টেম্বর ২০২৬" },
        { order: "৬ষ্ঠ", title: "ষষ্ঠ স্লিপিং ডেট", date: "১৭ সেপ্টেম্বর ২০২৬" },
        { order: "৭ম", title: "সপ্তম স্লিপিং ডেট", date: "২০ সেপ্টেম্বর ২০২৬" },
        { order: "৮ম", title: "অষ্টম স্লিপিং ডেট", date: "২১ সেপ্টেম্বর ২০২৬" },
        { order: "৯ম", title: "নবম স্লিপিং ডেট", date: "২২ সেপ্টেম্বর ২০২৬", note: "স্বপ্নে পিচ্চিকে ১ম বার ফেস সহ দেখা" },
        { order: "১০ম", title: "দশম স্লিপিং ডেট", date: "২৩ সেপ্টেম্বর ২০২৬", note: "ঝগড়া রাগ অভিমান ও দুজনের কান্না" }
      ],
      description: "ফোনের লাইনে একে অপরকে রেখে নিশ্চিন্ত ঘুম"
    },
    rickshawDates: {
      count: 1,
      description: "দুটি ভিন্ন শহরে রিকশায় চড়ে ব্যাক ক্যামেরা অন করে শহর দেখানো"
    }
  },

  // 6. Dream Page Section (Notes of Dreams seen while sleeping by Partner & Picchi)
  // Titles are visible upfront; clicking expands to read full heartfelt dream note!
  partnerDreams: [
    {
      date: "০৯ সেপ্টেম্বর ২০২৬",
      isoDate: "2026-09-09",
      title: "পিচ্চির মায়ের সাথে খাবার, রয়্যাল এনফিল্ড ও মিরপুরের সফর",
      fullText: "আমি খুলনাতে পিচ্চির মায়ের সাথে একই ডাইনিং টেবিলে বসে খাবার খাচ্ছিলাম, আমি অনেক বেশি শাই ফিল করতেছিলাম। আমাকে যা যা জিজ্ঞেস করা হচ্ছিলো আমি শুধু তারই উত্তর দিচ্ছিলাম, এর বেশি না।\n\nখাবার শেষ করে উঠে আমি খেয়াল করলাম আমি পিচ্চির এলাকার কোনো এক মার্কেটে গিয়েছি একটা মানিব্যাগ কেনার জন্য। সেখানে নিচ তলায় স্বপ্ন, ২য় তলায় ছিলো আড়ং—তো আমি মূলত গিয়েছি স্বপ্নে। পরে দেখলাম সেখানে ইলেক্ট্রিসিটি নেই। ভাবলাম সুপারশপে ইলেক্ট্রিসিটি নেই, তার ওপর ভেতরে সব মেয়ে স্টাফ, ভেতরে যাওয়া কি ঠিক হবে? তাই ভেতরে আর যাইনি। ঠিক তখন পিচ্চি আমাকে কল করে আর বলে, তার আম্মু নাকি আমাকে পছন্দ করেছে! আমি বললাম, \"হাহ্!! সত্যি? কি বলেন!\" পিচ্চি বলে, \"হ্যাঁ সত্যি!\" এরপর জিজ্ঞেস করলো, \"আপনি কোথায় এখন?\" আমি বললাম স্বপ্নের সামনে আছি। পিচ্চি বললো, \"সেখানে দাঁড়ান আমি আসতেছি, আজকে আপনাকে নিয়ে হাঁটবো আমি, কিন্তু আপনার হাত ধরবো না। কারণ আমাদের এলাকায় আমাকে সবাই চিনে।\" আমি বললাম, \"কোনো সমস্যা নাই, আসেন আপনি।\"\n\nকিন্তু পিচ্চি দেখি রয়্যাল এনফিল্ড (Royal Enfield) বাইক নিয়ে চলে আসছে! অথচ কথা ছিলো একসাথে হাঁটার! পরে অদ্ভুতভাবে দেখি আমার কাছেও একটা বাইক আছে। পিচ্চি বাইক চালিয়ে কোথাও যাচ্ছিলো, বলছিলো তার সাথে যেতে; আমিও বাইক নিয়ে তার পেছন পেছন ফলো করে এগোতে থাকি। খুলনা থেকে বাইক চালিয়ে আমরা দুজনেই সোজা ঢাকার মিরপুর ফলপট্টিতে চলে আসি!\n\nসেখানে আসার পর দেখি আমার ফ্রেন্ড জনি তার গার্লফ্রেন্ডকে ড্রপ করে তার বাইকটা পার্ক করতেছে। এরপর আমি ও পিচ্চি আমাদের বাইক ওই একই জায়গায় পার্ক করে রাখি। হঠাৎ করেই দেখি, পিচ্চির হাতে অনেকগুলো ক্রাফট গিফট! পিচ্চি সেই গিফটগুলোকেও পার্ক করা বাইকের পাশে রেখে দিচ্ছে আর বলছে—\"বাইক যেমন কেউ ধরবে না, আর গিফটগুলোও কেউ ধরবে না!\" এরপর আমরা হাঁটার উদ্দেশ্যে মিরপুর ২-এর দিকে চলে যাই।"
    },
    {
      date: "০৭ সেপ্টেম্বর ২০২৬",
      isoDate: "2026-09-07",
      title: "বাসায় পিচ্চি ও তার মা, ডিফেন্সের ছেলে ও মনের তীব্র জেলাসি",
      fullText: "পিচ্চি এবং তার মা ঢাকা আমাদের বাসায় আসে কোনো একটা কারণে। আমি মাঝে মাঝে আমার মায়ের সাথে ঘুমাই, আম্মু চুল টেনে দেয় এজন্য। তো সেদিনও আমি মায়ের পাশে ছিলাম, হঠাৎ দেখলাম পিচ্চি এবং তার মা আমাদের বাসায় আসে। আমাদের দেখি ২টা রুম ছিলো, এক রুমে আমার বোন ছিলো, আর এই রুমে যেহেতু আম্মু ছিলো, তো আমি নিচে ফ্লোরিং করে শুয়ে পড়ি। পিচ্চি, তার মা আর আমার মা খাটে শুয়ে ছিলো। পিচ্চি আমার পাশে আসতে চেয়েছিলো, কিন্তু ওর মার জন্য আসে নাই, আর তাছাড়া পিচ্চি নাকি লজ্জা পাচ্ছিলো।\n\nতো সকাল হলো, সকাল হতেই দেখি পিচ্চির মা নাই, শুধু পিচ্চি আছে। তো আমি পিচ্চিকে জিজ্ঞেস করলাম, \"খালামনি কই?\" পিচ্চি বললো ওনি কাজে বের হয়েছে।\n\nতো হঠাৎ পিচ্চি আমাকে বলতেছে, তার নাকি এক ডিফেন্সের ছেলেকে পছন্দ হয়েছে, তার বয়স ৩৫ বছর, তার সাথে পিচ্চির বিয়ে হবে এমন কথাবার্তা চলতেছে। এই কথা শুনার পর আমার প্রচণ্ড জেলাসি হতে থাকে, রাগ হতে থাকে যে এটা কিভাবে হতে পারে? পিচ্চি কেন ডিফেন্সের ছেলেকে পছন্দ করবে? আমার প্রচণ্ড জেলাসি, রাগ, ক্ষোভ হতে থাকলেও আমি পিচ্চির সামনে নিজেকে শান্ত রাখি। আমি তাকে বলি, \"তাই নাকি? ভালো তো!\" তখন পিচ্চি বলতেছে, \"হ্যাঁ\"। আমি তাকে বললাম, \"ওরে একটা মেসেজ দেও, কথা বলো।\" তো পিচ্চি আমার সামনেই তাকে মেসেজ দিলো।\n\nআমি অনেক জেলাসি ফিল করতেছিলাম, কিন্তু প্রকাশ করি নাই। এরই মাঝে আমার ঘুম ভেঙে যায়। ঘুম ভেঙে যাওয়ার পরও আমার মনটা খারাপ ছিলো, যে কেন এমন স্বপ্ন দেখলাম!"
    }
  ],

  picchiDreams: [
    {
      date: "১১ সেপ্টেম্বর ২০২৬",
      isoDate: "2026-09-11",
      title: "উত্তরা গণভবন, নৌকা ভ্রমণ ও মিষ্টি মান-অভিমান",
      fullText: "নাটোরের উত্তরা গণভবনে বেড়াতে গিয়েছি। সেখানে গিয়ে লেকে নেমে নৌকায় উঠেছি, হঠাৎ পার্টনারের আওয়াজ পেলাম, আমাকে বলছে \"আপনি পানির ভেতরে কি করছেন? নৌকা থেকে পানিতে পড়ে গেলে ডুবে যাবেন তো?\" আমি তার কথায় একটু বিরক্ত হলাম, বললাম \"আমি তো সাঁতার জানি, ডুবে যাব কেন? আপনিও আসেন, একসাথে নৌকায় ঘুরি কিছুক্ষণ।\" এবার পার্টনার গলায় একটু বিরক্তি নিয়ে বললো, \"আমি এখন নৌকায় উঠতে চাইনা, আমি উঠলেই নৌকা কাত হয়ে যাবে, আমি পানিতে পরে গেলে জামা কাপড় ভিজে যাবে, আর আমার চুলও ভিজে নষ্ট হয়ে যাবে।\"\n\nআমি রাগ করে নৌকা থেকে নেমে বাগানে চলে এলাম। সেখানে অনেক ফুল, পাখি, প্রজাপতি দেখে আমিও দৌড়াদৌড়ি করতে শুরু করি, এখানেও পার্টনারের আপত্তি, সে বললো \"আপনি কি আস্তে হাঁটতে পারেন না? এত ছোটাছুটি কেন করছেন? পড়ে গেলে তো ব্যথা পাবেন।\" আমি বললাম \"আমি কি ছোট বাচ্চা, যে পড়ে যাবো? আপনার শুধু সব কিছুতেই নিষেধ!! যান আমি আপনার সাথে আর যাবোই না কোথাও!!\"\n\nএরপর আমি রাজবাড়ীর দেয়াল ঘড়ির ইঞ্জিন রুমে যেতে চাইলে, পার্টনারও আমার সাথে যেতে চাইলেন। কিন্তু এবার আমি রাগ করে বললাম, \"আমি আপনার সাথে যাবোনা, আপনি সব কিছুতেই নিষেধ করেন, আপনার সাথে কোন মজা নাই!!\" এটা শুনে পার্টনার অভিমান করে সিড়িতেই বসে পরলেন। আমি আবার ফিরে এলাম একটু মান ভাঙানোর সুরে বললাম, \"আমার কাছে আর তেল মারার মতো তেল অবশিষ্ট নেই, সো তেল আমদানি না করা পর্যন্ত এভাবেই বসে থাকবেন? নাকি আমার সাথে উপরে যাবেন?\" তখন পার্টনার আবার আমার সাথে উপরে এলেন।"
    },
    {
      date: "০৯ সেপ্টেম্বর ২০২৬",
      isoDate: "2026-09-09",
      title: "বনানী থেকে উত্তরা হাঁটা ও পার্টনারের সারপ্রাইজ",
      fullText: "আমি আর আম্মু ঢাকায় একটা মিটিংয়ে এসেছিলাম। বনানীতে হচ্ছিলো মিটিংটা। টি ব্রেকে আম্মু আমাকে উত্তরায় মামার বাসায় যেতে বলেন। আমার একা যেতে ইচ্ছে করছিলো না। আমি পার্টনারকে ফোন দিয়ে আসতে বলি, আমার সাথে হাঁটতে হাঁটতে বনানী থেকে উত্তরাতে যেতে বলি। কিন্তু সে আমাকে জানায় যে সে এখন অফিস থেকে সোজা জিমে যাচ্ছেন, আমার সাথে তিনি দেখা করতে পারবেন না। তবে আমি চাইলে ফোনে তার সাথে কথা বলতে বলতে যেতে পারি, আর এই ফিল নিতে পারি যে তিনি আমার সঙ্গেই আছেন। আমার শুনে মন খারাপ হলো, তারপরও আমি রাজি হয়ে গেলাম। আর ফোনে কথা বলতে বলতে উত্তরাতে চলে গেলাম, হাঁটতে হাঁটতে মামার বাসার কাছাকাছি চলে এলে দেখলাম পার্টনার দাঁড়িয়ে আছে, আর আমাকে বলছে \"এতো দেরি লাগে আসতে?\"\n\nআমি অভিমান দেখিয়ে বললাম \"আপনি এখানে কি করছেন? আমার সাথে তো আসতে চাইলেন না? আবার ঠিকই আমার আগে এসে এখানে দাঁড়িয়ে আছেন!!\" উত্তরে পার্টনার আমাকে বলল \"আমি তো আপনার জন্যই দাঁড়িয়ে আছি, এভাবে রাগ করলে চলবে? সারা রাস্তা তো আমি আপনার সাথেই ছিলাম\"। এরপর আমরা দুজন একসাথে হাটতে শুরু করলাম।"
    },
    {
      date: "০৭ সেপ্টেম্বর ২০২৬",
      isoDate: "2026-09-07",
      title: "হলুদ ভৃঙ্গরাজ ফুল ও পার্টনারের বারণ",
      fullText: "একটা সুন্দর নিরিবিলি রাস্তা, চারিদিকে গাছপালা ভরা, তার পাশেই বেশ বড় একটা পুকুর। পুকুর পাড় ভরে আছে ছোট ছোট হলুদ ভৃঙ্গরাজ ফুলে। আমি সে রাস্তায় আনন্দে ঘুরে বেড়াচ্ছি, ফটোগ্রাফি করছি। ফুলের অনেকগুলো ছবি তুলেছি। কয়েকটা ফুল ছিড়ে বেনিতে যেই লাগাতে যাবো, তখনই পার্টনারের গলার আওয়াজ পেলাম, আমাকে বলছিলেন \"ফুল ছিড়বেন না, ফুল ছেড়া আমার একদম পছন্দ না!!!\""
    }
  ],

  // 6. Vibe Match % Statistics & Detailed 14 Traits Showcase
  vibeStats: {
    overallPercentage: 98,
    overallTagline: "নষ্ট জেনারেশনের ভিড়ে আমাদের মন মানসিকতার চিরন্তন মিল",
    categories: [
      { name: "জীবনবোধ ও মূল্যবোধ", icon: "💎", percentage: 99 },
      { name: "ভ্রমণ ও প্রকৃতির টান", icon: "🏔️", percentage: 98 },
      { name: "স্বভাব ও খুনসুটি", icon: "✨", percentage: 96 },
      { name: "পরস্পরের প্রতি শ্রদ্ধা ও আস্থা", icon: "🤝", percentage: 100 },
      { name: "আত্মিক বোঝাপড়া ও টান", icon: "❤️‍🔥", percentage: 97 }
    ],
    // ৮টি নিখুঁত মিল (১০০% সিঙ্ক) - পয়েন্ট ক থেকে জ
    vibeMatches: [
      {
        serial: "ক",
        title: "চুল কাটার কান্না",
        icon: "✂️😭",
        desc: "পিচ্চি আর আমার দুজনেরই চুল কাটলে কান্না আসে। প্রিয় চুলের সামান্য ক্ষতিও দুজনের মন মানতে পারে না!",
        matchBadge: "১০০% নিখুঁত মিল"
      },
      {
        serial: "খ",
        title: "রিকশায় দরদাম না করা ও বকশিশ",
        icon: "🛺💖",
        desc: "রিকশায় বা অন্য কোথাও গেলে অতিরিক্ত দরদাম করা একদম পছন্দ না। বরং চালকদের ব্যবহারে খুশি হলে দুজনই হাসিমুখে অতিরিক্ত টাকা বকশিশ দেই।",
        matchBadge: "একই অনুভূতি"
      },
      {
        serial: "গ",
        title: "পাহাড়ের প্রতি গভীর ভালোবাসা",
        icon: "🏔️☁️",
        desc: "পাহাড় খুব ভালোবাসি দুজনই। উঁচু পাহাড়, শান্ত প্রকৃতি আর মেঘেদের দল—দুজনের আত্মার পরম প্রশান্তি এই পাহাড়ে।",
        matchBadge: "আত্মিক টান"
      },
      {
        serial: "ঘ",
        title: "ঘুরতে যাওয়ার অদম্য নেশা",
        icon: "🎒🧭",
        desc: "ঘুরতে যাওয়ার খুব নেশা, ঘুরতে খুব পছন্দ দুজনই। নতুন জায়গায় ঘুরে বেড়ানো আর স্মৃতি তৈরি করার টান দুজনের রক্তে।",
        matchBadge: "অভিযাত্রী মন"
      },
      {
        serial: "ঙ",
        title: "সততা ও নীতিতে অটল বিশ্বাস",
        icon: "⚖️🛡️",
        desc: "নিজের সততা আর নীতির ব্যাপারে প্রচণ্ড বিশ্বাসী। কোনো অন্যায়ের সাথে আপস না করে নিজের আদর্শে অবিচল থাকা।",
        matchBadge: "একই মূল্যবোধ"
      },
      {
        serial: "চ",
        title: "নষ্ট জেনারেশনের ভিড়ে শুদ্ধ মন",
        icon: "🌸✨",
        desc: "বর্তমান নষ্ট জেনারেশনের ভিড়েও আমাদের চিন্তা-ভাবনা আর মন-মানসিকতা অবিকল একই রকম—শুদ্ধ, সুন্দর ও খাঁটি।",
        matchBadge: "চিরন্তন মিল"
      },
      {
        serial: "ছ",
        title: "ঘরে চঞ্চল, কিন্তু বাহিরে শান্ত",
        icon: "🏡🤫",
        desc: "পিচ্চি আর আমার দুজনের ঘরের মধ্যে অনেক চঞ্চল ও অফুরন্ত কথা বলি, কিন্তু বাহিরে খুব শান্ত আর চুপচাপ থাকি।",
        matchBadge: "একই স্বভাব"
      },
      {
        serial: "জ",
        title: "রান্নাবান্না ও গৃহকর্মে পারদর্শী",
        icon: "🍳🧹",
        desc: "রান্নাবান্না আর ঘরের যাবতীয় কাজ দুজনই করতে পারি, কোনো সমস্যা নাই এইসবে। নিজের কাজ নিজে করতে ভীষণ স্বাচ্ছন্দ্য।",
        matchBadge: "সমান দক্ষতা"
      }
    ],
    // ৬টি মিষ্টি অমিল ও বৈপরীত্য - পয়েন্ট ঝ থেকে ঢ
    vibeContrasts: [
      {
        serial: "ঝ",
        title: "সাদা বনাম কালো",
        icon: "🤍🖤",
        person1Tag: "পিচ্চি",
        person1Val: "সাদা রঙ পছন্দ 🤍",
        person2Tag: "পার্টনার",
        person2Val: "কালো রঙ পছন্দ 🖤",
        desc: "পিচ্চির প্রিয় কালার সাদা, আর পার্টনারের পছন্দ কালো। অন্ধকার আর আলোর মতো নিখুঁত এক ভারসাম্য।"
      },
      {
        serial: "ঞ",
        title: "মার্শাল আর্টের চমক",
        icon: "🥋🥊",
        person1Tag: "পিচ্চি",
        person1Val: "মার্শাল আর্ট পারে 🥋",
        person2Tag: "পার্টনার",
        person2Val: "পারে না, তবে খুব পছন্দ ✨",
        desc: "পিচ্চি মার্শাল আর্ট পারে, পার্টনার পারে না তবে তার এই সাহসী রূপটি ভীষণ পছন্দ করে।"
      },
      {
        serial: "ট",
        title: "বকুল ফুল বনাম সব ফুল",
        icon: "🌼🌸",
        person1Tag: "পিচ্চি",
        person1Val: "প্রিয় ফুল বকুল 🌼",
        person2Tag: "পার্টনার",
        person2Val: "সব ফুলই ভালো লাগে 💐",
        desc: "পিচ্চির প্রিয় ফুল বকুল ফুল, আর পার্টনারের কাছে প্রকৃতির সব রঙের ফুলই সমান মায়াবী।"
      },
      {
        serial: "ঠ",
        title: "কাঠঠোকরা বনাম দাঁড়কাক",
        icon: "🌳🦅",
        person1Tag: "পিচ্চি",
        person1Val: "কাঠঠোকরা পছন্দ 🌳",
        person2Tag: "পার্টনার",
        person2Val: "প্রিয় দাঁড়কাক 🦅",
        desc: "পিচ্চির কাঠঠোকরা পাখি পছন্দ, আর পার্টনারের অদ্ভুত ভালোলাগা নিঃসঙ্গ ও বুদ্ধিমান দাঁড়কাক।"
      },
      {
        serial: "ড",
        title: "বইয়ের জগৎ বনাম নির্লিপ্ততা",
        icon: "📚☕",
        person1Tag: "পিচ্চি",
        person1Val: "বই পড়ার প্রচণ্ড শখ 📖",
        person2Tag: "পার্টনার",
        person2Val: "বইয়ে তেমন আগ্রহ নাই 🎧",
        desc: "পিচ্চির বই পড়ার প্রচণ্ড শখ ও বইয়ের পাতায় ডুব দেওয়া, যেখানে পার্টনারের বইয়ে তেমন কোনো আগ্রহ নেই।"
      },
      {
        serial: "ঢ",
        title: "গানের জোয়ার বনাম সিলেক্টিভ সুর",
        icon: "🎶🎧",
        person1Tag: "পিচ্চি",
        person1Val: "প্রচুর গান শোনে 🎵",
        person2Tag: "পার্টনার",
        person2Val: "কম বা সিলেক্টিভ গান শোনে 🎼",
        desc: "পিচ্চি সারাদিন প্রচুর গান শোনে, আর পার্টনার একটু কম শোনে কিংবা খুব বেছে বেছে নির্দিষ্ট কিছু সুর শোনে।"
      }
    ]
  }
};

/**
 * ============================================================================
 * 3D SOFT CARTOON SLEEPING CHARACTERS (PIXAR / SOFT-TOY AESTHETIC)
 * Boy with round Harry Potter glasses in cozy bed
 * Girl with round glasses in cozy bed (mirrored layout)
 * ============================================================================
 */
const BOY_SLEEPING_SVG = `
<svg class="sleeping-svg" viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft Lighting & Depth Filters -->
    <filter id="soft3DShadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#1e1b4b" flood-opacity="0.18"/>
    </filter>
    <linearGradient id="bedFrameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#9a624d"/>
      <stop offset="100%" stop-color="#5a3324"/>
    </linearGradient>
    <linearGradient id="pillowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
    <radialGradient id="boySkinGrad" cx="45%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#fff0e1"/>
      <stop offset="70%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#fba471"/>
    </radialGradient>
    <radialGradient id="boyCheekBlush" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff7192" stop-opacity="0.65"/>
      <stop offset="100%" stop-color="#ff7192" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="boyHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#542e1d"/>
      <stop offset="50%" stop-color="#3c1e11"/>
      <stop offset="100%" stop-color="#231008"/>
    </linearGradient>
    <linearGradient id="boyBlanketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
    <linearGradient id="boyBlanketFold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a5b4fc"/>
      <stop offset="50%" stop-color="#c7d2fe"/>
      <stop offset="100%" stop-color="#a5b4fc"/>
    </linearGradient>
  </defs>

  <!-- Wooden Headboard (Background) -->
  <rect x="35" y="24" width="250" height="90" rx="18" fill="url(#bedFrameGrad)" opacity="0.85"/>
  <rect x="45" y="32" width="230" height="12" rx="6" fill="#b47862" opacity="0.6"/>

  <!-- Fluffy Cloud Pillow with Indent -->
  <g filter="url(#soft3DShadow)">
    <path d="M70 70 C70 42 100 40 160 40 C220 40 250 42 250 70 C250 94 225 98 160 98 C95 98 70 94 70 70 Z" fill="url(#pillowGrad)"/>
    <!-- Pillow indent shadow where head rests -->
    <ellipse cx="155" cy="74" rx="45" ry="16" fill="#94a3b8" opacity="0.25"/>
  </g>

  <!-- Boy Head (Turned comfortably to side) -->
  <g transform="translate(110, 36)">
    <!-- Face / Head shape -->
    <ellipse cx="45" cy="42" rx="38" ry="34" fill="url(#boySkinGrad)" filter="url(#soft3DShadow)"/>
    
    <!-- Blushing Cheek -->
    <ellipse cx="40" cy="50" rx="14" ry="8" fill="url(#boyCheekBlush)"/>

    <!-- Round Harry Potter Glasses -->
    <!-- Left lens & frame -->
    <circle cx="28" cy="40" r="14" fill="none" stroke="#262626" stroke-width="2.8"/>
    <!-- Right lens & frame -->
    <circle cx="58" cy="40" r="14" fill="none" stroke="#262626" stroke-width="2.8"/>
    <!-- Bridge -->
    <path d="M42 38 Q43 35 44 38" fill="none" stroke="#262626" stroke-width="2.8" stroke-linecap="round"/>
    <!-- Glasses Temple / Side Ear Piece -->
    <path d="M14 39 Q8 38 4 41" fill="none" stroke="#262626" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Specular Reflection / Shiny Glare on Lenses -->
    <path d="M22 32 Q26 28 32 30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
    <path d="M52 32 Q56 28 62 30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>

    <!-- Peaceful Closed Eyes (Curved Lash Lines inside frames) -->
    <path d="M22 41 Q28 46 34 41" fill="none" stroke="#451a03" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M52 41 Q58 46 64 41" fill="none" stroke="#451a03" stroke-width="2.4" stroke-linecap="round"/>
    
    <!-- Gentle Sleeping Smile -->
    <path d="M38 56 Q44 60 48 56" fill="none" stroke="#9a3412" stroke-width="2" stroke-linecap="round"/>

    <!-- Fluffy Boyish Messy Hair with Volume -->
    <path d="M10 36 C10 14 26 8 46 8 C68 8 82 18 84 38 C80 32 74 30 70 32 C65 24 55 22 48 25 C42 22 34 23 28 28 C22 28 16 32 10 36 Z" fill="url(#boyHairGrad)"/>
    <!-- Hair Highlights -->
    <path d="M30 14 Q42 10 58 13" fill="none" stroke="#78350f" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
  </g>

  <!-- Cozy Quilt / Blanket (Nighttime Indigo-Lavender) -->
  <g filter="url(#soft3DShadow)">
    <!-- Main Duvet Body -->
    <path d="M40 92 C40 86 60 84 100 84 L220 84 C260 84 280 86 280 92 L285 160 C285 165 275 168 260 168 L60 168 C45 168 35 165 35 160 Z" fill="url(#boyBlanketGrad)"/>
    <!-- Soft Fold Waves & Shadows on Blanket -->
    <path d="M40 100 Q160 115 280 100" fill="none" stroke="#312e81" stroke-width="4" opacity="0.3"/>
    <path d="M45 128 Q160 144 275 128" fill="none" stroke="#312e81" stroke-width="4" opacity="0.3"/>
    
    <!-- Rolled Top Fold of Duvet -->
    <path d="M42 88 C42 82 65 79 160 79 C255 79 278 82 278 88 C278 95 255 98 160 98 C65 98 42 95 42 88 Z" fill="url(#boyBlanketFold)"/>

    <!-- Cute Hand Resting Over the Blanket -->
    <g transform="translate(195, 84)">
      <ellipse cx="14" cy="8" rx="10" ry="7" fill="url(#boySkinGrad)"/>
      <path d="M6 8 Q12 11 18 8" fill="none" stroke="#ea580c" stroke-width="1.2" opacity="0.4"/>
    </g>
  </g>

  <!-- Sweet Floating Zzzs -->
  <g fill="#818cf8" opacity="0.8" font-family="'Poppins', sans-serif" font-weight="700">
    <text x="225" y="45" font-size="12">z</text>
    <text x="238" y="32" font-size="16">Z</text>
    <text x="254" y="18" font-size="20">Z</text>
  </g>
</svg>
`;

const GIRL_SLEEPING_SVG = `
<svg class="sleeping-svg" viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft Lighting & Depth Filters -->
    <filter id="soft3DShadowGirl" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#881337" flood-opacity="0.16"/>
    </filter>
    <linearGradient id="bedFrameGirlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="pillowGirlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#fff1f2"/>
      <stop offset="100%" stop-color="#fecdd3"/>
    </linearGradient>
    <radialGradient id="girlSkinGrad" cx="55%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#fff1f2"/>
      <stop offset="70%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#fca5a5"/>
    </radialGradient>
    <radialGradient id="girlCheekBlush" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="girlHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451a03"/>
      <stop offset="60%" stop-color="#291104"/>
      <stop offset="100%" stop-color="#1c0b02"/>
    </linearGradient>
    <linearGradient id="girlBlanketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb7185"/>
      <stop offset="50%" stop-color="#f43f5e"/>
      <stop offset="100%" stop-color="#be123c"/>
    </linearGradient>
    <linearGradient id="girlBlanketFold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fda4af"/>
      <stop offset="50%" stop-color="#ffe4e6"/>
      <stop offset="100%" stop-color="#fda4af"/>
    </linearGradient>
  </defs>

  <!-- Wooden Headboard with Warm Tone -->
  <rect x="35" y="24" width="250" height="90" rx="18" fill="url(#bedFrameGirlGrad)" opacity="0.85"/>
  <rect x="45" y="32" width="230" height="12" rx="6" fill="#d97706" opacity="0.55"/>

  <!-- Fluffy Cloud Pillow with Warm Tint -->
  <g filter="url(#soft3DShadowGirl)">
    <path d="M70 70 C70 42 100 40 160 40 C220 40 250 42 250 70 C250 94 225 98 160 98 C95 98 70 94 70 70 Z" fill="url(#pillowGirlGrad)"/>
    <!-- Pillow indent shadow -->
    <ellipse cx="165" cy="74" rx="45" ry="16" fill="#f43f5e" opacity="0.18"/>
  </g>

  <!-- Girl Head (Turned gently inward) -->
  <g transform="translate(120, 36)">
    <!-- Face shape -->
    <ellipse cx="45" cy="42" rx="38" ry="34" fill="url(#girlSkinGrad)" filter="url(#soft3DShadowGirl)"/>
    
    <!-- Rosy Blushing Cheek -->
    <ellipse cx="50" cy="50" rx="14" ry="8" fill="url(#girlCheekBlush)"/>

    <!-- Round Glasses -->
    <!-- Left lens & frame -->
    <circle cx="32" cy="40" r="14" fill="none" stroke="#262626" stroke-width="2.8"/>
    <!-- Right lens & frame -->
    <circle cx="62" cy="40" r="14" fill="none" stroke="#262626" stroke-width="2.8"/>
    <!-- Bridge -->
    <path d="M46 38 Q47 35 48 38" fill="none" stroke="#262626" stroke-width="2.8" stroke-linecap="round"/>
    <!-- Glasses Temple -->
    <path d="M76 39 Q82 38 86 41" fill="none" stroke="#262626" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Specular Lens Glare -->
    <path d="M26 32 Q30 28 36 30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.9"/>
    <path d="M56 32 Q60 28 66 30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" opacity="0.9"/>

    <!-- Peaceful Closed Eyes with Eyelashes -->
    <path d="M26 41 Q32 46 38 41" fill="none" stroke="#451a03" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M38 41 L40 39" stroke="#451a03" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M56 41 Q62 46 68 41" fill="none" stroke="#451a03" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M68 41 L70 39" stroke="#451a03" stroke-width="1.8" stroke-linecap="round"/>
    
    <!-- Sweet Gentle Smile -->
    <path d="M42 56 Q47 60 52 56" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round"/>

    <!-- Cute Soft Girl Hairstyle with Bangs -->
    <path d="M8 38 C6 16 24 6 46 6 C68 6 86 16 84 38 C80 30 72 26 66 28 C58 20 48 20 42 24 C36 20 26 22 20 28 C16 30 12 34 8 38 Z" fill="url(#girlHairGrad)"/>
    <!-- Hair side curls cascading onto pillow -->
    <path d="M12 36 Q4 52 14 68 Q18 52 20 38 Z" fill="url(#girlHairGrad)"/>
    
    <!-- Cute Pink Star/Heart Hair Clip -->
    <g transform="translate(68, 20)">
      <path d="M0 -5 L1.5 -1.5 L5.5 -1.5 L2.5 1 L3.5 5 L0 2.5 L-3.5 5 L-2.5 1 L-5.5 -1.5 L-1.5 -1.5 Z" fill="#ff2d78"/>
      <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
    </g>
  </g>

  <!-- Cozy Quilt / Blanket (Warm Strawberry-Pink) -->
  <g filter="url(#soft3DShadowGirl)">
    <!-- Main Duvet Body -->
    <path d="M40 92 C40 86 60 84 100 84 L220 84 C260 84 280 86 280 92 L285 160 C285 165 275 168 260 168 L60 168 C45 168 35 165 35 160 Z" fill="url(#girlBlanketGrad)"/>
    <!-- Fold Waves on Blanket -->
    <path d="M40 100 Q160 115 280 100" fill="none" stroke="#9f1239" stroke-width="4" opacity="0.3"/>
    <path d="M45 128 Q160 144 275 128" fill="none" stroke="#9f1239" stroke-width="4" opacity="0.3"/>
    
    <!-- Rolled Top Fold of Duvet -->
    <path d="M42 88 C42 82 65 79 160 79 C255 79 278 82 278 88 C278 95 255 98 160 98 C65 98 42 95 42 88 Z" fill="url(#girlBlanketFold)"/>

    <!-- Cute Hand Tucked In -->
    <g transform="translate(112, 84)">
      <ellipse cx="12" cy="8" rx="10" ry="7" fill="url(#girlSkinGrad)"/>
      <path d="M6 8 Q12 11 18 8" fill="none" stroke="#f43f5e" stroke-width="1.2" opacity="0.4"/>
    </g>
  </g>

  <!-- Sweet Floating Zzzs -->
  <g fill="#f43f5e" opacity="0.8" font-family="'Poppins', sans-serif" font-weight="700">
    <text x="80" y="45" font-size="12">z</text>
    <text x="66" y="32" font-size="16">Z</text>
    <text x="50" y="18" font-size="20">Z</text>
  </g>
</svg>
`;

/**
 * ============================================================================
 * CORE INITIALIZATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initContent();
  initLiveCounter();
  initStoryDiary();
  initMomentsCarousel();
  initScreenshotLightbox();
  initDreamPage();
  initVibeStats();
  initScrollAnimations();
  initFloatingHeartInteractions();
  initArcadeGame();
});

/**
 * 1. Populate Basic Texts and Names
 */
function initContent() {
  const cfg = STORY_CONFIG;
  
  // Navigation
  const navBrand = document.getElementById("nav-brand-names");
  const logoFull = document.querySelector(".logo-full");
  if (logoFull) {
    logoFull.textContent = cfg.names.brandTitle;
  } else if (navBrand) {
    navBrand.textContent = cfg.names.brandTitle;
  }

  // Hero Section
  const heroBrandName = document.getElementById("hero-brand-name");
  if (heroBrandName) heroBrandName.textContent = cfg.names.brandTitle;
  const heroName1 = document.getElementById("hero-name-1");
  const heroName2 = document.getElementById("hero-name-2");
  const heroSubheadline = document.getElementById("hero-subheadline");
  const counterStartLabel = document.getElementById("counter-start-label");

  if (heroName1) heroName1.textContent = cfg.names.person1;
  if (heroName2) heroName2.textContent = cfg.names.person2;
  if (heroSubheadline) heroSubheadline.textContent = `"${cfg.names.subheadline}"`;
  if (counterStartLabel) counterStartLabel.textContent = `${cfg.startDateFormatted} থেকে আমাদের এই মিষ্টি বন্ধুত্বের শুরু`;

  // Story Intro
  const storyIntro = document.getElementById("story-intro-text");
  if (storyIntro) storyIntro.textContent = cfg.storyIntro;

  // Footer
  const footerQuote = document.getElementById("footer-closing-quote");
  const footerStart = document.getElementById("footer-start-date-text");
  const footerNames = document.getElementById("footer-names");

  if (footerQuote) footerQuote.textContent = `"${cfg.names.closingQuote}"`;
  if (footerStart) footerStart.textContent = `অবিচ্ছেদ্য বন্ধুত্ব • ${cfg.startDateFormatted} থেকে`;
  if (footerNames) footerNames.textContent = cfg.names.credits;
}

/**
 * 2. Hero Live Friendship Counter
 * Updates Days, Hours, Minutes, Seconds every second
 */
function initLiveCounter() {
  const daysEl = document.getElementById("cnt-days");
  const hoursEl = document.getElementById("cnt-hours");
  const minsEl = document.getElementById("cnt-minutes");
  const secsEl = document.getElementById("cnt-seconds");

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const startDate = new Date(STORY_CONFIG.startDate).getTime();

  function update() {
    const now = new Date().getTime();
    let difference = now - startDate;

    if (difference < 0) difference = 0;

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/**
 * 3. Render Open Vintage Diary with 3D Page Flip & Scrapbook Chats
 */
function initStoryDiary() {
  const leftPageEl = document.getElementById("diary-left-page");
  const rightPageEl = document.getElementById("diary-right-page");
  const leafEl = document.getElementById("diary-flipping-leaf");
  const leafFrontEl = document.getElementById("leaf-front-face");
  const leafBackEl = document.getElementById("leaf-back-face");
  const prevBtn = document.getElementById("diary-prev-btn");
  const nextBtn = document.getElementById("diary-next-btn");
  const viewport = document.getElementById("open-diary-viewport");

  const chapterBadgeEl = document.getElementById("diary-chapter-badge");
  const chapterTitleEl = document.getElementById("diary-chapter-title");
  const chapterDateEl = document.getElementById("diary-chapter-date");
  const dotsContainer = document.getElementById("diary-dots-indicator");
  const playToggleBtn = document.getElementById("diary-play-toggle");
  const playIconEl = document.getElementById("play-pause-icon");

  const spreads = STORY_CONFIG.diarySpreads || [];
  if (!spreads.length || !leftPageEl || !rightPageEl) return;

  let currentSpread = 0;
  let isAnimating = false;
  let isAutoPlay = true;
  let autoPlayTimer = null;

  function renderPage(data) {
    if (!data) return "";
    if (data.type === "photo") {
      return `
        <div class="scrapbook-photo-box ${data.tilt || ''}">
          <div class="washi-tape ${data.tapeColor || 'tape-pink'}"></div>
          <img src="${data.image}" alt="Chat Screenshot" class="scrapbook-img" loading="lazy" />
        </div>
        <div class="scrapbook-caption-wrapper">
          <p class="scrapbook-caption">"${data.caption}"</p>
          <span class="scrapbook-date-badge">🗓️ ${data.dateBadge}</span>
        </div>
      `;
    } else {
      return `
        <div class="diary-written-content">
          <span class="diary-chapter-tag">
            <span>✍️</span> ${data.badge || 'স্মৃতি'}
          </span>
          <h3 class="diary-note-title">${data.title}</h3>
          <p class="diary-note-p">${data.text}</p>
          <div class="diary-note-quote">${(data.quote && (data.quote.startsWith('<') || data.quote.startsWith('"'))) ? data.quote : `"${data.quote}"`}</div>
          ${data.footnote ? `<div class="diary-note-footnote"><span>✦</span> ${data.footnote}</div>` : ''}
        </div>
      `;
    }
  }

  function updateDiaryView(index) {
    const s = spreads[index];
    if (!s) return;

    leftPageEl.className = "diary-page-half left-page-half";
    leftPageEl.innerHTML = renderPage(s.leftPage);
    rightPageEl.className = "diary-page-half right-page-half";
    rightPageEl.innerHTML = renderPage(s.rightPage);

    if (chapterBadgeEl) chapterBadgeEl.textContent = s.chapterBadge;
    if (chapterTitleEl) chapterTitleEl.textContent = s.chapterTitle;
    if (chapterDateEl) chapterDateEl.textContent = s.date;

    updateDots();
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll(".diary-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSpread);
    });
  }

  function rebuildDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    spreads.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = `diary-dot ${i === currentSpread ? "active" : ""}`;
      dot.setAttribute("aria-label", `Go to spread ${i + 1}`);
      dot.addEventListener("click", () => {
        if (i !== currentSpread && !isAnimating) {
          goToSpread(i);
        }
      });
      dotsContainer.appendChild(dot);
    });
  }

  // 3D Flip Forward
  function flipForward(targetIndex) {
    if (isAnimating) return;
    isAnimating = true;

    const nextIndex = targetIndex !== undefined ? targetIndex : (currentSpread + 1) % spreads.length;
    const currentData = spreads[currentSpread];
    const nextData = spreads[nextIndex];

    leafFrontEl.innerHTML = renderPage(currentData.rightPage);
    leafBackEl.innerHTML = renderPage(nextData.leftPage);
    rightPageEl.innerHTML = renderPage(nextData.rightPage);

    leafEl.style.display = "block";
    leafEl.className = "diary-flipping-leaf flip-forward";

    setTimeout(() => {
      currentSpread = nextIndex;
      leftPageEl.innerHTML = renderPage(nextData.leftPage);

      leafEl.className = "diary-flipping-leaf";
      leafEl.style.display = "none";
      isAnimating = false;

      updateDiaryView(currentSpread);
    }, 850);
  }

  // 3D Flip Backward
  function flipBackward(targetIndex) {
    if (isAnimating) return;
    isAnimating = true;

    const prevIndex = targetIndex !== undefined ? targetIndex : (currentSpread - 1 + spreads.length) % spreads.length;
    const currentData = spreads[currentSpread];
    const prevData = spreads[prevIndex];

    leafFrontEl.innerHTML = renderPage(prevData.rightPage);
    leafBackEl.innerHTML = renderPage(currentData.leftPage);
    leftPageEl.innerHTML = renderPage(prevData.leftPage);

    leafEl.style.display = "block";
    leafEl.className = "diary-flipping-leaf flip-backward";

    setTimeout(() => {
      currentSpread = prevIndex;
      rightPageEl.innerHTML = renderPage(prevData.rightPage);

      leafEl.className = "diary-flipping-leaf";
      leafEl.style.display = "none";
      isAnimating = false;

      updateDiaryView(currentSpread);
    }, 850);
  }

  function goToSpread(targetIndex) {
    if (targetIndex > currentSpread) {
      flipForward(targetIndex);
    } else {
      flipBackward(targetIndex);
    }
  }

  function goNext() {
    flipForward();
  }

  function goPrev() {
    flipBackward();
  }

  // Navigation button clicks
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goNext();
      resetAutoPlayTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goPrev();
      resetAutoPlayTimer();
    });
  }

  // Auto-advance timer (5.5s)
  function startAutoPlay() {
    stopAutoPlay();
    if (isAutoPlay) {
      autoPlayTimer = setInterval(() => {
        goNext();
      }, 5500);
    }
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlayTimer() {
    if (isAutoPlay) {
      startAutoPlay();
    }
  }

  // Touch Swipe Gestures & Hover Handling
  if (viewport) {
    viewport.addEventListener("mouseenter", stopAutoPlay);
    viewport.addEventListener("mouseleave", () => {
      if (isAutoPlay) startAutoPlay();
    });

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    viewport.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
      stopAutoPlay();
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      if (e.changedTouches.length === 1) {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        // Horizontal swipe: threshold 40px, more horizontal than vertical
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            goNext(); // Swipe left -> next
          } else {
            goPrev(); // Swipe right -> prev
          }
        }
      }
      if (isAutoPlay) startAutoPlay();
    }, { passive: true });
  }

  // Play/Pause button toggle
  if (playToggleBtn) {
    playToggleBtn.addEventListener("click", () => {
      isAutoPlay = !isAutoPlay;
      if (playIconEl) playIconEl.textContent = isAutoPlay ? "⏸" : "▶";
      if (isAutoPlay) {
        startAutoPlay();
      } else {
        stopAutoPlay();
      }
    });
  }

  // Initial layout render
  rebuildDots();
  updateDiaryView(0);

  startAutoPlay();
}

/**
 * 4. Render "Memorable Moments" Messenger Carousel
 */
function initMomentsCarousel() {
  const track = document.getElementById("carousel-track");
  const container = document.getElementById("carousel-track-container");
  const indicatorsBox = document.getElementById("carousel-indicators");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!track || !container || !indicatorsBox) return;

  track.innerHTML = "";
  indicatorsBox.innerHTML = "";

  STORY_CONFIG.chatMemories.forEach((mem, index) => {
    // 1. Messenger Card
    const card = document.createElement("div");
    card.className = "messenger-card glass-card";

    if (mem.image) {
      card.innerHTML = `
        <div class="messenger-header">
          <div class="messenger-avatar">${mem.avatarLetter || 'M'}</div>
          <div class="messenger-user-info">
            <span class="messenger-name">${mem.sender}</span>
            <span class="messenger-status">${mem.status}</span>
          </div>
          ${mem.tag ? `<span class="messenger-topic-tag">${mem.tag}</span>` : ''}
        </div>
        
        <div class="messenger-screenshot-frame" title="বড় করে দেখতে ক্লিক করুন">
          <img src="${mem.image}" alt="${mem.title || 'Chat Memory'}" class="messenger-screenshot-img" loading="eager" decoding="async" />
          <div class="screenshot-zoom-overlay">
            <span class="zoom-badge">🔍 বড় করে দেখুন</span>
          </div>
          <div class="chat-reaction-badge" title="Reacted">${mem.reaction}</div>
        </div>

        <div class="messenger-content-area">
          <h4 class="messenger-memory-title">${mem.title}</h4>
          ${mem.quote ? `<div class="messenger-quote-bubble">"${mem.quote}"</div>` : ''}
          <div class="messenger-caption-area">
            <p class="messenger-caption">"${mem.caption}"</p>
            <div class="messenger-date-tag">
              <span>🗓️</span> ${mem.dateTag}
            </div>
          </div>
        </div>
      `;

      const frame = card.querySelector(".messenger-screenshot-frame");
      if (frame) {
        frame.addEventListener("click", () => {
          openScreenshotLightbox(mem);
        });
      }
    } else {
      card.innerHTML = `
        <div class="messenger-header">
          <div class="messenger-avatar">${mem.avatarLetter}</div>
          <div class="messenger-user-info">
            <span class="messenger-name">${mem.sender}</span>
            <span class="messenger-status">${mem.status}</span>
          </div>
        </div>
        
        <div class="messenger-bubble-stack">
          <div class="chat-bubble incoming">
            ${mem.incomingMessage}
          </div>
          <div class="chat-bubble outgoing">
            ${mem.outgoingMessage}
            <div class="chat-reaction-badge" title="Reacted with love">${mem.reaction}</div>
          </div>
        </div>

        <div class="messenger-caption-area">
          <p class="messenger-caption">"${mem.caption}"</p>
          <div class="messenger-date-tag">
            <span>🗓️</span> ${mem.dateTag}
          </div>
        </div>
      `;
    }

    track.appendChild(card);

    // 2. Indicator Dot
    const dot = document.createElement("button");
    dot.className = `indicator-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      scrollToIndex(index);
    });
    indicatorsBox.appendChild(dot);
  });

  const cards = track.querySelectorAll(".messenger-card");

  function scrollToIndex(index) {
    if (!cards[index]) return;
    const cardLeft = cards[index].offsetLeft - track.offsetLeft;
    container.scrollTo({
      left: cardLeft,
      behavior: "smooth"
    });
    updateActiveDot(index);
  }

  function updateActiveDot(activeIndex) {
    const dots = indicatorsBox.querySelectorAll(".indicator-dot");
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === activeIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const scrollStep = 340;
      container.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const scrollStep = 340;
      container.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  }

  // Update dots on scroll
  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((c, i) => {
      const cardLeft = c.offsetLeft - track.offsetLeft;
      const distance = Math.abs(cardLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    });

    updateActiveDot(closestIndex);
  }, { passive: true });
}

/**
 * 4.1 Screenshot Lightbox Modal Logic
 */
function initScreenshotLightbox() {
  const modal = document.getElementById("screenshot-lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openScreenshotLightbox(mem) {
  const modal = document.getElementById("screenshot-lightbox");
  const titleEl = document.getElementById("lightbox-title");
  const dateEl = document.getElementById("lightbox-date");
  const imgEl = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");

  if (!modal || !imgEl) return;

  imgEl.src = mem.image;
  imgEl.alt = mem.title || "Chat Memory Screenshot";
  if (titleEl) titleEl.textContent = mem.title || "চ্যাট স্মৃতি";
  if (dateEl) dateEl.textContent = mem.dateTag || "";
  if (captionEl) captionEl.textContent = `"${mem.caption || mem.quote || ''}"`;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * 5. Render "Dream Page" Section (Two-Card Landing View & Accordion Drill-down)
 * Features Pixar-style 3D sleeping characters and date-sorted accordions
 */
function initDreamPage() {
  const landingView = document.getElementById("dreams-landing-view");
  const detailView = document.getElementById("dreams-detail-view");
  const cardPartner = document.getElementById("card-partner-dreams");
  const cardPicchi = document.getElementById("card-picchi-dreams");
  const backBtn = document.getElementById("dreams-back-btn");
  const accordionList = document.getElementById("dreams-accordion-list");
  const personTitle = document.getElementById("detail-person-title");
  const personSubtitle = document.getElementById("detail-person-subtitle");
  const avatarIcon = document.getElementById("detail-avatar-icon");
  const countPill = document.getElementById("detail-count-pill");

  const boyArtBox = document.getElementById("boy-sleeping-art");
  const girlArtBox = document.getElementById("girl-sleeping-art");
  const partnerCountEl = document.getElementById("partner-dream-count");
  const picchiCountEl = document.getElementById("picchi-dream-count");

  // 1. Inject Soft 3D Cartoon Sleeping Character SVGs
  if (boyArtBox) boyArtBox.innerHTML = BOY_SLEEPING_SVG;
  if (girlArtBox) girlArtBox.innerHTML = GIRL_SLEEPING_SVG;

  // 2. Set Dream Counts on Landing Cards
  const partnerDreams = STORY_CONFIG.partnerDreams || [];
  const picchiDreams = STORY_CONFIG.picchiDreams || [];

  if (partnerCountEl) partnerCountEl.textContent = `${partnerDreams.length} টি স্বপ্ন`;
  if (picchiCountEl) picchiCountEl.textContent = `${picchiDreams.length} টি স্বপ্ন`;

  // 3. Date-sorting helper (Most recent first)
  function sortDreamsByDateDesc(list) {
    return [...list].sort((a, b) => {
      const timeA = new Date(a.isoDate || a.date).getTime() || 0;
      const timeB = new Date(b.isoDate || b.date).getTime() || 0;
      return timeB - timeA;
    });
  }

  // 4. Open Dedicated Detail View for a person
  function openPersonDreamsView(personKey) {
    if (!landingView || !detailView || !accordionList) return;

    let dreamsData = [];
    let titleText = "";
    let subtitleText = "";
    let iconSymbol = "";

    if (personKey === "partner") {
      dreamsData = sortDreamsByDateDesc(partnerDreams);
      titleText = "Partner-এর স্বপ্নের ডায়েরি";
      subtitleText = "ঘুমের রাজ্যে Partner-এর দেখা মিষ্টি স্বপ্নগুলো";
      iconSymbol = "🌙";
    } else {
      dreamsData = sortDreamsByDateDesc(picchiDreams);
      titleText = "Picchi-র স্বপ্নের ডায়েরি";
      subtitleText = "ঘুমের মাঝে Picchi-র দেখা রূপকথার মতো স্বপ্ন";
      iconSymbol = "🌸";
    }

    // Set Header metadata
    if (personTitle) personTitle.textContent = titleText;
    if (personSubtitle) personSubtitle.textContent = subtitleText;
    if (avatarIcon) avatarIcon.textContent = iconSymbol;
    if (countPill) countPill.textContent = `${dreamsData.length} টি স্বপ্ন`;

    // Render Accordion Items (Sorted by Date descending)
    accordionList.innerHTML = "";

    dreamsData.forEach((dream, index) => {
      const itemEl = document.createElement("div");
      itemEl.className = "dream-accordion-item";

      itemEl.innerHTML = `
        <button class="accordion-header-btn" aria-expanded="false" aria-controls="dream-body-${index}">
          <div class="accordion-left-meta">
            <span class="accordion-date-badge">
              <span>📅</span> ${dream.date}
            </span>
            <span class="accordion-title-text">${dream.title}</span>
          </div>
          <span class="accordion-chevron-icon" aria-hidden="true">▼</span>
        </button>
        <div class="accordion-body-content" id="dream-body-${index}">
          <div class="accordion-divider-line"></div>
          <p class="accordion-full-text">${dream.fullText}</p>
        </div>
      `;

      // Accordion click handler
      const headerBtn = itemEl.querySelector(".accordion-header-btn");
      headerBtn.addEventListener("click", () => {
        const isOpen = itemEl.classList.contains("is-open");
        
        // Toggle current accordion
        if (isOpen) {
          itemEl.classList.remove("is-open");
          headerBtn.setAttribute("aria-expanded", "false");
        } else {
          itemEl.classList.add("is-open");
          headerBtn.setAttribute("aria-expanded", "true");
        }
      });

      accordionList.appendChild(itemEl);
    });

    // Smooth view transition
    landingView.style.display = "none";
    detailView.style.display = "block";

    // Smooth scroll to Dreams section header
    const dreamsSection = document.getElementById("dreams");
    if (dreamsSection) {
      dreamsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // 5. Return back to Two-Card Landing View
  function closeDetailView() {
    if (!landingView || !detailView) return;

    detailView.style.display = "none";
    landingView.style.display = "grid";

    const dreamsSection = document.getElementById("dreams");
    if (dreamsSection) {
      dreamsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Event Listeners for Card 1 (Partner)
  if (cardPartner) {
    cardPartner.addEventListener("click", () => openPersonDreamsView("partner"));
    cardPartner.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPersonDreamsView("partner");
      }
    });
  }

  // Event Listeners for Card 2 (Picchi)
  if (cardPicchi) {
    cardPicchi.addEventListener("click", () => openPersonDreamsView("picchi"));
    cardPicchi.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPersonDreamsView("picchi");
      }
    });
  }

  // Event Listener for "← ফিরে যান" Back Button
  if (backBtn) {
    backBtn.addEventListener("click", closeDetailView);
  }
}

/**
 * 6. Render Vibe Match % Statistics & Category Bars
 */
function initVibeStats() {
  const cfg = STORY_CONFIG.vibeStats;
  const barsContainer = document.getElementById("category-bars-grid");
  const chipsContainer = document.getElementById("tag-chips-wrapper");
  const ringProgress = document.getElementById("ring-progress");
  const pctText = document.getElementById("vibe-percentage-text");

  // Render category progress bars
  if (barsContainer) {
    barsContainer.innerHTML = "";
    cfg.categories.forEach(cat => {
      const barItem = document.createElement("div");
      barItem.className = "cat-bar-item";
      barItem.innerHTML = `
        <div class="cat-bar-header">
          <div class="cat-name-box">
            <span class="cat-icon">${cat.icon}</span>
            <span>${cat.name}</span>
          </div>
          <span class="cat-pct">${cat.percentage}%</span>
        </div>
        <div class="cat-track">
          <div class="cat-fill" data-width="${cat.percentage}"></div>
        </div>
      `;
      barsContainer.appendChild(barItem);
    });
  }

  // Render 8 Matching Traits (100% Mutual Sync - Points ক to জ)
  const matchesGrid = document.getElementById("vibe-matches-grid");
  if (matchesGrid && cfg.vibeMatches) {
    matchesGrid.innerHTML = "";
    cfg.vibeMatches.forEach(item => {
      const card = document.createElement("div");
      card.className = "trait-card match-card";
      card.innerHTML = `
        <div class="trait-card-top">
          <span class="trait-serial-pill">পয়েন্ট ${item.serial}</span>
          <span class="trait-icon">${item.icon}</span>
        </div>
        <h5 class="trait-title">${item.title}</h5>
        <p class="trait-desc">${item.desc}</p>
        <div class="trait-footer">
          <span class="trait-sync-tag">✨ ${item.matchBadge}</span>
        </div>
      `;
      matchesGrid.appendChild(card);
    });
  }

  // Render 6 Sweet Contrasting Traits (Complementary - Points ঝ to ঢ)
  const contrastsGrid = document.getElementById("vibe-contrasts-grid");
  if (contrastsGrid && cfg.vibeContrasts) {
    contrastsGrid.innerHTML = "";
    cfg.vibeContrasts.forEach(item => {
      const card = document.createElement("div");
      card.className = "trait-card contrast-card";
      card.innerHTML = `
        <div class="trait-card-top">
          <span class="trait-serial-pill contrast-pill">পয়েন্ট ${item.serial}</span>
          <span class="trait-icon">${item.icon}</span>
        </div>
        <h5 class="trait-title">${item.title}</h5>
        <div class="trait-contrast-split">
          <div class="contrast-person picchi-box">
            <span class="person-tag picchi-tag">${item.person1Tag}</span>
            <span class="person-val">${item.person1Val}</span>
          </div>
          <div class="contrast-divider">⚡</div>
          <div class="contrast-person partner-box">
            <span class="person-tag partner-tag">${item.person2Tag}</span>
            <span class="person-val">${item.person2Val}</span>
          </div>
        </div>
        <p class="trait-desc">${item.desc}</p>
        <div class="trait-footer">
          <span class="trait-contrast-tag">🌸 মধুর অমিল ও মুগ্ধতা</span>
        </div>
      `;
      contrastsGrid.appendChild(card);
    });
  }

  // Animate Circular Progress Ring and Category Bars when scrolled into view
  const vibeSection = document.getElementById("vibe");
  if (!vibeSection || !ringProgress || !pctText) return;

  let animated = false;
  const ringCircumference = 515.2; // 2 * Math.PI * 82 ≈ 515.22

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;

        // 1. Animate SVG circle stroke-dashoffset
        const targetPct = cfg.overallPercentage;
        const targetOffset = ringCircumference - (targetPct / 100) * ringCircumference;
        ringProgress.style.strokeDashoffset = targetOffset;

        // 2. Animate central number counting up
        let current = 0;
        const duration = 2000;
        const startTime = performance.now();

        function countUp(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const val = Math.round(easeProgress * targetPct);

          pctText.textContent = `${val}%`;

          if (progress < 1) {
            requestAnimationFrame(countUp);
          } else {
            pctText.textContent = `${targetPct}%`;
          }
        }
        requestAnimationFrame(countUp);

        // 3. Animate category progress bar widths
        const fills = document.querySelectorAll(".cat-fill");
        fills.forEach(fill => {
          const width = fill.getAttribute("data-width");
          fill.style.width = `${width}%`;
        });
      }
    });
  }, { threshold: 0.25 });

  observer.observe(vibeSection);
}

/**
 * 7. Scroll Reveal Animations (Intersection Observer)
 */
function initScrollAnimations() {
  const elementsToReveal = document.querySelectorAll(".reveal-fade");

  if (navigator.webdriver || window.location.search.includes("reveal")) {
    elementsToReveal.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elementsToReveal.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
}

/**
 * 8. Interactive Floating Heart & Sparkle Micro-interactions
 */
function initFloatingHeartInteractions() {
  const container = document.getElementById("heart-particles-container");
  const celebrateBtn = document.getElementById("sparkle-btn");
  const icons = ["💖", "✨", "❤️", "🌸", "🔥", "💫", "🥰"];

  function spawnParticle(x, y, count = 1) {
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("span");
      particle.className = "floating-particle";
      particle.textContent = icons[Math.floor(Math.random() * icons.length)];
      
      const randomDrift = (Math.random() - 0.5) * 120;
      particle.style.setProperty("--drift-x", `${randomDrift}px`);
      particle.style.left = `${x + (Math.random() - 0.5) * 30}px`;
      particle.style.top = `${y + (Math.random() - 0.5) * 20}px`;
      particle.style.fontSize = `${Math.random() * 0.8 + 1}rem`;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2400);
    }
  }

  // Click anywhere to spawn a sweet floating particle
  document.addEventListener("click", (e) => {
    // Avoid triggering on inputs or buttons if desired, or let it spark joy everywhere
    if (e.target.closest("button") || e.target.closest("a")) return;
    spawnParticle(e.clientX, e.clientY, 2);
  });

  // Celebrate button triggers a celebration burst
  if (celebrateBtn) {
    celebrateBtn.addEventListener("click", (e) => {
      const rect = celebrateBtn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < 14; i++) {
        setTimeout(() => {
          spawnParticle(centerX, centerY, 1);
        }, i * 70);
      }
    });
  }
}

/**
 * ============================================================================
 * 9. "HEART & DREAM CATCHER" (হার্ট অ্যান্ড ড্রিম ক্যাচার) ARCADE GAME ENGINE
 * ============================================================================
 */
function initArcadeGame() {
  const canvas = document.getElementById("game-canvas");
  const stage = document.getElementById("arcade-stage");
  if (!canvas || !stage) return;

  const ctx = canvas.getContext("2d");

  // DOM HUD & Controls Elements
  const scoreEl = document.getElementById("game-score");
  const comboEl = document.getElementById("game-combo");
  const livesEl = document.getElementById("game-lives");
  const timerEl = document.getElementById("game-timer");
  const highscoreEl = document.getElementById("game-highscore");
  const soundToggleBtn = document.getElementById("game-sound-toggle");
  const soundIconEl = document.getElementById("sound-icon");

  // Overlays
  const startOverlay = document.getElementById("game-start-overlay");
  const resultOverlay = document.getElementById("game-result-overlay");
  const startBtn = document.getElementById("game-start-btn");
  const restartBtn = document.getElementById("game-restart-btn");
  const celebrateGameBtn = document.getElementById("game-celebrate-btn");

  // Character buttons
  const charPartnerBtn = document.getElementById("char-btn-partner");
  const charPicchiBtn = document.getElementById("char-btn-picchi");

  // Result Elements
  const resultTitle = document.getElementById("result-title");
  const resultIcon = document.getElementById("result-icon");
  const resultMsg = document.getElementById("result-msg");
  const finalScoreEl = document.getElementById("final-score");
  const itemsCaughtEl = document.getElementById("items-caught-count");
  const maxComboEl = document.getElementById("max-combo-stat");

  // Mobile Touch Controls
  const touchLeftBtn = document.getElementById("touch-left-btn");
  const touchRightBtn = document.getElementById("touch-right-btn");

  // Helper: English to Bengali Numeral
  const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  function toBnNum(num) {
    return String(num).replace(/[0-9]/g, d => BN_DIGITS[parseInt(d, 10)]);
  }

  // --- Web Audio API Synthesizer (Instant, Zero Network Dependency) ---
  let audioCtx = null;
  let soundEnabled = localStorage.getItem("pp_arcade_sound") !== "false";

  function updateSoundIcon() {
    if (soundIconEl) {
      soundIconEl.textContent = soundEnabled ? "🔊" : "🔇";
    }
  }
  updateSoundIcon();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem("pp_arcade_sound", soundEnabled ? "true" : "false");
      updateSoundIcon();
    });
  }

  function getAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!soundEnabled) return;
    const actx = getAudioCtx();
    if (!actx) return;

    const now = actx.currentTime;

    if (type === "catch") {
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === "bonus") {
      const notes = [587.33, 739.99, 880, 1174.66];
      notes.forEach((freq, idx) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.18, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.15);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.15);
      });
    } else if (type === "bomb") {
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.28);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === "gameover") {
      const fanfare = [523.25, 659.25, 783.99, 1046.50];
      fanfare.forEach((freq, idx) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.25, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    }
  }

  // --- High Score Management ---
  let highScore = parseInt(localStorage.getItem("pp_arcade_highscore") || "0", 10);
  if (highscoreEl) highscoreEl.textContent = toBnNum(highScore);

  // --- Game State Variables ---
  let isPlaying = false;
  let score = 0;
  let lives = 3;
  let timeLeft = 45;
  let combo = 1;
  let comboStreak = 0;
  let maxCombo = 1;
  let itemsCaughtCount = 0;
  let selectedChar = "partner"; // 'partner' or 'picchi'
  let animationFrameId = null;
  let timerInterval = null;
  let lastSpawnTime = 0;
  let screenShake = 0;

  // Touch button state
  let touchMovingLeft = false;
  let touchMovingRight = false;

  // Basket Specifications
  const basket = {
    x: 0,
    y: 0,
    width: 90,
    height: 48,
    targetX: 0,
    vx: 0,
    tilt: 0
  };

  // Falling Items & Particle Pools
  let items = [];
  let particles = [];
  let floatingTexts = [];

  // Item Definitions Tailored for Partner & Picchi
  const ITEM_TYPES = [
    { type: "heart", emoji: "💖", points: 10, bonus: false, label: "হার্ট", weight: 36, speedMin: 2.2, speedMax: 3.4 },
    { type: "flower", emoji: "🌼", points: 15, bonus: false, label: "ভৃঙ্গরাজ ফুল", weight: 20, speedMin: 2.0, speedMax: 3.1 },
    { type: "bike", emoji: "🏍️", points: 25, bonus: true, label: "রয়্যাল এনফিল্ড", weight: 14, speedMin: 3.0, speedMax: 4.4 },
    { type: "tea", emoji: "☕", points: 20, bonus: false, label: "গরম কফি/চা", weight: 14, speedMin: 2.2, speedMax: 3.2 },
    { type: "gem", emoji: "💎", points: 30, bonus: true, label: "মনের রত্ন", weight: 6, speedMin: 3.2, speedMax: 4.8 },
    { type: "bomb", emoji: "💣", points: 0, isBomb: true, label: "জেলাস বোম্ব", weight: 10, speedMin: 2.4, speedMax: 3.8 }
  ];

  // Pick random item based on weights
  function getRandomItemType() {
    const totalWeight = ITEM_TYPES.reduce((acc, it) => acc + it.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const item of ITEM_TYPES) {
      if (rand < item.weight) return item;
      rand -= item.weight;
    }
    return ITEM_TYPES[0];
  }

  // --- High DPI Canvas Resizing ---
  let canvasWidth = 800;
  let canvasHeight = 480;

  function resizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasWidth = rect.width;
    canvasHeight = rect.height;

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);

    // Reposition basket vertically at 80% height
    basket.y = canvasHeight - basket.height - 18;
    if (!isPlaying) {
      basket.x = (canvasWidth - basket.width) / 2;
      basket.targetX = basket.x;
    }
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
  });
  // Initial size calculation
  setTimeout(resizeCanvas, 50);

  // --- Character Selection Handlers ---
  function setCharacter(char) {
    selectedChar = char;
    if (charPartnerBtn && charPicchiBtn) {
      charPartnerBtn.classList.toggle("active", char === "partner");
      charPicchiBtn.classList.toggle("active", char === "picchi");
    }
  }

  if (charPartnerBtn) {
    charPartnerBtn.addEventListener("click", () => setCharacter("partner"));
  }
  if (charPicchiBtn) {
    charPicchiBtn.addEventListener("click", () => setCharacter("picchi"));
  }

  // --- Input Handlers (Mouse, Keyboard, Touch) ---
  function updateTargetX(clientX) {
    const rect = canvas.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    basket.targetX = Math.max(0, Math.min(canvasWidth - basket.width, relativeX - basket.width / 2));
  }

  // Mouse Move
  stage.addEventListener("mousemove", (e) => {
    if (!isPlaying) return;
    updateTargetX(e.clientX);
  });

  // Touch Move / Drag
  stage.addEventListener("touchmove", (e) => {
    if (!isPlaying || !e.touches.length) return;
    e.preventDefault();
    updateTargetX(e.touches[0].clientX);
  }, { passive: false });

  stage.addEventListener("touchstart", (e) => {
    if (!isPlaying || !e.touches.length) return;
    updateTargetX(e.touches[0].clientX);
  }, { passive: true });

  // Keyboard Arrows & A/D
  const keysDown = {};
  window.addEventListener("keydown", (e) => {
    if (!isPlaying) return;
    if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD"].includes(e.code)) {
      keysDown[e.code] = true;
      e.preventDefault();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (keysDown[e.code]) {
      delete keysDown[e.code];
    }
  });

  // Mobile On-screen Buttons
  if (touchLeftBtn && touchRightBtn) {
    const startLeft = (e) => { e.preventDefault(); touchMovingLeft = true; };
    const endLeft = (e) => { e.preventDefault(); touchMovingLeft = false; };
    const startRight = (e) => { e.preventDefault(); touchMovingRight = true; };
    const endRight = (e) => { e.preventDefault(); touchMovingRight = false; };

    touchLeftBtn.addEventListener("touchstart", startLeft, { passive: false });
    touchLeftBtn.addEventListener("touchend", endLeft, { passive: false });
    touchLeftBtn.addEventListener("mousedown", startLeft);
    touchLeftBtn.addEventListener("mouseup", endLeft);
    touchLeftBtn.addEventListener("mouseleave", endLeft);

    touchRightBtn.addEventListener("touchstart", startRight, { passive: false });
    touchRightBtn.addEventListener("touchend", endRight, { passive: false });
    touchRightBtn.addEventListener("mousedown", startRight);
    touchRightBtn.addEventListener("mouseup", endRight);
    touchRightBtn.addEventListener("mouseleave", endRight);
  }

  // --- Game Lifecycle Functions ---
  function startGame() {
    getAudioCtx(); // Ensure audio context is unmuted
    resizeCanvas();

    isPlaying = true;
    score = 0;
    lives = 3;
    timeLeft = 45;
    combo = 1;
    comboStreak = 0;
    maxCombo = 1;
    itemsCaughtCount = 0;
    items = [];
    particles = [];
    floatingTexts = [];
    screenShake = 0;
    lastSpawnTime = performance.now();

    // Center basket
    basket.x = (canvasWidth - basket.width) / 2;
    basket.targetX = basket.x;
    basket.vx = 0;
    basket.tilt = 0;

    // Update HUD
    updateHUD();

    // Hide overlays
    if (startOverlay) startOverlay.style.display = "none";
    if (resultOverlay) resultOverlay.style.display = "none";

    // Timer Interval
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isPlaying) return;
      timeLeft--;
      if (timerEl) timerEl.textContent = `${toBnNum(timeLeft)}s`;

      if (timeLeft <= 0) {
        endGame(true);
      }
    }, 1000);

    // Start Game Loop
    cancelAnimationFrame(animationFrameId);
    let lastTime = performance.now();

    function loop(currentTime) {
      if (!isPlaying) return;
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      updateGame(dt, currentTime);
      renderGame();

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  function endGame(timeUp = false) {
    if (!isPlaying) return;
    isPlaying = false;
    clearInterval(timerInterval);
    cancelAnimationFrame(animationFrameId);

    playSound("gameover");

    // Update High Score
    const isNewRecord = score > highScore;
    if (isNewRecord) {
      highScore = score;
      localStorage.setItem("pp_arcade_highscore", highScore.toString());
      if (highscoreEl) highscoreEl.textContent = toBnNum(highScore);
    }

    // Populate Results
    if (finalScoreEl) finalScoreEl.textContent = toBnNum(score);
    if (itemsCaughtEl) itemsCaughtEl.textContent = toBnNum(itemsCaughtCount);
    if (maxComboEl) maxComboEl.textContent = `x${toBnNum(maxCombo)}`;

    if (resultTitle && resultMsg && resultIcon) {
      if (isNewRecord && score > 200) {
        resultIcon.textContent = "👑";
        resultTitle.textContent = "নতুন সেরা রেকর্ড! 🏆";
        resultMsg.textContent = "অবিশ্বাস্য রিফ্লেক্স! আপনারা সত্যিই ১০০% খাঁটি পার্টনার!";
      } else if (score >= 400) {
        resultIcon.textContent = "🌟";
        resultTitle.textContent = "অসাধারণ পার্টনারশিপ! 🎉";
        resultMsg.textContent = "ভালোবাসা আর স্মৃতির ঝুড়ি উপহারে টইটম্বুর হয়ে গেছে!";
      } else if (score >= 200) {
        resultIcon.textContent = "💖";
        resultTitle.textContent = "দুর্দান্ত খেলেছেন! ✨";
        resultMsg.textContent = "খুব সুন্দর রিফ্লেক্স! সম্পর্কটা যেন এই মিষ্টি উপহারের মতোই রঙিন!";
      } else {
        resultIcon.textContent = "🥰";
        resultTitle.textContent = "ভালো চেষ্টা! 🎈";
        resultMsg.textContent = "আরেকটু সতর্কতা নিয়ে খেলুন, নতুন রেকর্ড আপনার জন্যই অপেক্ষা করছে!";
      }
    }

    // Show Result Overlay
    if (resultOverlay) {
      resultOverlay.style.display = "flex";
    }

    // Trigger sweet celebration confetti
    const celebrateBtn = document.getElementById("sparkle-btn");
    if (celebrateBtn) celebrateBtn.click();
  }

  function updateHUD() {
    if (scoreEl) scoreEl.textContent = toBnNum(score);
    if (comboEl) {
      comboEl.textContent = `x${toBnNum(combo)}`;
      comboEl.classList.toggle("combo-active", combo > 1);
    }
    if (livesEl) {
      livesEl.textContent = "❤️".repeat(Math.max(0, lives)) + "🖤".repeat(Math.max(0, 3 - lives));
    }
    if (timerEl) timerEl.textContent = `${toBnNum(timeLeft)}s`;
    if (highscoreEl) highscoreEl.textContent = toBnNum(highScore);
  }

  // --- Physics & Entity Updates ---
  function updateGame(dt, now) {
    // 1. Keyboard / Touch button continuous movement
    const moveSpeed = 680 * dt;
    if (keysDown["ArrowLeft"] || keysDown["KeyA"] || touchMovingLeft) {
      basket.targetX = Math.max(0, basket.targetX - moveSpeed);
    }
    if (keysDown["ArrowRight"] || keysDown["KeyD"] || touchMovingRight) {
      basket.targetX = Math.min(canvasWidth - basket.width, basket.targetX + moveSpeed);
    }

    // 2. Smooth Lerp & Tilt for Basket
    const prevX = basket.x;
    basket.x += (basket.targetX - basket.x) * 0.28;
    basket.vx = basket.x - prevX;
    basket.tilt = Math.max(-0.16, Math.min(0.16, basket.vx * 0.022));

    // Clamp inside canvas
    basket.x = Math.max(0, Math.min(canvasWidth - basket.width, basket.x));

    // 3. Dynamic Item Spawning based on remaining time
    const spawnInterval = Math.max(380, 850 - (45 - timeLeft) * 11);
    if (now - lastSpawnTime > spawnInterval) {
      spawnItem();
      lastSpawnTime = now;
    }

    // 4. Update Items
    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      it.y += it.speed * 60 * dt;
      it.rot += it.rotSpeed;

      // Check collision with Basket Catchment Zone
      const catchY = basket.y + 8;
      const itemCenterX = it.x;
      const itemCenterY = it.y;

      if (
        itemCenterY >= catchY - 14 &&
        itemCenterY <= catchY + basket.height * 0.65 &&
        itemCenterX >= basket.x - 8 &&
        itemCenterX <= basket.x + basket.width + 8
      ) {
        // CATCH EVENT
        handleCatch(it);
        items.splice(i, 1);
        continue;
      }

      // Check ground miss
      if (it.y > canvasHeight + 30) {
        if (!it.isBomb) {
          // Reset combo streak on missed gifts
          if (comboStreak > 0) {
            comboStreak = 0;
            combo = 1;
            updateHUD();
          }
        }
        items.splice(i, 1);
      }
    }

    // 5. Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.fade;
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      }
    }

    // 6. Update Floating Texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.y -= ft.speed;
      ft.alpha -= ft.fade;
      if (ft.alpha <= 0) {
        floatingTexts.splice(i, 1);
      }
    }

    // 7. Screen Shake decay
    if (screenShake > 0) {
      screenShake = Math.max(0, screenShake - 35 * dt);
    }
  }

  function spawnItem() {
    const itemConfig = getRandomItemType();
    const margin = 35;
    const spawnX = margin + Math.random() * (canvasWidth - margin * 2);
    const speed = itemConfig.speedMin + Math.random() * (itemConfig.speedMax - itemConfig.speedMin);

    items.push({
      x: spawnX,
      y: -25,
      speed: speed,
      rot: (Math.random() - 0.5) * 0.4,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      size: 30,
      type: itemConfig.type,
      emoji: itemConfig.emoji,
      points: itemConfig.points,
      isBomb: itemConfig.isBomb || false,
      bonus: itemConfig.bonus || false
    });
  }

  function handleCatch(item) {
    if (item.isBomb) {
      // BOMB HIT
      playSound("bomb");
      lives--;
      combo = 1;
      comboStreak = 0;
      screenShake = 16;

      addFloatingText(item.x, basket.y - 10, "-১ ❤️ ওহ নো!", "#ff1744");
      createExplosionParticles(item.x, basket.y + 10, "#d32f2f", 16);

      updateHUD();

      if (lives <= 0) {
        endGame(false);
      }
    } else {
      // GIFT / HEART CAUGHT
      itemsCaughtCount++;
      comboStreak++;

      // Combo Multiplier Logic: 3 streak = x2, 6 streak = x3, 10 streak = x4
      if (comboStreak >= 10) combo = 4;
      else if (comboStreak >= 6) combo = 3;
      else if (comboStreak >= 3) combo = 2;
      else combo = 1;

      if (combo > maxCombo) maxCombo = combo;

      const earned = item.points * combo;
      score += earned;

      playSound(item.bonus ? "bonus" : "catch");

      const comboText = combo > 1 ? ` (+${toBnNum(earned)} x${toBnNum(combo)}!)` : ` +${toBnNum(earned)}`;
      const color = item.bonus ? "#ff7a45" : (combo > 1 ? "#ff2d78" : "#e91e63");
      addFloatingText(item.x, basket.y - 12, comboText, color);

      createSparkleParticles(item.x, basket.y + 10, item.bonus ? "#ffd54f" : "#ff4081", 10);

      updateHUD();
    }
  }

  function addFloatingText(x, y, text, color) {
    floatingTexts.push({
      x,
      y,
      text,
      color,
      alpha: 1,
      speed: 1.2,
      fade: 0.022
    });
  }

  function createSparkleParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        size: 2.5 + Math.random() * 3.5,
        color,
        alpha: 1,
        fade: 0.028 + Math.random() * 0.02
      });
    }
  }

  function createExplosionParticles(x, y, color, count = 14) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5.0;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3.5 + Math.random() * 4.5,
        color,
        alpha: 1,
        fade: 0.035
      });
    }
  }

  // --- Rendering Functions ---
  function renderGame() {
    ctx.save();

    // Screen Shake effect
    if (screenShake > 0) {
      const shakeX = (Math.random() - 0.5) * screenShake;
      const shakeY = (Math.random() - 0.5) * screenShake;
      ctx.translate(shakeX, shakeY);
    }

    // Clear Canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw Subtle Floating Ambient Backdrop Stars
    drawBackdrop();

    // Draw Falling Items
    drawItems();

    // Draw Basket and Character
    drawBasket();

    // Draw Sparkles & Explosions
    drawParticles();

    // Draw Floating Score Texts
    drawFloatingTexts();

    ctx.restore();
  }

  function drawBackdrop() {
    // Soft subtle grid & ambient stars
    ctx.save();
    ctx.fillStyle = "rgba(255, 45, 120, 0.03)";
    ctx.beginPath();
    ctx.arc(canvasWidth * 0.5, canvasHeight * 0.9, 140, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawItems() {
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const it of items) {
      ctx.save();
      ctx.translate(it.x, it.y);
      ctx.rotate(it.rot);

      // Cute item drop glow shadow
      ctx.shadowColor = it.isBomb ? "rgba(0,0,0,0.25)" : "rgba(255,45,120,0.3)";
      ctx.shadowBlur = 8;
      ctx.font = `${it.size}px 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji, sans-serif`;
      ctx.fillText(it.emoji, 0, 0);

      ctx.restore();
    }
    ctx.restore();
  }

  function drawBasket() {
    const { x, y, width, height, tilt } = basket;
    ctx.save();

    // Translate to center of basket for rotation / tilt
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    ctx.translate(centerX, centerY);
    ctx.rotate(tilt);

    // 1. Draw Character Avatar seated proudly in the basket
    ctx.save();
    ctx.font = "32px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const avatarEmoji = selectedChar === "partner" ? "👦" : "👧";
    // Soft breathing bob
    const bob = Math.sin(performance.now() * 0.006) * 2;
    ctx.fillText(avatarEmoji, 0, -height / 2 - 8 + bob);
    ctx.restore();

    // 2. Draw Woven Wicker Basket Body (Trapezoid)
    ctx.save();
    const halfW = width / 2;
    const bottomW = width * 0.38;
    const topW = halfW;
    const bHeight = height * 0.78;

    // Basket body gradient
    const grad = ctx.createLinearGradient(0, -bHeight / 2, 0, bHeight / 2);
    if (selectedChar === "partner") {
      grad.addColorStop(0, "#fb923c");
      grad.addColorStop(1, "#c2410c");
    } else {
      grad.addColorStop(0, "#f472b6");
      grad.addColorStop(1, "#be185d");
    }

    ctx.beginPath();
    ctx.moveTo(-topW, -bHeight / 2);
    ctx.lineTo(topW, -bHeight / 2);
    ctx.quadraticCurveTo(topW, bHeight / 2, bottomW, bHeight / 2);
    ctx.lineTo(-bottomW, bHeight / 2);
    ctx.quadraticCurveTo(-topW, bHeight / 2, -topW, -bHeight / 2);
    ctx.closePath();

    ctx.fillStyle = grad;
    ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    ctx.fill();

    // Wicker weave accent pattern lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.lineWidth = 1.6;
    for (let lx = -bottomW + 8; lx < bottomW; lx += 12) {
      ctx.beginPath();
      ctx.moveTo(lx * 1.2, -bHeight / 2);
      ctx.lineTo(lx, bHeight / 2);
      ctx.stroke();
    }

    // 3. Basket Upper Rim (Golden / Pearlescent Pill)
    ctx.beginPath();
    ctx.roundRect(-topW - 4, -bHeight / 2 - 4, width + 8, 9, 5);
    ctx.fillStyle = selectedChar === "partner" ? "#fef08a" : "#fff1f2";
    ctx.shadowColor = "rgba(255, 45, 120, 0.3)";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.strokeStyle = selectedChar === "partner" ? "#eab308" : "#f43f5e";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Mini decorative bow or heart in center of basket
    ctx.font = "14px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("💖", 0, 2);

    ctx.restore();
    ctx.restore();
  }

  function drawParticles() {
    ctx.save();
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  }

  function drawFloatingTexts() {
    ctx.save();
    ctx.font = "bold 15px 'Hind Siliguri', 'Baloo Da 2', sans-serif";
    ctx.textAlign = "center";

    for (const ft of floatingTexts) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, ft.alpha);
      ctx.fillStyle = ft.color;
      ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
      ctx.shadowBlur = 5;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
    ctx.restore();
  }

  // --- Button Listeners ---
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startGame();
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      startGame();
    });
  }

  if (celebrateGameBtn) {
    celebrateGameBtn.addEventListener("click", () => {
      const celebrateBtn = document.getElementById("sparkle-btn");
      if (celebrateBtn) celebrateBtn.click();
    });
  }
}

// Development / Verification URL parameter helpers
if (window.location.search.includes("test=story")) {
  const hero = document.getElementById("hero");
  if (hero) hero.style.display = "none";
} else if (window.location.search.includes("test=moments")) {
  const hero = document.getElementById("hero");
  const story = document.getElementById("story");
  if (hero) hero.style.display = "none";
  if (story) story.style.display = "none";
} else if (window.location.search.includes("test=game")) {
  const hero = document.getElementById("hero");
  const story = document.getElementById("story");
  const moments = document.getElementById("moments");
  const dreams = document.getElementById("dreams");
  const vibe = document.getElementById("vibe");
  if (hero) hero.style.display = "none";
  if (story) story.style.display = "none";
  if (moments) moments.style.display = "none";
  if (dreams) dreams.style.display = "none";
  if (vibe) vibe.style.display = "none";
}

