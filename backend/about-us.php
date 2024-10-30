<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_aboutus = unserialize(get_option('nick_ls_aboutus'));	
?>
<script>
		function  about_us_section_enable(status){
			if(status.value=='on')
			    {
					jQuery(".about_us_section").show(500);
				}
			   else
				{
				  jQuery(".about_us_section").hide(500);
			    }
		}
		
	</script>
	<div class="panel panel-primary panel-default content-panel about_us_section">
				<div class="panel-body">
<table class="form-table">
		
		<tr>
			<th><?php _e('Enable About Us Section','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
				<div class="radio-div">
					<input type="radio" name="nick_about_status" value="0" id="nick_about_status1" <?php if($nick_ls_aboutus['nick_about_status'] == "0") { echo "checked"; } ?> class="radio"/>
					<label for="nick_about_status1"><?php _e('Yes','"coming-soon-countdown"'); ?></label>
				</div>

				<div class="radio-div">	
					<input type="radio" name="nick_about_status" value="1" id="nick_about_status2" <?php if($nick_ls_aboutus['nick_about_status'] == "1") { echo "checked"; } ?> class="radio"/>
					<label for="nick_about_status2"><?php _e('No','"coming-soon-countdown"'); ?></label>
				</div>
			</td>
		</tr>
	
		<tr>
		<th><?php _e('About Us Title','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					<input type="text"  class="pro_text" id="ls_aboutus_title" name="ls_aboutus_title" placeholder="<?php _e('About Us','"coming-soon-countdown"'); ?>" value="<?php echo $nick_ls_aboutus['ls_aboutus_title']; ?>">  
		
			</td>
			
		</tr>
		
		<tr>
		<th><?php _e('About Us Description','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					<textarea rows="6"  class="pro_text" id="ls_aboutus" name="ls_aboutus" placeholder="<?php _e('Enter Your About Us Description Here...','"coming-soon-countdown"'); ?>"><?php echo $nick_ls_aboutus['ls_aboutus']; ?></textarea>
		
			</td>
			
		</tr>
	</div>
			</div>	

			
		<tr class="radio-span" >
		<td>
				<button class="portfolio_read_more_btn "  onclick="nick_save_data_social();nick_save_data_social1();return false;"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
				<button class="portfolio_demo_btn" onclick="nick_reset_data_social()" ><?php _e('Reset Default Setting','"coming-soon-countdown"'); ?></button>
		</td>
		
	</tr>	
</table>
<?php 
 $All_data = array();

 ?>

<script>
function nick_save_data_social(){
 jQuery("#nick_loding_image").show();
 var nick_about_status = jQuery('input:radio[name="nick_about_status"]:checked').val();
 var ls_aboutus_title = jQuery("#ls_aboutus_title").val();
 var ls_aboutus = jQuery("#ls_aboutus").val();


 
 jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_social':'nick_sop_social',
			    'nick_about_status':nick_about_status,
			    'ls_aboutus_title':ls_aboutus_title,
			    'ls_aboutus':ls_aboutus,
			    
			        },
                success : function(data){
									jQuery("#nick_loding_image").fadeOut();
									jQuery(".dialog-button").click();
                               
								  
                                   }			
            });
 
}
</script>
<?php
if(isset($_POST['action_social'])=="nick_sop_social") {
$nick_about_status          = sanitize_option('nick_about_status', $_POST['nick_about_status']);
$ls_aboutus_title          = stripslashes(sanitize_text_field($_POST['ls_aboutus_title']));
$ls_aboutus          = stripslashes(sanitize_text_field($_POST['ls_aboutus']));
			
$social = serialize( array(
	'nick_about_status' 		       => $nick_about_status,
	'ls_aboutus_title' 		       => $ls_aboutus_title,
	'ls_aboutus' 		       => $ls_aboutus,	 
	
	
	) );

update_option('nick_ls_aboutus', $social);
}
 ?>
 
 <?php
if(isset($_POST['All_data'])=="All_data") {
$nick_about_status          = sanitize_option('nick_about_status', $_POST['nick_about_status']);
$ls_aboutus_title          = stripslashes(sanitize_text_field($_POST['ls_aboutus_title']));
$ls_aboutus          = stripslashes(sanitize_text_field($_POST['ls_aboutus']));

			
$All_data = serialize( array(
	'nick_about_status' 		       => $nick_about_status,
	'ls_aboutus_title' 		       => $ls_aboutus_title,
	'ls_aboutus' 		       => $ls_aboutus,
	
	) );

update_option('nick_ls_aboutus1', $All_data);
}
 ?>
 
 
 <script>
 
	function nick_reset_data_social(){
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
			'reset_action_social':'action_social_reset',
			
		   
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
if(isset($_POST['reset_action_social'])=="action_social_reset") {
	
	
	$nick_social = serialize( array(
	'nick_about_status' 	   => "0",
	'ls_aboutus_title' 		   => "About Us",
	'ls_aboutus' 		       => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel fermentum dui. Pellentesque vitae porttitor ex, euismod sodales magna. Nunc sed felis sed dui pellentesque sodales porta a magna. Donec dui augue, dignissim faucibus lorem nec, fringilla molestie massa. Sed blandit dapibus bibendum. Sed interdum commodo laoreet. Sed mi orci.",

	) );

	update_option('nick_ls_aboutus', $nick_social);
}
 ?>