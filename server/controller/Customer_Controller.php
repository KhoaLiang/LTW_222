<?php
require_once(__DIR__ . '\\..\\model\\customer\\Customer_Game_Model.php');
require_once(__DIR__ . '\\..\\model\\customer\\Customer_Model.php');
require_once(__DIR__ . '\\..\\model\\customer\\Customer_Session.php');
class CustomerController
{
      private $game_model;
      private $customer_model;

      public function __construct()
      {
            $this->game_model = new CustomerGameModel();
            $this->customer_model = new CustomerSelfModel();
      }

      public function getBestSeller()
      {
            $arr = $this->game_model->getBestSeller();
            echo json_encode($arr);
      }

      public function login()
      {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $arr = $this->customer_model->login($username, $password);
            if ($arr) {
                  startSession($arr['id']);
            } else
                  echo json_encode(false);
      }

      public function logout()
      {
            foreach ($_COOKIE as $name => $value) {
                  if ($name === "PHPSESSID") {
                        echo json_encode(kill($value));
                        break;
                  }
            }
      }
      
      public function getGameList()
      {
            $arr = $this->game_model->getGameList();
            echo json_encode($arr);
      }

      public function getWishlist()
      {
            $id = $_POST['id'];
            $arr = $this->game_model->getWishlist($id);
            echo json_encode($arr);
      }
      public function getCart()
      {
            $id = $_POST['id'];
            $arr = $this->game_model->getCart($id);
            echo json_encode($arr);
      }
      public function findGame()
      {
            $data = $_POST['data'];
            $arr = $this->game_model->findGame($data);
            echo json_encode($arr);
      }

      public function myself()
      {
            echo json_encode($this->customer_model->myself());
      }

      public function myHistory()
      {
            echo json_encode($this->customer_model->myHistory());
      }

      public function updateMySelf()
      {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $password = $_POST['password'];
            $result = $this->customer_model->updateMySelf($name, $email, $phone, $password);
            echo json_encode(array("message" => $result ? "success" : "failed"));
      }

      public function addWishlist()
      {
            $game_id = $_POST['game_id'];
            $result = $this->game_model->addWishlist($game_id);
            echo json_encode(array("message" => $result ? "success" : "failed"));
      }

      public function removeWishlis()
      {
            $game_id = $_POST['game_id'];
            $result = $this->game_model->removeWishlist($game_id);
            echo json_encode(array("message" => $result ? "success" : "failed"));
      }

      public function gameStatus()
      {
            $id = $_POST['id'];
            $arr = $this->game_model->gameStatus($id);
            echo json_encode($arr ? true : false);
      }

      public function addCart()
      {
            $game_id = $_POST['game_id'];
            $result = $this->game_model->addCart($game_id);
            echo json_encode(array("message" => $result ? "success" : "failed"));
      }

      public function removeCart()
      {
            $game_id = $_POST['game_id'];
            $result = $this->game_model->removeCart($game_id);
            echo json_encode(array("message" => $result ? "success" : "failed"));
      }
}
