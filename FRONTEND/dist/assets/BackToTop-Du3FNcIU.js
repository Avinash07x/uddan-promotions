import{a as e}from"./chunk-BNv3lrIs.js";import{a as t,t as n}from"./index-BbPgGTjs.js";import{t as r}from"./createLucideIcon-BQPHrGCY.js";import{t as i}from"./proxy-DGiw73Yg.js";import{t as a}from"./AnimatePresence-BFM-AJcU.js";import{t as o}from"./use-reduced-motion-D8HU9DPf.js";var s=r(`arrow-up`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),c=e(t(),1),l=n();function u(){let[e,t]=(0,c.useState)(!1),n=o();return(0,c.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,l.jsx)(a,{children:e&&(0,l.jsxs)(i.button,{onClick:()=>{window.scrollTo({top:0,behavior:n?`auto`:`smooth`})},"aria-label":`Back to top`,initial:{opacity:0,scale:.6,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.6,y:30},transition:{duration:.3},whileHover:{scale:1.1,y:-3},whileTap:{scale:.95},className:`\r
            fixed bottom-6 right-6 z-50\r
            w-12 h-12 rounded-full\r
            bg-white text-black\r
            flex items-center justify-center\r
            shadow-lg\r
            hover:shadow-xl\r
            transition-all duration-300\r
          `,children:[(0,l.jsx)(s,{className:`w-5 h-5 text-black font-bold`}),(0,l.jsx)(`span`,{className:`\r
            absolute inset-0 rounded-full\r
            bg-gradient-to-tr from-orange-500 to-pink-500\r
            blur-xl opacity-50\r
            -z-10\r
          `})]},`back-to-top`)})}export{u as default};