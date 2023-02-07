import React from 'react'
import  '../style/formstyle.css'
import {useState} from 'react';


const Form = () => {
    const [biodata, setBiodata] = useState({});
    const [submit, setSubmit] = useState(false);

    const saveBiodata = (event) =>{
        event.preventDefault();

        
    }
  return (

    <div className='form'>
        <div className='container'>
            <h1>Form Biodata</h1>
            
            <div className='biodata'>
                <form onSubmit={saveBiodata}>
                    <label>Nama</label>
                    <input type="input" placeholder='Masukkan nama'/>
                    <label>Nim</label>
                    <input type="input" placeholder='Masukkan Nim'/>
                    <label>Angkatan</label>
                    <input type="input" placeholder='Masukkan Angkatan'/>
                    <label>Hobi</label>
                    <input type="input" placeholder='Masukkan Hobi' />
                </form>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Form