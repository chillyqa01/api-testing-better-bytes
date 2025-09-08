let day = "blackfriday";
switch (day) {
    case "blackfriday":
        console.log("Giảm 50% toàn bộ sản phẩm!");
        break;
    case "cybermonday":
        console.log("Giảm 40% cho sản phẩm công nghệ!");
        break;
    case "christmas":
        console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
    break;
    default:
        console.log("Không có thông tin");

};



if (day === "blackfriday") 
    {
  console.log("Giảm 50% toàn bộ sản phẩm!");
} else if (day === "cybermonday") 
    {
  console.log("Giảm 40% cho sản phẩm công nghệ!");
} else if (day === "christmas") 
    {
  console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
} else 
    {
  console.log("Kết quả không hợp lệ");
}