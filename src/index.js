module.exports = function toReadable (number) {

    const basicNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
  
    if(number < 20){
        return basicNumbers[number];
    }
    else if(number >= 20 && number < 100) {
        let unit = number % 10;
        let dozen = Math.trunc(number / 10);
    
        if (unit != 0) {
            return `${dozens[dozen]} ${basicNumbers[unit]}`;
        }
        else {
            return dozens[dozen];
        }
        
    }
    else if (number >= 100 && number < 1000) {
        let hundred = Math.trunc(number / 100);
        let unit = number % 10;
        let dozen = (number % 100 - unit) / 10;
        
        
        if (number % 100 < 20){
            unit = number % 100;
         }
 
         if (unit === 0 && dozen === 0) {
            return `${basicNumbers[hundred]} ${dozens[10]}`;
         }
         else if (unit === 0) {
            return `${basicNumbers[hundred]} ${dozens[10]} ${dozens[dozen]}`;
         }
         else {
             if (number % 100 < 20){
                return `${basicNumbers[hundred]} ${dozens[10]} ${basicNumbers[unit]}`;
             }
             return `${basicNumbers[hundred]} ${dozens[10]} ${dozens[dozen]} ${basicNumbers[unit]}`;
         }

    }
  }
