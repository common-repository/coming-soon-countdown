<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_seo = unserialize(get_option('nick_ls_seo'));	
?>
<table class="form-table">
							
	<tr>
		<th><?php _e('Favicon Icon','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
				
				<img src="<?php echo $nick_ls_seo['nick_ls_favicon']; ?>" class="nick-csw-admin-img" />
				
				<input type="button" id="upload-background" name="upload-background" value="Upload Image" class="button-primary rcsp_media_upload"  />
				<input type="hidden" id="nick_ls_favicon" name="nick_ls_favicon" class="rcsp_label_text"  value="<?php echo $nick_ls_seo['nick_ls_favicon']; ?>"  readonly="readonly" placeholder="No Media Selected" />
				
		</td>
		
	</tr>
	
	
	<tr>
		<th><?php _e('SEO Title','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
				<input type="text" class="pro_text" id="nick_ls_seo_title" name="nick_ls_seo_title" placeholder="<?php _e('Enter Your SEO Title Here...','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_seo['nick_ls_seo_title']; ?>" />
	
		</td>
		
	</tr>

	<tr>
		<th><?php _e('Google Analytics Script','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
				<textarea rows="6"  class="pro_text" id="nick_ls_seo_analytiso" name="nick_ls_seo_analytiso" placeholder="<?php _e('Enter Your Google Analytics Script Here','"coming-soon-countdown"'); ?>"><?php echo $nick_ls_seo['nick_ls_seo_analytiso']; ?></textarea>
	
		</td>
		
	</tr>
<tr class="radio-span" >
		<td>
				<button class="portfolio_read_more_btn "  onclick="nick_save_data_seo()"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
				<button class="portfolio_demo_btn" onclick="nick_reset_data_seo()" ><?php _e('Reset Default Setting','"coming-soon-countdown"'); ?></button>
		</td>
		
	</tr>		
	
</table>



<script>
function nick_save_data_seo(){
 jQuery("#nick_loding_image").show();
 var nick_ls_favicon = jQuery("#nick_ls_favicon").val();
 var nick_ls_seo_title = jQuery("#nick_ls_seo_title").val();
 var nick_ls_seo_analytiso = jQuery("#nick_ls_seo_analytiso").val();
 
 
 	jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_seo':'nick_sop_seo',
			    'nick_ls_favicon':nick_ls_favicon,
			    'nick_ls_seo_title':nick_ls_seo_title,
			    'nick_ls_seo_analytiso':nick_ls_seo_analytiso,
			   
			        },
                success : function(data){
									jQuery("#nick_loding_image").fadeOut();	
									jQuery(".dialog-button").click();
                                   
								  
                                   }			
            });
 
}
</script>
<?php
if(isset($_POST['action_seo'])=="nick_sop_seo") {
$nick_ls_favicon          = sanitize_text_field($_POST['nick_ls_favicon']);
$nick_ls_seo_title          = stripslashes(sanitize_text_field($_POST['nick_ls_seo_title']));
$nick_ls_seo_analytiso          = stripslashes(sanitize_text_field($_POST['nick_ls_seo_analytiso']));
			
			
$seo = serialize( array(
	'nick_ls_favicon' 		       => $nick_ls_favicon,
	'nick_ls_seo_title' 		       => $nick_ls_seo_title,
	'nick_ls_seo_analytiso' 		       => $nick_ls_seo_analytiso,
	
	) );

update_option('nick_ls_seo', $seo);
}
 ?>
 
 
  <script>
 
	function nick_reset_data_seo(){
		if (confirm('Are you sure you want to reset this setting?')) {
    
		} else {
		   return;
		}
		jQuery("#nick_loding_image").show();
		jQuery.ajax(
		{
			type: "POST",
			url: location.href,

			data : {
			'reset_action_seo':'action_seo_reset',
			
		   
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
if(isset($_POST['reset_action_seo'])=="action_seo_reset") {
	
	$default_url2 =  NICK_LS_PLUGIN_URL.'assets/img/logo.png'; 
	
	
	$nick_seo = serialize( array(
	'nick_ls_favicon' 		       => $default_url2,
	'nick_ls_seo_title' 		   => "Coming Soon Countdown",
	'nick_ls_seo_analytiso' 	   => "",
	
	) );

	update_option('nick_ls_seo', $nick_seo);
}
 ?>