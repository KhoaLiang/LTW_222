      <?php
      // include required files
      require_once('router.php');
      require_once('controller/Admin_Controller.php');
      require_once('controller/Customer_Controller.php');
      require_once('cors.php');

      // instantiate router
      $router = new Router();

      // define routes
      // customer routes
      $router->get("/getBestSeller", "CustomerController@getBestSeller");
      $router->post("/getAllGames", "CustomerController@getAllGames");
      $router->post("/findGame","CustomerController@findGame");
      $router->post("/login", "CustomerController@login");
      $router->post("/recovery", "CustomerController@recovery");
      $router->post("/new_password", "CustomerController@newPassword");
      $router->post("/sign_up", "CustomerController@signUp");
      // admin routes
      $router->get("/admin/customer/getList", "AdminController@getCustomerList");
      $router->get("/admin/game/list", "AdminController@getGameList");
      $router->get("/admin/game/categories", "AdminController@getCategories");
      $router->get("/admin/getBestSeller", "AdminController@getBestSeller");
      $router->post("/admin/customer/find", "AdminController@findCustomer");
      $router->post("/admin/customer/delete", "AdminController@deleteCustomer");
      $router->post("/admin/customer/detail", "AdminController@customerDetail");
      $router->post("/admin/customer/detail/history", "AdminController@customerHistory");
      $router->post("/admin/customer/detail/edit", "AdminController@editCustomer");
      $router->post("/admin/game/delete", "AdminController@deleteGame");
      $router->post("/admin/game/find", "AdminController@findGame");
      $router->post("/admin/game/create", "AdminController@createGame");
      $router->post("/admin/game/addCode", "AdminController@addCode");
      $router->post("/admin/game/addTag", "AdminController@addTag");
      $router->post("/admin/game/update/info", "AdminController@updateGetGameDetail");
      $router->post("/admin/game/update/category", "AdminController@updateGetGameCategory");
      $router->post("/admin/game/update", "AdminController@updateGame");
      $router->post("/admin/game/detail", "AdminController@getGameDetail");
      $router->post("/admin/login", "AdminController@login");
      $router->post("/admin/recovery", "AdminController@recovery");
      $router->post("/admin/new_password", "AdminController@newPassword");
      // run router
      $router->run();
      ?>
