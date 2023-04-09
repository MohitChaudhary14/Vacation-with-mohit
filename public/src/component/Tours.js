import Card from './Card'
import React from 'react'

export default function Tours({tours , removeTour}) {
  return (
    <div className='container'>
        <div>
              <h2 className='title'> Vacation With Mohit</h2>
        </div>
        <div className='cards'>
            {
             tours.map((tour) => {
                return <Card {...tour} removeTour={removeTour}>

                </Card>
             })

            }

        </div>
    </div>
  )
}
