const app=document.getElementById("app");
const pink="#FF5C93";
const questions=[
{q:"Kalau seseorang tiba-tiba chat kamu jam 23:47... 🌙",o:["A. Langsung tidur 😴","B. Balas besok aja","C. Tergantung siapa orangnya 👀"],c:2,p:10,w:"Hmm... jawabannya bukan itu. 👀"},
{q:"Kalau ada seseorang yang bisa bikin kamu senyum tanpa alasan...",o:["A. Pura-pura biasa aja 😌","B. Senyum balik mungkin? ♡","C. Block aja biar aman 💀"],c:1,p:10,w:"Yah... masa senyum aja nggak boleh? 😭"},
{q:"Kalau kamu mendapatkan surat seperti ini... 💌",o:["A. Baca sampai selesai","B. Simpan dulu","C. Langsung hapus 😭"],c:0,p:10,w:"HEI 😭 masa suratnya langsung dihapus."},
{q:'Kalau seseorang bilang: "Aku senang ngobrol sama kamu."',o:['A. "Oh." 😐','B. "Aku juga." ♡',"C. Ganti topik"],c:1,p:15,w:"Jawaban itu agak dingin ya... 😭"},
{q:"Jujur ya... Kalau ada seseorang yang bikin hari kamu terasa lebih menyenangkan...",o:["A. Mungkin aku suka ngobrol sama dia","B. Nggak tahu 🤨","C. Itu cuma kebetulan"],c:0,p:15,w:"Hmmm... kayaknya kamu belum jujur deh. 👀"},
{q:'PERTANYAAN JEBAKAN 😈 Kalau seseorang bilang: "Aku kangen..."',o:['A. "Aku juga..." 🥺','B. "Kenapa kangen?" 👀','C. "Yaudah." 😐'],c:0,p:15,w:"Aduh... tega banget jawab begitu 😭"},
{q:"FINAL QUESTION ❤️ Kalau ternyata semua ini dibuat cuma untuk membuatmu tersenyum...",o:["A. Senyum sedikit ♡","B. Senyum banyak 🥹","C. Nggak senyum sama sekali 😐"],c:1,p:25,w:"Masa nggak senyum sama sekali? 😭"}
];
let qi=0,score=0,combo=0;

function bg(){return `<div class="stars"></div><div class="heart-bg left">♡</div><div class="heart-bg right">♡</div>`}
function screen(inner){app.innerHTML=`<main class="screen">${bg()}<section class="content">${inner}</section></main>`}
function button(t,fn,cls=""){return `<button class="btn ${cls}" onclick="${fn}">${t}</button>`}

function cover(){
screen(`<div class="top">✦ SOMETHING I MADE FOR YOU ✦</div>
<div class="h1">A LITTLE</div><div class="h2">LOVE LETTER</div>
<div class="sub">but there's something else inside...</div>
<div class="envelope"><div class="flap"></div><div class="env-heart">♡</div><div class="env-text">for someone special</div></div>
<div class="sub">open it when you're ready ♡</div>
<div class="bottom-btn">${button("OPEN LETTER  →","letter()")}</div>`)}
function letter(){
screen(`<div class="letter-title">A LITTLE LETTER</div><div class="dear">Dear You,</div>
<div class="card">Aku sebenarnya nggak tahu harus mulai dari mana.<br><br>
Jadi aku bikin sesuatu yang sedikit berbeda.<br>
Bukan karena aku punya kata-kata yang sempurna,<br>
tapi karena kadang ada hal yang lebih mudah<br>
disampaikan lewat sesuatu yang sederhana.<br><br>
Kalau hari ini kamu sedang capek,<br>
semoga setidaknya halaman kecil ini<br>
bisa bikin kamu tersenyum sebentar. ♡<br><br>
Dan kalau kamu masih mau lanjut...<br>
ada satu hal kecil lagi yang sudah aku siapkan.</div>
<div class="bottom-btn">${button("WAIT... THERE'S MORE  →","intro()")}</div>`)}
function intro(){
screen(`<div class="quiz-intro"><h1>WAIT.</h1><h2>You thought that was all?</h2><p>I prepared a tiny quiz for you. 😈</p><div class="seven">7 questions.</div><p>Some are easy.</p><p style="color:white;font-weight:700">Some are definitely traps. 👀</p><div style="margin-top:45px">${button("I'M READY 😈","start()")}</div></div>`)}
function start(){qi=0;score=0;combo=0;question()}
function question(){
let d=questions[qi], pct=((qi+1)/questions.length)*100;
screen(`<div class="question-top">QUESTION ${qi+1} / ${questions.length}</div><div class="score">Score: ${score}</div>
<div class="progress"><div style="width:${pct}%"></div></div>
<div class="qcard">${d.q}</div><div class="options">${d.o.map((x,i)=>`<button class="option" onclick="answer(${i})">${x}</button>`).join("")}</div>
${combo?`<div class="combo">COMBO × ${combo} 🔥</div>`:""}`)}
function answer(i){
let d=questions[qi];
if(i===d.c){score+=d.p;combo++;correct()}else{combo=0;wrong()}
}
function correct(){
screen(`<div class="feedback"><div class="icon">✓</div><h1>✓ JAWABAN BENAR ♡</h1><p>${combo>=3?`COMBO × ${combo} 🔥<br>Oke... kamu mulai mencurigakan. 👀`:"Oke... kamu boleh lanjut. 👀"}</p></div>`);
setTimeout(()=>{qi++;qi>=questions.length?result():question()},1200)
}
function wrong(){
let d=questions[qi];
screen(`<div class="feedback wrong"><div class="icon">✕</div><h1>✦ JAWABAN SALAH ✦</h1><p>${d.w}</p><div class="over">QUIZ OVER 😭</div><div class="two">${button("TRY AGAIN ↻","start()")}${button("CLOSE ×","close()","close")}</div></div>`)
}
function result(){
let rank=score>=85?"SUSPICIOUSLY CUTE 💘":score>=65?"VERY SUSPICIOUS 👀":score>=45?"CUTE ENOUGH 😭":"THE PLOT TWIST 💀";
screen(`<div class="result"><div class="h2">YOU MADE IT. ♡</div><div class="gray">Quiz completed.</div><div class="big">${score}</div><div class="points">POINTS</div><div class="rank">${rank}</div><div class="gray">You answered everything correctly.</div><div style="margin-top:55px">${button("REVEAL THE LAST PAGE  →","final()")}</div></div>`)
}
function final(){
screen(`<div class="final"><div class="glow">♡</div><h1>ONE LAST THING...</h1>
<p>The quiz was never really about</p><p>getting the answers right.</p><p class="highlight">It was just a tiny excuse</p><p class="highlight">to make you smile for a while. ♡</p>
<p style="margin-top:28px">Maybe there's a song that reminds you of this.</p>
<div class="song-card"><div class="song-title">🎧 YOUR FAVORITE SONG</div><div class="song-row"><input id="song" placeholder="Type a song you love..." onkeydown="if(event.key==='Enter')spotify()"><button class="btn spotify" onclick="spotify()">🎧</button></div><div id="status" class="status">Type the song, then press 🎧</div></div>
<div class="thank">Thank you for playing. ♡</div><button class="btn close" onclick="close()">CLOSE LETTER ×</button></div>`)
}
function spotify(){
let el=document.getElementById("song"),status=document.getElementById("status"),song=el.value.trim();
if(!song){status.textContent="Tulis nama lagunya dulu ya ♡";status.style.color="#FF6D91";return}
window.open("https://open.spotify.com/search/"+encodeURIComponent(song),"_blank");
status.textContent="Opening Spotify... 🎧♡";status.style.color="#FF9FBC"
}
function close(){document.body.innerHTML="<div style='height:100vh;background:#08070D;color:#FF9FBC;display:grid;place-items:center;font:700 24px Segoe UI'>♡ Thank you ♡</div>"}
cover();
