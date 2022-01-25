import React from 'react';
import LogoDashboard from '../../assets/images/icon-dashboard-menu.png';
import ShowDate from '../ShowDate';
import { ContainerHeader } from './styles';

export default function Header() {
 return (
   <ContainerHeader>
     <div>
       <img src={LogoDashboard} alt="Logo"/>
       <p>Dashboard</p>
     </div>
     <ShowDate/>
   </ContainerHeader>
 );
}