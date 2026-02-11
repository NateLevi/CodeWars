using System.Collections.Generic;

public class Kata
{
  public static List<int> ReverseList(List<int> list)
  {
    List<int> reversed = new List<int>(list);
    reversed.Reverse();                       
    return reversed;
  }
}


//To not mutate the orignial list you need to create a new class of that list and then use the .Reverse() method which came from System.Collections.General library
