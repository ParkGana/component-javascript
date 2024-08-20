function PaginationEvent() {
    // post 관련 element
    const postList = document.querySelectorAll('.list-item.contents')

    // pagination 관련 element 및 function
    const pagination = document.querySelector('.pagination-container')
    const prev = document.createElement('img')
    const next = document.createElement('img')

    const postCount = 2
    const pageCount = 5
    const totalPage = Math.ceil(postList.length / postCount)
    let nowPage = 1
    let nowGroup = 1

    createPagination()

    const pageList = document.querySelectorAll('.pagination-page')

    /****************************************************************************************************/

    /* 페이지 클릭 이벤트 */
    pageList.forEach((page, pageIndex) => {
        page.addEventListener('click', () => {
            nowPage = parseInt(pageIndex + 1)
            setPost()
            setPagination()
        })
    })

    /* prev 아이콘 클릭 이벤트 */
    prev.addEventListener('click', () => {
        if (nowPage > 1) {
            nowPage--
            setPost()
            setPagination()
        }
    })

    /* next 아이콘 클릭 이벤트 */
    next.addEventListener('click', () => {
        if (nowPage < totalPage) {
            nowPage++
            setPost()
            setPagination()
        }
    })

    /****************************************************************************************************/

    /* Pagination 생성 */
    function createPagination() {
        // prev 아이콘 설정
        prev.classList.add('pagination-arrow')
        prev.classList.add(nowPage === 1 ? 'disable' : null)
        prev.id = 'pagination-prev'
        prev.src = '../resource/icon/pagination-prev.png'
        pagination.appendChild(prev)

        // page 설정
        new Array(totalPage)
            .fill(0)
            .map((_, i) => i)
            .forEach((num, index) => {
                const page = document.createElement('p')

                page.classList.add('pagination-page')
                page.classList.add(index < pageCount ? 'view' : null)
                page.classList.add(index + 1 === nowPage ? 'now' : null)
                page.innerText = index + 1
                pagination.appendChild(page)
            })

        // next 아이콘 설정
        next.classList.add('pagination-arrow')
        next.classList.add(nowPage === totalPage ? 'disable' : null)
        next.id = 'pagination-next'
        next.src = '../resource/icon/pagination-next.png'
        pagination.appendChild(next)
    }

    /* 페이지 전환에 따른 Post 세팅 */
    function setPost() {
        postList.forEach((post, postIndex) => {
            const first = (nowPage - 1) * postCount
            const last = (nowPage - 1) * postCount + postCount - 1

            // 현재 페이지에서 보여줄 post 설정
            if (postIndex >= first && postIndex <= last) {
                post.classList.add('view')
            } else {
                post.classList.remove('view')
            }
        })
    }

    /* 페이지 전환에 따른 Pagination 세팅 */
    function setPagination() {
        // 첫 페이지일 경우 prev 아이콘 기능 제거
        if (nowPage === 1) {
            prev.classList.add('disable')
        } else {
            prev.classList.remove('disable')
        }

        // 마지막 페이지일 경우 next 아이콘 기능 제거
        if (nowPage === totalPage) {
            next.classList.add('disable')
        } else {
            next.classList.remove('disable')
        }

        if (nowPage < (nowGroup - 1) * pageCount + 1) {
            nowGroup--
        }

        if (nowPage > nowGroup * pageCount) {
            nowGroup++
        }

        pageList.forEach((page, pageIndex) => {
            const first = (nowGroup - 1) * pageCount
            const last = nowGroup * pageCount - 1

            // 현재 페이지에서 보여줄 page 설정
            if (pageIndex >= first && pageIndex <= last) {
                page.classList.add('view')
            } else {
                page.classList.remove('view')
            }

            if (pageIndex + 1 === nowPage) {
                page.classList.add('now')
            } else {
                page.classList.remove('now')
            }
        })

        pagination.style.gridTemplateColumns = `repeat(${
            document.querySelectorAll('.pagination-page.view').length + 2
        }, 10px)`
    }
}
