function validator(params){
    var formElement= document.querySelector(params.form)
    var rule_object = {}
     var passwordElement = formElement.querySelector('input[type=password]')
     
    

    

   if(formElement){
       params.rules.forEach(function(rule){
           if(Array.isArray(rule_object[rule.oop])){
            rule_object[rule.oop].push(rule.test)
           }else{
            rule_object[rule.oop] = [rule.test]
           }
           var testError
           var inputElement = formElement.querySelector(rule.oop)
           var check_password = formElement.querySelector('#check-password')
           var check_test = check_password.parentElement.querySelector('.test-check')
           if(inputElement){ 

              var topicPassword = inputElement.parentElement.querySelector('#topic-password')
              if(inputElement.type === 'password'){
                inputElement.onfocus = function(){
                    if(topicPassword){

                        topicPassword.classList.add('displayBlock')
                    }
                    if(inputElement.value.length >= 6){
                       topicPassword.classList.remove('displayBlock')
                       inputElement.classList.add('borderBlue')
                      
                   }
                   setTimeout(function(){
                    
                    check_password.classList.add('displayBlock')
                },1000)
                
                   
                }
                
                inputElement.onkeyup = function(){

                    var condition = inputElement.value.length
                    


                    var check1 = false
                    var check2 = false
                    var check3 = false
                    var check4 = false

                     var bar_check1 = formElement.querySelector('.bar-check1')
                      var bar_check2 = formElement.querySelector('.bar-check2')
                      var bar_check3 = formElement.querySelector('.bar-check3')
                      var bar_check4 = formElement.querySelector('.bar-check4')
 
                    if(condition === 6  ){
                        bar_check1.classList.add('borderOrgane')
                        
                       

                        // bar_check2.classList.remove('borderOrgane')
                        check1 = true  
                    }else if(condition === 12){
                        bar_check2.classList.add('borderOrgane')
                    } else if(condition === 14){
                        bar_check1.classList.remove('borderOrgane')
                        bar_check1.classList.add('borderBlue')

                        bar_check2.classList.remove('borderOrgane')
                        bar_check2.classList.add('borderBlue')

                        bar_check3.classList.add('borderBlue')
                    } else if(condition === 16){
                        bar_check4.classList.add('borderBlue')

                        if(check_test){
                            var check_test3 = check_test.querySelector('.condition3')
                            if(check_test3){
                                var checked = check_test3.querySelector('.fa-check')
                                var testP = check_test3.querySelector('.testP')
                                checked.classList.add('displayBlock')
                                testP.classList.add('lineThrough')
                            }
                        }
                    }



                    if(condition < 6){
                        bar_check1.classList.remove('borderOrgane')
                        bar_check2.classList.remove('borderOrgane')

                        inputElement.parentElement.querySelector('#border-error').innerText = testError
                        inputElement.parentElement.querySelector('#border-error').classList.remove('displayBlock')
                        // errorElement.innerHTML =  `<i class = "fas fa-info-circle"></i>`
                        inputElement.classList.add('color-red')

                    } else if(condition < 12){
                        bar_check2.classList.remove('borderOrgane')
                    } else if(condition < 14){
                        bar_check1.classList.remove('borderBlue')
                        bar_check1.classList.add('borderOrgane')

                        bar_check2.classList.remove('borderBlue')
                        bar_check2.classList.add('borderOrgane')

                        bar_check3.classList.remove('borderBlue')
                    } else if(condition < 16){
                        bar_check4.classList.remove('borderBlue')
                        if(check_test){
                            var check_test3 = check_test.querySelector('.condition3')
                            if(check_test3){
                                var checked = check_test3.querySelector('.fa-check')
                                var testP = check_test3.querySelector('.testP')
                                checked.classList.remove('displayBlock')
                                testP.classList.remove('lineThrough')
                            }
                        }
                    }


                    var valueInput = inputElement.value
                    var character= ''
                    var i = 0
                    var uppercase 
                    while(i<valueInput.length){
                            uppercase = false
                        character = valueInput.charAt(i)
                        if(character == character.toUpperCase()){
                            console.log(typeof character)
                            uppercase = true
                            break
                        }
                        i++
                    }
                    console.log(uppercase)
                   if(uppercase){
                    if(check_test){
                        var check_test1 = check_test.querySelector('.condition1')
                        if(check_test1){
                            var checked = check_test1.querySelector('.fa-check')
                            var testP = check_test1.querySelector('.testP')
                            checked.classList.add('displayBlock')
                            testP.classList.add('lineThrough')
                        }
                    }
                   } else{
                    if(check_test){
                        var check_test1 = check_test.querySelector('.condition1')
                        if(check_test1){
                            var checked = check_test1.querySelector('.fa-check')
                            var testP = check_test1.querySelector('.testP')
                            checked.classList.remove('displayBlock')
                            testP.classList.remove('lineThrough')
                        }
                    }
                   }

                   var valueInputS = inputElement.value
                    var characterS= ''
                    var j = 0
                    var special_character 
                    var checkS= /^[@#$]*$/
                    while(j<valueInputS.length){
                        special_character = false
                        characterS = valueInputS.charAt(j)
                        if(characterS.match(checkS)){
                            special_character = true
                            
                        }
                        j++
                    }
                    console.log(special_character)
                    

                
                   if(inputElement.value.length >= 6){
                    inputElement.classList.add('borderBlue')
                       topicPassword.classList.remove('displayBlock')
                   }else{
                       topicPassword.classList.add('displayBlock')
                   }
                }
                
                var on_off = formElement.querySelector('.on-off')
                var isthis = true
                on_off.onclick= function(){
                  if(isthis){
                     on_off.innerHTML = '<i class="far fa-eye"></i>'
                     on_off.parentElement.querySelector('#password').type = 'text'
                     isthis = false 
                 } else{
                     on_off.innerHTML = '<i class="fas fa-eye-slash"></i>'
                     on_off.parentElement.querySelector('#password').type = 'password'
                     isthis = true
                 }
             }
            
                 if(on_off.innerHTML.length === 72 || on_off.innerHTML.length === 26 ){
                     on_off.onclick = function(){
                         console.log('đã ăn')
                         on_off.innerHTML = '<i class="fas fa-eye-slash"></i>'
                     }
                 }

            }

            var errorElement = inputElement.parentElement.querySelector(params.local_error)
            var test_title = inputElement.parentElement.querySelector(params.test_title)
               inputElement.onblur =function(){
                if(inputElement.type === 'password'){

                    if(topicPassword){

                        if(`$('.displayBlock').parent().hasClass('.topicPassword')`){
                            topicPassword.classList.remove('displayBlock')
                        }
                    }
                   
                    inputElement.classList.remove('borderBlue')
                    if(`$('.displayBlock').parent().hasClass('.check_password')`){
                          check_password.classList.remove('displayBlock')
                    }

                }
                   
                   if(inputElement.value === ''){
                    test_title.innerText = ''
                    switch (inputElement.name) {
                        case 'email':
                            inputElement.placeholder = 'Nhập email'
                            break;
                         case 're-email':
                            inputElement.placeholder = 'Nhập lại email'
                             break;
                         case 'password':
                            inputElement.placeholder = 'Nhập mật khẩu'
                                 break;   
                    
                        default:
                            inputElement.placeholder = 'Nhập lại lại mật khẩu'
                            break;
                    }
                   }
                   var is_rules = rule_object[rule.oop]
                   for(var i= 0;i<is_rules.length; ++i){
                    testError =is_rules[i](inputElement.value)
                       if(testError) break
                   }
                    
                  if(testError){
                     var error = errorElement.innerHTML =  `<i class = "fas fa-info-circle"></i>`
                    if(error){
                        var contentErrorElement = inputElement.parentElement.querySelector('.fa-info-circle')
                        contentErrorElement.onmouseover = function(){
                            inputElement.parentElement.querySelector('#border-error').innerText = testError
                            inputElement.parentElement.querySelector('#border-error').classList.add('displayBlock')
                        }
                        contentErrorElement.onmouseout = function(){
                            inputElement.parentElement.querySelector('#border-error').innerText = testError
                            inputElement.parentElement.querySelector('#border-error').classList.remove('displayBlock')
                        }
                        
                    }
                      inputElement.classList.add('color-red')
                  }else{  
                    errorElement.innerHTML = ''
                    inputElement.classList.remove('color-red')
                  }
               }
                
               inputElement.onclick = function(){                
                   inputElement.classList.add('border')
                   inputElement.placeholder = ''
                   switch (inputElement.name) {
                       case 'email':
                           test_title.innerText = 'Nhập email'
                           break;
                        case 're-email':
                            test_title.innerText = 'Nhập lại email'
                            break;
                        case 'password':
                                test_title.innerText = 'Nhập mật khẩu'
                                break;   
                   
                       default:
                             test_title.innerText = 'Nhập lại lại mật khẩu'
                           break;
                   }
                   errorElement.innerHTML = ''
                   inputElement.classList.remove('color-red')
               }
           }
        })
   }
}



validator.isRequired =function(oop){
 return {
    oop : oop,
    icon : function(value){
        return  value ? undefined : `<i class = "fas fa-info-circle"></i>`
    },
    test : function(value){
        return  value ? undefined : `vui lòng nhập trường này`
    }
 }
}

validator.isEmail =function(oop){
    return {
       oop : oop,
       icon : function(value){
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           return  regex.test(value) ? undefined : `<i class = "fas fa-info-circle"></i>`
       },
       test : function(value){
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           return  regex.test(value) ? undefined : `đây không phải email`
       }
    }
   }
validator.minLenght= function(oop,minLenght){
    return {
        oop : oop,
        test : function(value){
            return value.length >= minLenght ? undefined :`vui lòng nhập mật khẩu lớn hơn ${minLenght} kí tự`
        }
    }
}