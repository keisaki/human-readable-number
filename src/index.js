const dict = ['','one','two','three','four','five','six','seven','eight','nine'];
const dict10 = ['','one','twen','thir','for','fif','six','seven','eigh','nine'];

module.exports = function toReadable (number) {

  if(number == 0) return 'zero';
  let numberParts = [~~(number/100),~~(number/10)%10,number%10];
  if(number<10)
    return `${dict[numberParts[2]]}`;
  if(number<100)
  { 
        return tenToNineteen(number);
  }
  if(number%100>9&&number%100<20)
  {
  return `${dict[numberParts[0]]+' hundred'} `+tenToNineteen(number%100); 
}
  return `${dict[numberParts[0]]+' hundred'}${dict10[numberParts[1]]?' '+dict10[numberParts[1]]+'ty':''}${dict[numberParts[2]]?' '+dict[numberParts[2]]:''}`;
}

function tenToNineteen(number){
    let numberParts = [~~(number/100),~~(number/10)%10,number%10];
    switch(number){
        case 10: return 'ten'; break;
        case 11: return 'eleven'; break;
        case 12: return 'twelve'; break;
        case 13: return 'thirteen'; break;
        case 14: return 'fourteen'; break;
        case 15: return 'fifteen'; break;
        case 16: return 'sixteen'; break;
        case 17: return 'seventeen'; break;
        case 18: return 'eighteen'; break;
        case 19: return 'nineteen'; break;
        default: return `${dict10[numberParts[1]]?dict10[numberParts[1]]+'ty':''}${dict[numberParts[2]]?' '+dict[numberParts[2]]:''}`;
    }
}