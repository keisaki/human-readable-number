module.exports = function toReadable (number) {
  let dict = ['one','two','three','four','five','six','seven','eight','nine'];
  let dict10 = ['one','twen','thir','for','fif','six','seven','eigh','nine'];
  if(number == 0) return 'zero';
  let numberParts = [~~(number/100),~~(number/10)%10,number%10];
  if(number<10)
    return `${dict[numberParts[2]-1]}`;
  if(number<100)
  { 
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
        default: return `${dict10[numberParts[1]-1]}ty${dict[numberParts[2]-1]?' '+dict[numberParts[2]-1]:''}`;
    }
  }
  if(number%100<20)
  {
    switch(number%100){
        case 10: return `${dict[numberParts[0]-1]+' hundred'}`+ ' ten'; break;
        case 11: return `${dict[numberParts[0]-1]+' hundred'}`+' eleven'; break;
        case 12: return `${dict[numberParts[0]-1]+' hundred'}`+' twelve'; break;
        case 13: return `${dict[numberParts[0]-1]+' hundred'}`+' thirteen'; break;
        case 14: return `${dict[numberParts[0]-1]+' hundred'}`+' fourteen'; break;
        case 15: return `${dict[numberParts[0]-1]+' hundred'}`+' fifteen'; break;
        case 16: return `${dict[numberParts[0]-1]+' hundred'}`+' sixteen'; break;
        case 17: return `${dict[numberParts[0]-1]+' hundred'}`+' seventeen'; break;
        case 18: return `${dict[numberParts[0]-1]+' hundred'}`+' eighteen'; break;
        case 19: return `${dict[numberParts[0]-1]+' hundred'}`+' nineteen'; break;
        default: return `${dict[numberParts[0]-1]+' hundred'}${dict10[numberParts[1]-1]?' '+dict10[numberParts[1]-1]+'ty':''}${dict[numberParts[2]-1]?' '+dict[numberParts[2]-1]:''}`;
  }
}
  return `${dict[numberParts[0]-1]+' hundred'}${dict10[numberParts[1]-1]?' '+dict10[numberParts[1]-1]+'ty':''}${dict[numberParts[2]-1]?' '+dict[numberParts[2]-1]:''}`;
}