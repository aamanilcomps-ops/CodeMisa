export default async function handler(req,res){
const {prompt}=req.body;
const r=await fetch("https://api.openai.com/v1/images/generations",{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:"dall-e-3",prompt})});
const j=await r.json();res.json({url:j.data[0].url})}
