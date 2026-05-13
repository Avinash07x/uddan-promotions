import{a as e}from"./chunk-BNv3lrIs.js";import{a as t,t as n}from"./index-BbPgGTjs.js";var r=e(t(),1),i=n(),a=({item:e})=>(0,i.jsxs)(`div`,{className:`\r
        min-w-[300px]\r
        max-w-[300px]\r
        bg-white/5 backdrop-blur-xl\r
        border border-white/10\r
        rounded-2xl\r
        p-6\r
        mx-3\r
      `,children:[(0,i.jsxs)(`p`,{className:`text-sm text-gray-300 leading-relaxed`,children:[`“`,e.quote,`”`]}),(0,i.jsxs)(`div`,{className:`border-t border-white/10 pt-4 mt-5`,children:[(0,i.jsx)(`h4`,{className:`text-white font-semibold`,children:e.name}),(0,i.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[e.role,` ·`,` `,e.company]}),(0,i.jsx)(`p`,{className:`text-xs text-cyan-400 mt-1`,children:e.city})]})]}),o=({items:e,reverse:t})=>(0,i.jsx)(`div`,{className:`overflow-hidden py-5`,children:(0,i.jsx)(`div`,{className:`
          flex w-max
          ${t?`animate-marquee-reverse`:`animate-marquee`}
        `,children:e.map(e=>(0,i.jsx)(a,{item:e},e._id))})});function s(){let[e,t]=(0,r.useState)([]);(0,r.useEffect)(()=>{n()},[]);let n=async()=>{try{let e=await(await fetch(`http://localhost:5000/api/testimonial`)).json();e.success&&t(e.testimonials)}catch(e){console.log(e)}},a=e.filter(e=>Number(e.row)===1),s=e.filter(e=>Number(e.row)===2);return(0,i.jsxs)(`section`,{className:`py-20 bg-gradient-to-b from-[#1e3a8a] to-[#020617] overflow-hidden`,children:[(0,i.jsxs)(`div`,{className:`max-w-7xl mx-auto px-6 text-center`,children:[(0,i.jsx)(`h2`,{className:`text-4xl md:text-5xl font-bold text-white`,children:`Testimonials`}),(0,i.jsx)(`p`,{className:`text-white/60 mt-4`,children:`Trusted by clients worldwide`}),a.length>0&&(0,i.jsx)(o,{items:a}),s.length>0&&(0,i.jsx)(o,{items:s,reverse:!0})]}),(0,i.jsx)(`style`,{children:`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee 10s linear infinite reverse;
        }
      `})]})}export{s as default};