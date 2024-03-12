let FrameUtil =(function () {
    function frameUtil(domElement, elementWidth, elementHeight) {
        this.domElement = domElement;
        this.elementHeight = elementHeight;
        this.elementWidth = elementWidth;
        document.documentElement.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        document.body.style.cssText = 'overflow:hidden;width:100vw;height:100vh;';
        this.fitview();
    }
    frameUtil.prototype.fitview = function () {
        let _this = this;
        let containerWidth = document.documentElement.clientWidth;
        let containerHeight = document.documentElement.clientHeight;
        let elementaspect = this.elementWidth / this.elementHeight;
        let containeraspect = containerWidth / containerHeight;
        
        resizeFunction.call(this,_this,elementaspect,containeraspect)
        window.addEventListener('resize',()=>{
            resizeFunction.call(this,_this,elementaspect,containeraspect)
        });
    };
    return frameUtil;
}());
function getWH(w,h) {
    return `transform-origin: 0% 0%;position:absolute;left:0;top:0;width:${w}px;height:${h}px;`
};

function getStyle1(rw,rh,w,h) {
    let wh = getWH(w,h)
    let matrix3d = `transform: matrix3d(${rw}, 0, 0, 0, 0,${rh}, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);`
    return matrix3d+wh
};
function getStyle2(rw,rh,d,w,h) {
    let wcos = Math.cos(Math.PI / 2) * rw
    let wsin = Math.sin(Math.PI / 2) * rw
    let hcos = Math.cos(Math.PI / 2) * rh
    let hsin = Math.sin(Math.PI / 2) * rh
    let wh = getWH(w,h)
    let matrix3d =`transform: matrix3d(${wcos}, ${wsin},0, 0, ${-hsin }, ${hcos}, 0, 0, 0, 0, 1, 0, ${d},0, 0, 1);`
    return matrix3d+wh
};


function resizeFunction(_this) {
    let w = this.elementWidth;
    let h = this.elementHeight;
    let containerWidth = document.documentElement.clientWidth;
    let containerHeight = document.documentElement.clientHeight;
    if (containerWidth >= containerHeight) {
      let ratioWidth = containerWidth / this.elementWidth;
      let ratioHeight = containerHeight / this.elementHeight;
      this.domElement.setAttribute('style',getStyle1(ratioWidth,ratioHeight,w,h))
    }
    else {
      let ratioWidth = containerHeight / this.elementWidth;
      let ratioHeight = containerWidth / this.elementHeight;
      let distance = containerWidth;
      this.domElement.setAttribute('style', getStyle2(ratioWidth,ratioHeight,distance,w,h));
    }
};
export default FrameUtil
