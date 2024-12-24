function cardcreation(title, cname, thumbnail, views, duration, old) {
    let html=` <div class="card">
            <div class="image"><img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="videoinfo"><h1>${title}</h1>
            <p>${cname} . ${views} views . ${old} months ago </p></div>  
        </div>`

        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}

cardcreation("tutorial on velocity edits","vraj lakum","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ","45600","02:45","57");

cardcreation("tutorial on velocity edits","vraj lakum","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ","45600","09:56","57");