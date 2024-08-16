function SelectBoxEvent() {
    // info 관련 element
    const icon = document.getElementById('select-info-icon')
    const itemContents = document.getElementById('select-contents')
    const infoContents = document.getElementById('select-info-contents')

    // select 태그로 생성한 SELECT BOX
    const selectTag = document.querySelector('.select.select-tag')

    // div 태그로 생성한 SELECT BOX
    const divTag = document.querySelector('.select.div-tag')
    const selected = document.querySelector('.select-div-tag.text')
    const arrow = document.querySelector('.select-div-tag.arrow')
    const option = document.querySelector('.select-div-tag.option')
    const optionList = document.querySelectorAll('.select-div-tag.option-item')

    /****************************************************************************************************/

    /* info 아이콘 클릭 이벤트 */
    icon.addEventListener('click', () => {
        itemContents.style.display = getComputedStyle(itemContents).display === 'none' ? 'grid' : 'none'
        infoContents.style.display = getComputedStyle(infoContents).display === 'none' ? 'grid' : 'none'
    })

    /* select 태그로 생성한 SELECT BOX 선택 이벤트 */
    selectTag.addEventListener('change', () => {
        console.log(`${selectTag.options[selectTag.selectedIndex].text} 선택되었습니다.`)
    })

    /* div 태그로 생성한 SELECT BOX 클릭 이벤트 */
    divTag.addEventListener('click', () => {
        arrow.src = `../resource/icon/select-${getComputedStyle(option).display === 'none' ? 'up' : 'down'}.png`
        option.style.display = getComputedStyle(option).display === 'none' ? 'block' : 'none'

        optionList.forEach((item) => {
            item.style.fontWeight = selected.innerText === item.innerText ? '700' : '400'
        })
    })

    /* div 태그로 생성한 SELECT BOX 외부 영역 클릭 이벤트 */
    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('select-div-tag')) {
            arrow.src = '../resource/icon/select-down.png'
            option.style.display = 'none'
        }
    })

    /* div 태그로 생성한 SELECT BOX 선택 이벤트 */
    optionList.forEach((item) => {
        item.addEventListener('click', () => {
            selected.innerText = item.innerText
            console.log(`${item.innerText} 선택되었습니다.`)
        })
    })
}
