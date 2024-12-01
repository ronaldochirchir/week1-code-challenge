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
  
  console.log(checkSpeed(80));  // Outputs: Points: 2
  console.log(checkSpeed(100)); // Outputs: Points: 6
  console.log(checkSpeed(120)); // Outputs: License suspended
  console.log(checkSpeed(60));  // Outputs: Ok
  