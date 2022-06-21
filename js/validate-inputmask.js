new JustValidate('.do__form', {
  rules: {
    email: {
      required: true,
      minLength: 3,
    }
  },
  messages: {
    email : {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат'
    }
  },
  colorWrong: '#F06666',
});

new JustValidate('.contacts__form', {
  rules: {
    email: {
      required: true,
      minLength: 3
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
      strength: {
        custom:'[a-zA-zа-яА-я]+'
      }
    },
  },
  messages: {
    email : {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат'
    },
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      maxLength: 'Недопустимый формат',
      strength: 'Недопустимый формат'
    },
  },
  colorWrong: '#F06666',
});
