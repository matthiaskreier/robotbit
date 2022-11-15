robotbit.rgb().showRainbow(1, 360)
robotbit.Servo(robotbit.Servos.S1, 0)
for (let index = 0; index < 2; index++) {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
}
robotbit.Servo(robotbit.Servos.S1, 180)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    robotbit.rgb().showRainbow(0, 90)
    basic.showIcon(IconNames.SmallHeart)
    robotbit.rgb().showRainbow(90, 180)
    basic.showIcon(IconNames.Heart)
    robotbit.rgb().showRainbow(180, 270)
    basic.showIcon(IconNames.SmallHeart)
    robotbit.rgb().showRainbow(270, 360)
})
