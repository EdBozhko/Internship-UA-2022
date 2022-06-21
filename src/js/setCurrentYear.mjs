const setCurrentYear = () => {
    const yearContainer = document.querySelector('.copyright__year')
    yearContainer.textContent = new Date().getFullYear()
}

export default setCurrentYear