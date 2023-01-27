
import React,{useState,useEffect} from "react";
import BigNavbar from "./BigNav"
import { Button, Popover, PopoverSurface, PopoverTrigger, PopoverProps } from "@fluentui/react-components";
import { ChevronDown28Filled} from '@fluentui/react-icons';


export default function Navbar() {
    const [rotate, showRotate] = useState('rotate-0');
    function showBar() {
      rotate == 'rotate-0' ? showRotate('rotate-180') : showRotate('rotate-0'); 
  } 
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true)
  }, [])
  const handleOpenChange: PopoverProps['onOpenChange'] = (e, data) => setOpen(data.open || false);

    return(
     
    <Popover open={open} onOpenChange={handleOpenChange}>
    <PopoverTrigger   disableButtonEnhancement>
    <Button  onClick={function(){showBar()}} ><ChevronDown28Filled className={`${rotate} transition duration-700 `} /></Button>
    </PopoverTrigger>

    <PopoverSurface className="transition duration-700" style={{border: 'none'}}>
        <BigNavbar  />
    </PopoverSurface>
  </Popover>
       
      

        
     
 
 

       

 
        
    )
}
