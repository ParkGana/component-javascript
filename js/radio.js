function RadioEvent() {
    // input 태그에 스타일 적용한 RADIO
    const radioList = document.querySelectorAll('input[name="radio-input"]')

    /****************************************************************************************************/

    /* input 태그에 스타일 적용한 RADIO 선택 이벤트 */
    radioList.forEach((item) => {
        item.addEventListener('click', () => {
            const selected = document.querySelector('input[name="radio-input"]:checked')

            console.log(`${selected.value} 선택되었습니다.`)
        })
    })
}
