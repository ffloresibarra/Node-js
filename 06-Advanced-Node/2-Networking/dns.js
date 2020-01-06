const dns=require("dns");
// dns.lookup("8.8.8.8", (err, addresses, family)=>{
//     console.log("addresses:", addresses);
//     console.log("family:", family); 
// });

// dns.resolve4("www.google.com", (err, addresses)=>{
//     if (err)throw err;
//     console.log("addresses:"+ JSON.stringify(addresses));
//     addresses.forEach((a)=>{
//         dns.reverse(a, (err, hostnames)=>{
//             if(err){
//                 throw err;
//             }
//             console.log("reverse for" + a+":"+ JSON.stringify(hostnames));
//         });
//     });
// });

dns.lookupService("127.0.0.1", 22, (err, host, service)=>{
    console.log(hostname, service);
})