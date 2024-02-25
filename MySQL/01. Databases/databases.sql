CREATE DATABASE myDB; # tworzy bazę danych
USE myDB; # ustawia bazę danych jako default-ową
DROP DATABASE myDB; # usuwa bazę danych
ALTER DATABASE myDB READ ONLY = 0; # ustawia bazę danych, aby tylko z niej czytać. Nie można wtedy jej usunąć. 1 oznacza tak, 0 nie