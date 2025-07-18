import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    projects = [
        {
            'title': 'They said she behaves very masculinely…',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'lK5X_jzQFVs',
            "thumbnail": "images/thumbnails/th1.jpg"
        },
        {
            'title': 'If men would not exist in the world, we would be safe!',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'zT01ze46FjA',
            "thumbnail": "images/thumbnails/th2.jpg"
        },
        {
            'title': 'OUT OF THE BOX (Official Short Film)',
            'description': '',
            'category': 'short-film',
            'year': '2024',
            'youtubeId': 'QY1wAsRBYmk',
            "thumbnail": "images/thumbnails/thbarbie.jpg"
        },
        {
            'title': 'York work, your existence, is incredibly valuable!',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'sjwr6QOgUPg',
            "thumbnail": "images/thumbnails/th3.jpg"
        },
        {
            'title': 'Women in Syria do not have it easy...',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'ncTqxcnMnCk',
            "thumbnail": "images/thumbnails/th4.jpg"
        },
        {
            'title': 'We need young, intelligent Women!',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'QuGZUn-W9zE',
            "thumbnail": "images/thumbnails/th5.jpg"
        }, {
            'title': 'There is no reason why women should be better at housework!',
            'description': '',
            'category': 'Interviews',
            'year': '2025',
            'youtubeId': 'jhGLWQgIH74',
            "thumbnail": "images/thumbnails/th6.jpg"
        },
        {
            'title': 'What story will you tell with your tie?',
            'description': '',
            'category': 'Shorts',
            'year': '2025',
            'youtubeId': 'YW4useoV3SE',
            "thumbnail": "images/thumbnails/sh1.jpg"
        },
        {
            'title': 'If men would not exist in the world, we would be safe!',
            'description': '',
            'category': 'Shorts',
            'year': '2025',
            'youtubeId': 'IctwEXYWI9A',
            "thumbnail": "images/thumbnails/sh2.jpg"
        },
        {
            'title': 'Women in Syria do not have it easy.',
            'description': '',
            'category': 'Shorts',
            'year': '2025',
            'youtubeId': 'oMYZKAREybI',
            "thumbnail": "images/thumbnails/sh3.jpg"
        },
        {
            'title': 'We need young, intelligent Women!',
            'description': '',
            'category': 'Shorts',
            'year': '2025',
            'youtubeId': 'u1HgGUSyW6g',
            "thumbnail": "images/thumbnails/sh4.jpg"
        }
    ]

    return render_template('index.html', projects=projects)


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))
