class RailwayForm{
    constructor(name, seatNum){
        console.log("Constructor is called... " + name + " " + seatNum)
        this.name = name
        this.seatNum = seatNum
    }

    submit(){
        alert(this.name + "'s Form is submitted for seat number " + this.seatNum);
    }
    cancel(){
        alert(this.name + "'s Form is cancelled for seat number " + this.seatNum);
    }
    
    // fill(givenname, seatNum){
    //    this.name = givenname;
    //    this.seatNum = seatNum
    // }
    
}

let p1Form = new RailwayForm("Ajinkya", 420);
// p1Form.fill("Ajinkya", 420)
let p2Form = new RailwayForm("Anand", 440);
// p2Form.fill("Anand", 440)

p1Form.submit();
p2Form.submit();
p2Form.cancel();