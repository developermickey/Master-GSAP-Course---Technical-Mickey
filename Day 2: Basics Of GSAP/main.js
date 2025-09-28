// to()

// gsap.to(".box", {
//     x: 800,
//     duration: 5
// })

//  from()

// gsap.from(".box", {
//     x: 800,
//     duration: 5
// })


// fromTo()

gsap.fromTo(".box",
    {
        x: 200,
        opacity: 0,
        duration: 3

    }, // start state
    {
        x: 800,
        opacity: 1,
        duration: 5
    } // end 
)