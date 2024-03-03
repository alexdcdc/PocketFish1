from flask import Flask, request, redirect, url_for, jsonify
import base64
""" ROUTES """

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Chess ID. usage: /upload'

ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'JPG', 'JPEG'])

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        imageString = request.json["imageString"]
        print("received request!!" + request.json["imageString"][:10])
        with open("image.jpg", "wb") as fh:
            fh.write(base64.b64decode(imageString))
        
        return {"hotel?": "trivago"}
    return '''
    <!doctype html>
    <title>Chess ID</title>
    <h1>Upload board picture</h1>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    '''

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)