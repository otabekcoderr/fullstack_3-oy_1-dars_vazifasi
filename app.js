import { users } from "./users.js";

//Create

// const createUser = function (user) {
//   let last_firstName = false;
//   let age_right = false;
//   let email_right = false;
//   let role_right = false;
//   let balance_right = false;
//   let { firstName, lastName, age, email, role, balance } = user;

//   // Ism va familiya tekshiruvchi agent001
//   if (firstName.trim() && lastName.trim()) {
//     last_firstName = true;
//   } else {
//     return "Ism va Familiyani to'gri kiriting";
//   }
//   if (age >= 18) {
//     age_right = true;
//   } else {
//     ("Yoshingiz yetarli emas");
//   }

//   //email tekshiruvchi agent002
//   if (users.some((item) => item.email === email)) {
//     return "Bunday email oldin foydalanilgan";
//   }
//   if (email.includes("@") && email.endsWith(".com")) {
//     email_right = true;
//   } else {
//     return "Emailda '@' bo'lishi va '.com' bilan tugashi kerak";
//   }

//   //role tekshiruvchi agent003
//   if (
//     (role != undefined && role == "admin") ||
//     role == "moderator" ||
//     role == "user"
//   ) {
//     role_right = true;
//   } else {
//     return "Tasdiqlanmagan maqom";
//   }

//   //balans tekshiruvchi agent004
//   if (balance >= 0) {
//     balance_right = true;
//   } else {
//     ("balans manfiy bo'lmasiligi kerak");
//   }

//   //faollik
//   if (!user.isActive) user.isActive = true;

//   //tasdiqlovchi agent005
//   if (
//     last_firstName &&
//     age_right &&
//     email_right &&
//     balance_right &&
//     role_right
//   ) {
//     let newId = users.reduce((max, item) => (item.id > max ? item.id : max), 0);
//     user.id = newId + 1;
//     users.push(user);
//     return "Muvaffaqiyatli qo'shildi";
//   } else {
//     return "Tasdiqlanmadi";
//   }
// };

// console.log(
//   createUser({
//     firstName: "Dilshod",
//     lastName: "Akbarov",
//     age: 20,
//     email: "dilshod@gmail.com",
//     role: "moderator",
//     balance: 12000,
//   }),
// );

// console.log(users);

//========================================================================================

//Read

// 2-masala
// function readUser(users) {
//   for (let i of users) {
//     console.log(`ID: ${i.id}
// Name: ${i.firstName} ${i.lastName}
// Email: ${i.email}
// Role: ${i.role}
// Status: ${i.isActive?"Active":"Inactive"}
// Balance: $${i.balance}
// ----------------------`);
//   }
// }

// readUser(users);

//------------------------------------------
//3-masala

// function findUser(id) {
//   let find_user = users.find((item) => item.id == id);
//   if (find_user !== undefined) {
//     return find_user;
//   } else {
//     return "User not found";
//   }
// }
// console.log(findUser(3));
// console.log("---------------------");

// console.log(findUser(10));

//------------------------------------------

// 4-masala

// function roleFind(role) {
//   let find_role = users.filter((item) => item.role == role);
//   return find_role;
// }

// console.log(roleFind("admin"));

//========================================================================

//Update

//5-masala

// function updateUser(id, updateData) {
//   let find_id = users.find((item) => item.id == id);
//   if (!find_id) {
//     return "User not found";
//   }

//   let { age, email, role, balance } = updateData;
//   let togrimi = true;

//   //id tekshiruvchi
//   if (updateData.id !== undefined) {
//     togrimi = false;
//     return "Idni o'zgartirish mumkin emas";
//   }

//   // Yosh tekshiruvchi
//   if (age != undefined && age < 18) {
//     togrimi = false;
//     return "Yoshingiz yetarli emas";
//   }
//   if (balance != undefined && balance < 0) {
//     togrimi = false;
//     return "Balans manfiy bo'lmasin";
//   }

//   //role tekshiruvchi
//   if (
//     (role != undefined && role == "user") ||
//     role == "admin" ||
//     role == "moderator"
//   ) {
//   } else {
//     return "Bunday role tasdiqlanmagan";
//   }

//   //email tekshiruvchi
//   if (email != undefined) {
//     for (let i of users) {
//       if (i.id !== id && i.email == email) {
//         return "Bu email oldin foydalanilgan";
//       }
//     }
//   }

//   //tasdiqlovchi
//   if (togrimi == true) {
//     Object.assign(find_id, updateData);
//     return users;
//   }
// }

// console.log(
//   updateUser(1, {
//     role: "admin",
//   }),
// );

// =======================================================

//Delete

// //6-masala

// function deleteUser(id) {
//   let index = users.findIndex((item) => item.id == id);

//   if (index === -1) {
//     return "User not found";
//   } else if (users[index].role == "admin") {
//     return "Adminni o'chirish mumkin emas";
//   }

//   users.splice(index, 1);
//   return users;
// }

// console.log(deleteUser(2));
