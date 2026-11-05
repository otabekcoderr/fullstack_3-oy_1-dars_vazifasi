import { users } from "./users.js";

//Create

// const createUser = function (user) {
//   let last_firstName = false;
//   let age_right = false;
//   let email_right = false;
//   let role_right = false;
//   let balance_right = false;
//   let { firstName, lastName, age, email, role, balance } = user;

//   if (firstName.trim() && lastName.trim()) {
//     last_firstName = true;
//   } else {
//     return "Ism va Familiyani to'gri kiriting";
//   }
//   if (age >= 18) {
//     age_right = true;
//   } else {
//     return "Yoshingiz yetarli emas";
//   }
//   if (email.includes("@") && email.endsWith(".com")) {
//     email_right = true;
//   } else {
//     return "Emailda '@' bo'lishi va '.com' bilan tugashi kerak";
//   }

//   if (role == "admin" || role == "moderator" || role == "user") {
//     role_right = true;
//   } else {
//     return "Tasdiqlanmagan maqom";
//   }
//   if (balance >= 0) {
//     balance_right = true;
//   } else {
//     return "balans manfiy bo'lmasiligi kerak";
//   }

//   if (!user.isActive) {
//     user.isActive = true;
//   }

//   if ((last_firstName, age_right, email_right, balance_right, role_right)) {
//     user.id = users.length === 0 ? 1 : users.at(-1).id + 1;
//     users.push(user);
//     return "Muvaffaqiyatli qo'shildi";
//     return users;
//   } else {
//     return "Tasdiqlanmadi";
//   }
// };

// console.log(
//   createUser({
//     firstName: "Bobur",
//     lastName: "Hasanov",
//     age: 25,
//     email: "bobur@gmail.com",
//     role: "user",
//     balance: 0,
//   }),
// );

//========================================================================================

//Read

// 2-masala
// function readUser(users) {
//   for (let i of users) {
//     console.log(`ID: ${i.id}
// Name: ${i.firstName} ${i.lastName}
// Email: ${i.email}
// Role: ${i.role}
// Status: ${i.isActive}
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

function updateUser(id, updateData) {
  let find_id = users.find((item) => item.id == id);
  if (!find_id) {
    return "User not found";
  }

  let { age, email, role, balance } = updateData;

  let togrimi = true;
  if (age < 18) {
    togrimi = false;
    return "Yoshingiz yetarli emas";
  }
  if (balance < 0) {
    togrimi = false;
    return "Balans manfiy bo'lmasin";
  }

  if (updateData.role != undefined && updateData.role != "user") {
    togrimi = false;
    console.log(role);

    return "Bunday role tasdiqlanmagan";
  }
  if (users.email == email) {
    return "email mavjud";
  }
  if (togrimi == true) {
    Object.assign(find_id, updateData);
    return users;
  }
}

console.log(
  updateUser(2, {
    age: 22,
    balance: 800,
    email: "bobur@gmail.com",
  }),
);
