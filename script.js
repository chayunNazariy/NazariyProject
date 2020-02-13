var isAdmin = confirm('Вы - администратор?')
var pas = '123321'
if (isAdmin) {
    
    var userPassword = prompt('Введите пароль. (осталось 2 попытки)')
    
    if (pas == userPassword) {
        
        console.log('Добро пожаловать, администратор')
    }
        
        
        
     else if (pas !== userPassword) {
        
        var userPassword = prompt('Введите пароль. (осталось 1 попытки)')
          if (pas !== userPassword) { 
        console.log('bAN на 3 дня')
          }
        else {
            console.log('Добро пожаловать, администратор')
        }
    }
}
    


    
    
    
    
 else {
    
    console.log('Добро пожаловать, гость')
}
