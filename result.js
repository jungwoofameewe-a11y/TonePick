const params = new URLSearchParams(location.search);
const type = params.get("type") || "ppt";
const mood = params.get("mood") || "trust";

const palettes = {
  ppt: {
    trust: [
      ["#1F3A5F", "#4A90E2", "#F5F7FA"],
      ["#243A5E", "#5B8DEF", "#FFFFFF"],
      ["#2C3E50", "#3498DB", "#ECF0F1"]
    ],
    persuade: [
      ["#8B0000", "#FF6B6B", "#FFF5F5"],
      ["#B22222", "#FF4C4C", "#FFFFFF"]
    ],
    info: [
      ["#2E4057", "#66A5AD", "#F0F4F8"],
      ["#34495E", "#5DADE2", "#ECF0F1"]
    ]
  }
};

// 🔐 안전 처리 (여기가 핵심)
let candidates =
  palettes[type] && palettes[type][mood]
    ? palettes[type][mood]
    : palettes.ppt.trust;

// 🎲 랜덤 선택
const selected =
  candidates[Math.floor(Math.random() * candidates.length)];

// ⏳ 로딩 후 결과 표시
setTimeout(() => {
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  if (!loading || !result) return;

  loading.classList.add("hidden");
  result.classList.remove("hidden");

  document.getElementById("c1").style.background = selected[0];
  document.getElementById("c2").style.background = selected[1];
  document.getElementById("c3").style.background = selected[2];
}, 1500);