<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_contact = unserialize(get_option('nick_ls_contact'));	
?>
<table class="form-table">
		
		<tr>
			<th><?php _e('Enable Contact Us Section','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
				<div class="radio-div">
					<input type="radio" name="nick_contact_status" value="0" id="nick_contact_status1" <?php if($nick_ls_contact['nick_contact_status'] == "0") { echo "checked"; } ?> class="radio"/>
					<label for="nick_contact_status1"><?php _e('Yes','"coming-soon-countdown"'); ?></label>
				</div>

				<div class="radio-div">	
					<input type="radio" name="nick_contact_status" value="1" id="nick_contact_status2" <?php if($nick_ls_contact['nick_contact_status'] == "1") { echo "checked"; } ?> class="radio"/>
					<label for="nick_contact_status2"><?php _e('No','"coming-soon-countdown"'); ?></label>
				</div>
			</td>
		</tr>
		
		<tr>
		<th><?php _e('Contact Us Title','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					<input type="text"  class="pro_text" id="ls_contactus_title" name="ls_contactus_title" placeholder="<?php _e('Conatct Us','"coming-soon-countdown"'); ?>" value="<?php echo $nick_ls_contact['ls_contactus_title']; ?> ">
		
			</td>
			
		</tr>
		
		<tr>
			<th><?php _e('Address','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					
				
				<input type="text" class="pro_text" id="nick_ls_address" name="nick_ls_address" placeholder="<?php _e('Enter your Address','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_contact['nick_ls_address']; ?>" />
							
								
			</td>
			
		</tr>
		<tr>
			<th><?php _e('Contact No.','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					
				
				<input type="text" class="pro_text" id="nick_ls_no" name="nick_ls_no" placeholder="<?php _e('Enter your contact No.','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_contact['nick_ls_no']; ?>" />
							
								
			</td>
			
		</tr>
		
		<tr>
			<th><?php _e('Email Address','"coming-soon-countdown"'); ?></th>
		</tr>
		<tr class="radio-span" >
			<td>
					
				
				<input type="text" class="pro_text" id="nick_ls_email" name="nick_ls_email" placeholder="<?php _e('Enter your contact email','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_contact['nick_ls_email']; ?>" />
							
								
			</td>
			
		</tr>
		<tr class="radio-span" >
		<td>
				<button class="portfolio_read_more_btn "  onclick="nick_save_data_contact()"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
				<button class="portfolio_demo_btn" onclick="nick_reset_data_contact()" ><?php _e('Reset Default Setting','"coming-soon-countdown"'); ?></button>
		</td>
		
	</tr>	
		
</table>


<script>
function nick_save_data_contact(){
 jQuery("#nick_loding_image").show();
 var nick_contact_status = jQuery('input:radio[name="nick_contact_status"]:checked').val();
 var ls_contactus_title = jQuery("#ls_contactus_title").val();
 var nick_ls_address = jQuery("#nick_ls_address").val();
 var nick_ls_no = jQuery("#nick_ls_no").val();
 var nick_ls_email = jQuery("#nick_ls_email").val();
 
 
 	jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_contact':'nick_sop_contact',
			    'nick_contact_status':nick_contact_status,
			    'ls_contactus_title':ls_contactus_title,
			    'nick_ls_address':nick_ls_address,
			    'nick_ls_no':nick_ls_no,
			    'nick_ls_email':nick_ls_email,
			    
			        },
                success : function(data){
								jQuery("#nick_loding_image").fadeOut();
								jQuery(".dialog-button").click();
                                  
								  
                                   }			
            });
 
}
</script>
<?php
if(isset($_POST['action_contact'])=="nick_sop_contact") {
$nick_contact_status          = sanitize_option('nick_contact_status', $_POST['nick_contact_status']);
$ls_contactus_title          = sanitize_text_field($_POST['ls_contactus_title']);
$nick_ls_address          = sanitize_text_field($_POST['nick_ls_address']);
$nick_ls_no          = sanitize_text_field($_POST['nick_ls_no']);
$nick_ls_email          = sanitize_text_field($_POST['nick_ls_email']);
			
			
$contact = serialize( array(
	'nick_contact_status' 		       => $nick_contact_status,
	'ls_contactus_title' 		       => $ls_contactus_title,
	'nick_ls_address' 		       => $nick_ls_address,
	'nick_ls_no' 		       => $nick_ls_no,
	'nick_ls_email'    		   => $nick_ls_email,
	
	) );

update_option('nick_ls_contact', $contact);
}
 ?>
 
  <script>
 
	function nick_reset_data_contact(){
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
			'reset_action_contact':'action_contact_reset',
			
		   
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
if(isset($_POST['reset_action_contact'])=="action_contact_reset") {
	
	
	$nick_contact = serialize( array(
	'nick_contact_status' 		       => "0",
	'ls_contactus_title' 		       => "Contact Info",
	'nick_ls_address' 		       => "123 Street, City",
	'nick_ls_no' 		       => "(00) 123-4567890",
	'nick_ls_email'    		   => "email@example.com",
	
	) );

	update_option('nick_ls_contact', $nick_contact);
	
}
 ?>