# Mara Kinoff
# PA 5
# CIDM 4832

# Follow the instructions provided below.
# Upload your source code to WTClass
# when finished by the end of class on 10/17.

# Note about the assignment:
# This is NOT a "long" assignment in the sense of "lines of code."
# It can be done in 10 lines of code.  
# The goal of the assignment is to get you to use a function 
# that has a list as a parameter.  If you think about how functions work
# and how to access list elements, you will be fine.


# 0. Go to http://www.espn.com/nba/teams and select a team.
# Go to Stats and select the 2017-2018 season.  
# Then select a player by clicking on their name link.
# At the bottom of the Game Log, click "Complete Game Log" to view all game stats.
# Choose 5 games for which the player has statistics that are NOT all 0.

# 1. Create a list of 5 lists, where each list contains 4 statistics.
# [FGM, FGA, 3PM, 3PA] -- This list holds these stats from a single Game.
# You should have one list of 5 lists with the stats above from the website.

# GAME STATS LINK: http://www.espn.com/nba/player/gamelog/_/id/3112335/nikola-jokic

game_stats = [[14,15,4,7],[5,14,1,4],[9,14,1,2],[6,20,1,6],[11,17,4,6]]

# 2. Create a function called efg_percentage that has one parameter (a list)
# and returns the effective field goal percentage (efg).
# HINT: You do NOT need to put square braces around the parameter.
# The efg_percentage function should calculate efg using the following formula:# 
# 
# efg = (FGM + 1.5 * 3PM) / (FGA + 3PA)
#
# You will need to figure out how to access each of the stats required inside the function.

def efg_percentage(a, b, c, d):
    efg = (a + 1.5 * b) / (c + d)
    return efg

# 3. Use a for loop to call the efg_percentage function so that it prints 
# the efg for every game.  See the .png in the assignment for the output example.

for i in range(0, len(game_stats)):
    efg = efg_percentage((game_stats[i][0]),(game_stats[i][1]),(game_stats[i][2]),(game_stats[i][3]))
    print('EFG% GAME ' + str(i+1) + ": " + str(efg))