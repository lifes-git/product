// 점심 메뉴 추천 로직
const lunchMenus = [
  "김치찌개", "된장찌개", "제육볶음", "돈까스", "초밥", "파스타", "피자", "햄버거", "샌드위치", "샐러드", "쌀국수", "마라탕",
];

const recommendButton = document.getElementById("recommend-button");
const menuRecommendation = document.getElementById("menu-recommendation");

recommendButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * lunchMenus.length);
  const recommendedMenu = lunchMenus[randomIndex];
  menuRecommendation.textContent = `오늘의 추천 메뉴는 ${recommendedMenu} 입니다!`;
});

// 점심값 몰빵 룰렛 게임 로직
const participantNameInput = document.getElementById("participant-name");
const addParticipantButton = document.getElementById("add-participant-button");
const participantList = document.getElementById("participant-list");
const spinRouletteButton = document.getElementById("spin-roulette-button");
const rouletteResult = document.getElementById("roulette-result");

let participants = [];

addParticipantButton.addEventListener("click", () => {
  const name = participantNameInput.value.trim();
  if (name) {
    participants.push(name);
    updateParticipantList();
    participantNameInput.value = "";
    participantNameInput.focus();
  }
});

participantNameInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addParticipantButton.click();
  }
});

function updateParticipantList() {
  participantList.innerHTML = "";
  participants.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = name;
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.onclick = () => {
      participants.splice(index, 1);
      updateParticipantList();
    };
    li.appendChild(removeButton);
    participantList.appendChild(li);
  });
}

spinRouletteButton.addEventListener("click", () => {
  if (participants.length < 2) {
    rouletteResult.textContent = "참여자가 2명 이상이어야 합니다.";
    return;
  }

  rouletteResult.textContent = "룰렛이 돌아갑니다...";
  let spinCount = 0;
  const spinInterval = setInterval(() => {
    spinCount++;
    const randomIndex = Math.floor(Math.random() * participants.length);
    const randomName = participants[randomIndex];
    rouletteResult.innerHTML = `<span class="spinning">${randomName}</span>`;
    if (spinCount > 20) { // 2초간 돌아가는 효과
      clearInterval(spinInterval);
      const winnerIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[winnerIndex];
      rouletteResult.innerHTML = `오늘 점심은 <span class="winner">${winner}</span>님이 쏘세요! 🥳`;
    }
  }, 100);
});