// let width = window.innerWidth

// window.addEventListener('resize', function() {
//     width =this.window.innerWidth
//     console.log(`윈도우 넓이 : ${width}`)
// })
// window.addEventListener('resize', function() {
//     let width = document.querySelector('main').scrollWidth
//     console.log(`<main> 영역의 넓이: ${width}`)
//     let viewWidth = document.querySelector('main').clientWidth
//     console.log(`<main> 영역의 보여지는 넓이: ${viewWidth}`)
// })
// header 라벨 설정
document.querySelector('header').innerText='My Portfolio'
const menuItems = [
    {url: './index_copy.html', text:'home'},
    {url: './portfolio.html', text:'Portfolio'},
    {url: './portfolio2.html', text:'Portfolio2'},
    {url: './portfolio3.html', text:'Portfolio3'}
]

// nav 메뉴 설정
const nav = document.querySelector('nav>ul')
for (const menu of menuItems) {
    const li = document.createElement('li')
    li.innerText = menu.text
    li.addEventListener('click', function() {
        location.href = menu.url
    })
    nav.append(li)
}

//footer 설정
const today = new Date()
const footerText = `powerlinux.co.kr &copy; ${today.getFullYear()}`
const footer = document.createElement('div')
footer.innerHTML = footerText
document.querySelector('footer').append(footer)