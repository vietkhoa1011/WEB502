"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Tạo danh sách sản phẩm (ít nhất 5 phần tử)
const products = [
    { id: 1, name: "Laptop Dell", price: 15000000, category: "Điện tử" },
    { id: 2, name: "Điện thoại iPhone", price: 25000000, category: "Điện tử" },
    { id: 3, name: "Bánh quy", price: 50000, category: "Thực phẩm" },
    { id: 4, name: "Sữa tươi", price: 30000, category: "Thực phẩm" },
    { id: 5, name: "Tủ lạnh Samsung", price: 12000000, category: "Điện tử" },
];
// 3. Hàm filterByCategory
function filterByCategory(list, category) {
    return list.filter((p) => p.category === category);
}
// 4. Hàm calculateTotalPrice
function calculateTotalPrice(list) {
    return list.reduce((sum, p) => sum + p.price, 0);
}
// 5. Hàm findMinMax
function findMinMax(list) {
    if (list.length === 0) {
        throw new Error("Danh sách rỗng");
    }
    // Dùng non-null assertion (!) để khẳng định list[0] chắc chắn tồn tại
    let min = list[0];
    let max = list[0];
    for (const p of list) {
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min, max };
}
// ==================== TEST ====================
// Lọc sản phẩm theo danh mục "Điện tử"
console.log("Danh mục Điện tử:", filterByCategory(products, "Điện tử"));
// Tổng giá tất cả sản phẩm
console.log("Tổng giá:", calculateTotalPrice(products));
// Tìm sản phẩm giá nhỏ nhất và lớn nhất
const { min, max } = findMinMax(products);
console.log("Rẻ nhất:", min);
console.log("Đắt nhất:", max);
