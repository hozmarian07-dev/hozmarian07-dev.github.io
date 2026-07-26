export default {
async fetch(request) {

if(request.method === "POST") {

const data = await request.text();


await fetch("TVŮJ_WEBHOOK", {
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
