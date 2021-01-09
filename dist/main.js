(()=>{"use strict";const e=function(){const e=document.createElement("div"),t=document.createElement("img");t.src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";const n=document.createElement("p");n.classList.add("intro"),n.textContent="Welcome to The Good Plates.";const o=document.createElement("p");o.classList.add("intro"),o.textContent="Good Food, Good Mood!",e.appendChild(n),e.appendChild(o),e.appendChild(t),document.getElementById("content").appendChild(e)};(function(){const e=document.createElement("div");e.classList.add("header-container");const t=document.createElement("header"),n=document.createElement("div"),o=document.createElement("h1");o.textContent="The Good Plates!";const d=document.createElement("p");d.classList.add("subtitle"),d.textContent="The best food you can get at a reasonable price.",n.appendChild(o),n.appendChild(d);const c=document.createElement("nav"),i=document.createElement("ul"),a=document.createElement("li");a.textContent="Home",a.setAttribute("id","home"),i.appendChild(a);const m=document.createElement("li");m.textContent="Menu",m.setAttribute("id","menu"),i.appendChild(m);const l=document.createElement("li");l.textContent="About",l.setAttribute("id","about"),i.appendChild(l),c.appendChild(i),t.appendChild(n),t.appendChild(c),e.appendChild(t),document.getElementById("navcontent").appendChild(e)})(),e(),content=document.getElementById("content"),home=document.getElementById("home"),home.addEventListener("click",(()=>{content.textContent="",e()})),menu=document.getElementById("menu"),menu.addEventListener("click",(()=>{content.textContent="",function(){const e=document.createElement("div");e.classList.add("menu-content");const t=document.createElement("div"),n=document.createElement("h3");n.textContent="The Good Burger";const o=document.createElement("img");o.src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",t.appendChild(n),t.appendChild(o);const d=document.createElement("div"),c=document.createElement("h3");c.textContent="The Good Pizza";const i=document.createElement("img");i.src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",d.appendChild(c),d.appendChild(i);const a=document.createElement("div"),m=document.createElement("h3");m.textContent="The Good Cake";const l=document.createElement("img");l.src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",a.appendChild(m),a.appendChild(l);const s=document.createElement("div"),u=document.createElement("h3");u.textContent="The Good Icecream";const p=document.createElement("img");p.src="https://images.unsplash.com/photo-1561845730-208ad5910553?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",s.appendChild(u),s.appendChild(p),e.appendChild(t),e.appendChild(d),e.appendChild(a),e.appendChild(s),document.getElementById("content").appendChild(e)}()})),about=document.getElementById("about"),about.addEventListener("click",(()=>{content.textContent="",function(){const e=document.createElement("div");e.classList.add("about");const t=document.createElement("h2");t.textContent="About Us";const n=document.createElement("p");n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique leo pulvinar leo elementum accumsan. Vivamus vulputate risus vel libero maximus egestas. Nulla facilisi. Etiam tempus dictum finibus. Fusce sed mi elit. Aenean in elit tempor, porttitor nisl non, dignissim augue. Mauris felis sapien, commodo ultrices scelerisque eu, feugiat eget erat. In at magna vel dolor tincidunt imperdiet vel id massa. Ut eu eros et dolor lacinia commodo.";const o=document.createElement("p");o.textContent="Maecenas sed accumsan enim. Sed sollicitudin felis quis nibh ultrices aliquet. In ut risus at orci fringilla sodales. Donec dapibus nunc nec efficitur faucibus. Nam mi ex, tincidunt in tempus vel, aliquam non elit. Integer tempor dui luctus, consequat mi nec, fermentum lorem.";const d=document.createElement("p");d.textContent="Contact us at: thegoodplates@gmail.com",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d),document.getElementById("content").appendChild(e)}()}))})();