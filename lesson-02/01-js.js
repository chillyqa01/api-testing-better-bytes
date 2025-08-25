let result = "win";
switch (result) {
    case "win":
        console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
    case "draw":
        console.log("Trận đấu hòa, thật đáng tiếc!");
    case "lose":
        console.log("Thua rồi, nhưng đừng bỏ cuộc!");
    break;
    default:
        console.log("Kết quả không hợp lệ");

};

let result = "win";
if (result === "win") {
  console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (result === "draw") {
  console.log("Trận đấu hòa, thật đáng tiếc!");
} else if (result === "lose") {
  console.log("Thua rồi, nhưng đừng bỏ cuộc!");
} else {
  console.log("Kết quả không hợp lệ!");
}