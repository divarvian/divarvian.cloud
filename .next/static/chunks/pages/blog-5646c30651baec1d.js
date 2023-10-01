(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(9989)}])},6137:function(e,l,s){"use strict";var r=s(5893),a=s(7294),t=s(1664),i=s.n(t),n=s(2446);let o=e=>{let{post:l}=e,{title:s,slug:t,excerpt:o,datetime:c}=l,d=(0,a.useRef)(null);return(0,r.jsxs)("li",{ref:d,className:"my-4 md:mt-0 md:mb-8",children:[(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsx)(i(),{href:"/blog/posts/".concat(t),className:"blog-title link inline-block outline-none dark:outline-none focus-within:underline",children:(0,r.jsx)("h3",{className:"text-lg font-medium",children:s})})}),(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsxs)("div",{className:"blog-datetime italic text-sm mb-1 text-carddark dark:text-gray-300 flex items-center",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),(0,r.jsx)(n.Z,{datetime:c})]})}),(0,r.jsx)("p",{className:"blog-excerpt dark:text-gray-300",children:o})]})};l.Z=o},2446:function(e,l,s){"use strict";var r=s(5893),a=s(7294);let t=e=>{let{datetime:l}=e,[s,t]=(0,a.useState)(null),[i,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=new Date(l),s=e.toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});t(s),n(r)},[l]),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"sr-only",children:"Posted on: "}),s," ",(0,r.jsx)("span",{"aria-hidden":"true",children:"|"}),(0,r.jsx)("span",{className:"sr-only",children:"\xa0at\xa0"})," ",i]})};l.Z=t},4866:function(e,l,s){"use strict";var r=s(5893),a=s(7294),t=s(6038);let i=e=>{let{children:l}=e,s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=t.ZP.utils.selector(s),l=t.ZP.timeline({defaults:{duration:.7}});l.fromTo(e(".loading-text"),{y:120},{y:-10}),l.to(e(".white-bg"),{y:"-100%"}).to(e(".dark-bg"),{y:"-100%",duration:.6},"-=0.6")},[]),(0,r.jsxs)("div",{ref:s,"aria-hidden":"true",children:[(0,r.jsx)("div",{className:"white-bg fixed top-0 left-0 w-full h-screen bg-[#f0f5fa] dark:bg-[#0e141a] z-[9999] flex justify-center items-center",children:(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsx)("span",{className:"loading-text inline-block text-bgdark dark:text-bglight text-4xl sm:text-5xl lg:text-7xl tracking-widest",children:l})})}),(0,r.jsx)("div",{className:"dark-bg fixed top-0 left-0 w-full h-screen bg-marrsgreen dark:bg-carrigreen z-[9998]"})]})};l.Z=i},9989:function(e,l,s){"use strict";s.r(l),s.d(l,{__N_SSG:function(){return p},default:function(){return j}});var r=s(5893),a=s(4133),t=s(7294),i=s(6038),n=s(6546),o=s(1751);let c=()=>{let{searchText:e,onSearch:l,postLanguage:s,onLanguageChange:a}=(0,o.L0)(),c=e=>{l(e.target.value)},d=(0,t.useRef)(null),m=i.ZP.utils.selector(d);return(0,t.useEffect)(()=>{i.ZP.registerPlugin(n.ScrollTrigger),i.ZP.fromTo(m(".main-header"),{y:100},{y:0,delay:1.1}),i.ZP.timeline({defaults:{stagger:.1,duration:.2}}).fromTo(m(".intro-1"),{y:30,opacity:0},{y:0,opacity:1,delay:1.3}).fromTo(m(".intro-2"),{y:30,opacity:0},{y:0,opacity:1}).fromTo(m(".intro-3"),{y:30,opacity:0},{y:0,opacity:1})},[]),(0,r.jsxs)("section",{ref:d,className:"py-4 pt-20 md:pt-24 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",children:[(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("div",{className:"overflow-hidden py-1",children:(0,r.jsxs)("h1",{className:"main-header text-4xl lg:text-5xl font-bold",children:["DivaArvian's"," ",(0,r.jsx)("span",{className:"text-marrsgreen dark:text-carrigreen",children:"Blog"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"intro-1 mt-4 mb-2",children:"Hello, everyone! Welcome to my personal blog."}),(0,r.jsx)("p",{className:"intro-2",children:"In this blog, I will be writing about my projects (what I do/how I did), my personal experiences, and some random stuffs."}),(0,r.jsxs)("p",{className:"intro-3",children:["You can follow me on my social media and"," ",(0,r.jsx)("a",{href:"https://github.com/divarvian",className:"link",children:"Github account."}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 inline-block ml-1 fill-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",strokeWidth:0,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})]})]})]}),(0,r.jsxs)("label",{className:"relative block my-4",children:[(0,r.jsx)("input",{className:"placeholder:italic placeholder:text-opacity-75 py-3 pr-14 pl-5 block bg-cardlight dark:bg-carddark w-full rounded shadow-md border border-cardlight dark:border-carddark border-opacity-40 focus:outline-none focus:border-marrslight focus:dark:border-carrilight",placeholder:"Search for anything...",type:"text",name:"search",defaultValue:e,onChange:c,autoComplete:"off",autoFocus:!0}),(0,r.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-5 opacity-80",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",className:"fill-marrsgreen dark:fill-carrigreen",children:(0,r.jsx)("path",{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"})})})]}),(0,r.jsxs)("div",{className:"flex items-center my-4 md:my-6",children:[(0,r.jsxs)("label",{htmlFor:"language",className:"mr-2 flex items-center gap-x-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"})}),"Blog Posts Language:"," "]}),(0,r.jsxs)("select",{name:"language",id:"language",className:"px-2 py-1 bg-cardlight dark:bg-carddark focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen",defaultValue:s,onChange:e=>a(e.target.value),children:[(0,r.jsx)("option",{value:"All",children:"All"}),(0,r.jsx)("option",{value:"English",children:"English"}),(0,r.jsx)("option",{value:"Myanmar",children:"Myanmar"})]})]})]})};var d=s(5831),m=s(8819),x=s(3811),h=s(6137),u=s(4260),g=s(4866);let f=e=>{let{posts:l}=e,{searchText:s,postLanguage:t}=(0,o.L0)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"Blog - DivaArvian"}),(0,r.jsx)(g.Z,{children:"DivaArvian's Blog"}),(0,r.jsx)("div",{className:"bg-bglight dark:bg-bgdark min-h-screen",children:(0,r.jsxs)("div",{className:"selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark",children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(x.Z,{}),(0,r.jsx)(m.Z,{}),(0,r.jsxs)("main",{id:"main",className:"mb-20",children:[(0,r.jsx)(c,{}),""===s&&"All"===t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",children:[(0,r.jsx)("h2",{className:"text-2xl font-medium mb-2",children:"Featured Posts"}),(0,r.jsx)("ul",{children:l.map(e=>e.featured&&(0,r.jsx)(h.Z,{post:e},e.slug))})]}),(0,r.jsx)("hr",{"aria-hidden":"true",className:"mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"})]}),(0,r.jsxs)("div",{className:"px-4 sm:px-8 md:px-20 max-w-4xl mx-auto",children:[(0,r.jsxs)("h2",{className:"text-2xl font-medium mb-2",children:[""===s&&"All"===t&&"All Posts",""!==s&&(0,r.jsx)("div",{children:"Search result(s)"}),"All"!==t&&"Posts written in '".concat(t,"' language")]}),(0,r.jsx)("ul",{children:l.filter(e=>{let{title:l}=e;return l.toLowerCase().includes(s.toLowerCase())}).filter(e=>{let{language:l}=e;return"All"===t||l===t}).map(e=>(0,r.jsx)(h.Z,{post:e},e.slug))})]})]}),(0,r.jsx)(u.Z,{})]})})]})};var p=!0,j=f}},function(e){e.O(0,[664,546,590,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);