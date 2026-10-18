import formidable from 'formidable';
export const config = { api: { bodyParser: false } };
export default async function handler(req,res){
const form = formidable({ multiples: false });
form.parse(req, (err, fields, files) => {
if(err) return res.status(500).json({error:err.message});
res.json({ name: files.file?.[0]?.originalFilename, size: files.file?.[0]?.size });
});
}
