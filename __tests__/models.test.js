"use strict";
const events = require("../models/events");
const supertest = require("supertest");

let payload=
{ storeName: '1-206-flowers',
orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customerName: 'Jamal Braun',
  address: 'Schmittfort, LA' } 

jest.useFakeTimers();


describe("caps test", () => {
    it('pickup',()=>{
       require("../caps");
        events.emit('pickup',payload);
        expect( events.emit('pickup',payload)).toEqual(true);
    });

    it('transit',()=>{
        require("../caps");
        events.emit('transit',payload);
        expect( events.emit('transit',payload)).toEqual(true);
    });

    it('deleverd',()=>{
        require("../caps");
        events.emit('deleverd',payload);
        expect( events.emit('deleverd',payload)).toEqual(true);
    });
});

describe("driver test", () => {
    it('driverPickup',()=>{
        require("../models/driver");
        events.emit('driverPickup',payload);
        expect( events.emit('driverPickup',payload)).toEqual(true);
    });

    it('driverTransit',()=>{
        require("../models/driver");
        events.emit('driverTransit',payload);
        expect( events.emit('driverTransit',payload)).toEqual(true);
    });

});


describe("vendor test", () => {
    it('vendorDileverd',()=>{
        require("../models/vendor");
        events.emit('vendorDileverd',payload);
        expect( events.emit('vendorDileverd',payload)).toEqual(true);
    });

});