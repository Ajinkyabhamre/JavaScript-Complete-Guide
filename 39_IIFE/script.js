let a =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("complete")
        }, 2000);
    })
}


        // let func= async()=>{    
        //     let b = await a()
        //     console.log(b)
        //     let c = await a()
        //     console.log(c)
        //     let d = await a()
        //     console.log(d)
        // }

        // func()


//Immidiately Invoked Function Expression

  (async()=>{    
            let b = await a()
            console.log(b)
            let c = await a()
            console.log(c)
            let d = await a()
            console.log(d)
        } )()

        