import User from './user.js';
import Admin from './admin.js';

const sergei = new User();
sergei.firstName = 'Sergei';
sergei.lastName = 'Ragozin';

console.log(sergei.toString());
console.log(sergei.firstName);

const boris = new User('Boris', 'Ivanov');

console.log(boris.toString());

const permissions = [
    'WRITE_DB',
    'WRITE_USER',
    'EDIT_RIGHTS'
]
const admin = new Admin('FirstName', 'LastName', permissions, '1@1.ru');
console.log(admin.toString());

console.log(User.isUser(boris));
console.log(Admin.isAdmin(boris));