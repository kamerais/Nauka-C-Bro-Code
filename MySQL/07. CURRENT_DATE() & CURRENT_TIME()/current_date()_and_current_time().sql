CREATE TABLE test(
    my_date DATE,
    my_time TIME,
    my_datetime DATETIME
);
SELECT * FROM test;
INSERT INTO test
VALUES(CURRENT_DATE(), CURRENT_TIME(), NOW()); # Tworzy wiersz z aktualną datą, czasie i oba
INSERT INTO test
VALUES(CURRENT_DATE() + 1, NULL, NULL); # jak dodam 1 to tak jakbym zrobił jutrzejszą datę
INSERT INTO test
VALUES(CURRENT_DATE() - 1, NULL, NULL); # jak odejmę 1 to tak jakbym zrobił wczorajszą datę
DROP TABLE test;
