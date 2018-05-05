let restaurant = {
    name : 'Sagar Ratna',
    guestCapacity : 120,
    guestCount : 0,
    checkAvailability : function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize){
        this.guestCount += partySize;
    },
    removeParty: function(partySize){
        this.guestCount -= partySize;
    }
}

console.log(restaurant.name);
console.log(restaurant.guestCapacity);
console.log(restaurant.checkAvailability(30));
restaurant.seatParty(20);
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(10));