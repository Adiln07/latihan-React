import React from 'react'
import  '../style/formstyle.css'
import {useState} from 'react';


const Form = () => {

    const [data, setData] = useState({
        nama: "",
        nim: "",
        angkatan: "",
        hobi: "",
    });
    const [submit, setSubmit] = useState(false);

    const saveBiodata = (event) =>{
        event.preventDefault();
}

    
  return (

    <div className='form'>
        {submit ? (
            <div className='again'>
                <div className='hasil'>
                    <div className='data'>
                        <h2>nama: {data.nama}</h2>
                        <h2>Nim: {data.nim}</h2>
                        <h2>Angkatan: {data.angkatan}</h2>
                        <h2>Hobi: {data.hobi}</h2>
                    </div>
                    <button
                    style={{
                        marginTop: 30
                    }}
                    onClick={()=>{
                        setSubmit(false);
                    }}>kembali</button>
                </div>
                
            </div>
        ):
        (
            <div className='container'>
            <h1>Form Biodata</h1>
            
            <div className='biodata'>
                <form onSubmit={saveBiodata}>
                    <label>Nama</label>
                    <input type="input" placeholder='Masukkan nama' 
                    value={data.nama}
                    onChange={(e) =>{
                        setData({...data, nama:e.target.value});
                    }}/>
                    <label>Nim</label>
                    <input type="input" placeholder='Masukkan Nim' 
                    value={data.nim}
                    onChange={(e) =>{
                        setData({...data, nim:e.target.value});
                    }}/>
                    <label>Angkatan</label>
                    <input type="input" placeholder='Masukkan Angkatan' 
                    value={data.angkatan}
                    onChange={(e) =>{
                        setData({...data, angkatan:e.target.value});
                    }}/>
                    <label>Hobi</label>
                       <input type="input" placeholder='Masukkan Hobi' 
                       value={data.hobi}
                       onChange={(e) =>{
                        setData({...data, hobi:e.target.value});
                       }} />
                    <button type='submit' onClick={() =>{
                        setSubmit(true);
                    }}>Submit</button>
                </form>
            </div>
        </div>
        )}
    </div>
  )
}

export default Form