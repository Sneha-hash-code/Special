/* =====================================================================
   FOR ANGREZ — A CELEBRATION OF OUR STORY
   ===================================================================== */

// ---- 31 PHOTOS -------------------------------------------------------
const PHOTOS = Array.from({ length: 31 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `assets/photos/photo${n}.jpg`,
    altSrc: `assets/photos/photo${n}.jpeg`,
    caption: `Memory #${i + 1}`
  };
});

// ---- 14 VIDEOS ---------------------------------------------------------
const VIDEOS = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `assets/videos/video${n}.mp4`,
    altSrc: `assets/videos/Sep ${i + 1}.mp4`,
    caption: `Moment #${i + 1} — A memory I keep close.`
  };
});

// ---- 10 EMOTIONAL MESSAGES ---------------------------------------------
const MESSAGES = [
  "I don't know if I ever thanked life properly for bringing you into mine. Not because you arrived with some grand entrance... but because somehow, quietly, you became someone I would never want my story to be without.",
  "We were in the same school long before we were in each other's lives. Same halls. Same place. Completely different worlds. Sometimes I think about that and wonder how many times we must have passed each other without knowing that one day, you'd mean this much to me.",
  "I won't lie and say the distance never hurts. Sometimes I wish I could simply cross the miles between us. No flights. No clocks. No waiting. Just one ordinary moment where I could see you and say, 'I'm here.",
  'Something that makes me smile even from far away: your laugh and the way you see the world.',
  'What I wish for your future: every dream you work for coming true, with endless happiness.',
  'A moment I would relive if I could choose just one: those carefree walks through Kathmandu and Lalitpur.',
  'Something I don\u2019t say enough, but mean every time I think it: you mean more to me than words can hold.',
  'Why you matter to me: because having you in my life makes everything brighter.',
  'A birthday wish, just for you: peace, joy, triumphs, and the knowledge that you are cherished.',
  'The message I saved for last — wherever you go, my heart will always cheer for you.'
];

// ---- CONSTELLATION MESSAGES (12 stars) ---------------------------------
const CONSTELLATION_MESSAGES = [
  'You are the calm part of my day.',
  'Distance has a way of making the small things loud. I hear all of yours.',
  'I keep our old messages. I reread them more than I admit.',
  'You make ordinary days feel like they belong to us.',
  'I am proud of you in ways I don\u2019t say enough.',
  'Some nights I just want to tell you about my day. So here it is.',
  'You are patient with me. I notice.',
  'I still think about Kathmandu and Lalitpur, the two of us with no plan.',
  'You are worth every time-zone math I have ever done.',
  'I like who I am when I am talking to you.',
  'Thank you for staying, even from far away.',
  'One day, no more distance. Just us.'
];

// ---- QUIZ QUESTIONS -----------------------------------------------------
const QUIZ = [
  {
    q: 'Where did we finally actually meet?',
    options: ['Kathmandu', 'Same college, Class 11', 'A wedding', 'Online'],
    correct: 1
  },
  {
    q: 'Where did we go wandering together with no real plan?',
    options: ['Pokhara', 'Kathmandu and Lalitpur', 'Birgunj bazaar', 'Chitwan'],
    correct: 1
  },
  {
    q: 'What did we have in common long before we met?',
    options: ['Same college professor', 'Same school as kids, without knowing it', 'Same hometown only', 'Same birthday'],
    correct: 1
  },
  {
    q: 'What is Angrez actually doing right now?',
    options: ['Working in Nepal', 'Studying in the USA', 'Traveling full-time', 'On a long vacation'],
    correct: 1
  },
  {
    q: 'What nickname does Sneha call him?',
    options: ['Raja', 'Jaanu', 'Angrez', 'Sona'],
    correct: 2
  }
];

// ---- POEM ----------------------------------------------------------------
const POEM_LINES = [
  "We were strangers once,",
  "two people walking through the same school,",
  "sharing the same halls,",
  "without knowing we were already somewhere inside the same story.",

  "",

  "Then Class 11 came,",
  "and somehow the universe finally introduced us properly.",

  "",

  "There was no map.",
  "No perfect plan.",
  "Just us,", 
  "walking through Kathmandu,", 
  "getting lost in Lalitpur,", 
  "and somehow finding memories everywhere.",

  "",

  "We didn't know those ordinary days",
  "would become the days we'd miss later.",

  "",

  "Then life packed your dreams into suitcases",
  "and put an ocean between us.",

  "",

  "Now there are different skies,",
  "different clocks,",
  "and moments when I wish distance",
  "was something I could simply fold away.",

  "",

  "But miles have never been able",
  "to erase a memory.",

  "",

  "And they haven't erased you.",

  "",

  "Because somehow,", 
  "in the middle of an ordinary day,", 
  "something still happens",
  "and you're the person I want to tell.",

  "",

  "Maybe that's what you became.",
  "Not just a memory.",
  "Not just a chapter.",
  "But a home for me",
  "that somehow learned how to live inside my heart.",

  "",

  "So today,", 
  "on your birthday,", 
  "I don't wish that life becomes perfect.",

  "",

  "I only wish it becomes kind to you.",

  "",

  "May your dreams find you.",
  "May your heart find peace.",
  "May you always have reasons to laugh.",
  "And may you never forget",
  "how loved you are.",

  "",

  "And maybe one day,", 
  "we'll walk those streets again.",

  "",

  "No ocean.",
  "No waiting.",
  "No time-zone mathematics.",

  "",

  "Just you.",
  "Just me.",
  "and another ordinary day",
  "that we'll probably remember forever.",

  "",

  "Happy Birthday, SONA.",

  "",

  "And if this is only chapter thirteen...",
  "I hope the rest of the story",
  "takes a very, very long time to finish."

];

/* =====================================================================
   THREE.JS UNIVERSE — persistent starfield with parallax + shooting stars
   ===================================================================== */
const universe = (function () {
  const canvas = document.getElementById('universe');
  if (!canvas || typeof THREE === 'undefined') return { warp: () => {}, resize: () => {} };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 700;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.z = 60;

  // starfield
  const starCount = isMobile ? 1400 : 3200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 900;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 900;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 900;
    sizes[i] = Math.random() * 1.6 + 0.4;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const starMaterial = new THREE.PointsMaterial({
    color: 0xf0d9a8,
    size: 1.1,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.85
  });
  const stars = new THREE.Points(geometry, starMaterial);
  scene.add(stars);

  // occasional shooting star
  const shootingGeo = new THREE.BufferGeometry();
  shootingGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const shootingMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
  const shootingLine = new THREE.Line(shootingGeo, shootingMat);
  scene.add(shootingLine);
  let shootTimer = 0, shootActive = false, shootProgress = 0;
  const shootStart = new THREE.Vector3(), shootEnd = new THREE.Vector3();

  function fireShootingStar() {
    const x = (Math.random() - 0.5) * 300;
    const y = 100 + Math.random() * 80;
    shootStart.set(x, y, -100 + Math.random() * -150);
    shootEnd.copy(shootStart).add(new THREE.Vector3(-140, -90, 0));
    shootProgress = 0;
    shootActive = true;
  }

  let targetRotX = 0, targetRotY = 0;
  window.addEventListener('pointermove', (e) => {
    targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.25;
    targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.15;
  }, { passive: true });

  let warpBoost = 0;
  function warp() { warpBoost = 30; }

  let scrollFactor = 0;
  window.addEventListener('scroll', () => {
    scrollFactor = window.scrollY * 0.01;
  }, { passive: true });

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();

    if (!reduced) {
      stars.rotation.y += 0.0006 + warpBoost * 0.0004;
      stars.rotation.x += 0.0001;
      camera.position.x += (targetRotY * 20 - camera.position.x) * 0.02;
      camera.position.y += (-targetRotX * 20 - camera.position.y - scrollFactor * 0.3) * 0.02;
      camera.lookAt(scene.position);
    }
    if (warpBoost > 0) {
      warpBoost -= dt * 40;
      camera.fov = 60 + warpBoost * 0.3;
      camera.updateProjectionMatrix();
    }

    shootTimer -= dt;
    if (shootTimer <= 0 && !reduced) {
      shootTimer = 4 + Math.random() * 6;
      fireShootingStar();
    }
    if (shootActive) {
      shootProgress += dt * 1.4;
      if (shootProgress >= 1) {
        shootActive = false;
        shootingMat.opacity = 0;
      } else {
        const p = shootStart.clone().lerp(shootEnd, shootProgress);
        const p2 = shootStart.clone().lerp(shootEnd, Math.max(0, shootProgress - 0.08));
        const arr = shootingGeo.attributes.position.array;
        arr[0] = p2.x; arr[1] = p2.y; arr[2] = p2.z;
        arr[3] = p.x; arr[4] = p.y; arr[5] = p.z;
        shootingGeo.attributes.position.needsUpdate = true;
        shootingMat.opacity = Math.sin(shootProgress * Math.PI);
      }
    }

    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  return { warp, resize: onResize };
})();

/* =====================================================================
   OPENING SEQUENCE
   ===================================================================== */
(function opening() {
  const lines = document.querySelectorAll('#opening .line');
  const enterBtn = document.getElementById('enterBtn');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gap = reduced ? 60 : 1400;

  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('is-shown'), reduced ? 0 : i * gap + 300);
  });
  setTimeout(() => enterBtn.classList.add('is-shown'), reduced ? 100 : lines.length * gap + 400);

  enterBtn.addEventListener('click', () => {
    const flash = document.createElement('div');
    flash.className = 'universe-flash flash-active';
    document.body.appendChild(flash);
    const openingEl = document.getElementById('opening');
    openingEl.style.transition = 'opacity 0.6s ease';
    openingEl.style.opacity = '0';

    // Attempt background audio play
    const bgAudio = document.getElementById('bgAudio');
    if (bgAudio) {
      bgAudio.play().catch(() => {});
    }

    setTimeout(() => {
      openingEl.hidden = true;
      const main = document.getElementById('main');
      main.hidden = false;
      if (universe && universe.warp) universe.warp();
      if (universe && universe.resize) universe.resize();
      window.dispatchEvent(new Event('resize'));
      flash.remove();
      window.scrollTo(0, 0);
    }, 500);
  });
})();

/* =====================================================================
   CHAPTER SCROLL REVEALS
   ===================================================================== */
(function scrollReveals() {
  const els = document.querySelectorAll('.reveal-chapter');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
})();

/* =====================================================================
   PHOTO GALLERY
   ===================================================================== */
(function gallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();

  PHOTOS.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Open photo ${i + 1}`);
    item.dataset.index = i;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = photo.caption;
    img.src = photo.src;

    let fallbackTried = false;
    img.onerror = () => {
      if (!fallbackTried && photo.altSrc) {
        fallbackTried = true;
        img.src = photo.altSrc;
        return;
      }
      img.remove();
      const ph = document.createElement('div');
      ph.className = 'g-placeholder';
      ph.textContent = `Photo ${i + 1}`;
      item.prepend(ph);
    };
    item.appendChild(img);

    const cap = document.createElement('div');
    cap.className = 'g-caption';
    cap.textContent = photo.caption;
    item.appendChild(cap);

    const open = () => openViewer(i);
    item.addEventListener('click', open);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });

    frag.appendChild(item);
  });
  grid.appendChild(frag);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.gallery-item').forEach((el) => io.observe(el));

  // Viewer
  const viewer = document.getElementById('photoViewer');
  const viewerImg = document.getElementById('viewerImg');
  const viewerCaption = document.getElementById('viewerCaption');
  const viewerPlaceholder = document.getElementById('viewerPlaceholder');
  let currentIndex = 0;
  let lastFocused = null;

  function openViewer(i) {
    currentIndex = i;
    lastFocused = document.activeElement;
    renderViewer();
    viewer.hidden = false;
    document.getElementById('viewerClose').focus();
    document.addEventListener('keydown', onKey);
  }

  function renderViewer() {
    const photo = PHOTOS[currentIndex];
    if (viewerPlaceholder) viewerPlaceholder.hidden = true;
    viewerImg.style.display = 'block';
    viewerImg.alt = photo.caption;
    viewerCaption.textContent = photo.caption;

    let fallbackTried = false;
    viewerImg.onerror = () => {
      if (!fallbackTried && photo.altSrc) {
        fallbackTried = true;
        viewerImg.src = photo.altSrc;
        return;
      }
      viewerImg.style.display = 'none';
      if (viewerPlaceholder) {
        viewerPlaceholder.hidden = false;
        viewerPlaceholder.textContent = `Photo ${currentIndex + 1}`;
      }
    };
    viewerImg.onload = () => {
      viewerImg.style.display = 'block';
      if (viewerPlaceholder) viewerPlaceholder.hidden = true;
    };
    viewerImg.src = photo.src;
  }

  function closeViewer() {
    viewer.hidden = true;
    document.removeEventListener('keydown', onKey);
    if (lastFocused) lastFocused.focus();
  }

  function next() {
    currentIndex = (currentIndex + 1) % PHOTOS.length;
    renderViewer();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
    renderViewer();
  }

  function onKey(e) {
    if (e.key === 'Escape') closeViewer();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
  }

  document.getElementById('viewerClose').addEventListener('click', closeViewer);
  document.getElementById('viewerNext').addEventListener('click', (e) => { e.stopPropagation(); next(); });
  document.getElementById('viewerPrev').addEventListener('click', (e) => { e.stopPropagation(); prev(); });

  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) closeViewer();
  });

  // touch swipe
  let touchX = null;
  viewer.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchX = null;
  }, { passive: true });
})();

/* =====================================================================
   VIDEO GRID
   ===================================================================== */
(function videos() {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();
  const allVideos = [];

  VIDEOS.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'video-card';

    const frame = document.createElement('div');
    frame.className = 'video-frame';

    const video = document.createElement('video');
    video.muted = false;
    video.controls = false;
    video.preload = 'metadata';
    video.playsInline = true;
    video.src = v.src;
    allVideos.push(video);

    let fallbackTried = false;
    let missing = false;
    video.onerror = () => {
      if (!fallbackTried && v.altSrc) {
        fallbackTried = true;
        video.src = v.altSrc;
        return;
      }
      if (missing) return;
      missing = true;
      frame.innerHTML = '';
      const m = document.createElement('div');
      m.className = 'video-missing';
      m.textContent = `Video ${i + 1}`;
      frame.appendChild(m);
    };

    const playBtn = document.createElement('button');
    playBtn.className = 'video-play';
    playBtn.setAttribute('aria-label', `Play video ${i + 1}`);
    playBtn.innerHTML = '&#9658;';

    playBtn.addEventListener('click', () => {
      if (missing) return;
      allVideos.forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
      video.controls = true;
      video.play().catch(() => {});
      playBtn.style.display = 'none';
    });

    video.addEventListener('play', () => {
      playBtn.style.display = 'none';
      allVideos.forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
    });
    video.addEventListener('pause', () => {
      if (!video.seeking) {
        playBtn.style.display = 'flex';
      }
    });

    frame.appendChild(video);
    frame.appendChild(playBtn);
    card.appendChild(frame);

    const cap = document.createElement('p');
    cap.className = 'video-caption';
    cap.textContent = v.caption;
    card.appendChild(cap);

    frag.appendChild(card);
  });
  grid.appendChild(frag);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.video-card').forEach((el) => io.observe(el));
})();

/* =====================================================================
   ENVELOPES / MESSAGES
   ===================================================================== */
(function envelopes() {
  const grid = document.getElementById('envelopeGrid');
  if (!grid) return;
  const frag = document.createDocumentFragment();

  MESSAGES.forEach((msg, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'envelope-card';
    card.setAttribute('aria-expanded', 'false');

    const icon = document.createElement('div');
    icon.className = 'envelope-icon';
    icon.innerHTML = '&#9993;';
    const num = document.createElement('div');
    num.className = 'envelope-num';
    num.textContent = `LETTER ${i + 1} OF ${MESSAGES.length}`;
    const text = document.createElement('p');
    text.className = 'envelope-msg';
    text.textContent = msg;

    card.append(icon, num, text);
    card.addEventListener('click', () => {
      if (card.classList.contains('is-open')) return;
      card.classList.add('is-open');
      card.setAttribute('aria-expanded', 'true');
    });
    frag.appendChild(card);
  });
  grid.appendChild(frag);
})();

/* =====================================================================
   CONSTELLATION
   ===================================================================== */
(function constellation() {
  const canvas = document.getElementById('constellation');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const msgEl = document.getElementById('constellationMsg');
  const wrap = document.getElementById('constellationWrap');

  function resize() {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (!w || !h) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // heart-shape point layout, normalized -1..1
  function heartPoint(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x: x / 17, y: y / 17 };
  }

  let stars = [];
  function layout() {
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    const cx = w / 2, cy = h / 2 + h * 0.05;
    const scale = Math.min(w, h) * 0.34;
    const count = CONSTELLATION_MESSAGES.length;

    if (stars.length === 0) {
      stars = CONSTELLATION_MESSAGES.map((msg, i) => {
        const t = (i / count) * Math.PI * 2;
        const hp = heartPoint(t);
        const jitterX = (Math.random() - 0.5) * 16;
        const jitterY = (Math.random() - 0.5) * 16;
        return {
          t,
          jitterX,
          jitterY,
          x: cx + hp.x * scale + jitterX,
          y: cy + hp.y * scale + jitterY,
          r: 4 + Math.random() * 2,
          msg,
          found: false,
          twinkle: Math.random() * Math.PI * 2
        };
      });
    } else {
      stars.forEach((s) => {
        const hp = heartPoint(s.t);
        s.x = cx + hp.x * scale + s.jitterX;
        s.y = cy + hp.y * scale + s.jitterY;
      });
    }
  }

  let foundCount = 0;

  function refresh() {
    resize();
    layout();
  }

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => {
      if (wrap.clientWidth > 0 && wrap.clientHeight > 0) {
        refresh();
      }
    });
    ro.observe(wrap);
  }
  window.addEventListener('resize', refresh);

  function draw() {
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (w && h) {
      ctx.clearRect(0, 0, w, h);

      // connecting lines between found stars
      const found = stars.filter((s) => s.found);
      if (found.length > 1) {
        ctx.strokeStyle = 'rgba(227,189,124,0.4)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        found.forEach((s, i) => {
          if (i === 0) ctx.moveTo(s.x, s.y);
          else ctx.lineTo(s.x, s.y);
        });
        ctx.stroke();
      }

      stars.forEach((s) => {
        s.twinkle += 0.03;
        const tw = 0.6 + Math.sin(s.twinkle) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.found ? s.r + 2 : s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.found ? 'rgba(227,189,124,0.95)' : `rgba(244,239,228,${0.35 * tw})`;
        ctx.shadowColor = s.found ? 'rgba(227,189,124,0.9)' : 'transparent';
        ctx.shadowBlur = s.found ? 14 : 0;
        ctx.fill();
      });
    }
    requestAnimationFrame(draw);
  }
  draw();

  function hitTest(x, y) {
    const isMobile = window.innerWidth < 700;
    const hitRadius = isMobile ? 26 : 18;
    return stars.find((s) => Math.hypot(s.x - x, s.y - y) < hitRadius);
  }

  function reveal(star) {
    if (star.found) return;
    star.found = true;
    foundCount++;
    msgEl.textContent = star.msg;
    if (foundCount === stars.length) {
      setTimeout(() => {
        msgEl.textContent = 'You found all the little pieces of my universe. \u2764';
      }, 2200);
    }
  }

  function handleInteraction(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const star = hitTest(x, y);
    if (star) reveal(star);
  }

  canvas.addEventListener('click', (e) => {
    handleInteraction(e.clientX, e.clientY);
  });
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
})();

/* =====================================================================
   QUIZ
   ===================================================================== */
(function quiz() {
  const body = document.getElementById('quizBody');
  const bar = document.getElementById('quizProgressBar');
  if (!body || !bar) return;
  let current = 0;
  let score = 0;

  function renderQuestion() {
    bar.style.width = `${(current / QUIZ.length) * 100}%`;
    const item = QUIZ[current];
    body.innerHTML = '';

    const wrap = document.createElement('div');
    wrap.className = 'quiz-question';

    const qText = document.createElement('p');
    qText.className = 'quiz-q-text';
    qText.textContent = `${current + 1}. ${item.q}`;
    wrap.appendChild(qText);

    const opts = document.createElement('div');
    opts.className = 'quiz-options';

    const feedback = document.createElement('p');
    feedback.className = 'quiz-feedback';

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'quiz-next';
    nextBtn.textContent = current === QUIZ.length - 1 ? 'See result' : 'Next question';

    item.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        [...opts.children].forEach((b) => (b.disabled = true));
        if (i === item.correct) {
          btn.classList.add('correct');
          feedback.textContent = 'That\u2019s right!';
          score++;
        } else {
          btn.classList.add('wrong');
          if (opts.children[item.correct]) {
            opts.children[item.correct].classList.add('correct');
          }
          feedback.textContent = 'Not quite \u2014 but close!';
        }
        nextBtn.classList.add('is-active');
      });
      opts.appendChild(btn);
    });

    wrap.append(opts, feedback, nextBtn);
    body.appendChild(wrap);

    nextBtn.addEventListener('click', () => {
      current++;
      if (current < QUIZ.length) renderQuestion();
      else renderResult();
    });
  }

  function renderResult() {
    bar.style.width = '100%';
    body.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'quiz-result';
    const scoreEl = document.createElement('p');
    scoreEl.className = 'quiz-result-score';
    scoreEl.textContent = `${score} / ${QUIZ.length}`;
    const msg = document.createElement('p');
    msg.className = 'quiz-result-msg';
    msg.textContent = 'No matter what your score is, you\u2019re still the person this entire universe was created for. \u2764\ufe0f';
    wrap.append(scoreEl, msg);
    body.appendChild(wrap);
  }

  renderQuestion();
})();

/* =====================================================================
   CAKE + CANDLE
   ===================================================================== */
(function cake() {
  const flame = document.getElementById('flameEl');
  const blowBtn = document.getElementById('blowBtn');
  const micHint = document.getElementById('micHint');
  const cakePrompt = document.getElementById('cakePrompt');
  if (!flame || !blowBtn) return;
  let blownOut = false;
  let micStream = null;

  function blowOut() {
    if (blownOut) return;
    blownOut = true;
    flame.classList.add('is-out');
    cakePrompt.textContent = 'There was one more thing I wanted you to see\u2026';
    blowBtn.textContent = 'Wish made \u2764';
    blowBtn.disabled = true;
    if (micHint) micHint.style.display = 'none';

    if (micStream) {
      micStream.getTracks().forEach((t) => t.stop());
    }

    document.body.classList.add('post-wish');
    setTimeout(revealAfterWish, 1200);
  }

  blowBtn.addEventListener('click', blowOut);

  // optional mic-based blow detection
  async function tryMic() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || blownOut) return;
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const source = ctx.createMediaStreamSource(micStream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);

      function check() {
        if (blownOut) {
          if (micStream) micStream.getTracks().forEach((t) => t.stop());
          return;
        }
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        if (avg > 55) {
          blowOut();
        } else {
          requestAnimationFrame(check);
        }
      }
      check();
    } catch (err) {
      if (micHint) micHint.textContent = 'Microphone unavailable \u2014 just tap the button above.';
    }
  }

  const cakeSection = document.getElementById('ch-07');
  if (cakeSection) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          tryMic();
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });
    io.observe(cakeSection);
  }
})();

/* =====================================================================
   REVEAL LETTER + POEM + FINAL after the wish
   ===================================================================== */
function revealAfterWish() {
  const ch08 = document.getElementById('ch-08');
  if (!ch08) return;
  ch08.hidden = false;
  ch08.classList.add('is-visible');
  ch08.scrollIntoView({ behavior: 'smooth' });

  const envelope = document.getElementById('envelopeBig');
  const paper = document.getElementById('letterPaper');
  if (envelope && paper) {
    envelope.addEventListener('click', () => {
      envelope.classList.add('is-open');
      setTimeout(() => {
        paper.hidden = false;
        preparePoemAndFinal();
      }, 700);
    }, { once: true });
  }
}

let poemRendered = false;
function preparePoemAndFinal() {
  const poemSection = document.getElementById('ch-09');
  const finalSection = document.getElementById('ch-final');
  if (poemSection) {
    poemSection.hidden = false;
    poemSection.classList.add('is-visible');
  }
  if (finalSection) {
    finalSection.hidden = false;
    finalSection.classList.add('is-visible');
  }

  if (poemSection && !poemRendered) {
    poemRendered = true;
    const poemBody = document.getElementById('poemBody');
    if (poemBody) {
      poemBody.innerHTML = '';
      POEM_LINES.forEach((line, i) => {
        const p = document.createElement('p');
        p.className = 'poem-line' + (line === '' ? ' blank' : '');
        p.textContent = line;
        poemBody.appendChild(p);
      });
    }

    const poemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lines = poemBody.querySelectorAll('.poem-line');
          lines.forEach((p, idx) => {
            setTimeout(() => p.classList.add('is-visible'), idx * 300);
          });
          poemObserver.disconnect();
        }
      });
    }, { threshold: 0.15 });
    poemObserver.observe(poemSection);
  }

  if (finalSection) {
    const finalObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startHeartFinale();
          finalObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    finalObserver.observe(finalSection);
  }
}

/* =====================================================================
   FINAL HEART FORMATION (2D canvas, lightweight)
   ===================================================================== */
let finaleStarted = false;
function startHeartFinale() {
  if (finaleStarted) return;
  finaleStarted = true;

  const canvas = document.getElementById('heartCanvas');
  const section = document.getElementById('ch-final');
  if (!canvas || !section) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = section.clientWidth * dpr;
    canvas.height = section.clientHeight * dpr;
    canvas.style.width = section.clientWidth + 'px';
    canvas.style.height = section.clientHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const count = 220;
  const points = [];
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    points.push({
      tx: x, ty: y,
      x: Math.random() * section.clientWidth,
      y: Math.random() * section.clientHeight,
      twinkle: Math.random() * Math.PI * 2
    });
  }

  let progress = 0;
  function animate() {
    const w = section.clientWidth, h = section.clientHeight;
    if (w && h) {
      const cx = w / 2, cy = h / 2;
      const scale = Math.min(w, h) * 0.022;
      progress = Math.min(1, progress + 0.012);

      ctx.clearRect(0, 0, w, h);
      points.forEach((p) => {
        const targetX = cx + p.tx * scale;
        const targetY = cy + p.ty * scale;
        p.x += (targetX - p.x) * progress * 0.06;
        p.y += (targetY - p.y) * progress * 0.06;
        p.twinkle += 0.02;
        const tw = 0.6 + Math.sin(p.twinkle) * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(227,189,124,${tw})`;
        ctx.shadowColor = 'rgba(227,189,124,0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
      });
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* =====================================================================
   REPLAY
   ===================================================================== */
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'replayBtn') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }
});

/* =====================================================================
   AUDIO CONTROL
   ===================================================================== */
(function audio() {
  const btn = document.getElementById('audioToggle');
  const slider = document.getElementById('volumeSlider');
  const el = document.getElementById('bgAudio');
  if (!btn || !el) return;

  el.volume = 0.5;

  function updateState(isPlaying) {
    if (isPlaying) {
      btn.classList.add('is-playing');
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', 'Pause background music');
    } else {
      btn.classList.remove('is-playing');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', 'Play background music');
    }
  }

  el.addEventListener('play', () => updateState(true));
  el.addEventListener('pause', () => updateState(false));
  el.addEventListener('ended', () => updateState(false));

  btn.addEventListener('click', () => {
    if (el.paused) {
      el.play().then(() => {
        updateState(true);
      }).catch(() => {
        btn.setAttribute('aria-label', 'Music unavailable — check audio file');
      });
    } else {
      el.pause();
      updateState(false);
    }
  });

  if (slider) {
    slider.addEventListener('input', () => {
      el.volume = parseFloat(slider.value);
    });
  }
})();
