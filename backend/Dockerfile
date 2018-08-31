FROM python:3.6

WORKDIR /backend

ADD ./requirements.txt .
RUN pip install -r ./requirements.txt

CMD python manage.py migrate && python migrate.py makemigrations && python runserver 0.0.0.0:8000
