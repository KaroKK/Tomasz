from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    projects = [
        {
            'title': 'Urban',
            'description': 'Kurzfilm',
            'category': 'short film',
            'year': '2024',
            'youtubeId': 'abc123XYZ'
        },
        {
            'title': 'Nachtlichter',
            'description': 'Musikvideo mit',
            'category': 'shorts',
            'year': '2024',
            'youtubeId': 'def456UVW'
        },
        {
            'title': 'Zwischen den Zeilen',
            'description': 'Dokumentarfilm',
            'category': 'interviews',
            'year': '2023',
            'youtubeId': 'ghi789RST'
        },
        {
            'title': 'Reflektionen',
            'description': 'Videoinstallation',
            'category': 'short film',
            'year': '2023',
            'youtubeId': 'jkl012MNO'
        }
    ]

    return render_template('index.html', projects=projects)


if __name__ == '__main__':
    app.run(debug=True)
