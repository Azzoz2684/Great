from flask import Flask, request, jsonify

app = Flask(__name__)

# قائمة المستخدمين والمشرفين
users = []
supervisors = []

# دالة لتسجيل المستخدمين
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    account_type = data.get('account_type')

    if account_type == 'student':
        users.append({
            'name': data.get('name'),
            'phone': data.get('phone'),
            'email': data.get('email'),
            'selection': data.get('selection')  # حفظ الخيار المحدد من قبل المستخدم
        })
    elif account_type == 'supervisor':
        supervisors.append({
            'email': data.get('email'),
            'password': data.get('password'),
            'selection': data.get('selection')  # حفظ الخيار المحدد من قبل المشرف
        })
    return jsonify({'message': 'تم إنشاء الحساب بنجاح!'})

# دالة لتسجيل الدخول
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    account_type = data.get('account_type')
    email = data.get('email')

    if account_type == 'student':
        for user in users:
            if user['email'] == email:
                return jsonify({'message': 'تم تسجيل الدخول كطالب!', 'selection': user['selection']})
    elif account_type == 'supervisor':
        for supervisor in supervisors:
            if supervisor['email'] == email and supervisor['password'] == data.get('password'):
                return jsonify({'message': 'تم تسجيل الدخول كمشرف!', 'selection': supervisor['selection']})
    return jsonify({'message': 'بيانات غير صحيحة!'}), 401

# دالة لتحميل الملفات من قبل المشرفين
@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    # يمكنك استخدام الكود هنا لحفظ الملف في السيرفر
    return jsonify({'message': 'تم رفع الملف بنجاح!'})

if __name__ == '__main__':
    app.run(debug=True)