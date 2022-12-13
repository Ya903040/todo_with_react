import React from "react";
import {BsCheck} from "react-icons/bs";
import cn from 'classnames'

const Check = ({isCompleted}) => {
    return(
//`border-2 rounded-xl border-pink-400 ${isCompleted ? 'bg-pink-600': ''} w-10 h-10 mr-4 flex items-center justify-center`
        <div className={cn('border-2 rounded-xl border-pink-400 w-10 h-10 mr-4 flex items-center justify-center', {
            'bg-pink-400': isCompleted,
        })}>
          {
              isCompleted &&
              <BsCheck size={24} className='text-gray-900'/>
          }
      </div>
  )

}

export default Check