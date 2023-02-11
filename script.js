/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  console.log("Student print using map successfully");
   arr.map( function (value) {
        var b = Object.keys(value);
        b.map(function (d) {
            console.log(d , value[d]);
        })
    
    })
}

function PrintStudentsbyForEach() {
  
  //Write your code here , just console.log
   console.log("Student print using ForEach successfully");
   arr.forEach((value) => {
        var e = Object.keys(value);
        e.forEach((f) => {
            console.log(f , value[f]);
        })
    })
}

function addData() {
  //Write your code here, just console.log
  console.log(" New Student DATA ADDED  successfully");
  var h =  {id:4,name:"susan",age:"20", 
   marks:45}
   arr.push(h);
   var j = Object.keys(arr[3]);
   j.forEach((m) => {
    console.log(m , arr[3][m])
   })
}

function removeFailedStudent() {
  //Write your code here, just console.log
    console.log(" Failed student Removed successfully");
  var n = arr.length;
    for (var i=0;i<n;i++){
        if(arr[i].marks<50){
            arr.splice(i , 1);
        }
    }
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  var o = [
        { id: 7, name: "john", age: "18", marks: 08 },
        { id: 5, name: "jack", age: "20", marks: 55 },
        { id: 9, name: "karen", age: "19", marks: 58 },
      ];
     console.log(" Arrays concatinate Successfully");
      var r = arr.concat(o);
            console.log(r); 
}
