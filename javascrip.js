let obj={
    name:"Grooper",
    getName:function(){
        console.log(this.name)
        const fullName =()=>{
            console.log(this.name)
            console.log("My full name is"+this.name + "Fish")
        }
        fullName()
    }
}
console.log(obj.name)