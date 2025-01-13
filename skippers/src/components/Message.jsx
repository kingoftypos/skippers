import { tagState } from '@/atoms'
import React from 'react'
import { useRecoilValue } from 'recoil'
function Message() {
  const tags=useRecoilValue(tagState);
  const isCheater=(tags.length>0);
  return (
    <div>
       {
        isCheater ?
        (<div>
            <a
  href="#"
  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Eww CHEATER Spotted !!!!!
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    This user have cheated in the past contests.
  </p>
</a>
        </div>):(<div>
            <a
  href="#"
  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    LEGIT USER !!!!
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    This user is holier than thou...
  </p>
</a>
 </div>)
        
       } 
    </div>
  )
}

export default Message