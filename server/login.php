
  <?php
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Allow-Headers: *");
      header('Access-Control-Allow-Methods:  POST, GET');

      $servername = "localhost";
      $username = "owner";
      $password = "owner123";
      $database = "game_store";
      $port = "3306";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $database, $port);

      // Check connection
      if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
      }
      $sql = "SELECT username,userpassword from customer";
      $result = $conn->query($sql);

      $success = false;
      if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                  if ($row['username'] == $_POST['username'] && $row['userpassword'] == $_POST['password'])
                        $success = true;
            }
      }
      $success = (int)$success;
      echo $success;
      $conn->close();
      ?>