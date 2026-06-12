// ═══════════════════════════════════════════════════════════
// EXERCISE DETAIL DATA — Kas anatomisi + hareket evreleri + sesli
// ═══════════════════════════════════════════════════════════
const EX_DETAIL = {

"Bench Press": {
  primaryMuscles: ["Pectoralis Major"],
  secondaryMuscles: ["Triceps Brachii","Anterior Deltoid"],
  stabilizers: ["Serratus Anterior","Rotator Cuff"],
  phases: [
    { name: "Başlangıç Pozisyonu", desc: "Sırt bankoya düz yat. Ayaklar yerde sabit. Kürek kemiklerini birbirine çek ve bankoya bas. Geniş tutuş ile bara uzan — başparmak çevresine sar.", tip: "⚠️ Bileği düz tut, bükmé", color: "#52B788" },
    { name: "İniş (Eksantrik)", desc: "Nefes al. Barı kontrollü olarak göğüse indir. Dirsekler 45-75° açıda — ne çok açık ne çok kapalı. Göğüs ortasına, meme hizasına doğun.", tip: "🎯 Hız: 2-3 saniye", color: "#F4845F" },
    { name: "Alt Nokta", desc: "Bar göğse değer veya 2-3 cm yaklaşır. Omuzlar bankoda sabit — yukarı kalkmasın. Bu noktada kısa bir duraklama kas gerilimini artırır.", tip: "🔑 PIF: Göğüsü şişir, barı ittir", color: "#EF4444" },
    { name: "İtiş (Konsantrik)", desc: "Nefesi tut veya ver. Barı yukarı it — hızlı ve patlayıcı. Dirsekler kilitlenmeye yakın dur. Göğüs kaslarını sık.", tip: "💪 Sanki göğüsü ortaya doğru sıkıştır", color: "#4A90D9" },
  ],
  keyPoints: ["Sırt hafif kemer — doğal eğri koru","Ayaklar zemine sabit bas","Kürek kemiklerini çek ve sabit tut","Bar yolunu hafif diyagonal yap — omuzdan göğüse"],
  breathe: "İniş → Nefes al | İtiş → Nefes ver",
  muscles_svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="80" rx="42" ry="52" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <ellipse cx="100" cy="80" rx="30" ry="38" fill="#1A202C"/>
    <!-- Pec major left - PRIMARY -->
    <path d="M58 62 Q75 55 100 68 Q82 90 62 95 Q48 88 52 72 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Pec major right - PRIMARY -->
    <path d="M142 62 Q125 55 100 68 Q118 90 138 95 Q152 88 148 72 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Anterior deltoid left - SECONDARY -->
    <path d="M52 58 Q45 48 50 40 Q60 38 65 50 Q62 58 58 62 Z" fill="#F4845F" opacity="0.8"/>
    <!-- Anterior deltoid right - SECONDARY -->
    <path d="M148 58 Q155 48 150 40 Q140 38 135 50 Q138 58 142 62 Z" fill="#F4845F" opacity="0.8"/>
    <!-- Triceps left - SECONDARY -->
    <path d="M52 100 Q44 112 46 128 Q54 132 62 124 Q64 110 60 100 Z" fill="#FFD166" opacity="0.7"/>
    <!-- Triceps right - SECONDARY -->
    <path d="M148 100 Q156 112 154 128 Q146 132 138 124 Q136 110 140 100 Z" fill="#FFD166" opacity="0.7"/>
    <!-- Body outline -->
    <path d="M58 100 Q48 120 45 160 Q50 180 70 185 Q85 188 100 188 Q115 188 130 185 Q150 180 155 160 Q152 120 142 100" fill="#2D3748" stroke="#4A5568" stroke-width="1"/>
    <!-- Neck -->
    <rect x="88" y="30" width="24" height="20" rx="8" fill="#2D3748" stroke="#4A5568" stroke-width="1"/>
    <!-- Head -->
    <circle cx="100" cy="18" r="16" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Legend -->
    <rect x="10" y="200" width="12" height="8" rx="2" fill="#EF4444"/>
    <text x="26" y="208" font-size="8" fill="#E2E8F0" font-family="sans-serif">Ana Kas (Pectoralis Major)</text>
    <rect x="10" y="214" width="12" height="8" rx="2" fill="#F4845F"/>
    <text x="26" y="222" font-size="8" fill="#E2E8F0" font-family="sans-serif">Ön Omuz (Deltoid)</text>
    <rect x="10" y="228" width="12" height="8" rx="2" fill="#FFD166"/>
    <text x="26" y="236" font-size="8" fill="#E2E8F0" font-family="sans-serif">Yardımcı (Triceps)</text>
    <style>.muscle-pulse{animation:mpulse 1.5s ease-in-out infinite alternate}@keyframes mpulse{0%{opacity:.7}100%{opacity:1}}</style>
  </svg>`,
  exercise_svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      .bench{fill:#3D2B1F;stroke:#6B4C3B;stroke-width:1.5}
      .bar{stroke:#C0C0C0;stroke-width:5;stroke-linecap:round}
      .plate{fill:#E53E3E;stroke:#C53030;stroke-width:1}
      .body{fill:#4A90D9;stroke:#2B6CB0;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
      .head{fill:#F6AD55;stroke:#DD6B20;stroke-width:1}
      @keyframes press{0%,100%{transform:translateY(0)}50%{transform:translateY(28px)}}
      #press-group{animation:press 2.5s ease-in-out infinite}
    </style>
    <!-- Bench -->
    <rect class="bench" x="60" y="130" width="180" height="18" rx="5"/>
    <rect class="bench" x="75" y="148" width="15" height="30" rx="3"/>
    <rect class="bench" x="210" y="148" width="15" height="30" rx="3"/>
    <!-- Person body on bench -->
    <ellipse class="head" cx="230" cy="122" rx="12" ry="14"/>
    <line class="body" x1="218" y1="122" x2="90" y2="128" stroke-width="14" stroke="#4A90D9" stroke-linecap="round"/>
    <!-- Legs -->
    <line class="body" x1="90" y1="128" x2="70" y2="155" stroke-width="10"/>
    <line class="body" x1="70" y1="155" x2="65" y2="178" stroke-width="8"/>
    <line class="body" x1="90" y1="128" x2="100" y2="155" stroke-width="10"/>
    <line class="body" x1="100" y1="155" x2="95" y2="178" stroke-width="8"/>
    <!-- Moving press group -->
    <g id="press-group">
      <!-- Arms -->
      <line stroke="#4A90D9" stroke-width="9" stroke-linecap="round" x1="200" y1="118" x2="170" y2="82"/>
      <line stroke="#4A90D9" stroke-width="9" stroke-linecap="round" x1="145" y1="122" x2="170" y2="82"/>
      <!-- Bar -->
      <line class="bar" x1="110" y1="80" x2="235" y2="80"/>
      <!-- Plates -->
      <rect class="plate" x="108" y="72" width="8" height="16" rx="2"/>
      <rect class="plate" x="228" y="72" width="8" height="16" rx="2"/>
    </g>
    <!-- Phase arrow -->
    <path d="M155 55 L155 75" stroke="#52B788" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arr)"/>
    <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0L6,3L0,6Z" fill="#52B788"/></marker></defs>
    <text x="162" y="64" font-size="9" fill="#52B788" font-family="sans-serif" font-weight="bold">HAREKET</text>
  </svg>`
},

"Squat": {
  primaryMuscles: ["Quadriceps","Gluteus Maximus"],
  secondaryMuscles: ["Hamstrings","Adductors"],
  stabilizers: ["Core","Erector Spinae","Calves"],
  phases: [
    { name: "Başlangıç — Duruş", desc: "Ayaklar omuz genişliğinde veya biraz daha geniş. Parmak uçları 15-30° dışa. Bar trapez kasının üst kısmına — boyun üstüne değil. Göğüs açık, bakış düz.", tip: "⚠️ Bel düz — kamburlaşma", color: "#52B788" },
    { name: "İniş (Eksantrik)", desc: "Nefes al, core'u sık. Kalçayı geriye ve aşağıya doğru iter gibi in. Diz, ayak parmak yönünde açılsın. Ağırlık topuk ve ayak ortasında.", tip: "🎯 2-3 saniye kontrollü ini", color: "#F4845F" },
    { name: "Alt Nokta — Paralel", desc: "Uyluk yere paralel veya biraz altı. Diz, ayak parmak ucunu geçebilir — önemli olan topuğun yerden kalkmaması. Göğüs dik.", tip: "🔑 Diz içe çökmesin!", color: "#EF4444" },
    { name: "Kalkış (Konsantrik)", desc: "Topuktan yere basarak it. Kalça ve diz aynı anda açılsın. Başla hızlı bitir. Üst noktada dizleri kilitlemeden dur.", tip: "💪 Yere bastığını hisset", color: "#4A90D9" },
  ],
  keyPoints: ["Topuklar yerden kalkmasın","Diz içe çökmemeli","Bel nötr eğri — ne fazla kemer ne düz","Bar boyun kemiğine değil trapeze"],
  breathe: "İniş → Nefes al | Kalkış → Nefes ver (Valsalva tekniği)",
  muscles_svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
    <style>.muscle-pulse{animation:mpulse 1.5s ease-in-out infinite alternate}@keyframes mpulse{0%{opacity:.7}100%{opacity:1}}</style>
    <!-- Body torso -->
    <path d="M70 85 Q65 130 68 175 Q80 185 100 185 Q120 185 132 175 Q135 130 130 85 Z" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Quads left - PRIMARY -->
    <path d="M68 175 Q60 195 58 225 Q68 235 78 228 Q82 205 80 180 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Quads right - PRIMARY -->  
    <path d="M132 175 Q140 195 142 225 Q132 235 122 228 Q118 205 120 180 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Glutes - PRIMARY -->
    <path d="M72 155 Q70 175 80 180 Q100 185 120 180 Q130 175 128 155 Q114 165 100 165 Q86 165 72 155 Z" fill="#EF4444" opacity="0.85" class="muscle-pulse"/>
    <!-- Hamstrings left - SECONDARY -->
    <path d="M62 180 Q55 200 58 225 Q50 228 45 220 Q44 195 52 175 Z" fill="#F4845F" opacity="0.7"/>
    <!-- Hamstrings right - SECONDARY -->
    <path d="M138 180 Q145 200 142 225 Q150 228 155 220 Q156 195 148 175 Z" fill="#F4845F" opacity="0.7"/>
    <!-- Core/abs -->
    <path d="M82 100 Q80 120 82 140 Q90 145 100 145 Q110 145 118 140 Q120 120 118 100 Q109 105 100 105 Q91 105 82 100 Z" fill="#FFD166" opacity="0.5"/>
    <!-- Head/neck -->
    <rect x="88" y="52" width="24" height="22" rx="8" fill="#2D3748" stroke="#4A5568" stroke-width="1"/>
    <circle cx="100" cy="38" r="16" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Legend -->
    <rect x="8" y="248" width="10" height="7" rx="1" fill="#EF4444"/>
    <text x="22" y="255" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Quadriceps + Gluteus (Ana)</text>
    <rect x="8" y="260" width="10" height="7" rx="1" fill="#F4845F"/>
    <text x="22" y="267" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Hamstrings (Yardımcı)</text>
    <rect x="8" y="272" width="10" height="7" rx="1" fill="#FFD166"/>
    <text x="22" y="279" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Core (Stabilizatör)</text>
  </svg>`,
  exercise_svg: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
    <style>
      .body{fill:#4A90D9;stroke:#2B6CB0;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .bar2{stroke:#C0C0C0;stroke-width:5;stroke-linecap:round}
      .plate2{fill:#9B59B6;stroke:#7D3C98;stroke-width:1}
      @keyframes squat{0%,100%{transform:translateY(0)}50%{transform:translateY(45px)}}
      #sq-group{animation:squat 2.8s ease-in-out infinite;transform-origin:150px 80px}
    </style>
    <!-- Floor -->
    <line x1="30" y1="195" x2="270" y2="195" stroke="#52B788" stroke-width="2"/>
    <g id="sq-group">
      <!-- Bar -->
      <line class="bar2" x1="80" y1="78" x2="220" y2="78"/>
      <rect class="plate2" x="77" y="69" width="8" height="18" rx="2"/>
      <rect class="plate2" x="215" y="69" width="8" height="18" rx="2"/>
      <!-- Body standing -->
      <circle fill="#F6AD55" stroke="#DD6B20" stroke-width="1.5" cx="150" cy="50" r="13"/>
      <line class="body" x1="150" y1="63" x2="150" y2="90" stroke-width="14"/>
      <!-- Arms on bar -->
      <line class="body" x1="150" y1="72" x2="108" y2="78" stroke-width="8"/>
      <line class="body" x1="150" y1="72" x2="192" y2="78" stroke-width="8"/>
    </g>
    <!-- Static legs - animate separately for squat -->
    <g id="sq-legs">
      <line stroke="#4A90D9" stroke-width="11" stroke-linecap="round" x1="143" y1="138" x2="122" y2="175"/>
      <line stroke="#4A90D9" stroke-width="11" stroke-linecap="round" x1="157" y1="138" x2="178" y2="175"/>
      <line stroke="#4A90D9" stroke-width="9" stroke-linecap="round" x1="122" y1="175" x2="112" y2="195"/>
      <line stroke="#4A90D9" stroke-width="9" stroke-linecap="round" x1="178" y1="175" x2="188" y2="195"/>
    </g>
    <!-- Depth guide line -->
    <line x1="105" y1="138" x2="195" y2="138" stroke="#F4845F" stroke-width="1" stroke-dasharray="4,3"/>
    <text x="200" y="142" font-size="8" fill="#F4845F" font-family="sans-serif">Paralel</text>
  </svg>`
},

"Lat Pulldown": {
  primaryMuscles: ["Latissimus Dorsi"],
  secondaryMuscles: ["Biceps Brachii","Rear Deltoid"],
  stabilizers: ["Rhomboids","Trapezius","Core"],
  phases: [
    { name: "Başlangıç — Oturma", desc: "Diz tutucuların altına dizleri sıkıştır. Geniş tutuş — omuzdan biraz daha geniş. Kolları tamamen uzat, hafif öne eğil (15-20°). Kürek kemiklerini hisset.", tip: "⚠️ Fazla öne eğilme", color: "#52B788" },
    { name: "Çekiş Başlangıcı", desc: "Dirsekleri aşağıya ve arkaya doğru çek. Bunu yaparken önce kürek kemiklerini birbirine yaklaştır — kollardan değil sırt kasından başla.", tip: "🎯 'Dirseklerini ceplerine sok' düşün", color: "#F4845F" },
    { name: "Alt Nokta — Göğüs", desc: "Bar çene veya üst göğse kadar gelir. Göğsü biraz dışa çıkar, kürek kemikleri tam birbirine yaklaşmış. Bu noktada 1 sn sık.", tip: "🔑 1 saniye izometrik kasılma!", color: "#EF4444" },
    { name: "Dönüş (Eksantrik)", desc: "Barı kontrollü olarak yukarı bırak — ama kontrolsüz bırakma. 2-3 saniye boyunca lat kaslarını gergin tut. Tam uzama noktasında lat gerilimini hisset.", tip: "💪 Geri dönüş en önemli faz", color: "#4A90D9" },
  ],
  keyPoints: ["Çekişi kollardan değil sırttan başlat","Gövde sabit — sallanma yok","Bar arkaya değil göğüse gelsin","Tam hareket açısı — tamamen uzat"],
  breathe: "Çekiş → Nefes ver | Uzama → Nefes al",
  muscles_svg: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
    <style>.muscle-pulse{animation:mpulse 1.5s ease-in-out infinite alternate}@keyframes mpulse{0%{opacity:.7}100%{opacity:1}}</style>
    <!-- Back body -->
    <path d="M65 75 Q60 120 62 170 Q75 182 100 183 Q125 182 138 170 Q140 120 135 75 Z" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Lat left - PRIMARY -->
    <path d="M65 95 Q52 115 54 148 Q62 162 74 158 Q80 140 78 118 Q74 105 72 95 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Lat right - PRIMARY -->
    <path d="M135 95 Q148 115 146 148 Q138 162 126 158 Q120 140 122 118 Q126 105 128 95 Z" fill="#EF4444" opacity="0.9" class="muscle-pulse"/>
    <!-- Rear deltoid left - SECONDARY -->
    <path d="M62 72 Q52 62 55 52 Q65 48 72 58 Q70 68 66 75 Z" fill="#F4845F" opacity="0.8"/>
    <!-- Rear deltoid right - SECONDARY -->
    <path d="M138 72 Q148 62 145 52 Q135 48 128 58 Q130 68 134 75 Z" fill="#F4845F" opacity="0.8"/>
    <!-- Rhomboids - STABILIZER -->
    <path d="M78 85 Q88 80 100 82 Q112 80 122 85 Q118 105 100 108 Q82 105 78 85 Z" fill="#52B788" opacity="0.5"/>
    <!-- Traps lower - STABILIZER -->
    <path d="M78 70 Q100 65 122 70 Q118 82 100 84 Q82 82 78 70 Z" fill="#FFD166" opacity="0.4"/>
    <!-- Biceps (arms) -->
    <path d="M52 78 Q44 88 46 106 Q54 110 60 102 Q62 88 58 78 Z" fill="#F4845F" opacity="0.6"/>
    <path d="M148 78 Q156 88 154 106 Q146 110 140 102 Q138 88 142 78 Z" fill="#F4845F" opacity="0.6"/>
    <!-- Neck/Head -->
    <rect x="88" y="45" width="24" height="20" rx="8" fill="#2D3748" stroke="#4A5568" stroke-width="1"/>
    <circle cx="100" cy="32" r="14" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Legend -->
    <rect x="8" y="198" width="10" height="7" rx="1" fill="#EF4444"/>
    <text x="22" y="205" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Latissimus Dorsi (Ana)</text>
    <rect x="8" y="212" width="10" height="7" rx="1" fill="#F4845F"/>
    <text x="22" y="219" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Arka Deltoid + Biceps</text>
    <rect x="8" y="226" width="10" height="7" rx="1" fill="#52B788"/>
    <text x="22" y="233" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Rhomboids (Stabilizatör)</text>
  </svg>`,
  exercise_svg: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
    <style>
      .b3{stroke:#4A90D9;stroke-width:9;stroke-linecap:round}
      @keyframes pull{0%,100%{transform:translateY(0)}50%{transform:translateY(35px)}}
      #pull-group{animation:pull 2.2s ease-in-out infinite;transform-origin:150px 100px}
    </style>
    <!-- Machine frame -->
    <rect x="120" y="5" width="60" height="12" rx="4" fill="#4A5568"/>
    <line x1="150" y1="17" x2="150" y2="50" stroke="#718096" stroke-width="3"/>
    <!-- Cable -->
    <line id="cable" x1="95" y1="50" x2="205" y2="50" stroke="#A0AEC0" stroke-width="2.5"/>
    <!-- Seat -->
    <rect x="110" y="170" width="80" height="14" rx="5" fill="#2D3748"/>
    <rect x="125" y="184" width="12" height="25" rx="3" fill="#2D3748"/>
    <rect x="163" y="184" width="12" height="25" rx="3" fill="#2D3748"/>
    <!-- Knee pad -->
    <rect x="112" y="158" width="76" height="12" rx="5" fill="#1A202C"/>
    <!-- Person -->
    <g id="pull-group">
      <circle fill="#F6AD55" stroke="#DD6B20" stroke-width="1.5" cx="150" cy="105" r="13"/>
      <line class="b3" x1="150" y1="118" x2="150" y2="158" stroke-width="14"/>
      <!-- Arms reaching up -->
      <line class="b3" x1="148" y1="125" x2="100" y2="52"/>
      <line class="b3" x1="152" y1="125" x2="200" y2="52"/>
      <!-- Bar handles -->
      <circle cx="95" cy="52" r="5" fill="#C0C0C0"/>
      <circle cx="205" cy="52" r="5" fill="#C0C0C0"/>
    </g>
    <text x="15" y="100" font-size="9" fill="#52B788" font-family="sans-serif" font-weight="bold">↓ Çek</text>
  </svg>`
},

"Shoulder Press": {
  primaryMuscles: ["Anterior Deltoid","Medial Deltoid"],
  secondaryMuscles: ["Triceps Brachii","Upper Trapezius"],
  stabilizers: ["Rotator Cuff","Core","Serratus Anterior"],
  phases: [
    { name: "Başlangıç", desc: "Otur veya ayakta dur. Dumbbelllar kulak hizasında, avuç içleri öne bakıyor. Dirsekler 90° açıda. Core sıkı, bel düz.", tip: "⚠️ Beli aşırı sola alma", color: "#52B788" },
    { name: "İtiş Yukarı", desc: "Dumbbellları yukarı ve hafif içe doğru it. Tam tepe noktada dumbbelllar birbirine yaklaşır ama dokunmaz. Sürekli omuz kasılması.", tip: "🎯 Dirsekler hafif önde kalsın", color: "#F4845F" },
    { name: "Tepe Nokta", desc: "Kollar neredeyse tam uzamış — ama dirsekleri kilitleme. Trapezin kasılmasını his. Bu noktada omuz eklemini sık.", tip: "🔑 1 sn kasılma + sıkıştır", color: "#EF4444" },
    { name: "İniş", desc: "Kontrollü olarak kulak hizasına in. 2 saniye. Omuz kaslarının gerildiğini hisset. Dirsekler hiçbir zaman omuz çizgisinin altına inmesin.", tip: "💪 Gravitiye dirén", color: "#4A90D9" },
  ],
  keyPoints: ["Beli aşırı kamburlaştırma","Dirsekler 90° başlangıç noktası","Tepe noktada omuz sık","Kontrollü iniş — hızlı düşürme"],
  breathe: "İniş → Nefes al | İtiş → Nefes ver",
  muscles_svg: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    <style>.muscle-pulse{animation:mpulse 1.5s ease-in-out infinite alternate}@keyframes mpulse{0%{opacity:.7}100%{opacity:1}}</style>
    <path d="M68 78 Q63 120 65 165 Q78 175 100 175 Q122 175 135 165 Q137 120 132 78 Z" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <!-- Anterior deltoid left - PRIMARY -->
    <path d="M60 65 Q48 55 50 42 Q62 36 70 48 Q70 58 66 68 Z" fill="#EF4444" opacity="0.95" class="muscle-pulse"/>
    <!-- Anterior deltoid right - PRIMARY -->  
    <path d="M140 65 Q152 55 150 42 Q138 36 130 48 Q130 58 134 68 Z" fill="#EF4444" opacity="0.95" class="muscle-pulse"/>
    <!-- Medial deltoid left - PRIMARY -->
    <path d="M55 68 Q44 78 46 95 Q56 100 66 92 Q68 80 62 70 Z" fill="#EF4444" opacity="0.8" class="muscle-pulse"/>
    <!-- Medial deltoid right - PRIMARY -->
    <path d="M145 68 Q156 78 154 95 Q144 100 134 92 Q132 80 138 70 Z" fill="#EF4444" opacity="0.8" class="muscle-pulse"/>
    <!-- Upper trap - SECONDARY -->
    <path d="M70 62 Q100 52 130 62 Q124 74 100 76 Q76 74 70 62 Z" fill="#F4845F" opacity="0.7"/>
    <!-- Triceps left -->
    <path d="M50 100 Q42 115 44 132 Q52 136 60 128 Q62 114 58 100 Z" fill="#FFD166" opacity="0.6"/>
    <!-- Triceps right -->
    <path d="M150 100 Q158 115 156 132 Q148 136 140 128 Q138 114 142 100 Z" fill="#FFD166" opacity="0.6"/>
    <rect x="88" y="45" width="24" height="20" rx="8" fill="#2D3748" stroke="#4A5568" stroke-width="1"/>
    <circle cx="100" cy="30" r="14" fill="#2D3748" stroke="#4A5568" stroke-width="1.5"/>
    <rect x="8" y="190" width="10" height="7" rx="1" fill="#EF4444"/>
    <text x="22" y="197" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Ön + Yan Deltoid (Ana)</text>
    <rect x="8" y="204" width="10" height="7" rx="1" fill="#F4845F"/>
    <text x="22" y="211" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Üst Trapez (Yardımcı)</text>
    <rect x="8" y="218" width="10" height="7" rx="1" fill="#FFD166"/>
    <text x="22" y="225" font-size="7.5" fill="#E2E8F0" font-family="sans-serif">Triceps (Yardımcı)</text>
  </svg>`,
  exercise_svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      .b4{stroke:#52B788;stroke-width:9;stroke-linecap:round}
      @keyframes press2{0%,100%{transform:translateY(0)}50%{transform:translateY(-32px)}}
      #sp-arms{animation:press2 2.2s ease-in-out infinite;transform-origin:150px 120px}
    </style>
    <rect x="110" y="160" width="80" height="14" rx="5" fill="#2D3748"/>
    <rect x="122" y="174" width="12" height="20" rx="3" fill="#2D3748"/>
    <rect x="166" y="174" width="12" height="20" rx="3" fill="#2D3748"/>
    <circle fill="#F6AD55" stroke="#DD6B20" stroke-width="1.5" cx="150" cy="90" r="13"/>
    <line class="b4" x1="150" y1="103" x2="150" y2="155" stroke-width="14"/>
    <g id="sp-arms">
      <line class="b4" x1="148" y1="115" x2="105" y2="118"/>
      <line class="b4" x1="152" y1="115" x2="195" y2="118"/>
      <line class="b4" x1="105" y1="118" x2="100" y2="88"/>
      <line class="b4" x1="195" y1="118" x2="200" y2="88"/>
      <ellipse cx="96" cy="86" rx="6" ry="8" fill="#718096"/>
      <ellipse cx="204" cy="86" rx="6" ry="8" fill="#718096"/>
    </g>
    <path d="M150 50 L150 78" stroke="#F4845F" stroke-width="2" stroke-dasharray="3,2" marker-end="url(#arr2)"/>
    <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,6L3,0L6,6Z" fill="#F4845F"/></marker></defs>
    <text x="156" y="62" font-size="9" fill="#F4845F" font-family="sans-serif" font-weight="bold">İTİŞ</text>
  </svg>`
}

};

// Text-to-speech helper
function speak(text, rate=0.95) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'tr-TR';
  u.rate = rate;
  u.pitch = 1.0;
  u.volume = 0.9;
  // Try to find a Turkish voice
  const voices = window.speechSynthesis.getVoices();
  const trVoice = voices.find(v => v.lang.startsWith('tr')) || voices.find(v => v.lang.startsWith('en'));
  if (trVoice) u.voice = trVoice;
  window.speechSynthesis.speak(u);
}

function stopSpeak() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// Build exercise detail modal HTML
function buildExDetailHTML(exName, type) {
  const d = EX_DETAIL[exName];
  if (!d) return `<p style="color:#6B7280;text-align:center;padding:20px">Bu hareket için detaylı bilgi yakında eklenecek.</p>`;

  const isPush = type === 'push';
  const accent = isPush ? '#52B788' : '#4A90D9';
  const bg = isPush ? '#F0FAF3' : '#EFF6FF';

  const phasesHTML = d.phases.map((p, i) => `
    <div style="border-radius:10px;overflow:hidden;margin-bottom:8px;border:1.5px solid #E5E7EB">
      <div style="background:${p.color};padding:8px 12px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <span style="color:#fff;font-size:12px;font-weight:800">Faz ${i+1}: ${p.name}</span>
        <button onclick="event.stopPropagation();speak('Faz ${i+1}. ${p.name}. ${p.desc} İpucu: ${p.tip.replace(/[🎯💪🔑⚠️]/g,'')}');this.textContent=this.textContent==='🔊'?'⏹':'🔊'" style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer">🔊</button>
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
    <!-- Kas haritası + animasyon -->
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px;min-height:200px;display:flex;flex-direction:column">
        <div style="font-size:10px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;text-align:center">KAS HARİTASI</div>
        ${d.muscles_svg}
      </div>
      <div style="flex:1;background:#1A202C;border-radius:12px;padding:10px;min-height:200px;display:flex;flex-direction:column">
        <div style="font-size:10px;font-weight:700;color:#9CA3AF;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;text-align:center">HAREKET ANİMASYONU</div>
        ${d.exercise_svg}
      </div>
    </div>

    <!-- Kaslar özet -->
    <div style="background:${bg};border-radius:10px;padding:10px 12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:${accent};margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Çalışan Kaslar</div>
      <div style="margin-bottom:4px"><span style="font-size:10px;font-weight:700;color:#374151">🔴 Ana: </span><span style="font-size:11px;color:#374151">${d.primaryMuscles.join(', ')}</span></div>
      <div style="margin-bottom:4px"><span style="font-size:10px;font-weight:700;color:#374151">🟠 Yardımcı: </span><span style="font-size:11px;color:#374151">${d.secondaryMuscles.join(', ')}</span></div>
      <div><span style="font-size:10px;font-weight:700;color:#374151">🟡 Stabilizatör: </span><span style="font-size:11px;color:#374151">${d.stabilizers.join(', ')}</span></div>
    </div>

    <!-- Nefes -->
    <div style="background:#F0FFF4;border:1.5px solid #D8F3DC;border-radius:10px;padding:10px 12px;margin-bottom:10px;display:flex;align-items:center;gap:8px">
      <span style="font-size:20px">🫁</span>
      <div>
        <div style="font-size:10px;font-weight:700;color:#1B4332;text-transform:uppercase;letter-spacing:.5px">Nefes Tekniği</div>
        <div style="font-size:12px;color:#374151;margin-top:2px">${d.breathe}</div>
      </div>
      <button onclick="speak('Nefes tekniği: ${d.breathe}')" style="background:#1B4332;color:#fff;border:none;border-radius:8px;padding:5px 10px;font-size:11px;cursor:pointer;margin-left:auto">🔊</button>
    </div>

    <!-- Hareket fazları -->
    <div style="font-size:11px;font-weight:700;color:#374151;margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase">📋 Hareket Fazları</div>
    ${phasesHTML}

    <!-- Kilit noktalar -->
    <div style="font-size:11px;font-weight:700;color:#374151;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">🔑 Kilit Noktalar</div>
    <div style="background:#fff;border:1.5px solid #E5E7EB;border-radius:10px;padding:10px 12px;margin-bottom:12px">
      ${keyHTML}
    </div>

    <!-- Tüm fazları sesli oku -->
    <div style="display:flex;gap:8px">
      <button onclick="speakAllPhases('${exName}')" style="flex:1;padding:11px;background:#1B4332;color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">🔊 Tüm Hareketi Anlat</button>
      <button onclick="stopSpeak()" style="padding:11px 14px;background:#FEE2E2;color:#EF4444;border:none;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer">⏹</button>
    </div>`;
}

function speakAllPhases(exName) {
  const d = EX_DETAIL[exName];
  if (!d) return;
  const fullText = `${exName} hareketi. Çalışan kaslar: ${d.primaryMuscles.join(', ')}. ` +
    d.phases.map((p, i) => `Faz ${i+1}, ${p.name}. ${p.desc}`).join('. ') +
    `. Nefes tekniği: ${d.breathe}. ` +
    `Kilit noktalar: ${d.keyPoints.join('. ')}`;
  speak(fullText, 0.9);
}
