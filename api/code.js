export default async function handler(req,res){
const {prompt,lang}=req.body;
const r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer {lang||'full-stack'}. Generate clean, error-free code with comments.`},{role:"user",content:prompt}]})});
const j=await r.json();res.json({code:j.choices[0].message.content})}
