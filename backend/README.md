# Set up backend

Note: make sure you are in backend folder

1. get a virtual environement-
   pip install virtualenv
   virtualenv venv
   venv\Scripts\activate

2. install requirements-
   pip install -r requirements.txt

3. run the server-
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser (put some username, email and password)
   python manage.py runserver
