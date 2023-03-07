class Password{
    constructor(){
        console.log("welcome to password generator")
        this.pass = ""
    }

    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let nums = "1234567890"
        let special = "!@#$%^&*()_+-"
        if (len < 4) {
            console.log("Please Enter Password length more than 4")
        }else{
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += nums[Math.floor(Math.random() * nums.length)]
                this.pass += special[Math.floor(Math.random() * special.length)];
                i+=3;
            }
            this.pass = this.pass.substring(0, len)
            return this.pass
        }
   
    }
}

let p1 = new Password();
console.log(p1.generatePassword(8))