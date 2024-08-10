const coding =["js","rb","python","java","cpp"]
// conding.forEach( function (item) {
//     console.log(item);
// } )

// conding.forEach((item) => { console.log(item)})
function printMe(item){
    // console.log(item)
    ;
}

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,arr,index);
// })

const myCoding =[
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})