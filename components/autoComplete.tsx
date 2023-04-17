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

const AutoComplete = () => {
  const [value, setValue] = useState<string>('')

  const onChange = (e:any) => {
    setValue(e.target.value)
  }

  const onSubmit = (searchTerm:any) => {
    setValue(searchTerm)
    console.log('search', searchTerm)
  }
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
    </>
  )
}
export default AutoComplete