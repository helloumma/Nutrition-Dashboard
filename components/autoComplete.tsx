import { useState } from "react"

const mockData = [
  {"full_name": "test 1"},
  {"full_name": "test 2"},
  {"full_name": "test 3"},
  {"full_name": "test 4"},
  {"full_name": "test 5"},
  {"full_name": "test 6"},
  {"full_name": "test 7"},
  {"full_name": "test 8"},
  {"full_name": "test 9"},
  {"full_name": "test 10"},
  {"full_name": "test 11"},
  {"full_name": "test 12"},
  {"full_name": "test 13"},
  {"full_name": "test 14"},
  {"full_name": "test 15"},
  {"full_name": "test 16"},
  {"full_name": "test 17"},
  {"full_name": "test 18"},
  {"full_name": "test 19"},
  {"full_name": "test 20"},
]

interface test {
  data: any
}

const AutoComplete = () => {
  const [value, setValue] = useState<string>('')
  const [data, setData] = useState<[]>([])

  const onChange = (e:any) => {
    setValue(e.target.value)
  }

  const onSubmit = (searchTerm:any) => {
    setValue(searchTerm)
    console.log('search', searchTerm)
    
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
    console.log(data.common);
   setData(data.common)
    return data.common
  }


  fetchData()

  return (
    <>
    <input type="text"  className="rounded border-2 border-red-400" value={value} onChange={onChange}/>
    <button type="submit" className="bg-red-400" onClick={onSubmit}>add</button>
    <div>
      {mockData?.filter(item => {
        const searchTerm = value.toLowerCase()
        const fullName = item.full_name.toLowerCase()

        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
      }).slice(0,5)?.map((item) => (
        <div key={item.full_name} onClick={() => onSubmit(item.full_name)}> 
         {item.full_name}
        </div>))}
        
    </div>
    <div>
     {data?.map(a => a.food_name)}
     
    </div>
   
    </>
  )
}
export default AutoComplete