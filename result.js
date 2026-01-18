const palettes = {
  ppt: {
    trust: [
      ["#1F3A5F", "#4A90E2", "#F5F7FA"],
      ["#243A5E", "#5B8DEF", "#FFFFFF"],
      ["#2C3E50", "#3498DB", "#ECF0F1"]
    ]
  }
};

// URL 정보
const params = new URLSearchParams(location.search);
const type = params.get("type") || "ppt";
const mood = params.get("mood") || "trust";

// 랜덤 팔레트 선택
const candidates = palettes[type][mood];
const selected = candidates[Math.floor(Math.random() * candidates.length)];

// ⏳ 로딩 후 결과 표시
setTimeout(() => {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("c1").style.background = selected[0];
  document.getElementById("c2").style.background = selected[1];
  document.getElementById("c3").style.background = selected[2];
}, 1500); // 1.5초 ← 딱 좋음
