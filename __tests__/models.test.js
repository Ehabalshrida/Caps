// "use strict";
// const events = require("../events");
// const supertest = require("supertest");
// require('dotenv').config();
// const io=require('socket.io-client');
// const HOST=process.env.HOST || 'http://localhost:8000';
// const socket=io.connect(`${HOST}/caps`);


// let payload=
// { storeName: '1-206-flowers',
// orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
// customerName: 'Jamal Braun',
// address: 'Schmittfort, LA' } 

// jest.useFakeTimers();


// describe("caps test", () => {
//     it('connection',()=>{
//         //const caps = require("../models/caps");
//         expect(socket.emit('connection',payload)).toBeTruthy();
//     });
//     it('pickup',()=>{
//         //const caps = require("../models/caps");
//         expect(socket.emit('driverPickup',payload)).toBeTruthy();
//       });
//       it('transit ',()=>{
//         //const caps = require("../models/caps");
//         expect(socket.emit('driverTransit',payload)).toBeTruthy();
//       });
//       it('deleverd ',()=>{
//         //const caps = require("../models/caps");
//         expect(socket.emit('deleverd',payload)).toBeTruthy();
//         expect(socket.emit('vendorDileverd',payload)).toBeTruthy();
//       });
// });



// describe("vendor test", () => {
//     it('transit',()=>{
//         expect( socket.emit('vendorDileverd',payload).sendBuffer[0].data[1].orderID)
//         .toEqual(payload.orderID);
//     });

// });



// describe("driver test", () => {
//     it('transit',()=>{
//         expect( socket.emit('transit',payload).sendBuffer[0].data[1].orderID)
//         .toEqual(payload.orderID);
//     });
// });