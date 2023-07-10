# import rotatescreen
# import time 
# screen = rotatescreen.get_primary_display()
# for i in range(13):
#     time.sleep(1)
#     screen.rotate_10(i*90 % 360)

import turtle as t
t.speed(0)
t.bgcolor("black")
t.color("cyan")
t.pensize(2)

for i in range(600):
    if i%5==0:
        t.lt(3)
    t.fd(200)    
    t.lt(360/5)
t.done()    