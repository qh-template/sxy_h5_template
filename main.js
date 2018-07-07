// import 'babel-polyfill'; // 为了使用es6的新api 如promise等
import './js/flexible'
import './css/index.styl'
$('.page1').click(function() {
  $(this).hide()
  $('.page2').show()
})