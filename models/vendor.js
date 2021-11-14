"use strict";

require('dotenv').config();
let faker =require('faker');
const events=require('./events');


// first emit
setTimeout(()=>{
    let customerOrder={
        storeName:faker.name.findName(),
        orderID:faker.datatype.uuid(),
        customerName:faker.name.findName(),
        address:faker.address.streetAddress()
    };

    events.emit('pickup',customerOrder);
},5000);


events.on('vendorDileverd',payload=>{
    console.log(`thank you for delivering ${payload.orderID}`);
    events.emit('deleverd', payload);
})


