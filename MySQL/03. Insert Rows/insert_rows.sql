SELECT * FROM employees;
INSERT INTO employees
VALUES(1, "Eugene", "Krabs", 25.50, "2024-02-25"), # po kolei zgodnie z kolumną i typem danych ustalam wartości
      (2, "Squidward", "Tentacles", 15.00, "2023-01-02"),
      (3, "Spongebob", "Squarepants", 12.50, "2023-02-23"),
      (4, "Patrick", "Star", 12.50, "2023-02-05"),
      (5, "Sandy", "Cheeks", 17.25, "2023-01-26");
INSERT INTO employees(employee_id, first_name, last_name) # wybieram konkretne kolumny, które mają być uzupełnione przez wiersze
VALUES(6, "Sheldon", "Plankton");