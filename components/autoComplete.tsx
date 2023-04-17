import { useState } from "react"


interface test {
  data: any
}

const AutoComplete = () => {
  const [value, setValue] = useState<string>('')
  const [data, setData] = useState<[]>([])

  const onChange = (e:any) => {
    setValue(e.target.value)
    fetchData()

  }

  
  const  fetchData = async()=> {
    const data = await fetch(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${value}`,
      {
        headers: {
         
          "x-app-id": `${process.env.ID}`,
          "x-app-key": `${process.env.API_KEY}`,
        },
      }
    ).then((res) => res.json())
    //const responseData = await data.json();
    //const commonArray = responseData.common;
    console.log(data);
    setData(data.common)
    return data.common
  }

  const onSubmit = async  (searchTerm:any) => {
      try {
        // Make API call to fetch nutrients data
        const response = await fetch(
          `https://trackapi.nutritionix.com/v2/natural/nutrients`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-app-id': `${process.env.ID}`,
              'x-app-key': `${process.env.API_KEY}`,
            },
            body: JSON.stringify({ query: value }),
          }
        );
    
        // Check if response is successful
        if (response.ok) {
          const data = await response.json();
          // Extract and use the nutrients data as needed
          console.log('Nutrients data:', data);
        } else {
          console.error('Error fetching nutrients data:', response);
        }
      } catch (error) {
        console.error('Error fetching nutrients data:', error);
      }
    
  }

  return (
    <>
    <input type="text"  className="rounded border-2 border-red-400" value={value} onChange={onChange}/>
    <button type="submit" className="bg-red-400" onClick={onSubmit}>add</button>
  
   <div>
   {data?.filter(item => {
        const searchTerm = value
        const fullName = item.food_name.toLowerCase()

        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm ||  fullName == searchTerm 
      })?.map((item) => (
        <div key={item.food_name} onClick={() => onSubmit(item.food_name)}> 
         {item.food_name}
         <img src={item.photo.thumb} />
        </div>))}
        
   </div>
    </>
  )
}
export default AutoComplete