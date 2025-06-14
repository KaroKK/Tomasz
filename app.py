import os
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route('/')
def index():
    projects = [
        {
            'title': 'Urbane Geschichten',
            'description': 'Ein experimenteller Kurzfilm über das Leben in der modernen Stadt',
            'category': 'Kurzfilm',
            'year': '2024'
        },
        {
            'title': 'Nachtlichter',
            'description': 'Musikvideo mit atmosphärischen Nachtaufnahmen',
            'category': 'Musikvideo',
            'year': '2024'
        },
        {
            'title': 'Zwischen den Zeilen',
            'description': 'Dokumentarfilm über junge Künstler in Berlin',
            'category': 'Dokumentarfilm',
            'year': '2023'
        },
        {
            'title': 'Reflektionen',
            'description': 'Experimentelle Videoinstallation mit abstrakten Formen',
            'category': 'Installation',
            'year': '2023'
        }
    ]
    
    return render_template('index.html', projects=projects)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
