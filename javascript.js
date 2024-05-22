let page = 1;
const btnNext  = document.getElementById("btn_next")
const btnprev  = document.getElementById("btn_prev")

const input = document.getElementById("search")
const inputbtn = document.getElementById("btn_search")
let searchValue = ""

const date = document.getElementById("day");
date.innerHTML = `Date : ${new Date()}`

const getJobs = async () => {
    const url = `https://frcz3-8080.csb.app/jobs?_limit=10&_page=${page}&q=${searchValue}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
}
const renderJobs = async () => {
    const jobs = await getJobs();
    const listJob = document.getElementById("list_job");
    listJob.innerHTML =""
    jobs.forEach((job) => {
        const div = document.createElement("li")
        div.innerHTML=job.title;
        listJob.appendChild(div)
    })
}
renderJobs()




inputbtn.addEventListener("click",() => {
    searchValue=input.value;
    renderJobs()
    console.log(searchValue)
    
})

btnNext.addEventListener("click",() => {
    page +=1
    renderJobs()
})


btnprev.addEventListener("click",() => {
   if( page=== 1) {
    return
   }else{
    page -= 1
    renderJobs()
   }
})



