"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Enum FuelType
var FuelType;
(function (FuelType) {
    FuelType["Xang"] = "X\u0103ng";
    FuelType["Dien"] = "\u0110i\u1EC7n";
})(FuelType || (FuelType = {}));
// 4. Hàm tính thời gian di chuyển
function calculateTravelTime(vehicle, distance) {
    if (vehicle.speed <= 0) {
        throw new Error(`Phương tiện ${vehicle.name} có vận tốc không hợp lệ`);
    }
    return distance / vehicle.speed; // công thức: thời gian = quãng đường / vận tốc
}
// 5. Danh sách các MotorizedVehicle
const vehicles = [
    {
        name: "Honda Air Blade",
        type: "Xe máy",
        speed: 60,
        fuelType: FuelType.Xang,
    },
    {
        name: "Toyota Vios",
        type: "Ô tô",
        speed: 90,
        fuelType: FuelType.Xang,
    },
    {
        name: "Tesla Model 3",
        type: "Ô tô",
        speed: 120,
        fuelType: FuelType.Dien,
    },
];
// 6. Tính thời gian di chuyển cho từng phương tiện với 100 km
const distance = 100;
vehicles.forEach((v) => {
    const time = calculateTravelTime(v, distance);
    console.log(`${v.name} (${v.type}, ${v.fuelType}) cần khoảng ${time.toFixed(2)} giờ để đi ${distance} km.`);
});
