let id=setInterval(() => {
    console.log("Hello world!");
}, 1000);

clearInterval(id);   //to stop setInterval(), use clearInterval(id returned from the setInterval method)