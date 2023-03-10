const uly = document.getElementById("u");
const input = document.getElementById("i");
const btm = document.getElementById("b");
btm.addEventListener("click", ()=> {
    const getData = async()=> {
        const aid = await fetch("https://jsonplaceholder.typicode.com/posts");
        const dada = await aid.json()
    
    const filter = dada.filter((el) => el.userId == input.value)
    const gama = filter.map((el)=> {
        return`<div class = "nav"><p>userId: ${el.userId}</p><p>id: ${el.id} </p><p> ${el.title} </p><p> ${el.body}</p></div>`
    })
    uly.innerHTML=gama.join("")

}
getData()
})