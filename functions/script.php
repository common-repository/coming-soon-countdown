<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
function nick_site_offline_wp_script()
{
	wp_enqueue_media();
    wp_enqueue_style('wp-color-picker');
	wp_enqueue_style('thickbox');
	wp_enqueue_style('nick_ls-bootstrap_sos', NICK_LS_PLUGIN_URL.'assets/css/bootstrap.css');
	wp_enqueue_style('nick_ls-font-awesome_min', NICK_LS_PLUGIN_URL.'assets/css/font-awesome/css/font-awesome.min.css');
	wp_enqueue_style('nick_ls-rsop_jquery-ui', NICK_LS_PLUGIN_URL.'assets/css/rcsp_jquery-ui.css');
	wp_enqueue_style('nick_ls-backend', NICK_LS_PLUGIN_URL.'assets/css/backend.css');
	wp_enqueue_style('nick_ls-smartech', NICK_LS_PLUGIN_URL.'assets/css/smartech.css');
	
	//dailog pop sos
	wp_enqueue_style('nick_ls-dialog', NICK_LS_PLUGIN_URL.'assets/css/dialog/dialog.css');
	wp_enqueue_style('nick_ls-dialog-box-style', NICK_LS_PLUGIN_URL.'assets/css/dialog/dialog-box-style.css');
	wp_enqueue_style('nick_ls-dialog-wilma', NICK_LS_PLUGIN_URL.'assets/css/dialog/dialog-jamie.css');
	
	
	wp_enqueue_script('theme-preview');
	wp_enqueue_script('jquery');
	wp_enqueue_script( 'jquery-ui-sortable' );
	wp_enqueue_script('nick_ls-media-uploads',NICK_LS_PLUGIN_URL.'assets/js/media-upload-script.js',array('media-upload','thickbox','jquery'));
	wp_enqueue_script('nick_ls-time-picker', NICK_LS_PLUGIN_URL.'assets/js/jquery-ui-timepicker.js',array('jquery','jquery-ui-datepicker'));
	wp_enqueue_script('nick_ls-my-color-picker-script', NICK_LS_PLUGIN_URL.'assets/js/my-color-picker-script.js', array( 'wp-color-picker' ), false, true );
	wp_enqueue_script('nick_ls-bootstrap_min_js',NICK_LS_PLUGIN_URL.'assets/js/bootstrap.min.js');
	
	//dailog pop js
	wp_enqueue_script('nick_ls-snap-svg-min',NICK_LS_PLUGIN_URL.'assets/js/dialog/snap.svg-min.js');
	wp_enqueue_script('nick_ls-modernizr-custom',NICK_LS_PLUGIN_URL.'assets/js/dialog/modernizr.custom.js');
	wp_enqueue_script('nick_ls-classie',NICK_LS_PLUGIN_URL.'assets/js/dialog/classie.js');
	wp_enqueue_script('nick_ls-dialogFx',NICK_LS_PLUGIN_URL.'assets/js/dialog/dialogFx.js'); 
	
}
?>