import React, { useEffect, useState } from 'react';
import { formatDate, getHours } from '../../helpers';


export default function ShowDate() {

  const [date,setDate] = useState(); /*  Pra atualizar a data automaticamente*/

  useEffect(()=>{
    const interval = setInterval(() => setDate(new Date()), 1000);
    console.log(interval)
    return () => clearInterval(interval);
  },[]);

 return (
   <time>
      {formatDate(date)}
       <br/>
      {getHours(date)}
   </time>
 );
}