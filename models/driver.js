"use strict";

const events = require('./events');

events.on('driverPickup', payload=>{
    setTimeout(()=>{
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('transit',payload);
    },1000);
});


events.on('driverTransit',payload=>{
    setTimeout(()=>{
        console.log(`DRIVER: delivered  up ${payload.orderID}`);
        events.emit('vendorDileverd',payload);
    },3000)
});

