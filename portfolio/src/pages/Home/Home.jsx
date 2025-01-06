import React, { useState } from 'react'
import AddStock from '../../components/AddStock';
import Stocklist from '../../components/Stocklist';
import './Home.css'
import Dashboard from '../../components/Dashboard';

export default function Home() {
    const[state,setState]=useState(1);
    let content;

  if (state === 1) {
    content = <div><Dashboard/></div>;
  } else if (state === 3) {
    content = <div><AddStock/></div>;
  } else if (state === 2) {
    content = <div><Stocklist/></div>;
  }
    return (
        <>
            <div className='flex flex-row'>
                <aside className='flex flex-col bg-violet-950 w-[20%] h-screen pt-32 px-8 gap-10 '>
                    <button class="button bg-violet-950"onClick={()=>{setState(1);}} >
                        <span class="lable ">Dashboard</span>
                    </button>
                    <button class="button bg-violet-950"onClick={()=>{setState(2);}}>
                        <span class="lable">Stock List</span>
                    </button>
                    <button class="button bg-violet-950"onClick={()=>{setState(3);}}>
                        <span class="lable">Add Stock</span>
                    </button>
                </aside>
                <main className='w-screen'>
                    {content}
                </main>
            </div>
        </>
    )
}
