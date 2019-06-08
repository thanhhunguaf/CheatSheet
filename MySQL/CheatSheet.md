## MySQL Cheat sheet

###### Check table on DB locking:
``SHOW OPEN TABLES WHERE `Table` LIKE '%%' AND `Database` LIKE 'casino' AND In_use > 0``

###### Show list proc: 
``SHOW PROCESSLIST``

###### Kill proc with id:
``KILL 34317``