export default function
IngredientChips({

 ingredients=[]

}){

return(

<div className="chips">

{ingredients.map(

(item,index)=>(

<span
key={index}
className="chip"
>

{item}

</span>

)

)}

</div>

);

}