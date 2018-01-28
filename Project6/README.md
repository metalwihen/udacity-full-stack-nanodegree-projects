# Linux Server Configuration

This is the sixth project of the [Full Stack Web Developer Nanodegree](https://in.udacity.com/course/full-stack-web-developer-nanodegree--nd004/?). 

The objective is to turn a brand-new, bare bones, Linux server into the secure and efficient web application host your applications need.


## Project Rubric

|SECTION||CRITERIA|SPECS. MET?|
|---|---|---|---|
| User Management | Can you log into the server as the user `grader` using the submitted key? | The SSH key submitted with the project can be used to log in as grader on the server. |Yes|
| | Is remote login of the `root` user disabled? | You cannot log in as root remotely. |Yes|
| | Is the grader user given `sudo` access? | The `grader` user can run commands using `sudo` to inspect files that are readable only by root.|Yes|
| Security | Is the firewall configured to only allow for `SSH`, `HTTP`, and` NTP`? | Only allow connections for `SSH` (port 2200), `HTTP` (port 80), and `NTP` (port 123). |Yes|
| | Are users required to authenticate using `RSA` keys? |Key-based `SSH` authentication is enforced.|Yes|
| | Are the applications up-to-date? | All system packages have been updated to most recent versions. |Yes|
| | Is `SSH` hosted on non-default port? | SSH is hosted on non-default port. |Yes|
| Application Functionality | Is there a web server running on port 80? |The web server responds on port 80.|Yes|
| | Has the database server been configured to properly serve data? | Database server has been configured to serve data (PostgreSQL is recommended).|Yes|
| | Has the web server been configured to serve the Item Catalog application? | Web server has been configured to serve the Item Catalog application as a WSGI app.|Yes|
| Documentation | Is a README file included in the GitHub repo containing all specified information? |A README file is included in the GitHub repo containing the following information: IP address, URL, summary of software installed, summary of configurations made, and a list of third-party resources used to complete this project.|Yes|
