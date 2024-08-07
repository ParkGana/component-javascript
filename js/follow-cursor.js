function FollowCursorEvent() {
    // follow cursor 관련 element
    const area = document.getElementById('follow-cursor-area')
    const circle = document.getElementById('follow-cursor-circle')

    let pageTop, pageLeft, areaTop, areaLeft

    /****************************************************************************************************/

    areaTop = area.getBoundingClientRect().top
    areaLeft = area.getBoundingClientRect().left

    /* 화면 크기 변경 이벤트 */
    window.addEventListener('resize', (e) => {
        areaTop = area.getBoundingClientRect().top
        areaLeft = area.getBoundingClientRect().left
    })

    /* 마우스 이동 이벤트 */
    document.addEventListener('mousemove', (e) => {
        pageTop = e.pageY
        pageLeft = e.pageX

        setTimeout(() => {
            circle.style.top = pageTop - areaTop - 25 + 'px'
            circle.style.left = pageLeft - areaLeft - 25 + 'px'
        }, 100)
    })
}
