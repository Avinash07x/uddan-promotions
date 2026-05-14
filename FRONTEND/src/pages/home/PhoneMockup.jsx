import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

export const SLIDES = [
  { tag:"Live Dashboard",  title:"SEO + SMO Analytics",     sub:"Real-time growth metrics",       h1:["Future-Ready","SaaS &","Growth Engines."], accent:"#0affb2" },
  { tag:"SEO Audit",       title:"Health Score: 88/100",    sub:"Technical + content analysis",   h1:["Dominate","Search","Results."],            accent:"#7b5cfa" },
  { tag:"Lead Engine",     title:"2,847 Leads This Month",  sub:"+65% month-over-month growth",   h1:["Convert &","Scale","Revenue."],            accent:"#ff4f6d" },
  { tag:"Global Growth",   title:"150+ Countries Reached",  sub:"Multi-region performance",       h1:["Go","Global","Fast."],                     accent:"#ffb700" },
];

const BAR_H       = [30,45,38,62,55,78,70,92];
const SEO_ITEMS   = [
  {label:"On-page", val:92,color:"#0affb2"},{label:"Backlinks",val:74,color:"#7b5cfa"},
  {label:"Speed",   val:88,color:"#ffb700"},{label:"Mobile",   val:96,color:"#ff4f6d"},
  {label:"Content", val:81,color:"#0affb2"},
];
const GROWTH_BARS = [
  {label:"India",val:92,grad:"#0affb2,#7b5cfa"},{label:"USA",val:78,grad:"#7b5cfa,#ff4f6d"},
  {label:"UK",   val:65,grad:"#ffb700,#ff4f6d"},{label:"UAE",val:54,grad:"#ff4f6d,#7b5cfa"},
  {label:"SG",   val:41,grad:"#0affb2,#ffb700"},
];

function Slide1({barsRef}){
  return(
    <div className="pslide">
      <div className="ph-hdr">SEO + SMO Dashboard</div>
      <div className="ph-title-sm">Growth Engine 📊</div>
      <div className="ph-metric-box">
        <div><div className="ph-ml">Reach</div><div className="ph-mv">+150%</div></div>
        <span className="ph-badge">↑ Live</span>
      </div>
      <div className="mini-chart">
        {BAR_H.map((h,i)=>(
          <div key={i} className="mbar" ref={el=>{if(barsRef)barsRef.current[i]=el;}} style={{height:`${h}%`}}/>
        ))}
      </div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#0affb2"}}/><span className="ph-rl">Leads</span><span className="ph-rv" style={{color:"#0affb2"}}>+65%</span></div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#7b5cfa"}}/><span className="ph-rl">Engagement</span><span className="ph-rv" style={{color:"#7b5cfa"}}>3.2x</span></div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#ffb700"}}/><span className="ph-rl">Conversions</span><span className="ph-rv" style={{color:"#ffb700"}}>+88%</span></div>
    </div>
  );
}

function Slide2({ringRef,seoFillRefs}){
  return(
    <div className="pslide">
      <div className="ph-hdr">SEO Health Score</div>
      <div className="ph-title-sm">Audit Results</div>
      <div className="seo-ring-wrap">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="8"/>
          <circle ref={ringRef} cx="45" cy="45" r="36" fill="none" stroke="#0affb2" strokeWidth="8"
            strokeLinecap="round" strokeDasharray="226" strokeDashoffset="226" transform="rotate(-90 45 45)"/>
          <text x="45" y="42" textAnchor="middle" fill="#e8eaf6" fontSize="14" fontWeight="800" fontFamily="Syne,sans-serif">88</text>
          <text x="45" y="56" textAnchor="middle" fill="#6a74a0" fontSize="8" fontFamily="Space Mono,monospace">SCORE</text>
        </svg>
      </div>
      <div className="seo-items">
        {SEO_ITEMS.map((s,i)=>(
          <div className="seo-item" key={i}>
            <span className="seo-label">{s.label}</span>
            <div className="seo-track"><div className="seo-fill" ref={el=>{if(seoFillRefs)seoFillRefs.current[i]=el;}} data-w={s.val} style={{background:s.color,width:"0%"}}/></div>
            <span className="seo-val" style={{color:s.color}}>{s.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3({lineRef}){
  return(
    <div className="pslide">
      <div className="ph-hdr">Lead Generation</div>
      <div className="ph-title-sm">This Month</div>
      <div className="leads-grid">
        <div className="lead-card"><div className="lead-num" style={{color:"#0affb2"}}>2,847</div><div className="lead-lbl">Total Leads</div></div>
        <div className="lead-card"><div className="lead-num" style={{color:"#7b5cfa"}}>+65%</div><div className="lead-lbl">vs Last Month</div></div>
        <div className="lead-card"><div className="lead-num" style={{color:"#ffb700"}}>38%</div><div className="lead-lbl">Conversion</div></div>
        <div className="lead-card"><div className="lead-num" style={{color:"#ff4f6d"}}>₹4.2L</div><div className="lead-lbl">Revenue Gen</div></div>
      </div>
      <div className="mini-line">
        <svg viewBox="0 0 200 36" preserveAspectRatio="none" style={{width:"100%",height:"100%"}}>
          <polyline ref={lineRef} fill="none" stroke="#0affb2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            points="0,28 25,22 50,18 75,14 100,10 125,8 150,5 175,3 200,2" strokeDasharray="280" strokeDashoffset="280"/>
          <polyline fill="rgba(10,255,178,.1)" stroke="none"
            points="0,36 0,28 25,22 50,18 75,14 100,10 125,8 150,5 175,3 200,2 200,36"/>
        </svg>
      </div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#0affb2"}}/><span className="ph-rl">Organic Search</span><span className="ph-rv" style={{color:"#0affb2"}}>58%</span></div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#7b5cfa"}}/><span className="ph-rl">Social Media</span><span className="ph-rv" style={{color:"#7b5cfa"}}>27%</span></div>
      <div className="ph-row"><div className="ph-dot" style={{background:"#ffb700"}}/><span className="ph-rl">Direct</span><span className="ph-rv" style={{color:"#ffb700"}}>15%</span></div>
    </div>
  );
}

function Slide4({gbarRefs}){
  return(
    <div className="pslide">
      <div className="ph-hdr">Growth Engine</div>
      <div className="ph-title-sm">Performance 🚀</div>
      <div className="growth-bars">
        {GROWTH_BARS.map((g,i)=>(
          <div className="gbar-row" key={i}>
            <span className="gbar-label">{g.label}</span>
            <div className="gbar-track"><div className="gbar-fill" ref={el=>{if(gbarRefs)gbarRefs.current[i]=el;}} data-w={g.val} style={{background:`linear-gradient(to right,${g.grad})`,width:"0%"}}/></div>
            <span className="gbar-val" style={{color:g.grad.split(",")[0]}}>{g.val}%</span>
          </div>
        ))}
      </div>
      <div className="ph-metric-box" style={{marginTop:8}}>
        <div><div className="ph-ml">Global Reach</div><div className="ph-mv" style={{fontSize:".85rem"}}>150+ Countries</div></div>
        <span className="ph-badge">🌍 Live</span>
      </div>
    </div>
  );
}

export default function PhoneMockup({onSlideChange}){
  const [current,setCurrent]=useState(0);
  const animatingRef=useRef(false);
  const scrollRef   =useRef(null);
  const phoneRef    =useRef(null);
  const barsRef     =useRef([]);
  const ringRef     =useRef(null);
  const seoFillRefs =useRef([]);
  const lineRef     =useRef(null);
  const gbarRefs    =useRef([]);

  const runSlideAnim=useCallback((idx)=>{
    if(idx===0){
      gsap.from(barsRef.current,{scaleY:0,transformOrigin:"bottom",stagger:.07,duration:.7,ease:"back.out(1.5)"});
    }
    if(idx===1){
      const circ=2*Math.PI*36;
      if(ringRef.current) gsap.fromTo(ringRef.current,{strokeDashoffset:circ},{strokeDashoffset:circ*(1-.88),duration:1.3,ease:"power2.out"});
      seoFillRefs.current.forEach(el=>{if(el) gsap.fromTo(el,{width:"0%"},{width:el.dataset.w+"%",duration:.9,ease:"power2.out"});});
    }
    if(idx===2){
      if(lineRef.current) gsap.fromTo(lineRef.current,{strokeDashoffset:280},{strokeDashoffset:0,duration:1.1,ease:"power2.out"});
    }
    if(idx===3){
      gbarRefs.current.forEach((el,i)=>{if(el) gsap.fromTo(el,{width:"0%"},{width:el.dataset.w+"%",duration:.9,delay:i*.08,ease:"power2.out"});});
    }
  },[]);

  const goTo=useCallback((idx)=>{
    if(animatingRef.current||idx===current||idx<0||idx>3) return;
    animatingRef.current=true;
    gsap.fromTo(phoneRef.current,
      {rotateY:idx>current?-10:10,rotateX:-4},
      {rotateY:0,rotateX:0,duration:.6,ease:"power2.out"}
    );
    gsap.to(scrollRef.current,{
      y:-idx*460,duration:.85,ease:"power3.inOut",
      onComplete:()=>{animatingRef.current=false;runSlideAnim(idx);}
    });
    setCurrent(idx);
    if(onSlideChange) onSlideChange(idx);
  },[current,onSlideChange,runSlideAnim]);

  useEffect(()=>{
    gsap.from(phoneRef.current,{y:70,opacity:0,rotateX:12,duration:1.1,ease:"power4.out",delay:.5});
    gsap.to(phoneRef.current,{y:-12,duration:2.6,yoyo:true,repeat:-1,ease:"sine.inOut",delay:1.2});
    setTimeout(()=>runSlideAnim(0),900);
  },[runSlideAnim]);

  useEffect(()=>{
    let cool=false;
    const onWheel=(e)=>{
      e.preventDefault();
      if(cool) return;
      cool=true;
      setTimeout(()=>cool=false,950);
      goTo(current+(e.deltaY>0?1:-1));
    };
    const node=phoneRef.current;
    node.addEventListener("wheel",onWheel,{passive:false});
    return()=>node.removeEventListener("wheel",onWheel);
  },[current,goTo]);

  useEffect(()=>{
    let sY=0;
    const onStart=(e)=>(sY=e.touches[0].clientY);
    const onEnd  =(e)=>{const dy=sY-e.changedTouches[0].clientY;if(Math.abs(dy)>30)goTo(current+(dy>0?1:-1));};
    const node=phoneRef.current;
    node.addEventListener("touchstart",onStart,{passive:true});
    node.addEventListener("touchend",  onEnd,  {passive:true});
    return()=>{node.removeEventListener("touchstart",onStart);node.removeEventListener("touchend",onEnd);};
  },[current,goTo]);

  return(
    <div className="phone-shell" ref={phoneRef} style={{perspective:800}}>
      <div className="phone-frame">
        <div className="notch"/>
        <div className="nav-dots">
          {SLIDES.map((_,i)=>(
            <button key={i} className={`ndot${i===current?" ndot--active":""}`}
              onClick={()=>goTo(i)} aria-label={`Slide ${i+1}`}/>
          ))}
        </div>
        <div className="phone-viewport">
          <div className="phone-scroll" ref={scrollRef}>
            <Slide1 barsRef={barsRef}/>
            <Slide2 ringRef={ringRef} seoFillRefs={seoFillRefs}/>
            <Slide3 lineRef={lineRef}/>
            <Slide4 gbarRefs={gbarRefs}/>
          </div>
        </div>
      </div>
    </div>
  );
}
