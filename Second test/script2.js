window.addEventListener('load', ()=>{
    const form = document.querySelector("#search-form")
    form.addEventListener('submit', getUserDetails)
})

function getUserDetails(event)
{
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
   
    if(data.username == "" || !data.username)
    {
        alert("Please enter a valid username")
    }

   


fetch(`https://api.github.com/users/${data.username}`)
.then(response => response.json())
.then(apiData => {

    if(apiData.message && apiData.message == "Not Found")
    {
        alert("Username not found")
        return
    }

    
    const image = document.querySelector("#image")
    const h3 = document.querySelector("#name")
    const bioSpan = document.querySelector("#bio")
    const reposSpan = document.querySelector("#public_repos")

    image.setAttribute("src", apiData.avatar_url)

    h3.innerHTML = apiData.username
    bioSpan.innerHTML = apiData.bio
    reposSpan.innerHTML = apiData.public_repos

    console.log("data", apiData)

})
}
