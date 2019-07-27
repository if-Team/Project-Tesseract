/// <reference path="typings/ue.d.ts">/>
"use strict"
class TestWidget extends JavascriptWidget {
    OnPaint(context) {
        let start = {X:0,Y:0}
        let r = 300
        let t = (new Date() | 0) / 1000
        let end = {X:Math.cos(t)*r,Y:Math.sin(t)*r}
        context.DrawLine(start,end,{R:1,A:1},true)                    
    }
}


function main () {
    console.log('hello!!')
    let actor = new TextRenderActor(GWorld, {X: 100, Z: 100})
    var a = new Rotator();
    a.Yaw = 180;
    a.Pitch = 90;
    actor.SetActorRotation({Yaw: 180, Pitch: 90});
    actor.SetActorScale3D({X: 4, Y: 4, Z: 4})
    actor.TextRender.SetText("HELLO WORLD")
    Cube

    let TestWidget_C = require('uclass')()(global,TestWidget)
let widget = GWorld.CreateWidget(TestWidget_C)
widget.AddToViewport()
    return () => {
        actor.DestroyActor()
        console.log('cleanup!!')
    }
}

try {
    module.exports = () => {
        let cleanup = () => {}
        process.nextTick(() => cleanup = main())
        return () => cleanup()
    }
} catch (err) {
    require('./bootstrap')('tesseract')
}