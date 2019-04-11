UPDATE student
SET hometown = $1
WHERE id = $2;

SELECT * FROM student ORDER BY id ASC;