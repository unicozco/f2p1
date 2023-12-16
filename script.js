let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(item=>item.profession=="developer"?console.log(item));
  }
  
  // 2. Add Data
  function addData() {
    let f_name = prompt("Enter your Name");
    let f_age = prompt("Enter your age");
    let f_profession = prompt("Enter your profession");
    data.push({
        f_name,
        age,
        profession,

    });
    console.log("Here is the updated data",data);
  }
  
  // 3. Remove Admins
  function removeAdmin() { 
    data=data.filter(item=>item.profession!=="admin");
    console.log("Here is the updated data",data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() { 
    let data2 = [
        { name: "james", age: 24, profession: "developer" },
        { name: "om", age: 27, profession: "admin" }, 
    ]; 
    let combinedArry=data.concat(data2);
    console.log("Here is the concantenated arry",combinedArry);
  }
  
  // 5. Average Age
  function averageAge() { 
    let sum=0;
    data.forEach(item=> sum+=item.age);
    console.log(sum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for (let i=0;i<data.length;i++){
        if(data[i].age25){
            console.log("Person grater than 25 exists!");
            break;
        }}
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Profession Count
  function getTotalProfessions() {}