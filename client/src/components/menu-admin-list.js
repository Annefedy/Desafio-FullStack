import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';


export const mainListItems = (
  <div>
    <ListItem button  component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    
     <ListItem button component="a" href="/admin/usuarios" >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuário" />
    </ListItem>
     
     <ListItem button component="a" href="/admin/produtos" >
       <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItem>

    <ListItem button component="a" href="/admin/entregas" >
       <ListItemIcon>
        < DirectionsCarIcon/>
      </ListItemIcon>
      <ListItemText primary="Entregas" />
    </ListItem>
    
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp/>
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
   
  </div>
);