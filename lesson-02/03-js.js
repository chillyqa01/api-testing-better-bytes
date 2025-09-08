let streaming = "netflix";
switch (streaming) {
    case "netflix":
        console.log("Bạn có thể xem 'Stranger Things'!");
        break;
    case "disney+":
        console.log("Thử ngay 'Loki' trên Disney+!");
        break;
    case "hbo":
        console.log("Xem 'Game of Thrones' ngay nào!");
        break;
    case "prime":
        console.log("Bạn có thể xem 'The Boys'!");
    break;
    default:
        console.log("Không có kết quả phù hợp");

};


if (streaming === "netflix") {
  console.log("Bạn có thể xem 'Stranger Things'!");
} else if (streaming === "disney+") {
  console.log("Thử ngay 'Loki' trên Disney+!");
} else if (streaming === "hbo") {
  console.log("Xem 'Game of Thrones' ngay nào!");
} else if (streaming === "prime") {
  console.log("Bạn có thể xem 'The Boys'!");
} else {
  console.log("Kết quả không hợp lệ!");
}