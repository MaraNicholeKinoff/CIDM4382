# Mara Kinoff
# PA 4
# CIDM 4382
# 10/17/2018
 
# Follow the instructions provided below.
# Upload your source code to WTClass
# when finished by 11:59 PM on Wednesday, 10/17.

import random as rand

rest = 'no'

# Loop runs as long as the adventurer doesn't want to rest
while rest == 'no':
    
    actual = -99 # Value of the actual Sphinx number
    health = 0 # Adventurer health bar
    beast_health = 50 # Sphinx health bar
    

# 1. Construct a while loop that gets the user to enter sword or axe and keeps running until they do.
# 'You look ready for adventure, traveler.  Will you take your sword or axe today?'
# Store the user input in the variable weapon.

    weapon = ''
    while (weapon is not 'sword' or weapon is not 'axe'):
        weapon = input('You look ready for adventure. Will you take your sword or axe today?')
        break

# 2. If they choose sword print 'Your trusty sword.'
# If they choose axe print 'Your trusty axe.' 
      
    if (weapon == 'sword'):
        print('Your trusty sword.')
    else:
        print('Your trusty axe.')
 
# 3. Construct a while loop that gets the user to enter cake or apple and keeps running until they do.
# 'Before we leave for battle today, will you eat the cake or the apple?'
# Store the user input in the variable food.       

    food = ''  
    while (food is not 'cake' or weapon is not 'apple'):
        food = input('Before we leave for battle today, will you eat the cake or the apple?')
        break

# 4. If they choose cake print 'Great choice! Your health bar is up to 100.'
# and set health to 100.
# If they choose apple print 'Always take the cake... your health bar is up to 50.' 
# and set health to 50.

    if (food == 'apple'):
        print('Always take the cake... your health bar is up to 50.')
        health = 50
    else:
        print('Great choice! Your health bar is up to 100.')
        health = 100

    print('You leave the inn with your trusty ' + weapon + ' at your side and your belly full of ' + food + '.')
    
    print('You see a Sphinx at the end of the road as you leave.  You hurry down the road and approach the beast.')
   
    
# 5. Ask the user to guess the Sphinx's number in the following way:
# 'Adventurer... if you can guess my number between 1 and 5 you can pass without any trouble.  What is your guess?'
# Store the result in the variable guess.
# Generate a random number between 1 and 5 and store the result in the variable actual.

    print('As you approach the Sphinx, it looks as though it is about to speak: ')
    guess = int(input('Adventurer... if you can guess my number between 1 and 5 you can pass without any trouble.  What is your guess?'))

    acutal = rand.randint(1,5)

    if guess == actual: # Executes if the user's guess is the same as the Sphinx's number 
        print('SUCCESS!  PASS WITH CARE AND YOUR LIFE...')
        
    else: # Executes if the user's guess is not the same as the Sphinx's number
        print('INCORRECT!  PREPARE TO FIGHT!')

        hits = 0 # Represents the number of hits the beast takes
        while (beast_health > 0 and health > 0): # Runs while the beast is still alive
            
            # 7. Inside the while loop for the fight:
            # If the weapon carried is a sword, generate a random number between 16 and 20 for an attack value.
            # Store this attack in a variable called my_attack.
            # Otherwise, generate a random number between 10 and 15.
            # Store this attack in a variable called my_attack.
            if (weapon == 'sword'):
                my_attack = rand.randint(16,20)
            else:
                my_attack = rand.randint(10,15)
                
            # 8. Calculate the new health for the beast by subtracting my_attack from beast_health.    
            # Increase the value of the variable hits by 1. 
            beast_health = beast_health - my_attack      
            hits = hits + 1           

            # 9. If the beast's health is less than or equal to 0, print 
            # 'You hit for ' (damage dealt)  ' and beast is dead in ' (# hits) ' hits!'
            # {Otherwise, print 
            # 'You hit for ' (damage dealt) ' and beast health drops to ' (beast health)

            if (beast_health <= 0):
                print('You hit for ' + str(my_attack) + ' and beast is dead in ' + str(hits) + ' hits!')
            else:
                print('You hit for ' + str(my_attack) + ' and beast health drops to ' + str(beast_health))

            # Generate an attack value for the beast attack between 0 and 10 and store in a variable called beast_attack
            # Calculate your new health value by subtracting beast_attack from health.
            # Print 'Beast hits for ' (beast attack) ' and your health drops to ' (health)}   

            if (beast_health > 0):
                beast_attack = rand.randint(0,10)
                health = health - beast_attack
                print('Beast hits for ' + str(beast_attack) + ' and your health drops to ' + str(health))
                if (health <= 0):
                    print('You died.')
            
    # 10. Construct a while loop that gets the user to enter yes or no and keeps running until they do.
    # 'The day comes to an end... Will you rest, yes or no?'
    # Store the user input in the variable rest.   
    # If the user enters yes, print 'A well-earned rest.'

    rest = ''
    if (health > 0):
        while(rest is not 'no' or rest is not 'yes'):
            rest = input('The day comes to an end... Will you rest, yes or no?')
            if (rest == 'yes'):
                print('A well-earned rest.')
            break
