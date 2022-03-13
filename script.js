let doc = document
let sign = doc.getElementById("sign")
let foldables = doc.getElementsByClassName("foldable")

let foldContents
let foldLabel
// Array.from(foldables).forEach(function(foldable) {
//     console.log("asd")
// 	foldable.addEventListener('click', function() {
//         foldContents = foldable.nextElementSibling.nextElementSibling
//         foldLabel = foldable.nextElementSibling
//
//         if(foldLabel.getAttribute("state") == '▶'){
//             console.log("opening dropdown: " + foldLabel.innerHTML)
//             foldLabel.firstElementChild.innerHTML = "▼"
//         } else {
//             foldLabel.setAttribute("state", "▶")
//         }
// 	})
// })