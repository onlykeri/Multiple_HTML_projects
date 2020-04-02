// JavaScript Document// JavaScript Document
function changehead() {
  i = document.form1.heading.selectedIndex;
  headcolor = document.form1.heading.options[i].value;
  document.getElementById("head1").style.color = headcolor;
}
function changebody() {
  i = document.form1.body.selectedIndex;
  doccolor = document.form1.body.options[i].value;
  document.getElementById("p1").style.color = doccolor;
}
