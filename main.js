window.addEventListener("DOMContentLoaded", () => {
    let ota = document.querySelector(".ota")
    let btn = document.getElementById("search")
    let input = document.getElementById("input")
    let video = document.getElementById("video")
    let source = document.querySelector("#video source")
    let videoContainer = document.querySelector(".video-container")
    let title = document.querySelector(".title")
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let values = input.value
        console.log(values)
        if(values === "Baqara sur'asi"){
            video.style.display = 'none'
            let h1 = document.createElement("h1")
            h1.style.color = '#000'
            h1.style.textAlign = 'center'
            h1.appendChild(document.createTextNode("Qidirilmoqda .... "))
            title.appendChild(h1)
            console.log(title)
            setTimeout(() => {
                h1.remove()
                let video1 = document.createElement("video")
                video1.muted = true
                video1.autoplay = true
                video1.controls = true
                video1.style.paddingTop = '1rem'
                videoContainer.appendChild(video1)
                let source1 = document.createElement("source")
                source1.src = "./Video/Baqara sur'asi.mp4"
                video1.appendChild(source1)
                console.log(ota)
            }, 2500)
        }
        else if(values === "Yosin sur'asi"){
            video.style.display = 'none'
            let h1 = document.createElement("h1")
            h1.appendChild(document.createTextNode("Qidirilmoqda .... "))
            title.appendChild(h1)
            h1.style.color = '#000'
            h1.style.textAlign = 'center'
            console.log(title)
            setTimeout(() => {
                h1.remove()
                let video1 = document.createElement("video")
                video1.muted = true
                video1.autoplay = true
                video1.controls = true
                video1.style.paddingTop = '1rem'
                videoContainer.appendChild(video1)
                let source1 = document.createElement("source")
                source1.src = "./Video/Yosin sur'asi.mkv"
                video1.appendChild(source1)
                console.log(ota)
            }, 2500)          
        }
        else if(values === "Kahf sur'asi"){
            video.style.display = 'none'
            let h1 = document.createElement("h1")
            h1.appendChild(document.createTextNode("Qidirilmoqda .... "))
            title.appendChild(h1)
            h1.style.color = '#000'
            h1.style.textAlign = 'center'
            console.log(title)
            setTimeout(() => {
                h1.remove()
                let video1 = document.createElement("video")
                video1.muted = true
                video1.autoplay = true
                video1.controls = true
                video1.style.paddingTop = '1rem'
                videoContainer.appendChild(video1)
                let source1 = document.createElement("source")
                source1.src = "./Video/Kahf sur'asi.mkv"
                video1.appendChild(source1)
                console.log(ota)
            }, 2500)        
        }
    })
    let array = ["Yosin sur'asi", "Baqara sur'asi", "Kahf sur'asi"]
    let videos = document.getElementById("videos")
    let class3 = document.getElementById("class-3")
    document.getElementById("yosin").addEventListener("click", () => {
        video.remove()
        let div = document.createElement("div")
        div.id = 'titles'
        div.style.width = '80%'
        div.style.margin = '0 auto'
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        videos.appendChild(div)
        let h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode("Yosin sur'asi qidirilmoqda ... "))
        div.appendChild(h1)
        h1.id = 'yosinh1'
        setTimeout(() => {
            class3.style.display = 'none'
            h1.remove()
            let video1 = document.createElement("video")
            video1.muted = true
            video1.autoplay = true
            video1.controls = true
            video1.style.paddingTop = '1rem'
            videoContainer.appendChild(video1)
            let source1 = document.createElement("source")
            source1.src = "./Video/Yosin sur'asi.mkv"
            video1.appendChild(source1)
            console.log(ota)
        }, 2500)
    })
    document.getElementById("baqara").addEventListener("click", () => {
        video.remove()
        let div = document.createElement("div")
        div.id = 'titles'
        div.style.width = '80%'
        div.style.margin = '0 auto'
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        videos.appendChild(div)
        let h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode("Baqara sur'asi qidirilmoqda ... "))
        div.appendChild(h1)
        h1.id = 'yosinh1'
        setTimeout(() => {
            class3.style.display = 'none'
            h1.remove()
            let video1 = document.createElement("video")
            video1.muted = true
            video1.autoplay = true
            video1.controls = true
            video1.style.paddingTop = '1rem'
            videoContainer.appendChild(video1)
            let source1 = document.createElement("source")
            source1.src = "./Video/Baqara sur'asi.mp4"
            video1.appendChild(source1)
            console.log(ota)
        }, 2500)
    })
    document.getElementById("kahf").addEventListener("click", () => {
        video.remove()
        let div = document.createElement("div")
        div.id = 'titles'
        div.style.width = '80%'
        div.style.margin = '0 auto'
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        videos.appendChild(div)
        let h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode("Kahf sur'asi qidirilmoqda ... "))
        div.appendChild(h1)
        h1.id = 'yosinh1'
        setTimeout(() => {
            class3.style.display = 'none'
            h1.remove()
            let video1 = document.createElement("video")
            video1.muted = true
            video1.autoplay = true
            video1.controls = true
            video1.style.paddingTop = '1rem'
            videoContainer.appendChild(video1)
            let source1 = document.createElement("source")
            source1.src = "./Video/Kahf sur'asi.mkv"
            video1.appendChild(source1)
            console.log(ota)
        }, 2500)
    })
})
