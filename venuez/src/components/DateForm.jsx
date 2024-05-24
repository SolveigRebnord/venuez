
'use client'


import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef, useState } from "react";



export default function DateForm () {

    const router = useRouter()
   
      const formRef = useRef(null);



      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const query = new URLSearchParams(formData).toString();
    
        router.push(`/venues?${query}`);
      };

   

      const today = new Date();
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
    
      const formatDate = (date) => {
        return date.toISOString().split('T')[0];
      };
      
          

      return (

<div>
<form ref={formRef} onSubmit={handleSubmit} className="home-form" >
                    <input required type="date" defaultValue={formatDate(today)} id="from" name="from"></input>
                    <input required type="date" defaultValue={formatDate(tomorrow)} id="to" name="to"></input>
                    <input required type="number" defaultValue={2}  id="guests" name="guests"></input>
                    <button type="submit" >Send</button>
                </form>
            </div>
      )
            }