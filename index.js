const  axios = require('axios');
axios.get('http://axios-http.com/docs/intro').then((truc) => {
    console.log('axios request length: ', truc.data.length);
})

// ValidorJS
const validator = require('validator');
console.log('validation: ',
    validator.isEmail('test'),
    validator.isEmail('test@test.fr'),
    validator.isStrongPassword('test')
)

// lodash
const _ = require('loadash');
console.log('chunk: ', _.chunk(['a','b','c','d'], 2));
console.log('chunk', _.sum([0, 1, 3]));