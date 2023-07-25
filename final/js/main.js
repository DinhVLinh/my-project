function handleBarIconTabLet(){
    const barButton = document.querySelector('.barIcon i')
    const navList = document.querySelector('.nav-list')
    const closeButton = document.querySelector('#closeNavButton')
    if(barButton){
        barButton.addEventListener('click' , () => {
            navList.classList.add('active')
        })
    }

    if(closeButton){
        closeButton.addEventListener('click' , () => {
            navList.classList.remove('active')
        })
    }
}

(() => {
    handleBarIconTabLet()
})()