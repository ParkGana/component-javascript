function SearchEvent() {
    // follow cursor 관련 element
    const input = document.querySelector('.search')
    const icon = document.querySelector('.search-icon')

    let keyword

    /****************************************************************************************************/

    /* 검색어 입력 이벤트 */
    input.addEventListener('keyup', (e) => {
        keyword = e.target.value
    })

    /* Enter 키 이벤트 */
    input.addEventListener('keypress', (e) => {
        if (e.code === 'Enter') {
            alert(`'${keyword}' 입력되었습니다.`)
        }
    })

    /* search 아이콘 클릭 이벤트 */
    icon.addEventListener('click', () => {
        alert(`'${keyword}' 입력되었습니다.`)
    })
}
