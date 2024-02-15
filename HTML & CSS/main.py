def temp_converter():
    should_restart = True

    while should_restart:
        conv_choice = input(
            "If you want to convert Celcius to Fahrenheit type 'cel'. If to Celcius type 'fahr': "
        ).lower()

        if conv_choice == "cel":
            try:
                conv_value = float(
                    input(
                        "Converting Celcius to Fahrenheit. Type the value to convert: "
                    )
                )
                t_fahr = (conv_value * 1.8) + 32
                print(t_fahr)
                should_restart = False
            except ValueError:
                print("invalid input. Try again!!!")

        elif conv_choice == "fahr":
            try:
                conv_value = float(
                    input(
                        "Converting Fahrenheit to Celsius. Type the value to convert: "
                    )
                )
                t_cel = (conv_value - 32) / 1.8
                print(t_cel)
                should_restart = False
            except ValueError:
                print("invalid input. Try again!!!")
        else:
            print("Incorrect input. Try again!!!")

        if not should_restart:
            again = input("Would you like to try again? Type 'yes' or 'no': ").lower()
            while not ((again == "yes") or (again == "no")):
                again = input(
                    "Would you like to try again? Type 'yes' or 'no': "
                ).lower()
            should_restart = True if again == "yes" else print("Goodbye")


# temp_converter()
def create_dictionary() -> dict:
    state = True
    dct = {}
    while state:
        string_input = input("Type what you wanna add to your dictionary: ")
        key = string_input
        value = len(string_input)
        dct.update({key: value})
        print(dct)

        again = input("Would you like to add another item?: ").lower()
        if again == "no":
            state = False
    return dct


result = create_dictionary()
for chars in result:
    for char in range(len(chars)):
        counter = char + 1
        print(f"{chars[char]} - {counter}")
