import React from 'react';
import './imageList.css';
import Image from './image';

const ImageList = ({ images }) => {
    // Map fonksiyonunu arrayler düzenlerken kullanıldı.
    const preparedImageList = images.map(image => {
        return(
            <Image key={image.id} image={image} />
        )
    })

    return (
        <div className='image-list-container'>
            {/* {images.length} adet resim bulundu. */}
            {preparedImageList}
        </div>
    )
}

export default ImageList;