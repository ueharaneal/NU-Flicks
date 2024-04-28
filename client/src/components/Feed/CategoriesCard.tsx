import React from 'react'
interface CategoriesCard{
    name: string
}
function CategoriesCard({name} : CategoriesCard) {
  return (
    <div>
      {name}
    </div>
  )
}

export default CategoriesCard
