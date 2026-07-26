export default {
async fetch(request) {

if(request.method === "POST") {

const data = await request.text();


await fetch("https://discord.com/api/webhooks/1531020612875849819/-oh4IV2xXSkfdl1g2uplK2HtJ9bDoS4bXesF4_iYdpKnR9DCpi0rY0Lv3ypCP1H_SIEq", {
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:data
});


return new Response("OK");

}


return new Response("Apex API");

}

}
