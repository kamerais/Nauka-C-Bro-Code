SELECT * from employees;
UPDATE employees
SET hourly_paid = 10.25,
    hire_date = "2023-01-07"
WHERE employee_id = 6;

DELETE FROM employees
WHERE employee_id = 6; # usuwa pracownika o indeksie 6