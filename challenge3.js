function calculateNetSalary(basicSalary, benefits) {
    // Constants for deductions and tax rates
    const PAYE = {
      range1: { min: 0, max: 24000, rate: 0.10 },
      range2: { min: 24001, max: 32333, rate: 0.25 },
      range3: { min: 32334, max: 500000, rate: 0.30 },
      range4: { min: 500001, max: 800000, rate: 0.325 },
      range5: { min: 800001, max: Infinity, rate: 0.35 },
      personalRelief: 2400, // Monthly personal relief
    };
  
    const NHIF = [
      { min: 0, max: 5999, deduction: 150 },
      { min: 6000, max: 7999, deduction: 300 },
      { min: 8000, max: 11999, deduction: 400 },
      { min: 12000, max: 14999, deduction: 500 },
      { min: 15000, max: 19999, deduction: 600 },
      { min: 20000, max: 24999, deduction: 750 },
      { min: 25000, max: 29999, deduction: 850 },
      { min: 30000, max: 34999, deduction: 900 },
      { min: 35000, max: 39999, deduction: 950 },
      { min: 40000, max: 44999, deduction: 1000 },
      { min: 45000, max: 49999, deduction: 1100 },
      { min: 50000, max: 59999, deduction: 1200 },
      { min: 60000, max: 69999, deduction: 1300 },
      { min: 70000, max: 79999, deduction: 1400 },
      { min: 80000, max: 89999, deduction: 1500 },
      { min: 90000, max: 99999, deduction: 1600 },
      { min: 100000, max: Infinity, deduction: 1700 }
    ];
  
    const NSSF = {
      tier1Rate: 0.06, // Employee contribution rate for Tier I
      tier2Rate: 0.06, // Employee contribution rate for Tier II
      tier1Limit: 7000, // Tier I contribution is capped at 7000
      tier2Limit: 36000, // Tier II contribution is capped at 36000
    };
  
    const SHIFRate = 0.0275; // SHIF deduction rate (2.75%)
  
    const HousingLevyRate = 0.015; // Housing Levy rate (1.5%)
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate PAYE tax
    let payeTax = 0;
    if (grossSalary <= PAYE.range1.max) {
      payeTax = grossSalary * PAYE.range1.rate;
    } else if (grossSalary <= PAYE.range2.max) {
      payeTax = (PAYE.range1.max * PAYE.range1.rate) + ((grossSalary - PAYE.range1.max) * PAYE.range2.rate);
    } else if (grossSalary <= PAYE.range3.max) {
      payeTax = (PAYE.range1.max * PAYE.range1.rate) + ((PAYE.range2.max - PAYE.range1.max) * PAYE.range2.rate) + ((grossSalary - PAYE.range2.max) * PAYE.range3.rate);
    } else if (grossSalary <= PAYE.range4.max) {
      payeTax = (PAYE.range1.max * PAYE.range1.rate) + ((PAYE.range2.max - PAYE.range1.max) * PAYE.range2.rate) + ((PAYE.range3.max - PAYE.range2.max) * PAYE.range3.rate) + ((grossSalary - PAYE.range3.max) * PAYE.range4.rate);
    } else {
      payeTax = (PAYE.range1.max * PAYE.range1.rate) + ((PAYE.range2.max - PAYE.range1.max) * PAYE.range2.rate) + ((PAYE.range3.max - PAYE.range2.max) * PAYE.range3.rate) + ((PAYE.range4.max - PAYE.range3.max) * PAYE.range4.rate) + ((grossSalary - PAYE.range4.max) * PAYE.range5.rate);
    }
  
    // Apply personal relief (monthly)
    payeTax = Math.max(0, payeTax - PAYE.personalRelief);
  
    
    let nhifDeduction = 0;
    for (let i = 0; i < NHIF.length; i++) {
      if (grossSalary >= NHIF[i].min && grossSalary <= NHIF[i].max) {
        nhifDeduction = NHIF[i].deduction;
        break;
      }
    }
  
    
    const nssfTier1 = Math.min(grossSalary, NSSF.tier1Limit) * NSSF.tier1Rate;
    const nssfTier2 = Math.max(0, grossSalary - NSSF.tier1Limit) * NSSF.tier2Rate;
    const nssfDeduction = nssfTier1 + nssfTier2;
  
    
    const shifDeduction = grossSalary * SHIFRate;
  
    
    const housingLevy = grossSalary * HousingLevyRate;
  
    
    const totalDeductions = payeTax + nhifDeduction + nssfDeduction + shifDeduction + housingLevy;
  

    const netSalary = grossSalary - totalDeductions;
  
    return {
      grossSalary: grossSalary,
      payeTax: payeTax,
      nhifDeduction: nhifDeduction,
      nssfDeduction: nssfDeduction,
      shifDeduction: shifDeduction,
      housingLevy: housingLevy,
      totalDeductions: totalDeductions,
      netSalary: netSalary
    };
  }
  
  const salaryDetails = calculateNetSalary(50000, 10000);
  console.log(salaryDetails);
  