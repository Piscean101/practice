class Circle:
    pi = float(3.14)
    def area(self, radius):
        return self.pi * radius ** 2
    
circle = Circle()

print(circle.area(5))

class Robot:
    def __init__(self, version, power):
        self.version = version
        self.power = power
    def __repr__(self):
        return "This is a version " + str(self.version) + " robot with " + str(self.power) + " power level" 

robot_1 = Robot(1.5, 500)
print(robot_1)
