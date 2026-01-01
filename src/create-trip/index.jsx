import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';

function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 relative left-[14rem]'>
      <h2 className='font-bold text-3xl'>Tell us Your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl whitespace-nowrap'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences 
      </p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice ?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place, onChange: (v) => { setPlace(v); console.log(v) }
            }}
          />
        </div>
        <div >
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip ?</h2>
          <Input placeholder={'Ex.3'} type="number" />
        </div>
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget ? </h2>
        <div className='flex flex-nowrap gap-5 mt-5 overflow-x-auto sm:overflow-visible'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer min-w-[260px] sm:min-w-0 sm:flex-1'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>who do you plan on traveling with on your next adventure?</h2>
        <div className='flex flex-nowrap gap-5 mt-5 overflow-x-auto sm:overflow-visible'>
          {SelectTravelesList.map((item, index) => (
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer min-w-[260px] sm:min-w-0 sm:flex-1'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='my-10 flex justify-end'>
        <Button className='box text-white'>Generate Trip</Button>
      </div>
      <div>
        <div>hii</div>
      </div>
      <div>
        <div>hii</div>
      </div>
      
    </div>
    
  )
}

export default CreateTrip;
