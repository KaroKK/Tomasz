import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    projects = [
        {
            'title': 'Urban',
            'description': 'Kurzfilm',
            'category': 'Kurzfilm',
            'year': '2024'
        },
        {
            'title': 'Nachtlichter',
            'description': 'Musikvideo mit',
            'category': 'Musikvideo',
            'year': '2024'
        },
        {
            'title': 'Zwischen den Zeilen',
            'description': 'Dokumentarfilm',
            'category': 'Dokumentarfilm',
            'year': '2023'
        },
        {
            'title': 'Reflektionen',
            'description': 'Videoinstallation',
            'category': 'Installation',
            'year': '2023'
        }
    ]

    return render_template('index.html', projects=projects)


if __name__ == '__main__':
    app.run(debug=True)
