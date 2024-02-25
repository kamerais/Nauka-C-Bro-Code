CREATE TABLE employees(
    employee_id INT, # liczba całkowita
    first_name VARCHAR(50), # ilość znaków to 50
    last_name VARCHAR(50),
    hourly_paid DECIMAL(5, 2), # 5 cyfr z dokładnością do 2 miejsc po przecinku
    hire_date DATE # Typ danych jako Data
);
SELECT * FROM employees; # wybierz wszystko z tablicy employees
RENAME TABLE employees TO workers; # zmień nazwę z employees na workers
RENAME TABLE workers TO employees; # zmień nazwę z workers na employees
DROP TABLE employees; # usuń tabelę employees
ALTER TABLE employees
ADD phone_number VARCHAR(15); # dodaj kolumnę phone_number o długości ilości znaków 15
ALTER TABLE employees
RENAME COLUMN phone_number TO email; # zmień nazwę kolumny z phone_number na email
ALTER Table employees
MODIFY COLUMN email VARCHAR(100); # zmodyfikuj kolumnę email, aby przyjmowała długość ilości znaków 100
ALTER TABLE employees
MODIFY email VARCHAR(100)
AFTER last_name; # Ustaw kolumnę email po last_name.
ALTER TABLE employees
MODIFY email VARCHAR(100)
FIRST; # Ustaw kolumnę email na pierwszej pozycji
ALTER TABLE employees
DROP COLUMN email; # usuń kolumnę email z tabeli employees
