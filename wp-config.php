<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

error_reporting(0);
define('DISALLOW_FILE_EDIT', true);
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'polibolsas');

/** MySQL database username */
define('DB_USER', 'forge');

/** MySQL database password */
define('DB_PASSWORD', 'Q2b2TQEDvfeD0jiIyF6R');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!$W-:+^n|C_th|:c ?M[pu0*L+sDF8!dYk4)|2Wro^3Fj4>&f$Fpd#MyEN p1s]g');
define('SECURE_AUTH_KEY',  'X[S(jO~Oggex7XQ{sbe DI?~kY8lAto?XGDC?AVo?~{aD3:ri<Gix8E2$|Snq]c-');
define('LOGGED_IN_KEY',    '>iG,IB=aW:;}&i9/nI=EsnZ-DWI+%?#1m906)%J8st;1?@^XD09`n+:OKE?-9wz~');
define('NONCE_KEY',        'bZYS>;6 %Qv6,]GZZ [FUFzlm9esk7-i-&$Z<FKuP3]5<X%V*{H]5s??a;ekQLQI');
define('AUTH_SALT',        'w<A;43`m%#+>GJY-qbV_O(&dcfUqGOjWe|Z(&@2b<IVr]WYpk;@W-](r+>_w:$U;');
define('SECURE_AUTH_SALT', '2FZ^b~Unb_EZu)l4To3?@|GJE>@RK(p(8Y-EoSk3E##4^|+ch(VX|^A6TG:(]-F`');
define('LOGGED_IN_SALT',   '2Hj^W- z$$[+nm-G+l+UxF(@rt8TWWk$F)|M+orQa??xmMws>}`0-HHDY^!0{y_#');
define('NONCE_SALT',       'zl|KAUjL])tM30DUmIkba4-+q/?.S/Z`a[om{1B:<R=^q:59 iVSYgAr8-#@08vf');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
