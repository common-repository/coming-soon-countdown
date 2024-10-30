<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$nick_ls_design = unserialize(get_option('nick_ls_design'));	
?>
 
<Script>
	//Description Fonts Size Slider
	jQuery(function() {
		jQuery( "#button-size-slider3" ).slider({
			orientation: "horizontal",
			range: "min",
			max: 80,
			min:10,
			slide: function( event, ui ) {
			jQuery( "#nick_heading_ft_size" ).val( ui.value );
			}
		});

	jQuery( "#button-size-slider3" ).slider("value",<?php if($nick_ls_design['nick_heading_ft_size']!=""){ echo $nick_ls_design['nick_heading_ft_size']; } else { echo "16"; }?> );
	jQuery( "#nick_heading_ft_size" ).val( jQuery( "#button-size-slider3" ).slider( "value") );

	});
</script>

<Script>
	//Description Fonts Size Slider
	jQuery(function() {
		jQuery( "#button-size-slider4" ).slider({
			orientation: "horizontal",
			range: "min",
			max: 80,
			min:10,
			slide: function( event, ui ) {
			jQuery( "#nick_desc_ft_size" ).val( ui.value );
			}
		});

	jQuery( "#button-size-slider4" ).slider("value",<?php if($nick_ls_design['nick_desc_ft_size']!=""){ echo $nick_ls_design['nick_desc_ft_size']; } else { echo "16"; }?> );
	jQuery( "#nick_desc_ft_size" ).val( jQuery( "#button-size-slider4" ).slider( "value") );

	});
</script>
<Script>
	//Title Fonts Size Slider
	jQuery(function() {
		jQuery( "#button-size-slider5" ).slider({
			orientation: "horizontal",
			range: "min",
			max: 80,
			min:10,
			slide: function( event, ui ) {
			jQuery( "#nick_title_ft_size" ).val( ui.value );
			}
		});

	jQuery( "#button-size-slider5" ).slider("value",<?php if($nick_ls_design['nick_title_ft_size']!=""){ echo $nick_ls_design['nick_title_ft_size']; } else { echo "16"; }?> );
	jQuery( "#nick_title_ft_size" ).val( jQuery( "#button-size-slider5" ).slider( "value") );

	});
</script>


		<table class="form-table">
			<tr>
				<th><?php _e('Select Background','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
					<div class="radio-div">
						<input type="radio" name="nick_ls_select_bg" value="0" id="nick_ls_select_bg1" <?php if($nick_ls_design['nick_ls_select_bg'] == "0") { echo "checked"; } ?> class="radio"/>
						<label for="nick_ls_select_bg1"><?php _e('Color Background','"coming-soon-countdown"'); ?></label>
					</div>

					<div class="radio-div">	
						<input type="radio" name="nick_ls_select_bg" value="1" id="nick_ls_select_bg2" <?php if($nick_ls_design['nick_ls_select_bg'] == "1") { echo "checked"; } ?> class="radio"/>
						<label for="nick_ls_select_bg2"><?php _e('Image Background','"coming-soon-countdown"'); ?></label>
					</div>
				</td>
			</tr>
			<tr>
				<th><?php _e('Background Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_ls_bg_clr" name="nick_ls_bg_clr" type="text" value="<?php echo $nick_ls_design['nick_ls_bg_clr']; ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>

			<tr>
				<th><?php _e('Background Image','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
						<img src="<?php echo $nick_ls_design['nick_ls_bg_img'] ?>" class="nick-csw-admin-img" />
						
						<input type="button" id="upload-background" name="upload-background" value="Upload Image" class="button-primary rcsp_media_upload"  />
						<input type="hidden" id="nick_ls_bg_img" name="nick_ls_bg_img" class="rcsp_label_text"  value="<?php echo $nick_ls_design['nick_ls_bg_img'] ?>"  readonly="readonly" placeholder="No Media Selected" />
						
				</td>
				
			</tr>
			<tr>
				<th><?php _e('Coming Soon Countdown Headline Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_cshead_clr" name="nick_cshead_clr" type="text" value="<?php echo $nick_ls_design['nick_cshead_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>
			
			<tr>
				<th><?php _e('Coming Soon Countdown Headline Font Size','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr>
				<td class="text-and-color-panel">
					<div id="button-size-slider3" class="size-slider" style="width: 25%;display:inline-block"></div>
					<input type="text" class="range-slider-font" id="nick_heading_ft_size" name="nick_heading_ft_size"  readonly="readonly">
					<span class="slider-text-span">Px</span>
				</td>
				
			</tr>
			
			<tr>
				<th><?php _e('Section Title Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_headeline_ft_clr" name="nick_headeline_ft_clr" type="text" value="<?php echo $nick_ls_design['nick_headeline_ft_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>
			
			<tr>
				<th><?php _e('Section Title Font Size','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr>
				<td class="text-and-color-panel">
					<div id="button-size-slider5" class="size-slider" style="width: 25%;display:inline-block"></div>
					<input type="text" class="range-slider-font" id="nick_title_ft_size" name="nick_title_ft_size"  readonly="readonly">
					<span class="slider-text-span">Px</span>
				</td>
				
			</tr>

			<tr>
				<th><?php _e('Description Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_desc_ft_clr" name="nick_desc_ft_clr" type="text" value="<?php echo $nick_ls_design['nick_desc_ft_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>
			<tr>
				<th><?php _e('Description Font Size','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr>
				<td class="text-and-color-panel">
					<div id="button-size-slider4" class="size-slider" style="width: 25%;display:inline-block"></div>
					<input type="text" class="range-slider-font" id="nick_desc_ft_size" name="nick_desc_ft_size"  readonly="readonly">
					<span class="slider-text-span">Px</span>
				</td>
				
			</tr>

			<tr>
				<th><?php _e('Countdown Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_countdown_ft_clr" name="nick_countdown_ft_clr" type="text" value="<?php echo $nick_ls_design['nick_countdown_ft_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>	

			<tr>
				<th><?php _e('Social Icon Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_social_clr" name="nick_social_clr" type="text" value="<?php echo $nick_ls_design['nick_social_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>

			<tr>
				<th><?php _e('Navigation Color','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						
					<input id="nick_navigation_clr" name="nick_navigation_clr" type="text" value="<?php echo $nick_ls_design['nick_navigation_clr'] ?>" class="my-color-field" data-default-color="#ffffff" />

				</td>
				
			</tr>			

			<tr>
				<th> <?php _e('Font Family','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr>
				<?php $nick_ft_st = $nick_ls_design['nick_ft_st']; ?>

				<td class="text-and-color-panel">
					<label class="nick-dropdown">
						<select id="nick_ft_st" class="nick-standard-dropdown" name="nick_ft_st"  >
							<optgroup label="Default Fonts">
								<option value="Arial"           <?php if($nick_ft_st == 'Arial' ) { echo "selected"; } ?>>Arial</option>
								<option value="Arial Black"    <?php if($nick_ft_st == 'Arial Black' ) { echo "selected"; } ?>>Arial Black</option>
								<option value="Courier New"     <?php if($nick_ft_st == 'Courier New' ) { echo "selected"; } ?>>Courier New</option>
								<option value="Georgia"         <?php if($nick_ft_st == 'Georgia' ) { echo "selected"; } ?>>Georgia</option>
								<option value="Grande"          <?php if($nick_ft_st == 'Grande' ) { echo "selected"; } ?>>Grande</option>
								<option value="Helvetica" 	<?php if($nick_ft_st == 'Helvetica' ) { echo "selected"; } ?>>Helvetica Neue</option>
								<option value="Impact"         <?php if($nick_ft_st == 'Impact' ) { echo "selected"; } ?>>Impact</option>
								<option value="Lucida"         <?php if($nick_ft_st == 'Lucida' ) { echo "selected"; } ?>>Lucida</option>
								<option value="Lucida Grande"         <?php if($nick_ft_st == 'Lucida Grande' ) { echo "selected"; } ?>>Lucida Grande</option>
								<option value="Open Sans"   <?php if($nick_ft_st == 'Open Sans' ) { echo "selected"; } ?>>Open Sans</option>
								<option value="OpenSansBold"   <?php if($nick_ft_st == 'OpenSansBold' ) { echo "selected"; } ?>>OpenSansBold</option>
								<option value="Palatino Linotype"       <?php if($nick_ft_st == 'Palatino Linotype' ) { echo "selected"; } ?>>Palatino</option>
								<option value="Sans"           <?php if($nick_ft_st == 'Sans' ) { echo "selected"; } ?>>Sans</option>
								<option value="sans-serif"           <?php if($nick_ft_st == 'sans-serif' ) { echo "selected"; } ?>>Sans-Serif</option>
								<option value="Tahoma"         <?php if($nick_ft_st == 'Tahoma' ) { echo "selected"; } ?>>Tahoma</option>
								<option value="Times New Roman"          <?php if($nick_ft_st == 'Times New Roman' ) { echo "selected"; } ?>>Times New Roman</option>
								<option value="Trebuchet"      <?php if($nick_ft_st == 'Trebuchet' ) { echo "selected"; } ?>>Trebuchet</option>
								<option value="Verdana"        <?php if($nick_ft_st == 'Verdana' ) { echo "selected"; } ?>>Verdana</option>
							</optgroup>
						</select>
					</label>	
				</td>
				
			</tr>
			<tr>
				<th> <?php _e('Custom CSS','"coming-soon-countdown"'); ?></th>
			</tr>
			<tr class="radio-span" >
				<td>
						<textarea rows="6"  class="pro_text" id="nick_ls_custom_css" name="nick_ls_custom_css" placeholder="<?php _e('Enter Your custom CSS Here',''); ?>"><?php echo $nick_ls_design['nick_ls_custom_css']; ?></textarea>
			
				</td>
				
			</tr>	
			<tr class="radio-span" >
				<td>
						<button class="portfolio_read_more_btn "  onclick="nick_save_data_design()"><?php _e('Save Settings','"coming-soon-countdown"'); ?></button>
						<button class="portfolio_demo_btn" onclick="nick_reset_data_design()" ><?php _e('Reset Default Setting','"coming-soon-countdown"'); ?></button>
				</td>
				
			</tr>	


		</table>
	
					
<script>
function nick_save_data_design(){
	jQuery("#nick_loding_image").show();
	var nick_ls_select_bg = jQuery('input:radio[name="nick_ls_select_bg"]:checked').val();
	var nick_ls_bg_clr = jQuery("#nick_ls_bg_clr").val();
	var nick_ls_bg_img = jQuery("#nick_ls_bg_img").val();
	var nick_cshead_clr = jQuery("#nick_cshead_clr").val();
	var nick_headeline_ft_clr = jQuery("#nick_headeline_ft_clr").val();
	var nick_title_ft_size = jQuery("#nick_title_ft_size").val();
	var nick_desc_ft_clr = jQuery("#nick_desc_ft_clr").val();
	var nick_countdown_ft_clr = jQuery("#nick_countdown_ft_clr").val();
	var nick_social_clr = jQuery("#nick_social_clr").val();
	var nick_navigation_clr = jQuery("#nick_navigation_clr").val();
	var nick_heading_ft_size = jQuery("#nick_heading_ft_size").val();
	var nick_desc_ft_size = jQuery("#nick_desc_ft_size").val();
	var nick_ls_custom_css = jQuery("#nick_ls_custom_css").val();
	var nick_ft_st = jQuery('#nick_ft_st option:selected').val();

 
 
 	jQuery.ajax(
            {
	    	    type: "POST",
		        url: location.href,
	
		        data : {
			    'action_design':'nick_sop_design',
			    'nick_ls_select_bg':nick_ls_select_bg,
			    'nick_ls_bg_clr':nick_ls_bg_clr,
			    'nick_ls_bg_img':nick_ls_bg_img,
			    'nick_cshead_clr':nick_cshead_clr,
			    'nick_headeline_ft_clr':nick_headeline_ft_clr,
			    'nick_title_ft_size':nick_title_ft_size,
			    'nick_desc_ft_clr':nick_desc_ft_clr,
			    'nick_countdown_ft_clr':nick_countdown_ft_clr,
			    'nick_social_clr':nick_social_clr,
			    'nick_navigation_clr':nick_navigation_clr,
			    'nick_heading_ft_size':nick_heading_ft_size,
			    'nick_desc_ft_size':nick_desc_ft_size,
			    'nick_ft_st':nick_ft_st,
			    'nick_ls_custom_css':nick_ls_custom_css,
			   
			   
			        },
                success : function(data){
					jQuery("#nick_loding_image").fadeOut();
					jQuery(".dialog-button").click();
					
			  
			   }			
            });
 
}
</script>
<?php
if(isset($_POST['action_design'])=="nick_sop_design") {
$nick_ls_select_bg       = sanitize_option('nick_ls_select_bg', $_POST['nick_ls_select_bg']);
$nick_ls_bg_clr          = sanitize_text_field($_POST['nick_ls_bg_clr']);
$nick_ls_bg_img          = sanitize_text_field($_POST['nick_ls_bg_img']);
$nick_cshead_clr          = sanitize_text_field($_POST['nick_cshead_clr']);
$nick_headeline_ft_clr          = sanitize_text_field($_POST['nick_headeline_ft_clr']);
$nick_title_ft_size          = sanitize_text_field($_POST['nick_title_ft_size']);
$nick_desc_ft_clr          = sanitize_text_field($_POST['nick_desc_ft_clr']);
$nick_countdown_ft_clr          = sanitize_text_field($_POST['nick_countdown_ft_clr']);
$nick_social_clr          = sanitize_text_field($_POST['nick_social_clr']);
$nick_navigation_clr          = sanitize_text_field($_POST['nick_navigation_clr']);
$nick_heading_ft_size          = sanitize_text_field($_POST['nick_heading_ft_size']);
$nick_desc_ft_size          = sanitize_text_field($_POST['nick_desc_ft_size']);
$nick_ft_st          = sanitize_text_field($_POST['nick_ft_st']);
$nick_ls_custom_css          = stripslashes($_POST['nick_ls_custom_css']);

			
			
$design = serialize( array(
	'nick_ls_select_bg' 		       => $nick_ls_select_bg,
	'nick_ls_bg_clr' 		       => $nick_ls_bg_clr,
	'nick_ls_bg_img' 		       => $nick_ls_bg_img,
	'nick_cshead_clr' 		       => $nick_cshead_clr,
	'nick_headeline_ft_clr' 		       => $nick_headeline_ft_clr,
	'nick_title_ft_size' 		       => $nick_title_ft_size,
	'nick_desc_ft_clr' 		       => $nick_desc_ft_clr,
	'nick_countdown_ft_clr' 		       => $nick_countdown_ft_clr,
	'nick_social_clr' 		       => $nick_social_clr,
	'nick_navigation_clr' 		       => $nick_navigation_clr,
	'nick_heading_ft_size' 		       => $nick_heading_ft_size,
	'nick_desc_ft_size' 		       => $nick_desc_ft_size,
	'nick_ft_st' 		       => $nick_ft_st,
	'nick_ls_custom_css' 		       => $nick_ls_custom_css,
	
	) );

update_option('nick_ls_design', $design);
}
 ?>
 
 
 <script>
 
	function nick_reset_data_design(){
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
			'reset_action_design':'action_design_reset',
			
		   
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
if(isset($_POST['reset_action_design'])=="action_design_reset") {
	
	$default_url =  NICK_LS_PLUGIN_URL.'assets/img/bg.jpg'; 
	
	$nick_design = serialize( array(
	'nick_ls_select_bg' 		       => "1",
	'nick_ls_bg_clr' 		       => "#1e73be",
	'nick_ls_bg_img' 		       => $default_url,
	'nick_cshead_clr' 		       => "#ffffff",
	'nick_headeline_ft_clr' 		       => "#ffffff",
	'nick_title_ft_size' 		       => "#ffffff",
	'nick_desc_ft_clr' 		       => "#ffffff",
	'nick_countdown_ft_clr' 		       => "#ffffff",
	'nick_social_clr' 		       => "#ffffff",
	'nick_navigation_clr' 		       => "#ffffff",
	'nick_heading_ft_size' 		       => "21",
	'nick_desc_ft_size' 		       => "21",
	'nick_ft_st' 		       => "Verdana",
	'nick_ls_custom_css' 		       => "",
	
	) );

	update_option('nick_ls_design', $nick_design);
}
 ?>