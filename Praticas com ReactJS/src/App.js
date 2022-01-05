import React from 'react'
import PhotosGallery from './Components/PhotosGallery'

function App() {
  const photos = [
    'http://placeimg.com/140/160/people',
    'http://placeimg.com/140/160/animals',
    'http://placeimg.com/140/160/tech',
    'http://placeimg.com/140/160/nature',
    'http://placeimg.com/140/160/any',
  ]
  return (
    <div>
     <h1>Galeria de fotos</h1>
     <PhotosGallery 
      photos={photos}
     />
    </div>
  )
}

export default App