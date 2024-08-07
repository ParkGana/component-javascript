function ButtonEvent() {
    // info 관련 element
    const icon = document.getElementById('button-info-icon')
    const itemContents = document.getElementById('button-contents')
    const infoContents = document.getElementById('button-info-contents')

    // button 태그로 생성한 BUTTON
    const buttonTag = document.querySelector('.button.button-tag')

    // div 태그로 생성한 BUTTON
    const divTag = document.querySelector('.button.div-tag')

    /****************************************************************************************************/

    /* info 아이콘 클릭 이벤트 */
    icon.addEventListener('click', () => {
        itemContents.style.display = getComputedStyle(itemContents).display === 'none' ? 'grid' : 'none'
        infoContents.style.display = getComputedStyle(infoContents).display === 'none' ? 'grid' : 'none'
    })

    /* button 태그로 생성한 BUTTON 클릭 이벤트 */
    buttonTag.addEventListener('click', () => {
        alert('버튼이 클릭되었습니다.')
        console.log('button 태그로 생성한 버튼이 클릭되었습니다.')
    })

    /* div 태그로 생성한 BUTTON 클릭 이벤트 */
    divTag.addEventListener('click', () => {
        alert('버튼이 클릭되었습니다.')
        console.log('div 태그로 생성한 버튼이 클릭되었습니다.')
    })
}
