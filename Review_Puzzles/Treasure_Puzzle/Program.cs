using System;

namespace CIDM_4382_Review_Exercise
{
    class Program
    {
        static void Main(string[] args)
        {
            //Buried Treasure

            char[][] map = new char[5][];
            map[0] = new char[5];
            map[1] = new char[5];
            map[2] = new char[5];
            map[3] = new char[5];
            map[4] = new char[5];

            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    map[i][j] = '^';
                }
            }

            //Output the initial state of the yard:
            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {
                    Console.Write(map[i][j]);
                }
                Console.WriteLine();
            }

            //Get a random location for the treasure
            Random rnd = new Random();
            int randi = rnd.Next(0, 5);
            int randj = rnd.Next(0, 5);

            //check that the treasure is in the map
            //Console.WriteLine();
            //map[randi][randj] = 'X';

            //Check that the treasure is buried in the map then comment out
            //for (int i = 0; i < 5; i++)
            //{
            //    for (int j = 0; j < 5; j++)
            //    {
            //        Console.Write(map[i][j]);
            //    }
            //    Console.WriteLine();
            //}

            //Get the user's guess
            Console.Write("\nWhich row do you want to dig in: ");
            int rowGuess = Convert.ToInt32(Console.ReadLine()) - 1;

            Console.Write("Which column do you want to dig in: ");
            int columnGuess = Convert.ToInt32(Console.ReadLine()) - 1;

            //Console.Write(randi);
            //Console.WriteLine(randj);

            //Console.Write(rowGuess);
            //Console.WriteLine(columnGuess);

            while ((rowGuess != randi) || (columnGuess != randj))
            {
                map[rowGuess][columnGuess] = 'O';
                for (int i = 0; i < 5; i++)
                {
                    for (int j = 0; j < 5; j++)
                    {
                        Console.Write(map[i][j]);
                    }
                    Console.WriteLine();
                }

                if (rowGuess < randi)
                {
                    Console.Write("Go S");
                }
                else if (rowGuess > randi)
                {
                    Console.Write("Go N");
                }
                else
                {
                    Console.WriteLine();
                }

                if (columnGuess < randj)
                {
                    Console.WriteLine("E");
                }
                else if (columnGuess > randj)
                {
                    Console.WriteLine("W");
                }
                else
                {
                    Console.WriteLine();
                }

                Console.Write("\nWhich row do you want to dig in: ");
                rowGuess = Convert.ToInt32(Console.ReadLine()) -1;

                Console.Write("Which column do you want to dig in: ");
                columnGuess = Convert.ToInt32(Console.ReadLine()) -1;
            }

            if (map[rowGuess][columnGuess] == map[randi][randj])
            {
                map[randi][randj] = 'X';
                for (int i = 0; i < 5; i++)
                {
                    for (int j = 0; j < 5; j++)
                    {
                        Console.Write(map[i][j]);
                    }
                    Console.WriteLine();
                }
                Console.WriteLine("You found the treasure!");
            }
        }
    }
}