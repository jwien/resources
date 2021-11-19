"use strict";

/** Practice exercises! **/

/** Array manipulation **/

// i do not actually have 8+ cats
var myCats = [
    'Jimmy',
    'Sarah',
    'Java',
    'Bobert',
    'Olivia',
    'Aurora',
    'Charli',
    'Mandy'
];

// Reading values from an array
// console.log only the last cat in myCats


// console.log every cat in myCats


// console.log every cat in myCats except for Bobert, who stinks


// Manipulating an array's values and size
// Add a new cat named 'Baby' to myCats


// Remove Jimmy from myCats (he's fine, he just turned out to not really be a cat)



/** Object manipulation **/

var buildingInfo = {
       rentalType:  'apt',
    squarefootage:  950,
             beds:  2,
            baths:  2,
          windows:  12,
        stoveType:  'electric',
        hasGarage:  false,
          hasYard:  false,
      prevTenants:  ['Adam Stevens', 'Fiona Apple', 'Bob Dylan']
}

// this building has had a garage built. update the hasGarage property to reflect this


// the building was expanded and a new bedroom was built, which also increased the squarefootage of the house by 145


// it costs 100 dollars to upgrade the windows to be energy saving. how much would it cost for the whole house?


// the building has a new owner. Add the previous tenant 'Doug Wolf' to the end of the prevTenants array


// write out a console.log() for each of the previous tenants


/** Arrays of Objects **/

var iceCreamFlavors = [
    { id: 0, flavor: 'vanilla', containsNuts: false },
    { id: 1, flavor: 'chocolate', containsNuts: false },
    { id: 2, flavor: 'neapolitan', containsNuts: false },
    { id: 3, flavor: 'rocky road', containsNuts: true },
    { id: 4, flavor: 'cinnamon coffee', containsNuts: false },
    { id: 5, flavor: 'pistachio', containsNuts: true },
    { id: 6, flavor: 'birthday cake', containsNuts: false },
    { id: 7, flavor: 'tres leches', containsNuts: false },
    { id: 9, flavor: 'choco peanut butter', containsNuts: true }
];

// log out all of the names of available flavors of ice cream


// add this ice cream to the iceCreamFlavor array: 'strawberry' flavor and it doesn't contain nuts
// try to add the id number by checking what the last ice cream's id is and adding 1 to it for the new flavor


// print only the names of flavors that do NOT contain nuts