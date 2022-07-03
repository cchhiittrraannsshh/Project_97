
function addUser(){
  player_1=document.getElementById("player1_name_input").Value;
  player_2=document.getElementById("player2_name_input").Value;

  localStorage.setItem("player 1", player_1);
  localStorage.setItem("player 2", player_2);

  window.location=("game_login.html");
}