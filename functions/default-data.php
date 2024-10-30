<?php 
	if ( ! defined( 'ABSPATH' ) ) exit;
	$default_url =  NICK_LS_PLUGIN_URL.'assets/img/bg.jpg'; 
	$default_url2 =  NICK_LS_PLUGIN_URL.'assets/img/logo.png'; 
	
	/******************* DASHBOARD *************************************
	********************************************************************/	
	
	$nick_dashboard = serialize( array(
	'nick_ls_status' 		       => "0",
	'ls_headline' 		       => "Coming Soon",
	'ls_description' 		       => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fermentum dui. Pellentesque vitae porttitor ex, euismod sodales magna. Nunc sed felis sed dui pellentesque sodales porta a magna. Donec dui augue, dignissim faucibus lorem nec, fringilla molestie massa. Sed blandit dapibus bibendum. Sed interdum commodo laoreet. Sed mi orci.",
	'display_logo' 		       => "0",
	'ls_logo_url' 		       => $default_url2,
	'nick_ls_fb' 		       => "https://www.facebook.com/",
	'nick_ls_twit' 		       => "https://twitter.com/",
	'nick_ls_yt' 		       => "https://www.youtube.com/",
	
	) );
	add_option('nick_ls_dashboard', $nick_dashboard);


	
	
	/******************* SEO SETTINGS *******************************
	********************************************************************/		
	
	$nick_seo = serialize( array(
	'nick_ls_favicon' 		       => $default_url2,
	'nick_ls_seo_title' 		   => "Coming Soon",
	'nick_ls_seo_desc' 		       => "",
	'nick_ls_seo_analytiso' 	   => "",
	
	) );

	add_option('nick_ls_seo', $nick_seo);
	
	
	/******************* Design  *******************************
	********************************************************************/		
	
	$nick_design = serialize( array(
	'nick_ls_select_bg' 		       => "1",
	'nick_ls_bg_clr' 		       => "#1e73be",
	'nick_ls_bg_img' 		       => $default_url,
	'nick_cshead_clr' 		       => "#ffffff",
	'nick_headeline_ft_clr' 		       => "#ffffff",
	'nick_title_ft_size' 		       => "45",
	'nick_desc_ft_clr' 		       => "#ffffff",
	'nick_countdown_ft_clr' 		       => "#ffffff",
	'nick_social_clr' 		       => "#ffffff",
	'nick_navigation_clr' 		       => "#ffffff",
	'nick_heading_ft_size' 		       => "40",
	'nick_desc_ft_size' 		       => "21",
	'nick_ft_st' 		       => "Verdana",
	'nick_ls_custom_css' 		       => "",
	
	) );

	add_option('nick_ls_design', $nick_design);
	
	/******************* Countdown  *******************************
	********************************************************************/		
	
	$nick_countdown = serialize( array(
	'cnt_enable' 		       => "yes",
	'countdown_date' 		   => "2021/11/25",
	'countdown_time' 		   => "10:50",
	
	
	) );

	add_option('nick_ls_countdown', $nick_countdown);
	
	/******************* Social *******************************
	********************************************************************/	
	
	$nick_social = serialize( array(
	'nick_about_status' 	   => "0",
	'ls_aboutus_title' 		   => "About Us",
	'ls_aboutus' 		       => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fermentum dui. Pellentesque vitae porttitor ex, euismod sodales magna. Nunc sed felis sed dui pellentesque sodales porta a magna. Donec dui augue, dignissim faucibus lorem nec, fringilla molestie massa. Sed blandit dapibus bibendum. Sed interdum commodo laoreet. Sed mi orci.",
	'nick_ls_fb' 		       => "#",
	'nick_ls_twit' 		       => "#",
	'nick_ls_yt' 		       => "#",
	
	
	) );

	add_option('nick_ls_aboutus', $nick_social);

	
	/******************* Contact *******************************
	********************************************************************/		
	
	$nick_contact = serialize( array(
	'nick_contact_status' 		       => "0",
	'ls_contactus_title' 		       => "Contact Info",
	'nick_ls_address' 		       => "123 Street, City",
	'nick_ls_no' 		       => "(00) 123-4567890",
	'nick_ls_email'    		   => "email@example.com",
	
	) );

	add_option('nick_ls_contact', $nick_contact);
	

?>