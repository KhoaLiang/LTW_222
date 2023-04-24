<?php
require_once(__DIR__ . '\\..\\model\\customer\\Customer_Game_Model.php');

class CustomerController
{
      private $game_model;

      public function __construct()
      {
            $this->game_model = new CustomerGameModel();
      }

      public function getBestSeller()
      {
            $arr = $this->game_model->getBestSeller();
            echo json_encode($arr);
      }

      public function getGameList(){
            $arr = $this->game_model->getGameList();
            echo json_encode($arr);
      }
      public function getWishlist(){
            $id = $_POST['id'];
            $arr = $this->game_model->getWishlist($id);
            echo json_encode($arr);
      }
      public function getCart(){
            $id = $_POST['id'];
            $arr = $this->game_model->getCart($id);
            echo json_encode($arr);
      }
      public function findGame(){
            $data = $_POST['data'];
            $arr = $this->game_model->find($data);
            echo json_encode($arr);
      }
}
