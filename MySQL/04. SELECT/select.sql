SELECT * # zamiast * można kokrentne dane
FROM employees
WHERE hourly_paid = 12.50; # z tabeli employees, w której hourly_paid = 12.50

SELECT *
FROM employees
WHERE hourly_paid IS NULL; # zamiast = NULL można napisać IS NULL
