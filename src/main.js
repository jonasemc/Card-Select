import "./css/index.css";

const ccBgColor01 = document.querySelector(
  ".cc-bg svg > g g:nth-child(1) path"
);
const ccBgColor02 = document.querySelector(
  ".cc-bg svg > g g:nth-child(2) path"
);

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

function SetCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    alelo: ["#006400", "#ADFF2F"],
    hipercard: ["#B22222", "#8B0000"],
    default: ["black", "grey"],
  };

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccLogo.setAttribute("src", `cc-${type}.svg`);
}

SetCardType("hipercard");
