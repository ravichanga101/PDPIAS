<?php

require_once('settings_google.php');

$login_url = 'https://accounts.google.com/o/oauth2/v2/auth?scope=' . urlencode('https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email') . '&redirect_uri=' . urlencode(CLIENT_REDIRECT_URL) . '&response_type=code&client_id=' . CLIENT_ID . '&access_type=online';

?>
<html>
<head></head>

<body>
<div class="g-signin2" data-onsuccess="onSignIn"></div>	
	<a href='<?= $login_url ?>'>Login with Google</a>

</body>
</html>


