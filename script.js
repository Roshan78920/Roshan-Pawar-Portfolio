/* ===== Content: edit this object to update the site ===== */
const D = {
  roles: ["Angular & React", "Node.js & Python", "AWS & Serverless", "IoT & Fintech"],
  stats: [["5+", "Years of experience"], ["12+", "SaaS modules built"], ["45%", "Fewer DB reads with Redis"], ["85%+", "Test coverage, settlements"]],
  metrics: [["60%", "Less guest processing time"], ["35%", "Shorter slow-query times"], ["<1s", "Dashboard response time"], ["3", "IoT products shipped"]],
  about: [
    ["Frontend", "Angular (v14 to v18+), React.js, TypeScript, RxJS, NgRx and Signals. Dashboards with role-based access and live data."],
    ["Backend & APIs", "Node.js, Express.js, TypeScript and Python (FastAPI). REST APIs documented with OpenAPI/Swagger, plus WebSockets."],
    ["Cloud & Serverless", "AWS Lambda, API Gateway, DynamoDB, S3, SQS, SNS, ECS/Fargate and EKS, deployed through CI/CD."],
    ["IoT & Real-time", "Telemetry from GPS, battery and animal-health sensors, FOTA firmware updates and live dashboards."],
    ["Security & Payments", "OAuth2, JWT, RBAC, encrypted payloads, rate limits and audit logs. Idempotent, retry-safe payment flows."],
    ["AI-augmented work", "Cursor, GitHub Copilot and the Claude API. Built a natural-language analytics tool on AWS Bedrock."]
  ],
  jobs: [
    { role: "Full Stack Developer", co: "Virtual Gain Technologies Pvt. Ltd.", loc: "Pune", date: "Apr 2026 - Present", cur: 1,
      pts: ["Build and maintain secure server-to-server (S2S) banking APIs that connect the platform with banks and financial institutions.",
        "Wrote Node.js, Express.js and TypeScript services with retries, idempotency checks and automatic rollbacks for reliable payments.",
        "Added encrypted payloads, JWT/OAuth2 authentication, API rate limits and audit logs.",
        "Wrote Jest unit and integration tests with over 85% coverage on settlement modules.",
        "Review code, deploy to production and trace root causes in live banking integrations, including slow requests.",
        "Built Angular dashboards with role-based access to track transactions, settlement status and API errors."],
      tags: ["Node.js", "Express.js", "TypeScript", "Angular", "Jest", "OAuth2", "JWT", "Redis", "Docker", "GitHub Actions"] },
    { role: "Software Engineer - I", co: "Vanix Technologies Pvt. Ltd.", loc: "Hyderabad", date: "Jan 2024 - Apr 2026",
      pts: ["Built full-stack features for three IoT products: Device Management, Battery Management and Cattle Monitoring.",
        "Built serverless backends on AWS Lambda, API Gateway, DynamoDB and S3 with dashboard response times under one second.",
        "Wrote Python and FastAPI services for sensor data, device diagnostics and health scores, served through documented REST APIs.",
        "Added Redis caching for frequently read device data, cutting database reads by 45%.",
        "Built remote tools to send firmware updates (FOTA) and restart many devices at once.",
        "Improved Angular performance with OnPush change detection and RxJS so live screens use less CPU."],
      tags: ["Python", "FastAPI", "AWS Lambda", "DynamoDB", "Angular", "RxJS", "Redis", "Docker", "Socket.io", "CI/CD"] },
    { role: "Frontend / Full Stack Developer", co: "UrSpayce Inc.", loc: "Bhopal", date: "Jun 2021 - Dec 2023",
      pts: ["Helped design the architecture of a Workplace Management SaaS product with 12+ modules, including Visitor Management, Asset Tracking and Desk Booking.",
        "Built Node.js, Express.js and MongoDB REST APIs that automated check-ins and cut guest processing time by 60%.",
        "Tuned MongoDB aggregation queries and indexes, reducing slow query times by 35%.",
        "Built interactive floor-plan maps and analytics dashboards in Angular for real-time space usage.",
        "Created reusable, lazy-loaded UI components that work on desktops, tablets and check-in kiosks."],
      tags: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "SCSS", "Microservices"] }
  ],
  skills: {
    "Backend & APIs": [["Node.js / Express.js", 92], ["TypeScript", 90], ["Python / FastAPI", 82], ["REST & OpenAPI", 90], ["WebSockets / Socket.io", 85], ["Microservices", 84]],
    "Frontend": [["Angular (v14 to v18+)", 94], ["React.js", 82], ["RxJS / NgRx / Signals", 88], ["TypeScript / ES6+", 91], ["HTML5 / CSS3 / SCSS", 90], ["Responsive Design", 90]],
    "Databases": [["MongoDB / Mongoose", 90], ["PostgreSQL / MySQL", 82], ["DynamoDB", 82], ["Redis caching", 85], ["Indexing & query tuning", 85]],
    "Cloud & DevOps": [["AWS Lambda / API Gateway", 88], ["ECS / Fargate / EKS", 78], ["Docker", 85], ["GitHub Actions / GitLab CI", 85], ["SQS / SNS", 82], ["CloudWatch", 78]],
    "Testing & Security": [["Jest / Jasmine / Karma", 87], ["Integration & E2E testing", 82], ["OAuth2 / JWT", 88], ["RBAC", 88], ["Rate limiting & encryption", 84]],
    "AI-augmented dev": [["Claude API", 82], ["AWS Bedrock", 78], ["Cursor AI", 88], ["GitHub Copilot", 88], ["Prompt safety & caching", 76]]
  },
  more: ["Idempotent payments", "Event-driven architecture", "12-Factor apps", "FOTA updates", "Code reviews", "Agile / Scrum", "JIRA", "Postman", "Swagger UI", "Git / GitHub / GitLab", "Kubernetes (EKS)", "Serverless Framework", "Bootstrap", "Angular Material"],
  projects: [
    { t: "Banking Gateway for Fund Transfers", cat: "FinTech", d: "Encrypted fund transfers, balance checks and real-time status webhooks, with timeout recovery so data stays correct when bank responses are late or fail. Angular portal for transactions, PDF receipts and disputes.", imp: "Structured logging, RBAC and CI-tested modules", tags: ["Node.js", "TypeScript", "Angular", "Jest", "Redis", "Docker", "Webhooks"] },
    { t: "IoT Fleet & Telemetry Platform", cat: "IoT", d: "Collects GPS location, battery voltage, temperature and animal health data from collars and sensors. Dashboards update live over Socket.io and API Gateway WebSockets.", imp: "Live data from thousands of devices, dashboards under 1s", tags: ["Python", "FastAPI", "AWS Lambda", "SQS", "SNS", "DynamoDB", "ECS", "Angular"] },
    { t: "Workplace Management SaaS", cat: "SaaS", d: "Frontend for a 12+ module product covering Visitor Management, Asset Tracking and Desk Booking, with QR-code contactless check-in and asset allocation.", imp: "60% less guest processing time", tags: ["Angular", "Node.js", "Express.js", "MongoDB", "Microservices"] },
    { t: "AI-Powered Analytics Tool", cat: "AI", d: "Lets non-technical users ask questions about company data in plain English and get answers from the database. Includes input checks, prompt safety rules and caching to control API costs.", imp: "AWS Bedrock and Claude API behind Node.js services", tags: ["AWS Bedrock", "Claude API", "Node.js", "TypeScript", "Redis", "Angular"] }
  ],
  edu: [["Master of Computer Applications (MCA)", "Technocrats Institute of Technology, Bhopal", "2021"], ["Bachelor of Computer Applications (BCA)", "Vikramaditya Group of Institutions, Bhopal", "2018"]],
  certs: ["Google AI Professional Certificate (Coursera)", "IBM Full Stack Software Developer (Coursera)", "Generative AI Software Engineering (Coursera)", "AWS Cloud Solutions Architect Specialization (Coursera)", "Google Project Management (Coursera)", "Software Design and Architecture (Coursera)"]
};

/* ===== Helpers ===== */
const $ = (s) => document.querySelector(s);
const tags = (a) => `<div class="tags">${a.map((t) => `<span>${t}</span>`).join("")}</div>`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Render ===== */
$("#heroStats").innerHTML = D.stats.map(([n, l]) => `<div><dt data-count="${n}">${n}</dt><dd>${l}</dd></div>`).join("");
$("#metrics").innerHTML = D.metrics.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");
$("#aboutCards").innerHTML = D.about.map(([t, p]) => `<article class="card"><h3>${t}</h3><p>${p}</p></article>`).join("");
$("#jobs").innerHTML = D.jobs.map((j) => `<article class="job card${j.cur ? " cur" : ""}"><header><div><h3>${j.role}</h3><span class="co">${j.co}, ${j.loc}</span></div><span class="date">${j.date}</span></header><ul>${j.pts.map((p) => `<li>${p}</li>`).join("")}</ul>${tags(j.tags)}</article>`).join("");
$("#more").innerHTML = D.more.map((m) => `<span>${m}</span>`).join("");
$("#edu").innerHTML = D.edu.map(([d, s, y]) => `<div class="edu"><b>${d}</b><span>${s}</span><span>${y}</span></div>`).join("");
$("#certs").innerHTML = D.certs.map((c) => `<li>${c}</li>`).join("");
$("#yr").textContent = new Date().getFullYear();

/* Tab groups: skills and project filters */
function tabs(box, names, onPick) {
  box.innerHTML = names.map((n, i) => `<button role="tab" aria-selected="${i === 0}">${n}</button>`).join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    box.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
    onPick(b.textContent);
  });
  onPick(names[0]);
}
tabs($("#skillTabs"), Object.keys(D.skills), (k) => {
  $("#skillBars").innerHTML = D.skills[k].map(([n, v]) => `<div class="bar"><div>${n}<span>${v}%</span></div><i style="--w:${v}%"></i></div>`).join("");
});
tabs($("#filters"), ["All", ...new Set(D.projects.map((p) => p.cat))], (c) => {
  $("#projectGrid").innerHTML = D.projects.filter((p) => c === "All" || p.cat === c).map((p) => `<article class="card"><div class="cat">${p.cat}</div><h3>${p.t}</h3><p>${p.d}</p><p class="imp">${p.imp}</p>${tags(p.tags)}</article>`).join("");
});

/* ===== Typed role line ===== */
(function () {
  const el = $("#typed");
  if (reduce) { el.textContent = D.roles[0]; return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = D.roles[r];
    el.textContent = w.slice(0, c);
    if (!del && c === w.length) { del = true; return setTimeout(tick, 1600); }
    if (del && c === 0) { del = false; r = (r + 1) % D.roles.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
})();

/* ===== Count-up for hero stats ===== */
if (!reduce) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const m = e.target.dataset.count.match(/^(\d+)(.*)$/);
    if (!m) return;
    const end = +m[1], t0 = performance.now();
    (function step(t) {
      const p = Math.min((t - t0) / 1100, 1);
      e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + m[2];
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((n) => io.observe(n));
}

/* ===== Nav: solid on scroll, active link, mobile menu ===== */
const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
addEventListener("scroll", () => nav.classList.toggle("solid", scrollY > 24), { passive: true });
const links = [...menu.querySelectorAll("a[href^='#']:not(.btn)")];
const spy = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.hash === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
links.forEach((a) => { const s = $(a.hash); if (s) spy.observe(s); });
function setMenu(open) {
  menu.classList.toggle("open", open);
  nav.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

/* ===== Contact form: opens the visitor's email app ===== */
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("msg")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:roshan78920@gmail.com?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  $("#note").textContent = "Your email app should open with the message ready to send.";
});
