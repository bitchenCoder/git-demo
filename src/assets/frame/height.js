let FrameUtil = (function () {
    function frameUtil(domElement, elementWidth, elementHeight) {
        this.domElement = domElement;
        this.elementHeight = elementHeight;
        this.elementWidth = elementWidth;
        document.documentElement.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        document.body.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        this.height();
    }

    frameUtil.prototype.height = function () {
        let _this = this;
        resizeFunction.call(this, _this)
        window.addEventListener('resize', () => {
            resizeFunction.call(this, _this)
        });
    };
    return frameUtil;
}());

function getWH(w, h) {
    return `transform-origin: 0% 0%;position:absolute;left:0;top:0;width:${w}px;height:${h}px;`
};

function getStyle1(r, d, w, h) {
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${r}, 0, 0, 0, 0,${r}, 0, 0, 0, 0, 1, 0, ${d}, 0, 0, 1);`
    return matrix3d + wh
};

function getStyle2(r, d, w, h) {
    let cos = Math.cos(Math.PI / 2) * r
    let sin = Math.sin(Math.PI / 2) * r
    let ceil = Math.ceil(h * r)
    let wh = getWH(w, h)
    let matrix3d = `transform: matrix3d(${cos}, ${sin},0, 0, ${-sin }, ${cos}, 0, 0, 0, 0, 1, 0, ${ceil}, ${d}, 0, 1);`
    return matrix3d + wh
};

function resizeFunction(_this) {
    let w = this.elementWidth;
    let h = this.elementHeight;
    let containerWidth = document.documentElement.clientWidth;
    let containerHeight = document.documentElement.clientHeight;
    if (containerWidth >= containerHeight) {
        let ratio = containerHeight / this.elementHeight;
        let distance = (containerWidth - this.elementWidth * ratio) / 2;
        this.domElement.setAttribute('style',getStyle1(ratio,distance,w,h));
    } else {
        let ratio = containerWidth / this.elementHeight;
        let distance = (containerHeight - this.elementWidth * ratio) / 2;
        this.domElement.setAttribute('style',getStyle2(ratio,distance,w,h));
    }
};
export default FrameUtil