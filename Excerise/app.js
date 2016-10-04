var a = {
    name:'',
    log:function(){
        var self=this;
        self.name="Hello";
        console.log(self.name)
        var setFreach=function(newName){
            self.name=newName;
            console.log(self)
        }
        setFreach("Dewei");
        console.log(self.name)
    }

}
a.log();