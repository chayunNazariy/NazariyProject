var isAdmin = confirm('Вы - администратор?')
var pas = '123321'
if (isAdmin) {
          var userPassword = prompt('Введите пароль. (осталось 3 попытки)')
          if (pas===userPassword) {
              console.log('Добро пожаловать, администратор')
          }
    else if (pas!==userPassword) {
        var userPassword = prompt('Введите пароль. (осталось 2 попытки)')
        }
   var userPassword = prompt('Введите пароль. (осталaсь 1 попыткa)')
   if (pas===userPassword){
           console.log('Добро пожаловать, администратор')    
   }
    
    else {
            console.log('bAN на 3 дня')    
    }
}

else {
    console.log('Добро пожаловать, гость')
}                       
                      