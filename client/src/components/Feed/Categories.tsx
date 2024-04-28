import {useEffect, useState} from 'react'
import axios from 'axios'
import { getTokenCookie } from '@/utils/tools';
import CategoriesCard from './CategoriesCard';
function Categories() {
    const [data, setData] = useState([]);
    useEffect(()=>{
         axios.get("/api/articles/categories",{
            headers:{
                Authorization: getTokenCookie()
            }
         }).then((response)=>{
            setData(response.data)
            console.log(data)
         }).catch((error)=>{
            console.error('Error Fetching Data', error)
         })

    },[])
    console.log(data)
    const content = data.map((article)=>{
        return(<CategoriesCard key={article.id} name = {article.name}></CategoriesCard>)
    })
  return (
    <div>
      <h1 className='text-xl font-bold'>Browse by Categories</h1>
        <div>{content}</div>
    </div>
  )
}

export default Categories
