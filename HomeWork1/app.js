var library = [ 
   { prof: 'Asaad Saad', course: 'Web Application ProgrammingB', courseID: 'CS452'},
    { prof: 'Asaad Saad', course: 'Web Application ProgrammingA', courseID: 'CS452'},
   { prof: 'Rakesh Shrestha', course: 'Web Application Architecture', courseID: 'CS545'},
   { prof: 'Steve Nolle', course: 'Software Engineering', courseID: 'CS425'}
   ];

library.sort(function(x,y){
    if(x.course>y.course) return 1;
    else if(x.course=y.course) return 0;
    else return -1;
})

console.log(library);
   /*
	Expected result :
	[
	{ prof: 'Steve Nolle', course: 'Software Engineering', courseID: 'CS425'}, 
	{ prof: 'Rakesh Shrestha', course: 'Web Application Architecture', courseID: 'CS545'},
	{ prof: 'Asaad Saad', course: 'Web Application Programming', courseID: 'CS452'}
	]
	*/