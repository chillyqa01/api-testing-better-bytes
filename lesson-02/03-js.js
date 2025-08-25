let streaming = "netflix";
switch (streaming) {
    case "netflix":
        console.log("Bạn có thể xem 'Stranger Things'!");
    case "disney+":
        console.log("Thử ngay 'Loki' trên Disney+!");
    case "hbo":
        console.log("Xem 'Game of Thrones' ngay nào!");
    case "prime":
        console.log("Bạn có thể xem 'The Boys'!");
    break;
    default:
        console.log("Không có kết quả phù hợp");

};

let streaming = "netflix";
if (streaming === "netflix") {
  console.log("Bạn có thể xem 'Stranger Things'!");
} else if (result === "disney+") {
  console.log("Thử ngay 'Loki' trên Disney+!");
} else if (result === "hbo") {
  console.log("Xem 'Game of Thrones' ngay nào!");
} else if (result === "prime") {
  console.log("Bạn có thể xem 'The Boys'!");
} else {
  console.log("Kết quả không hợp lệ!");
}