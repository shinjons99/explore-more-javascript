/***
 * fixed: per item wood requirements
 * 1. chair --> 3cft
 * 2. table ---> 10cft
 * 3. bed ---> 50cft
 * 
 * vary: quantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity *perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(1, 1, 1)
console.log('Total Wood Required:', totalWood);
