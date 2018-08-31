FROM python:3.6

WORKDIR /backend

ADD ./requirements.txt .
RUN pip install -r ./requirements.txt

CMD sleep 5; python manage.py migrate && python manage.py makemigrations && python manage.py collectstatic --noinput && python ./manage.py runserver 0.0.0.0:8000
