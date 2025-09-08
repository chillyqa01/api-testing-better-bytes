let mode = "dark";
switch (mode) {
    case "dark":
        console.log("Chế độ tối đã được bật!");
        break;
    case "light":
        console.log("Chế độ sáng đã được bật!");
        break;
    break;
    default:
        console.log("Dữ liệu không hợp lệ");

};


if (mode === "dark") {
  console.log("Chế độ tối đã được bật!");
} else if (mode === "light") {
  console.log("Chế độ sáng đã được bật!");
} else {
  console.log("Dữ liệu không hợp lệ");
}