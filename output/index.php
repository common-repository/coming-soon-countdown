<!DOCTYPE html>
<html lang="en">
<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_dashboard = unserialize(get_option('nick_ls_dashboard'));
$nick_ls_design = unserialize(get_option('nick_ls_design'));	
$nick_ls_aboutus = unserialize(get_option('nick_ls_aboutus'));
$nick_ls_countdown = unserialize(get_option('nick_ls_countdown'));
$nick_ls_seo = unserialize(get_option('nick_ls_seo'));
$nick_ls_contact = unserialize(get_option('nick_ls_contact'));
 ?>
<head>
<!--=============== basic  ===============-->

	<meta charset="UTF-8">
	<title><?php echo $nick_ls_seo['nick_ls_seo_title']; ?></title>
	<meta name="description" content="">
	<meta name="keywords" content="your, website, keywords, here">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	
<!--=============== css  ===============-->	

	<link type="text/css" rel="stylesheet" href="<?php echo NICK_LS_PLUGIN_URL.'assets/css/bootstrap.css'; ?>">
	<link type="text/css" rel="stylesheet" href="<?php echo NICK_LS_PLUGIN_URL.'output/assets/css/idangerous.swiper.css'; ?>">
	<link rel="stylesheet" href="<?php echo NICK_LS_PLUGIN_URL.'assets/css/font-awesome/css/font-awesome.min.css'; ?>">
	<link type="text/css" rel="stylesheet" href="<?php echo NICK_LS_PLUGIN_URL.'output/assets/css/style.css'; ?>">
	

<!--=============== fonts  ===============-->

<!--=============== favicons ===============-->

<link rel="shortcut icon" href="<?php echo $nick_ls_seo['nick_ls_favicon']; ?>">
<style>
<?php if($nick_ls_design['nick_ls_select_bg'] == "0") { ?>
body{
		background:<?php echo $nick_ls_design['nick_ls_bg_clr']; ?> !important;
		font-family:'<?php echo $nick_ls_design['nick_ft_st']; ?>' !important;
	}
	<?php } ?>
.container p.align-just{
	font-size:<?php echo $nick_ls_design['nick_desc_ft_size'];?>px !important;
	max-width:800px !important;
	color: <?php echo $nick_ls_design['nick_desc_ft_clr'] ?> !important;
	line-height: 1.8em !important;
	padding:20px !important;
	font-weight:300 !important;
	margin:0 auto !important;
	text-align:center  !important;
	font-family: '<?php  $nick_ls_design['nick_ft_st']; ?>' !important;		
}

.content h2
{
	font-size:<?php echo $nick_ls_design['nick_title_ft_size'];?>px !important;
	letter-spacing: 0.10em !important;
	font-weight: 600 !important; 
	color: <?php echo $nick_ls_design['nick_headeline_ft_clr'] ?> !important;
	font-family: '<?php  $nick_ls_design['nick_ft_st']; ?>' !important;			
}
.social-links li a {
	display:block !important;
	float:left !important;
	color:<?php echo $nick_ls_design['nick_social_clr'] ?> !important;
	font-size:16px !important;
	width:40px !important;
	height:40px !important;
	opacity:0.8 !important;
	border:2px solid <?php echo $nick_ls_design['nick_social_clr'] ?> !important;
	border-radius:100% !important;
	position:relative !important;
}
.small-separator{
	width:100px !important;
	height:1px !important;
	background:<?php echo $nick_ls_design['nick_headeline_ft_clr'] ?> !important;
	margin:20px auto !important;
}	
.contact-info{
	color:<?php echo $nick_ls_design['nick_desc_ft_clr'] ?> !important;
	font-size:<?php echo $nick_ls_design['nick_desc_ft_size'];?>px !important;
	padding-bottom:50px !important;
	padding-top: 40px;
    overflow: hidden;
	font-family: '<?php  $nick_ls_design['nick_ft_st']; ?>' !important;		
}
.contact-info a {
color:<?php echo $nick_ls_design['nick_desc_ft_clr'] ?> !important;
}

.container h3
{
font-size:<?php echo $nick_ls_design['nick_heading_ft_size'];?>px !important;
color:<?php echo $nick_ls_design['nick_cshead_clr'] ?> !important;
}
ul.countdown li span {
	display: block !important;
	font-family: '<?php  $nick_ls_design['nick_ft_st']; ?>' !important;	
	font-size: 5.6em !important;
	color:<?php echo $nick_ls_design['nick_countdown_ft_clr'] ?> !important;
}
ul.countdown li p {
color:<?php echo $nick_ls_design['nick_countdown_ft_clr']?> !important;
}
.navigation
{
color:<?php echo $nick_ls_design['nick_navigation_clr'] ?> !important;
border:2px solid <?php echo $nick_ls_design['nick_navigation_clr']?> !important;
}
.rotade{
background:<?php echo $nick_ls_design['nick_navigation_clr'] ?> !important;
}
.over-border {
    position: absolute;
    background:<?php echo $nick_ls_design['nick_navigation_clr'] ?>;
    z-index: 2;
}
.dayff
{
	font-family: '<?php  $nick_ls_design['nick_ft_st']; ?>' !important;		
}
a:hover hclro{
     
    text-decoration: none !important;
}
.social-links ul {
padding-left:0px;
}
.navigation-buttton{
border: 2px solid <?php echo $nick_ls_design['nick_navigation_clr'] ?>;
  
    color: <?php echo $nick_ls_design['nick_navigation_clr'] ?>;
	}
<?php echo $nick_so_design['nick_so_custom_css']; ?>
</style>
<?php echo $nick_ls_seo['nick_ls_seo_analytiso']; ?>

</head>
<body>
<!--================= Wrapper start ================-->
<!-- Preloader -->
      <div id="preloader">
        <div id="status">
          <div class="spinner">
           
          </div>
        </div>
      </div>
    <!-- End Preloader -->

<div id="wrapper">

	<div class="container-bg">
		<div class="container-overlay"></div>
		<span class="over-border top-border"></span>
		<span class="over-border bottom-border"></span>
		<span class="over-border left-border"></span>
		<span class="over-border right-border"></span>
	</div>
	
<!--================= Background ================-->
 
 <?php if($nick_ls_design['nick_ls_select_bg'] == "1") { ?>
	<div class="bg" style="background-image:url(<?php echo $nick_ls_design['nick_ls_bg_img'] ?>)"></div>
	<?php } ?>
 
<!--================= Main start ================-->

	<div class="main">

		<div class="swiper-container">
		
			<div class="swiper-wrapper">
			

				<div class="swiper-slide">
				
			 <!--================= About start ================-->
				<?php if($nick_ls_aboutus['nick_about_status'] == "0"){ ?>
					<div class="container">
										
						<div class="content"> 
	
							<h2><?php echo $nick_ls_aboutus['ls_aboutus_title']; ?></h2> 
							<div class="small-separator"></div>                       	
			
							<p class="align-just"><?php echo $nick_ls_aboutus['ls_aboutus']; ?></p> 
								
							<!--social-links -->
								
							<div class="social-links">
								<ul style="">
									<?php if($nick_ls_aboutus['nick_ls_fb']!=""){ ?>
										<li><a href="<?php echo $nick_ls_aboutus['nick_ls_fb']; ?>" target="_blank"  class="transition"><i class="fa fa-facebook-square"></i><span class="dayff">Facebook</span></a></li>
									<?php } ?>
									<?php if($nick_ls_aboutus['nick_ls_twit']!=""){ ?>
										<li><a href="<?php echo $nick_ls_aboutus['nick_ls_twit']; ?>" target="_blank" class="transition"><i class="fa fa-twitter"></i><span class="dayff">Twitter</span></a></li>
									<?php } ?>
									<?php if($nick_ls_aboutus['nick_ls_yt']!=""){ ?>
										<li><a href="<?php echo $nick_ls_aboutus['nick_ls_yt']; ?>" target="_blank" class="transition"><i class="fa fa-youtube"></i><span class="dayff">YouTube</span></a></li>
									<?php } ?>
								</ul>
							</div>
			
						</div><!--About end-->
						<a class="navigation arrow-right back-left transition" href="#"><i class="fa fa-times"></i></a>  
					</div>
					<?php } ?>
				</div>
				


				<div class="swiper-slide"> 
				
				<!--============= Countdown start =============-->	
				      	          
					<div class="container">
						
						<div class="content fistslide transition bc"> 
						<span class="rotade rot-top-left"></span>
						<span class="rotade rot-top-right"></span>
						<span class="rotade rot-bottom-left"></span>
						<span class="rotade rot-bottom-right"></span>  
							<?php if($nick_ls_dashboard['display_logo'] == "0") { ?> 
							<img src="<?php echo $nick_ls_dashboard['ls_logo_url']; ?> " alt=""> 
							<?php } ?>
							<?php if($nick_ls_countdown['cnt_enable'] == "yes") { ?> 
								<div class="timer wow fadeInUp">
									<ul class="countdown">
										<li>
											<span class="days rot"><?php echo $nick_ls_dashboard['days']; ?></span>
											<p class="days_ref dayff">days</p>			
										</li>
										<li>
											<span class="hours rot"></span>
											<p class="hours_ref dayff">hours</p>
										</li>
										<li>
											<span class="minutes rot2"></span>
											<p class="minutes_ref dayff">minutes</p>
								
										</li>
										<li>
											<span class="seconds rot2"></span>
											<p class="seconds_ref dayff">seconds</p>
										</li>
									</ul>
								</div>	
							<?php } ?>		
			
							<h3 class="dayff"><?php echo $nick_ls_dashboard['ls_headline']; ?></h3>
 
						
						             
						<div class="clear"></div>
						
							 <div class="row">             
								<?php if($nick_ls_aboutus['nick_about_status'] == "0"){ ?>
								<a class="navigation-buttton arrow-left transition dayff hclro" href="#"><?php echo $nick_ls_aboutus['ls_aboutus_title']; ?></a> 
								<?php }?>	
								<?php if($nick_ls_contact['nick_contact_status'] == "0"){ ?>
									<a class="navigation-buttton arrow-right transition dayff hclro" href="#"><?php echo $nick_ls_contact['ls_contactus_title']; ?></a> 
								<?php }?>	
							</div>
						</div> 
						
						
					</div> <!-- Countdown end --> 
					   
				</div>
				
				
				<?php if($nick_ls_contact['nick_contact_status'] == "0"){ ?>
				<div class="swiper-slide">
				
				<!--============== Contact start ================-->
							
					<div class="container">

						<div class="content fade2 transition">
						
							<h2><?php echo $nick_ls_contact['ls_contactus_title']; ?></h2> 
							<div class="small-separator"></div>
					
							<div class="contact-info">
							
								<?php if($nick_ls_contact['nick_ls_no']!=""){ ?>
									<div class="grid-2 transition">
										<i class="fa fa-mobile fa-2x"></i>
										<br><br> <?php echo $nick_ls_contact['nick_ls_no']; ?>
									</div>	
								<?php } ?>
								
								<?php if($nick_ls_contact['nick_ls_email']!=""){ ?>
								<div class="grid-2 transition">
									<i class="fa fa-envelope-o fa-2x"></i> 
									<br><br><?php echo $nick_ls_contact['nick_ls_email']; ?>
								</div>
								<?php } ?>
								
								<?php if($nick_ls_contact['nick_ls_address']!=""){ ?>
								<div class="grid-2 transition">
									<i class="fa fa-globe fa-2x"></i>
									<br><br><?php echo $nick_ls_contact['nick_ls_address']; ?> 
								</div>
								<?php } ?>
							</div>			
						</div>
						
						<a class="navigation arrow-left back-right transition" href="#"><i class="fa fa-times"></i></a> 
						
					</div>
				
		<!--Contact end -->  
					      
				</div>
				
				<?php } ?>
			</div> 
			
		</div>
		
	</div><!-- Main end -->
	
</div><!-- Wrapper end -->

<!-- Javascript -->
<?php 	
		// Javascript
		
		$include_url = includes_url();
		$last = $include_url[strlen( $include_url )-1];
		if ( $last != '/' ) {
			$include_url = $include_url . '/';
		}
		$output = '<script src="'.$include_url.'js/jquery/jquery.js"></script>';
	echo "$output\n";
		?>

<!--=============== javascript ===============-->

	
	<script type="text/javascript" src="<?php echo NICK_LS_PLUGIN_URL.'output/assets/js/main-min.js'; ?>"></script>
	
	<script type="text/javascript" src="<?php echo NICK_LS_PLUGIN_URL.'output/assets/js/init.js'; ?>"></script>
	
<?php if($nick_ls_countdown['cnt_enable'] == "yes") { ?> 
<script>
	var now = new Date();
	var countTo = "<?php echo $nick_ls_countdown['countdown_date']; ?>";    
	jQuery('.timer').countdown(countTo, function(event) {
		jQuery(this).find('.days').text(event.offset.totalDays);
		jQuery(this).find('.hours').text(event.offset.hours);
		jQuery(this).find('.minutes').text(event.offset.minutes);
		jQuery(this).find('.seconds').text(event.offset.seconds);
	});
</script>
<?php } ?>	
	
</body>

</html>