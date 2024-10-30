<?php
/**
 * Plugin Name: Coming Soon Countdown
 * Version: 2.2
 * Description: Coming Soon Countdown Plugin is developed for manage coming soon pages. It has touch slider effect with tow section and multiple features 
 * Author: wpdiscover
 * Author URI: https://blogwpthemes.com/
 * Plugin URI: https://blogwpthemes.com/
 */
 
if ( ! defined( 'ABSPATH' ) ) exit;
define("coming-soon-countdown","coming-soon-countdown" );
define("NICK_LS_PLUGIN_URL", plugin_dir_url(__FILE__));

//Get Ready Plugin Translation
add_action('plugins_loaded', 'nick_ls_language_translation');
function nick_ls_language_translation() {
	load_plugin_textdomain( "coming-soon-countdown", FALSE, dirname( plugin_basename(__FILE__)).'/language/' );
}

###	Default Data  ###
register_activation_hook( __FILE__, 'nick_ls_dd' );
function nick_ls_dd()
{
	include('functions/default-data.php');
}

// Coming Soon Countdown Menu Page 
add_action('admin_menu','nick_launching_soon_menu');

function nick_launching_soon_menu()
{
    //plugin menu name for  launching soon_menu plugin
    $menu = add_menu_page('Coming Soon Countdown', 'Coming Soon Countdown','administrator', 'launching_soon_wp','nick_launching_soon_content','dashicons-hammer');

    //add hook to add styles and scripts for Coming Soon Countdown admin page
    add_action( 'admin_print_styles-' . $menu, 'nick_site_offline_wp_script' );
}
require_once('functions/script.php');

function nick_launching_soon_content()
{  
	require_once('backend/content.php');
}

function nick_ls_launch()
{
	$nick_ls_dashboard = unserialize(get_option('nick_ls_dashboard'));
	$nick_ls_status = $nick_ls_dashboard['nick_ls_status'];
	
	if($nick_ls_status=="1")
	{	
		// Exit if a custom login page
		if(preg_match("/login|admin|dashboard|account/i",$_SERVER['REQUEST_URI']) > 0 ){
			return false;
		}
		
		// Check if user is logged in.
		if (!is_user_logged_in())
		{
			$file = plugin_dir_path( __FILE__ )."output/index.php";
			include($file);
			exit();
		}
		else{
			
			//get logined in user role
			$wp_get_current_user =  wp_get_current_user();
			$LoggedInUserID = $wp_get_current_user->ID;
			$UserData = get_userdata( $LoggedInUserID );
			//if user role not 'administrator' then redirect page 
			if($UserData->roles[0] != "administrator")
			{
				$file = plugin_dir_path( __FILE__ )."output/index.php";
				include($file);
				exit();
			}
			
		}
	}
	
		
}
add_action( 'template_redirect', 'nick_ls_launch' );

//Live Preview code
if (  (isset($_GET['nick_cs_preview']) && $_GET['nick_cs_preview'] == 'true') )
{ 	
	
	$file = plugin_dir_path( __FILE__ )."output/index.php";
	include($file);
	exit();
}

add_action('admin_bar_menu', 'nick_ls_admin_bar_button', 1000);
function nick_ls_admin_bar_button()
{
	
	global $wp_admin_bar;
	$nick_ls_dashboard = unserialize(get_option('nick_ls_dashboard'));
	$nick_ls_status = $nick_ls_dashboard['nick_ls_status'];
	if($nick_ls_status=='0') return;
	$msg = __('Coming Soon Countdown Mode Active','');
	
	// Add Parent Menu
	$argsParent=array(
		'id' => 'myCustomMenu',
		'title' => $msg,
		'parent' => 'top-secondary',
		'href' => '?page=launching_soon_wp',
		'meta'   => array( 'class' => 'nick_ls_admin_bar_button_ls' ),
	);
	$wp_admin_bar->add_menu($argsParent);
	?>
	<style>
		.nick_ls_admin_bar_button_ls a{
			background: #916194 !important;
			color: #fff !important;
		}
		.nick_ls_admin_bar_button_ls a:hover{
			background: #916194 !important;
			color: #fff !important;
		}

	</style>
	<?php
   
}
?>