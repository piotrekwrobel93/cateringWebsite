    const DURATION = 300
    let index =  0
    let last_time = 0
    

    export default function FSScroll(container, slides, downButton, upButton) {
        // INIT
        this.container = container
        // METHODS
        this.setStyles = function() {
            this.container.style.height = "100vh"
            this.container.style.overflow = "hidden"
        }
        this.resetStyles = function() {
            this.container.style.hight = "100%"
            this.container.style.overflow = "auto"
        }
        this.next = function() {
            if (index > slides.length - 2) return
            index++
            slides[index].scrollIntoView({ behavior: 'smooth'})
        }
        this.prev = function() {
            if (index < 1) { index = 0; return }
            index--
            slides[index].scrollIntoView({ behavior: 'smooth'})
            
        }
        this.supportsEvent = function() {
            if ("onwheel" in window) return true
            return false
        }
        this.destroy = function() {
            index = 0
            removeEventListener('wheel', this._event, {passive: false})
            this.resetStyles()
        }
        this._event = event => {
            const CURRENT_TIME = new Date().getTime()
            const DELTA = event.deltaY 
            let eventY = event.y
            // PREVENT MULTIPLE SCROLLS
            if ( CURRENT_TIME - last_time < DURATION ) {
                event.preventDefault()
                event.stopPropagation()
                return
            }
            // DOWN
            if (DELTA > 0) {
                // PREVENTS CHUNKY SCROLLS
                if (event.y === eventY) { event.preventDefault() }
                this.next()

            } 
            // UP
            if (DELTA < 0) {
                // PREVENTS CHUNKY SCROLLS
                if (event.y === eventY) { event.preventDefault() }
                this.prev()
            }

            last_time = CURRENT_TIME

        }
        this.init = function() {
            if (this.supportsEvent()) {
                this.setStyles()
                window.addEventListener("wheel", this._event, { passive: false })
            }
        }

        if (downButton) {
            downButton.addEventListener("click", (event) => {
                event.preventDefault()
                this.next()
            })
        }
        if (upButton) {
            upButton.addEventListener("click", (event) => {
                event.preventDefault()
                this.prev()
            })
        }
    }




