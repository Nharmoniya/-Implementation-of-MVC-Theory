import './app3.css'
import $ from 'jquery'

const $Square = $("#app3 .square");

$Square.on('click',e=>{
   $Square.toggleClass('active')
})