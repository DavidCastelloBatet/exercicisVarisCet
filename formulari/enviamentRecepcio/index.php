<!DOCTYPE>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Enviament i recepció de dades per GET i POST</title>
</head>

<body>
    <h1>Enviament i recepció de dades per GET i POST</h1>
    
    <h2>Formulari per a fer l'enviament</h2>
    <h3>per GET</h3>
    <form name="ProvesGET" method="get" action="index.php">
        <label>Valor a passar: <input type="text" name="valorGet" id="valorGet"></label>
        <label>Valor injectat:<input type="text" name="valorInjectat" value="<?php echo $_GET['valorGet']; ?>" /></label>
        <input type="hidden" name="valorAmagat" value="Valor amagat" />
        <input type="submit" name="button" id="button" value="Enviar">
    </form>
    <p>&nbsp;</p>
    
    <h3>per POST </h3>
    <form name="ProvesPOST" method="post" action="index.php">
        <label>Valor a passar: <input type="text" name="valorPost" id="valorPost"></label>
        <label>Valor injectat:<input type="text" name="valorInjectat" value="<?php echo $_POST['valorPost']; ?>" /></label>
        <input type="hidden" name="valorAmagat" value="Valor amagat" />
        <input type="submit" name="button" id="button" value="Enviar">
    </form>
    
    <p>&nbsp;</p>
    
    <hr/>
    
    <p>&nbsp;</p>
    <h2>Mètode de transmisió</h2>
    <?php
        echo $_SERVER['REQUEST_METHOD'];
        echo ("<br/>");
    ?>
    
    <p>&nbsp;</p>
    <hr/>
    <p>&nbsp;</p>
    
    <h2>Variables recepcionades</h2>
    
    <ul>
      <li>GET
        <ul>
            <li>$_GET['valorGet']</li>
            <?php
                echo $_GET['valorGet']; // Recepció d'una variable concreta
            ?>
            <br/>
              <li>$_REQUEST['valorGet']</li>
            <?php
                echo $_REQUEST['valorGet']; // Recepció d'una variable concreta
            ?>
            <br/>
             <li>print_r($_GET)</li>
            <?php
                print_r($_GET); // Mostra l'array de GET
            ?>
            <br/>
             <li>var_dump($_GET)</li>
            <?php
                var_dump($_GET); // Mostra l'array de GET
            ?>
            <br/>
        </ul>
      </li>
    </ul>
    <p>&nbsp;</p>
    <ul>
      <li>POST
        <ul>
          <li>$_POST['valorPost'] </li>
            <?php
                echo $_POST['valorPost'];
            ?>
            <br/>
          <li>$_REQUEST['valorPost']</li>
            <?php
                echo $_REQUEST['valorPost'];
            ?>
            <br/>
          <li>print_r($_POST)</li>
            <?php
                print_r($_POST); // Mostra l'array de POST
            ?>
            <br/>
          <li>var_dump($_POST)</li>
            <?php
                var_dump($_POST); // Mostra l'array de POST
            ?>
        </ul>
      </li>
    </ul>
    
    <p>&nbsp;</p>
    <?php
         unset($_REQUEST);// Buidant l'array REQUEST
         unset($_GET); // Buidant l'array GET
         unset($_POST);// Buidant l'array POST
    ?>

</body>
</html>