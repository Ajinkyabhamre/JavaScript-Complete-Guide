let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<div>I am second div</div>'

let div3 = document.createElement('div')
div3.innerHTML = '<h1>I am third div</h1>'
a.appendChild(div3)

let div4 = document.createElement('div')
div4.innerHTML = '<h1>I am 4th div</h1>'
a.appendChild(div4)

let div5 = document.createElement('div')
div5.innerHTML = '<h1>I am 5th div</h1>'
a.prepend(div5)

let div6 = document.createElement('div')
div6.innerHTML = '<p>I am outer div -> outside before main container</p>'
a.before(div6)

let div7 = document.createElement('div')
div7.innerHTML = '<p>I am outer div -> outside after main container</p>'
a.after(div7)


// a.replaceWith(div3)
