const lunchMenus = [
  "김치찌개",
  "된장찌개",
  "제육볶음",
  "돈까스",
  "초밥",
  "파스타",
  "피자",
  "햄버거",
  "샌드위치",
  "샐러드",
  "쌀국수",
  "마라탕",
];

const recommendButton = document.getElementById("recommend-button");
const menuRecommendation = document.getElementById("menu-recommendation");

recommendButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * lunchMenus.length);
  const recommendedMenu = lunchMenus[randomIndex];
  menuRecommendation.textContent = `오늘의 추천 메뉴는 ${recommendedMenu} 입니다!`;
});