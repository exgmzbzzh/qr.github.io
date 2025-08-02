let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let clock = document.querySelector('.clock')
let next = document.querySelector('.next')
let tips = document.querySelector('.tips')
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
next.innerHTML = `今天是${ year }年${ month }月${ day }日`

getTime()
setInterval(getTime, 1000)
function getTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    tips.innerHTML = `现在时间是${hour}时${minute}分${second}秒`
}

countTime()
function countTime() {
    let now = +new Date()
    //2、得到指定时间的时间戳 
    let last = +new Date('2025-03-22 20:48:00')
    // 3、计算剩余的毫秒数/1000 == 剩余的秒数
    let count = (now - last) / 1000
    // 4、转换为天时分秒
    d = parseInt(count / 60 / 60 / 24)
    d = d < 10 ? '0' + d : d
    days.innerHTML = d
    h = parseInt(count / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    hours.innerHTML = h
    m = parseInt(count / 60 % 60)
    m = m < 10 ? '0' + m : m
    minutes.innerHTML = m
    s = parseInt(count % 60)
    s = s < 10 ? '0' + s : s
    seconds.innerHTML = s
}
setInterval(countTime, 1000)