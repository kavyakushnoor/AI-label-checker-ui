export default function CameraCapture({
   onUpload
}){

return(

<input

type="file"

accept="image/*"

capture="environment"

onChange={(e)=>{

 const file =
 e.target.files[0];

 if(file){

   onUpload(file);

 }

}}

/>

);

}