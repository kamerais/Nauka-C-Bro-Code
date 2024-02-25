SELECT * from employees;
SET AUTOCOMMIT = ON; # Normalnie jest na ON
COMMIT; # Jeżeli jest na OFF to trzeba manualnie robić commita
DELETE FROM employees;
ROLLBACK; # Jeżeli nie zrobi się COMMITa, a przypadkiem się coś usunie, można przywrócić do poprzedniego stanu.
