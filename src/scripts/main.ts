const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const narrow = window.matchMedia("(max-width: 767px)").matches;
const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
const nav = document.querySelector<HTMLElement>("#nav");

function closeNav() {
  document.body.classList.remove("nav-open");
  toggle?.setAttribute("aria-expanded", "false");
}

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  document.body.classList.toggle("nav-open", !open);
  if (!open) {
    nav?.querySelector<HTMLElement>("a")?.focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
  if (event.key !== "Tab" || !document.body.classList.contains("nav-open") || !nav) return;
  const items = [...nav.querySelectorAll<HTMLElement>("a, button")];
  const first = items[0];
  const last = items[items.length - 1];
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if (!reduce && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const tall = entry.boundingClientRect.height > window.innerHeight * 0.85;
        if (entry.intersectionRatio >= 0.5 || (tall && entry.isIntersecting)) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: [0.15, 0.5] },
  );
  reveals.forEach((el) => io.observe(el));
  document.addEventListener("focusin", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    target.closest(".reveal")?.classList.add("is-in");
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute("href")?.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  event.preventDefault();
  const header = document.querySelector(".site-header");
  const offset = (header?.getBoundingClientRect().height ?? 80) + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  if (reduce) {
    window.scrollTo(0, top);
  } else {
    const start = window.scrollY;
    const dist = top - start;
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / 800);
      const eased = t * (2 - t);
      window.scrollTo(0, start + dist * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  history.pushState(null, "", `#${id}`);
});

const counters = document.querySelectorAll<HTMLElement>("[data-count]");
if (!reduce && counters.length) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.count);
        if (!Number.isFinite(target)) return;
        cio.unobserve(el);
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / 900);
          const eased = 1 - (1 - t) ** 3;
          el.textContent = String(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => cio.observe(el));
}

const heroMedia = document.querySelector<HTMLElement>(".hero .media");
if (heroMedia && !reduce && window.matchMedia("(min-width: 900px)").matches) {
  const onScroll = () => {
    const y = Math.min(window.scrollY, 700) * 0.15;
    heroMedia.style.transform = `translate3d(0, ${y}px, 0)`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function armVideos() {
  if (reduce || narrow || saveData) return;
  const videos = document.querySelectorAll<HTMLVideoElement>("video[data-src-mp4]");
  if (!videos.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        if (!video.getAttribute("src")) {
          const webm = video.dataset.srcWebm;
          const mp4 = video.dataset.srcMp4;
          if (webm && video.canPlayType("video/webm")) video.src = webm;
          else if (mp4) video.src = mp4;
        }
        video.play().then(() => video.classList.add("is-on")).catch(() => {});
      });
    },
    { rootMargin: "160px 0px", threshold: 0.25 },
  );
  videos.forEach((video) => io.observe(video));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) videos.forEach((video) => video.pause());
  });
}

window.addEventListener("load", () => {
  const run = () => armVideos();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 1500 });
  } else {
    window.setTimeout(run, 400);
  }
});

document.querySelectorAll<HTMLButtonElement>("[data-yt]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.yt;
    const title = button.dataset.title || "YouTube";
    if (!id) return;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    iframe.title = title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
  });
});

const form = document.querySelector<HTMLFormElement>("#formulaire");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const copy = {
      name: form.dataset.errName || "",
      email: form.dataset.errEmail || "",
      phone: form.dataset.errPhone || "",
      required: form.dataset.errRequired || "",
      dates: form.dataset.errDates || "",
      consent: form.dataset.errConsent || "",
      summary: form.dataset.errSummary || "",
      status: form.dataset.status || "",
    };
    form.querySelectorAll(".field-error").forEach((node) => node.remove());
    form.querySelectorAll(".has-error").forEach((node) => node.classList.remove("has-error"));
    form.querySelector("[role='alert']")?.remove();

    const errors: { id: string; message: string }[] = [];
    const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | null)?.value.trim() ?? "";
    const mark = (name: string, message: string) => {
      const field = form.querySelector<HTMLElement>(`[data-field="${name}"]`);
      const input = form.elements.namedItem(name) as HTMLElement | null;
      field?.classList.add("has-error");
      if (input) {
        input.setAttribute("aria-invalid", "true");
        const pid = `${name}-error`;
        const p = document.createElement("p");
        p.className = "field-error";
        p.id = pid;
        p.textContent = message;
        field?.append(p);
        const described = input.getAttribute("aria-describedby");
        input.setAttribute("aria-describedby", described ? `${described} ${pid}` : pid);
      }
      errors.push({ id: name, message });
    };

    if (value("name").length < 2) mark("name", copy.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) mark("email", copy.email);
    if (value("phone").replace(/\D/g, "").length < 7) mark("phone", copy.phone);
    ["language", "species", "plan", "weapon", "hunters"].forEach((name) => {
      if (!value(name)) mark(name, copy.required);
    });
    const start = value("start");
    const end = value("end");
    if (start && end && end < start) mark("end", copy.dates);
    const consent = form.elements.namedItem("consent") as HTMLInputElement | null;
    if (!consent?.checked) mark("consent", copy.consent);

    if (errors.length) {
      const summary = document.createElement("div");
      summary.className = "form-summary";
      summary.setAttribute("role", "alert");
      const title = document.createElement("p");
      title.textContent = copy.summary;
      const list = document.createElement("ul");
      errors.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#field-${item.id}`;
        a.textContent = item.message;
        li.append(a);
        list.append(li);
      });
      summary.append(title, list);
      form.prepend(summary);
      summary.focus?.();
      summary.setAttribute("tabindex", "-1");
      summary.focus();
      return;
    }

    // TODO: brancher le destinataire confirme par Alexandre (GHL ou courriel). Ne pas inventer d'adresse.
    const ENDPOINT: string | null = null;
    const status = document.querySelector<HTMLElement>("#form-status");
    if (status) {
      status.hidden = false;
      status.textContent = ENDPOINT ? "" : copy.status;
    }
    if (ENDPOINT) {
      // Le jour ou l'endpoint existe, envoyer FormData ici.
    }
  });
}
