
import React,{useState} from "react";
import BigNavbar from "./BigNav"
import { Button, Popover, PopoverTrigger, PopoverSurface } from "@fluentui/react-components";
import { ChevronDown28Filled} from '@fluentui/react-icons';


export default function Navbar() {
    const [seenIt, showDiv] = useState('rotate-0');
    const [open, setOpen] = useState(true);
    function showBar() {
      seenIt == 'rotate-0' ? showDiv('rotate-180') : showDiv('rotate-0');
      open == true ? setOpen(false) : setOpen(true)
  } 
    return(
     
    <Popover>
    <PopoverTrigger   disableButtonEnhancement>
    <Button  onClick={function(){showBar()}}><ChevronDown28Filled className={`${seenIt} transition duration-700 `} /></Button>
    </PopoverTrigger>

    <PopoverSurface className="transition duration-700" style={{border: 'none'}}>
        <BigNavbar  />
    </PopoverSurface>
  </Popover>
       
      

        
     
 
 

       

 
        
    )
}
