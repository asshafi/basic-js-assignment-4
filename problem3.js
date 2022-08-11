function oilPrice(diesel, petrol, octen) {
    // input validity check
   if (typeof diesel == 'number' && typeof petrol == 'number' && typeof octen == 'number') {
       
   //Oil prices
   let dieselPrice = 114;
   let petrolPrice = 130;
   let octenPrice = 135;

   //each oil price calculation by quantity 
   let dieselTotalPrice = diesel * dieselPrice;
   let petrolTotalPrice = petrol * petrolPrice;
   let octenTotalPrice = octen * octenPrice;

   //return total
       return dieselTotalPrice + petrolTotalPrice + octenTotalPrice;
       
   }
   else {
       return 'Please enter a valid input!';
   }
}
console.log(oilPrice(30,20,10));