function SwitchSectionEvent() {
    // switch section 관련 element
    const container = document.querySelector('.switch-section-container')
    const pageList = document.querySelectorAll('.switch-section-page')

    let now = 0
    let isWheel = true

    /****************************************************************************************************/

    /* 마우스 휠 이벤트 */
    pageList.forEach((item) => {
        item.addEventListener(
            'wheel',
            (e) => {
                e.preventDefault()
                if (isWheel) {
                    isWheel = false

                    if (e.deltaY > 0) now++
                    else if (e.deltaY < 0) now--

                    if (now < 0) now = 0
                    else if (now > 4) now = 4

                    container.style.top = now * -200 + 'px'

                    setTimeout(() => {
                        isWheel = true
                    }, 500)
                }
            },
            { passive: false }
        )
    })
}
