// ══════════════════════════════════════════════════════════════
// GERÇEKÇI KAS ANATOMİSİ + HAREKETLİ ANİMASYON SVGLERİ
// Fotoğraftaki gibi — kas detayı + hareket fazları
// ══════════════════════════════════════════════════════════════

const MUSCLE_SVG = {

// ─────────────────────────────────────────────
// BENCH PRESS — Göğüs kas anatomisi + animasyon
// ─────────────────────────────────────────────
"Bench Press": {
  anatomySVG: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="skin" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/>
      <stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <radialGradient id="pec_r" cx="40%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#FF6B6B"/>
      <stop offset="60%" stop-color="#CC2200"/>
      <stop offset="100%" stop-color="#8B0000"/>
    </radialGradient>
    <radialGradient id="pec_l" cx="60%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#FF6B6B"/>
      <stop offset="60%" stop-color="#CC2200"/>
      <stop offset="100%" stop-color="#8B0000"/>
    </radialGradient>
    <radialGradient id="delt" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FF9944"/>
      <stop offset="100%" stop-color="#CC5500"/>
    </radialGradient>
    <radialGradient id="tri" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFDD44"/>
      <stop offset="100%" stop-color="#CC8800"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>
      .pec-pulse { animation: pecpulse 1.8s ease-in-out infinite alternate; }
      .delt-pulse { animation: deltpulse 1.8s ease-in-out infinite alternate; }
      .tri-pulse { animation: tripulse 1.8s ease-in-out infinite alternate; }
      @keyframes pecpulse { 0%{opacity:.75;filter:brightness(.9)} 100%{opacity:1;filter:brightness(1.15)} }
      @keyframes deltpulse { 0%{opacity:.6} 100%{opacity:.9} }
      @keyframes tripulse { 0%{opacity:.5} 100%{opacity:.8} }
    </style>
  </defs>
  <!-- Gövde zemini -->
  <ellipse cx="110" cy="155" rx="62" ry="88" fill="#B8860B" opacity=".15"/>

  <!-- Karın kasları (arka plan) -->
  <rect x="90" y="168" width="12" height="10" rx="3" fill="#8B6914" opacity=".4"/>
  <rect x="105" y="168" width="12" height="10" rx="3" fill="#8B6914" opacity=".4"/>
  <rect x="90" y="182" width="12" height="10" rx="3" fill="#8B6914" opacity=".4"/>
  <rect x="105" y="182" width="12" height="10" rx="3" fill="#8B6914" opacity=".4"/>
  <rect x="90" y="196" width="12" height="10" rx="3" fill="#8B6914" opacity=".35"/>
  <rect x="105" y="196" width="12" height="10" rx="3" fill="#8B6914" opacity=".35"/>

  <!-- PECTORALIS MAJOR SOL (izleyiciye göre sağ) — ANA KAS -->
  <path class="pec-pulse" d="
    M 110 108
    Q 88 105 72 115
    Q 58 128 55 148
    Q 53 162 60 172
    Q 70 178 82 172
    Q 96 160 104 148
    Q 112 135 110 108 Z
  " fill="url(#pec_r)" stroke="#8B0000" stroke-width="1.2" filter="url(#glow)"/>

  <!-- PECTORALIS MAJOR SAĞ — ANA KAS -->
  <path class="pec-pulse" d="
    M 110 108
    Q 132 105 148 115
    Q 162 128 165 148
    Q 167 162 160 172
    Q 150 178 138 172
    Q 124 160 116 148
    Q 108 135 110 108 Z
  " fill="url(#pec_l)" stroke="#8B0000" stroke-width="1.2" filter="url(#glow)"/>

  <!-- Göğüs orta çizgisi -->
  <line x1="110" y1="108" x2="110" y2="172" stroke="#8B0000" stroke-width="1.5" opacity=".6"/>

  <!-- ÖN DELTOID SOL — YARDIMCI -->
  <path class="delt-pulse" d="
    M 72 115 Q 56 108 48 95 Q 44 82 52 72 Q 62 66 72 75 Q 74 88 72 100 Z
  " fill="url(#delt)" stroke="#CC5500" stroke-width="1" opacity=".85"/>

  <!-- ÖN DELTOID SAĞ — YARDIMCI -->
  <path class="delt-pulse" d="
    M 148 115 Q 164 108 172 95 Q 176 82 168 72 Q 158 66 148 75 Q 146 88 148 100 Z
  " fill="url(#delt)" stroke="#CC5500" stroke-width="1" opacity=".85"/>

  <!-- TRİCEPS SOL — YARDIMCI -->
  <path class="tri-pulse" d="
    M 52 75 Q 38 88 36 108 Q 34 124 42 135 Q 52 140 62 132 Q 66 118 64 100 Q 62 85 58 75 Z
  " fill="url(#tri)" stroke="#CC8800" stroke-width="1" opacity=".75"/>

  <!-- TRİCEPS SAĞ — YARDIMCI -->
  <path class="tri-pulse" d="
    M 168 75 Q 182 88 184 108 Q 186 124 178 135 Q 168 140 158 132 Q 154 118 156 100 Q 158 85 162 75 Z
  " fill="url(#tri)" stroke="#CC8800" stroke-width="1" opacity=".75"/>

  <!-- Boyun -->
  <rect x="96" y="72" width="28" height="24" rx="10" fill="url(#skin)"/>
  <!-- Klavikula çizgileri -->
  <path d="M 82 105 Q 110 98 138 105" stroke="#6B3A2A" stroke-width="1.5" fill="none" opacity=".5"/>
  <!-- Göğüs orta çıkıntı -->
  <ellipse cx="110" cy="140" rx="4" ry="22" fill="#6B3A2A" opacity=".2"/>

  <!-- Baş -->
  <circle cx="110" cy="54" r="22" fill="url(#skin)"/>
  <ellipse cx="104" cy="50" rx="3" ry="2.5" fill="#5C3317" opacity=".6"/>
  <ellipse cx="116" cy="50" rx="3" ry="2.5" fill="#5C3317" opacity=".6"/>
  <path d="M 104 62 Q 110 67 116 62" stroke="#5C3317" stroke-width="1.5" fill="none"/>

  <!-- LEJANT -->
  <rect x="8" y="248" width="14" height="10" rx="2" fill="#CC2200"/>
  <text x="26" y="257" font-size="9" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">Pectoralis Major (Ana)</text>
  <rect x="8" y="263" width="14" height="10" rx="2" fill="#CC5500"/>
  <text x="26" y="272" font-size="9" fill="#E2E8F0" font-family="sans-serif">Ön Deltoid (Yardımcı)</text>
  <rect x="8" y="278" width="14" height="10" rx="2" fill="#CC8800"/>
  <text x="26" y="287" font-size="9" fill="#E2E8F0" font-family="sans-serif">Triceps (Yardımcı)</text>
  </svg>`,

  motionSVG: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="ms1" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#C68642"/>
      <stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes benchpress {
        0%,100% { transform: translateY(0px); }
        45%,55% { transform: translateY(52px); }
      }
      @keyframes benchleg { 0%,100%{} }
      #bp-moving { animation: benchpress 3s cubic-bezier(.4,0,.6,1) infinite; }
      .phase-dot { animation: phaseblink 3s infinite; }
      @keyframes phaseblink { 0%,100%{opacity:1} 45%,55%{opacity:.3} }
    </style>
  </defs>

  <!-- BANK -->
  <rect x="40" y="148" width="240" height="20" rx="7" fill="#5D4037" stroke="#3E2723" stroke-width="1.5"/>
  <rect x="55" y="168" width="18" height="35" rx="4" fill="#4E342E"/>
  <rect x="247" y="168" width="18" height="35" rx="4" fill="#4E342E"/>
  <!-- Yastık çizgileri -->
  <line x1="40" y1="155" x2="280" y2="155" stroke="#6D4C41" stroke-width="1" opacity=".5"/>

  <!-- VÜCUT (sabit - bank üstünde yatan) -->
  <!-- Bacaklar -->
  <line x1="80" y1="148" x2="58" y2="185" stroke="#8D5524" stroke-width="14" stroke-linecap="round"/>
  <line x1="80" y1="148" x2="100" y2="185" stroke="#8D5524" stroke-width="14" stroke-linecap="round"/>
  <line x1="58" y1="185" x2="52" y2="205" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
  <line x1="100" y1="185" x2="105" y2="205" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
  <!-- Ayaklar -->
  <ellipse cx="50" cy="207" rx="10" ry="5" fill="#5C3317"/>
  <ellipse cx="107" cy="207" rx="10" ry="5" fill="#5C3317"/>
  <!-- Gövde -->
  <rect x="80" y="118" width="170" height="30" rx="14" fill="#C68642"/>
  <!-- Göğüs hacmi -->
  <ellipse cx="165" cy="133" rx="72" ry="15" fill="#B87333" opacity=".5"/>
  <!-- Baş -->
  <circle cx="258" cy="128" r="18" fill="url(#ms1)"/>
  <!-- Göz -->
  <circle cx="264" cy="124" r="2.5" fill="#3E2723"/>

  <!-- HAREKETLİ GRUP (bar + kollar) -->
  <g id="bp-moving">
    <!-- Sol kol -->
    <line x1="248" y1="125" x2="210" y2="88" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <line x1="135" y1="122" x2="172" y2="88" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <!-- BAR -->
    <line x1="108" y1="88" x2="212" y2="88" stroke="#BDBDBD" stroke-width="7" stroke-linecap="round"/>
    <!-- Plakallar -->
    <rect x="104" y="76" width="10" height="24" rx="3" fill="#E53E3E" stroke="#C53030" stroke-width="1.5"/>
    <rect x="208" y="76" width="10" height="24" rx="3" fill="#E53E3E" stroke="#C53030" stroke-width="1.5"/>
    <rect x="96" y="80" width="8" height="16" rx="2" fill="#9B2C2C"/>
    <rect x="216" y="80" width="8" height="16" rx="2" fill="#9B2C2C"/>
    <!-- Ağırlık değeri -->
    <text x="160" y="78" text-anchor="middle" font-size="10" fill="#fff" font-family="sans-serif" font-weight="bold" opacity=".9">BAR</text>
  </g>

  <!-- Ok işaretleri (hareket yönü) -->
  <g class="phase-dot">
    <path d="M 160 60 L 160 80" stroke="#52B788" stroke-width="2.5" stroke-dasharray="4,3"/>
    <path d="M 155 78 L 160 86 L 165 78" fill="#52B788"/>
    <text x="168" y="72" font-size="9" fill="#52B788" font-family="sans-serif" font-weight="bold">İNİŞ</text>
  </g>
  <path d="M 160 155 L 160 135" stroke="#4A90D9" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M 155 137 L 160 129 L 165 137" fill="#4A90D9"/>
  <text x="168" y="148" font-size="9" fill="#4A90D9" font-family="sans-serif" font-weight="bold">İTİŞ</text>

  <!-- Faz göstergesi -->
  <rect x="8" y="8" width="120" height="22" rx="5" fill="#1A202C" opacity=".8"/>
  <text x="16" y="23" font-size="9" fill="#52B788" font-family="sans-serif" font-weight="bold">● İtiş/İniş Animasyonu</text>
  </svg>`
},

// ─────────────────────────────────────────────
// SQUAT — Bacak kas anatomisi + animasyon
// ─────────────────────────────────────────────
"Squat": {
  anatomySVG: `<svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sq_quad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FF5252"/>
      <stop offset="60%" stop-color="#CC0000"/>
      <stop offset="100%" stop-color="#7B0000"/>
    </radialGradient>
    <radialGradient id="sq_glute" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#FF4444"/>
      <stop offset="100%" stop-color="#880000"/>
    </radialGradient>
    <radialGradient id="sq_ham" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FF8C42"/>
      <stop offset="100%" stop-color="#CC4400"/>
    </radialGradient>
    <radialGradient id="sq_calf" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFD166"/>
      <stop offset="100%" stop-color="#CC8800"/>
    </radialGradient>
    <radialGradient id="skin2" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/>
      <stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <filter id="glow2"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>
      .quad-p{animation:qpulse 1.8s ease-in-out infinite alternate}
      .glute-p{animation:gpulse 1.8s ease-in-out infinite alternate}
      @keyframes qpulse{0%{opacity:.75;filter:brightness(.85)}100%{opacity:1;filter:brightness(1.2)}}
      @keyframes gpulse{0%{opacity:.7}100%{opacity:.95}}
    </style>
  </defs>

  <!-- Gövde üst -->
  <path d="M 78 90 Q 72 130 74 160 Q 85 172 110 172 Q 135 172 146 160 Q 148 130 142 90 Z" fill="#B8860B" opacity=".2"/>
  <!-- Üst gövde hacim -->
  <ellipse cx="110" cy="120" rx="38" ry="42" fill="#C68642" opacity=".8"/>
  <!-- Karın -->
  <rect x="96" y="140" width="10" height="8" rx="2" fill="#8B6914" opacity=".5"/>
  <rect x="110" y="140" width="10" height="8" rx="2" fill="#8B6914" opacity=".5"/>
  <rect x="96" y="152" width="10" height="8" rx="2" fill="#8B6914" opacity=".45"/>
  <rect x="110" y="152" width="10" height="8" rx="2" fill="#8B6914" opacity=".45"/>

  <!-- GLUTEUS MAXIMUS — ANA KAS -->
  <path class="glute-p" d="
    M 78 162 Q 72 175 74 192
    Q 82 202 100 200
    Q 110 200 110 190
    Q 110 200 120 200
    Q 138 202 146 192
    Q 148 175 142 162
    Q 126 172 110 172
    Q 94 172 78 162 Z
  " fill="url(#sq_glute)" stroke="#660000" stroke-width="1.2" filter="url(#glow2)"/>

  <!-- QUADRICEPS SOL — ANA KAS -->
  <path class="quad-p" d="
    M 76 195 Q 65 210 62 232 Q 60 252 66 268
    Q 74 275 84 268 Q 90 250 90 230 Q 90 210 86 195 Z
  " fill="url(#sq_quad)" stroke="#880000" stroke-width="1.2" filter="url(#glow2)"/>

  <!-- QUADRICEPS SAĞ — ANA KAS -->
  <path class="quad-p" d="
    M 144 195 Q 155 210 158 232 Q 160 252 154 268
    Q 146 275 136 268 Q 130 250 130 230 Q 130 210 134 195 Z
  " fill="url(#sq_quad)" stroke="#880000" stroke-width="1.2" filter="url(#glow2)"/>

  <!-- Quad alt detaylar (vastus medialis) -->
  <path d="M 66 255 Q 70 265 78 268 Q 74 260 72 252 Z" fill="#FF8080" opacity=".6"/>
  <path d="M 154 255 Q 150 265 142 268 Q 146 260 148 252 Z" fill="#FF8080" opacity=".6"/>

  <!-- HAMSTRİNG SOL — YARDIMCI (arka görünüm için soluk) -->
  <path d="M 72 195 Q 60 212 58 238 Q 56 255 64 268 Q 56 258 58 240 Q 60 215 68 198 Z" fill="url(#sq_ham)" opacity=".5"/>

  <!-- HAMSTRİNG SAĞ -->
  <path d="M 148 195 Q 160 212 162 238 Q 164 255 156 268 Q 164 258 162 240 Q 160 215 152 198 Z" fill="url(#sq_ham)" opacity=".5"/>

  <!-- BALDIRLAR SOL -->
  <path d="M 66 268 Q 60 280 62 296 Q 68 305 76 302 Q 82 288 80 272 Z" fill="url(#sq_calf)" opacity=".8"/>
  <!-- BALDIRLAR SAĞ -->
  <path d="M 154 268 Q 160 280 158 296 Q 152 305 144 302 Q 138 288 140 272 Z" fill="url(#sq_calf)" opacity=".8"/>

  <!-- Diz kapakçıkları -->
  <ellipse cx="75" cy="270" rx="9" ry="7" fill="#C68642" opacity=".7"/>
  <ellipse cx="145" cy="270" rx="9" ry="7" fill="#C68642" opacity=".7"/>

  <!-- Boyun + Baş -->
  <rect x="96" y="60" width="28" height="22" rx="10" fill="url(#skin2)"/>
  <circle cx="110" cy="44" r="22" fill="url(#skin2)"/>
  <ellipse cx="104" cy="40" rx="3" ry="2.5" fill="#5C3317" opacity=".7"/>
  <ellipse cx="116" cy="40" rx="3" ry="2.5" fill="#5C3317" opacity=".7"/>

  <!-- LEJANT -->
  <rect x="6" y="268" width="12" height="9" rx="2" fill="#CC0000"/>
  <text x="22" y="276" font-size="8.5" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">Quadriceps + Gluteus (Ana)</text>
  <rect x="6" y="281" width="12" height="9" rx="2" fill="#CC4400"/>
  <text x="22" y="289" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Hamstrings (Yardımcı)</text>
  <rect x="6" y="294" width="12" height="9" rx="2" fill="#CC8800"/>
  <text x="22" y="302" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Baldır (Stabilizatör)</text>
  </svg>`,

  motionSVG: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sk3" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#C68642"/>
      <stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes squat_anim {
        0%,8% { transform: translateY(0) scaleY(1); }
        40%,60% { transform: translateY(58px) scaleY(.78); }
        92%,100% { transform: translateY(0) scaleY(1); }
      }
      #sq_body { animation: squat_anim 3.5s cubic-bezier(.4,0,.6,1) infinite; transform-origin: 160px 100px; }
      @keyframes bar_sq {
        0%,8%{transform:translateY(0)}
        40%,60%{transform:translateY(58px)}
        92%,100%{transform:translateY(0)}
      }
      #sq_bar_g { animation: bar_sq 3.5s cubic-bezier(.4,0,.6,1) infinite; }
    </style>
  </defs>

  <!-- ZEMİN -->
  <rect x="30" y="210" width="260" height="6" rx="3" fill="#2D3748"/>
  <line x1="30" y1="210" x2="290" y2="210" stroke="#52B788" stroke-width="1.5" opacity=".5"/>

  <!-- Paralel çizgisi -->
  <line x1="60" y1="158" x2="140" y2="158" stroke="#F4845F" stroke-width="1.5" stroke-dasharray="5,3" opacity=".7"/>
  <text x="145" y="162" font-size="9" fill="#F4845F" font-family="sans-serif">Paralel</text>

  <!-- Bar (sabit yükseklik referansı) -->
  <g id="sq_bar_g">
    <line x1="88" y1="88" x2="232" y2="88" stroke="#BDBDBD" stroke-width="7" stroke-linecap="round"/>
    <rect x="84" y="77" width="10" height="22" rx="3" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.5"/>
    <rect x="226" y="77" width="10" height="22" rx="3" fill="#9B59B6" stroke="#7D3C98" stroke-width="1.5"/>
    <rect x="76" y="81" width="8" height="14" rx="2" fill="#6C3483"/>
    <rect x="236" y="81" width="8" height="14" rx="2" fill="#6C3483"/>
  </g>

  <!-- Animasyonlu vücut -->
  <g id="sq_body">
    <!-- Baş -->
    <circle cx="160" cy="48" r="19" fill="url(#sk3)"/>
    <circle cx="166" cy="44" r="2.5" fill="#3E2723"/>
    <!-- Boyun -->
    <rect x="150" y="66" width="20" height="14" rx="6" fill="#B87333"/>
    <!-- Gövde -->
    <rect x="128" y="78" width="64" height="48" rx="12" fill="#C68642"/>
    <!-- Göğüs hacmi -->
    <ellipse cx="160" cy="95" rx="30" ry="20" fill="#B87333" opacity=".4"/>
    <!-- Kollar (bar tutuyor) -->
    <line x1="130" y1="88" x2="96" y2="88" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="190" y1="88" x2="224" y2="88" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <!-- Üst bacaklar -->
    <line x1="142" y1="124" x2="118" y2="170" stroke="#8D5524" stroke-width="16" stroke-linecap="round"/>
    <line x1="178" y1="124" x2="202" y2="170" stroke="#8D5524" stroke-width="16" stroke-linecap="round"/>
    <!-- Alt bacaklar -->
    <line x1="118" y1="170" x2="106" y2="210" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <line x1="202" y1="170" x2="214" y2="210" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <!-- Ayaklar -->
    <ellipse cx="103" cy="212" rx="14" ry="6" fill="#5C3317"/>
    <ellipse cx="217" cy="212" rx="14" ry="6" fill="#5C3317"/>
    <!-- Diz detayı -->
    <circle cx="116" cy="172" r="7" fill="#B87333" opacity=".7"/>
    <circle cx="204" cy="172" r="7" fill="#B87333" opacity=".7"/>
  </g>

  <!-- Yön okları -->
  <path d="M 62 110 L 62 90" stroke="#4A90D9" stroke-width="2" stroke-dasharray="4,3"/>
  <path d="M 58 92 L 62 84 L 66 92" fill="#4A90D9"/>
  <text x="18" y="102" font-size="8" fill="#4A90D9" font-family="sans-serif" font-weight="bold">KALKIŞ</text>
  <path d="M 62 125 L 62 145" stroke="#F4845F" stroke-width="2" stroke-dasharray="4,3"/>
  <path d="M 58 143 L 62 151 L 66 143" fill="#F4845F"/>
  <text x="22" y="138" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">İNİŞ</text>
  </svg>`
},

// ─────────────────────────────────────────────
// LAT PULLDOWN — Sırt anatomisi + animasyon
// ─────────────────────────────────────────────
"Lat Pulldown": {
  anatomySVG: `<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="lat_g" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#FF5252"/>
      <stop offset="55%" stop-color="#B71C1C"/>
      <stop offset="100%" stop-color="#6B0000"/>
    </radialGradient>
    <radialGradient id="rdelt_g" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FF8C42"/>
      <stop offset="100%" stop-color="#BF360C"/>
    </radialGradient>
    <radialGradient id="rhom_g" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#4CAF50"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </radialGradient>
    <radialGradient id="trap_g" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FFD166"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <radialGradient id="bic_g" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#7B68EE"/>
      <stop offset="100%" stop-color="#4A0080"/>
    </radialGradient>
    <radialGradient id="skin3" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/>
      <stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <filter id="glow3"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>
      .lat-p{animation:latpulse 1.8s ease-in-out infinite alternate}
      .trap-p{animation:trappulse 1.8s ease-in-out infinite alternate}
      @keyframes latpulse{0%{opacity:.72;filter:brightness(.85)}100%{opacity:1;filter:brightness(1.2)}}
      @keyframes trappulse{0%{opacity:.6}100%{opacity:.9}}
    </style>
  </defs>

  <!-- ARKA GÖRÜNÜM — sırt kasları -->
  <!-- Gövde arka -->
  <path d="M 72 82 Q 66 125 68 168 Q 80 180 110 180 Q 140 180 152 168 Q 154 125 148 82 Z" fill="#8B6914" opacity=".25"/>

  <!-- TRAPEZIUS ÜST — stabilizatör -->
  <path class="trap-p" d="
    M 110 68 Q 90 64 76 74 Q 68 82 72 92
    Q 84 88 110 82 Q 136 88 148 92
    Q 152 82 144 74 Q 130 64 110 68 Z
  " fill="url(#trap_g)" stroke="#E65100" stroke-width="1" opacity=".85"/>

  <!-- TRAPEZIUS ORTA/ALT -->
  <path class="trap-p" d="
    M 82 92 Q 78 108 80 122 Q 92 128 110 126 Q 128 128 140 122 Q 142 108 138 92
    Q 124 98 110 96 Q 96 98 82 92 Z
  " fill="url(#trap_g)" stroke="#E65100" stroke-width="1" opacity=".7"/>

  <!-- RHOMBOİDS — stabilizatör -->
  <path d="
    M 92 98 Q 88 108 90 118 Q 100 122 110 120 Q 120 122 130 118 Q 132 108 128 98
    Q 118 103 110 102 Q 102 103 92 98 Z
  " fill="url(#rhom_g)" opacity=".65"/>

  <!-- LATİSSİMUS DORSİ SOL — ANA KAS -->
  <path class="lat-p" d="
    M 80 100 Q 64 115 58 138 Q 54 158 60 172
    Q 70 180 82 172 Q 88 155 86 135 Q 84 118 80 100 Z
  " fill="url(#lat_g)" stroke="#8B0000" stroke-width="1.3" filter="url(#glow3)"/>

  <!-- LATİSSİMUS DORSİ SAĞ — ANA KAS -->
  <path class="lat-p" d="
    M 140 100 Q 156 115 162 138 Q 166 158 160 172
    Q 150 180 138 172 Q 132 155 134 135 Q 136 118 140 100 Z
  " fill="url(#lat_g)" stroke="#8B0000" stroke-width="1.3" filter="url(#glow3)"/>

  <!-- ARKA DELTOID SOL — yardımcı -->
  <path d="M 72 82 Q 58 72 55 58 Q 62 48 73 54 Q 78 66 76 78 Z" fill="url(#rdelt_g)" opacity=".85"/>
  <!-- ARKA DELTOID SAĞ -->
  <path d="M 148 82 Q 162 72 165 58 Q 158 48 147 54 Q 142 66 144 78 Z" fill="url(#rdelt_g)" opacity=".85"/>

  <!-- BİCEPS SOL -->
  <path d="M 56 62 Q 44 72 42 90 Q 40 105 48 114 Q 58 118 66 108 Q 68 94 66 78 Z" fill="url(#bic_g)" opacity=".7"/>
  <!-- BİCEPS SAĞ -->
  <path d="M 164 62 Q 176 72 178 90 Q 180 105 172 114 Q 162 118 154 108 Q 152 94 154 78 Z" fill="url(#bic_g)" opacity=".7"/>

  <!-- Omurilik çizgisi -->
  <line x1="110" y1="82" x2="110" y2="172" stroke="#6B3A2A" stroke-width="2" stroke-dasharray="4,3" opacity=".35"/>
  <!-- Omuz bıçağı çizgileri -->
  <path d="M 84 95 Q 92 128 90 160" stroke="#6B3A2A" stroke-width="1" fill="none" opacity=".3"/>
  <path d="M 136 95 Q 128 128 130 160" stroke="#6B3A2A" stroke-width="1" fill="none" opacity=".3"/>

  <!-- Baş + Boyun (arka görünüm) -->
  <rect x="96" y="45" width="28" height="18" rx="8" fill="url(#skin3)"/>
  <circle cx="110" cy="32" r="20" fill="url(#skin3)"/>
  <!-- Saç -->
  <ellipse cx="110" cy="20" rx="18" ry="10" fill="#3E2723" opacity=".7"/>

  <!-- LEJANT -->
  <rect x="6" y="200" width="12" height="9" rx="2" fill="#B71C1C"/>
  <text x="22" y="208" font-size="8.5" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">Latissimus Dorsi (Ana)</text>
  <rect x="6" y="214" width="12" height="9" rx="2" fill="#BF360C"/>
  <text x="22" y="222" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Arka Deltoid + Biceps</text>
  <rect x="6" y="228" width="12" height="9" rx="2" fill="#E65100"/>
  <text x="22" y="236" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Trapezius (Stabilizatör)</text>
  <rect x="6" y="242" width="12" height="9" rx="2" fill="#1B5E20"/>
  <text x="22" y="250" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Rhomboids (Stabilizatör)</text>
  </svg>`,

  motionSVG: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sk4" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes pulldown_anim {
        0%,10% { transform: translateY(0); }
        42%,58% { transform: translateY(48px); }
        90%,100% { transform: translateY(0); }
      }
      @keyframes cable_anim {
        0%,10% { d: path("M 96 22 L 96 52 M 224 22 L 224 52"); }
        42%,58% { d: path("M 96 22 L 96 100 M 224 22 L 224 100"); }
        90%,100% { d: path("M 96 22 L 96 52 M 224 22 L 224 52"); }
      }
      #ld_arms { animation: pulldown_anim 3s cubic-bezier(.4,0,.6,1) infinite; transform-origin: 160px 130px; }
    </style>
  </defs>

  <!-- MAKİNE ÇERÇEVE -->
  <rect x="120" y="4" width="80" height="16" rx="5" fill="#4A5568" stroke="#2D3748" stroke-width="1.5"/>
  <rect x="152" y="20" width="16" height="35" rx="4" fill="#718096"/>
  <!-- Kasnaklar -->
  <circle cx="110" cy="20" r="8" fill="#4A5568" stroke="#2D3748" stroke-width="1.5"/>
  <circle cx="210" cy="20" r="8" fill="#4A5568" stroke="#2D3748" stroke-width="1.5"/>

  <!-- Kablo sol -->
  <line id="cable_l" x1="110" y1="28" x2="96" y2="55" stroke="#A0AEC0" stroke-width="2.5"/>
  <!-- Kablo sağ -->
  <line id="cable_r" x1="210" y1="28" x2="224" y2="55" stroke="#A0AEC0" stroke-width="2.5"/>

  <!-- Bar -->
  <line x1="90" y1="55" x2="230" y2="55" stroke="#BDBDBD" stroke-width="6" stroke-linecap="round"/>
  <circle cx="90" cy="55" r="7" fill="#718096"/>
  <circle cx="230" cy="55" r="7" fill="#718096"/>

  <!-- OTURMA YERİ -->
  <rect x="112" y="182" width="96" height="16" rx="7" fill="#4A5568" stroke="#2D3748" stroke-width="1.5"/>
  <rect x="126" y="198" width="14" height="28" rx="4" fill="#2D3748"/>
  <rect x="180" y="198" width="14" height="28" rx="4" fill="#2D3748"/>
  <!-- Diz tutucusu -->
  <rect x="114" y="170" width="92" height="14" rx="5" fill="#1A202C"/>

  <!-- Animasyonlu vücut + kollar -->
  <g id="ld_arms">
    <!-- Gövde (oturur pozisyon, hafif öne) -->
    <circle cx="160" cy="122" r="18" fill="url(#sk4)"/>
    <rect x="138" y="138" width="44" height="42" rx="12" fill="#C68642"/>
    <!-- Bacaklar -->
    <line x1="148" y1="178" x2="130" y2="172" stroke="#8D5524" stroke-width="12" stroke-linecap="round"/>
    <line x1="172" y1="178" x2="190" y2="172" stroke="#8D5524" stroke-width="12" stroke-linecap="round"/>
    <!-- Kollar yukarı uzanmış -->
    <line x1="148" y1="145" x2="96" y2="55" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="172" y1="145" x2="224" y2="55" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <!-- Ön kol vurgusu -->
    <line x1="96" y1="55" x2="90" y2="55" stroke="#A0856C" stroke-width="9" stroke-linecap="round"/>
    <line x1="224" y1="55" x2="230" y2="55" stroke="#A0856C" stroke-width="9" stroke-linecap="round"/>
  </g>

  <!-- Ok yön -->
  <path d="M 42 72 L 42 50" stroke="#52B788" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M 38 52 L 42 44 L 46 52" fill="#52B788"/>
  <text x="10" y="66" font-size="8" fill="#52B788" font-family="sans-serif" font-weight="bold">YUKARI</text>
  <path d="M 42 98 L 42 120" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M 38 118 L 42 126 L 46 118" fill="#F4845F"/>
  <text x="12" y="112" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">ÇEK</text>
  </svg>`
},

// ─────────────────────────────────────────────
// SHOULDER PRESS — Omuz anatomisi + animasyon
// ─────────────────────────────────────────────
"Shoulder Press": {
  anatomySVG: `<svg viewBox="0 0 220 290" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sp_ant" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FF6B35"/>
      <stop offset="60%" stop-color="#CC3000"/>
      <stop offset="100%" stop-color="#8B1A00"/>
    </radialGradient>
    <radialGradient id="sp_med" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FF5252"/>
      <stop offset="100%" stop-color="#991B1B"/>
    </radialGradient>
    <radialGradient id="sp_tri" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFD166"/>
      <stop offset="100%" stop-color="#B45309"/>
    </radialGradient>
    <radialGradient id="sp_trap" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#5B21B6"/>
    </radialGradient>
    <radialGradient id="skin5" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <filter id="glow5"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>
      .sp-ant{animation:spant 1.8s ease-in-out infinite alternate}
      .sp-med{animation:spmed 1.8s ease-in-out infinite alternate}
      @keyframes spant{0%{opacity:.72;filter:brightness(.85)}100%{opacity:1;filter:brightness(1.25)}}
      @keyframes spmed{0%{opacity:.68}100%{opacity:.95}}
    </style>
  </defs>

  <!-- Gövde -->
  <ellipse cx="110" cy="148" rx="40" ry="52" fill="#B8860B" opacity=".2"/>

  <!-- TRAPEZİUS — yardımcı -->
  <path d="M 76 80 Q 110 68 144 80 Q 138 94 110 92 Q 82 94 76 80 Z" fill="url(#sp_trap)" opacity=".8"/>
  <!-- Trapez boyun kenarları -->
  <path d="M 92 72 Q 86 80 82 92" stroke="#5B21B6" stroke-width="2" fill="none" opacity=".4"/>
  <path d="M 128 72 Q 134 80 138 92" stroke="#5B21B6" stroke-width="2" fill="none" opacity=".4"/>

  <!-- ÖN DELTOID SOL — ANA -->
  <path class="sp-ant" d="
    M 76 90 Q 56 82 46 68 Q 40 54 48 44
    Q 60 38 70 48 Q 74 62 72 76 Z
  " fill="url(#sp_ant)" stroke="#CC3000" stroke-width="1.2" filter="url(#glow5)"/>

  <!-- ÖN DELTOID SAĞ — ANA -->
  <path class="sp-ant" d="
    M 144 90 Q 164 82 174 68 Q 180 54 172 44
    Q 160 38 150 48 Q 146 62 148 76 Z
  " fill="url(#sp_ant)" stroke="#CC3000" stroke-width="1.2" filter="url(#glow5)"/>

  <!-- YAN DELTOID SOL — ANA -->
  <path class="sp-med" d="
    M 68 92 Q 48 102 44 120 Q 42 136 52 144
    Q 64 148 72 138 Q 76 122 74 104 Z
  " fill="url(#sp_med)" stroke="#991B1B" stroke-width="1.2" filter="url(#glow5)"/>

  <!-- YAN DELTOID SAĞ — ANA -->
  <path class="sp-med" d="
    M 152 92 Q 172 102 176 120 Q 178 136 168 144
    Q 156 148 148 138 Q 144 122 146 104 Z
  " fill="url(#sp_med)" stroke="#991B1B" stroke-width="1.2" filter="url(#glow5)"/>

  <!-- Deltoid yuvarlak hacim vurgusu -->
  <ellipse cx="58" cy="115" rx="14" ry="20" fill="#FF6B35" opacity=".2"/>
  <ellipse cx="162" cy="115" rx="14" ry="20" fill="#FF6B35" opacity=".2"/>

  <!-- TRİCEPS SOL — yardımcı -->
  <path d="M 50 148 Q 38 162 40 180 Q 48 188 58 182 Q 62 166 60 150 Z" fill="url(#sp_tri)" opacity=".75"/>
  <!-- TRİCEPS SAĞ -->
  <path d="M 170 148 Q 182 162 180 180 Q 172 188 162 182 Q 158 166 160 150 Z" fill="url(#sp_tri)" opacity=".75"/>

  <!-- Gövde hacim -->
  <ellipse cx="110" cy="148" rx="36" ry="48" fill="#C68642" opacity=".75"/>
  <!-- Karın çizgisi -->
  <rect x="100" y="148" width="9" height="8" rx="2" fill="#8B6914" opacity=".45"/>
  <rect x="112" y="148" width="9" height="8" rx="2" fill="#8B6914" opacity=".45"/>

  <!-- Boyun + Baş -->
  <rect x="96" y="56" width="28" height="22" rx="10" fill="url(#skin5)"/>
  <circle cx="110" cy="40" r="22" fill="url(#skin5)"/>
  <ellipse cx="104" cy="36" rx="3" ry="2.5" fill="#5C3317" opacity=".7"/>
  <ellipse cx="116" cy="36" rx="3" ry="2.5" fill="#5C3317" opacity=".7"/>
  <path d="M 104 48 Q 110 53 116 48" stroke="#5C3317" stroke-width="1.5" fill="none"/>

  <!-- LEJANT -->
  <rect x="6" y="215" width="12" height="9" rx="2" fill="#CC3000"/>
  <text x="22" y="223" font-size="8.5" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">Ön + Yan Deltoid (Ana)</text>
  <rect x="6" y="229" width="12" height="9" rx="2" fill="#B45309"/>
  <text x="22" y="237" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Triceps (Yardımcı)</text>
  <rect x="6" y="243" width="12" height="9" rx="2" fill="#5B21B6"/>
  <text x="22" y="251" font-size="8.5" fill="#E2E8F0" font-family="sans-serif">Trapezius (Yardımcı)</text>
  </svg>`,

  motionSVG: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sk6" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes sp_press {
        0%,10% { transform: translateY(0); }
        42%,58% { transform: translateY(-40px); }
        90%,100% { transform: translateY(0); }
      }
      #sp_up { animation: sp_press 3s cubic-bezier(.4,0,.6,1) infinite; transform-origin: 160px 120px; }
    </style>
  </defs>

  <!-- Sandalye -->
  <rect x="112" y="175" width="96" height="14" rx="6" fill="#4A5568" stroke="#2D3748" stroke-width="1.5"/>
  <rect x="155" y="135" width="10" height="42" rx="3" fill="#2D3748"/>
  <rect x="126" y="189" width="14" height="30" rx="4" fill="#2D3748"/>
  <rect x="180" y="189" width="14" height="30" rx="4" fill="#2D3748"/>

  <!-- Sabit bacaklar + gövde alt -->
  <line x1="148" y1="175" x2="128" y2="218" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
  <line x1="172" y1="175" x2="192" y2="218" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
  <ellipse cx="126" cy="220" rx="12" ry="5" fill="#5C3317"/>
  <ellipse cx="194" cy="220" rx="12" ry="5" fill="#5C3317"/>

  <!-- Animasyonlu üst vücut + bar -->
  <g id="sp_up">
    <!-- Gövde -->
    <rect x="134" y="128" width="52" height="48" rx="12" fill="#C68642"/>
    <ellipse cx="160" cy="148" rx="24" ry="20" fill="#B87333" opacity=".4"/>
    <!-- Baş -->
    <circle cx="160" cy="112" r="18" fill="url(#sk6)"/>
    <circle cx="166" cy="108" r="2.5" fill="#3E2723"/>
    <!-- Boyun -->
    <rect x="150" y="128" width="20" height="12" rx="6" fill="#B87333"/>
    <!-- Kollar (bar tutuyor) başlangıç: 90° açı) -->
    <line x1="140" y1="145" x2="96" y2="145" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="180" y1="145" x2="224" y2="145" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <!-- Ön kol yukarı -->
    <line x1="96" y1="145" x2="92" y2="112" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="224" y1="145" x2="228" y2="112" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <!-- BAR + Dumbbell -->
    <line x1="85" y1="110" x2="100" y2="110" stroke="#BDBDBD" stroke-width="6" stroke-linecap="round"/>
    <line x1="220" y1="110" x2="235" y2="110" stroke="#BDBDBD" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="82" cy="110" rx="8" ry="10" fill="#E53E3E" stroke="#C53030" stroke-width="1.5"/>
    <ellipse cx="238" cy="110" rx="8" ry="10" fill="#E53E3E" stroke="#C53030" stroke-width="1.5"/>
  </g>

  <!-- Yön oku -->
  <path d="M 42 140 L 42 116" stroke="#4A90D9" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M 38 118 L 42 110 L 46 118" fill="#4A90D9"/>
  <text x="8" y="132" font-size="8" fill="#4A90D9" font-family="sans-serif" font-weight="bold">YUKARI İT</text>
  <path d="M 42 162 L 42 186" stroke="#F4845F" stroke-width="2.5" stroke-dasharray="4,3"/>
  <path d="M 38 184 L 42 192 L 46 184" fill="#F4845F"/>
  <text x="10" y="176" font-size="8" fill="#F4845F" font-family="sans-serif" font-weight="bold">KONTROL</text>
  </svg>`
},

// ─────────────────────────────────────────────
// DEFAULT — Diğer hareketler için
// ─────────────────────────────────────────────
"default_push": {
  anatomySVG: `<svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dp_skin" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>.dp-p{animation:dppulse 1.8s ease-in-out infinite alternate}@keyframes dppulse{0%{opacity:.7}100%{opacity:1}}</style>
  </defs>
  <ellipse cx="110" cy="148" rx="45" ry="62" fill="#C68642" opacity=".85"/>
  <ellipse cx="110" cy="120" rx="38" ry="30" fill="#B87333" opacity=".5"/>
  <path class="dp-p" d="M 68 100 Q 50 115 48 140 Q 46 158 56 168 Q 68 172 76 160 Q 80 142 78 120 Z" fill="#CC2200" opacity=".85"/>
  <path class="dp-p" d="M 152 100 Q 170 115 172 140 Q 174 158 164 168 Q 152 172 144 160 Q 140 142 142 120 Z" fill="#CC2200" opacity=".85"/>
  <rect x="96" y="56" width="28" height="22" rx="10" fill="url(#dp_skin)"/>
  <circle cx="110" cy="40" r="22" fill="url(#dp_skin)"/>
  <rect x="96" y="155" width="9" height="8" rx="2" fill="#8B6914" opacity=".45"/>
  <rect x="112" y="155" width="9" height="8" rx="2" fill="#8B6914" opacity=".45"/>
  <text x="110" y="245" text-anchor="middle" font-size="10" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">KAS HARİTASI</text>
  </svg>`,
  motionSVG: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dm_sk" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes gen_move{0%,100%{transform:translateY(0)}45%,55%{transform:translateY(35px)}}
      #gen_body{animation:gen_move 2.8s ease-in-out infinite;transform-origin:160px 100px}
    </style>
  </defs>
  <rect x="30" y="205" width="260" height="6" rx="3" fill="#2D3748"/>
  <g id="gen_body">
    <circle cx="160" cy="52" r="19" fill="url(#dm_sk)"/>
    <rect x="138" y="70" width="44" height="45" rx="12" fill="#C68642"/>
    <line x1="140" y1="85" x2="104" y2="92" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="180" y1="85" x2="216" y2="92" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="142" y1="113" x2="124" y2="160" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <line x1="178" y1="113" x2="196" y2="160" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <line x1="124" y1="160" x2="116" y2="205" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="196" y1="160" x2="204" y2="205" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <ellipse cx="114" cy="207" rx="13" ry="5" fill="#5C3317"/>
    <ellipse cx="206" cy="207" rx="13" ry="5" fill="#5C3317"/>
  </g>
  </svg>`
},

"default_pull": {
  anatomySVG: `<svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dpl_skin" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>.dpl-p{animation:dplpulse 1.8s ease-in-out infinite alternate}@keyframes dplpulse{0%{opacity:.7}100%{opacity:1}}</style>
  </defs>
  <ellipse cx="110" cy="148" rx="45" ry="62" fill="#B8860B" opacity=".25"/>
  <ellipse cx="110" cy="130" rx="38" ry="42" fill="#C68642" opacity=".8"/>
  <path class="dpl-p" d="M 70 105 Q 52 120 50 148 Q 48 165 58 175 Q 70 180 80 168 Q 84 150 82 128 Z" fill="#1565C0" opacity=".85"/>
  <path class="dpl-p" d="M 150 105 Q 168 120 170 148 Q 172 165 162 175 Q 150 180 140 168 Q 136 150 138 128 Z" fill="#1565C0" opacity=".85"/>
  <rect x="96" y="56" width="28" height="22" rx="10" fill="url(#dpl_skin)"/>
  <circle cx="110" cy="40" r="22" fill="url(#dpl_skin)"/>
  <text x="110" y="245" text-anchor="middle" font-size="10" fill="#E2E8F0" font-family="sans-serif" font-weight="bold">SIRT KAS HARİTASI</text>
  </svg>`,
  motionSVG: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dpm_sk" cx="50%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#C68642"/><stop offset="100%" stop-color="#8D5524"/>
    </radialGradient>
    <style>
      @keyframes pull_gen{0%,100%{transform:translateY(0)}45%,55%{transform:translateY(-30px)}}
      #pull_body{animation:pull_gen 2.8s ease-in-out infinite;transform-origin:160px 130px}
    </style>
  </defs>
  <rect x="100" y="8" width="120" height="12" rx="4" fill="#4A5568"/>
  <rect x="148" y="20" width="24" height="30" rx="5" fill="#718096"/>
  <g id="pull_body">
    <circle cx="160" cy="118" r="19" fill="url(#dpm_sk)"/>
    <rect x="138" y="136" width="44" height="45" rx="12" fill="#C68642"/>
    <line x1="148" y1="143" x2="104" y2="52" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="172" y1="143" x2="216" y2="52" stroke="#8D5524" stroke-width="11" stroke-linecap="round"/>
    <line x1="142" y1="180" x2="128" y2="215" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
    <line x1="178" y1="180" x2="192" y2="215" stroke="#8D5524" stroke-width="13" stroke-linecap="round"/>
  </g>
  <line x1="80" y1="52" x2="240" y2="52" stroke="#BDBDBD" stroke-width="6" stroke-linecap="round"/>
  </svg>`
}

};

// Ana exercises.js'den buildExDetailHTML'i override ediyoruz
function buildExDetailHTML(exName, type) {
  const d = EX_DETAIL[exName];
  const m = MUSCLE_SVG[exName] || MUSCLE_SVG['default_' + type] || MUSCLE_SVG['default_push'];

  if (!d) {
    return `<div style="text-align:center;padding:20px">
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px">${m.anatomySVG}</div>
        <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px">${m.motionSVG}</div>
      </div>
      <p style="color:#6B7280;font-size:12px">Bu hareket için detaylı bilgi yakında eklenecek.</p>
    </div>`;
  }

  const isPush = type === 'push';
  const accent = isPush ? '#52B788' : '#4A90D9';
  const bg = isPush ? '#F0FAF3' : '#EFF6FF';

  const phasesHTML = d.phases.map((p, i) => `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:8px;border:1.5px solid #E5E7EB">
      <div style="background:${p.color};padding:8px 12px;display:flex;align-items:center;justify-content:space-between">
        <span style="color:#fff;font-size:12px;font-weight:800">Faz ${i+1}: ${p.name}</span>
        <button onclick="event.stopPropagation();speak('Faz ${i+1}. ${p.name}. ${p.desc.replace(/'/g,"").replace(/"/g,"")} İpucu: ${p.tip.replace(/[🎯💪🔑⚠️]/g,"").replace(/'/g,"").replace(/"/g,"")}');this.textContent=this.textContent==='🔊'?'⏹':'🔊'"
          style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer">🔊</button>
      </div>
      <div style="padding:10px 12px;background:#FAFAFA">
        <p style="font-size:12px;color:#374151;line-height:1.6;margin-bottom:6px">${p.desc}</p>
        <div style="background:#FFF8E1;border-left:3px solid #F4845F;border-radius:6px;padding:6px 10px;font-size:11px;color:#78350F;font-weight:600">${p.tip}</div>
      </div>
    </div>`).join('');

  const keyHTML = d.keyPoints.map(k => `
    <div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid #F3F4F6;font-size:12px;color:#374151">
      <span style="color:${accent};font-weight:700;flex-shrink:0">✓</span><span>${k}</span>
    </div>`).join('');

  return `
    <!-- Kas + Animasyon yan yana -->
    <div style="display:flex;gap:6px;margin-bottom:10px">
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:8px">
        <div style="font-size:9px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:4px">KAS HARİTASI</div>
        ${m.anatomySVG}
      </div>
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:8px">
        <div style="font-size:9px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;text-align:center;margin-bottom:4px">HAREKETLİ ANİMASYON</div>
        ${m.motionSVG}
      </div>
    </div>

    <!-- Kaslar özeti -->
    <div style="background:${bg};border-radius:10px;padding:10px 12px;margin-bottom:8px">
      <div style="font-size:10px;font-weight:700;color:${accent};margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px">Çalışan Kaslar</div>
      <div style="margin-bottom:3px"><span style="font-size:10px;font-weight:700;color:#EF4444">🔴 Ana: </span><span style="font-size:11px;color:#374151">${d.primaryMuscles.join(', ')}</span></div>
      <div style="margin-bottom:3px"><span style="font-size:10px;font-weight:700;color:#F4845F">🟠 Yardımcı: </span><span style="font-size:11px;color:#374151">${d.secondaryMuscles.join(', ')}</span></div>
      <div><span style="font-size:10px;font-weight:700;color:#FFD166">🟡 Stabilizatör: </span><span style="font-size:11px;color:#374151">${d.stabilizers.join(', ')}</span></div>
    </div>

    <!-- Nefes -->
    <div style="background:#F0FFF4;border:1.5px solid #D8F3DC;border-radius:10px;padding:9px 12px;margin-bottom:10px;display:flex;align-items:center;gap:8px">
      <span style="font-size:18px">🫁</span>
      <div style="flex:1">
        <div style="font-size:9px;font-weight:700;color:#1B4332;text-transform:uppercase;letter-spacing:.5px">Nefes</div>
        <div style="font-size:12px;color:#374151;margin-top:1px">${d.breathe}</div>
      </div>
      <button onclick="speak('Nefes tekniği: ${d.breathe}')"
        style="background:#1B4332;color:#fff;border:none;border-radius:8px;padding:5px 10px;font-size:11px;cursor:pointer">🔊</button>
    </div>

    <!-- Fazlar -->
    <div style="font-size:10px;font-weight:700;color:#374151;margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px">📋 Hareket Fazları</div>
    ${phasesHTML}

    <!-- Kilit noktalar -->
    <div style="font-size:10px;font-weight:700;color:#374151;margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px">🔑 Kilit Noktalar</div>
    <div style="background:#fff;border:1.5px solid #E5E7EB;border-radius:10px;padding:10px 12px;margin-bottom:10px">${keyHTML}</div>

    <!-- Sesli butonlar -->
    <div style="display:flex;gap:8px">
      <button onclick="speakAllPhases('${exName}')"
        style="flex:1;padding:11px;background:#1B4332;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">🔊 Tüm Hareketi Anlat</button>
      <button onclick="stopSpeak()"
        style="padding:11px 14px;background:#FEE2E2;color:#EF4444;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">⏹</button>
    </div>`;
}
