finch.startFinch()
finch.setTail(TailPort.One, 80, 40, 20)
music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (finch.getDistance() == 15) {
        finch.stopMotors()
        finch.setTurn(RLDir.Right, 90, 30)
    } else {
        finch.startMotors(30, 30)
    }
})
