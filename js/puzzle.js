function PuzzleEvent() {
    // puzzle 관련 element
    const puzzleList = document.querySelectorAll('.puzzle-image')

    let moveId, moveSrc

    /****************************************************************************************************/

    puzzleList.forEach((puzzle) => {
        /* drag 이벤트 */
        puzzle.addEventListener('dragstart', (e) => {
            moveId = e.target.id
            moveSrc = e.target.src
        })

        /* dragover 이벤트 */
        puzzle.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        /* drop 이벤트 */
        puzzle.addEventListener('drop', (e) => {
            const moveImage = document.getElementById(moveId)
            const changeImage = document.getElementById(e.target.id)

            moveImage.src = e.target.src
            changeImage.src = moveSrc
        })
    })
}
