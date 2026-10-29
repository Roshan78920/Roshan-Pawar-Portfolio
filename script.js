/* ===== Content: edit this object to update the site ===== */
const D = {
  roles: ["Angular & React", "Node.js & TypeScript", "AWS & Serverless", "IoT, Fintech & AI"],
  stats: [["5+", "Years of experience"], ["12", "Modules in one SaaS product"], ["7", "Production projects delivered"], ["85%+", "Test coverage, settlements"]],
  metrics: [["7", "Production projects delivered"], ["2", "Client IoT platforms led"], ["28", "Months on UrSpayce SaaS"], ["8.8/10", "MCA grade"]],
  about: [
    ["Frontend", "Angular, React.js, TypeScript, RxJS and Highcharts. Role-based dashboards, dynamic forms and real-time data screens."],
    ["Backend & APIs", "Node.js, Express.js and TypeScript, plus Python and FastAPI. REST APIs, microservices and third-party integrations."],
    ["Cloud & Serverless", "AWS Lambda, API Gateway, DynamoDB, S3, SQS, EC2 and CloudWatch, shipped through CI/CD with Docker."],
    ["IoT & Real-time", "Telemetry from GPS collars, batteries and sensors, with WebSockets and Socket.io for live dashboards."],
    ["Security & Banking", "S2S bank integrations with JWT, OAuth2, encrypted payloads, rate limiting, audit logs and idempotent payments."],
    ["AI-powered apps", "AWS Bedrock and LLM APIs for analytics and insights. Certified in Claude Code with generative AI agents."]
  ],
  jobs: [
    { role: "Full Stack Developer", co: "Virtual Gain Technologies Pvt. Ltd.", loc: "Pune", date: "Apr 2026 - Present", cur: 1,
      pts: ["Develop and maintain secure server-to-server (S2S) banking APIs that integrate with banks and financial institutions such as Touras.",
        "Built scalable Node.js, Express.js and TypeScript services with retries, idempotency checks and automated transaction rollbacks.",
        "Enforce security with encrypted payloads, JWT and OAuth2 authentication, API rate limiting and comprehensive audit logs.",
        "Wrote Jest unit and integration tests, reaching over 85% code coverage on settlement modules.",
        "Run code reviews and production deployments, and resolve live integration issues including performance bottlenecks and slow API responses.",
        "Build Angular dashboards with role-based access control to monitor transaction flows, settlement status and API error metrics."],
      tags: ["Node.js", "Express.js", "TypeScript", "Angular", "Jest", "JWT", "OAuth2", "RBAC"] },
    { role: "Software Engineer - I", co: "Vanix Technologies Pvt. Ltd.", loc: "Hyderabad", date: "Jan 2024 - Apr 2026",
      pts: ["Delivered full-stack enterprise SaaS and IoT applications with Angular, React.js, TypeScript, Node.js, Express.js and AWS.",
        "Served as Technical Team Lead and client point of contact on the Luminous and Jiotronik IoT platforms: requirements, sprint planning, task allocation and delivery.",
        "Designed and maintained scalable backend microservices, REST APIs and database integrations.",
        "Created reusable frontend components, dynamic forms and responsive interfaces following clean coding standards.",
        "Implemented authentication, authorization and RBAC, and integrated third-party APIs.",
        "Deployed on AWS, supported production releases and monitored applications. Improved performance with lazy loading and API optimization.",
        "Contributed to technical discussions, code reviews, testing and CI/CD within Agile/Scrum teams."],
      tags: ["Angular", "React.js", "Node.js", "Python", "FastAPI", "AWS Lambda", "DynamoDB", "Redis", "Socket.io", "Highcharts"] },
    { role: "Front End Software Engineer", co: "UrSpayce Inc.", loc: "Bhopal", date: "Sep 2021 - Dec 2023",
      pts: ["Built scalable, responsive enterprise SaaS applications with Angular, TypeScript, JavaScript, Node.js, Express.js, HTML5, CSS3 and SCSS.",
        "Designed and built backend microservices and REST APIs for business workflows, authentication, authorization and database operations.",
        "Created reusable Angular components, dynamic forms and role-based dashboards for Visitor Management, Desk Booking, Meeting Room Booking, Mailroom, Asset Tracking and Facility Management.",
        "Integrated the frontend with backend services and third-party APIs for seamless data flow and real-time updates.",
        "Deployed and managed cloud applications on AWS with continuous monitoring.",
        "Optimized performance through lazy loading, efficient API handling and component reuse.",
        "Worked in Agile/Scrum teams on system design, testing, code reviews, CI/CD and the full SDLC."],
      tags: ["Angular", "TypeScript", "Node.js", "Express.js", "SCSS", "AWS", "Microservices"] }
  ],
  skills: {
    "Backend & APIs": [["Node.js / Express.js", 92], ["TypeScript / JavaScript", 91], ["REST API design", 91], ["Microservices", 85], ["API integration", 88], ["Python / FastAPI", 80], ["System design", 82]],
    "Frontend": [["Angular", 94], ["React.js", 84], ["RxJS", 88], ["HTML5 / CSS3 / SCSS", 90], ["Highcharts dashboards", 82], ["Performance (lazy loading)", 86]],
    "Databases": [["MongoDB", 90], ["PostgreSQL / MySQL", 82], ["DynamoDB", 84], ["Redis caching", 86]],
    "Cloud & DevOps": [["AWS Lambda / API Gateway", 88], ["AWS serverless architecture", 88], ["S3 / SQS / EC2", 84], ["CloudWatch", 80], ["Docker", 85], ["GitHub Actions / GitLab CI", 85]],
    "Testing & Security": [["Jest / unit testing", 88], ["Playwright automation", 78], ["JWT / OAuth2", 88], ["Authorization & RBAC", 88], ["Authentication protocols", 86]],
    "AI & Practices": [["LLM APIs", 82], ["AWS Bedrock", 78], ["Claude Code", 85], ["Agile / Scrum", 90], ["SDLC & code reviews", 90]]
  },
  more: ["Git", "GitLab", "Socket.io & WebSockets", "GraphQL", "Streamlit", "Google Maps API", "Highcharts", "Performance management", "Technical team leadership", "Client communication", "Sprint planning", "Idempotent payment flows"],
  projects: [
    { t: "Banking Solutions", cat: "FinTech", dur: "6 months · Virtual Gain", d: "Backend services for enterprise banking, focused on secure S2S third-party bank API integrations. REST APIs for reliable data exchange, with authentication, request validation, error handling and async processing. Tuned response times through refactoring and profiling.", imp: "Jest unit and integration tests, 85%+ coverage on settlements", tags: ["Node.js", "TypeScript", "Express.js", "Jest", "JWT", "OAuth2"] },
    { t: "Luminous IoT Dashboard Platform", cat: "IoT", dur: "5 months · Client project", d: "Cloud SaaS for real-time device monitoring, battery health tracking, analytics and remote device management. I led delivery as Technical Team Lead and client point of contact, with Highcharts dashboards and REST APIs for telemetry and integrations.", imp: "Led requirements, sprint planning and task allocation", tags: ["Angular", "TypeScript", "Highcharts", "Node.js", "Express.js", "AWS"] },
    { t: "Jiotronik Asset Monitoring Platform", cat: "IoT", dur: "7 months · Client project", d: "Client platform for real-time asset tracking, device monitoring, operational analytics and central asset management. I worked as Full Stack Developer and Technical Team Lead and was the single point of contact for the client.", imp: "Frontend dashboards, backend APIs, telemetry and reporting", tags: ["Angular", "TypeScript", "Node.js", "Express.js", "AWS", "Data visualization"] },
    { t: "Cattle Monitoring System", cat: "IoT", dur: "15 months · Vanix", d: "Tracks livestock location, health and activity from GPS collars and sensors. Telemetry pipeline for GPS, battery, temperature, connectivity and health data, with FastAPI and Lambda computing diagnostics and health scores. Live dashboards over Socket.io and API Gateway WebSockets, Google Maps geofencing alerts and LLM-powered insights.", imp: "Coordinated frontend, backend, AI/ML, DevOps and firmware teams", tags: ["Python", "FastAPI", "Node.js", "Angular", "Lambda", "DynamoDB", "MongoDB", "SQS", "Streamlit"] },
    { t: "Battery Monitoring IoT System", cat: "IoT", dur: "15 months · Vanix", d: "Real-time monitoring, remote device management and analytics for connected batteries. Angular dashboards chart voltage, current, temperature, State of Charge, connectivity and history. Lambda processes data, DynamoDB stores telemetry, and SQS handles bulk device operations.", imp: "WebSockets for live updates and Redis for faster dashboards", tags: ["Node.js", "TypeScript", "Angular", "Lambda", "DynamoDB", "S3", "SQS", "Redis"] },
    { t: "Device Management Software", cat: "IoT", dur: "13 months · Vanix", d: "Cloud platform for monitoring and remotely managing connected devices, built with the same serverless AWS and Angular stack as the other Vanix IoT products.", imp: "Remote device operations at fleet scale", tags: ["Angular", "Node.js", "AWS Lambda", "DynamoDB", "SQS"] },
    { t: "UrSpayce Workplace Management", cat: "SaaS", dur: "28 months · UrSpayce", d: "Enterprise workplace SaaS with 12 modules: Visitor Management, Desk and Meeting Room Booking, Mailroom and Delivery, Asset Tracking, Facility Management and Workplace Analytics. Automated check-ins and reservations, with RBAC, secure authentication and real-time data.", imp: "Responsive dashboards, microservices and AWS deployment", tags: ["Angular", "React.js", "Node.js", "Express.js", "TypeScript", "AWS"] },
    { t: "AI-Powered Analytics Tool", cat: "AI", dur: "AWS Bedrock · LLM APIs", d: "Lets non-technical users ask questions about company data in plain English and get answers from the database. Includes input checks, prompt safety rules and Redis caching to control API costs.", imp: "Bedrock and LLM APIs behind Node.js services", tags: ["AWS Bedrock", "LLM APIs", "Node.js", "TypeScript", "Redis", "Angular"] }
  ],
  edu: [["MCA | Software Engineering", "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal", "2021 · Grade 8.8/10"], ["BCA | Software Engineering", "Makhanlal Chaturvedi Rashtriya Patrakarita Vishwavidyalaya, Bhopal", "2018 · Grade 7.8/10"]],
  certs: ["Google AI Professional Certificate", "AWS Cloud Practitioner Essentials", "Claude Code: Software Engineering with Generative AI Agents", "AI for Data Analysis", "AI for Writing and Communicating", "Cybersecurity and the Internet of Things", "Modern JavaScript: ES6 Basics"]
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
  $("#projectGrid").innerHTML = D.projects.filter((p) => c === "All" || p.cat === c).map((p) => `<article class="card"><div class="cat">${p.cat} · ${p.dur}</div><h3>${p.t}</h3><p>${p.d}</p><p class="imp">${p.imp}</p>${tags(p.tags)}</article>`).join("");
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

/* ===== Contact form: delivers messages to the inbox below via FormSubmit ===== */
const INBOX = "roshan112895@gmail.com";
$("#form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target, btn = form.querySelector("button"), note = $("#note"), f = new FormData(form);
  if (f.get("_honey")) return;
  f.append("_subject", "Portfolio message from " + f.get("name"));
  f.append("_template", "table");
  f.append("_captcha", "false");
  btn.disabled = true; btn.textContent = "Sending...";
  note.textContent = "";
  try {
    const r = await fetch("https://formsubmit.co/ajax/" + INBOX, { method: "POST", headers: { Accept: "application/json" }, body: f });
    const j = await r.json();
    if (!r.ok || j.success === "false") throw new Error("send failed");
    form.reset();
    note.textContent = "Thanks! Your message was sent. I'll get back to you soon.";
  } catch (err) {
    note.textContent = "Sorry, the message could not be sent. Please email " + INBOX + " directly.";
  }
  btn.disabled = false; btn.textContent = "Send message";
});
