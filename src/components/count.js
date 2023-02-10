import React from "react";
import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0);



    return(
        <div>
            <p>angka: {count} </p>
            <button onClick={()=>{
                setCount(count+1)
            }}>tambah angka</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>Kurang</button>
        </div>


            
    )
}
// buat sebuah form dan isi nya form ada nama, nim, angkatan, hobi.

export default Count;