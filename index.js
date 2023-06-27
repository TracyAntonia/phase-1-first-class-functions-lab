// Code your solution in this file!

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//  const returnFirstTwoDrivers = (let i = 0; names.length < 3; i++) {
//     console.log();
//  }

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice (0, 2);
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice (-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare){
        return multiplier * fare;
    };
};

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers (selectingDrivers, choose) {
    return choose(selectingDrivers)
}
console.log();