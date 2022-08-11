function isBestFriend(person1, person2) {
    // input validity check
    if (typeof person1 == 'object' && typeof person2 == 'object') {
       
        if (person1.name == person2.friend && person2.name == person1.friend) {
            return true;
        }
        return false;
    }
    else {
        return 'Please enter a valid input!';
    }
   
}
console.log(isBestFriend({name:'dabul',friend:'babul'},{name:'babul',friend:'abul'}));