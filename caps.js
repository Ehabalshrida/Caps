"use strict";

const events=require('./models/events');
const faker=require('faker')
require('dotenv').config() 
require('./models/driver');
require('./models/vendor');


let time = new Date()


events.on('pickup',payload=>{
    console.log('event:',{
        event:'pickup',
        time:time,
        payload:payload
    });
    events.emit('driverPickup',payload);
});



events.on('transit',payload=>{
    console.log('event:',{
        event:'transit',
        time:time,
        payload:payload
    });
    events.emit('driverTransit',payload);
});



events.on('deleverd',payload=>{
    console.log('event:',{
        event:'deleverd',
        time:time,
        payload:payload
    });
    events.emit('driverDeleverd',payload);
});

// class payload{
//     constructor(){
//         this.store= faker.name.findName();
//         this.orderID=faker.datatype.uuid() ;
//         this.customer= faker.name.findName();
//         this.address= faker.address.streetAddress()
//     }
// }

// setInterval(()=>{
//     let newPaload=new payload
//     events.emit('pickup',newPaload)
//     console.log('hello');
// },5000)
// console.log('hello');



