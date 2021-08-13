let products = [
    {
        id: 1,
        Name: "Xiaomi portable charger 20000mah",
        Brand: "Xiaomi",
        Price: 428,
        Color: "White",
        Category: "Charger",
    },
    {
        id: 2,
        Name: "VSmart Active 1",
        Brand: "VSmart",
        Price: 5487,
        Color: "Black",
        Category: "Phone",
    },
    {
        id: 3,
        Name: "IPhone X",
        Brand: "Apple",
        Price: 21490,
        Color: "Gray",
        Category: "Phone",
    },
    {
        id: 4,
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: 8490,
        Color: "Blue",
        Category: "Phone",
    },
];

//Ý 1
// for (let i = 0; i < products.length; i++) {
//     console.table(products[i]);
// }

//Ý 2
// let a = Number(prompt("Vui lòng nhập id muốn in ra: "))
// if (products.length < a)
//     console.log(`Không có sản phẩm bạn muốn tìm`);
// else
//     console.table(products[a - 1]);

//Ý 3
// let a = String(prompt("Vui lòng nhập loại hàng muốn in ra: "))
// let flat = 0;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].Category == a) {
//         console.table(products[i]);
//         flat = 1;
//     }
// }
// if (!flat)
//     console.log(`Không có sản phẩm bạn muốn tìm`);
// Ý 4
for (let i = 0; i < products.length; i++) {
    let a = String(prompt(`Vui lòng nhập nhà cung cấp cho sản phẩm ${i + 1}:  `))
    products[i].Providers = `${a}`;
}
for (let i = 0; i < products.length; i++) {
    console.table(products[i]);
}
//Ý 5
let a = String(prompt("Vui lòng nhập nhà cung cấp muốn in ra: "))
let flat = 0;
for (let i = 0; i < products.length; i++) {
    if (products[i].Providers == a) {
        console.table(products[i]);
        flat = 1;
    }
}
if (!flat)
    console.log(`Không có sản phẩm bạn muốn tìm`);
