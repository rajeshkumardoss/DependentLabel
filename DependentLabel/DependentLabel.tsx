import * as React from 'react';
import { Label } from '@fluentui/react';

export interface IDependentLabelProps {
  name?: string;
  lookup?:string;
}

// eslint-disable-next-line react/display-name
export const DependentLabelControl = React.memo((props:IDependentLabelProps)=> {

    return (<div>
     <Label >{props.name}</Label> 
     <Label >{props.lookup}</Label> </div>
    )
    
  });