using System;

namespace CIDM_4382_Review_Exercise_Dice_Roll
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create variables
            int timesRolled = 0;
            int pair1 = 0;
            int pair2 = 0;
            int pair3 = 0;
            int pair4 = 0;
            int pair5 = 0;
            int pair6 = 0;
            char keepRolling = 'P';

            //Get user input for how many times they want to roll a pair dice
            Console.Write("How many times do you want to roll a pair of dice: ");
            while(timesRolled == 0)
            {
                try
                {
                    timesRolled = Convert.ToInt32(Console.ReadLine());
                }
                catch
                {
                    Console.Write("Incorrect input. Try again: ");
                }
            }

            //Generate the dice
            Random rnd = new Random();
            int die1 = 0; //Create the first die to be rolled
            int die2 = 0; //Create the first die to be rolled

            for (int i = 0; i <= timesRolled; i++)
            {
                die1 = rnd.Next(1, 7);
                die2 = rnd.Next(1, 7);

                if (die1 == 1 && die2 ==1)
                {
                    pair1 = pair1 + 1;
                }
                else if (die1 == 2 && die2 == 2)
                {
                    pair2 = pair1 + 1;
                }
                else if (die1 == 3 && die2 == 3)
                {
                    pair3 = pair1 + 1;
                }
                else if (die1 == 4 && die2 == 4)
                {
                    pair4 = pair1 + 1;
                }
                else if (die1 == 5 && die2 == 5)
                {
                    pair5 = pair1 + 1;
                }
                else if (die1 == 6 && die2 == 6)
                {
                    pair6 = pair1 + 1;
                }
            }

            //Output statistics to user
            Console.WriteLine("\nNumber of times a pair of 1s was rolled: {0}", pair1);
            Console.WriteLine("Percentage of a pair of 1s being rolled: {0}%\n", ((double)pair1 / (double)timesRolled) * 100.0);

            Console.WriteLine("Number of times a pair of 2s was rolled: {0}", pair2);
            Console.WriteLine("Percentage of a pair of 2s being rolled: {0}%\n", ((double)pair2 / (double)timesRolled) * 100.0);

            Console.WriteLine("Number of times a pair of 3s was rolled: {0}", pair3);
            Console.WriteLine("Percentage of a pair of 3s being rolled: {0}%\n", ((double)pair3 / (double)timesRolled) * 100.0);

            Console.WriteLine("Number of times a pair of 4s was rolled: {0}", pair4);
            Console.WriteLine("Percentage of a pair of 4s being rolled: {0}%\n", ((double)pair4 / (double)timesRolled) * 100.0);

            Console.WriteLine("Number of times a pair of 5s was rolled: {0}", pair5);
            Console.WriteLine("Percentage of a pair of 5s being rolled: {0}%\n", ((double)pair5 / (double)timesRolled) * 100.0);

            Console.WriteLine("Number of times a pair of 6s was rolled: {0}", pair6);
            Console.WriteLine("Percentage of a pair of 6s being rolled: {0}%\n", ((double)pair6 / (double)timesRolled) * 100.0);

            //Asking if the user wants to continue
            Console.WriteLine("Do you want to roll again? (Y or N): ");
            while (keepRolling != 'Y' && keepRolling != 'N' )
            {
                try
                {
                    keepRolling = Convert.ToChar(Console.ReadLine());
                }
                catch
                {
                    Console.Write("Incorrect input. Try again: ");
                }
            }

            while (keepRolling == 'Y')
            {
                keepRolling = 'P';
                timesRolled = 0;
                
                Console.Write("How many times do you want to roll a pair of dice: ");

                while (timesRolled == 0)
                {
                    try
                    {
                        timesRolled = Convert.ToInt32(Console.ReadLine());
                    }
                    catch
                    {
                        Console.Write("Incorrect input. Try again: ");
                    }
                }

                for (int i = 0; i <= timesRolled; i++)
                {
                    die1 = rnd.Next(1, 7);
                    die2 = rnd.Next(1, 7);

                    if (die1 == 1 && die2 == 1)
                    {
                        pair1 = pair1 + 1;
                    }
                    else if (die1 == 2 && die2 == 2)
                    {
                        pair2 = pair1 + 1;
                    }
                    else if (die1 == 3 && die2 == 3)
                    {
                        pair3 = pair1 + 1;
                    }
                    else if (die1 == 4 && die2 == 4)
                    {
                        pair4 = pair1 + 1;
                    }
                    else if (die1 == 5 && die2 == 5)
                    {
                        pair5 = pair1 + 1;
                    }
                    else if (die1 == 6 && die2 == 6)
                    {
                        pair6 = pair1 + 1;
                    }
                }

                Console.WriteLine("\nNumber of times a pair of 1s was rolled: {0}", pair1);
                Console.WriteLine("Percentage of a pair of 1s being rolled: {0}%\n", ((double)pair1 / (double)timesRolled) * 100.0);

                Console.WriteLine("Number of times a pair of 2s was rolled: {0}", pair2);
                Console.WriteLine("Percentage of a pair of 2s being rolled: {0}%\n", ((double)pair2 / (double)timesRolled) * 100.0);

                Console.WriteLine("Number of times a pair of 3s was rolled: {0}", pair3);
                Console.WriteLine("Percentage of a pair of 3s being rolled: {0}%\n", ((double)pair3 / (double)timesRolled) * 100.0);

                Console.WriteLine("Number of times a pair of 4s was rolled: {0}", pair4);
                Console.WriteLine("Percentage of a pair of 4s being rolled: {0}%\n", ((double)pair4 / (double)timesRolled) * 100.0);

                Console.WriteLine("Number of times a pair of 5s was rolled: {0}", pair5);
                Console.WriteLine("Percentage of a pair of 5s being rolled: {0}%\n", ((double)pair5 / (double)timesRolled) * 100.0);

                Console.WriteLine("Number of times a pair of 6s was rolled: {0}", pair6);
                Console.WriteLine("Percentage of a pair of 6s being rolled: {0}%\n", ((double)pair6 / (double)timesRolled) * 100.0);

                Console.WriteLine("Do you want to roll again? (Y or N): ");
                while (keepRolling != 'Y' && keepRolling != 'N')
                {
                    try
                    {
                        keepRolling = Convert.ToChar(Console.ReadLine());
                    }
                    catch
                    {
                        Console.Write("Incorrect input. Try again: ");
                    }
                }

            }
        }
    }
}