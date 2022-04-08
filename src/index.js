import {sum, multi} from "./calc";
import "./index.css";
import  logo from "./image/1_p7_Wx_gf8MmfOdDmk2iZlQ.png"

console.log(sum(4, 6))

console.log(multi(5, 5))

const root = document.getElementById("root")

const h1 = document.createElement("h1")
h1.innerText = "Hello world"
h1.classList.add("redtext")

 
const ptag = document.createElement("p")
ptag.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
ptag.classList.add("ptext")

var imgtag = document.getElementById("imgtag")


var img1 = document.createElement("img")
img1.src = logo
img1.classList.add("imgtag")
imgtag.append(img1)
root.append(h1, ptag)