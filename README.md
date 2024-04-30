<!-- implementation project UI with ejs template engine (MVC)-->
<!-- use mongoose for ORM -->
<!-- database connection: Mongodb atlas cluster (mongodb compass)-->
Running project with docker,docker file placed in the root project
<!-- docker run -p 3000:3000 -d nodejslibrary:01  -->
(problem: need to add someone ip address that want connect to my local cluster for running the poject but
To resolve this problem, (configure IP address whitelisting in my MongoDB Atlas cluster), i will use docker compose agian!)

<!-- HOME page --> 
<!-- - Retrieve a list of all books -->
http://localhost:3000/
http://localhost:3000/books

<!-- Add a new book to the library -->
http://localhost:3000/book/add-book

<!-- Retrieve a book by its ID -->
<!-- click on the button Details for see the details of one book with help of findById method -->
http://localhost:3000/book


<!-- list of all the books in the library and -->
<!-- Edit for book data and delete has been implement with buttons at this page -->
http://localhost:3000/book/books


<!-- list of all Authors -->
<!-- Edit for author data and delete has been implement with buttons at this page  -->
http://localhost:3000/author/authors

<!-- Add author -->
http://localhost:3000/author/add-author