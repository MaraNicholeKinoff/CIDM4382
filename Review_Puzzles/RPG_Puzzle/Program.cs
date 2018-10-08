using System;

namespace CIDM_4382_Review_Exercise_RPG
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create some variables
            char resting = 'N';
            int health = 0;
            int weaponDamage = 0;
            string foodchoice = "pie";
            string weaponchoice = "slingshot";
            int playerGuess = 0;
            int sphinxNumber = -1;
            int sphinxHealth = 75;
            int sphinxAttack = -1;
            Random rnd = new Random();
            int hits = 0;

            //RPG doing things while not resting
            while (resting != 'Y')
            {
                //Player Choosing Apple vs. Cake      
                while (foodchoice != "apple" && foodchoice != "Apple" && foodchoice != "APPLE" && foodchoice != "cake" && foodchoice != "Cake" && foodchoice != "CAKE")
                {
                    Console.Write("You are a hungry adventurer and must eat before you set out.\nBefore you is an apple and a cake.\nWhich would you prefer to eat: ");
                    try
                    {
                        foodchoice = Convert.ToString(Console.ReadLine());
                    }
                    catch
                    {
                        Console.WriteLine("You are a hungry adventurer and must eat before you set out.\nBefore you is an apple and a cake.\nWhich would you prefer to eat: ");
                    }
                }

                //Assigning HP
                if (foodchoice == "apple") {
                    health = health + 50;
                }
                else if (foodchoice == "Apple")
                {
                    health = health + 50;
                }
                else if (foodchoice == "APPLE")
                {
                    health = health + 50;
                }
                else if (foodchoice == "cake")
                {
                    health = health + 100;
                }
                else if (foodchoice == "Cake")
                {
                    health = health + 100;
                }
                else if (foodchoice == "CAKE")
                {
                    health = health + 100;
                }

                //Informing player of HP
                Console.WriteLine("You chose the {0}! Your health is now at {1}!", foodchoice, health);

                //Get player to chose axe vs. sword
                while (weaponchoice != "axe" && weaponchoice != "Axe" && weaponchoice != "AXE" && weaponchoice != "sword" && weaponchoice != "Sword" && weaponchoice != "SWORD")
                {
                    Console.Write("\nYou must chose a weapon before you set out.\nBefore you is an axe and a sword.\nWhich would you prefer to use: ");
                    try
                    {
                        weaponchoice = Convert.ToString(Console.ReadLine());
                    }
                    catch
                    {
                        Console.WriteLine("You must chose a weapon before you set out.\nBefore you is an axe and a sword.\nWhich would you prefer to use: ");
                    }
                }

                //Informing player of Damage

                if (weaponchoice == "axe")
                {
                    Console.WriteLine("You chose the axe! You can deal anywhere between 10 and 15 damage!");
                }
                else if (weaponchoice == "Axe")
                {
                    Console.WriteLine("You chose the axe! You can deal anywhere between 10 and 15 damage!");
                }
                else if (weaponchoice == "AXE")
                {
                    Console.WriteLine("You chose the axe! You can deal anywhere between 10 and 15 damage!");
                }
                else if (weaponchoice == "sword")
                {
                    Console.WriteLine("You chose the sword! You can deal anywhere between 16 and 20 damage!");
                }
                else if (weaponchoice == "Sword")
                {
                    Console.WriteLine("You chose the sword! You can deal anywhere between 16 and 20 damage!");
                }
                else if (weaponchoice == "SWORD")
                {
                    Console.WriteLine("You chose the sword! You can deal anywhere between 16 and 20 damage!");
                }

                //Meeting the Sphinx
                Console.WriteLine("\nYou leave the inn with your trusty {0} at your side and your belly full of {1}.", weaponchoice, foodchoice);
                Console.WriteLine("You see a Sphinx at the end of the road as you leave. You hurry down the road and approach the beast.\n");

                Console.Write("The Sphinx asks you to gues a number 1 though 5, inclusive: ");
                try
                {
                    playerGuess = Convert.ToInt32(Console.ReadLine());
                }
                catch
                {
                    Console.WriteLine("You must guess a number 1 though 5, inclusive: ");
                }

                sphinxNumber = rnd.Next(1, 6);

                if (playerGuess == sphinxNumber)
                {
                    Console.WriteLine("You guessed the Sphinx's number correctly! You pass with care and your life.\n\nYOU WIN!!\n\n");
                    resting = 'Y';
                    break;
                }
                else
                {
                    Console.WriteLine("You guessed the Sphinx's number wrong! You must fight for your life");
                    while (sphinxHealth > 0 && health > 0)
                    {
                        if (weaponchoice == "axe")
                        {
                            weaponDamage = rnd.Next(10, 16);
                        }
                        else if (weaponchoice == "Axe")
                        {
                            weaponDamage = rnd.Next(10, 16);
                        }
                        else if (weaponchoice == "AXE")
                        {
                            weaponDamage = rnd.Next(10, 16);
                        }
                        else if (weaponchoice == "sword")
                        {
                            weaponDamage = rnd.Next(16, 21);
                        }
                        else if (weaponchoice == "Sword")
                        {
                            weaponDamage = rnd.Next(16, 21);
                        }
                        else if (weaponchoice == "SWORD")
                        {
                            weaponDamage = rnd.Next(16, 21);
                        }
                        sphinxAttack = rnd.Next(1, 11);
                        Console.WriteLine("You hit for {0} and the Sphinx's health drops to {1}", weaponDamage, sphinxHealth - weaponDamage);
                        sphinxHealth = sphinxHealth - weaponDamage;
                        hits = hits + 1;
                        Console.WriteLine("You get hit by the Sphinx! Your health drops to {0}", health - sphinxAttack);
                        health = health - sphinxAttack;
                    }
                    if (sphinxHealth <= 0)
                    {
                        Console.WriteLine("You killed the Sphinx int {0} hits!\n\nYOU WIN!!\n\n", hits);
                        resting = 'Y';
                        break;                        
                    }
                    else
                    {
                        Console.WriteLine("You died!");
                        resting = 'Y';
                        break;
                    }
                }
            }
        }
    }
}