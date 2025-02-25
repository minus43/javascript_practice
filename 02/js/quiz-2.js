// 1inch = 2.54cm
let inch = parseFloat(prompt("인치를 입력하세요."));
let cm;

cm = (inch / 2.54).toFixed(1);

alert(`${inch}inch는 ${cm}cm입니다.`);