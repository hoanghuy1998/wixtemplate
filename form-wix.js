var ischange = true

function changeForm(params) {

    var exit = document.querySelector(params.exit)
    var div = document.createElement('a')
    div.classList.add('homePage')
    div.setAttribute('href', '../wix-teamplate web/index.html')
    exit.onclick = function() {

        exit.appendChild(div)
    }
    console.log(exit)

    var changeForm = document.querySelector(params.form)
    var changeFormRegist = document.querySelector(params.formRegist)
    var changeFormLogin = document.querySelector(params.formLogin)
    var changeFormTitle = document.querySelector(params.formTitle)
    var changeFormTutorial = document.querySelector(params.formTutorial)
    changeForm.onclick = function() {
        if (ischange) {
            setTimeout(function() {
                changeForm.innerText = 'đăng ký'
                changeFormTitle.innerText = 'đăng nhập'
                changeFormTutorial.innerText = 'bạn chưa có tài khoản ?'
                changeFormLogin.classList.add('displayFlex')
                changeFormRegist.classList.add('displayNone')
            }, 500)

            ischange = false
        } else {
            changeForm.innerText = 'đăng nhập'
            changeFormTitle.innerText = 'đăng ký'
            changeFormTutorial.innerText = 'bạn đã có tài khoản ?'
            changeFormLogin.classList.remove('displayFlex')
            changeFormRegist.classList.remove('displayNone')

            ischange = true
        }
    }
}


function validatorRegist(params) {

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(params.local_error)
        var is_rules = rule_object[rule.oop]
        for (var i = 0; i < is_rules.length; ++i) {
            testError = is_rules[i](inputElement.value)
            if (testError) break
        }

        if (testError) {
            var error = errorElement.innerHTML = `<i class = "fas fa-info-circle"></i>`
            if (error) {
                var contentErrorElement = inputElement.parentElement.querySelector('.fa-info-circle')
                contentErrorElement.onmouseover = function() {
                    inputElement.parentElement.querySelector('#border-error').innerHTML = `<div>${testError}</div>`
                    inputElement.parentElement.querySelector('#border-error').classList.add('displayBlock')
                }
                contentErrorElement.onmouseout = function() {
                    inputElement.parentElement.querySelector('#border-error').innerHTML = `<div>${testError}</div>`
                    inputElement.parentElement.querySelector('#border-error').classList.remove('displayBlock')
                }

            }
            inputElement.classList.add('color-red')
        } else {
            errorElement.innerHTML = ''
            inputElement.classList.remove('color-red')
        }
        return !testError
    }

    var formElement = document.querySelector(params.form)
    var rule_object = {}
    var passwordElement = formElement.querySelector('input[type=password]')

    function makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }






    if (formElement) {
        params.rules.forEach(function(rule) {
            if (Array.isArray(rule_object[rule.oop])) {
                rule_object[rule.oop].push(rule.test)
            } else {
                rule_object[rule.oop] = [rule.test]
            }
            var testError
            var inputElement = formElement.querySelector(rule.oop)
            var errorElement = inputElement.parentElement.querySelector(params.local_error)

            if (inputElement) {
                if (inputElement.name === 'password') {
                    var check_password = formElement.querySelector('#check-password')
                    var check_test = check_password.parentElement.querySelector('.test-check')
                    inputElement.onclick = function() {

                    }


                    var topicPassword = inputElement.parentElement.querySelector('#topic-password')
                    if (inputElement.type === 'password') {
                        inputElement.onfocus = function() {





                            if (topicPassword) {

                                topicPassword.classList.add('displayBlock')
                            }
                            if (inputElement.value.length >= 6) {
                                topicPassword.classList.remove('displayBlock')
                                inputElement.classList.add('borderBlue')

                            }


                            check_password.classList.add('displayBlock')



                        }
                        var allValue
                        inputElement.onkeydown = function() {
                            var repeat_test = check_password.querySelector('.repeat-test')
                            allValue = inputElement.value


                        }
                        inputElement.onkeyup = function() {
                            var toppicElement = inputElement.parentElement.querySelector('#topic-password')
                            allValue = inputElement.value

                            var condition = inputElement.value.length
                            var isrepeat = 0
                            for (var i = 0; i < allValue.length; ++i) {
                                for (var j = i; j < allValue.length; ++j) {
                                    if (allValue[i] === allValue[j]) {
                                        isrepeat++

                                    }
                                }
                            }






                            var check1 = false
                            var check2 = false
                            var check3 = false
                            var check4 = false

                            var bar_check1 = formElement.querySelector('.bar-check1')
                            var bar_check2 = formElement.querySelector('.bar-check2')
                            var bar_check3 = formElement.querySelector('.bar-check3')
                            var bar_check4 = formElement.querySelector('.bar-check4')

                            if (condition === 6) {
                                bar_check1.classList.add('borderOrgane')



                                // bar_check2.classList.remove('borderOrgane')
                                check1 = true
                            } else if (condition === 12) {
                                bar_check2.classList.add('borderOrgane')
                            } else if (condition === 14) {
                                bar_check1.classList.remove('borderOrgane')
                                bar_check1.classList.add('borderBlue')

                                bar_check2.classList.remove('borderOrgane')
                                bar_check2.classList.add('borderBlue')

                                bar_check3.classList.add('borderBlue')
                            } else if (condition === 16) {
                                bar_check4.classList.add('borderBlue')

                                if (check_test) {
                                    var check_test3 = check_test.querySelector('.condition3')
                                    if (check_test3) {
                                        var checked = check_test3.querySelector('.fa-check')
                                        var testP = check_test3.querySelector('.testP')
                                        checked.classList.add('displayBlock')
                                        testP.classList.add('lineThrough')
                                    }
                                }
                            }



                            if (condition < 6) {
                                bar_check1.classList.remove('borderOrgane')
                                bar_check2.classList.remove('borderOrgane')

                                inputElement.parentElement.querySelector('#border-error').innerHTML = `<div>${testError}</div>`
                                inputElement.parentElement.querySelector('#border-error').classList.remove('displayBlock')

                                inputElement.classList.add('color-red')
                                    // switch (on_off.style.left) {
                                    //     case '41%':
                                    //         on_off.style.left = '38%'
                                    //         break;

                                //     default:
                                //         on_off.style.left = '81%'
                                //         break;
                                // }
                                // // if (on_off.style.left = '41%') {
                                // //     on_off.style.left = '38%'
                                // // } else if (on_off.style.left = '86%') {
                                // //     on_off.style.left = '81%'
                                // // }

                                var savePass = toppicElement.querySelector('.savePass')
                                var ispassword = toppicElement.querySelector('.ispassword')
                                if (savePass) {
                                    savePass.innerText = 'sử dụng mật khẩu đề xuất :'

                                }
                                ispassword.innerText = makeid(16)

                            } else if (condition < 12) {
                                bar_check2.classList.remove('borderOrgane')
                            } else if (condition < 14) {
                                bar_check1.classList.remove('borderBlue')
                                bar_check1.classList.add('borderOrgane')

                                bar_check2.classList.remove('borderBlue')
                                bar_check2.classList.add('borderOrgane')

                                bar_check3.classList.remove('borderBlue')
                            } else if (condition < 16) {
                                bar_check4.classList.remove('borderBlue')
                                if (check_test) {
                                    var check_test3 = check_test.querySelector('.condition3')
                                    if (check_test3) {
                                        var checked = check_test3.querySelector('.fa-check')
                                        var testP = check_test3.querySelector('.testP')
                                        checked.classList.remove('displayBlock')
                                        testP.classList.remove('lineThrough')
                                    }
                                }
                            }

                            var valueInputS = inputElement.value
                            var characterS = ''
                            var j = 0
                            var special_character
                            var uppercase
                            var checkS = /^[@#$^&*()_!+]*$/
                            while (j < valueInputS.length) {
                                special_character = false
                                characterS = valueInputS.charAt(j)
                                if (characterS.match(checkS)) {
                                    special_character = true
                                    break
                                }
                                j++
                            }
                            if (special_character) {
                                if (check_test) {

                                    var check_test2 = check_test.querySelector('.condition2')
                                    if (check_test2) {
                                        var checked = check_test2.querySelector('.fa-check')
                                        var testP = check_test2.querySelector('.testP')
                                        checked.classList.add('displayBlock')
                                        testP.classList.add('lineThrough')
                                    }
                                }
                            } else {
                                if (check_test) {
                                    var check_test2 = check_test.querySelector('.condition2')
                                    if (check_test2) {
                                        var checked = check_test2.querySelector('.fa-check')
                                        var testP = check_test2.querySelector('.testP')
                                        checked.classList.remove('displayBlock')
                                        testP.classList.remove('lineThrough')
                                    }
                                }
                            }


                            var valueInput = inputElement.value
                            var character = ''
                            var i = 0

                            while (i < valueInput.length) {
                                uppercase = false
                                character = valueInput.charAt(i)
                                if (special_character) {
                                    if (character.match(checkS)) {
                                        uppercase = false


                                    } else if (character == character.toUpperCase()) {
                                        uppercase = true
                                        break
                                    }
                                } else if (character == character.toUpperCase()) {
                                    uppercase = true
                                    break
                                }


                                i++
                            }
                            if (uppercase) {
                                if (check_test) {
                                    var check_test1 = check_test.querySelector('.condition1')
                                    if (check_test1) {
                                        var checked = check_test1.querySelector('.fa-check')
                                        var testP = check_test1.querySelector('.testP')
                                        checked.classList.add('displayBlock')
                                        testP.classList.add('lineThrough')
                                    }
                                }
                            } else {
                                if (check_test) {
                                    var check_test1 = check_test.querySelector('.condition1')
                                    if (check_test1) {
                                        var checked = check_test1.querySelector('.fa-check')
                                        var testP = check_test1.querySelector('.testP')
                                        checked.classList.remove('displayBlock')
                                        testP.classList.remove('lineThrough')
                                    }
                                }
                            }





                            if (inputElement.value.length >= 6) {
                                inputElement.classList.add('borderBlue')
                                topicPassword.classList.remove('displayBlock')
                            } else {
                                topicPassword.classList.add('displayBlock')
                            }
                        }

                        var on_off = formElement.querySelector('.on-off')
                        var isthis = true
                        on_off.onclick = function() {
                            if (isthis) {
                                on_off.innerHTML = '<i class="far fa-eye"></i>'
                                on_off.parentElement.querySelector('#password').type = 'text'
                                isthis = false
                            } else {
                                on_off.innerHTML = '<i class="fas fa-eye-slash"></i>'
                                on_off.parentElement.querySelector('#password').type = 'password'
                                isthis = true
                            }
                        }


                    }
                }


                var test_title = inputElement.parentElement.querySelector(params.test_title)
                var isClick = false
                inputElement.onblur = function() {
                    if (inputElement.type === 'password') {
                        if (inputElement.name === 'password') {



                            // if(inputElement.name === 'password'){

                            var toppicElement = inputElement.parentElement.querySelector('#topic-password')

                            if (toppicElement) {

                                var ispassword = toppicElement.querySelector('.ispassword')
                                if (ispassword) {
                                    var topic = toppicElement.querySelector('.topic')
                                    topic.onclick = function() {
                                        isClick = true
                                            // switch (on_off.style.left) {
                                            //     case '38%':
                                            //         on_off.style.left = '41%'
                                            //         break;

                                        //     default:
                                        //         on_off.style.left = '86%'
                                        //         break;
                                        // }
                                        // // if (on_off.style.left = '38%') {
                                        // //     on_off.style.left = '41%'
                                        // // } else if (on_off.style.left = '81%') {
                                        // //     on_off.style.left = '86%'
                                        // // }
                                        passwordElement.value = ispassword.innerText
                                        errorElement.innerHTML = ''
                                        inputElement.classList.remove('color-red')

                                    }
                                }
                            }
                            //    }   


                            var toppicElement = inputElement.parentElement.querySelector('#topic-password')


                            var check_password = formElement.querySelector('#check-password')
                            if (`$('.displayBlock').parent().hasClass('.check_password')`) {
                                check_password.classList.remove('displayBlock')
                            }

                            setTimeout(function() {
                                if (topicPassword) {

                                    if (`$('.displayBlock').parent().hasClass('.topicPassword')`) {
                                        topicPassword.classList.remove('displayBlock')
                                    }
                                }

                                inputElement.classList.remove('borderBlue')

                            }, 500)
                        }
                    }

                    if (inputElement.value === '') {
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
                    validate(inputElement, rule)
                }

                inputElement.onclick = function() {
                    if (inputElement.name === 'password') {

                        var toppicElement = inputElement.parentElement.querySelector('#topic-password')
                        if (toppicElement) {

                            var ispassword = toppicElement.querySelector('.ispassword')
                            if (ispassword) {
                                if (isClick) {
                                    ispassword.innerText = inputElement.value
                                    topicPassword.classList.add('displayBlock')
                                    var savePass = toppicElement.querySelector('.savePass')
                                    if (savePass) {
                                        savePass.innerText = 'mật khẩu này đã lưu'

                                    }
                                } else {
                                    ispassword.innerText = makeid(16)

                                }

                            }


                        }
                    }

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

                formElement.onsubmit = function(e) {

                    var isSucsec = true
                    params.rules.forEach(function(rule) {
                        var inputElements = document.querySelectorAll(rule.oop)
                        Array.from(inputElements).forEach(function(inputElement) {
                            if (!validate(inputElement, rule)) {
                                isSucsec = false
                            }
                        })
                    })
                    if (isSucsec) {
                        console.log('thành công')
                    } else {
                        e.preventDefault()
                    }
                }

            }
        })
    }
}



validatorRegist.isRequired = function(oop) {
    return {
        oop: oop,
        icon: function(value) {
            return value ? undefined : `<i class = "fas fa-info-circle"></i>`
        },
        test: function(value) {
            return value ? undefined : `vui lòng nhập trường này`
        }
    }
}

validatorRegist.isEmail = function(oop) {
    return {
        oop: oop,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : `đây không phải email`
        }
    }
}
validatorRegist.minLenght = function(oop, minLenght) {
    return {
        oop: oop,
        test: function(value) {
            return value.length >= minLenght ? undefined : `vui lòng nhập mật khẩu lớn hơn ${minLenght} kí tự`
        }
    }
}
validatorRegist.reEmail = function(oop, email, message) {
    return {
        oop: oop,
        test: function(value) {
            return value === email() ? undefined : message || 'nhập lại không chính xác'
        }
    }
}


function validatorLogin(params) {
    var rule_object = {}
    var testError




    function validate(inputElement, rule) {


        var rules = rule_object[rule.oop]
        for (var i = 0; i < rules.length; ++i) {
            testError = rules[i](inputElement.value)
            if (testError) break
        }

        var errorElement = inputElement.parentElement.querySelector(params.local_error)
        if (testError) {
            var error = errorElement.innerHTML = `<i class = "fas fa-info-circle"></i>`
            inputElement.classList.add('color-red')
            if (error) {
                var infoElement = inputElement.parentElement.querySelector('.fa-info-circle')
                var callError = inputElement.parentElement.querySelector('#border-error')
                if (callError) {
                    infoElement.onmouseover = function() {
                        callError.classList.add('displayBlock')
                        callError.innerText = testError
                    }
                    infoElement.onmouseout = function() {
                        callError.classList.remove('displayBlock')
                        callError.innerText = testError
                    }
                }
            }
        } else {
            errorElement.innerHTML = ''
            inputElement.classList.remove('color-red')
        }
        return !testError
    }
    var formElement = document.querySelector(params.form)
    if (formElement) {
        params.rules.forEach(function(rule) {
            if (Array.isArray(rule_object[rule.oop])) {
                rule_object[rule.oop].push(rule.test)
            } else {
                rule_object[rule.oop] = [rule.test]
            }
            var inputElement = formElement.querySelector(rule.oop)
            var test_title = inputElement.parentElement.querySelector(params.test_title)
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                    if (inputElement.value === '') {
                        test_title.innerText = ''
                        switch (inputElement.name) {
                            case 'email':
                                inputElement.placeholder = 'Nhập email'
                                break;
                            case 'password':
                                inputElement.placeholder = 'Nhập mật khẩu'
                                break;
                        }
                    }
                }
                if (inputElement.name === 'password') {
                    var on_off = formElement.querySelector('.on-off')
                    var isthis = true
                    on_off.onclick = function() {
                        if (isthis) {
                            on_off.innerHTML = '<i class="far fa-eye"></i>'
                            on_off.parentElement.querySelector('#password1').type = 'text'
                            isthis = false
                        } else {
                            on_off.innerHTML = '<i class="fas fa-eye-slash"></i>'
                            on_off.parentElement.querySelector('#password1').type = 'password'
                            isthis = true
                        }
                    }
                }
                inputElement.onclick = function() {
                    inputElement.placeholder = ''
                    switch (inputElement.name) {
                        case 'email':
                            test_title.innerText = 'Nhập email'
                            break;
                        case 'password':
                            test_title.innerText = 'Nhập mật khẩu'
                            break;
                    }
                }

            }
        })
        formElement.onsubmit = function(e) {

            var issucees = true
            params.rules.forEach(function(rule) {
                var inputElements = formElement.querySelectorAll(rule.oop)
                Array.from(inputElements).forEach(function(inputElement) {
                    if (!validate(inputElement, rule)) {
                        issucees = false

                    }
                })
            })
            if (issucees) {

            } else {
                e.preventDefault()
            }
        }
    }
}
validatorLogin.isRequire = function(oop) {
    return {
        oop: oop,
        test: function(value) {
            return value ? undefined : `vui lòng nhập trường này`
        }

    }
}
validatorLogin.isEmail = function(oop) {
    return {
        oop: oop,
        test: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : `đây không phải email`
        }
    }
}