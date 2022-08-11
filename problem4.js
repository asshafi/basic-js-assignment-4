function publicBusFare(person) {
    // input validity check
   if (typeof person == 'number') {
       
       let publicBusPassenger = person;

       if (publicBusPassenger >= 50) {
       publicBusPassenger = publicBusPassenger % 50;
       }

       if (publicBusPassenger >= 11) {
           publicBusPassenger = publicBusPassenger % 11;
       }   

       let totalPublicBusFare = publicBusPassenger * 250;
       return totalPublicBusFare;
   }
   else {
       return 'Please enter a valid input!';
   }
}
console.log(publicBusFare(55));