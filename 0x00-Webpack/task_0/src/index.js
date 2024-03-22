import $ from 'jquery'

const paragraphs = [
  'Holberton Dashboard',
  'Dashboard data for the students',
  'Copyright - Holberton School'
]

for (let i = 0; i < paragraphs.length; i++) {
  $('body').append(`<p>${paragraphs[i]}</p>`)
}
