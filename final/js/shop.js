function handleProduct(){
    const proList = document.querySelectorAll('.pro')
    for(const pro of proList){
        pro.addEventListener('click', () => {
            window.location.href = 'products.html'

        })
    }
}

(() => {
    handleProduct()
})()