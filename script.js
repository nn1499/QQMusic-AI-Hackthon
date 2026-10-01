/* ============================================================
   歌词时间轴（秒）
   以后只需改这个数组里的 time，即可微调同步。
   韩文(kr) 与中文(cn) 同属一个歌词单元，共用同一个 time。
   英文无对应中文时，cn 留空。
   ============================================================ */
const lyrics = [
    { time: 8.0, kr: "Dancing, yeah", cn: "" },
    { time: 10.0, kr: "우리 무대의 막이 오르면", cn: "当我们舞台的大幕缓缓升起" },
    { time: 12.0, kr: "Step in", cn: "" },
    { time: 14.0, kr: "Ay 시작됐던 그곳에서 다시", cn: "Ay 在故事开启的那个地方再度相聚" },
    { time: 16.0, kr: "불러 넌 나의 Name", cn: "呼唤吧 叫出我的名字" },
    { time: 18.0, kr: "불러 난 너의 Name", cn: "我也会呼唤你的名字" },
    { time: 20.0, kr: "인사를 대신", cn: "以此代替寒暄" },
    { time: 22.0, kr: "Tonight", cn: "" },
    { time: 23.0, kr: "Ah-ah-ah-ah", cn: "" },

    { time: 25.0, kr: "걱정과 설렘 두 단어 그 사이에", cn: "在忐忑不安与满心悸动两者之间" },
    { time: 28.0, kr: "홀로 서 있던", cn: "把曾经独自伫立的" },
    { time: 31.0, kr: "시간을 접어두고", cn: "那些时光统统收起" },
    { time: 33.0, kr: "No way, way, way", cn: "" },
    { time: 35.0, kr: "No way, way, way", cn: "" },
    { time: 36.0, kr: "혼자라는 게", cn: "我实在不想" },
    { time: 38.0, kr: "익숙해지기 싫어", cn: "习惯孤身一人" },

    { time: 40.0, kr: "너와 나 (사이가) 시작해", cn: "你与我 就此开启属于彼此" },
    { time: 46.0, kr: "우리 마지막 축제", cn: "属于我们这场最后的庆典" },
    { time: 48.0, kr: "친구야 Oh oh oh oh", cn: "朋友啊 Oh oh oh oh" },
    { time: 50.0, kr: "우리 따뜻했던", cn: "请一定记住我们" },
    { time: 52.0, kr: "마음 기억해 줘", cn: "那份温热的心意" },
    { time: 55.0, kr: "다시 만날 땐", cn: "待到再度相逢之时" },
    { time: 57.0, kr: "여기 끝이 아닌", cn: "这里并不是终点" },
    { time: 59.0, kr: "시작에 서 있다고", cn: "而是我们全新的起点" },
    { time: 61.0, kr: "네게 말해줄래", cn: "要不要我对你说" },
    { time: 63.0, kr: "내일이 오기 전에", cn: "在明天到来之前" },

    { time: 65.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 67.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 69.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 72.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 73.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 76.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 77.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 80.0, kr: "마지막 축제", cn: "最后的庆典" },

    { time: 81.0, kr: "하루가 가고 잠들기 전에", cn: "一日落幕 在沉沉睡去之前" },
    { time: 85.0, kr: "지난 날을 떠올려 (우릴 기억해)", cn: "回想那些过往岁月 请记住我们" },
    { time: 90.0, kr: "One day 혼자가 되면, all day 함께 했었던", cn: "倘若某天你孤身一人，那些整日相伴的" },
    { time: 94.0, kr: "기억이 널 꼭 안아줄 거야", cn: "回忆一定会紧紧拥住你" },

    { time: 97.0, kr: "너와 나 (사이가) 비로소 날 완전하게 해 (시작해)", cn: "你和我，才让我的生命变得完整，就此启程" },
    { time: 104.0, kr: "우리 마지막 축제", cn: "属于我们这场最后的庆典" },
    { time: 105.0, kr: "친구야 Oh oh oh oh", cn: "朋友啊 Oh oh oh oh" },
    { time: 108.0, kr: "우리 따뜻했던", cn: "请一定记住我们" },
    { time: 109.0, kr: "마음 기억해 줘", cn: "请一定记住我们那份温热的心意" },
    { time: 112.0, kr: "다시 만날 땐", cn: "待到再度相逢之时" },
    { time: 113.0, kr: "여기 끝이 아닌", cn: "这里并不是终点" },
    { time: 115.0, kr: "시작에 서 있다고", cn: "而是我们全新的起点" },
    { time: 117.0, kr: "네게 말해줄래", cn: "要不要我对你说" },
    { time: 120.0, kr: "내일이 오기 전에", cn: "在明天到来之前" },

    { time: 122.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 125.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 126.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 129.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 130.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 133.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 135.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 137.0, kr: "마지막 축제", cn: "最后的庆典" },

    { time: 139.0, kr: "불이 꺼지고 막이 내리면", cn: "当灯火熄灭 帷幕缓缓落下" },
    { time: 143.0, kr: "서로의 길을 가겠지만", cn: "纵然我们要奔赴各自前路" },
    { time: 146.0, kr: "Yeah 첫 만남에 난 너였다고", cn: "Yeah 初遇那一刻 那个人就是你" },
    { time: 149.0, kr: "지금까지 후회는 없었다고", cn: "直到此刻 我从未有过半分悔意" },
    { time: 151.0, kr: "기억해 줄래", cn: "请你记住好吗" },
    { time: 152.0, kr: "우리 마지막 축제 yeah", cn: "属于我们这场最后的庆典 yeah" },
    { time: 154.0, kr: "웃으며 bye, bye, bye, bye", cn: "笑着挥手说 bye bye bye bye" },
    { time: 156.0, kr: "다시 만날 그때 (ooh, yeah)", cn: "等到我们再次相遇的那天" },
    { time: 158.0, kr: "낯설지 않은 듯 (yeah)", cn: "仿佛未曾别离一般" },
    { time: 160.0, kr: "또 인사해 줘 (ah)", cn: "再一次向我问好" },

    { time: 162.0, kr: "여기 끝이 아닌", cn: "这里并不是终点" },
    { time: 164.0, kr: "시작에 서 있다고", cn: "而是我们全新的起点" },
    { time: 166.0, kr: "네게 말해줄래", cn: "要不要我对你说" },
    { time: 168.0, kr: "내일이 오기 전에", cn: "在明天到来之前" },
    { time: 171.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 174.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 175.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 178.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 179.0, kr: "Last, la-la-la-la-la-la", cn: "" },
    { time: 182.0, kr: "마지막 축제", cn: "最后的庆典" },
    { time: 183.0, kr: "Dance, da-da-da-da-da-da", cn: "" },
    { time: 187.0, kr: "마지막 축제", cn: "最后的庆典" }
];


const music = document.getElementById("music");
const playButton = document.getElementById("playButton");

const gameArea = document.getElementById("game-area");

const scoreText = document.getElementById("score");
const feedback = document.getElementById("feedback");

const currentTimeEl = document.getElementById("currentTime");
const durationTimeEl = document.getElementById("durationTime");
const progressLine = document.getElementById("progressLine");
const progressCurrent = document.getElementById("progressCurrent");
const lyricsEl = document.getElementById("lyrics");

let lyricEls = [];
let score = 0;
let isSeeking = false;
let lastLyricIndex = -1;
let lyricScrollFrame = null;


function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        seconds = 0;
    }

    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);

    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}


function getDuration() {
    const duration = music.duration;
    return Number.isFinite(duration) && duration > 0 ? duration : 0;
}


function updateProgress(currentTime) {
    const duration = getDuration();
    const percent = duration > 0 ? (currentTime / duration) * 100 : 0;

    progressCurrent.style.width = Math.min(100, Math.max(0, percent)) + "%";
    currentTimeEl.innerText = formatTime(currentTime);

    if (duration > 0) {
        durationTimeEl.innerText = formatTime(duration);
    }
}


function createSpacer() {
    const spacer = document.createElement("div");
    spacer.className = "lyric-spacer";
    return spacer;
}


function renderLyrics() {
    lyricsEl.innerHTML = "";
    lyricsEl.appendChild(createSpacer());

    lyrics.forEach((item) => {
        const unit = document.createElement("div");
        unit.className = "lyric";

        if (item.kr) {
            const kr = document.createElement("div");
            kr.className = "lyric-kr";
            kr.textContent = item.kr;
            unit.appendChild(kr);
        }

        if (item.cn) {
            const cn = document.createElement("div");
            cn.className = "lyric-cn";
            cn.textContent = item.cn;
            unit.appendChild(cn);
        }

        lyricsEl.appendChild(unit);
    });

    lyricsEl.appendChild(createSpacer());
    lyricEls = Array.from(lyricsEl.querySelectorAll(".lyric"));
}


function getLyricIndex(currentTime) {
    let index = 0;

    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            index = i;
        } else {
            break;
        }
    }

    return index;
}


function cancelLyricScroll() {
    if (lyricScrollFrame) {
        cancelAnimationFrame(lyricScrollFrame);
        lyricScrollFrame = null;
    }
}


function getLyricScrollTop(lyric) {
    const containerRect = lyricsEl.getBoundingClientRect();
    const lyricRect = lyric.getBoundingClientRect();

    return lyricsEl.scrollTop + lyricRect.top - containerRect.top - containerRect.height / 2 + lyricRect.height / 2;
}


function scrollLyricToCenter(lyric, immediate) {
    cancelLyricScroll();

    const target = getLyricScrollTop(lyric);

    if (immediate || music.paused) {
        lyricsEl.scrollTop = target;
        return;
    }

    const start = lyricsEl.scrollTop;
    const distance = target - start;
    const duration = 380;
    const startTime = performance.now();

    function step(now) {
        if (music.paused) {
            lyricScrollFrame = null;
            return;
        }

        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);

        lyricsEl.scrollTop = start + distance * eased;

        if (t < 1) {
            lyricScrollFrame = requestAnimationFrame(step);
        } else {
            lyricScrollFrame = null;
        }
    }

    lyricScrollFrame = requestAnimationFrame(step);
}


function updateLyrics(currentTime, immediate) {
    if (lyricEls.length === 0) {
        return;
    }

    const index = getLyricIndex(currentTime);

    lyricEls.forEach((lyric, i) => {
        lyric.classList.toggle("active", i === index);
    });

    const shouldMove = immediate || index !== lastLyricIndex;

    lastLyricIndex = index;

    if (shouldMove) {
        requestAnimationFrame(() => {
            scrollLyricToCenter(lyricEls[index], immediate || music.paused);
        });
    }
}


function syncFromAudio() {
    updateProgress(music.currentTime);
    updateLyrics(music.currentTime);
}


function seekFromPointer(event) {
    const duration = getDuration();
    const rect = progressLine.getBoundingClientRect();
    let ratio = (event.clientX - rect.left) / rect.width;

    ratio = Math.min(1, Math.max(0, ratio));

    const time = ratio * duration;

    updateProgress(time);
    updateLyrics(time, true);

    if (duration > 0) {
        music.currentTime = time;
    }
}


function setPlayingUI(playing) {
    playButton.innerText = playing ? "Ⅱ" : "▶";
}


renderLyrics();
updateLyrics(0, true);


/* 播放 / 暂停 */

playButton.addEventListener("click", () => {

    if (music.paused) {

        if (music.ended) {
            music.currentTime = 0;
            lastLyricIndex = -1;
            updateLyrics(0, true);
        }

        music.play();

    } else {

        music.pause();

    }

});


music.addEventListener("play", () => {
    setPlayingUI(true);
    startRhythm();

    if (music.currentTime < 0.25) {
        lastLyricIndex = -1;
        updateLyrics(music.currentTime, true);
    }
});


music.addEventListener("pause", () => {
    setPlayingUI(false);
    stopRhythm();
    cancelLyricScroll();
});


music.addEventListener("ended", () => {
    setPlayingUI(false);
    stopRhythm();
    cancelLyricScroll();
    lastLyricIndex = -1;
    syncFromAudio();
});


music.addEventListener("seeked", () => {
    updateLyrics(music.currentTime, true);
});


music.addEventListener("loadedmetadata", () => {
    durationTimeEl.innerText = formatTime(getDuration());
    syncFromAudio();
});


music.addEventListener("timeupdate", () => {
    if (isSeeking) {
        return;
    }

    syncFromAudio();
});


progressLine.addEventListener("pointerdown", (event) => {
    isSeeking = true;
    progressLine.setPointerCapture(event.pointerId);
    seekFromPointer(event);
});


progressLine.addEventListener("pointermove", (event) => {
    if (!isSeeking) {
        return;
    }

    seekFromPointer(event);
});


function endSeek(event) {
    if (!isSeeking) {
        return;
    }

    seekFromPointer(event);
    isSeeking = false;
}


progressLine.addEventListener("pointerup", endSeek);
progressLine.addEventListener("pointercancel", endSeek);


if (music.readyState >= 1) {
    durationTimeEl.innerText = formatTime(getDuration());
    syncFromAudio();
}


/* ============================================================
   音乐节奏点 + 音乐节奏检测 + 点击烟花
   ============================================================ */


/* ============================================================
   烟花 Canvas
   ============================================================ */

   const fireworksCanvas = document.getElementById("fireworks");

   const fireCtx = fireworksCanvas
       ? fireworksCanvas.getContext("2d")
       : null;
   
   let particles = [];
   
   let analyser = null;
   let audioContext = null;
   let audioSource = null;
   
   let audioReady = false;
   
   let lastBeat = 0;
   let previousEnergy = 0;
   
   
   /* ============================================================
      Canvas 尺寸
      ============================================================ */
   
   function resizeFireworksCanvas() {
   
       if (!fireworksCanvas) return;
   
       const dpr = window.devicePixelRatio || 1;
   
       fireworksCanvas.width =
           window.innerWidth * dpr;
   
       fireworksCanvas.height =
           window.innerHeight * dpr;
   
       fireworksCanvas.style.width =
           window.innerWidth + "px";
   
       fireworksCanvas.style.height =
           window.innerHeight + "px";
   
       fireCtx.setTransform(
           dpr,
           0,
           0,
           dpr,
           0,
           0
       );
   }
   
   
   resizeFireworksCanvas();
   
   window.addEventListener(
       "resize",
       resizeFireworksCanvas
   );
   
   
   /* ============================================================
      初始化音乐分析器
      ============================================================ */
   
   function setupAudioAnalyzer() {
   
       if (audioReady) {
   
           if (
               audioContext &&
               audioContext.state === "suspended"
           ) {
               audioContext.resume();
           }
   
           return;
       }
   
       try {
   
           audioContext =
               new (
                   window.AudioContext ||
                   window.webkitAudioContext
               )();
   
           analyser =
               audioContext.createAnalyser();
   
           /*
              数值越大，分析越细
           */
   
           analyser.fftSize = 512;
   
           audioSource =
               audioContext.createMediaElementSource(
                   music
               );
   
           audioSource.connect(analyser);
   
           analyser.connect(
               audioContext.destination
           );
   
           audioReady = true;
   
       } catch (error) {
   
           console.log(
               "音乐节奏分析初始化失败：",
               error
           );
   
       }
   }
   
   
   /* ============================================================
      生成节奏点
      ============================================================ */
   
   function createRhythmPoint() {
   
       const point =
           document.createElement("div");
   
       point.className =
           "rhythm-point";
   
   
       /* --------------------------------------------------------
          QQ音乐绿色
          后面可以换成其他颜色
          -------------------------------------------------------- */
   
       const pointColor =
           "#31C27C";
   
       point.style.setProperty(
           "--point-color",
           pointColor
       );
   
   
       /* --------------------------------------------------------
          随机位置
          -------------------------------------------------------- */
   
       const x =
           15 + Math.random() * 70;
   
       const y =
           30 + Math.random() * 45;
   
       point.style.left =
           x + "%";
   
       point.style.top =
           y + "%";
   
   
       /* --------------------------------------------------------
          出现动画
          -------------------------------------------------------- */
   
       point.style.transform =
           "translate(-50%, -50%) scale(0.3)";
   
       point.style.opacity = "0";
   
   
       requestAnimationFrame(() => {
   
           point.style.opacity = "1";
   
           point.style.transform =
               "translate(-50%, -50%) scale(1)";
   
       });
   
   
       /* ========================================================
          点击音乐点
          ======================================================== */
   
       point.addEventListener(
           "pointerdown",
           (event) => {
   
               event.preventDefault();
   
               event.stopPropagation();
   
   
               /* ----------------------------------------------
                  获取音乐点的屏幕位置
                  ---------------------------------------------- */
   
               const rect =
                   point.getBoundingClientRect();
   
               const x =
                   rect.left +
                   rect.width / 2;
   
               const y =
                   rect.top +
                   rect.height / 2;
   
   
               /* ----------------------------------------------
                  得分
                  ---------------------------------------------- */
   
                  const result = Math.random();

                  let addScore = 0;
                  let resultText = "";
                  
                  if (result < 0.55) {
                      addScore = 100;
                      resultText = "PERFECT";
                  } else if (result < 0.80) {
                      addScore = 70;
                      resultText = "GREAT";
                  } else {
                      addScore = 40;
                      resultText = "GOOD";
                  }
                  
                  score += addScore;
                  
                  scoreText.innerText =
                      score;
                  
                  feedback.innerText =
                      resultText;
                  
                  feedback.style.opacity =
                      "1";
   
   
               /* ----------------------------------------------
                  产生烟花
                  ---------------------------------------------- */
   
               createFireworks(
                   x,
                   y,
                   pointColor
               );
   
   
               /* ----------------------------------------------
                  点击瞬间缩小
                  ---------------------------------------------- */
   
               point.style.transform =
                   "translate(-50%, -50%) scale(1.8)";
   
               point.style.opacity =
                   "0";
   
   
               setTimeout(() => {
   
                   point.remove();
   
               }, 180);
   
   
               /* ----------------------------------------------
                  PERFECT 消失
                  ---------------------------------------------- */
   
               setTimeout(() => {
   
                   feedback.style.opacity =
                       "0";
   
               }, 500);
   
           }
       );
   
   
       /* ========================================================
          加入游戏区域
          ======================================================== */
   
          document.body.appendChild(point);
   
   
       /* ========================================================
          如果没有点击，自动消失
          ======================================================== */
   
       setTimeout(() => {
   
           if (point.parentNode) {
   
               point.style.opacity =
                   "0";
   
               point.style.transform =
                   "translate(-50%, -50%) scale(0.4)";
   
               setTimeout(() => {
   
                   if (point.parentNode) {
                       point.remove();
                   }
   
               }, 250);
   
           }
   
       }, 2200);
   
   }
   
   
   /* ============================================================
      音乐节奏检测
      ============================================================ */
   
   function detectMusicBeat() {
   
       if (!analyser) return;
   
       const data =
           new Uint8Array(
               analyser.frequencyBinCount
           );
   
       analyser.getByteFrequencyData(data);
   
   
       /* --------------------------------------------------------
          计算当前音乐能量
          -------------------------------------------------------- */
   
       let sum = 0;
   
       for (
           let i = 0;
           i < data.length;
           i++
       ) {
   
           sum += data[i];
   
       }
   
       const average =
           sum / data.length;
   
   
       const energy =
           average / 255;
   
   
       /* --------------------------------------------------------
          让音乐点的大小随着音乐变化
          -------------------------------------------------------- */
   
       const points =
           document.querySelectorAll(
               ".rhythm-point"
           );
   
       points.forEach((point) => {
   
           const scale =
               0.85 +
               energy * 0.35;
   
           point.style.setProperty(
               "--beat-scale",
               scale
           );
   
       });
   
   
       /* --------------------------------------------------------
          检测突然增强的声音
          -------------------------------------------------------- */
   
       const energyIncrease =
           energy - previousEnergy;
   
   
       const now =
           performance.now();
   
   
       /*
          这里控制“节奏点出现”的敏感程度
   
          energy > 0.18
          = 音乐整体有一定音量
   
          energyIncrease > 0.025
          = 音乐突然增强
   
          180ms
          = 防止一瞬间连续生成很多点
       */
   
          if (
            energy > 0.20 &&
            energyIncrease > 0.04 &&
            now - lastBeat > 800
        ) {
        
            lastBeat = now;
        
            createRhythmPoint();
        
        }
   
   
       previousEnergy =
           energy;
   
   }
   
   
   /* ============================================================
      节奏检测动画循环
      ============================================================ */
   
   let rhythmAnimationFrame = null;
   
   
   function rhythmLoop() {
   
       if (!music.paused) {
   
           detectMusicBeat();
   
           rhythmAnimationFrame =
               requestAnimationFrame(
                   rhythmLoop
               );
   
       } else {
   
           rhythmAnimationFrame =
               null;
   
       }
   
   }
   
   
   /* ============================================================
      开始节奏
      ============================================================ */
   
   function startRhythm() {
   
       setupAudioAnalyzer();
   
   
       if (
           audioContext &&
           audioContext.state === "suspended"
       ) {
   
           audioContext.resume();
   
       }
   
   
       /*
          音乐刚开始的时候先出现一个
          不需要等待节奏检测
       */
   
       createRhythmPoint();
   
   
       if (!rhythmAnimationFrame) {
   
           rhythmLoop();
   
       }
   
   }
   
   
   /* ============================================================
      停止节奏
      ============================================================ */
   
   function stopRhythm() {
   
       if (rhythmAnimationFrame) {
   
           cancelAnimationFrame(
               rhythmAnimationFrame
           );
   
           rhythmAnimationFrame =
               null;
   
       }
   
   }
   
   
   /* ============================================================
      烟花
      ============================================================ */
   
   function createFireworks(
       x,
       y,
       color
   ) {
   
       const particleCount =
           75;
   
   
       for (
           let i = 0;
           i < particleCount;
           i++
       ) {
   
           const angle =
               Math.random() *
               Math.PI *
               2;
   
   
           const speed =
               1.5 +
               Math.random() * 5.5;
   
   
           particles.push({
   
               x: x,
   
               y: y,
   
               vx:
                   Math.cos(angle) *
                   speed,
   
               vy:
                   Math.sin(angle) *
                   speed,
   
               life: 1,
   
               decay:
                   0.012 +
                   Math.random() * 0.018,
   
               size:
                   1 +
                   Math.random() * 2.5,
   
               color:
                   color
   
           });
   
       }
   
   
       /*
          中心闪光
       */
   
       particles.push({
   
           x: x,
   
           y: y,
   
           vx: 0,
   
           vy: 0,
   
           life: 1,
   
           decay: 0.04,
   
           size: 7,
   
           color: "#ffffff"
   
       });
   
   }
   
   
   /* ============================================================
      烟花动画
      ============================================================ */
   
   function animateFireworks() {
   
       if (!fireCtx) return;
   
   
       fireCtx.clearRect(
           0,
           0,
           window.innerWidth,
           window.innerHeight
       );
   
   
       particles =
           particles.filter(
               particle =>
                   particle.life > 0
           );
   
   
       particles.forEach(
           particle => {
   
               const oldX =
                   particle.x;
   
               const oldY =
                   particle.y;
   
   
               /* ------------------------------------------------
                  粒子移动
                  ------------------------------------------------ */
   
               particle.x +=
                   particle.vx;
   
               particle.y +=
                   particle.vy;
   
   
               /* ------------------------------------------------
                  重力
                  ------------------------------------------------ */
   
               particle.vy +=
                   0.035;
   
   
               /* ------------------------------------------------
                  空气阻力
                  ------------------------------------------------ */
   
               particle.vx *=
                   0.985;
   
               particle.vy *=
                   0.985;
   
   
               /* ------------------------------------------------
                  生命周期
                  ------------------------------------------------ */
   
               particle.life -=
                   particle.decay;
   
   
               /* ------------------------------------------------
                  绘制
                  ------------------------------------------------ */
   
               fireCtx.save();
   
               fireCtx.globalAlpha =
                   particle.life;
   
   
               fireCtx.strokeStyle =
                   particle.color;
   
               fireCtx.fillStyle =
                   particle.color;
   
   
               fireCtx.lineWidth =
                   particle.size;
   
   
               fireCtx.shadowBlur =
                   14;
   
               fireCtx.shadowColor =
                   particle.color;
   
   
               /* ------------------------------------------------
                  粒子拖尾
                  ------------------------------------------------ */
   
               fireCtx.beginPath();
   
               fireCtx.moveTo(
                   oldX,
                   oldY
               );
   
               fireCtx.lineTo(
                   particle.x,
                   particle.y
               );
   
               fireCtx.stroke();
   
   
               /* ------------------------------------------------
                  粒子亮点
                  ------------------------------------------------ */
   
               fireCtx.beginPath();
   
               fireCtx.arc(
                   particle.x,
                   particle.y,
                   particle.size * 1.15,
                   0,
                   Math.PI * 2
               );
   
               fireCtx.fill();
   
   
               fireCtx.restore();
   
           }
       );
   
   
       requestAnimationFrame(
           animateFireworks
       );
   
   }
   
   
   animateFireworks();
   /* =================================
   页面跳转
================================= */

const homePage =
document.getElementById("home-page");

const songDetailPage =
document.getElementById("song-detail-page");

const lastFestivalSong =
document.getElementById("last-festival-song");
console.log("最后的庆典按钮找到啦：", lastFestivalSong);

const detailBack =
document.getElementById("detail-back");

const detailPlay =
document.getElementById("detail-play");


/* 点击《最后的庆典》 */

lastFestivalSong.addEventListener(
"click",
() => {

    homePage.style.display = "none";

    songDetailPage.style.display = "block";

}
);


/* 返回首页 */

detailBack.addEventListener(
"click",
() => {

    songDetailPage.style.display = "none";

    homePage.style.display = "block";

}
);


/* 点击详情页播放 */

detailPlay.addEventListener(
"click",
() => {

    songDetailPage.style.display = "none";

    /*
     * 调用你原来已经做好的播放按钮
     */
    if (playButton) {
        playButton.click();
    }

}
);
// ================================
// Play★：进入 AI 音乐互动模式
// ================================

const enterGame = document.getElementById("enterGame");
const musicPage = document.getElementById("musicPage");

if (enterGame && musicPage) {

    enterGame.addEventListener("click", () => {

        // 从普通歌词模式切换到互动模式
        musicPage.classList.remove("normal-mode");
        musicPage.classList.add("interaction-mode");

        // 开始生成节奏点
        if (typeof startRhythm === "function") {
            startRhythm();
        }

    });

}