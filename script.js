let doc = document
let sign = doc.getElementById("sign")
let foldables = doc.getElementsByClassName("foldable")
let i = 0

Array.from(doc).forEach(function(foldable) {
	foldable.addEventListener('click', function() {
		if(i != 0) {
			return
		}
		let interval = setInterval(function(){
			if(i < 60) {
				sign.style.height -= 1
			} else {
				i = 0
				clearInterval(interval)
			}
		}, 5)
	})
})