import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Eye, EyeOff, LockKeyhole, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import * as THREE from 'three';
import './style.css';

function Cat({ mode, mouse }) {
  const svgRef = useRef(null);
  const leftPupil = useRef(null), rightPupil = useRef(null);
  const leftPaw = useRef(null), rightPaw = useRef(null), head = useRef(null);

  // Keep the eye whites still; move only the pupils inside each eye.
  useEffect(() => {
    if (!svgRef.current || !mouse) return;
    const rect = svgRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const sx = 220 / rect.width, sy = 170 / rect.height;
    const cursorX = (mouse.x - rect.left) * sx;
    const cursorY = (mouse.y - rect.top) * sy;
    const movePupil = (pupil, cx, cy) => {
      if (!pupil) return;
      const dx = cursorX - cx, dy = cursorY - cy;
      const angle = Math.atan2(dy, dx);
      // Clamp the pupil movement so it never leaves the white eye area.
      const distance = Math.min(4.2, Math.hypot(dx, dy) * 0.055);
      gsap.to(pupil, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * Math.min(5, distance * 1.15),
        duration: 0.16,
        ease: 'power2.out',
        overwrite: true
      });
    };
    movePupil(leftPupil.current, 78, 82);
    movePupil(rightPupil.current, 142, 82);
  }, [mouse]);

  useEffect(() => {
    const covered = mode === 'password' || mode === 'busy';
    // Animate SVG transform attributes in SVG viewBox units. CSS transforms use
    // screen pixels here and caused the paws to jump above the cat's head.
    gsap.to(leftPaw.current, {
      attr: { transform: covered ? 'translate(78 82)' : 'translate(76 132)' },
      duration: covered ? 0.34 : 0.28,
      ease: 'power2.inOut',
      overwrite: true
    });
    gsap.to(rightPaw.current, {
      attr: { transform: covered ? 'translate(142 82)' : 'translate(144 132)' },
      duration: covered ? 0.34 : 0.28,
      ease: 'power2.inOut',
      overwrite: true
    });
    // Close the eyes underneath the paws without creating visible blobs above the head.
    gsap.to('.cat-eyelid', {
      opacity: covered ? 1 : 0,
      duration: covered ? 0.16 : 0.18,
      overwrite: true
    });
    if (mode === 'username') {
      gsap.fromTo(head.current, { rotate: 0, y: 0 }, {
        rotate: -4, y: -3, duration: 0.28, yoyo: true, repeat: 1,
        transformOrigin: 'center center', overwrite: true
      });
    } else {
      gsap.to(head.current, { rotate: 0, y: 0, duration: 0.2, overwrite: true });
    }
  }, [mode]);

  return <svg ref={svgRef} className="cat" viewBox="0 0 220 170" role="img" aria-label="Animated cat mascot">
    <g ref={head}>
      <path d="M45 55 L35 13 Q34 7 42 12 L79 35 Q110 24 141 35 L178 12 Q186 7 185 17 L176 58 Q192 82 183 111 Q171 145 110 148 Q48 145 37 111 Q28 82 45 55Z" fill="#f8f8fc" stroke="#e9e9f0" strokeWidth="2"/>
      <path d="M49 43 L44 23 L70 39Z" fill="#f2a7b7"/><path d="M150 39 L177 22 L171 44Z" fill="#f2a7b7"/>
      <ellipse cx="78" cy="82" rx="15" ry="19" fill="#242333"/><ellipse cx="142" cy="82" rx="15" ry="19" fill="#242333"/>
      <ellipse cx="78" cy="82" rx="8" ry="12" fill="#fff"/><ellipse cx="142" cy="82" rx="8" ry="12" fill="#fff"/>
      <g ref={leftPupil}><circle cx="78" cy="82" r="4.5" fill="#242333"/><circle cx="79.5" cy="80.5" r="1.25" fill="#fff"/></g>
      <g ref={rightPupil}><circle cx="142" cy="82" r="4.5" fill="#242333"/><circle cx="143.5" cy="80.5" r="1.25" fill="#fff"/></g>
      <rect className="cat-eyelid" x="62" y="63" width="32" height="38" rx="16" fill="#f8f8fc" opacity="0"/>
      <rect className="cat-eyelid" x="126" y="63" width="32" height="38" rx="16" fill="#f8f8fc" opacity="0"/>
      <path d="M103 103 Q110 97 117 103 L110 110Z" fill="#e99aaf"/><path d="M110 109 Q105 118 97 113 M110 109 Q115 118 123 113" fill="none" stroke="#393847" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M48 103 L18 98 M49 111 L20 115 M172 103 L202 98 M171 111 L200 115" stroke="#b7b7c5" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <g ref={leftPaw} className="cat-paw" transform="translate(76 132)"><ellipse cx="0" cy="0" rx="23" ry="16" fill="#f8f8fc" stroke="#e9e9f0" strokeWidth="2"/><path d="M-7 3 Q0 8 7 3" fill="none" stroke="#d8d8e3" strokeWidth="2"/></g>
    <g ref={rightPaw} className="cat-paw" transform="translate(144 132)"><ellipse cx="0" cy="0" rx="23" ry="16" fill="#f8f8fc" stroke="#e9e9f0" strokeWidth="2"/><path d="M-7 3 Q0 8 7 3" fill="none" stroke="#d8d8e3" strokeWidth="2"/></g>
  </svg>;
}

function GreenReveal() {
 const ref = useRef(null);
 useEffect(() => { gsap.fromTo(ref.current, { scale: 1.15, clipPath: 'inset(0 0 0 0 round 0px)' }, { scale: 1, duration: 1.25, ease: 'power3.inOut', delay: .1 }); gsap.fromTo('.cloud-mask', { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power2.out' }); }, []);
 return <div ref={ref} className="green-bg"><div className="speckles"/><svg className="cloud-mask" viewBox="0 0 1440 700" preserveAspectRatio="none"><path d="M0 0H1440V145 C1380 110 1328 113 1280 132 C1232 75 1164 75 1118 95 C1065 37 1001 38 958 63 C908 3 838 1 794 28 C738 -5 674 0 635 29 C583 -5 518 0 475 28 C422 -7 359 0 316 28 C266 -5 201 0 162 31 C103 1 46 8 0 38Z" fill="white"/><path d="M0 575 C72 638 165 632 210 583 C257 652 361 655 418 593 C475 656 573 655 628 592 C682 655 781 656 837 592 C891 654 990 654 1047 592 C1100 653 1201 654 1258 592 C1310 648 1390 641 1440 596V700H0Z" fill="white"/></svg></div>
}

function ThreeSpeckles() {
 const host = useRef(null);
 useEffect(() => {
  const el = host.current; if (!el) return;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(55, 1, .1, 100); camera.position.z = 8;
  let renderer; try { renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true }); } catch { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); renderer.setSize(el.clientWidth, el.clientHeight); el.appendChild(renderer.domElement);
  const geo = new THREE.BufferGeometry(), n = 90, pos = new Float32Array(n*3);
  for(let i=0;i<n;i++){pos[i*3]=(Math.random()-.5)*13;pos[i*3+1]=(Math.random()-.5)*7;pos[i*3+2]=(Math.random()-.5)*2;}
  geo.setAttribute('position',new THREE.BufferAttribute(pos,3)); const points = new THREE.Points(geo,new THREE.PointsMaterial({color:0x8cebd5,size:.025,transparent:true,opacity:.8}));scene.add(points);
  let frame; const animate=()=>{points.rotation.y+=.0007;renderer.render(scene,camera);frame=requestAnimationFrame(animate)};animate();
  const resize=()=>{renderer.setSize(el.clientWidth,el.clientHeight)};window.addEventListener('resize',resize);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);geo.dispose();renderer.dispose();renderer.domElement.remove()};
 }, []);
 return <div className="three-speckles" ref={host} aria-hidden="true"/>;
}

function App(){
 const [username,setUsername]=useState(''),[password,setPassword]=useState(''),[showPassword,setShowPassword]=useState(false),[mode,setMode]=useState('idle'),[notice,setNotice]=useState(null),[remember,setRemember]=useState(true),[busy,setBusy]=useState(false);
 const [mouse,setMouse]=useState({x:window.innerWidth/2,y:window.innerHeight/2}); const formRef=useRef(null);
 useEffect(()=>{const move=e=>{setMouse({x:e.clientX,y:e.clientY})};window.addEventListener('mousemove',move);gsap.fromTo('.login-panel',{y:20,opacity:0},{y:0,opacity:1,duration:.8,delay:.45,ease:'power3.out'});return()=>window.removeEventListener('mousemove',move)},[]);
 const submit=e=>{e.preventDefault();setNotice(null);if(!username.trim()||!password){setNotice({type:'error',text:'Please enter your username and password.'});return;}setBusy(true);setMode('busy');gsap.to('.cat',{scale:1.04,duration:.2,yoyo:true,repeat:1});setTimeout(()=>{setBusy(false);setMode('idle');setNotice({type:'success',text:'Login complete! Welcome back.'});},900)};
 const forgot=()=>setNotice({type:'info',text:username.trim()?`Password reset instructions are ready for ${username.trim()}.`:'Enter your username first, then choose Forgot password.'});
 const signup=()=>setNotice({type:'info',text:'Sign-up is a demo action for this college project.'});
 return <main className="page"><GreenReveal/><ThreeSpeckles/><div className="login-panel">
   <section className="mascot-side"><h1>Hello!</h1><p className="subline">Log in to your account</p><Cat mode={mode} mouse={mouse}/><div className="mascot-caption">{mode==='password'?'Shhh… password time!':mode==='username'?'Looking up at you!':'Your little login buddy'}</div></section>
   <section className="form-side"><h2>Welcome Back!</h2><p className="intro">Hey there, good to see you again. Enter your details below to continue where you left off.</p>
    <form ref={formRef} onSubmit={submit}>
     <label className="field"><Mail size={15}/><input aria-label="Username or email" autoComplete="username" placeholder="Username or email" value={username} onFocus={()=>setMode('username')} onChange={e=>{setUsername(e.target.value);setMode('username');setNotice(null)}}/></label>
     <label className="field"><LockKeyhole size={15}/><input aria-label="Password" autoComplete="current-password" type={showPassword?'text':'password'} placeholder="Password" value={password} onFocus={()=>setMode('password')} onChange={e=>{setPassword(e.target.value);setMode('password');setNotice(null)}}/><button className="eye-button" type="button" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword?'Hide password':'Show password'}>{showPassword?<EyeOff size={15}/>:<Eye size={15}/>}</button></label>
     <div className="options"><label className="remember"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}/> <span>Remember me</span></label><button type="button" className="text-button" onClick={forgot}>Forgot password?</button></div>
     <button className="login-button" type="submit" disabled={busy}>{busy?<span className="spinner"/>:'LOG IN'}</button>
     {notice&&<div className={`notice ${notice.type}`} role="status">{notice.type==='success'?<CheckCircle2 size={14}/>:<AlertCircle size={14}/>}<span>{notice.text}</span></div>}
    </form>
    <p className="signup">Don’t have an account? <button type="button" onClick={signup}>Sign up here</button></p>
   </section>
  </div><div className="copyright">Made with care <span>♥</span> · Cat Login Demo</div></main>
}

createRoot(document.getElementById('root')).render(<App/>);
