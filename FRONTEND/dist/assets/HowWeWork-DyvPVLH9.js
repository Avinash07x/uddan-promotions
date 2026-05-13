import{a as e}from"./chunk-BNv3lrIs.js";import{a as t,t as n}from"./index-BbPgGTjs.js";import{t as r}from"./gsap-XM7u9PzE.js";import{t as i}from"./ScrollTrigger-O3lQnFJk.js";var a=e(t(),1),o=n();r.registerPlugin(i);var s=[{title:`Discovery & Strategy`,desc:`Stakeholder interviews, user research and competitive benchmarking to define goals, KPIs and success metrics.`},{title:`Experience & Architecture`,desc:`Information architecture, wireframes and technical blueprints that prioritise usability, scalability and compliance.`},{title:`Build, Secure & Launch`,desc:`Agile sprints with automated testing, DevSecOps and performance optimisation before go-live.`},{title:`Measure & Optimise`,desc:`Continuous analytics, experimentation and growth loops to maximise lifetime value.`}];function c(){let e=(0,a.useRef)(null),t=(0,a.useRef)([]);return(0,a.useLayoutEffect)(()=>{let n=r.context(()=>{r.fromTo(`.how-heading`,{opacity:0,y:30},{opacity:1,y:0,duration:.9,ease:`power3.out`,scrollTrigger:{trigger:e.current,start:`top 85%`}}),t.current.forEach((e,t)=>{e&&r.fromTo(e,{opacity:0,y:50,scale:.97},{opacity:1,y:0,scale:1,duration:.8,delay:t*.1,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 90%`,toggleActions:`play none none reverse`}})})},e);return()=>n.revert()},[]),(0,o.jsxs)(`section`,{ref:e,className:`\r
        relative bg-[#020617] text-white\r
        py-14 sm:py-20 md:py-24\r
        px-4 sm:px-6 md:px-12 lg:px-16\r
        overflow-hidden\r
      `,children:[(0,o.jsx)(`div`,{className:`absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full`}),(0,o.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,o.jsxs)(`div`,{className:`how-heading text-center md:text-left`,children:[(0,o.jsx)(`h2`,{className:`text-2xl sm:text-3xl md:text-5xl font-bold`,children:`How we work`}),(0,o.jsx)(`p`,{className:`mt-4 sm:mt-6 text-gray-400 max-w-3xl text-sm sm:text-base`,children:`A transparent delivery framework focused on long-term value. Our proven methodology keeps teams aligned and maximises results.`})]}),(0,o.jsxs)(`div`,{className:`relative mt-10 sm:mt-14 md:mt-16`,children:[(0,o.jsx)(`div`,{className:`\r
            hidden md:block\r
            absolute left-4 sm:left-5 top-0 bottom-0 w-[2px] bg-white/10\r
          `}),(0,o.jsx)(`div`,{className:`space-y-6 sm:space-y-8 md:space-y-10`,children:s.map((e,n)=>(0,o.jsxs)(`div`,{ref:e=>t.current[n]=e,className:`\r
                  relative\r
                  bg-white/5 border border-white/10\r
                  backdrop-blur-xl\r
                  rounded-xl sm:rounded-2xl\r
                  p-4 sm:p-6 md:p-8\r
                  pl-12 sm:pl-14 md:pl-16\r
                  transition\r
                  hover:border-cyan-400/40\r
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]\r
                `,children:[(0,o.jsx)(`div`,{className:`\r
                  absolute left-0 sm:left-1 md:left-0 top-4 sm:top-5 md:top-6\r
                  w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10\r
                  text-cyan-400\r
                  flex items-center justify-center\r
                  font-semibold text-[10px] sm:text-xs md:text-sm\r
                `,children:String(n+1).padStart(2,`0`)}),(0,o.jsx)(`h3`,{className:`text-base sm:text-lg md:text-xl font-semibold`,children:e.title}),(0,o.jsx)(`p`,{className:`mt-2 sm:mt-3 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed`,children:e.desc})]},n))})]})]})]})}export{c as default};