import React, { useState } from 'react';

const RouletteBoard = () => {
  const [board, setBoard] = useState([
    {number:'1', even:false, odd:true, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'2', even:true, odd:false, color:'black', first:true, second:'', third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'3', even:false, odd:true, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'4', even:true, odd:false, color:'black', first:true, second:false, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'5', even:false, odd:true, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'6', even:true, odd:false, color:'black', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'7', even:false, odd:true, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'8', even:true, odd:false, color:'black', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'9', even:false, odd:true, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'10', even:true, odd:false, color:'black', first:true, second:false, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'11', even:false, odd:true, color:'black', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'12', even:true, odd:false, color:'red', first:true, second:false, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'13', even:false, odd:true, color:'black', first:false, second:true, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'14', even:true, odd:false, color:'red', first:false, second:true, third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'15', even:false, odd:true, color:'black', first:false, second:true, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'16', even:true, odd:false, color:'red', first:false, second:true, third:false, top:true, btm:true, col1:true, col2:false, col3:false},
    {number:'17', even:false, odd:true, color:'black', first:false, second:true, third:false, top:true, btm:true, col1:false, col2:true, col3:false},
    {number:'18', even:true, odd:false, color:'red', first:false, second:true, third:false, top:true, btm:true, col1:false, col2:false, col3:true},
    {number:'19', even:false, odd:true, color:'red', first:false, second:true, third:false, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'20', even:true, odd:false, color:'black', first:false, second:true, third:false, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'21', even:false, odd:true, color:'red', first:false, second:true, third:false, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'22', even:true, odd:false, color:'black', first:false, second:true, third:false, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'23', even:false, odd:true, color:'red', first:false, second:true, third:false, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'24', even:true, odd:false, color:'black', first:false, second:true, third:false, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'25', even:false, odd:true, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'26', even:true, odd:false, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'27', even:false, odd:true, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'28', even:true, odd:false, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'29', even:false, odd:true, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'30', even:true, odd:false, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'31', even:false, odd:true, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'32', even:true, odd:false, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'33', even:false, odd:true, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'34', even:true, odd:false, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:true, col2:false, col3:false},
    {number:'35', even:false, odd:true, color:'black', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:true, col3:false},
    {number:'36', even:true, odd:false, color:'red', first:false, second:false, third:true, top:false, btm:true, col1:false, col2:false, col3:true},
    {number:'0', even:false, odd:false, color:'green', first:false, second:false, third:false, top:false, btm:false, col1:false, col2:false, col3:false}
  ])
  
  return (
    <>
    <div id='zero'>

    </div>
    <div id='first' className='set'>
      <div className='numbers'>

      </div>
      <div className='thirds'>
        1 - 12
      </div>
      <div className='others'>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
    <div id='second' className='set'>
      <div className='numbers'>

      </div>
      <div className='thirds'>
        13 - 24
      </div>
      <div className='others'>
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </div>
    <div id='third' className='set'>
      <div className='numbers'>

      </div>
      <div className='thirds'>
        25 -36
      </div>
      <div className='others'>
        <div>

        </div>
        <div>
          
        </div>
      </div>
    </div>
    <div id='rows'>
      <div className='row'>

      </div>
      <div className='row'>

      </div>
      <div className='row'>

      </div>
    </div>
    </>  
  );
};

export default RouletteBoard;