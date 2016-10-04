function Course(coursename){
    this.coursename=coursename;
    console.log("Function Constructor called");
}
Course.prototype.greeting=function(){
    return "Welcome "+this.coursename;
}

var wap=new Course("wap");
console.log(wap);
console.log(wap.__proto__)
console.log(wap instanceof Course)
console.log(Course.prototype.greeting)
console.log(wap.greeting())