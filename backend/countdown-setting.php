<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_countdown = unserialize(get_option('nick_ls_countdown'));	
?>
<script>
jQuery(document).ready(function() {
		
		jQuery('#countdown_date').datepicker({dateFormat: 'yy/mm/dd',minDate: '0'});
		
	});
</script>

<table class="form-table">
	
	<tr>
		<th><?php _e('Enable Countdown','"coming-soon-countdown"'); ?></th>
	</tr>	
	<tr class="radio-span" style="border-bottom:none;">
		<tr class="radio-span" >
		<td>
			<div class="radio-div">
				<input type="radio" name="cnt_enable" value="yes" id="cnt_enable1" <?php if($nick_ls_countdown['cnt_enable'] == "yes") { echo "checked"; } ?> class="radio"/>
				<label for="cnt_enable1"><?php _e('Yes','"coming-soon-countdown"'); ?></label>
			</div>

			<div class="radio-div">	
				<input type="radio" name="cnt_enable" value="no" id="cnt_enable2" <?php if($nick_ls_countdown['cnt_enable'] == "no") { echo "checked"; } ?> class="radio"/>
				<label for="cnt_enable2"><?php _e('No','"coming-soon-countdown"'); ?></label>
			</div>
		</td>
	</tr>
	</tr>
	
	<tr>
		<th><?php _e('End Date','"coming-soon-countdown"'); ?></th>
	</tr>
	<tr class="radio-span" >
		<td>
		<input type="text" class="pro_text" id="countdown_date" name="countdown_date" readonly placeholder="<?php _e('Select Your Countdown Start date','"coming-soon-countdown"'); ?>" size="56" value="<?php echo $nick_ls_countdown['countdown_date']; ?>" />
		</td>
	</tr>
	
	<tr class="radio-span" >
		<td>
				<button class="portfolio_read_more_btn "  onclick="nick_save_data_countdown()"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
				<button class="portfolio_demo_btn"  onclick="nick_reset_data_countdown()"><?php _e('Reset Default Settings','"coming-soon-countdown"'); ?></button>
		</td>
		
	</tr>							
	
</table>


<script>
function nick_save_data_countdown(){
 jQuery("#nick_loding_image").show();
 var cnt_enable = jQuery('input:radio[name="cnt_enable"]:checked').val();
 var countdown_date = jQuery("#countdown_date").val();
 
 
 
 
 	jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_countdown':'nick_sop_countdown',
			    'cnt_enable':cnt_enable,
			    'countdown_date':countdown_date,
			   
			        },
                success : function(data){
									jQuery("#nick_loding_image").fadeOut();	
									jQuery(".dialog-button").click();
                                  
								  
                                   }			
            });
 
}
</script>	
<?php
if(isset($_POST['action_countdown'])=="nick_sop_countdown") {
$cnt_enable       = sanitize_option('cnt_enable', $_POST['cnt_enable']);
$countdown_date          = stripslashes(sanitize_text_field($_POST['countdown_date']));
			
$countdown = serialize( array(
	'cnt_enable' 		       => $cnt_enable,
	'countdown_date' 		       => $countdown_date,
	
	) );

update_option('nick_ls_countdown', $countdown);
}
 ?>
 
 
  <script>
 
	function nick_reset_data_countdown(){
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
			'reset_action_countdown':'action_seo_countdown',
			
		   
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
if(isset($_POST['reset_action_countdown'])=="action_seo_countdown") {
	
	$nick_countdown = serialize( array(
	
	'cnt_enable' 		       => "yes",
	'countdown_date' 		       => "09/09/2020",
	'days' 		                   => "days",
	'hours' 		               => "hours",
	'minutes' 		               => "minutes",
	'seconds' 		               => "seconds",
	
	) );

	update_option('nick_ls_countdown', $nick_countdown);
}
 ?>