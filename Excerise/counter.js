var counter=(function(){
    var count=0;
    var inc=function(x){
        count+=x;
        console.log(count);
    }
    return {
        inc:inc
    }
});

var count1=counter();
count1.inc(10);
count1.inc(10);