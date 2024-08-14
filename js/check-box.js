function CheckBoxEvent() {
    // info 관련 element
    const icon = document.getElementById('check-info-icon')
    const itemContents = document.getElementById('check-contents')
    const infoContents = document.getElementById('check-info-contents')

    // input 태그에 스타일 적용한 CHECK BOX
    const inputCheckList = document.querySelectorAll('input[name="input-camping"]')

    // label 태그에 스타일 적용한 CHECK BOX
    const labelCheckList = document.querySelectorAll('input[name="label-camping"]')

    /****************************************************************************************************/

    /* info 아이콘 클릭 이벤트 */
    icon.addEventListener('click', () => {
        itemContents.style.display = getComputedStyle(itemContents).display === 'none' ? 'grid' : 'none'
        infoContents.style.display = getComputedStyle(infoContents).display === 'none' ? 'grid' : 'none'
    })

    /* input 태그에 스타일 적용한 CHECK BOX 선택 이벤트 */
    inputCheckList.forEach((item) => {
        item.addEventListener('click', (e) => {
            const checked = document.querySelectorAll('input[name="input-camping"]:checked')

            let str = ''

            checked.forEach((item2) => {
                str += (str === '' ? '' : ',') + item2.value
            })

            console.log(`${str} 선택되었습니다.`)
        })
    })

    /* label 태그에 스타일 적용한 CHECK BOX 선택 이벤트 */
    labelCheckList.forEach((item) => {
        item.addEventListener('click', (e) => {
            const checked = document.querySelectorAll('input[name="label-camping"]:checked')

            let str = ''

            checked.forEach((item2) => {
                str += (str === '' ? '' : ',') + item2.value
            })

            console.log(`${str} 선택되었습니다.`)
        })
    })
}
