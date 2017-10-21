# Logs Analysis

This is the third project of the [Full Stack Web Developer Nanodegree](https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/?). 

The objective of the Logs Analysis Project is to create a reporting tool that prints out reports (in plain text) based on the data in the database. This reporting tool is a Python program using the psycopg2 module to connect to the database.


## How do I run this?

### 1. Setup: Configure VM & Database

**Step 1:** Download and install [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org). We’ll need these tools to setup and manage the Virtual Machine (VM). 

I used version 1.9.2 of Vagrant and version 5.1 of VirtualBox (mentioned because I faced issues on newer and older versions). 

**Step 2:** Download the VM configuration from the [downloads folder](downloads/) or clone from this [github repo](https://github.com/udacity/fullstack-nanodegree-vm). Note the path where you downloaded it as it will be used in other steps. 

The configuration file  specifies the arrangement of resources (processors, memory, disks, network adapters, etc) assigned to a virtual machine. 


**Step 3:**  Download the database dump from the [downloads folder](downloads/) or [this link](https://d17h27t6h515a5.cloudfront.net/topher/2016/August/57b5f748_newsdata/newsdata.zip).

Then, copy the database dump `newsdata.sql` to the `vagrant/` (one of the folders you downloaded in step 2).

**Step 4:**  Download the python programs (`reportingtool.py` and `dbmanager.py`) from the current folder. Then, copy them to the `vagrant/` (one of the folders you downloaded in step 2).

**Step 5:** Open the terminal. Then, run the following commands:

```
# Install & Configure VM
cd /path/to/vagrant
vagrant up

# Log into machine
vagrant ssh

# Populate database using dump in shared folder 
cd /vagrant 
psql -d news -f newsdata.sql

# Log out of machine
# <Ctrl + D>

# Destroy machine once done
vagrant destroy

```

Note: If this is the first time you're running [Vagrant Up](https://www.vagrantup.com/docs/cli/up.html) command, you need to wait a while after running the command. 


### 2. Run the Reporting Tool

Open the terminal. Then, run the following commands:

```
# Launch & Login to machine
cd /path/to/vagrant
vagrant up
vagrant ssh

# Open shared folder
cd /vagrant 

# Run the program
python reportingtool.py
```

### Extra: Using the PSQL CLI

Open the terminal and use the following commands to familiarise with the database:

```
# Log into machine
cd /path/to/vagrant
vagrant up
vagrant ssh

# Open PostgreSQL Interactive Terminal
psql

# Commands to navigate and familiarise
\list # list all databases
\connect news # connect to the 'news' database
\dt # list all tables of the connected database
\d articles # show info about the table 'articles'
<CTRL+D> # terminate command and exit shell
```

## Project Rubric

|SECTION|SUB-SECTION|CRITERIA|SPECS. MET?|
|---|---|---|---|
| Functionality | Functionality | Running the code displays the correct answers to each of the questions in the lab description.|Yes|
| | Compatibility: Database | The code works with the (unchanged) database schema from the lab description. <br>It is OK to add views to the database, but don't modify or rename the existing tables. |Yes|
| | Compatibility: Language | The code may be written in Python 2 or Python 3 but must be consistent. It should start with a correct [shebang line](https://en.wikipedia.org/wiki/Shebang_%28Unix%29) to indicate the Python version. |Yes|
| | Well-formatted text output | The code presents its output in clearly formatted plain text. Imagine that you are looking at this text in an email message, not on a web page. |Yes|
| | Database queries | The code connects to and queries an SQL database. It does not use answers hardcoded into the application code. |Yes|
| Code quality | No errors | The project code runs without any error messages or warnings from the language interpreter. |Yes|
| | Application code style | The code conforms to the PEP8 style recommendations.<br>You can install the `pep8` tool to test this, with `pip install pep8` or `pip3 install pep8` (Python 3).<br><br>In order for this requirement to pass, running the pep8 tool on your code should produce zero warnings. | Yes|
| | SQL code quality | When the application fetches data from multiple tables, it uses a single query with a join, rather than multiple queries. Each of the questions must be answered using one SQL query. |Yes|
| README file | README file describes work | The README file includes instructions for how to run the program, as well as a description of the program's design.<br><br>Imagine a person who knows Python and SQL well, but has not done this project. If that person read the README would they know how to run this code? |Yes|
| | README file includes view definitions, if any | If the code relies on views created in the database, the README file includes the create view statements for these views.<br>(If the code does not depend on views, ignore this requirement.) |Views not used|

## Questions to answer

The reporting tool will answer the following questions

**(1) What are the most popular three articles of all time? Which articles have been accessed the most? Present this information as a sorted list with the most popular article at the top.**

Example:

- "Princess Shellfish Marries Prince Handsome" — 1201 views
- "Baltimore Ravens Defeat Rhode Island Shoggoths" — 915 views
- "Political Scandal Ends In Political Scandal" — 553 views

**(2) Who are the most popular article authors of all time? That is, when you sum up all of the articles each author has written, which authors get the most page views? Present this as a sorted list with the most popular author at the top.***

Example:

- Ursula La Multa — 2304 views
- Rudolf von Treppenwitz — 1985 views
- Markoff Chaney — 1723 views
- Anonymous Contributor — 1023 views



**(3) On which days did more than 1% of requests lead to errors? The log table includes a column status that indicates the HTTP status code that the news site sent to the user's browser.**

Example:

- July 29, 2016 — 2.5% errors


## References

- [String Functions & Operators](https://www.postgresql.org/docs/9.5/static/functions-string.html)
- [Data Type Formatting](https://www.postgresql.org/docs/8.3/static/functions-formatting.html)
- [Casting](https://www.postgresql.org/docs/10/static/sql-createcast.html)
- [Aggregate Functions](https://www.postgresql.org/docs/9.5/static/functions-aggregate.html)
- [Subqueries](https://www.postgresql.org/docs/9.4/static/functions-subquery.html)
- [PSQL CLI Commands](https://www.postgresql.org/docs/9.2/static/app-psql.html)

