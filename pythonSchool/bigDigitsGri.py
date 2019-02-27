#BigDigits.py (из Книги Саммерфилда)
import sys
Zero = ["  ***  ",
        " *   * ",
        "*     *",
        "*     *",
        "*     *",
        " *   * ",
        "  ***  "]
One = [" * ", "** ", " * ", " * ", " * ", " * ", "***"]
Two = [" *** ", "*   *", "*  * ", "  *  ", " *   ", "*    ", "*****"]
Three = [" *** ", "*   *", "    *", "  ** ", "    *", "*   *", " *** "]
Four = ["   *  ", "  **  ", " * *  ", "*  *  ", "******", "   *  ",
        "   *  "]
Five = ["*****", "*    ", "*    ", " *** ", "    *", "*   *", " *** "]
Six = [" *** ", "*    ", "*    ", "**** ", "*   *", "*   *", " *** "]
Seven = ["*****", "    *", "   * ", "  *  ", " *   ", "*    ", "*    "]
Eight = [" *** ", "*   *", "*   *", " *** ", "*   *", "*   *", " *** "]
Nine = [" ****", "*   *", "*   *", " ****", "    *", "    *", "    *"]

Digits = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine]
try :
    digit = sys.argv[1]
    line = ""
    row = 0
    while row < len(One) :
        i = 0      # колличество цифр, которое мы ввели, по сути колличество столбцов
        while i < len(digit) :
            number = int(digit[i])
            onceRowNumb = Digits[number]
            onceCharNumb = onceRowNumb[row]
            print(onceRowNumb[row], end = '  ')
            i+=1
        row+=1
        print()    
except IndexError :
    print("Error!")
except ValueError as err:
    print(err, " - это не число, тупица!")

