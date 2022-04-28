let form = document.forms.subscribe
let inputs = form.querySelectorAll('input')

console.log(inputs);


form.onsubmit = (event) => {
    // останавливает обновление страницы
    event.preventDefault()
    let arr = []

    for(let item of inputs) {
        if(item.value.length === 0) {
            arr.push(1)
            item.style.border = '2px solid red'
        }else if(item.value.length > 0){
            item.style.border = '2px solid green'
        }
    }

    if(arr.length !== 0) {
    } else {
        submit()
    }

}


function submit() {
    let user = {}
    // собирает данные из формы
    let fm = new FormData(form)

    // заполняет объект
    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}