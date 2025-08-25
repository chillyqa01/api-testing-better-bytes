let package = "free";
switch (package) {
    case "free":
        console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
    case "premium":
        console.log("Không quảng cáo, nghe nhạc offline!");
    case "family":
        console.log("Gói dùng cho nhiều thành viên!");
    case "student":
        console.log("Ưu đãi dành riêng cho sinh viên!");
    break;
    default:
        console.log("Không có thông tin");

};

let package = "free";

if (result === "free") 
    {
  console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
} else if (result === "premium") 
    {
  console.log("Không quảng cáo, nghe nhạc offline!");
} else if (result === "family") 
    {
  console.log("Gói dùng cho nhiều thành viên!");
} else if (result === "student") 
    {
  console.log("Ưu đãi dành riêng cho sinh viên!");
} else 
    {
  console.log("Kết quả không hợp lệ");
}