<?php
if ( ! defined( 'ABSPATH' ) ) exit;
 ?>

<style>
#TB_ajaxContent{
		width:100% !important;
	}
	#TB_window {
		height: auto !important;
		width:98% !important;
		margin-left: 10px!important;
		left: 10px;
	}
	#TB_iframeContent{
		width:100% !important;
	}
</style>
<div>
	<div style="display:block;width:100%;padding-top: 25px;">
		<h2 style="padding-left: 32px;
		
		font-size: 45px;
		text-transform: uppercase;
		font-weight: 600;
		display: inline-block;
		letter-spacing: 0.02em;
		margin-right: 10px;">Coming Soon Countdown</h2><span style="font-size:20px">Version 1.0</span>
	</div>
	<div class="col-md-12">
		<div class="nick-wp-panel">
		
		 <div class="tab" role="tabpanel">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-tachometer"></i><?php _e('Dashboard','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"><i class="fa fa-area-chart"></i><?php _e('SEO','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="#Section3" aria-controls="settings" role="tab" data-toggle="tab"><i class="fa fa-building-o"></i><?php _e('Design','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="#Section4" aria-controls="settings" role="tab" data-toggle="tab"><i class="fa fa-clock-o"></i><?php _e('Count Down','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="#Section5" aria-controls="settings" role="tab" data-toggle="tab"><i class="fa fa-file-text"></i><?php _e('About Us','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="#Section6" aria-controls="settings" role="tab" data-toggle="tab"><i class="fa fa-phone"></i><?php _e('Contact','"coming-soon-countdown"'); ?></a></li>
                    <li role="presentation"><a href="<?php echo home_url(); ?>?nick_cs_preview=true&TB_iframe=true&width=900&height=80" class="thickbox"><i class="fa fa-bolt"></i><?php _e('Preview','"coming-soon-countdown"'); ?></a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content tabs">
                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                        <?php require_once('dashboard.php'); ?>  
                    </div>
 
                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                        <?php require_once('seo.php'); ?>
                    </div>
 
                    <div role="tabpanel" class="tab-pane fade" id="Section3">
                        <?php require_once('design.php'); ?>
                    </div>
					<div role="tabpanel" class="tab-pane fade" id="Section4">
                        <?php require_once('countdown-setting.php'); ?>
                    </div>
					<div role="tabpanel" class="tab-pane fade" id="Section5">
                        <?php require_once('about-us.php'); ?>
                    </div>
					<div role="tabpanel" class="tab-pane fade" id="Section6">
                        <?php require_once('contact.php'); ?>
                    </div>
					
                </div>
            </div>
        
			<div class="nick_cs_loding" id="nick_loding_image"></div>
			<button data-dialog="somedialog" class="dialog-button" style="display:none;">Open Dialog</button>
			<div id="somedialog" class="dialog" style="position: fixed; z-index: 9999;">
				<div class="dialog__overlay"></div>
				<div class="dialog__content">
					<div class="morph-shape" data-morph-open="M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33" data-morph-close="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33">
						<svg xmlns="" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
							<path d="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33"></path>
						</svg>
					</div>
					<div class="dialog-inner">
						<h2><strong></strong><?php _e('Setting Saved Successfully','"coming-soon-countdown"'); ?></h2><div><button class="action dialog-button-close" data-dialog-close id="dialog-close-button" ><?php _e('Close','"coming-soon-countdown"');?></button></div>
					</div>
				</div>
			</div>
			
		  <?php require_once('fs.php'); ?>
		  
		  
		</div>
		
	</div>
	
</div>