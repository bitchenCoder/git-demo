let FrameUtil = (function () {
    function frameUtil(domElement, elementWidth, elementHeight) {
        this.domElement = domElement;
        this.elementHeight = elementHeight;
        this.elementWidth = elementWidth;
        document.documentElement.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        document.body.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        this.showAll();
    }
    frameUtil.prototype.showAll = function () {
        let _this = this;
        let elementaspect = this.elementWidth / this.elementHeight;
        resizeFunction.call(this, _this, elementaspect, this.elementWidth, this.elementHeight)
        window.addEventListener('resize', () => {
            resizeFunction.call(this, _this, elementaspect, this.elementWidth, this.elementHeight)
        });
    };
    return frameUtil;
}());

function resizeFunction(_this, elementaspect, w, h) {
    let containerWidth = document.documentElement.clientWidth;
    let containerHeight = document.documentElement.clientHeight;
    let containeraspect = containerWidth / containerHeight;
    if (containerWidth >= containerHeight) {
        if (elementaspect >= containeraspect) {
            let ratio = containerWidth / this.elementWidth;
            if (this.elementHeight * ratio >= containerHeight) {
                ratio = containerHeight / this.elementHeight;
                let distance = (containerWidth - this.elementWidth * ratio) / 2;
                this.domElement.setAttribute('style', getStyle1(ratio, distance, w, h));
            } else {
                let distance = (containerHeight - this.elementHeight * ratio) / 2;
                this.domElement.setAttribute('style', getStyle2(ratio, distance, w, h));
            }
        } else {
            let ratio = containerHeight / this.elementHeight;
            if (this.elementWidth * ratio >= containerWidth) {
                ratio = containerWidth / this.elementWidth;
                let distance = (containerWidth - this.elementWidth * ratio) / 2;
                this.domElement.setAttribute('style', getStyle1(ratio, distance, w, h));
            } else {
                let distance = (containerWidth - this.elementWidth * ratio) / 2;
                this.domElement.setAttribute('style', getStyle1(ratio, distance, w, h));
            }
        }
    } else {
        if (elementaspect >= containeraspect) {
            let ratio = containerWidth / this.elementHeight;
            if (this.elementWidth * ratio >= containerHeight) {
                ratio = containerHeight / this.elementWidth;
                let distance = (containerWidth + this.elementHeight * ratio) / 2;
                this.domElement.setAttribute('style', getStyle4(ratio, distance, w, h));
            } else {
                let distance = (containerHeight - this.elementWidth * ratio) / 2;
                this.domElement.setAttribute('style', getStyle3(ratio, distance, w, h));
            }
        } else {
            let ratio = containerHeight / this.elementWidth;
            if (this.elementHeight * ratio >= containerWidth) {
                ratio = containerWidth / this.elementHeight;
                let distance = (containerHeight - this.elementWidth * ratio) / 2;
                this.domElement.setAttribute('style', getStyle3(ratio, distance, w, h));
            } else {
                let distance = (containerWidth + this.elementHeight * ratio) / 2;
                this.domElement.setAttribute('style', getStyle4(ratio, distance, w, h));
            }
        }
    }
}

function getWH(w, h) {
    return `transform-origin: 0% 0%;position:absolute;left:0;top:0;width:${w}px;height:${h}px;`
}

function getStyle1(r, d, w, h) {
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${r}, 0, 0, 0, 0,${r}, 0, 0, 0, 0, 1, 0, ${d}, 0, 0, 1);`
    return matrix3d + wh
}

function getStyle2(r, d, w, h) {
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${r}, 0, 0, 0, 0,${r}, 0, 0, 0, 0, 1, 0, 0, ${d}, 0, 1);`
    return matrix3d + wh
}

function getStyle3(r, d, w, h) {
    let cos = Math.cos(Math.PI / 2) * r
    let sin = Math.sin(Math.PI / 2) * r
    let ceil = Math.ceil(h * r)
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${cos}, ${sin},0, 0, ${-sin }, ${cos}, 0, 0, 0, 0, 1, 0, ${ceil}, ${d}, 0, 1);`
    return matrix3d + wh
}

function getStyle4(r, d, w, h) {
    let cos = Math.cos(Math.PI / 2) * r
    let sin = Math.sin(Math.PI / 2) * r
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${cos}, ${sin},0, 0, ${-sin }, ${cos}, 0, 0, 0, 0, 1, 0, ${d}, 0, 0, 1);`
    return matrix3d + wh
}
export default FrameUtil