function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed < speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      if (demeritPoints > 12) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  
  console.log(checkSpeed(80));  
  console.log(checkSpeed(100)); 
  console.log(checkSpeed(120)); 
  console.log(checkSpeed(60));  
  