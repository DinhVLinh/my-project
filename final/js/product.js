function handleImgProduct(){    
    const singleImage = document.querySelector('.singleImg')
    const imgItemList = document.querySelectorAll('.imgItem')
    

    imgItemList.forEach((imgItem) => {
        if(imgItem){
            imgItem.addEventListener('click', () => {
                singleImage.src = imgItem.src
            })
        }
    })
}
(() => {
    handleImgProduct()
})()