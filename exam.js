const Q = [];
const mc = (section, text, opts, answer, explanation) =>
  Q.push({ section, text, opts, answer, explanation, type: "MC" });
const tf = (section, text, answer, explanation) =>
  Q.push({
    section,
    text,
    opts: ["True", "False"],
    answer: answer ? 0 : 1,
    explanation,
    type: "TF",
  });
// LESSON 5 — HTML & CSS (18)
mc(
  "Lesson 5 · HTML & CSS",
  "When a browser opens a web page, what happens first after the user enters a URL or clicks a link?",
  [
    "The browser asks a server for the required files.",
    "The browser immediately executes CSS.",
    "The server renders the page on the user’s monitor.",
    "The browser converts the page into a database.",
  ],
  0,
  "The browser sends a request to the server for the files.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "HTML structures content, CSS controls presentation, and JavaScript adds behavior.",
  true,
  "The three web languages have these main roles.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "HTML is considered a markup language rather than a programming language.",
  true,
  "HTML labels and structures content; it is not a programming language.",
);
mc(
  "Lesson 5 · HTML & CSS",
  "Which HTML element contains the content that is visible on the webpage?",
  ["<head>", "<body>", "<meta>", "<title>"],
  1,
  "Visible page content belongs in the body element.",
);
mc(
  "Lesson 5 · HTML & CSS",
  "Which element creates a numbered list?",
  ["<ul>", "<ol>", "<li>", "<span>"],
  1,
  "The ol element creates an ordered (numbered) list.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "Semantic HTML elements describe the meaning or role of the content.",
  true,
  "Semantic elements communicate the purpose of content.",
);
mc(
  "Lesson 5 · HTML & CSS",
  "What does the browser create from the nested HTML elements?",
  [
    "DOM (Document Object Model) tree",
    "CPU schedule",
    "CSS file",
    "IP address",
  ],
  0,
  "The browser represents the document as a DOM tree.",
);
mc(
  "Lesson 5 · HTML & CSS",
  'Which selector targets the element with id="hero"?',
  [".hero", "hero", "#hero", "*hero"],
  2,
  "An ID selector begins with #.",
);
mc(
  "Lesson 5 · HTML & CSS",
  "If two CSS rules have equal specificity and importance, which usually wins?",
  [
    "The rule written later in source order.",
    "The first rule always.",
    "The rule with fewer declarations.",
    "The HTML tag itself.",
  ],
  0,
  "When importance and specificity tie, later source order wins.",
);
// LESSON 6 — HARDWARE (18)
mc(
  "Lesson 6 · Hardware",
  "A device connected externally to add input, output, or storage is called a:",
  ["Peripheral device", "Compiler", "Protocol", "Operating system"],
  0,
  "Peripherals connect externally to extend input, output, or storage functions.",
);
mc(
  "Lesson 6 · Hardware",
  "What does a keyboard primarily allow the user to do?",
  [
    "Enter data and commands.",
    "Print large drawings.",
    "Store data permanently.",
    "Route network packets.",
  ],
  0,
  "The keyboard is a standard input device.",
);
mc(
  "Lesson 6 · Hardware",
  "Which pointing device has a ball that is moved while the device stays stationary?",
  ["Trackball", "Joystick", "Stylus", "Scanner"],
  0,
  "A trackball is similar to an upside-down stationary mouse.",
);
mc(
  "Lesson 6 · Hardware",
  "A printer that presses an inked ribbon against paper is classified as:",
  ["Impact printer", "Non-impact printer", "Optical storage", "Input sensor"],
  0,
  "Impact printers physically strike an inked ribbon.",
);
mc(
  "Lesson 6 · Hardware",
  "RAM is best described as:",
  [
    "Temporary working memory for information used immediately.",
    "Permanent optical storage.",
    "A cable connecting components.",
    "A printer output mechanism.",
  ],
  0,
  "RAM holds data and programs currently being used and is volatile.",
);
tf(
  "Lesson 6 · Hardware",
  "RAM normally loses its stored contents when the computer is powered off.",
  true,
  "RAM is volatile memory.",
);
mc(
  "Lesson 6 · Hardware",
  "CMOS memory commonly keeps track of which information?",
  [
    "System time, date, boot sequence, and hardware configuration.",
    "Only currently open browser tabs.",
    "Printed output.",
    "The monitor brightness alone.",
  ],
  0,
  "CMOS stores configuration and clock information.",
);
mc(
  "Lesson 6 · Hardware",
  "Compared with a typical HDD, an SSD generally offers:",
  [
    "Faster read/write speeds, lower power use, and greater durability.",
    "Slower access and moving magnetic parts.",
    "Only temporary storage.",
    "Analog video output.",
  ],
  0,
  "SSDs use flash memory and have no moving mechanical parts.",
);
mc(
  "Lesson 6 · Hardware",
  "Which CPU component performs arithmetic and logical operations?",
  ["ALU", "CU", "Address bus", "USB controller"],
  0,
  "The ALU performs arithmetic and logical operations.",
);
// LESSON 7 — SOFTWARE (18)
mc(
  "Lesson 7 · Software",
  "Which category manages hardware and provides a platform for applications?",
  [
    "System software",
    "Application software",
    "Programming software",
    "Media files",
  ],
  0,
  "System software manages hardware and supports application execution.",
);
mc(
  "Lesson 7 · Software",
  "Which system-software component manages resources and provides the user interface?",
  ["Operating system", "Compiler", "Spreadsheet", "Webpage"],
  0,
  "The operating system manages resources and provides an interface.",
);
mc(
  "Lesson 7 · Software",
  "What allows an operating system to control a particular hardware device?",
  ["Device driver", "Web browser", "Presentation program", "Search engine"],
  0,
  "Drivers enable OS communication/control of specific hardware.",
);
mc(
  "Lesson 7 · Software",
  "Which category helps users accomplish everyday tasks such as writing or calculating?",
  ["Application software", "System software", "Firmware", "Driver"],
  0,
  "Application software supports user tasks and goals.",
);
mc(
  "Lesson 7 · Software",
  "A compiler generally:",
  [
    "Translates source code as a whole into another form of code.",
    "Displays web pages only.",
    "Stores files magnetically.",
    "Manages network topology.",
  ],
  0,
  "A compiler translates a program/source code into target code.",
);
tf(
  "Lesson 7 · Software",
  "Application software runs on top of the operating system and relies on it for resources.",
  true,
  "Applications depend on the OS for resource access.",
);
tf(
  "Lesson 7 · Software",
  "System software usually requires frequent direct user interaction to perform its core work.",
  false,
  "System software commonly works in the background with minimal direct interaction.",
);
mc(
  "Lesson 7 · Software",
  "Which best differentiates programming software from an everyday application?",
  [
    "Its output or purpose is to help create and maintain other software.",
    "It is always a physical component.",
    "It is only used to browse websites.",
    "It cannot translate code.",
  ],
  0,
  "Programming tools support development rather than a finished everyday user task.",
);
mc(
  "Lesson 7 · Software",
  "Which is the best example of system software rather than application software?",
  ["Operating system", "Photo editor", "Music player", "Word processor"],
  0,
  "An operating system is system software.",
);
// LESSON 8 — NETWORKS (21)
mc(
  "Lesson 8 · Networks",
  "A school network lets many classrooms use one printer. This illustrates:",
  ["Resource sharing", "Web crawling", "HTML nesting", "CPU scheduling"],
  0,
  "Networked users can share a resource such as a printer.",
);
mc(
  "Lesson 8 · Networks",
  "Which medium uses a physical conductor such as wires, cables, or optical fiber?",
  ["Guided media", "Unguided media", "Cellular-only media", "Virtual media"],
  0,
  "Guided media confine signals through a physical medium.",
);
mc(
  "Lesson 8 · Networks",
  "Twisted-pair wires are twisted mainly to reduce:",
  [
    "Electromagnetic interference and crosstalk.",
    "The number of network users.",
    "Webpage file size.",
    "CPU temperature.",
  ],
  0,
  "Twisting helps reduce EMI and crosstalk.",
);
mc(
  "Lesson 8 · Networks",
  "UTP is common in Ethernet and telephone lines. Compared with STP, UTP is generally:",
  [
    "Less shielded and more susceptible to interference.",
    "Always immune to EMI.",
    "Made of glass fibers.",
    "A wireless technology.",
  ],
  0,
  "UTP has no additional shielding, so it is more susceptible to interference.",
);
mc(
  "Lesson 8 · Networks",
  "Which cable transmits data as pulses of light through glass or plastic fibers?",
  ["Fiber optic", "Coaxial", "UTP", "VGA"],
  0,
  "Fiber optic cables carry light pulses.",
);
mc(
  "Lesson 8 · Networks",
  "Which transmission medium typically requires a clear line of sight between antennas?",
  ["Terrestrial microwave", "Twisted pair", "Coaxial cable", "USB"],
  0,
  "Terrestrial microwave is directional and line-of-sight.",
);
mc(
  "Lesson 8 · Networks",
  "Which cellular generation first introduced digital transmission and text messaging?",
  ["2G", "1G", "3G", "5G"],
  0,
  "2G introduced digital transmission and text messaging.",
);
mc(
  "Lesson 8 · Networks",
  "A network connecting several LANs across a university campus is a:",
  ["CAN", "LAN", "WAN", "GAN"],
  0,
  "Campus Area Network connects LANs in a limited campus area.",
);
mc(
  "Lesson 8 · Networks",
  "A telecommunications network spanning cities, countries, or continents is a:",
  ["WAN", "LAN", "CAN", "PAN"],
  0,
  "WAN covers a large geographic area and connects networks.",
);
mc(
  "Lesson 8 · Networks",
  "Which is a common disadvantage of peer-to-peer networks?",
  [
    "Security policies can be difficult to enforce.",
    "Requires a central server in every case.",
    "Cannot share resources.",
    "It always costs more than client-server.",
  ],
  0,
  "P2P can be difficult to secure and manage consistently.",
);
mc(
  "Lesson 8 · Networks",
  "In a client-server network, which role initiates requests for services?",
  ["Client", "Server", "Router only", "Switch only"],
  0,
  "Clients initiate requests; servers process and respond.",
);
mc(
  "Lesson 8 · Networks",
  "In a bus topology, all devices connect to:",
  [
    "One main backbone cable.",
    "A central hub individually.",
    "Every other device.",
    "A circular loop only.",
  ],
  0,
  "Bus topology uses a shared main cable/backbone.",
);
mc(
  "Lesson 8 · Networks",
  "Which topology provides alternative paths and rerouting if a link/node fails?",
  ["Mesh", "Bus", "Ring", "Tree"],
  0,
  "Mesh topology provides redundant paths and fault tolerance.",
);

// TRUE/FALSE — additional balanced coverage
tf(
  "Lesson 5 · HTML & CSS",
  "A website is a collection of related web pages under one domain.",
  true,
  "A website groups related pages under one domain.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "A webpage may be composed of an HTML file together with CSS and images.",
  true,
  "A webpage can include HTML, CSS, and image assets.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "HTML is used to structure content, while CSS handles presentation.",
  true,
  "HTML provides structure; CSS controls presentation.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "JavaScript is primarily responsible for the visual colors and spacing of a webpage.",
  false,
  "CSS controls presentation; JavaScript adds behavior.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "The browser requests files from a server and then combines them to display a page.",
  true,
  "The browser requests resources, receives them, and renders the page.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "The body element contains the visible content of a webpage.",
  true,
  "Visible webpage content is placed in the body.",
);
tf(
  "Lesson 5 · HTML & CSS",
  "A class selector in CSS begins with a period (.).",
  true,
  "Class selectors begin with a period.",
);
tf(
  "Lesson 6 · Hardware",
  "Hardware consists of physical components that can be seen and touched.",
  true,
  "Hardware is the physical component of a computer system.",
);
tf(
  "Lesson 6 · Hardware",
  "Peripheral devices may provide input, output, or storage functions.",
  true,
  "Peripherals extend input, output, or storage.",
);
tf(
  "Lesson 6 · Hardware",
  "A scanner is an output device that displays computer information.",
  false,
  "A scanner is an input device.",
);
tf(
  "Lesson 6 · Hardware",
  "A keyboard is used to enter information and commands.",
  true,
  "Keyboard is a common input device.",
);
tf(
  "Lesson 6 · Hardware",
  "A trackpad translates finger motion into relative screen position.",
  true,
  "Trackpads are pointing devices.",
);
tf(
  "Lesson 6 · Hardware",
  "RAM is non-volatile and keeps its contents when power is removed.",
  false,
  "RAM is volatile memory.",
);
tf(
  "Lesson 6 · Hardware",
  "An HDD stores data magnetically.",
  true,
  "HDD uses magnetic storage.",
);
tf(
  "Lesson 6 · Hardware",
  "The CPU executes instructions and performs processing.",
  true,
  "The CPU is the main processing component.",
);
tf(
  "Lesson 7 · Software",
  "Software is the intangible component of a computer system.",
  true,
  "Software consists of programs and instructions.",
);
tf(
  "Lesson 7 · Software",
  "System software manages hardware and provides a platform for applications.",
  true,
  "This is the role of system software.",
);
tf(
  "Lesson 7 · Software",
  "Application software is generally started and closed by users as needed.",
  true,
  "Applications are opened and closed for tasks.",
);
tf(
  "Lesson 7 · Software",
  "An operating system manages resources and provides an interface.",
  true,
  "The OS performs resource management and provides an interface.",
);
tf(
  "Lesson 7 · Software",
  "Device drivers allow the operating system to control specific hardware.",
  true,
  "Drivers support OS control of devices.",
);
tf(
  "Lesson 7 · Software",
  "Programming software helps developers write, test, debug, and maintain code.",
  true,
  "Programming tools support software development.",
);
tf(
  "Lesson 7 · Software",
  "A compiler translates source code into another form of code.",
  true,
  "Compilers perform translation.",
);
tf(
  "Lesson 8 · Networks",
  "A computer network allows connected devices to communicate and share resources.",
  true,
  "Networks share data, resources, and services.",
);
tf(
  "Lesson 8 · Networks",
  "Guided media use physical conductors to direct signals.",
  true,
  "Guided media have a physical transmission medium.",
);
tf(
  "Lesson 8 · Networks",
  "Unguided media transmit signals without a physical conductor.",
  true,
  "Unguided signals propagate through air or space.",
);
tf(
  "Lesson 8 · Networks",
  "Twisted-pair cable twisting helps reduce interference and crosstalk.",
  true,
  "Twisting reduces EMI and crosstalk.",
);
tf(
  "Lesson 8 · Networks",
  "A LAN usually covers a small area such as a home or building.",
  true,
  "LANs cover local areas.",
);
tf(
  "Lesson 8 · Networks",
  "A star topology connects devices through a central connection point.",
  true,
  "Star topology uses a central hub/switch.",
);

// CPU SCHEDULING — 17 MULTIPLE-CHOICE COMPUTATION ITEMS
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=4; P2 AT=1 BT=3; P3 AT=2 BT=2. What is P2 completion time?",
  ["7", "4", "9", "6"],
  0,
  "FCFS order P1(0–4), P2(4–7), P3(7–9). P2 CT=7.",
);
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=3; P2 AT=2 BT=5; P3 AT=4 BT=1. What is the Gantt chart order?",
  ["P1 → P2 → P3", "P1 → P3 → P2", "P2 → P1 → P3", "P3 → P1 → P2"],
  0,
  "FCFS follows arrival order: P1, P2, P3.",
);
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=4; P2 AT=2 BT=3; P3 AT=3 BT=2. What is P3 waiting time?",
  ["4", "5", "2", "7"],
  0,
  "P1 ends at 4; P2 runs 4–7; P3 starts at 7. WT=7−3=4.",
);
mc(
  "Scheduling · Solve",
  "Non-preemptive SJF (all AT=0): P1 BT=6, P2 BT=2, P3 BT=4. Which order is correct?",
  ["P2 → P3 → P1", "P1 → P2 → P3", "P3 → P1 → P2", "P1 → P3 → P2"],
  0,
  "SJF selects the shortest burst first: 2, then 4, then 6.",
);
mc(
  "Scheduling · Solve",
  "Non-preemptive SJF (all AT=0): P1 BT=5, P2 BT=1, P3 BT=3. What is P1 waiting time?",
  ["4", "0", "1", "3"],
  0,
  "Order P2(0–1), P3(1–4), P1(4–9). P1 waits 4.",
);
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=5; P2 AT=1 BT=2; P3 AT=3 BT=4. What is P1 turnaround time?",
  ["5", "7", "9", "0"],
  0,
  "P1 starts at 0 and completes at 5; TAT=CT−AT=5−0=5.",
);
(mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=3; P2 AT=1 BT=4; P3 AT=2 BT=2. Find average waiting time.",
  ["2.33", "2", "4", "5"],
  0,
  "WTs: P1=0, P2=2, P3=5. Average=(0+2+5)/3=7/3≈2.33.",
),
  mc(
    "Scheduling · Solve",
    "Round Robin, q=2: P1 AT=0 BT=5; P2 AT=1 BT=3; P3 AT=2 BT=1. Which is the Gantt sequence?",
    [
      "P1 → P2 → P3 → P1 → P2 → P1",
      "P1 → P1 → P2 → P3",
      "P2 → P1 → P3 → P2",
      "P1 → P3 → P2 → P1",
    ],
    0,
    "With quantum 2 and the arrival queue, the sequence is P1, P2, P3, P1, P2, P1.",
  ));
mc(
  "Scheduling · Solve",
  "Round Robin, q=2: P1 AT=0 BT=5; P2 AT=1 BT=3; P3 AT=2 BT=1. What is P3 completion time?",
  ["5", "4", "7", "8"],
  0,
  "P1 runs 0–2, P2 2–4, P3 4–5; therefore P3 CT=5.",
);
mc(
  "Scheduling · Solve",
  "Using the same Round Robin set (q=2; P1 BT=5 AT=0, P2 BT=3 AT=1, P3 BT=1 AT=2), what is P2 waiting time?",
  ["4", "3", "5", "2"],
  0,
  "P2 CT=8, TAT=8−1=7, WT=7−3=4.",
);

// Additional CPU scheduling computation questions
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=4; P2 AT=1 BT=2; P3 AT=2 BT=3. What is P3 completion time?",
  ["9", "6", "7", "5"],
  0,
  "FCFS runs P1 from 0–4, P2 from 4–6, then P3 from 6–9; CT=9.",
);
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=3; P2 AT=2 BT=4; P3 AT=4 BT=2. Find P2 turnaround time.",
  ["5", "4", "7", "2"],
  0,
  "P2 completes at 7. TAT=CT−AT=7−2=5.",
);
mc(
  "Scheduling · Solve",
  "Non-preemptive SJF, all AT=0: P1 BT=7, P2 BT=2, P3 BT=4. What is P3 waiting time?",
  ["2", "0", "4", "6"],
  0,
  "P2 runs 0–2, P3 2–6, so P3 waits 2.",
);
mc(
  "Scheduling · Solve",
  "Non-preemptive SJF, all AT=0: P1 BT=3, P2 BT=6, P3 BT=1. What is the average waiting time?",
  ["1.67", "1.33", "3", "0.67"],
  0,
  "Order P3(0–1), P1(1–4), P2(4–10). Waiting times 0, 1, 4; average=5/3≈1.67.",
);
mc(
  "Scheduling · Solve",
  "Round Robin q=2: P1 AT=0 BT=4; P2 AT=1 BT=3; P3 AT=2 BT=2. What is P1 completion time?",
  ["8", "4", "6", "9"],
  0,
  "P1 runs 0–2 then 6–8; completion time is 8.",
);
mc(
  "Scheduling · Solve",
  "Round Robin q=2: P1 AT=0 BT=3; P2 AT=1 BT=2; P3 AT=2 BT=1. What is P3 turnaround time?",
  ["3", "5", "4", "6"],
  0,
  "P1 0–2, P2 2–4, P3 4–5. P3 CT=5; TAT=5−2=3.",
);
mc(
  "Scheduling · Solve",
  "FCFS: P1 AT=0 BT=5; P2 AT=2 BT=2; P3 AT=3 BT=1. Find average turnaround time.",
  ["5", "6.33", "7", "4.33"],
  0,
  "CTs are 5, 7, 8. TATs are 5, 5, 5; average is 5.",
);

// Exactly 85 questions (18 + 18 + 18 + 21 + 10)
if (Q.length !== 85) console.error("Expected 85 questions, got", Q.length);
let state = {
  index: 0,
  answers: Array(85).fill(null),
  flags: Array(85).fill(false),
  submitted: false,
};
const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('\"', "&quot;")
    .replaceAll("'", "&#39;");
const app = document.getElementById("app");
function shuffleOptions() {
  Q.forEach((q) => {
    const pairs = q.opts.map((opt, i) => ({ opt, correct: i === q.answer }));
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    q.opts = pairs.map((x) => x.opt);
    q.answer = pairs.findIndex((x) => x.correct);
  });
}
document.getElementById("start").onclick = () => {
  shuffleOptions();
  state.index = 0;
  renderExam();
};
function renderExam() {
  const i = state.index,
    q = Q[i],
    answered = state.answers.filter((x) => x !== null).length,
    flagged = state.flags.filter(Boolean).length;
  app.innerHTML = `<div class="exam"><section class="card mainpanel"><div class="progress-head"><span>Question ${i + 1} of ${Q.length}</span><span>${answered} answered</span></div><div class="progress"><div style="width:${(answered / Q.length) * 100}%"></div></div><span class="sectiontag">${q.section}</span><div class="qnum">${q.type === "TF" ? "TRUE OR FALSE" : "MULTIPLE CHOICE"} · ITEM ${i + 1}</div><h2 class="question">${esc(q.text)}</h2><div class="options">${q.opts.map((o, j) => `<div class="option ${state.answers[i] === j ? "selected" : ""}" data-opt="${j}"><span class="letter">${q.type === "TF" ? "" : String.fromCharCode(65 + j)}</span><span>${esc(o)}</span></div>`).join("")}</div><div class="navrow"><button class="secondary" id="prev" ${i === 0 ? "disabled" : ""}>← Previous</button><button class="flag ${state.flags[i] ? "active" : ""}" id="flag">${state.flags[i] ? "⚑ Flagged" : "⚐ Flag for review"}</button><button class="primary" id="next">${i === 84 ? "Finish review" : "Next →"}</button></div></section><aside class="card side"><h3>Question Navigator</h3><div class="progress-head"><span>Answered ${answered}/85</span><span>Flagged ${flagged}</span></div><div class="gridnums">${Q.map((_, n) => `<button class="num ${n === i ? "current" : ""} ${state.answers[n] !== null ? "answered" : ""} ${state.flags[n] ? "flagged" : ""}" data-num="${n}">${n + 1}</button>`).join("")}</div><div class="legend"><span><i class="dot"></i>Answered</span><span><i class="dot flagdot"></i>Flagged</span></div><button class="primary submit" id="submit">Submit Exam</button><div class="submitbar"><span>${85 - answered} unanswered</span><span>85 items</span></div></aside></div>`;
  app.querySelectorAll(".option").forEach(
    (el) =>
      (el.onclick = () => {
        state.answers[i] = +el.dataset.opt;
        renderExam();
      }),
  );
  app.querySelectorAll(".num").forEach(
    (el) =>
      (el.onclick = () => {
        state.index = +el.dataset.num;
        renderExam();
      }),
  );
  document.getElementById("prev").onclick = () => {
    state.index--;
    renderExam();
  };
  document.getElementById("next").onclick = () => {
    state.index = Math.min(84, i + 1);
    renderExam();
  };
  document.getElementById("flag").onclick = () => {
    state.flags[i] = !state.flags[i];
    renderExam();
  };
  document.getElementById("submit").onclick = () => {
    const unanswered = state.answers.filter((x) => x === null).length;
    if (
      unanswered &&
      !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)
    )
      return;
    if (
      !confirm(
        "Submit your exam now? Your answers will be locked and reviewed.",
      )
    )
      return;
    state.submitted = true;
    renderResult();
  };
}
function renderResult() {
  const score = Q.reduce(
      (s, q, i) => s + (state.answers[i] === q.answer ? 1 : 0),
      0,
    ),
    pct = Math.round((score / 85) * 100);
  app.innerHTML = `<section class="card result"><p class="eyebrow">EXAM SUBMITTED</p><h1>Results</h1><div class="score">${score}<small style="font-size:25px;color:#777"> / 85</small></div><h2>${pct}%</h2><p>${score >= 75 ? "Nice work—review any missed items to reinforce concepts." : "Review the explanations below and try again when ready."}</p><div class="coverage"><span>${state.answers.filter((x) => x !== null).length} answered</span><span>${state.flags.filter(Boolean).length} flagged</span><span>${85 - score} incorrect or unanswered</span></div><button class="primary" id="retry">Retake Exam</button><button class="secondary" id="review">Review Answers ↓</button><div id="reviews" class="hide">${Q.map(
    (q, i) => {
      let ok = state.answers[i] === q.answer;
      return `<article class="reviewitem ${ok ? "correct" : "wrong"}"><small>${i + 1}. ${q.section} · ${ok ? "Correct" : "Incorrect"}</small><h4>${esc(q.text)}</h4><p>Your answer: <b class="${ok ? "correctanswer" : "wronganswer"}">${state.answers[i] === null ? "Unanswered" : esc(q.opts[state.answers[i]])}</b></p><p>Correct answer: <b class="correctanswer">${esc(q.opts[q.answer])}</b></p><p>${esc(q.explanation)}</p></article>`;
    },
  ).join("")}</div></section>`;
  document.getElementById("retry").onclick = () => {
    state = {
      index: 0,
      answers: Array(85).fill(null),
      flags: Array(85).fill(false),
      submitted: false,
    };
    shuffleOptions();
    renderExam();
  };
  document.getElementById("review").onclick = () => {
    document.getElementById("reviews").classList.toggle("hide");
    document.getElementById("review").textContent = document
      .getElementById("reviews")
      .classList.contains("hide")
      ? "Review Answers ↓"
      : "Hide Review ↑";
  };
}
