export default function Home() {
  return (
    <div style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"radial-gradient(1200px 600px at 50% -10%, #7c3aed 0%, #0b0b12 60%)",color:"white",fontFamily:"system-ui",padding:"40px",textAlign:"center"}}>
      <div>
        <h1 style={{fontSize:"56px",margin:"0",letterSpacing:"-2px"}}>Code<span style={{color:"#a78bfa"}}>Misa</span></h1>
        <p style={{opacity:0.8,fontSize:"18px",margin:"12px 0 28px"}}>The most powerful AI — create, code & deploy in seconds.</p>
        <div style={{display:"flex",gap:"12px",justifyContent:"center"}}>
          <a href="/login.html" style={{padding:"12px 22px",background:"white",color:"black",borderRadius:"999px",textDecoration:"none",fontWeight:700}}>Get Started</a>
          <a href="/editor.html" style={{padding:"12px 22px",border:"1px solid rgba(255,255,255,0.3)",color:"white",borderRadius:"999px",textDecoration:"none"}}>Open Editor</a>
        </div>
      </div>
    </div>
  )
}
