import React from 'react';

function SavedClasses() {
  return (
      <>
      <div className="py-4">
      <div
        className="col-md-6 m-auto py-3 shadow-4 rounded-3"
        style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
      >
        <h1 className="text-center fw-bold">
          SAVED CLASSES 
        </h1>
        <hr className="my-2" />
      </div>  

      <h3 className='text-light text-center py-4'>Oops you don't have any saved classes yet!</h3> 

    </div>
    </>
  )
}

export default SavedClasses;