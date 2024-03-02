
let tb = document.querySelector('tbody')

class User {
    constructor(en, boy, razmer){
        this.en = en
        this.boy = boy
        this.razmer = razmer
    }
    number(){
        return (this.en + this.boy) / this.razmer
    }

    width(){
        return this.en * this.boy
    }

    og(){
        return this.razmer / 50 * 2
    }
}

let frm = document.querySelector('form')
let users = []
frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let u = new User(
        frm.number.value, 
        frm.width.value,
        frm.og.value
    )

    users.push(u)
    render(users)
})

function render(users) {
    tb.innerHTML = ''
    users.map((item) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${item.number()}</td>
        <td>${item.width()}</td>
        <td>${item.ogirlig()}</td>
        `

        tb.append(tr)
    })
}