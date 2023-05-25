<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hcshop' );

/** MySQL database username */
define( 'DB_USER', 'hcshop' );

/** MySQL database password */
define( 'DB_PASSWORD', '123456' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'uo9HzK&0iz8|xe8#& X%J] :)`Dd +J3^_9QxyZ8N s1>Jt9*2tu4#{*i)CbW{~1' );
define( 'SECURE_AUTH_KEY',  '469U0Y47E?4m!PxyHn]fZ)5(@M~Ek1*g2u=V{ h1$d&(gVhE,L(V*GSeigHThl8.' );
define( 'LOGGED_IN_KEY',    '~MQ/eN^*nc~QKCTd`d[6uNb}I./$I^-P:z#O&xau&C$^Pl}(+BZnwl&z@Yl V`@-' );
define( 'NONCE_KEY',        ' k[KjGm54v[W^g4bH2)#CLhhIfXz2g>w$O)kbpRGh@h/-|$(sZJ6$Z<2^aR<IVld' );
define( 'AUTH_SALT',        'wBg#93?=_=P44/%Wqn<VJ`^aV<7IJ=6:E_Rd<~f(xFTJGSR[C9nXvhVAHHdwR C!' );
define( 'SECURE_AUTH_SALT', '9vxih/3lT&ACOE[Z(f+x31Sl[!2j>k1m*=w#z#>pOAgb&) xy^HvTdnpc+Edn@2L' );
define( 'LOGGED_IN_SALT',   '|Af$/AATe4FjZf2x<#BXN${tfia<>UJCAozQz>Ngt@vE:tNxK*Jh.*lF.bm$F)}?' );
define( 'NONCE_SALT',       'tLG6O7#uI[wI%rrqx6!yb!|%+p&TKtq?{]O,O;.?oKm`_gR*Jo`Cxo05Xe$32J{/' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
