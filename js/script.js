    // skills control 
    function showSkills(){
        document.getElementById("skilled").onclick=()=>{
            document.getElementById('describe').classList.toggle("show");
        }
        document.getElementById("ps").onclick=()=>{
            document.getElementById('photoshop').classList.toggle("show");
        }
        document.getElementById("ill").onclick=()=>{
            document.getElementById('illustrator').classList.toggle("show");
        }
        document.getElementById("python").onclick=()=>{
            document.getElementById('py').classList.toggle("show");
        }
        document.getElementById("c").onclick=()=>{
            document.getElementById('c-lang').classList.toggle("show");
        }
        document.getElementById("js").onclick=()=>{
            document.getElementById('java-script').classList.toggle("show");
        }
        document.getElementById("english").onclick=()=>{
            document.getElementById('eng').classList.toggle("show");
        }
        document.getElementById("kinya").onclick=()=>{
            document.getElementById('kinyarwanda').classList.toggle("show");
        }
        document.getElementById("sw").onclick=()=>{
            document.getElementById('swahili').classList.toggle("show");
        }
    }
    document.addEventListener("DOMContentLoaded",showSkills);

    navToogler=function(){
        barMenu=document.getElementById('menu');
        navMenu=document.getElementById('navmenu')
        barMenu.addEventListener('click',function(){
        navMenu.classList.toggle('show')
    })
    }
    document.addEventListener("DOMContentLoaded",navToogler)

    // -----------unfold projects-----------
    project=