// //#1//
// let names = [
//     {name: 'Artem', balance: 20},
//     {name: 'Vlad', balance: 32},
//     {name: 'Egor', balance: 13},
//     {name: 'EgKur', balance: 5},
// ];
// let sumBalance = names.reduce((balan, nam) => balan + nam.balance, 0);
// console.log(sumBalance);

//#2//
//  let obj = [
//      {name: 'Artem', balance: 20, friend: 'Egor'},
//      {name: 'Vlad', balance: 32, friend: 'Egor'},
//      {name: 'Egor', balance: 13, friend: 'Vlad'},
//      {name: 'EgKur', balance: 5, friend: 'Artem'},
//      {name: 'EgKu', balance: 5, friend: 'Egor'},
//  ];
//  function arrNameForFriend(friend) {
//     return obj.filter(user => user.friend === friend);
// }
// let arrNames = arrNameForFriend("Egor");
// console.log("Масив користувачів :", arrNames);

//#3//
//   let obj = [
//       {name: 'Artem', friends: 5},
//       {name: 'Vlad', friends: 100},
//       {name: 'Egor', friends: 10},
//       {name: 'EgKur', friends: 200},
//       {name: 'EgKu', friends: 1000},
// ];
// let objSorted = obj.sort((o, b) => b.friends - o.friends);
// console.log(objSorted);

//#4//
// let users = [
//     { name: 'Artem', skills: ['JavaScript', 'HTML', 'CSS'] },
//     { name: 'Vlad', skills: ['JavaScript', 'Python'] },
//     { name: 'Egor', skills: ['HTML', 'CSS', 'Ruby'] },
//     { name: 'EgKur', skills: ['JavaScript', 'Java', 'C++'] },
//     { name: 'EgKu', skills: ['Python', 'C#', 'Java'] },
//   ];
//   let allSkills = users.reduce((skills, user) => {
//     user.skills.forEach(skill => {
//       if (!skills.includes(skill)) {
//         skills.push(skill);
//       }
//     });
//     return skills;
//   }, []);
//   allSkills.sort();

//   console.log(allSkills);
  
//#CodeWars//

  
   