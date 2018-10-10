import math
import random

# Round 1
print("Hello World!")

# Round 2
a = 10 * 10
b = 3 == 5
c = (True and True) or (False and False)
d = math.sqrt(25)

print(a)
print(b)
print(c)
print(d)

# Round 3

x = 10
y = 20

print(str(x) + " times", str(y) + " is " + str(x*y))

# Round 4 
number = int(input("Enter a number: "))
print(str(number*5))

# Round 5
print("Enter a the number of donuts you want to buy:")
donuts = int(input())
if (donuts >= 12): 
    print("The price is $" + str(donuts*0.5))
else: 
    print("The price is $" + str(donuts))

# Round 6
userNumber = 0
while (userNumber < 1):
    userNumber = int(input("Enter a number greater 0: "))
print("Thank you.")

# Round 7
petals = int(input("Enter the number of petals your daisy has: "))
if (petals % 2 == 0):
    while(petals > 0):
        if (petals % 2 == 0):
            print("S/he loves me.")
            petals = petals -1
        else:
            print("S/he loves me not.")
            petals = petals -1
else:
    while(petals > 0):
        if (petals % 2 == 1):
            print("S/he loves me.")
            petals = petals -1
        else:
            print("S/he loves me not.")
            petals = petals -1

# Round 7
rolls = int(input("Enter the times you would like to roll two dice together: "))
from random import randint
count = 0
while (rolls > 0):
    die1 = randint(1,6)
    die2 = randint(1,6)
    if ((die1 == 1) and (die2 == 1)):
        count = count + 1
    rolls = rolls -1
print("You rolled snake eyes " + str(count) + " times.")