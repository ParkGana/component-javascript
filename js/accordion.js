function AccordionHorizontalEvent() {
    // accordion 관련 element
    const container = document.getElementById('accordion-h')
    const itemList = document.querySelectorAll('.accordion-h-container')

    /****************************************************************************************************/

    itemList.forEach((item, index) => {
        const contents = item.childNodes[3]

        /* 마우스 enter 이벤트 */
        item.addEventListener('mouseenter', () => {
            const one = index === 0 ? '1fr' : 'fit-content(300px)'
            const two = index === 1 ? '1fr' : 'fit-content(300px)'

            container.style.gridTemplateColumns = `${one} ${two}`
            contents.style.display = 'block'
        })

        /* 마우스 leave 이벤트 */
        item.addEventListener('mouseleave', () => {
            container.style.gridTemplateColumns = 'repeat(2, 1fr)'
            contents.style.display = 'none'
        })
    })
}

function AccordionVerticalEvent() {
    // accordion 관련 element
    const itemList = document.querySelectorAll('.accordion-v-container')

    /****************************************************************************************************/

    itemList.forEach((item) => {
        const contents = item.childNodes[3]
        const text = contents.childNodes[1]

        /* 마우스 enter 이벤트 */
        item.addEventListener('mouseenter', () => {
            contents.style.height = `${text.clientHeight}px`
        })

        /* 마우스 leave 이벤트 */
        item.addEventListener('mouseleave', () => {
            contents.style.height = '0'
        })
    })
}
