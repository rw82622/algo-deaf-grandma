def deaf_grandma():
    count = 0
    print('HEY KID!')
    while count < 2:
        userInput = input("Enter message\n")
        capital = userInput.upper()
        if userInput == "":
            print('WHAT?!')
        elif capital != userInput:
            print('SPEAK UP, KID')
        elif userInput == 'GOODBYE!':
            count += 1
            if count < 2:
                print('LEAVING SO SOON')
        elif capital == userInput:
            print('NO, NOT SINCE 1946!')
    print('LATER, SKATER!')


deaf_grandma()
