<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_dashboard = unserialize(get_option('nick_ls_dashboard'));	
?>
<table class="form-table">
	<tr>
		<th><?php _e('Enable Coming Soon Countdown Mode','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
			<div class="radio-div">
				<input type="radio" name="nick_ls_status" value="0" id="nick_ls_status" <?php if($nick_ls_dashboard['nick_ls_status'] == "0") { echo "checked"; } ?> class="radio"/>
				<label for="nick_ls_status"><?php _e('Disabled','"coming-soon-countdown"'); ?></label>
			</div>

			<div class="radio-div">	
				<input type="radio" name="nick_ls_status" value="1" id="nick_ls_status2" <?php if($nick_ls_dashboard['nick_ls_status'] == "1") { echo "checked"; } ?> class="radio"/>
				<label for="nick_ls_status2"><?php _e('Enable Coming Soon Countdown Mode','"coming-soon-countdown"'); ?></label>
			</div>
		</td>
	</tr>
	<tr>
		<th><?php _e('Coming Soon Countdown Logo','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
			<img src="<?php echo $nick_ls_dashboard['ls_logo_url']; ?>" class="nick-csw-admin-img" />
			<input type="button" id="upload-background" name="upload-background" value="Upload Image" class="button-primary rcsp_media_upload"  />
			<input type="hidden" id="ls_logo_url" name="ls_logo_url" class="rcsp_label_text"  value="<?php echo $nick_ls_dashboard['ls_logo_url']; ?>"  readonly="readonly" placeholder="No Media Selected" />
		</td>
		
	</tr>
	
	<tr>
		<th><?php _e('Display Logo','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
			<div class="radio-div">
				<input type="radio" name="display_logo" value="0" id="display_logo1" <?php if($nick_ls_dashboard['display_logo'] == "0") { echo "checked"; } ?> class="radio"/>
				<label for="display_logo1"><?php _e('Yes','"coming-soon-countdown"'); ?></label>
			</div>

			<div class="radio-div">	
				<input type="radio" name="display_logo" value="1" id="display_logo2"<?php if($nick_ls_dashboard['display_logo'] == "1") { echo "checked"; } ?> class="radio"/>
				<label for="display_logo2"><?php _e('No','"coming-soon-countdown"'); ?></label>
			</div>
		</td>
	</tr>
	<tr>
		<th><?php _e('Coming Soon Countdown Headline','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
				<input type="text" class="pro_text" id="ls_headline" name="ls_headline" placeholder="<?php _e('Enter Coming Soon Title/Headline Here..','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_dashboard['ls_headline']; ?>" />
	
		</td>
		
	</tr>
	
	<tr>
			<th><?php _e('Facbook','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
				<input type="text" class="pro_text" id="nick_ls_fb" name="nick_ls_fb" placeholder="<?php _e('Enter Facebook profile url','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_dashboard['nick_ls_fb']; ?>" />
				<span style="color: #8e8e8e;"> Note : Enter complete profile url with "http://" example  : https://www.facebook.com/username</span>		
			</td>
			
		</tr>
		<tr>
			<th><?php _e('Twitter','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					
				
				<input type="text" class="pro_text" id="nick_ls_twit" name="nick_ls_twit" placeholder="<?php _e('Enter Twitter profile url','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_dashboard['nick_ls_twit']; ?>" />
				<span style="color: #8e8e8e;">Note : Enter complete profile url with "http://" example  :https://twitter.com/username</span>			
								
			</td>
			
		</tr>
		
		
		
		<tr>
			<th> <?php _e('YouTube','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					
				
				<input type="text" class="pro_text" id="nick_ls_yt" name="nick_ls_yt" placeholder="<?php _e('Enter YouTube profile url ','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_dashboard['nick_ls_yt']; ?>" />
				<span style="color: #8e8e8e;">Note : Enter complete profile url with "http://" </span>			
								
			</td>
			
		</tr>

	<tr class="radio-span" >
		<td>
				<button class="portfolio_read_more_btn "  onclick="nick_save_data_dashboard()"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
				<button class="portfolio_demo_btn"  onclick="nick_reset_data_dashboard()"><?php _e('Reset Default Settings','"coming-soon-countdown"'); ?></button>
		</td>
		
	</tr>							
	
</table>

<script>
function nick_save_data_dashboard(){

 jQuery("#nick_loding_image").show();
 var nick_ls_status = jQuery('input:radio[name="nick_ls_status"]:checked').val();
 var ls_headline = jQuery("#ls_headline").val();
 var display_logo = jQuery('input:radio[name="display_logo"]:checked').val();
 var ls_logo_url = jQuery("#ls_logo_url").val();
 var nick_ls_fb = jQuery("#nick_ls_fb").val();
 var nick_ls_twit = jQuery("#nick_ls_twit").val();
 var nick_ls_yt = jQuery("#nick_ls_yt").val();
 
 
 	jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_dashboard':'nick_sop_dashboard',
			    'nick_ls_status':nick_ls_status,
			    'ls_headline':ls_headline,
			    'display_logo':display_logo,
			    'ls_logo_url':ls_logo_url,
				'nick_ls_fb':nick_ls_fb,
			    'nick_ls_twit':nick_ls_twit,
			    'nick_ls_yt':nick_ls_yt,
			        },
                success : function(data){
					jQuery("#nick_loding_image").fadeOut();
					jQuery(".dialog-button").click();
					location.href='?page=launching_soon_wp';
			  
			   }			
            });
 
}

</script>
<?php
if(isset($_POST['action_dashboard'])=="nick_sop_dashboard") {
$nick_ls_status       = sanitize_option('nick_ls_status', $_POST['nick_ls_status']);
$ls_headline          = stripslashes(sanitize_text_field($_POST['ls_headline']));
$display_logo          = sanitize_option('display_logo', $_POST['display_logo']);
$ls_logo_url          = sanitize_text_field($_POST['ls_logo_url']);
$nick_ls_fb          = sanitize_text_field($_POST['nick_ls_fb']);
$nick_ls_twit          = sanitize_text_field($_POST['nick_ls_twit']);
$nick_ls_yt          = sanitize_text_field($_POST['nick_ls_yt']);
			
			
$dashboard = serialize( array(
	'nick_ls_status' 		       => $nick_ls_status,
	'ls_headline' 		       => $ls_headline,
	'display_logo' 		       => $display_logo,
	'ls_logo_url' 		       => $ls_logo_url,
	'nick_ls_fb' 		       => $nick_ls_fb,
	'nick_ls_twit' 		       => $nick_ls_twit,
	'nick_ls_yt' 		       => $nick_ls_yt,
	
	) );

update_option('nick_ls_dashboard', $dashboard);
}
 ?>
 
<script>
 
	function nick_reset_data_dashboard(){
		if (confirm('Are you sure you want to reste this setting?')) {
    
		} else {
		   return;
		}
		jQuery("#nick_loding_image").show();
		jQuery.ajax(
		{
			type: "POST",
			url: location.href,

			data : {
			'reset_action_dashboard':'action_dashboard_reset',
			
		   
				},
			success : function(data){
				jQuery("#nick_loding_image").fadeOut();
				jQuery(".dialog-button").click();
				location.href='?page=launching_soon_wp';
		  
		   }			
		});
	 
	}
	
</script>

<?php
if(isset($_POST['reset_action_dashboard'])=="action_dashboard_reset") {
	$default_url2 =  NICK_LS_PLUGIN_URL.'assets/img/logo.png'; 
	$nick_dashboard = serialize( array(
	'nick_ls_status' 		       => "0",
	'ls_headline' 		       => "Coming Soon Countdown",
	'display_logo' 		       => "0",
	'ls_logo_url' 		       => $default_url2,
	'nick_ls_fb' 		       => "https://www.facebook.com/",
	'nick_ls_twit' 		       => "https://twitter.com/",
	'nick_ls_yt' 		       => "https://www.youtube.com/",
	) );
	update_option('nick_ls_dashboard', $nick_dashboard);
}
 ?>