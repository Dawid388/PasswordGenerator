import { settings } from './passwordSettings';


export const generatePassword = ({values,length}) => {  
let symbols = ''
let password = ''
Object.keys(values).forEach(key => {
    if(values[key])
    {
        symbols += settings[key]
    }
});
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const randomLetter = symbols.charAt(randomIndex);
    password += randomLetter;
  }


return password


}