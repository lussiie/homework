function Pingg(){
  console.log("Ping")
}
const time =setInterval(Pingg,1000);

 setTimeout(() => {
     clearInterval(time);
},5000);

Pingg()