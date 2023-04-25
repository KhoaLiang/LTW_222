<?php
class CustomerGameModel
{
      private $db;

      public function __construct()
      {
            $host = 'localhost';
            $user = 'owner';
            $password = 'owner123';
            $database = 'game_store';
            $port = '3306';

            $this->db = new mysqli($host, $user, $password, $database, $port);
            if ($this->db->connect_error) {
                  die('Connection failed: ' . $this->db->connect_error);
            }
      }

      public function getBestSeller()
      {
            $sql = "SELECT id,name,picture_1, price,count(*) as total_sale from game join activation_code on game.id=activation_code.game_id where status=\"used\"  group by name order by total_sale desc,name limit 5";
            $result = $this->db->query($sql);
            $arr = [];
            if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                        $row['picture_1'] = unpack('c*', $row['picture_1']);
                        $arr[] = $row;
                  }
            }
            return $arr;
      }
      
      public function getGameList()
      {
            $sql = "select name, id, discount, ratings, picture_1 from game";
            $result = $this->db->query($sql);

            $arr = [];
            if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                        $arr[] = $row;
                  }
            }
            return $arr;
      }

      public function getWishlist($id) {
            $sql = "select name, price, discount, picture_1 from game join wishlist on game_id = id where customer_id = '%$id%'";
            $result = $this->db->query($sql);
            $arr = [];
            if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                        $row['picture_1'] = unpack('c*', $row['picture_1']);
                        $arr[] = $row;
                  }
            }
            return $arr;
      }

      public function getCart($id){
        $sql = "select name, price, discount, picture_1, amount from game join shopping_cart on game_id = id where customer_id = '%$id%'";
            $result = $this->db->query($sql);

            $arr = [];
            if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                        $row['picture_1'] = unpack('c*', $row['picture_1']);
                        $arr[] = $row;
                  }
            }
            return $arr;
      }

      public function findGame($data)
      {
            $sql = "SELECT name,id,price,discount,ratings, picture_1 from game where name like '%$data%'";
            $result = $this->db->query($sql);
            $arr = [];
            if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {
                        $row['picture_1'] = unpack('c*', $row['picture_1']);
                        $arr[] = $row;
                  }
            }
            return $arr;
      }

      public function __destruct()
      {
            $this->db->close();
      }
}
