function popup() {
    const HIDE_CLASS_NAME = 'hide'
    const showPopUpButton = document.querySelector('.button.hero')
    const clossePopUpButton = document.querySelector('.feedback-popup__close-popup')
    const feedbackPopUp = document.querySelector('.feedback-popup')

    showPopUpButton.addEventListener('click', () => {
        feedbackPopUp.classList.remove(HIDE_CLASS_NAME)
    })

    clossePopUpButton.addEventListener('click', () => {
        feedbackPopUp.classList.add(HIDE_CLASS_NAME)
    })
}

export default popup