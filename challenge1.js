function generateGrade(marks) {
    if (marks >= 80 && marks <= 100) {
      return 'A';
    } else if (marks >= 60 && marks < 80) {
      return 'B';
    } else if (marks >= 50 && marks < 60) {
      return 'C';
    } else if (marks >= 40 && marks < 50) {
      return 'D';
    } else if (marks < 40 && marks >= 0) {
      return 'E';
    } else {
      return 'Invalid input. Marks should be between 0 and 100.';
    }
  }
  
  console.log(generateGrade(85));  
  console.log(generateGrade(72));  
  console.log(generateGrade(55));  
  console.log(generateGrade(45));  
  console.log(generateGrade(30));  
  console.log(generateGrade(105)); 
  